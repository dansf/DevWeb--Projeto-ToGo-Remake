const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close'),
    headerColor = document.getElementById('header');

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

function scrollHeader() {
    if(this.scrollY >= 100){
        headerColor.classList.add('scroll-header');
    }
    else{
        headerColor.classList.remove('scroll-header')
    }
}window.addEventListener('scroll', scrollHeader);