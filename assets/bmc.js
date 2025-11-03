// assets/bmc_endpage.js
var endBtn = document.createElement('a');
endBtn.href = "https://www.buymeacoffee.com/josueg28";
endBtn.target = "_blank";
endBtn.rel = "noopener";
endBtn.innerText = "☕ Buy Me a Coffee";

endBtn.style.position = "fixed";
endBtn.style.bottom = "20px";
endBtn.style.right = "20px";
endBtn.style.background = "#FFDD00";
endBtn.style.color = "#000";
endBtn.style.fontWeight = "bold";
endBtn.style.padding = "12px 18px";
endBtn.style.borderRadius = "25px";
endBtn.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
endBtn.style.textDecoration = "none";
endBtn.style.zIndex = "9999";
endBtn.style.fontFamily = "Inter, sans-serif";
endBtn.style.display = "none"; // oculto hasta final de página

window.addEventListener('scroll', function() {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
    endBtn.style.display = "block";
  } else {
    endBtn.style.display = "none";
  }
});

document.body.appendChild(endBtn);
