"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/love",{

/***/ "./pages/love/index.tsx":
/*!******************************!*\
  !*** ./pages/love/index.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Love; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _love_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./love.module.css */ \"./pages/love/love.module.css\");\n/* harmony import */ var _love_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_love_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Love() {\n    const TextRing = (text, size)=>{\n        const CHARS = text.split(\"\");\n        const INNER_ANGLE = 360 / CHARS.length;\n        const RADIUS = 2;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n            className: (_love_module_css__WEBPACK_IMPORTED_MODULE_1___default().text_ring),\n            style: {\n                \"--total\": CHARS.length,\n                \"--radius\": RADIUS / Math.sin(INNER_ANGLE / (180 / Math.PI)),\n                \"width\": size,\n                \"height\": size\n            },\n            children: CHARS.map((char, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                    fill: \"white\",\n                    style: {\n                        \"--index\": index\n                    },\n                    children: char\n                }, index, false, {\n                    fileName: \"/Users/hayward_kim/Developer/hayward.kim/pages/love/index.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 6\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/hayward_kim/Developer/hayward.kim/pages/love/index.tsx\",\n            lineNumber: 10,\n            columnNumber: 4\n        }, this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat((_love_module_css__WEBPACK_IMPORTED_MODULE_1___default().content), \" row center\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_love_module_css__WEBPACK_IMPORTED_MODULE_1___default().circle), \" \").concat((_love_module_css__WEBPACK_IMPORTED_MODULE_1___default().inner)),\n                    children: TextRing(\"HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   \", \"max(30vw, 300px)\")\n                }, void 0, false, {\n                    fileName: \"/Users/hayward_kim/Developer/hayward.kim/pages/love/index.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_love_module_css__WEBPACK_IMPORTED_MODULE_1___default().circle), \" \").concat((_love_module_css__WEBPACK_IMPORTED_MODULE_1___default().middle)),\n                    children: TextRing(\"HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   \", \"max(50vw, 500px)\")\n                }, void 0, false, {\n                    fileName: \"/Users/hayward_kim/Developer/hayward.kim/pages/love/index.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_love_module_css__WEBPACK_IMPORTED_MODULE_1___default().circle), \" \").concat((_love_module_css__WEBPACK_IMPORTED_MODULE_1___default().outer)),\n                    children: TextRing(\"HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   \", \"max(80vw, 800px)\")\n                }, void 0, false, {\n                    fileName: \"/Users/hayward_kim/Developer/hayward.kim/pages/love/index.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_love_module_css__WEBPACK_IMPORTED_MODULE_1___default().frame), \" column start\"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat((_love_module_css__WEBPACK_IMPORTED_MODULE_1___default().title), \" \").concat((_love_module_css__WEBPACK_IMPORTED_MODULE_1___default().slidein_animation)),\n                        children: \"rntkddms\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hayward_kim/Developer/hayward.kim/pages/love/index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 6\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/hayward_kim/Developer/hayward.kim/pages/love/index.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/hayward_kim/Developer/hayward.kim/pages/love/index.tsx\",\n            lineNumber: 25,\n            columnNumber: 4\n        }, this)\n    }, void 0, false);\n}\n_c = Love;\nvar _c;\n$RefreshReg$(_c, \"Love\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb3ZlL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBc0M7QUFFdkIsU0FBU0M7SUFDcEIsTUFBTUMsV0FBVyxDQUFDQyxNQUFjQztRQUNsQyxNQUFNQyxRQUFRRixLQUFLRyxLQUFLLENBQUM7UUFDekIsTUFBTUMsY0FBYyxNQUFNRixNQUFNRyxNQUFNO1FBQ3RDLE1BQU1DLFNBQVM7UUFFZixxQkFDQyw4REFBQ0M7WUFBSUMsV0FBV1gsbUVBQWU7WUFBRUEsT0FBTztnQkFBRSxXQUFXSyxNQUFNRyxNQUFNO2dCQUFFLFlBQVlDLFNBQVNJLEtBQUtDLEdBQUcsQ0FBQ1AsY0FBZSxPQUFNTSxLQUFLRSxFQUFFO2dCQUFJLFNBQVNYO2dCQUFNLFVBQVVBO1lBQUs7c0JBRTlKQyxNQUFNVyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2hCLDhEQUFDZjtvQkFBaUJnQixNQUFLO29CQUFRbkIsT0FBTzt3QkFBQyxXQUFXa0I7b0JBQU07OEJBQ3hERDttQkFEV0M7Ozs7Ozs7Ozs7SUFNYjtJQUlGLHFCQUNDO2tCQUNDLDRFQUFDRTtZQUFJVCxXQUFXLEdBQWlCLE9BQWRYLGlFQUFhLEVBQUM7OzhCQUNoQyw4REFBQ29CO29CQUFJVCxXQUFXLEdBQW1CWCxPQUFoQkEsZ0VBQVksRUFBQyxLQUFlLE9BQVpBLCtEQUFXOzhCQUMzQ0UsU0FBUyw4Q0FBOEM7Ozs7Ozs4QkFFMUQsOERBQUNrQjtvQkFBSVQsV0FBVyxHQUFtQlgsT0FBaEJBLGdFQUFZLEVBQUMsS0FBZ0IsT0FBYkEsZ0VBQVk7OEJBQzVDRSxTQUFTLDBFQUEwRTs7Ozs7OzhCQUV0Riw4REFBQ2tCO29CQUFJVCxXQUFXLEdBQW1CWCxPQUFoQkEsZ0VBQVksRUFBQyxLQUFlLE9BQVpBLCtEQUFXOzhCQUMzQ0UsU0FBUyxrSUFBa0k7Ozs7Ozs4QkFHOUksOERBQUNrQjtvQkFBSVQsV0FBVyxHQUFlLE9BQVpYLCtEQUFXLEVBQUM7OEJBQzlCLDRFQUFDb0I7d0JBQUlULFdBQVcsR0FBa0JYLE9BQWZBLCtEQUFXLEVBQUMsS0FBMkIsT0FBeEJBLDJFQUF1QjtrQ0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xFO0tBdkN3QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG92ZS9pbmRleC50c3g/OTRlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGUgZnJvbSBcIi4vbG92ZS5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvdmUoKSB7XG4gICAgY29uc3QgVGV4dFJpbmcgPSAodGV4dDogc3RyaW5nLCBzaXplOiBzdHJpbmcpID0+IHtcblx0XHRjb25zdCBDSEFSUyA9IHRleHQuc3BsaXQoJycpXG5cdFx0Y29uc3QgSU5ORVJfQU5HTEUgPSAzNjAgLyBDSEFSUy5sZW5ndGhcblx0XHRjb25zdCBSQURJVVMgPSAyO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxzdmcgY2xhc3NOYW1lPXtzdHlsZS50ZXh0X3Jpbmd9IHN0eWxlPXt7ICctLXRvdGFsJzogQ0hBUlMubGVuZ3RoLCAnLS1yYWRpdXMnOiBSQURJVVMgLyBNYXRoLnNpbihJTk5FUl9BTkdMRSAvICgxODAgLyBNYXRoLlBJKSksICd3aWR0aCc6IHNpemUsICdoZWlnaHQnOiBzaXplIH0gYXMgUmVhY3QuQ1NTUHJvcGVydGllc30+XG5cdFx0XHR7LyogPHN2ZyBjbGFzc05hbWU9e3N0eWxlLnRleHRfcmluZ30gaGVpZ2h0PXtzaXplfSB3aWR0aD17c2l6ZX0gc3R5bGU9e3sgJy0tdG90YWwnOiBDSEFSUy5sZW5ndGgsICctLXJhZGl1cyc6IFJBRElVUyAvIE1hdGguc2luKElOTkVSX0FOR0xFIC8gKDE4MCAvIE1hdGguUEkpKSB9IGFzIFJlYWN0LkNTU1Byb3BlcnRpZXN9PiAqL31cblx0XHRcdHtDSEFSUy5tYXAoKGNoYXIsIGluZGV4KSA9PiAoXG5cdFx0XHQgIDx0ZXh0IGtleT17aW5kZXh9IGZpbGw9XCJ3aGl0ZVwiIHN0eWxlPXt7Jy0taW5kZXgnOiBpbmRleCB9IGFzIFJlYWN0LkNTU1Byb3BlcnRpZXN9PlxuXHRcdFx0XHR7Y2hhcn1cblx0XHRcdCAgPC90ZXh0PlxuXHRcdFx0KSl9XG5cdFx0ICA8L3N2Zz5cblx0XHQpO1xuXHQgIH1cblx0ICBcblxuXHQgIFxuXHRyZXR1cm4gKFxuXHRcdDw+XHRcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZS5jb250ZW50fSByb3cgY2VudGVyYH0gPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGUuY2lyY2xlfSAke3N0eWxlLmlubmVyfWB9PlxuXHRcdFx0XHRcdHsgVGV4dFJpbmcoXCJIQVlXQVJEX0tJTSAgIEhBWVdBUkRfS0lNICAgSEFZV0FSRF9LSU0gICBcIiwgXCJtYXgoMzB2dywgMzAwcHgpXCIpIH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZS5jaXJjbGV9ICR7c3R5bGUubWlkZGxlfWB9PlxuXHRcdFx0XHRcdHsgVGV4dFJpbmcoXCJIQVlXQVJEX0tJTSAgIEhBWVdBUkRfS0lNICAgSEFZV0FSRF9LSU0gICBIQVlXQVJEX0tJTSAgIEhBWVdBUkRfS0lNICAgXCIsIFwibWF4KDUwdncsIDUwMHB4KVwiKSB9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGUuY2lyY2xlfSAke3N0eWxlLm91dGVyfWB9PlxuXHRcdFx0XHRcdHsgVGV4dFJpbmcoXCJIQVlXQVJEX0tJTSAgIEhBWVdBUkRfS0lNICAgSEFZV0FSRF9LSU0gICBIQVlXQVJEX0tJTSAgIEhBWVdBUkRfS0lNICAgSEFZV0FSRF9LSU0gICBIQVlXQVJEX0tJTSAgIEhBWVdBUkRfS0lNICAgSEFZV0FSRF9LSU0gICBcIiwgXCJtYXgoODB2dywgODAwcHgpXCIpIH1cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlLmZyYW1lfSBjb2x1bW4gc3RhcnRgfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGUudGl0bGV9ICR7c3R5bGUuc2xpZGVpbl9hbmltYXRpb259YH0+cm50a2RkbXM8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cbiAgICApO1xufSJdLCJuYW1lcyI6WyJzdHlsZSIsIkxvdmUiLCJUZXh0UmluZyIsInRleHQiLCJzaXplIiwiQ0hBUlMiLCJzcGxpdCIsIklOTkVSX0FOR0xFIiwibGVuZ3RoIiwiUkFESVVTIiwic3ZnIiwiY2xhc3NOYW1lIiwidGV4dF9yaW5nIiwiTWF0aCIsInNpbiIsIlBJIiwibWFwIiwiY2hhciIsImluZGV4IiwiZmlsbCIsImRpdiIsImNvbnRlbnQiLCJjaXJjbGUiLCJpbm5lciIsIm1pZGRsZSIsIm91dGVyIiwiZnJhbWUiLCJ0aXRsZSIsInNsaWRlaW5fYW5pbWF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/love/index.tsx\n"));

/***/ })

});