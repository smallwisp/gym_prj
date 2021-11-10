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

/***/ "./src/modules/openModals.js":
/*!***********************************!*\
  !*** ./src/modules/openModals.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar openModals = function openModals() {\n  var right = document.querySelector('.right'),\n      visitForm = document.querySelector('#free_visit_form');\n  right.addEventListener('click', function (event) {\n    var target = event.target;\n    console.log(target);\n\n    if (target.classList.contains('open-popup')) {\n      visitForm.style.display = 'block';\n    }\n\n    ;\n    visitForm.addEventListener('click', function (event) {\n      var target = event.target;\n      console.log(event.target);\n\n      if (target.classList.contains('overlay') || target.classList.contains('close_icon')) {\n        visitForm.style.display = 'none';\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openModals);\n\n//# sourceURL=webpack://diplom_middle/./src/modules/openModals.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("25445ae1921167815c73")
/******/ })();
/******/ 
/******/ }
);