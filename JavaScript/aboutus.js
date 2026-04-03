function goBack() {
  window.location.href = "index.html";
}

const items = document.querySelectorAll('.timeline-item');
const timeline = document.querySelector('.timeline');

function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.8;

  items.forEach((item, index) => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerBottom) {
      setTimeout(() => {
        item.classList.add('show');
      }, index * 300);
    }
  });
}

let current = 0;
let target = 0;

function updateFill() {
  const rect = timeline.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  let progress = (windowHeight - rect.top) / rect.height;
  progress = Math.max(0, Math.min(1, progress));

  target = progress * 100;

  current += (target - current) * 0.02;

  document.documentElement.style.setProperty(
    '--timeline-fill',
    `${current}%`
  );

  requestAnimationFrame(updateFill);
}

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);

updateFill();

function openImage(img) {
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.inset = "0";
  overlay.style.background = "rgba(0,0,0,0.9)";
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.zIndex = "999";

  const fullImg = document.createElement("img");
  fullImg.src = img.src;
  fullImg.style.maxWidth = "90%";
  fullImg.style.maxHeight = "90%";
  fullImg.style.borderRadius = "12px";

  overlay.appendChild(fullImg);

  overlay.onclick = () => overlay.remove();

  document.body.appendChild(overlay);
}