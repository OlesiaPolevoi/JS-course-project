"use strict";

const carousel = () => {
  const servicesArrow = document.querySelector(".services-arrow");
  const container = document.querySelector(".services-carousel");
  const carouselColumns = document.querySelectorAll(".col-sm-6");

  let leftDisplayElem = 0;

  const carouselUpdate = () => {
    container.innerHTML = null;

    if (leftDisplayElem === 0) {
      container.appendChild(carouselColumns[0]);
      container.appendChild(carouselColumns[1]);
      container.appendChild(carouselColumns[2]);
    }
    if (leftDisplayElem === 1) {
      container.appendChild(carouselColumns[1]);
      container.appendChild(carouselColumns[2]);
      container.appendChild(carouselColumns[3]);
    }
    if (leftDisplayElem === 2) {
      container.appendChild(carouselColumns[2]);
      container.appendChild(carouselColumns[3]);
      container.appendChild(carouselColumns[4]);
    }
    if (leftDisplayElem === 3) {
      container.appendChild(carouselColumns[3]);
      container.appendChild(carouselColumns[4]);
      container.appendChild(carouselColumns[5]);
    }
    if (leftDisplayElem === 4) {
      container.appendChild(carouselColumns[4]);
      container.appendChild(carouselColumns[5]);
      container.appendChild(carouselColumns[0]);
    }
    if (leftDisplayElem === 5) {
      container.appendChild(carouselColumns[5]);
      container.appendChild(carouselColumns[0]);
      container.appendChild(carouselColumns[1]);
    }
  };

  carouselUpdate();

  servicesArrow.addEventListener("click", (e) => {
    if (e.target.matches(".arrow-right")) {
      leftDisplayElem++;
      if (leftDisplayElem === carouselColumns.length) {
        leftDisplayElem = 0;
      }
      carouselUpdate();
    }

    if (e.target.matches(".arrow-left")) {
      leftDisplayElem--;
      if (leftDisplayElem < 0) {
        leftDisplayElem = carouselColumns.length - 1;
      }
      carouselUpdate();
    }
  });
};

export default carousel;
