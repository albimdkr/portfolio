// navbar fixed
window.onscroll = () => {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const footer = document.querySelector("footer");
  const fixedFooter = footer.offsetTop;

  const toTop = document.getElementById("to-top");

  if (
    window.pageYOffset > fixedNav &&
    window.pageYOffset < fixedFooter - window.innerHeight
  ) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
    menuItem.classList.add("hidden");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Menut Item: Nav link Work
const btnWork = document.querySelector("#button-work");
const navMenu = document.getElementById("nav-menu");
const menuItem = document.getElementById("menu-item");

btnWork.addEventListener("click", () => {
  menuItem.classList.toggle("hidden").add("animate");
});

// Theme
// const btnTheme = document.getElementById("btn-theme");
// btnTheme.addEventListener("click", () => {
//   document.body.classList.toggle("dark");
// });

// Button switch theme
let isDarkMode = false;
const btnTheme = document.getElementById("btn-theme");
const html = document.querySelector("html");

btnTheme.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  isDarkMode ? html.classList.add("dark") : html.classList.remove("dark");
});

// Navbar link auto close
// window.addEventListener("click", (e) => {
//   if (e.target != menuItem && e.target != navMenu) {
//     menuItem.classList.remove("menu-item");
//     navMenu.classList.add("hidden");
//   }
// });
