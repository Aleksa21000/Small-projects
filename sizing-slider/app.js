const slides = document.querySelectorAll('.js-sizing-slider-slide');

slides[0].classList.add('active');

slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        slides.forEach((sld, i) => {
            if(index === i) {
                sld.classList.add('active');
                console.log('clicked')
            } else {
                sld.classList.remove('active');
            }
        });
    });
});