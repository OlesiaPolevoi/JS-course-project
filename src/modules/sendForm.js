"use strict";

const form = () => {
  const form = document.querySelector('[name="form-callback"]');
  const nameInput = form.querySelector('[name="fio"]');
  const telInput = form.querySelector('[name="tel"]');

  const statusBlock = document.createElement("b");

  const loadText = "Идет отправка";
  const errorText = "Ошибка";
  const successText = "Отправлено! Мы скоро с вами свяжемся";
  const modalCallback = document.querySelector(".modal-callback");
  const modalOverlay = document.querySelector(".modal-overlay");
  const checkInput = () => {
    nameInput.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-яА-я\-\s]/g, "");
    });
    telInput.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^\d\+]/g, "");
    });
  };
  checkInput();

  const sendData = (url, data) => {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formData = new FormData(form);
    const formBody = {};

    formData.forEach((val, key) => {
      formBody[key] = val;
    });
    form.append(statusBlock);
    statusBlock.textContent = loadText;

    if (telInput.value == "") {
      alert("Пожайста, введите номер телефона");
      return;
    } else {
      sendData("https://jsonplaceholder.typicode.com/posts", formBody)
        .then((data) => {
          statusBlock.textContent = successText;

          nameInput.value = "";
          telInput.value = "";
          setTimeout(() => {
            modalCallback.style.display = "none";
            modalOverlay.style.display = "none";
          }, 600);
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    }
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    submitForm();
  });
};

export default form;
