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

  const smoothScroll = (item) => {
    item.preventDefault();
    if (item.target.closest("a").getAttribute("href").slice(1)) {
      const link = document.querySelector(
        item.target.closest("a").getAttribute("href")
      );
      link.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const topMenu = document.querySelector(".top-menu");
  topMenu.addEventListener("click", smoothScroll);
};

export default scroll;
