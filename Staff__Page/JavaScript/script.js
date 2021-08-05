const navMenu = document.getElementById('nav-menu'),
    navLink = document.querySelector('.nav__link'),
    navItem = document.querySelector('.nav__item'),
    navClose =  document.getElementById('nav-close'),

if(navLink){
    navLink.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
        navItem.classList.add('show-item');
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}