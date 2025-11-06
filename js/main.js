// ========================================
// Navegación - Menú Activo
// ========================================
const menuItems = document.querySelectorAll('.menu-item');

// Establecer el primer item como activo por defecto
if (menuItems.length > 0) {
    menuItems[0].classList.add('active');
}

// Cambiar item activo al hacer click
menuItems.forEach(item => {
    item.addEventListener('click', function(e) {
        // Remover clase active de todos los items
        menuItems.forEach(mi => mi.classList.remove('active'));
        // Agregar clase active al item clickeado
        this.classList.add('active');
    });
});

// ========================================
// Efectos de hover mejorados
// ========================================
menuItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ========================================
// Animación de entrada
// ========================================
window.addEventListener('DOMContentLoaded', () => {
    const headerSection = document.querySelector('.header-section');
    const imageSection = document.querySelector('.image-section');
    
    // Animación suave al cargar
    headerSection.style.opacity = '0';
    headerSection.style.transform = 'translateY(-20px)';
    
    imageSection.style.opacity = '0';
    imageSection.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        headerSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        headerSection.style.opacity = '1';
        headerSection.style.transform = 'translateY(0)';
    }, 100);
    
    setTimeout(() => {
        imageSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        imageSection.style.opacity = '1';
        imageSection.style.transform = 'scale(1)';
    }, 300);
});

// ========================================
// Efecto parallax suave en image section
// ========================================
const imageSection = document.querySelector('.image-section');
const placeholderImage = document.querySelector('.placeholder-image');

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

imageSection.addEventListener('mousemove', (e) => {
    const rect = imageSection.getBoundingClientRect();
    mouseX = (e.clientX - rect.left - rect.width / 2) / rect.width;
    mouseY = (e.clientY - rect.top - rect.height / 2) / rect.height;
});

function animate() {
    // Suavizado del movimiento
    currentX += (mouseX - currentX) * 0.1;
    currentY += (mouseY - currentY) * 0.1;
    
    if (placeholderImage) {
        placeholderImage.style.transform = `
            translate(${currentX * 20}px, ${currentY * 20}px)
            scale(1)
        `;
    }
    
    requestAnimationFrame(animate);
}

animate();

// Resetear posición cuando el mouse sale
imageSection.addEventListener('mouseleave', () => {
    mouseX = 0;
    mouseY = 0;
});

// ========================================
// Efecto de título dinámico (opcional)
// ========================================
const title = document.querySelector('.title');
const subtitle = document.querySelector('.subtitle');

if (title) {
    title.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    title.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}

// ========================================
// Animación de elementos al hacer hover
// ========================================
if (placeholderImage) {
    placeholderImage.addEventListener('click', function() {
        // Aquí puedes agregar funcionalidad para cargar una imagen
        console.log('📷 Espacio para cargar imagen');
        
        // Efecto de click
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
}

// ========================================
// Smooth scroll para enlaces (por si agregas más secciones)
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Responsive: detección de tamaño de pantalla
// ========================================
function checkScreenSize() {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        console.log('📱 Vista móvil activada');
    } else {
        console.log('🖥️ Vista escritorio activada');
    }
}

window.addEventListener('resize', checkScreenSize);
checkScreenSize();

// ========================================
// Log de inicio
// ========================================
console.log('✅ Portafolio IoT Solutions cargado correctamente');
console.log('🖤 Tema: Negro y Amarronado Elegante');

// ========================================
// Easter egg: Konami Code (opcional - divertido)
// ========================================
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiPattern.join('')) {
        document.body.style.filter = 'hue-rotate(180deg)';
        setTimeout(() => {
            document.body.style.filter = 'none';
        }, 3000);
        console.log('🎉 ¡Konami Code activado!');
    }
});