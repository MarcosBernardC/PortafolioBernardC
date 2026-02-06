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

// Pruned: Agenda modal logic removed.

function toggleDetails(button) {
    const card = button.closest('.project-card');
    const details = card.querySelector('.progress-details');
    const icon = button.querySelector('i');

    details.classList.toggle('active');
    button.classList.toggle('active');
}

function toggleLegend() {
    const wrapper = document.querySelector('.projects-wrapper');
    const legend = document.getElementById('global-legend');
    const button = document.querySelector('.legend-toggle');
    const icon = button.querySelector('i:last-child');

    // Toggle wrapper state for scaling effect
    if (wrapper) wrapper.classList.toggle('legend-open');

    legend.classList.toggle('active');
    button.classList.toggle('active');
}
