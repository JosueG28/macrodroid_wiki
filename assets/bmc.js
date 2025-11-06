// ☕ BOTÓN BUY ME A COFFEE ULTRA CHINGÓN - ANIMACIONES PERROÑAS (FIX TOUCH ANDROID)
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

    // ESTILOS MINIMALISTAS DE LUJO (sin backdrop-filter para fix touch)
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
        border: '3px solid rgba(255,255,255,0.3)',
        cursor: 'pointer',
        transform: 'translateY(0)',
        textDecoration: 'none',
        overflow: 'hidden',
        animation: 'float 3s ease-in-out infinite, entrance 0.6s ease-out forwards',
        opacity: '0',
        transformOrigin: 'center bottom',
        touchAction: 'manipulation',  // Fix clave para taps en Android
        pointerEvents: 'auto',       // Asegura clics/taps
        userSelect: 'none',          // Evita selección accidental en touch
    });

    // CSS con keyframes perrones (shine simplificado sin ::before para no joder touch)
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
            0% { filter: brightness(1); }
            50% { filter: brightness(1.2); }
            100% { filter: brightness(1); }
        }
        @keyframes pulseRotate {
            0%, 100% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.05) rotate(2deg); }
        }
        a[href*="buymeacoffee"] {
            width: auto !important;
            min-width: 180px !important;
            touch-action: manipulation !important;  /* Fix global para touch */
            -webkit-tap-highlight-color: transparent;  /* Quita el highlight azul en Android */
        }
        a[href*="buymeacoffee"]:active {  /* Feedback táctil en tap */
            transform: scale(0.98) !important;
        }
        @media (max-width: 768px) {
            a[href*="buymeacoffee"] {
                bottom: 16px !important;
                right: 16px !important;
                max-width: 174px !important;
                height: 40px !important;
                animation-duration: 2.5s, 0.5s;
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
        /* Shine en hover solo para desktop, no interfiere en touch */
        @media (hover: hover) {
            a[href*="buymeacoffee"]:hover {
                animation: shine 0.6s ease-in-out;
            }
        }
    `;
    document.head.appendChild(style);

    // EFECTOS DE PUTA MADRE (simplificados para no bloquear touch)
    const pulse = () => {
        coffee.style.animation = 'none';
        coffee.style.transform = 'scale(1.05) rotate(1deg)';
        logo.style.transform = 'rotate(-1deg)';
        text.style.transform = 'rotate(1deg)';
        setTimeout(() => {
            coffee.style.transform = 'scale(1) rotate(0deg)';
            coffee.style.animation = 'float 3s ease-in-out infinite, entrance 0.6s ease-out forwards';
            logo.style.transform = 'rotate(0deg)';
            text.style.transform = 'rotate(0deg)';
        }, 300);
    };

    coffee.addEventListener('mouseenter', () => {
        if (window.matchMedia('(hover: hover)').matches) {  // Solo en desktop
            coffee.style.transform = 'scale(1.05) translateY(-2px) rotate(0.5deg)';
            coffee.style.boxShadow = '0 12px 30px rgba(255, 221, 0, 0.6)';
            logo.style.transform = 'rotate(-0.5deg) scale(1.1)';
            logo.style.filter = 'brightness(0) invert(0.2)';
        }
    });

    coffee.addEventListener('mouseleave', () => {
        if (window.matchMedia('(hover: hover)').matches) {
            coffee.style.transform = 'scale(1) translateY(0) rotate(0deg)';
            coffee.style.boxShadow = '0 8px 20px rgba(255, 221, 0, 0.4)';
            logo.style.transform = 'rotate(0deg) scale(1)';
            logo.style.filter = 'brightness(0) invert(0)';
        }
    });

    // Evento touch extra para feedback en Android
    coffee.addEventListener('touchstart', (e) => {
        e.preventDefault();  // Evita scroll accidental
        coffee.style.transform = 'scale(0.98)';
    }, { passive: false });

    coffee.addEventListener('touchend', () => {
        coffee.style.transform = 'scale(1)';
    });

    // Pulso cada 6s
    setInterval(pulse, 6000);
    setTimeout(pulse, 1500);

    // Añadir al DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => document.body.appendChild(coffee));
    } else {
        document.body.appendChild(coffee);
    }
})();