//
// const carouselContainer = document.querySelector('.slideshow-container');
// const carouselImages = document.querySelectorAll('.mySlides');
//
// // buttons
//
// const prevBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');
//
// // Counter
//
// let counter = 1;
// const size = carouselImages[0].clientWidth;
//
// carouselContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
//
// //Button Listeners
//
// nextBtn.addEventListener('click',()=>{
//     if(counter >= carouselImages.length -1) return;
//     carouselContainer.style.transition = "transform 1s ease-in-out";
//     counter++;
//     carouselContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
// });
//
// prevBtn.addEventListener('click',()=>{
//     if (counter <= 0) return;
//     carouselContainer.style.transition = "transform 1s ease-in-out";
//     counter--;
//     carouselContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
// });
//
// carouselContainer.addEventListener('transitionend', () => {
//     if (carouselImages[counter].id === 'lastClone') {
//         carouselContainer.style.transition = "none";
//         counter = carouselImages.length - 2;
//         carouselContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     }
//     if (carouselImages[counter].id === 'firstClone') {
//         carouselContainer.style.transition = "none";
//         counter = carouselImages.length - counter;
//         carouselContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     }
// });


// let slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// Thumbnail image controls
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     let i;
//     const slides = document.getElementsByClassName("mySlides");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slides[slideIndex-1].style.display = "block";
//
// }
//
// document.getElementById("#next").addEventListener("click", plusSlides);
// document.getElementById("#prev").addEventListener("click", plusSlides);
//
//

$(document).ready(function(){

$('.arrow-next').click(function() {
    var currentSlide = $('.active-slide'),
        nextSlide = currentSlide.next();

    if (nextSlide.length === 0) {
        nextSlide = $('.slide').first();
    }

    currentSlide.fadeOut(800).removeClass('active-slide');
    nextSlide.fadeIn(800).addClass('active-slide');

});

$('.arrow-prev').click(function() {
    var currentSlide = $('.active-slide'),
        prevSlide = currentSlide.prev();

    if (prevSlide.length === 0) {
        prevSlide = $('.slide').last();

    }

    currentSlide.fadeOut(600).removeClass('active-slide');
    prevSlide.fadeIn(600).addClass('active-slide');

});


$('.slider div:first').addClass('active-slide');

});