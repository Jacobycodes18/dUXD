
$(document).ready(function() {
    
    const nav = document.querySelector('#nav_background');
    const navWrap = document.querySelector('#nav');
    const navContain = document.querySelector('.nav_container');
    const logo = document.querySelector('#dux__logo');
    const mMenu = document.querySelector('.menu__');
    var win = window.innerWidth;
    var navW = nav.offsetWidth;
    
    function fixNav() {
        
            if (window.scrollY > nav.offsetTop) {
            console.log('add');
            nav.classList.add('black__');
            logo.classList.add('remove');
            nav.classList.add('fixed-nav');
            navWrap.classList.add('-nav');
            document.body.style.paddingTop =  nav.offsetHeight + 'px';
            
            }else{
            console.log('remove');
            nav.classList.remove('black__');
            logo.classList.remove('remove');
            nav.classList.remove('fixed-nav');
            navWrap.classList.remove('-nav');
            document.body.style.paddingTop =  0;
    }
}

window.addEventListener('scroll', fixNav);
    
    function hideMenu() {
        console.log('working');
            if(win < navW) {
                console.log('<1010');
                
        }
    }
    
    window.addEventListener('resize', hideMenu);
    
    });