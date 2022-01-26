var typed = new Typed(".typed", {
  strings: ["Professional", "DevOps", "Student"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

const btnNavElement = document.querySelector(".btn-mobile-nav");
const headerElement = document.querySelector(".header");

btnNavElement.addEventListener("click", function () {
  headerElement.classList.toggle("nav-open");
});
