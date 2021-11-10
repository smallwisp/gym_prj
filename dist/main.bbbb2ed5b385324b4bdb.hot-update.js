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

/***/ "./src/modules/clubSelect.js":
/*!***********************************!*\
  !*** ./src/modules/clubSelect.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar selectClub = function selectClub() {\n  var clubSelect = document.querySelector('.club-select'),\n      clubsList = document.querySelector('.clubs-list');\n  clubSelect.addEventListener('click', function (event) {\n    console.log(event.target.tagName);\n\n    if (event.target.tagName == 'P') {\n      clubsList.style.display = 'block';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectClub);\n\n//# sourceURL=webpack://diplom_middle/./src/modules/clubSelect.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5e76bdfb9f28b8c14151")
/******/ })();
/******/ 
/******/ }
);