window.addEventListener('scroll', function() {
    var scroll=document.querySelector('.gobacktop');
    scroll.classList.toggle("active", window.scrollY>500);
})

function scrolltop() {
    window.scrollTo ({
        top: 0,
        behavior: "smooth"
    })
}