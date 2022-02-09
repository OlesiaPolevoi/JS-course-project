"use strict";

const accordeon = () => {
  const accordeon = document.querySelector(".accordeon");
  const accordeonElemsTitle = accordeon.querySelectorAll(".element");
  const accordeonContent = accordeon.querySelectorAll(".element-content");

  const displayContent = (indx) => {
    let currentContent = accordeonContent[indx];
    currentContent.style.display = "block";

    accordeonContent.forEach((e, i) => {
      if (i !== indx) {
        e.style.display = "none";
      }
    });
  };

  accordeonElemsTitle.forEach((e, i) => {
    e.addEventListener("click", () => {
      removeActiveClasses();
      e.classList.add("active");
      displayContent(i);
    });
  });

  const removeActiveClasses = () => {
    accordeonElemsTitle.forEach((e) => {
      e.classList.remove("active");
    });
  };
};

export default accordeon;
