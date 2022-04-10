// Navigation Hamburger Toggle
const navToggle = document.querySelector('#navToggle');
const nav = document.querySelector('.navigation-menu');
const hamburgerIcon = document.querySelectorAll('.hamburger-icon');
const hamburgerIconOpen = document.querySelector('#hamburger-icon-open');

//Add and removes .open class to navigation-menu
navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');

    //Shows hamburger icon or shows close icon
    hamburgerIcon.forEach(icon => {
        icon.classList.toggle('hidden');
    });
});

//Remove .open class from navigation-menu when we try to resize the browser width
window.addEventListener('resize', () =>{
    if(document.body.clientWidth > 768){
        nav.classList.remove('open');
        hamburgerIcon.forEach(icon => {
            icon.classList.add('hidden');
        });
        hamburgerIconOpen.classList.remove('hidden');
    }
});
