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

/***/ "./src/modules/sendForms.js":
/*!**********************************!*\
  !*** ./src/modules/sendForms.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar sendForms = function sendForms() {\n  var forms = document.querySelectorAll('form');\n  var statusMessage = document.createElement('div');\n  statusMessage.style.cssText = 'font-size: 2rem;';\n  var errorMessage = 'Возникла ошибка!',\n      successMessage = 'Форма отправлена! Скоро с вами свяжутся.';\n  forms.forEach(function (item) {\n    item.addEventListener('submit', function (event) {\n      event.preventDefault();\n      item.append(statusMessage);\n      var formData = new FormData(item);\n      var body = {};\n      formData.forEach(function (val, key) {\n        body[key] = val;\n      });\n      postDataPromise(body)[\"catch\"](function (error) {\n        statusMessage.textContent = errorMessage;\n        console.log(error);\n      });\n      console.log(body);\n    });\n  });\n\n  var postDataPromise = /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(body) {\n      var request, response;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              request = fetch('../../server.php', {\n                method: 'POST',\n                headers: {\n                  'Content-type': 'application/json'\n                },\n                body: JSON.stringify(body)\n              });\n              _context.next = 3;\n              return request;\n\n            case 3:\n              response = _context.sent;\n\n              if (!(response.status !== 200)) {\n                _context.next = 6;\n                break;\n              }\n\n              throw new Error('Requets\\'s error!');\n\n            case 6:\n              statusMessage.textContent = successMessage;\n\n            case 7:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function postDataPromise(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForms);\n\n//# sourceURL=webpack://diplom_middle/./src/modules/sendForms.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("65f661a5f3abbe16f03b")
/******/ })();
/******/ 
/******/ }
);