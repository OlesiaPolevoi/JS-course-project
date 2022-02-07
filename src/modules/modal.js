"use strict";

const modal = () => {
  const callbackBtn = document.querySelectorAll(".callback-btn");
  const modalCallback = document.querySelector(".modal-callback");
  const modalOverlay = document.querySelector(".modal-overlay");

  callbackBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      modalCallback.style.display = "block";
      modalOverlay.style.display = "block";
    });
  });
};

export default modal;
