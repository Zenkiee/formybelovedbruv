function openEnvelope() {
  const envelope = document.getElementById('envelope');
  envelope.classList.toggle('open');

  const music = document.getElementById('bg-music');
  music.play();
}

// Floating hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (3 + Math.random() * 3) + 's';

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 500);