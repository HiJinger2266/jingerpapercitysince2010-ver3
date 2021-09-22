const navSlide = () => {
    const icon=document.querySelector('div.right_selection');
    const nav=document.querySelector('.right_links');
    const navLinks=document.querySelectorAll('.right_links li');
    
    icon.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('slide_active');
        //animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation='';
                console.log('noanimation');
            } else {
                link.style.animation=`navLinkFade 0.5s ease forwards ${index/7+0.3}s`;  //``這個特別
                console.log('yesanimation');
            }
        });
    });
}

navSlide();


//Reference
//https://youtu.be/gXkqy0b4M5g