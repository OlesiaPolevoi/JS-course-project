"use strict";

const scroll = () => {
  const scrollArrow = document.querySelector(".up");

  scrollArrow.style.display = "none";

  window.addEventListener("scroll", function () {
    const element = document.querySelector(".services-section");
    const position = element.getBoundingClientRect();

    if (position.top < window.innerHeight) {
      scrollArrow.style.display = "block";
    } else {
      scrollArrow.style.display = "none";
    }
  });

  scrollArrow.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
};

export default scroll;
