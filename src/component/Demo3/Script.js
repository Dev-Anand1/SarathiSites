document.addEventListener('DOMContentLoaded', function () {
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach(function (slider) {
        let currentIndex = 0;

        function showSlide(index) {
            const carouselInner = slider.querySelector('.carousel-inner');
            const slides = slider.querySelectorAll('.carousel-item');

            if (index < 0) {
                index = slides.length - 1;
            } else if (index >= slides.length) {
                index = 0;
            }

            currentIndex = index;
            const translateValue = -index * 100 + '%';
            carouselInner.style.transform = 'translateX(' + translateValue + ')';
        }

        function nextSlide() {
            showSlide(currentIndex + 1);
        }

        function prevSlide() {
            showSlide(currentIndex - 1);
        }

        // Add event listeners for left and right arrows
        const prevArrow = slider.querySelector('.carousel-control-prev');
        const nextArrow = slider.querySelector('.carousel-control-next');

        if (prevArrow) {
            prevArrow.addEventListener('click', function () {
                prevSlide();
            });
        }

        if (nextArrow) {
            nextArrow.addEventListener('click', function () {
                nextSlide();
            });
        }
    });
});
