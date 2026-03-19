function goBack() {
  window.location.href = 'Frontpage.html';
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
