"use strict";

const carousel = () => {
  const servicesArrow = document.querySelector(".services-arrow");
  const container = document.querySelector(".services-carousel");
  const carouselColumns = document.querySelectorAll(".col-sm-6");
  const carouselEl = container.querySelectorAll(".absolute");
  const modalCallback = document.querySelector(".modal-callback");
  const modalOverlay = document.querySelector(".modal-overlay");

  let leftDisplayElem = 0;
  carouselEl.forEach((e) => {
    e.addEventListener("click", () => {
      modalCallback.style.display = "block";
      modalOverlay.style.display = "block";
    });
  });

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
