const home = document.querySelector(".home");
const about = document.querySelector(".about");
const programs = document.querySelector(".programs");
const register = document.querySelector(".register");

home.addEventListener("click", function () {
  checkActive();
  home.classList.add("active");
});
about.addEventListener("click", function () {
  checkActive();
  about.classList.add("active");
});
programs.addEventListener("click", function () {
  checkActive();
  programs.classList.add("active");
});
register.addEventListener("click", function () {
  checkActive();
  register.classList.add("active");
});

function checkActive() {
  const list = document.querySelectorAll(".navbar-nav a");
  if (list[0].classList.contains("active") === true) {
    list[0].classList.remove("active");
  } else if (list[1].classList.contains("active") === true) {
    list[1].classList.remove("active");
  } else if (list[2].classList.contains("active") === true) {
    list[2].classList.remove("active");
  } else if (list[3].classList.contains("active") === true) {
    list[3].classList.remove("active");
  }
}
