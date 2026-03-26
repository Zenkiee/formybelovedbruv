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