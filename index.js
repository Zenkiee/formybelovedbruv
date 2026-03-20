function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const correctPassword = "bruv";

  const login = document.getElementById("loginScreen");
  const main = document.getElementById("mainContent");

  if (input === correctPassword) {

    login.style.opacity = "0";

    setTimeout(() => {
      login.style.display = "none";
      main.classList.add("show");
    }, 500);

  } else {
    alert("wrong password 😤");
  }
}