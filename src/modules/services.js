"use strict";

const contactUs = () => {
  const contactBtn = document.querySelector(".button-services");
  const modalCallback = document.querySelector(".modal-callback");
  const modalOverlay = document.querySelector(".modal-overlay");

  contactBtn.addEventListener("click", () => {
    modalCallback.style.display = "block";
    modalOverlay.style.display = "block";
  });
};

export default contactUs;
