const openHambMenu = document.querySelector("#hamburger-menu");
const menu = document.querySelector("#active");
const closeElement = document.querySelector(".fullscreen-menu__close");
const menuItemVert = document.querySelector(".menu__link");
const body = document.body;

openHambMenu.addEventListener("click", e => {
    menu.style.display = 'flex';
});

menuItemVert.addEventListener("click", e => {
    menu.style.display = 'none';
});

closeElement.addEventListener("click", e => {
    e.preventDefault();
    menu.style.display = 'none';
});

