/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./index.js":
      /*!******************!*\
  !*** ./index.js ***!
  \******************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ "./modules/modal.js");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ "./modules/slider.js");\n/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/carousel */ "./modules/carousel.js");\n/* harmony import */ var _modules_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/services */ "./modules/services.js");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/accordeon */ "./modules/accordeon.js");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/scroll */ "./modules/scroll.js");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sendForm */ "./modules/sendForm.js");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__["default"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])();\r\n(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_2__["default"])();\r\n(0,_modules_services__WEBPACK_IMPORTED_MODULE_3__["default"])();\r\n(0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_4__["default"])();\r\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_5__["default"])();\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_6__["default"])();\r\n\n\n//# sourceURL=webpack:///./index.js?'
        );

        /***/
      },

    /***/ "./modules/accordeon.js":
      /*!******************************!*\
  !*** ./modules/accordeon.js ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst accordeon = () => {\r\n  const accordeon = document.querySelector(".accordeon");\r\n  const accordeonElemsTitle = accordeon.querySelectorAll(".element");\r\n  const accordeonContent = accordeon.querySelectorAll(".element-content");\r\n\r\n  const displayContent = (indx) => {\r\n    let currentContent = accordeonContent[indx];\r\n    currentContent.style.display = "block";\r\n\r\n    accordeonContent.forEach((e, i) => {\r\n      if (i !== indx) {\r\n        e.style.display = "none";\r\n      }\r\n    });\r\n  };\r\n\r\n  accordeonElemsTitle.forEach((e, i) => {\r\n    e.addEventListener("click", () => {\r\n      removeActiveClasses();\r\n      e.classList.add("active");\r\n      displayContent(i);\r\n    });\r\n  });\r\n\r\n  const removeActiveClasses = () => {\r\n    accordeonElemsTitle.forEach((e) => {\r\n      e.classList.remove("active");\r\n    });\r\n  };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\r\n\n\n//# sourceURL=webpack:///./modules/accordeon.js?'
        );

        /***/
      },

    /***/ "./modules/carousel.js":
      /*!*****************************!*\
  !*** ./modules/carousel.js ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst carousel = () => {\r\n  const servicesArrow = document.querySelector(".services-arrow");\r\n  const container = document.querySelector(".services-carousel");\r\n  const carouselColumns = document.querySelectorAll(".col-sm-6");\r\n  const carouselEl = container.querySelectorAll(".absolute");\r\n  const modalCallback = document.querySelector(".modal-callback");\r\n  const modalOverlay = document.querySelector(".modal-overlay");\r\n\r\n  let leftDisplayElem = 0;\r\n  carouselEl.forEach((e) => {\r\n    e.addEventListener("click", () => {\r\n      modalCallback.style.display = "block";\r\n      modalOverlay.style.display = "block";\r\n    });\r\n  });\r\n\r\n  const carouselUpdate = () => {\r\n    container.innerHTML = null;\r\n\r\n    if (leftDisplayElem === 0) {\r\n      container.appendChild(carouselColumns[0]);\r\n      container.appendChild(carouselColumns[1]);\r\n      container.appendChild(carouselColumns[2]);\r\n    }\r\n    if (leftDisplayElem === 1) {\r\n      container.appendChild(carouselColumns[1]);\r\n      container.appendChild(carouselColumns[2]);\r\n      container.appendChild(carouselColumns[3]);\r\n    }\r\n    if (leftDisplayElem === 2) {\r\n      container.appendChild(carouselColumns[2]);\r\n      container.appendChild(carouselColumns[3]);\r\n      container.appendChild(carouselColumns[4]);\r\n    }\r\n    if (leftDisplayElem === 3) {\r\n      container.appendChild(carouselColumns[3]);\r\n      container.appendChild(carouselColumns[4]);\r\n      container.appendChild(carouselColumns[5]);\r\n    }\r\n    if (leftDisplayElem === 4) {\r\n      container.appendChild(carouselColumns[4]);\r\n      container.appendChild(carouselColumns[5]);\r\n      container.appendChild(carouselColumns[0]);\r\n    }\r\n    if (leftDisplayElem === 5) {\r\n      container.appendChild(carouselColumns[5]);\r\n      container.appendChild(carouselColumns[0]);\r\n      container.appendChild(carouselColumns[1]);\r\n    }\r\n  };\r\n\r\n  carouselUpdate();\r\n\r\n  servicesArrow.addEventListener("click", (e) => {\r\n    if (e.target.matches(".arrow-right")) {\r\n      leftDisplayElem++;\r\n      if (leftDisplayElem === carouselColumns.length) {\r\n        leftDisplayElem = 0;\r\n      }\r\n      carouselUpdate();\r\n    }\r\n\r\n    if (e.target.matches(".arrow-left")) {\r\n      leftDisplayElem--;\r\n      if (leftDisplayElem < 0) {\r\n        leftDisplayElem = carouselColumns.length - 1;\r\n      }\r\n      carouselUpdate();\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carousel);\r\n\n\n//# sourceURL=webpack:///./modules/carousel.js?'
        );

        /***/
      },

    /***/ "./modules/modal.js":
      /*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst modal = () => {\r\n  const callbackBtn = document.querySelectorAll(".callback-btn");\r\n  const modalCallback = document.querySelector(".modal-callback");\r\n  const modalOverlay = document.querySelector(".modal-overlay");\r\n\r\n  const modalClose = document.querySelector(".modal-close");\r\n\r\n  callbackBtn.forEach((btn) => {\r\n    btn.addEventListener("click", () => {\r\n      modalCallback.style.display = "block";\r\n      modalOverlay.style.display = "block";\r\n    });\r\n  });\r\n\r\n  modalClose.addEventListener("click", () => {\r\n    modalCallback.style.display = "none";\r\n    modalOverlay.style.display = "none";\r\n  });\r\n\r\n  modalOverlay.addEventListener("click", () => {\r\n    modalCallback.style.display = "none";\r\n    modalOverlay.style.display = "none";\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?'
        );

        /***/
      },

    /***/ "./modules/scroll.js":
      /*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst scroll = () => {\r\n  const scrollArrow = document.querySelector(".up");\r\n\r\n  scrollArrow.style.display = "none";\r\n\r\n  window.addEventListener("scroll", function () {\r\n    const element = document.querySelector(".services-section");\r\n    const position = element.getBoundingClientRect();\r\n\r\n    if (position.top < window.innerHeight) {\r\n      scrollArrow.style.display = "block";\r\n    } else {\r\n      scrollArrow.style.display = "none";\r\n    }\r\n  });\r\n\r\n  scrollArrow.addEventListener("click", () => {\r\n    window.scroll({\r\n      top: 0,\r\n      left: 0,\r\n      behavior: "smooth",\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\r\n\n\n//# sourceURL=webpack:///./modules/scroll.js?'
        );

        /***/
      },

    /***/ "./modules/sendForm.js":
      /*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst form = () => {\n  const form = document.querySelector(\'[name="form-callback"]\');\n  const nameInput = form.querySelector(\'[name="fio"]\');\n  const telInput = form.querySelector(\'[name="tel"]\');\n\n  const statusBlock = document.createElement("div");\n  const loadText = "Идет отправка";\n  const errorText = "Ошибка";\n  const successText = "Отправлено! Мы скоро с вами свяжемся";\n\n  const checkInput = () => {\n    nameInput.addEventListener("input", (e) => {\n      e.target.value = e.target.value.replace(/[^а-яА-я\\-\\s]/g, "");\n    });\n    telInput.addEventListener("input", (e) => {\n      e.target.value = e.target.value.replace(/[^\\d\\+]/g, "");\n    });\n  };\n  checkInput();\n\n  const sendData = (url, data) => {\n    return fetch(url, {\n      method: "POST",\n      body: JSON.stringify(data),\n      headers: {\n        "Content-Type": "application/json",\n      },\n    }).then((res) => res.json());\n  };\n\n  const submitForm = () => {\n    const formData = new FormData(form);\n    const formBody = {};\n\n    formData.forEach((val, key) => {\n      formBody[key] = val;\n    });\n    form.append(statusBlock);\n    statusBlock.textContent = loadText;\n\n    if (telInput.value == "") {\n      alert("Пожайста, введите номер телефона");\n      return;\n    } else {\n      sendData("https://jsonplaceholder.typicode.com/posts", formBody)\n        .then((data) => {\n          statusBlock.textContent = successText;\n\n          nameInput.value = "";\n          telInput.value = "";\n        })\n        .catch((error) => {\n          statusBlock.textContent = errorText;\n        });\n    }\n  };\n\n  form.addEventListener("submit", (e) => {\n    e.preventDefault();\n\n    submitForm();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);\n\n\n//# sourceURL=webpack:///./modules/sendForm.js?'
        );

        /***/
      },

    /***/ "./modules/services.js":
      /*!*****************************!*\
  !*** ./modules/services.js ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst contactUs = () => {\r\n  const contactBtn = document.querySelector(".button-services");\r\n  const modalCallback = document.querySelector(".modal-callback");\r\n  const modalOverlay = document.querySelector(".modal-overlay");\r\n\r\n  contactBtn.addEventListener("click", () => {\r\n    modalCallback.style.display = "block";\r\n    modalOverlay.style.display = "block";\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactUs);\r\n\n\n//# sourceURL=webpack:///./modules/services.js?'
        );

        /***/
      },

    /***/ "./modules/slider.js":
      /*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst slider = () => {\r\n  const sliderItems = document.querySelectorAll(".item");\r\n\r\n  let currentSlide = 0;\r\n\r\n  const autoSlide = () => {\r\n    sliderItems[currentSlide].style.display = "none";\r\n    currentSlide++;\r\n\r\n    if (currentSlide >= sliderItems.length) {\r\n      currentSlide = 0;\r\n    }\r\n\r\n    sliderItems[currentSlide].style.display = "block";\r\n  };\r\n\r\n  const startSlide = () => {\r\n    setInterval(autoSlide, 3000);\r\n  };\r\n\r\n  startSlide();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./index.js");
  /******/
  /******/
})();
