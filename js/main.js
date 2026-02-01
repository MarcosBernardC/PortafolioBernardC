const menuItems = document.querySelectorAll('.menu-item');
const sections = document.querySelectorAll('.content-section');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Menú activo
        menuItems.forEach(mi => mi.classList.remove('active'));
        item.classList.add('active');

        const target = item.dataset.target;

        sections.forEach(sec => {
            if (sec.id === target) {
                sec.classList.add('active');

                // Animaciones diferenciadas por sección
                if (target === 'home') {
                    const phrase = sec.querySelector('.main-phrase');
                    if (phrase) {
                        phrase.style.opacity = 0;
                        phrase.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            phrase.style.opacity = 1;
                            phrase.style.transform = 'translateY(0)';
                        }, 50);
                    }
                } else if (target === 'about') {
                    // Animación suave para sección About
                    const container = sec.querySelector('.about-container');
                    if (container) {
                        container.style.opacity = 0;
                        container.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            container.style.opacity = 1;
                            container.style.transform = 'translateY(0)';
                        }, 50);
                    }
                } else if (target === 'process') {
                    // Animación suave para sección Process
                    const container = sec.querySelector('.process-container');
                    if (container) {
                        container.style.opacity = 0;
                        container.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            container.style.opacity = 1;
                            container.style.transform = 'translateY(0)';
                        }, 50);
                    }
                } else {
                    // Efecto slide para otras secciones
                    const content = sec.firstElementChild;
                    if (content) {
                        content.style.opacity = 0;
                        content.style.transform = 'translateY(30px)';
                        setTimeout(() => {
                            content.style.opacity = 1;
                            content.style.transform = 'translateY(0)';
                        }, 50);
                    }
                }

            } else {
                sec.classList.remove('active');
            }
        });
    });
});

/* ========================================
   Agenda Logic
   ======================================== */
const projectAgendas = {
    'AgriNode Lite': [
        { date: 'Fase 1: MVP (Low Cost)', title: 'Prototipado Iterativo', desc: 'Sistema completo con herramientas Open Source. Sensor PIC16F1939 + App Python Básica + Dashboard Free-Tier.', status: 'completed' },
        { date: 'Fase 2: Spirale (Viabilidad)', title: 'Desarrollo de Campo', desc: 'Evaluación técnica y económica bajo estrés real. Transición a PCB y optimización de software.', status: 'current' },
        { date: 'Fase 3: V-Model XT', title: 'Estandarización', desc: 'Consolidación profesional. Trazabilidad total, planes de prueba y congelamiento de diseño.', status: 'pending' }
    ]
};

function openAgenda(projectName) {
    const modal = document.getElementById('agenda-modal');
    const title = document.getElementById('modal-project-title');
    const timeline = document.getElementById('modal-timeline');

    title.textContent = `Agenda: ${projectName}`;
    timeline.innerHTML = '';

    const agenda = projectAgendas[projectName];

    if (!agenda) {
        timeline.innerHTML = '<p style="color:var(--slate-gray);">Agenda no disponible para este proyecto.</p>';
    } else {
        agenda.forEach(item => {
            const div = document.createElement('div');
            div.className = `timeline-item ${item.status}`;
            div.innerHTML = `
                <div class="timeline-marker"></div>
                <div class="timeline-date">${item.date}</div>
                <div class="timeline-content">
                    <h4>${item.title}</h4>
                    <p>${item.desc}</p>
                </div>
            `;
            timeline.appendChild(div);
        });
    }

    modal.classList.add('active');
}

function closeAgenda() {
    document.getElementById('agenda-modal').classList.remove('active');
}

const agendaModal = document.getElementById('agenda-modal');
if (agendaModal) {
    agendaModal.addEventListener('click', (e) => {
        if (e.target.id === 'agenda-modal') {
            closeAgenda();
        }
    });
}

function toggleDetails(button) {
    const card = button.closest('.project-card');
    const details = card.querySelector('.progress-details');
    const icon = button.querySelector('i');

    details.classList.toggle('active');
    button.classList.toggle('active');
}

function toggleLegend() {
    const legend = document.getElementById('global-legend');
    const button = document.querySelector('.legend-toggle');
    const icon = button.querySelector('i:last-child');

    legend.classList.toggle('active');
    button.classList.toggle('active');
}
