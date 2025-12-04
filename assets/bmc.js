// ☕ BOTÓN BUY ME A COFFEE CON TU SVG LOCAL – VERSIÓN DEFINITIVA
(() => {
    const coffee = document.createElement('a');
    coffee.href = 'https://www.buymeacoffee.com/josueg28';
    coffee.target = '_blank';
    coffee.rel = 'noopener';
    coffee.title = '¡Cómprame un café! ☕';
    coffee.setAttribute('aria-label', 'Buy me a coffee');

    // USAMOS TU ARCHIVO SVG LOCAL (está en docs/assets/bmc-button.svg)
    const img = document.createElement('img');
    img.src = '/assets/bmc-button.svg';  // ruta relativa correcta en MkDocs
    img.alt = 'Buy Me A Coffee';
    img.style.width = '36px';
    img.style.height = '36px';
    img.style.pointerEvents = 'none'; // para que el click vaya al <a>

    coffee.appendChild(img);

    // ESTILOS CLÁSICOS AMARILLOS (los que todos aman)
    Object.assign(coffee.style, {
        position: 'fixed',
        bottom: 'fixed',
        bottom: '24px',
        right: '24px',
        width: '64px',
        height: '64px',
        background: '#FFDD00',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        boxShadow: '0 8px 25px rgba(255, 221, 0, 0.5)',
        zIndex: '9999',
        transition: 'all 0.35s ease',
        border: '4px solid rgba(255,255,255,0.3)',
        cursor: 'pointer',
    });

    // EFECTOS CHINGONES
    coffee.addEventListener('mouseenter', () => {
        coffee.style.transform = 'scale(1.18)';
        coffee.style.boxShadow = '0 15px 35px rgba(255, 221, 0, 0.6)';
    });

    coffee.addEventListener('mouseleave', () => {
        coffee.style.transform = 'scale(1)';
        coffee.style.boxShadow = '0 8px 25px rgba(255, 221, 0, 0.5)';
    });

    // Pulso cada 8 segundos
    const pulse = () => {
        coffee.style.transform = 'scale(1.18)';
        coffee.style.boxShadow = '0 15px 35px rgba(255, 221, 0, 0.6)';
        setTimeout(() => {
            coffee.style.transform = 'scale(1)';
            coffee.style.boxShadow = '0 8px 25px rgba(255, 221, 0, 0.5)';
        }, 350);
    };
    setInterval(pulse, 8000);
    setTimeout(pulse, 2000);

    // Añadir al body cuando esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => document.body.appendChild(coffee));
    } else {
        document.body.appendChild(coffee);
    }
})();