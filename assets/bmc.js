// Crear botón flotante Buy Me a Coffee
var button = document.createElement('a');
button.href = "https://www.buymeacoffee.com/josueg28";
button.target = "_blank";
button.rel = "noopener";
button.innerText = "☕ Buy Me a Coffee";

// Estilos del botón
button.style.position = "fixed";
button.style.bottom = "20px";      // distancia del borde inferior
button.style.right = "20px";       // distancia del borde derecho
button.style.background = "#FFDD00"; // color de botón
button.style.color = "#000000";      // color del texto
button.style.fontWeight = "bold";
button.style.padding = "12px 18px";
button.style.borderRadius = "25px";  // bordes redondeados
button.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
button.style.textDecoration = "none";
button.style.zIndex = "9999";
button.style.fontFamily = "Inter, sans-serif";
button.style.transition = "transform 0.2s";

// Efecto hover
button.onmouseover = function() {
    button.style.transform = "scale(1.1)";
};
button.onmouseout = function() {
    button.style.transform = "scale(1)";
};

// Añadir al body
document.body.appendChild(button);
