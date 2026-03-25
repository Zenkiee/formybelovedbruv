function checkPassword() {
  const input = document.getElementById("passwordInput").value.toLowerCase();

  const login = document.getElementById("loginScreen");
  const main = document.getElementById("mainContent");

  if (input === "bruv") {
    alert("i love you so much, bruv 🥰");
    unlock();

  } else if (input === "baguio") {
    alert("you remembered 🥺");
    unlock();

  } else if (input === "030826") {
    alert("our special date 💖");
    unlock();

  } else if (input === "miguel") {
    alert("wow, you really are my bruv 🥹");
    unlock();

  } else {
    alert("wrong password 😤");
    document.getElementById("passwordInput").value = "";
  }

  function unlock() {
    sessionStorage.setItem("unlocked", "true");

    login.style.opacity = "0";

    setTimeout(() => {
      login.style.display = "none";
      main.classList.add("show");
    }, 500);
  }
}

window.addEventListener("load", () => {
  const navType = performance.getEntriesByType("navigation")[0].type;

  if (navType === "reload") {
    sessionStorage.removeItem("unlocked");
  }

  const unlocked = sessionStorage.getItem("unlocked");

  if (unlocked === "true") {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("mainContent").classList.add("show");
  }

  if (performance.navigation.type === 1) {
  sessionStorage.removeItem("unlocked");
  }
  
});