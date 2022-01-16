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

/***/ "./src/modules/checkAllInputs.js":
/*!***************************************!*\
  !*** ./src/modules/checkAllInputs.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _maskPhone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maskPhone */ \"./src/modules/maskPhone.js\");\n\n\nvar checkAllInputs = function checkAllInputs() {\n  var inputsAll = document.querySelectorAll('input');\n  inputsAll.forEach(function (item) {\n    item.addEventListener('input', function (event) {\n      if (event.target.name === 'name') {\n        console.log(event.target);\n        var nameValue = event.target.value;\n        event.target.value = nameValue.replace(/[;\\+\\>\\<\\*\\!\\=\\.@:\\?\\,#\\$\\%^\\&\\}{\\[\\]\\^\\\"\\\\\\|\\/\\_)(\\w]/gi, '');\n      }\n      /* else if (event.target.name === 'phone') {\r\n      console.log(event.target.tagName);\r\n      maskPhone(event.target.tagName.toLowerCase());\r\n      } */\n\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkAllInputs);\n\n//# sourceURL=webpack://diplom_middle/./src/modules/checkAllInputs.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a7c6ee5708a4ce670db9")
/******/ })();
/******/ 
/******/ }
);