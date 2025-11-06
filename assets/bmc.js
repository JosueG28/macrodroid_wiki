// docs/assets/bmc.js
document.addEventListener("DOMContentLoaded", function () {
  // Crear el enlace
  const link = document.createElement("a");
  link.href = "https://www.buymeacoffee.com/josueg28";
  link.target = "_blank";
  link.rel = "noopener";
  link.title = "Buy me a coffee - Support my work!";

  // Crear el contenedor
  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.bottom = "20px";
  container.style.right = "20px";
  container.style.zIndex = "9999";
  container.style.transition = "all 0.2s ease";
  container.style.cursor = "pointer";

  // Inyectar SVG
  container.innerHTML = `
    <svg width="180" height="50" viewBox="0 0 180 50" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="180" height="50" rx="25" fill="#FFDD00"/>
      <path d="M35.5 25c0-4.97-3.58-9-8-9s-8 4.03-8 9c0 4.14 2.72 7.61 6.5 8.69v2.81h3v-2.81c3.78-1.08 6.5-4.55 6.5-8.69z" fill="#FFF"/>
      <path d="M31.5 25c0-2.21-1.12-4.14-2.83-5.28.03.08.06.16.08.25.69 2.9-.58 5.91-2.75 7.03.64.34 1.08.95 1.08 1.67 0 1.1-.9 2-2 2s-2-.9-2-2c0-.72.44-1.33 1.08-1.67-2.17-1.12-3.44-4.13-2.75-7.03.02-.09.05-.17.08-.25C19.62 20.86 18.5 22.79 18.5 25c0 3.31 2.69 6 6 6s6-2.69 6-6z" fill="#FFDD00"/>
      <text x="55" y="31" font-family="Comic Sans MS, cursive" font-weight="bold" fill="#000" font-size="16">Buy me a coffee</text>
    </svg>
  `;

  // Hover effect
  container.addEventListener("mouseenter", () => {
    container.style.transform = "translateY(-3px)";
    container.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
  });
  container.addEventListener("mouseleave", () => {
    container.style.transform = "translateY(0)";
    container.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
  });

  // Añadir al enlace y al body
  link.appendChild(container);
  document.body.appendChild(link);
});