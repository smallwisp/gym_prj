"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom_middle"]("main",{

/***/ "./src/modules/topSlider.js":
/*!**********************************!*\
  !*** ./src/modules/topSlider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar topSlider = function topSlider() {\n  var mainSlider = document.querySelector('.main-slider'),\n      slides = mainSlider.querySelectorAll('.slide');\n  console.log(slides);\n  var currentSlide = 0;\n\n  var prevSlide = function prevSlide(item, currentSlide) {\n    item[currentSlide].style.display = 'none';\n  };\n\n  var nextSlide = function nextSlide(item, currentSlide) {\n    item[currentSlide].style.display = '';\n  };\n\n  var autoPlaySilde = function autoPlaySilde() {\n    prevSlide(slides, currentSlide);\n    currentSlide++;\n\n    if (currentSlide >= slides.length) {\n      currentSlide = 0;\n    }\n\n    ;\n    nextSlide(slides, currentSlide);\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySilde, time);\n  };\n\n  startSlide();\n  /* slides[0].style.display = 'none';\r\n  slides[1].style.display = ''; */\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (topSlider);\n\n//# sourceURL=webpack://diplom_middle/./src/modules/topSlider.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1d70902dfccf5d2f6f0a")
/******/ })();
/******/ 
/******/ }
);