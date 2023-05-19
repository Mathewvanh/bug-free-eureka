var slides = document.querySelectorAll('.carousel-slide');
var currentSlide = 0;

document.querySelector('.carousel-control.prev').addEventListener('click', function() {
    slides[currentSlide].classList.remove('active');
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    slides[currentSlide].classList.add('active');
});

document.querySelector('.carousel-control.next').addEventListener('click', function() {
    slides[currentSlide].classList.remove('active');
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    slides[currentSlide].classList.add('active');
});
