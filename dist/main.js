/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_contacts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/contacts */ \"./src/modules/contacts.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_maskPhone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/maskPhone */ \"./src/modules/maskPhone.js\");\n/* harmony import */ var _modules_formula__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/formula */ \"./src/modules/formula.js\");\n/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/accordion */ \"./src/modules/accordion.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_contacts__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_maskPhone__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_formula__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n;(0,_modules_accordion__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\n\n//# sourceURL=webpack://layout/./src/index.js?");

/***/ }),

/***/ "./src/modules/accordion.js":
/*!**********************************!*\
  !*** ./src/modules/accordion.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst accordion = () => {\r\n    const accordion = document.querySelector('.accordion'),\r\n      titleBlocks = accordion.querySelectorAll('.title_block');\r\n  \r\n    accordion.addEventListener('click', event => {\r\n      if (event.target.closest('.title_block').classList.contains('msg-active')) {\r\n        event.target.classList.remove('msg-active');\r\n      } else {\r\n        titleBlocks.forEach(item => {\r\n          item.classList.remove('msg-active');\r\n        });\r\n        event.target.closest('.title_block').classList.add('msg-active');\r\n      }\r\n    });\r\n  }\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordion);\n\n//# sourceURL=webpack://layout/./src/modules/accordion.js?");

/***/ }),

/***/ "./src/modules/contacts.js":
/*!*********************************!*\
  !*** ./src/modules/contacts.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contacts = () => {\r\n    const arrow = document.querySelector('.header-contacts__arrow')\r\n    const number = document.querySelector('.header-contacts__phone-number-accord a')\r\n    let count = 0\r\n\r\n    arrow.addEventListener('click', function(){\r\n        if(count == 0){\r\n            number.style.opacity = 1\r\n            number.style.marginTop = 20 + 'px'\r\n            arrow.style.transform = 'rotate(180deg)'\r\n            count++\r\n        }else if(count == 1){\r\n            number.style.opacity = 0\r\n            number.style.marginTop = 0 + 'px'\r\n            arrow.style.transform = 'rotate(0deg)'\r\n            count = 0\r\n        }\r\n    })\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contacts);\n\n//# sourceURL=webpack://layout/./src/modules/contacts.js?");

/***/ }),

/***/ "./src/modules/formula.js":
/*!********************************!*\
  !*** ./src/modules/formula.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst formula = () => {\r\n\r\n    const itemActive = document.querySelectorAll('.formula-item')\r\n\r\n    itemActive.forEach(function (item) {\r\n        item.addEventListener('mouseover', function() {\r\n            this.classList.add('active-item')\r\n        })\r\n        item.addEventListener(\"mouseout\",function() {\r\n            this.classList.remove('active-item')\r\n        })\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formula);   \n\n//# sourceURL=webpack://layout/./src/modules/formula.js?");

/***/ }),

/***/ "./src/modules/maskPhone.js":
/*!**********************************!*\
  !*** ./src/modules/maskPhone.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst maskPhone = () => {\r\n\r\n    window.addEventListener(\"DOMContentLoaded\", function() {\r\n        [].forEach.call( document.querySelectorAll('input[name=phone]'), function(input) {\r\n        var keyCode;\r\n        function mask(event) {\r\n            event.keyCode && (keyCode = event.keyCode);\r\n            var pos = this.selectionStart;\r\n            if (pos < 3) event.preventDefault();\r\n            var matrix = \"+7 (___) ___ ____\",\r\n                i = 0,\r\n                def = matrix.replace(/\\D/g, \"\"),\r\n                val = this.value.replace(/\\D/g, \"\"),\r\n                new_value = matrix.replace(/[_\\d]/g, function(a) {\r\n                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a\r\n                });\r\n            i = new_value.indexOf(\"_\");\r\n            if (i != -1) {\r\n                i < 5 && (i = 3);\r\n                new_value = new_value.slice(0, i)\r\n            }\r\n            var reg = matrix.substr(0, this.value.length).replace(/_+/g,\r\n                function(a) {\r\n                    return \"\\\\d{1,\" + a.length + \"}\"\r\n                }).replace(/[+()]/g, \"\\\\$&\");\r\n            reg = new RegExp(\"^\" + reg + \"$\");\r\n            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;\r\n            if (event.type == \"blur\" && this.value.length < 5)  this.value = \"\"\r\n        }\r\n    \r\n        input.addEventListener(\"input\", mask, false);\r\n        input.addEventListener(\"focus\", mask, false);\r\n        input.addEventListener(\"blur\", mask, false);\r\n        input.addEventListener(\"keydown\", mask, false)\r\n    \r\n      });\r\n    });\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (maskPhone);\n\n//# sourceURL=webpack://layout/./src/modules/maskPhone.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    let menu = document.querySelector('.menu')\r\n    let menuModal = document.querySelector('.popup-dialog-menu')\r\n\r\n    menu.addEventListener('click', () => {\r\n        menuModal.style.marginRight = 645 + 'px'\r\n    })\r\n    document.addEventListener('click', (e) => {\r\n        if (e.target.closest('.close-menu') || e.target.classList.contains('.popup-menu > .row')){\r\n            menuModal.style.marginRight = 0\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu); \n\n//# sourceURL=webpack://layout/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal); \n\n//# sourceURL=webpack://layout/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n    const anchors = document.querySelectorAll('a[href*=\"#\"]')\r\n\r\n    anchors.forEach((anchor) => {\r\n    anchor.addEventListener('click', function (e) {\r\n        e.preventDefault()\r\n        \r\n        const blockID = anchor.getAttribute('href').substr(1)\r\n        \r\n        document.getElementById(blockID).scrollIntoView({\r\n        behavior: 'smooth',\r\n        block: 'start'\r\n        })\r\n    })\r\n    })\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://layout/./src/modules/scroll.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;