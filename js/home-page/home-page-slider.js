// slider javascript

let slidePosition = 0; 
const slides = document.getElementsByClassName('slider-tab');
const totalSlides = slides.length;


document.getElementById('btn_next').addEventListener("click", function() {
    moveToNextSlide();
});

document.getElementById('btn_prev').addEventListener("click", function() {
    moveToPrevSlide();
});


//this is for sliding with keyboard arrows
document.body.onkeydown = function(e) {
    switch(e.keyCode) {
        case 37: // 37 is code for left arrow
        moveToPrevSlide();
        break;
        case 39: // 39 is code for right arrow
        moveToNextSlide();
        break;
    }
};


function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('slider-tab-visible');
        slide.classList.add('slider-tab-hidden');
    }

    slides[slidePosition].classList.add('slider-tab-visible'); 
};

function moveToNextSlide() {
    updateSlidePosition();
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
};

function moveToPrevSlide() {
    updateSlidePosition();
    if (slidePosition ===  0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
};