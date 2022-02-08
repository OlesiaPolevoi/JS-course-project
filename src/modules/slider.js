"use strict";

const slider = () => {
  const sliderItems = document.querySelectorAll(".item");

  let currentSlide = 0;

  const autoSlide = () => {
    sliderItems[currentSlide].style.display = "none";
    currentSlide++;

    if (currentSlide >= sliderItems.length) {
      currentSlide = 0;
    }

    sliderItems[currentSlide].style.display = "block";
  };

  const startSlide = () => {
    setInterval(autoSlide, 3000);
  };

  startSlide();
};

export default slider;
