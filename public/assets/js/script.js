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
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Hamburger
const hambuger = document.querySelector("#hamburger");
const navMenu = document.getElementById("nav-menu");

hambuger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
  // alert('toggle detected!')
});
