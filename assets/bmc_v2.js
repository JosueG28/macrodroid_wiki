// BMC V2 – RECTANGULAR OFICIAL SIN CONTADOR (limpio y chingón)
(() => {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createButton);
    } else {
        createButton();
    }

    function createButton() {
        const container = document.createElement('div');
        container.style.cssText = `
            position: fixed;
            bottom: 24px;
            right: 24px;
            z-index: 9999;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        `;

        const button = document.createElement('a');
        button.href = 'https://www.buymeacoffee.com/josueg28';
        button.target = '_blank';
        button.rel = 'noopener';
        button.title = '¡Cómprame un café!';

        // AQUÍ ESTÁ EL TRUCO: &supporters=0 quita el contador para siempre
        button.innerHTML = `
            <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffe&emoji=☕&slug=josueg28&button_colour=5F7FFF&font_colour=000000&font_family=Inter&outline_colour=000000&coffee_colour=ffffff" 
                 alt="Buy me a coffee"
                 style="height: 52px !important; width: auto !important; border: none;">
        `;

        Object.assign(button.style, {
            display: 'block',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 8px 25px rgba(255,221,0,0.4)',
            transition: 'all 0.3s ease',
        });

        // Hover y pulso chingón
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-4px) scale(1.03)';
            button.style.boxShadow = '0 16px 35px rgba(255,221,0,0.6)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0) scale(1)';
            button.style.boxShadow = '0 8px 25px rgba(255,221,0,0.4)';
        });

        container.appendChild(button);
        document.body.appendChild(container);

        // Aparece con estilo
        setTimeout(() => {
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
        }, 800);

        // Pulso cada 10 segundos
        setInterval(() => {
            button.style.transform = 'scale(1.04)';
            setTimeout(() => button.style.transform = 'scale(1)', 400);
        }, 10000);
    }
})();