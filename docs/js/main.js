import translations from './translations.js';

const menuItems = document.querySelectorAll('.menu-item');
const sections = document.querySelectorAll('.content-section');
// --- Language and Theme Logic ---
const API_URL = "https://portafoliobernardc.onrender.com";

const STATUS_ORDER = ['V-MODEL', 'SPIRAL', 'MVP', 'DEVELOPING', 'PENDING'];

let activeFilter = 'All';

// ── Interpolador de color por progreso
const PROGRESS_PALETTE = [
    { pct: 0,   r: 220, g: 38,  b: 38  },  // Rojo
    { pct: 25,  r: 234, g: 108, b: 13  },  // Naranja
    { pct: 50,  r: 234, g: 197, b: 13  },  // Amarillo
    { pct: 75,  r: 100, g: 200, b: 60  },  // Verde claro
    { pct: 100, r: 34,  g: 197, b: 94  },  // Verde
];

function getProgressColor(pct) {
    // Clamp entre 0 y 100
    pct = Math.min(100, Math.max(0, pct));

    // Encontrar el segmento donde cae el porcentaje
    let lo = PROGRESS_PALETTE[0];
    let hi = PROGRESS_PALETTE[PROGRESS_PALETTE.length - 1];

    for (let i = 0; i < PROGRESS_PALETTE.length - 1; i++) {
        if (pct >= PROGRESS_PALETTE[i].pct && pct <= PROGRESS_PALETTE[i + 1].pct) {
            lo = PROGRESS_PALETTE[i];
            hi = PROGRESS_PALETTE[i + 1];
            break;
        }
    }

    // Factor de interpolación dentro del segmento (0.0 → 1.0)
    const range = hi.pct - lo.pct;
    const t = range === 0 ? 0 : (pct - lo.pct) / range;

    const r = Math.round(lo.r + (hi.r - lo.r) * t);
    const g = Math.round(lo.g + (hi.g - lo.g) * t);
    const b = Math.round(lo.b + (hi.b - lo.b) * t);

    return `rgb(${r}, ${g}, ${b})`;
}

// 1. Theme (Dark Mode) Logic
function updateThemeIcon(isDark) {
    const toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;
    const icon = toggleBtn.querySelector('i');
    if (isDark) {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
}

function initTheme() {
    const savedTheme = localStorage.getItem('user-theme');
    const systemHour = new Date().getHours();
    let isDark = false;

    if (savedTheme) {
        isDark = savedTheme === 'dark';
    } else {
        // Automation: 18:00 (6 PM) to 06:00 (6 AM)
        isDark = systemHour >= 18 || systemHour < 6;
    }

    if (isDark) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
    updateThemeIcon(isDark);
}

function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('user-theme', isDark ? 'dark' : 'light');
    updateThemeIcon(isDark);
}
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
        // projectsData = await response.json();
        
        projectsData = await response.json();
        projectsData.sort((a, b) =>
            (STATUS_ORDER.indexOf(a.status_badge) ?? 99) -
            (STATUS_ORDER.indexOf(b.status_badge) ?? 99)
        );

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
    // Construir barra de filtros (solo la primera vez)
    if (!document.getElementById('filter-bar')) {
        const allTags = ['All', ...new Set(projects.flatMap(p => p.tags || []))];
        const bar = document.createElement('div');
        bar.id = 'filter-bar';
        bar.className = 'filter-bar';
        allTags.forEach(tag => {
            const btn = document.createElement('button');
            btn.className = 'filter-btn' + (tag === activeFilter ? ' active' : '');
            btn.textContent = tag;
            btn.addEventListener('click', () => {
                activeFilter = tag;
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderProjects(projectsData, container);
            });
            bar.appendChild(btn);
        });
        container.before(bar);
    }

    // Filtrar proyectos
    const visible = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.tags && p.tags.includes(activeFilter));

    container.innerHTML = '';

    if (visible.length === 0) {
        container.innerHTML = `<p style="color:gray; text-align:center; width:100%; grid-column:1/-1; padding: 40px 0;">No hay proyectos en esta categoría.</p>`;
        return;
    }

    visible.forEach(project => {
        const desc  = currentLang === 'es' ? project.description_es : project.description_en;
        const loc   = currentLang === 'es' ? project.location_es   : project.location_en;

        const labelProgress = translations[currentLang]['project_progress'] || 'Progreso';
        const labelRepo     = translations[currentLang]['project_repo']     || 'VER REPOSITORIO';
        const labelDetails  = translations[currentLang]['project_details']  || 'Ver Detalles';
        const labelPending  = translations[currentLang]['p_date_pending']   || 'Pendiente';

        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.setProperty('--accent-color', getProgressColor(project.progress_percent));
        card.style.setProperty('--prog-width', `${project.progress_percent}%`);

        card.innerHTML = `
            <div class="status-badge">${project.status_badge}</div>
            <div class="card-header">
                <i class="fa-solid ${project.card_icon} card-icon" style="color: var(--accent-color);"></i>
            </div>
            <h3 class="card-title">${project.title}</h3>
            <p class="card-description">${desc || ''}</p>

            <div style="font-size:0.85rem; color:#888; margin-bottom:10px;">
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
                    <div class="progress-fill"></div>
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
                <a href="${project.repo_url}" target="_blank" class="cv-button" style="margin:15px 0 0 0; text-decoration:none; justify-content:center; width:100%; box-sizing:border-box; display:flex;">
                    <i class="fa-brands fa-github" style="margin-right:8px;"></i> <span>${labelRepo}</span>
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
    initTheme();
    setLanguage(currentLang);
});

const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

const langToggle = document.getElementById('lang-toggle');
if (langToggle) {
    langToggle.addEventListener('click', () => {
        const newLang = currentLang === 'es' ? 'en' : 'es';
        setLanguage(newLang);
    });
}

// Hamburger Menu Logic
const menuToggle = document.getElementById('menu-toggle');
const headerSection = document.querySelector('.header-section');
const menuOverlay = document.getElementById('menu-overlay');

if (menuToggle && headerSection) {
    const toggleMenu = (forceClose = false) => {
        const isOpen = headerSection.classList.contains('menu-open');
        const shouldOpen = forceClose ? false : !isOpen;

        headerSection.classList.toggle('menu-open', shouldOpen);
        document.body.classList.toggle('menu-active', shouldOpen);

        const icon = menuToggle.querySelector('i');
        if (icon) {
            if (shouldOpen) {
                icon.classList.replace('fa-bars', 'fa-xmark');
            } else {
                icon.classList.replace('fa-xmark', 'fa-bars');
            }
        }
    };

    menuToggle.addEventListener('click', () => toggleMenu());

    if (menuOverlay) {
        menuOverlay.addEventListener('click', () => toggleMenu(true));
    }
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

        // Close menu on mobile after selection
        if (headerSection && headerSection.classList.contains('menu-open')) {
            headerSection.classList.remove('menu-open');
            document.body.classList.remove('menu-active');
            const icon = menuToggle.querySelector('i');
            if (icon) icon.classList.replace('fa-xmark', 'fa-bars');
        }
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