const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');
    

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

const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click',linkAction));


const headerColor = document.getElementById('header');

function scrollHeader() {
    if(this.scrollY >= 100){
        headerColor.classList.add('scroll-header');
    }
    else{
        headerColor.classList.remove('scroll-header')
    }
}window.addEventListener('scroll', scrollHeader);

const sections = document.querySelectorAll('section[id]');

function scrollActive(){
	const scrollY = window.pageYOffset;

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 50,
		    sectionId = current.getAttribute('id');

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
            }else{
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
            }
	})
}
window.addEventListener('scroll', scrollActive);