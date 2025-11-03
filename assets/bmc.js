// assets/bmc_pulse.js
var pulseBtn = document.createElement('a');
pulseBtn.href = "https://www.buymeacoffee.com/josueg28";
pulseBtn.target = "_blank";
pulseBtn.rel = "noopener";
pulseBtn.innerText = "☕ Buy Me a Coffee";

pulseBtn.style.position = "fixed";
pulseBtn.style.bottom = "20px";
pulseBtn.style.right = "20px";
pulseBtn.style.background = "#FFDD00";
pulseBtn.style.color = "#000";
pulseBtn.style.fontWeight = "bold";
pulseBtn.style.padding = "12px 18px";
pulseBtn.style.borderRadius = "25px";
pulseBtn.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
pulseBtn.style.textDecoration = "none";
pulseBtn.style.zIndex = "9999";
pulseBtn.style.fontFamily = "Inter, sans-serif";
pulseBtn.style.animation = "pulse 2s infinite";

// Pulso CSS
var style = document.createElement('style');
style.innerHTML = `
@keyframes pulse {
  0% { transform: scale(1); box-shadow: 0 4px 8px rgba(0,0,0,0.2);}
  50% { transform: scale(1.1); box-shadow: 0 6px 12px rgba(0,0,0,0.3);}
  100% { transform: scale(1); box-shadow: 0 4px 8px rgba(0,0,0,0.2);}
}`;
document.head.appendChild(style);

document.body.appendChild(pulseBtn);
