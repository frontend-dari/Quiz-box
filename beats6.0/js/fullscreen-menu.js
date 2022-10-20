const openHambMenu = document.querySelector("#hamburger-menu");
const menu = document.querySelector("#active");
const closeElement = document.querySelector(".fullscreen-menu__close");
const body = document.body;

openHambMenu.addEventListener("click", e => {
    menu.style.display = 'flex';
});

closeElement.addEventListener("click", e => {
    e.preventDefault();
    menu.style.display = 'none';
   //body.removeChild(menu);
});
