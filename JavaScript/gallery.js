function goBack() {
  window.location.href = 'index.html';
}

window.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("gallery-music");
  const player = document.querySelector(".music-player");
  const vinyl = document.getElementById("vinyl");

  player.addEventListener("click", () => {
    if (music.paused) {
      music.volume = 0;
      music.play();

      let vol = 0;
      const fade = setInterval(() => {
        if (vol < 0.3) {
          vol += 0.02;
          music.volume = vol;
        } else {
          clearInterval(fade);
        }
      }, 200);

      vinyl.classList.add("playing");
    } else {
      music.pause();
      vinyl.classList.remove("playing");
    }
  });
});

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