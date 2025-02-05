/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/CartContext.js":
/*!********************************!*\
  !*** ./context/CartContext.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartProvider: () => (/* binding */ CartProvider),\n/* harmony export */   useCart: () => (/* binding */ useCart)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// Create the Context\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\n// Cart Provider Component\nfunction CartProvider({ children }) {\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // Load cart from localStorage on mount\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"CartProvider.useEffect\": ()=>{\n            const savedCart = JSON.parse(localStorage.getItem(\"cart\")) || [];\n            setCart(savedCart);\n        }\n    }[\"CartProvider.useEffect\"], []);\n    // Save cart to localStorage when it changes\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"CartProvider.useEffect\": ()=>{\n            localStorage.setItem(\"cart\", JSON.stringify(cart));\n        }\n    }[\"CartProvider.useEffect\"], [\n        cart\n    ]);\n    // Add item to cart\n    const addToCart = (item)=>{\n        setCart((prevCart)=>[\n                ...prevCart,\n                item\n            ]);\n    };\n    // Remove item from cart\n    const removeFromCart = (index)=>{\n        setCart((prevCart)=>prevCart.filter((_, i)=>i !== index));\n    };\n    // Clear cart after checkout\n    const clearCart = ()=>{\n        setCart([]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            cart,\n            addToCart,\n            removeFromCart,\n            clearCart\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/josh/Documents/git/photopresets-nextjs/context/CartContext.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n// Custom hook to use the cart\nfunction useCart() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0NhcnRDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBdUU7QUFFdkUscUJBQXFCO0FBQ3JCLE1BQU1JLDRCQUFjSixvREFBYUE7QUFFakMsMEJBQTBCO0FBQ25CLFNBQVNLLGFBQWEsRUFBRUMsUUFBUSxFQUFFO0lBQ3ZDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRW5DLHVDQUF1QztJQUN2Q0QsZ0RBQVNBO2tDQUFDO1lBQ1IsTUFBTU8sWUFBWUMsS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ2hFTCxRQUFRQztRQUNWO2lDQUFHLEVBQUU7SUFFTCw0Q0FBNEM7SUFDNUNQLGdEQUFTQTtrQ0FBQztZQUNSVSxhQUFhRSxPQUFPLENBQUMsUUFBUUosS0FBS0ssU0FBUyxDQUFDUjtRQUM5QztpQ0FBRztRQUFDQTtLQUFLO0lBRVQsbUJBQW1CO0lBQ25CLE1BQU1TLFlBQVksQ0FBQ0M7UUFDakJULFFBQVEsQ0FBQ1UsV0FBYTttQkFBSUE7Z0JBQVVEO2FBQUs7SUFDM0M7SUFFQSx3QkFBd0I7SUFDeEIsTUFBTUUsaUJBQWlCLENBQUNDO1FBQ3RCWixRQUFRLENBQUNVLFdBQWFBLFNBQVNHLE1BQU0sQ0FBQyxDQUFDQyxHQUFHQyxJQUFNQSxNQUFNSDtJQUN4RDtJQUVBLDRCQUE0QjtJQUM1QixNQUFNSSxZQUFZO1FBQ2hCaEIsUUFBUSxFQUFFO0lBQ1o7SUFFQSxxQkFDRSw4REFBQ0osWUFBWXFCLFFBQVE7UUFDbkJDLE9BQU87WUFBRW5CO1lBQU1TO1lBQVdHO1lBQWdCSztRQUFVO2tCQUVuRGxCOzs7Ozs7QUFHUDtBQUVBLDhCQUE4QjtBQUN2QixTQUFTcUI7SUFDZCxPQUFPMUIsaURBQVVBLENBQUNHO0FBQ3BCIiwic291cmNlcyI6WyIvVXNlcnMvam9zaC9Eb2N1bWVudHMvZ2l0L3Bob3RvcHJlc2V0cy1uZXh0anMvY29udGV4dC9DYXJ0Q29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIENyZWF0ZSB0aGUgQ29udGV4dFxuY29uc3QgQ2FydENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbi8vIENhcnQgUHJvdmlkZXIgQ29tcG9uZW50XG5leHBvcnQgZnVuY3Rpb24gQ2FydFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbY2FydCwgc2V0Q2FydF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgLy8gTG9hZCBjYXJ0IGZyb20gbG9jYWxTdG9yYWdlIG9uIG1vdW50XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2F2ZWRDYXJ0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRcIikpIHx8IFtdO1xuICAgIHNldENhcnQoc2F2ZWRDYXJ0KTtcbiAgfSwgW10pO1xuXG4gIC8vIFNhdmUgY2FydCB0byBsb2NhbFN0b3JhZ2Ugd2hlbiBpdCBjaGFuZ2VzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KGNhcnQpKTtcbiAgfSwgW2NhcnRdKTtcblxuICAvLyBBZGQgaXRlbSB0byBjYXJ0XG4gIGNvbnN0IGFkZFRvQ2FydCA9IChpdGVtKSA9PiB7XG4gICAgc2V0Q2FydCgocHJldkNhcnQpID0+IFsuLi5wcmV2Q2FydCwgaXRlbV0pO1xuICB9O1xuXG4gIC8vIFJlbW92ZSBpdGVtIGZyb20gY2FydFxuICBjb25zdCByZW1vdmVGcm9tQ2FydCA9IChpbmRleCkgPT4ge1xuICAgIHNldENhcnQoKHByZXZDYXJ0KSA9PiBwcmV2Q2FydC5maWx0ZXIoKF8sIGkpID0+IGkgIT09IGluZGV4KSk7XG4gIH07XG5cbiAgLy8gQ2xlYXIgY2FydCBhZnRlciBjaGVja291dFxuICBjb25zdCBjbGVhckNhcnQgPSAoKSA9PiB7XG4gICAgc2V0Q2FydChbXSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FydENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7IGNhcnQsIGFkZFRvQ2FydCwgcmVtb3ZlRnJvbUNhcnQsIGNsZWFyQ2FydCB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NhcnRDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG4vLyBDdXN0b20gaG9vayB0byB1c2UgdGhlIGNhcnRcbmV4cG9ydCBmdW5jdGlvbiB1c2VDYXJ0KCkge1xuICByZXR1cm4gdXNlQ29udGV4dChDYXJ0Q29udGV4dCk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNhcnRDb250ZXh0IiwiQ2FydFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjYXJ0Iiwic2V0Q2FydCIsInNhdmVkQ2FydCIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiYWRkVG9DYXJ0IiwiaXRlbSIsInByZXZDYXJ0IiwicmVtb3ZlRnJvbUNhcnQiLCJpbmRleCIsImZpbHRlciIsIl8iLCJpIiwiY2xlYXJDYXJ0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUNhcnQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/CartContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_CartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/CartContext */ \"./context/CartContext.js\");\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_CartContext__WEBPACK_IMPORTED_MODULE_2__.CartProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/josh/Documents/git/photopresets-nextjs/pages/_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/josh/Documents/git/photopresets-nextjs/pages/_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEI7QUFDd0I7QUFFdkMsU0FBU0MsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNwRCxxQkFDRSw4REFBQ0gsOERBQVlBO2tCQUNYLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCIiwic291cmNlcyI6WyIvVXNlcnMvam9zaC9Eb2N1bWVudHMvZ2l0L3Bob3RvcHJlc2V0cy1uZXh0anMvcGFnZXMvX2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFsLmNzc1wiO1xuaW1wb3J0IHsgQ2FydFByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHQvQ2FydENvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPENhcnRQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0NhcnRQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJDYXJ0UHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();