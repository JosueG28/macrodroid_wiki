// ☕ BOTÓN BUY ME A COFFEE ULTRA CHINGÓN - ANIMACIONES PERROÑAS
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
        padding: 16px 12px;
        gap: 6px;
        justify-content: flex-start;
    `;

    // Logo oficial SVG
    const logo = document.createElement('img');
    logo.src = 'https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg';
    logo.alt = 'Buy Me a Coffee';
    logo.style.cssText = `
        height: 24px;
        width: auto;
        flex-shrink: 0;
        filter: brightness(0) invert(0);
        transition: filter 0.3s ease, transform 0.3s ease;
    `;

    // Texto en Inter
    const text = document.createElement('span');
    text.textContent = 'Buy me a coffee';
    text.style.cssText = `
        font-family: Inter, sans-serif;
        font-size: 14px;
        font-weight: 600;
        color: #000;
        white-space: nowrap;
        transition: transform 0.3s ease;
    `;

    buttonContent.appendChild(logo);
    buttonContent.appendChild(text);
    coffee.appendChild(buttonContent);

    // ESTILOS MINIMALISTAS DE LUJO (con animaciones base)
    Object.assign(coffee.style, {
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        width: 'auto',
        minWidth: '200px',
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
        animation: 'float 3s ease-in-out infinite, entrance 0.6s ease-out forwards',  // Bobble + entrada
        opacity: '0',  // Para la animación de entrada
        transformOrigin: 'center bottom',
    });

    // CSS con keyframes perrones
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-4px); }
        }
        @keyframes entrance {
            0% { opacity: 0; transform: scale(0.8) translateY(10px); }
            100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes shine {
            0% { box-shadow: inset 0 -100px 0 rgba(255,255,255,0.3); }
            100% { box-shadow: inset 200px -100px 0 rgba(255,255,255,0.3); }
        }
        @keyframes pulseRotate {
            0%, 100% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.05) rotate(2deg); }
        }
        a[href*="buymeacoffee"] { width: auto !important; min-width: 180px !important; }
        a[href*="buymeacoffee"]:hover::before {  /* Shine sweep en hover */
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            animation: shine 0.6s ease-in-out;
        }
        @media (max-width: 768px) {
            a[href*="buymeacoffee"] {
                bottom: 16px !important;
                right: 16px !important;
                max-width: 174px !important;
                height: 40px !important;
                animation-duration: 2.5s, 0.5s;  /* Más rápido en móvil */
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
                animation-duration: 2s, 0.4s;
            }
            a[href*="buymeacoffee"] img { height: 18px !important; }
            a[href*="buymeacoffee"] span { font-size: 11px !important; }
            a[href*="buymeacoffee"] div { padding: 10px 8px !important; gap: 4px !important; }
        }
    `;
    document.head.appendChild(style);

    // EFECTOS DE PUTA MADRE (upgraded)
    const pulse = () => {
        coffee.style.animation = 'none';  // Pausa float temporal
        coffee.style.transform = 'scale(1.05) rotate(1deg)';
        logo.style.transform = 'rotate(-1deg)';  // Logo gira opuesto
        text.style.transform = 'rotate(1deg)';   // Texto gira con botón
        setTimeout(() => {
            coffee.style.transform = 'scale(1) rotate(0deg)';
            coffee.style.animation = 'float 3s ease-in-out infinite, entrance 0.6s ease-out forwards';
            logo.style.transform = 'rotate(0deg)';
            text.style.transform = 'rotate(0deg)';
        }, 300);
    };

    coffee.addEventListener('mouseenter', () => {
        coffee.style.transform = 'scale(1.05) translateY(-2px) rotate(0.5deg)';
        coffee.style.boxShadow = '0 12px 30px rgba(255, 221, 0, 0.6)';
        logo.style.transform = 'rotate(-0.5deg) scale(1.1)';
        logo.style.filter = 'brightness(0) invert(0.2)';
        // Trigger shine
        coffee.style.position = 'relative';  // Para ::before
    });

    coffee.addEventListener('mouseleave', () => {
        coffee.style.transform = 'scale(1) translateY(0) rotate(0deg)';
        coffee.style.boxShadow = '0 8px 20px rgba(255, 221, 0, 0.4)';
        logo.style.transform = 'rotate(0deg) scale(1)';
        logo.style.filter = 'brightness(0) invert(0)';
    });

    // Pulso cada 6s (más frecuente para más acción)
    setInterval(pulse, 6000);
    setTimeout(pulse, 1500);  // Primer pulso más pronto

    // Añadir al DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => document.body.appendChild(coffee));
    } else {
        document.body.appendChild(coffee);
    }
})();