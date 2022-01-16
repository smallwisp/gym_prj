const topSlider = function() {
  const mainSlider = document.querySelector('.main-slider'),
        slides = mainSlider.querySelectorAll('.slide');
  console.log(slides);

  let currentSlide = 0;

  const prevSlide = function(item, currentSlide) {
    item[currentSlide].style.display = 'none';
  };

  const nextSlide = function(item, currentSlide) {
    item[currentSlide].style.display = '';
  };

  const autoPlaySilde = function() {
    prevSlide(slides, currentSlide);
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    };
    nextSlide(slides, currentSlide);
  }

  const startSlide = (time = 3000) => {
    let interval = setInterval(autoPlaySilde, time)
  };

  startSlide();

}

export default topSlider;