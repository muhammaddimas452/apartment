// const menuBar = document.querySelector("#menu-bar");
// const menuNav = document.querySelector(".menu");

// menuBar.addEventListener('click', () => {
//     menuNav.classList.toggle("menu-active");
// });

menuBar = document.querySelector('.navbar .box-navbar .menu');

document.querySelector('#menu-bar').onclick = () => {
    menuBar.classList.toggle('menu-active');
};

const navbar = document.querySelector(".navbar");

window.addEventListener('scroll', () => {
    const windowPosition = window.scrollY > 0;
    navbar.classList.toggle("scrolling-active", windowPosition);
})

var slideIndex = 1;
            showSlide(slideIndex);

        function nextslide(n){
            showSlide(slideIndex += n);
        }


        function showSlide(n) {
            var i;
            var slides = document.getElementsByClassName("text-slide");
            
            if (n > slides.length) {
                slideIndex = 1
            }
            if (n < 1) {
                slideIndex = slides.length;
            }
            for (i = 0; i < slides.length; i++) {
                
                slides[i].style.display = "none";
            }

            slides[slideIndex - 1].style.display = "block";

        }  
