// docs/assets/bmc.js
document.addEventListener("DOMContentLoaded", function () {
  // Crear el script dinámicamente para el botón de Buy Me a Coffee
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";  // URL corregida
  script.setAttribute("data-name", "BMC-Widget");  // Atributo correcto para botón
  script.setAttribute("data-id", "josueg28");  // Usa 'data-id' en lugar de 'data-slug'
  script.setAttribute("data-description", "Support me on Buy me a coffee!");  // Descripción opcional
  script.setAttribute("data-message", "Thank you for visiting!");  // Mensaje opcional
  script.setAttribute("data-color", "#FFDD00");  // Tu color amarillo
  script.setAttribute("data-font", "Comic");  // Fuente
  script.setAttribute("data-text", "Buy me a coffee");  // Texto del botón
  script.setAttribute("data-outline-color", "#000000");
  script.setAttribute("data-font-color", "#000000");
  script.setAttribute("data-coffee-color", "#ffffff");
  script.setAttribute("data-position", "Right");  // Posición: Right, Left, o Bottom
  script.setAttribute("data-x_margin", "18");  // Margen X
  script.setAttribute("data-y_margin", "18");  // Margen Y

  // Insertar el script en el body
  document.body.appendChild(script);
});