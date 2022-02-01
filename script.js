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

//smooth scroll
const links = document.querySelectorAll(".menu-link, .logo");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    //scroll to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    //scroll to section
    if (href !== "#" && href.startsWith("#")) {
      const element = document.querySelector(href);
      element.scrollIntoView({ behavior: "smooth" });
    }

    //close mobile nav
    if (link.classList.contains("menu-link")) {
      headerElement.classList.toggle("nav-open");
    }
  });
});

const skillSection = document.querySelector(".section-skills");
const skillBarsSection = document.querySelector(".skills-bars-box");
const terraformSkill = document.querySelector(".terraform");
const awsSkill = document.querySelector(".aws");
const pythonSkill = document.querySelector(".python");
const gitSkill = document.querySelector(".git");
const htmlSkill = document.querySelector(".html");
const cssSkill = document.querySelector(".css");

window.addEventListener("scroll", () => {
  let top = window.pageYOffset + window.innerHeight;
  let isVisible;

  //animation depends upon the screen width
  if (screen.width > 832) {
    isVisible = top > skillSection.offsetTop + 200;
  } else {
    isVisible = top > skillBarsSection.offsetTop + 100;
  }

  if (isVisible) {
    terraformSkill.classList.add("animate-terraform");
    awsSkill.classList.add("animate-aws");
    pythonSkill.classList.add("animate-python");
    gitSkill.classList.add("animate-git");
    htmlSkill.classList.add("animate-html");
    cssSkill.classList.add("animate-css");
  }
});

/* Sticky Navigation */
const heroElement = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(heroElement);
