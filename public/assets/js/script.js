// Menut Item: Nav link Work
const btnWork = document.querySelector("#button-work");
const menuItem = document.getElementById("menu-item");

// Toggle class hidden saat button ditekan
btnWork.addEventListener("click", () => {
  menuItem.classList.toggle("hidden");
});

// Navbar link auto close
const navMenu = document.getElementById("nav-menu");

window.addEventListener("click", (e) => {
  if (!menuItem.contains(e.target) && !navMenu.contains(e.target)) {
    menuItem.classList.add("hidden");
  }
});

// navbar fixed
window.onscroll = () => {
  const navBlur = document.getElementById("nav-blur");
  const navWraper = document.getElementById("nav-wrapper");
  // const header = document.getElementById("header");
  const fixedNav = navBlur.offsetTop;
  const footer = document.querySelector("footer");
  const fixedFooter = footer.offsetTop;
  const toTop = document.getElementById("to-top");

  if (
    window.pageYOffset > fixedNav &&
    window.pageYOffset < fixedFooter - window.innerHeight
  ) {
    navBlur.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    navBlur.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }

  if (window.pageYOffset < fixedFooter - window.innerHeight) {
    navWraper.classList.remove("hidden");
  } else {
    navWraper.classList.add("hidden");
  }
};

// Button switch theme
let isDarkMode = false;
const btnTheme = document.getElementById("btn-theme");
const html = document.querySelector("html");

btnTheme.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});
