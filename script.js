// Theme toggle
const btn = document.getElementById("themeToggle");
btn.onclick = () => document.body.classList.toggle("dark");

// Hash navigation highlight
const links = document.querySelectorAll("header nav a");
window.addEventListener("hashchange", () => {
  links.forEach((a) => a.classList.remove("active"));
  const hash = location.hash || "#about";
  const active = document.querySelector(`header nav a[href="${hash}"]`);
  if (active) active.classList.add("active");
});

// Retro pixel particles on click
const particlesContainer = document.getElementById("particles");

function createParticles(x, y) {
  const count = 20;
  for (let i = 0; i < count; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    p.style.left = x + "px";
    p.style.top = y + "px";

    // Retro colors: green shades
    const greens = ["#0f0", "#0c0", "#0a0", "#0e0"];
    p.style.background = greens[Math.floor(Math.random() * greens.length)];

    // Pixel-style movement
    const angle = Math.random() * 2 * Math.PI; // random direction
    const speed = 2 + Math.random() * 3;
    let dx = Math.cos(angle) * speed;
    let dy = Math.sin(angle) * speed;
    let life = 30; // frames

    particlesContainer.appendChild(p);

    function animate() {
      p.style.transform = `translate(${dx * life}px, ${dy * life}px)`;
      p.style.opacity = life / 30;
      life--;
      if (life > 0) requestAnimationFrame(animate);
      else p.remove();
    }
    animate();
  }
}

document.addEventListener("click", (e) => {
  createParticles(e.clientX, e.clientY);
});
