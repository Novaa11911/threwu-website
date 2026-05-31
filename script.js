
// NAVBAR SCROLL EFFECT

window.addEventListener('scroll', () => {

    const navbar = document.querySelector('.navbar');

    if(window.scrollY > 50){
        navbar.classList.add('scrolled');
    }

    else{
        navbar.classList.remove('scrolled');
    }

});


// MOBILE MENU

const menuToggle =
document.querySelector('.menu-toggle');

const navLinks =
document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {

    navLinks.classList.toggle('active');

});


// SMOOTH SCROLLING

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute('href')
        );

        if(target){

            target.scrollIntoView({
                behavior:'smooth'
            });

            navLinks.classList.remove('active');
        }

    });

});


// ACTIVE NAVBAR LINKS

const sections =
document.querySelectorAll('section');

const navItems =
document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        const sectionHeight =
        section.clientHeight;

        if(window.scrollY >= sectionTop){
            current =
            section.getAttribute('id');
        }

    });

    navItems.forEach(link => {

        link.classList.remove('active');

        if(
            link.getAttribute('href')
            === '#' + current
        ){
            link.classList.add('active');
        }

    });

});
