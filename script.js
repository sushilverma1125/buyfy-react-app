document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    
    function showSlide() {
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${(index - slideIndex) * 100}%)`;
        });
    }

    document.querySelector('.left').addEventListener('click', () => {
        slideIndex = (slideIndex > 0) ? slideIndex - 1 : slides.length - 1;
        showSlide();
    });

    document.querySelector('.right').addEventListener('click', () => {
        slideIndex = (slideIndex < slides.length - 1) ? slideIndex + 1 : 0;
        showSlide();
    });

    showSlide();
});
