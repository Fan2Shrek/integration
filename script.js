const slides = document.querySelectorAll('.slider__element');

setInterval(function (){
    for (var i = 0; i < slides.length; i++){

        if (i + 1 === slides.length) {
            slides[0].classList.add('slider__element--current');
            slides[i].classList.remove('slider__element--current');

            break;
        }

        if (slides[i].classList.contains('slider__element--current')) { 
            slides[i].classList.remove('slider__element--current');

            slides[i + 1].classList.add('slider__element--current');

            break;
        }
    } 
  }, 3000);
  