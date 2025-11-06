// ☕ BOTÓN BUY ME A COFFEE ULTRA CHINGÓN - LOGO OFICIAL SVG VIA IMG (SIN EXCESO AMARILLO)
(() => {
    // Carga font Inter de Google Fonts (solo si no está)
    if (!document.querySelector('link[href*="inter.googleapis"]')) {
        const fontLink = document.createElement('link');
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap';
        fontLink.rel = 'stylesheet';
        document.head.appendChild(fontLink);
    }

    const coffee = document.createElement('a');
    coffee.href = 'https://www.buymeacoffee.com/josueg28';
    coffee.target = '_blank';
    coffee.rel = 'noopener';
    coffee.title = 'Buy me a coffee! ☕';
    coffee.setAttribute('aria-label', 'Buy me a coffee - ¡Apoya mi trabajo!');

    // Contenedor para logo + texto
    const buttonContent = document.createElement('div');
    buttonContent.style.cssText = `
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 16px 12px;  /* Más padding izq para logo, menos der para ceñir */
        gap: 6px;  /* Gap más chico para apretar */
        justify-content: flex-start;  /* Empuja todo a la izquierda, sin expansión extra */
    `;

    // Logo oficial SVG (nítido, sin distorsión)
    const logo = document.createElement('img');
    logo.src = 'https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg';
    logo.alt = 'Buy Me a Coffee';
    logo.style.cssText = `
        height: 24px;
        width: auto;
        flex-shrink: 0;
        filter: brightness(0) invert(0);  /* Negro para fondo amarillo */
    `;

    // Texto en Inter (sin flex:1 para no expandir)
    const text = document.createElement('span');
    text.textContent = 'Buy me a coffee';
    text.style.cssText = `
        font-family: Inter, sans-serif;
        font-size: 14px;
        font-weight: 600;
        color: #000;
        white-space: nowrap;
    `;

    buttonContent.appendChild(logo);
    buttonContent.appendChild(text);
    coffee.appendChild(buttonContent);

    // ESTILOS MINIMALISTAS DE LUJO (ancho auto para ceñir al contenido)
    Object.assign(coffee.style, {
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        width: 'auto',
        minWidth: '200px',  /* Mínimo para no achicarse en textos cortos */
        height: '50px',
        background: 'linear-gradient(135deg, #FFDD00, #FFD700)',
        borderRadius: '25px',
        boxShadow: '0 8px 20px rgba(255, 221, 0, 0.4)',
        zIndex: '9999',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        backdropFilter: 'blur(10px)',
        border: '3px solid rgba(255,255,255,0.3)',
        cursor: 'pointer',
        transform: 'translateY(0)',
        textDecoration: 'none',
        overflow: 'hidden',
    });

    // Responsive para móviles (max-width para no exceder, ancho auto)
    const style = document.createElement('style');
    style.textContent = `
        a[href*="buymeacoffee"] { width: auto !important; min-width: 180px !important; }
        @media (max-width: 768px) {
            a[href*="buymeacoffee"] {
                bottom: 16px !important;
                right: 16px !important;
                max-width: 174px !important;
                height: 40px !important;
            }
            a[href*="buymeacoffee"] img { height: 20px !important; }
            a[href*="buymeacoffee"] span { font-size: 12px !important; }
            a[href*="buymeacoffee"] div { padding: 12px 10px !important; gap: 5px !important; }
        }
        @media (max-width: 480px) {
            a[href*="buymeacoffee"] {
                max-width: 150px !important;
                height: 35px !important;
                min-width: 140px !important;
            }
            a[href*="buymeacoffee"] img { height: 18px !important; }
            a[href*="buymeacoffee"] span { font-size: 11px !important; }
            a[href*="buymeacoffee"] div { padding: 10px 8px !important; gap: 4px !important; }
        }
    `;
    document.head.appendChild(style);

    // EFECTOS DE PUTA MADRE
    const pulse = () => {
        coffee.style.transform = 'scale(1.05)';
        setTimeout(() => coffee.style.transform = 'scale(1)', 300);
    };

    coffee.addEventListener('mouseenter', () => {
        coffee.style.transform = 'scale(1.05) translateY(-2px)';
        coffee.style.boxShadow = '0 12px 30px rgba(255, 221, 0, 0.6)';
        logo.style.filter = 'brightness(0) invert(0.2)';  // Sutil cambio en hover
    });

    coffee.addEventListener('mouseleave', () => {
        coffee.style.transform = 'scale(1) translateY(0)';
        coffee.style.boxShadow = '0 8px 20px rgba(255, 221, 0, 0.4)';
        logo.style.filter = 'brightness(0) invert(0)';
    });

    // Pulso cada 8s
    setInterval(pulse, 8000);
    setTimeout(pulse, 2000);

    // Añadir al DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => document.body.appendChild(coffee));
    } else {
        document.body.appendChild(coffee);
    }
})();