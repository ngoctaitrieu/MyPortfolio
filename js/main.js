//Menu
const menu = document.querySelector('.navbar__links');
const menuBtn = document.querySelector('.navbar__icons');
const overlay = document.querySelector('#overlay');
menuBtn.addEventListener('click', ()=> {
    menu.classList.toggle("navbar__open");
    menuBtn.classList.toggle("open");
    overlay.classList.toggle("show");
});

overlay.addEventListener('click', ()=> {
    menu.classList.toggle("navbar__open");
    menuBtn.classList.toggle("open");
    overlay.classList.toggle("show");
})