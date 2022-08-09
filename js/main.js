let scroll = new SmoothScroll('a[href*="#"]', {
    speed: 300
});

const burgerBtn = document.querySelector('.burger-box');
const burgerIcon = document.querySelector('.burger-menu');
const menuList = document.querySelector('.header__menu-list');

burgerBtn.addEventListener('click', function(){
    burgerIcon.classList.toggle('active');
    menuList.classList.toggle('active');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100 && window.scrollY < 150) {
            burgerIcon.classList.remove('active');
            menuList.classList.remove('active');
        }
    })
})