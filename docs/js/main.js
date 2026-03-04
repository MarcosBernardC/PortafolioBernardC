import translations from './translations.js';

const menuItems = document.querySelectorAll('.menu-item');
const sections = document.querySelectorAll('.content-section');
// docs/js/main.js
const API_URL = "https://portafoliobernardc.onrender.com";

// --- Language Switching Logic ---
const getInitialLanguage = () => {
    const saved = localStorage.getItem('portfolio-lang');
    if (saved) return saved;
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('en')) return 'en';
    return 'es';
};

let currentLang = getInitialLanguage();

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);
    document.getElementById('html-lang').setAttribute('lang', lang);
    
    const langBtnText = document.querySelector('.lang-text');
    if (langBtnText) {
        langBtnText.textContent = lang === 'es' ? 'EN' : 'ES';
    }

    // Traducir elementos estáticos
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            const icon = el.querySelector('i');
            if (icon) {
                el.innerHTML = '';
                el.appendChild(icon);
                el.appendChild(document.createTextNode(' ' + translations[lang][key]));
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    // RE-RENDERIZAR PROYECTOS: Importante para cambiar description_es por description_en
    loadProjects();
}

// --- Dynamic Projects Logic (La "magia" de Supabase con Caché Local) ---

// 1. Esta variable DEBE estar fuera para que persista entre cambios de idioma
let projectsData = []; 

async function loadProjects() {
    const container = document.getElementById("projects-container");
    if (!container) return;

    // 2. Si ya tenemos los datos en memoria, los usamos directamente (0 consultas extra)
    if (projectsData.length > 0) {
        renderProjects(projectsData, container);
        return;
    }

    // 3. Si es la primera vez, mostramos el Loader
    const loaderHTML = `
        <div class="projects-loader">
            <i class="fa-solid fa-spinner fa-spin"></i>
            <p data-i18n="loading_projects">${translations[currentLang]['loading_projects'] || 'Cargando proyectos...'}</p>
        </div>
    `;
    container.innerHTML = loaderHTML;

    try {
        // 4. Hacemos la ÚNICA petición necesaria
        const response = await fetch(`${API_URL}/projects`);
        if (!response.ok) throw new Error("API Offline");
        
        // Guardamos el resultado en nuestra variable global (caché)
        projectsData = await response.json();
        
        if (projectsData.length === 0) {
            container.innerHTML = `<p style="color:gray; text-align:center; width:100%; grid-column: 1/-1;">No hay proyectos disponibles por ahora.</p>`;
            return;
        }

        renderProjects(projectsData, container);
    } catch (error) {
        console.error("❌ Error:", error);
        // Reseteamos caché en error para permitir reintento limpio
        projectsData = []; 
        container.innerHTML = `
            <div style="color:gray; text-align:center; width:100%; grid-column: 1/-1; padding: 40px;">
                <i class="fa-solid fa-triangle-exclamation" style="font-size: 2rem; margin-bottom: 10px;"></i>
                <p>Modo Offline: No se pudieron cargar los proyectos.</p>
                <button onclick="loadProjects()" class="cv-button" style="margin-top: 15px; display: inline-flex;">
                    <i class="fa-solid fa-rotate-right" style="margin-right:8px;"></i> Reintentar
                </button>
            </div>
        `;
    }
}

function renderProjects(projects, container) {
    container.innerHTML = ""; 
    projects.forEach(project => {
        // Seleccionamos los datos de Supabase según el idioma
        const desc = currentLang === 'es' ? project.description_es : project.description_en;
        const loc = currentLang === 'es' ? project.location_es : project.location_en;
        
        // Seleccionamos etiquetas estáticas de translations.js
        const labelProgress = translations[currentLang]['project_progress'] || 'Progreso';
        const labelRepo = translations[currentLang]['project_repo'] || 'VER REPOSITORIO';
        const labelDetails = translations[currentLang]['project_details'] || 'Ver Detalles';
        const labelPending = translations[currentLang]['p_date_pending'] || 'Pendiente';

        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <div class="status-badge status-${project.status_badge}">${project.status_badge}</div>
            <div class="card-header">
                <i class="fa-solid ${project.card_icon} card-icon" style="color: ${project.icon_color || 'inherit'};"></i>
            </div>
            <h3 class="card-title">${project.title}</h3>
            <p class="card-description">${desc || ''}</p>
            
            <div style="font-size: 0.85rem; color: #888; margin-bottom: 10px;">
                <i class="fa-solid fa-location-dot"></i> <span>${loc || ''}</span>
            </div>

            <div class="card-badges">
                ${project.tech_stack ? project.tech_stack.map(t => `<span class="badge">${t}</span>`).join('') : ''}
            </div>

            <div class="progress-section">
                <div class="progress-label">
                    <span>${labelProgress}</span>
                    <span>${project.progress_percent}%</span>
                </div>
                <div class="progress-track">
                    <div class="progress-fill" style="width: ${project.progress_percent}%; background: ${project.progress_color || 'var(--accent-blue)'};"></div>
                </div>
            </div>

            <div class="progress-details">
                <ul class="checklist">
                    ${project.checklist ? project.checklist.map(item => `
                        <li class="checklist-item">
                            <div class="checklist-info">
                                <i class="fa-solid ${item.done ? 'fa-check checklist-icon done' : (item.in_progress ? 'fa-spinner fa-spin checklist-icon in-progress' : 'fa-regular fa-circle checklist-icon pending')}"></i>
                                <span class="checklist-text">${currentLang === 'es' ? item.text_es : item.text_en}</span>
                            </div>
                            <span class="checklist-date">${item.date || (item.done ? 'DONE' : labelPending)}</span>
                        </li>
                    `).join('') : ''}
                </ul>

                <a href="${project.repo_url}" target="_blank" class="cv-button" style="margin: 15px 0 0 0; text-decoration: none; justify-content: center; width: 100%; box-sizing: border-box; display: flex;">
                    <i class="fa-brands fa-github" style="margin-right: 8px;"></i> <span>${labelRepo}</span>
                </a>
            </div>

            <button class="details-toggle" onclick="toggleDetails(this)">
                ${labelDetails} <i class="fa-solid fa-chevron-down"></i>
            </button>
        `;
        container.appendChild(card);
    });
}

// --- Resto de tu lógica original (PDF, Menú, etc.) ---
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
});

const langToggle = document.getElementById('lang-toggle');
if (langToggle) {
    langToggle.addEventListener('click', () => {
        const newLang = currentLang === 'es' ? 'en' : 'es';
        setLanguage(newLang);
    });
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuItems.forEach(mi => mi.classList.remove('active'));
        item.classList.add('active');
        const target = item.dataset.target;
        sections.forEach(sec => {
            if (sec.id === target) {
                sec.classList.add('active');
            } else {
                sec.classList.remove('active');
            }
        });
    });
});

window.toggleDetails = function(button) {
    const card = button.closest('.project-card');
    const details = card.querySelector('.progress-details');
    const icon = button.querySelector('i');
    details.classList.toggle('active');
    button.classList.toggle('active');
    const isActive = button.classList.contains('active');
    const textKey = isActive ? 'project_details_active' : 'project_details';
    button.innerHTML = translations[currentLang][textKey] + ' ';
    button.appendChild(icon);
}

window.toggleLegend = function() {
    const wrapper = document.querySelector('.projects-wrapper');
    const legend = document.getElementById('global-legend');
    const button = document.querySelector('.legend-toggle');
    const icon = button.querySelector('i:last-child');

    // Toggle wrapper state for scaling effect
    if (wrapper) wrapper.classList.toggle('legend-open');

    legend.classList.toggle('active');
    button.classList.toggle('active');
}

// PDF Viewer Logic
const pdfModal = document.getElementById('pdf-modal');
const pdfFrame = document.getElementById('pdf-frame');
const closeBtn = document.querySelector('.pdf-close-btn');
const resumeBtn = document.getElementById('resume-btn');

function openPDFModal(pdfUrl) {
    if (pdfModal && pdfFrame) {
        pdfFrame.src = pdfUrl;
        pdfModal.classList.add('active');
        // Disable body scroll safely
        document.body.style.overflow = 'hidden';
    }
}

function closePDFModal() {
    if (pdfModal && pdfFrame) {
        pdfModal.classList.remove('active');
        // Clear src to stop loading/playing
        setTimeout(() => { pdfFrame.src = ''; }, 300); 
        document.body.style.overflow = '';
    }
}

if (resumeBtn) {
    resumeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const resumeFile = currentLang === 'es' 
            ? 'assets/Marcos_Bernard_resume_spanish.pdf' 
            : 'assets/Marcos_Bernard_resume_english.pdf';
        openPDFModal(resumeFile);
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', closePDFModal);
}

if (pdfModal) {
    pdfModal.addEventListener('click', (e) => {
        if (e.target === pdfModal) {
            closePDFModal();
        }
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && pdfModal && pdfModal.classList.contains('active')) {
        closePDFModal();
    }
});

// --- Exponer funciones al scope global para que el HTML y la consola las vean ---
window.loadProjects = loadProjects;
window.setLanguage = setLanguage;
window.toggleDetails = toggleDetails;
window.toggleLegend = toggleLegend;