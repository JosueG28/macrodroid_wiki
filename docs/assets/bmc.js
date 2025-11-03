// ☕ BOTÓN BUY ME A COFFEE ULTRA CHINGÓN
(() => {
    const coffee = document.createElement('a');
    coffee.href = 'https://www.buymeacoffee.com/josueg28';
    coffee.target = '_blank';
    coffee.rel = 'noopener';
    coffee.title = 'Buy me a coffee! ☕';
    coffee.setAttribute('aria-label', 'Buy me a coffee');

    // Icono SVG puro (sin dependencias)
    coffee.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
            <line x1="6" y1="1" x2="6" y2="4"></line>
            <line x1="10" y1="1" x2="10" y2="4"></line>
            <line x1="14" y1="1" x2="14" y2="4"></line>
        </svg>
    `;

    // ESTILOS MINIMALISTAS DE LUJO
    Object.assign(coffee.style, {
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        width: '56px',
        height: '56px',
        background: '#FFDD00',
        color: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        boxShadow: '0 8px 20px rgba(255, 221, 0, 0.4)',
        zIndex: '9999',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        backdropFilter: 'blur(10px)',
        border: '3px solid rgba(255,255,255,0.3)',
        cursor: 'pointer',
        transform: 'translateY(0)',
    });

    // EFECTOS DE PUTA MADRE
    const pulse = () => {
        coffee.style.transform = 'scale(1.15)';
        setTimeout(() => coffee.style.transform = 'scale(1)', 300);
    };

    coffee.addEventListener('mouseenter', () => {
        coffee.style.transform = 'scale(1.15)';
        coffee.style.boxShadow = '0 12px 30px rgba(255, 221, 0, 0.6)';
    });

    coffee.addEventListener('mouseleave', () => {
        coffee.style.transform = 'scale(1)';
        coffee.style.boxShadow = '0 8px 20px rgba(255, 221, 0, 0.4)';
    });

    // Pulso sutil cada 4 segundos
    setInterval(pulse, 8000);
    setTimeout(pulse, 2000); // primer pulso al cargar

    // Solo lo añadimos cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => document.body.appendChild(coffee));
    } else {
        document.body.appendChild(coffee);
    }
})();
