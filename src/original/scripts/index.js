const page = document.querySelector(".page");
const header = page.querySelector(".header");
const mobileMenu = header.querySelector(".header__menu");
const headerMobile = header.querySelector(".header__mobile");
const headerNav = header.querySelector(".header__nav");

const openMobileMenu = () => {
  mobileMenu.classList.toggle("header__menu_selected");
  headerNav.classList.toggle("header__nav_selected");
  page.classList.toggle("page_active")
}

headerMobile.addEventListener('click', openMobileMenu);
