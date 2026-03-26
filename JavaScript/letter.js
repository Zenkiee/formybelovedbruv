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

const poemText = `In the quiet where shadows used to stay,\n
You came like dawn and chased them away.\n
A gentle light in my darkest night,\n
Turning my fears into something bright.\n\n
I wandered lost, with no place to start,\n
Then you found your way into my heart.\n
Now every breath, every moment feels true—\n
How lucky I am to have found you.\n\n
— your bruv, Miguel ❤️`;

let index = 0;

function typeWriter() {
  const poemElement = document.getElementById('poem');
  if (index < poemText.length) {
    poemElement.innerHTML += poemText.charAt(index) === '\n' ? '<br>' : poemText.charAt(index);
    index++;
    setTimeout(typeWriter, 80);
  }
}

function openEnvelope() {
  const envelope = document.getElementById('envelope');
  envelope.classList.toggle('open');
  const music = document.getElementById('bg-music');
  music.volume = 0;
  music.play();
  let volume = 0;
  const fade = setInterval(() => {
    if (volume < 1) {
      volume += 0.05;
      music.volume = volume;
    } else {
      clearInterval(fade);
    }
  }, 200);
  document.getElementById('poem').innerHTML = '';
  index = 0;
  setTimeout(typeWriter, 500);
}

function goBack() {
  window.location.href = 'index.html';
}
