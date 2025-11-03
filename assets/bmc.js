// ☕ BOTÓN CAFECITO LEGENDARIO - by Grok & Josueg28
(() => {
    const cafecito = document.createElement('div');
    cafecito.innerHTML = `
        <a href="https://www.buymeacoffee.com/josueg28" target="_blank" rel="noopener" 
           aria-label="¡Regálame un cafecito!" 
           style="all:unset; display:block; width:100%; height:100%; cursor:pointer;">
           
           <!-- Icono café -->
           <svg class="coffee-icon" viewBox="0 0 24 24" width="28" height="28">
               <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z
                      M6 1v3m4-3v3m4-3v3" 
                     fill="none" stroke="currentColor" stroke-width="2.2" 
                     stroke-linecap="round" stroke-linejoin="round"/>
           </svg>

           <!-- Texto que aparece en hover -->
           <span class="coffee-text">Cafecito</span>

           <!-- Vapor mágico -->
           <div class="steam">
               <span></span><span></span><span></span>
           </div>
        </a>
    `;

    // Estilos en línea (todo en un solo archivo)
    const style = document.createElement('style');
    style.textContent = `
        .josue-coffee-btn {
            position: fixed;
            bottom: 24px;
            right: 24px;
            width: 64px;
            height: 64px;
            z-index: 9999;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.2);
        }
        .josue-coffee-btn a {
            width: 100%; height: 100%;
            border-radius: 50%;
            background: #FFDD00;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(255, 221, 0, 0.4);
            border: 3px solid rgba(255,255,255,0.25);
            backdrop-filter: blur(12px);
        }
        /* Icono */
        .coffee-icon {
            position: relative;
            z-index: 2;
            transition: transform 0.3s ease;
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
        }
        /* Texto oculto */
        .coffee-text {
            position: absolute;
            font-weight: 800;
            font-size: 11px;
            letter-spacing: 0.5px;
            color: #000;
            text-transform: uppercase;
            opacity: 0;
            transform: translateY(8px);
            transition: all 0.35s ease;
            pointer-events: none;
            z-index: 3;
        }
        /* Vapor */
        .steam {
            position: absolute;
            bottom: 50%;
            left: 50%;
            transform: translateX(-50%);
            pointer-events: none;
            opacity: 0;
        }
        .steam span {
            display: block;
            width: 4px;
            height: 12px;
            background: rgba(255,255,255,0.7);
            border-radius: 2px;
            position: absolute;
            bottom: 0;
            left: 50%;
            animation: steam 3s infinite ease-out;
            transform: translateX(-50%);
        }
        .steam span:nth-child(2) { animation-delay: 0.4s; left: 40%; }
        .steam span:nth-child(3) { animation-delay: 0.8s; left: 60%; }

        @keyframes steam {
            0%   { transform: translateX(-50%) translateY(0) scaleY(0); opacity: 0; }
            30%  { opacity: 0.8; }
            100% { transform: translateX(-50%) translateY(-40px) scaleY(1.5); opacity: 0; }
        }

        /* HOVER MÁGICO */
        .josue-coffee-btn:hover a {
            transform: scale(1.2);
            box-shadow: 0 20px 40px rgba(255, 221, 0, 0.6);
        }
        .josue-coffee-btn:hover .coffee-icon {
            transform: translateY(-8px) scale(0.9);
        }
        .josue-coffee-btn:hover .coffee-text {
            opacity: 1;
            transform: translateY(14px);
        }
        .josue-coffee-btn:hover .steam {
            opacity: 1;
        }

        /* Pulso sutil cada 10s */
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.08); }
        }
        .pulse { animation: pulse 4s infinite 3s; }

        /* Modo oscuro automático */
        @media (prefers-color-scheme: dark) {
            .josue-coffee-btn a {
                background: #1a1a1a;
                border: 3px solid #333;
                box-shadow: 0 10px 25px rgba(0,0,0,0.5);
            }
            .coffee-text { color: #FFDD00; }
            .steam span { background: rgba(255,221,0,0.4); }
        }
    `;
    document.head.appendChild(style);

    // Clases
    cafecito.className = 'josue-coffee-btn';
    cafecito.querySelector('a').classList.add('pulse');

    // Insertar
    const insert = () => document.body.appendChild(cafecito);
    document.readyState === 'loading' 
        ? document.addEventListener('DOMContentLoaded', insert)
        : insert();

    // ¡Sorpresa! Click con confeti (opcional, quítalo si no quieres fiesta)
    cafecito.addEventListener('click', (e) => {
        if (e.altKey) return; // evita confeti si mantiene Alt
        const colors = ['#FFDD00', '#000', '#fff'];
        for (let i = 0; i < 30; i++) {
            const confeti = document.createElement('div');
            confeti.style.cssText = `
                position: fixed;
                width: 8px; height: 8px;
                background: ${colors[i%3]};
                border-radius: ${Math.random()>0.5?'50%':'0'};
                pointer-events: none;
                z-index: 99999;
                left: ${e.clientX}px;
                top: ${e.clientY}px;
                animation: confeti 1s ease-out forwards;
            `;
            document.body.appendChild(confeti);
            setTimeout(() => confeti.remove(), 1000);
        }
    });

    // Animación confeti
    const confetiStyle = document.createElement('style');
    confetiStyle.textContent = `
        @keyframes confeti {
            to {
                transform: translate(
                    ${(Math.random()-0.5)*200}px,
                    ${(Math.random()-0.5)*200}px
                ) rotate(${Math.random()*720}deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(confetiStyle);
})();

