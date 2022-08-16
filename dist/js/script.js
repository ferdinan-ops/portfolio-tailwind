// Hamburger Menu
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
  hamburger.classList.toggle("hamburger-active");
});

// Navbar fixed
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const toTop = document.querySelector("#to-top");
  header.classList.toggle("navbar-fixed", window.scrollY > 0);

  if (window.pageYOffset > 0) {
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    toTop.classList.add("hidden");
    toTop.classList.remove("flex");
  }
});
// window.onscroll = () => {
//   const header = document.querySelector("header");
//   const toTop = document.querySelector("#to-top");
//   const fixedNav = header.offsetTop;

//   if (window.pageYOffset > fixedNav) {
//     header.classList.add("navbar-fixed");
//     toTop.classList.remove("hidden");
//     toTop.classList.add("flex");
//   } else {
//     header.classList.remove("navbar-fixed");
//     toTop.classList.add("hidden");
//     toTop.classList.remove("flex");
//   }
// };

window.addEventListener("click", (e) => {
  if (e.target != navMenu && e.target != hamburger) {
    navMenu.classList.add("hidden");
    hamburger.classList.remove("hamburger-active");
  }
});

const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");
darkToggle.addEventListener("click", () => {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }

  // darkToggle.checked
  //   ? html.classList.add("dark")
  //   : html.classList.remove("dark");
});

// Pindahkan posisi toggle sesuai mode
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
