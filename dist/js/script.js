// Hamburger Menu
const hamburger = document.querySelector("#hamburger");
hamburger.addEventListener("click", () => {
  const navMenu = document.querySelector("#nav-menu");
  navMenu.classList.toggle("hidden");
  hamburger.classList.toggle("hamburger-active");
});

// Navbar fixed
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("navbar-fixed", window.scrollY > 0);
});
// window.onscroll = () => {
//   const header = document.querySelector("header");
//   const fixedNav = header.offsetTop;
//   console.log(fixedNav);

//   if (window.pageYOffset > fixedNav) {
//     header.classList.add("navbar-fixed");
//   } else {
//     header.classList.remove("navbar-fixed");
//   }
// };
