"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _splinetool_react_spline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @splinetool/react-spline */ \"./node_modules/@splinetool/react-spline/dist/react-spline.js\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n// import React from \"react\";\n\n\n\n\n\nfunction Main() {\n    var _s = $RefreshSig$();\n    // const [width, setWidth] = useState(window.innerWidth);\n    const TextRing = (text, radius)=>{\n        _s();\n        const CHARS = text.split(\"\");\n        const INNER_ANGLE = 360 / CHARS.length;\n        const RADIUS = 2;\n        var width = 0;\n        (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n            width = window.innerWidth;\n        });\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().text_ring),\n            height: width * radius,\n            width: width * radius,\n            style: {\n                \"--total\": CHARS.length,\n                \"--radius\": RADIUS / Math.sin(INNER_ANGLE / (180 / Math.PI))\n            },\n            children: CHARS.map((char, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                    fill: \"white\",\n                    style: {\n                        \"--index\": index\n                    },\n                    children: char\n                }, index, false, {\n                    fileName: \"/Users/hayward_kim/Developer/hayward.kim/pages/index.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 6\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/hayward_kim/Developer/hayward.kim/pages/index.tsx\",\n            lineNumber: 22,\n            columnNumber: 5\n        }, this);\n    };\n    _s(TextRing, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat((_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().content), \" row center\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_splinetool_react_spline__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().spline),\n                    style: {\n                        width: \"min(30vw, 500px)\",\n                        height: \"min(30vw, 500px)\"\n                    },\n                    scene: \"https://prod.spline.design/uawC84Q1PaFk1Izt/scene.splinecode\"\n                }, void 0, false, {\n                    fileName: \"/Users/hayward_kim/Developer/hayward.kim/pages/index.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"\".concat((_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().circle), \" \").concat((_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().inner)),\n                    children: TextRing(\"HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   \", 0.3)\n                }, void 0, false, {\n                    fileName: \"/Users/hayward_kim/Developer/hayward.kim/pages/index.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"\".concat((_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().circle), \" \").concat((_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().middle)),\n                    children: TextRing(\"HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   \", 0.5)\n                }, void 0, false, {\n                    fileName: \"/Users/hayward_kim/Developer/hayward.kim/pages/index.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"\".concat((_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().circle), \" \").concat((_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().outer)),\n                    children: TextRing(\"HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   \", 0.9)\n                }, void 0, false, {\n                    fileName: \"/Users/hayward_kim/Developer/hayward.kim/pages/index.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().frame), \" column start\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().slidein_animation),\n                            children: \"방구석 개발자,\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hayward_kim/Developer/hayward.kim/pages/index.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat((_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().title), \" \").concat((_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().slidein_animation)),\n                            children: \"김형석\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hayward_kim/Developer/hayward.kim/pages/index.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/hayward_kim/Developer/hayward.kim/pages/index.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().frame), \" column end\"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"column\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/blog\",\n                                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n                                    children: \"블로그 보기\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/hayward_kim/Developer/hayward.kim/pages/index.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/portfolio\",\n                                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n                                    children: \"포트폴리오 보기\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/hayward_kim/Developer/hayward.kim/pages/index.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/hayward_kim/Developer/hayward.kim/pages/index.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/hayward_kim/Developer/hayward.kim/pages/index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 6\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/hayward_kim/Developer/hayward.kim/pages/index.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/hayward_kim/Developer/hayward.kim/pages/index.tsx\",\n            lineNumber: 36,\n            columnNumber: 4\n        }, this)\n    }, void 0, false);\n}\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUE2Qjs7QUFDaUI7QUFDUDtBQUNWO0FBRUs7QUFFbkIsU0FBU0k7O0lBQ3ZCLHlEQUF5RDtJQUV6RCxNQUFNQyxXQUFXLENBQUNDLE1BQWNDOztRQUMvQixNQUFNQyxRQUFRRixLQUFLRyxLQUFLLENBQUM7UUFDekIsTUFBTUMsY0FBYyxNQUFNRixNQUFNRyxNQUFNO1FBQ3RDLE1BQU1DLFNBQVM7UUFDZixJQUFJQyxRQUFRO1FBRVpWLGdEQUFTQSxDQUFDO1lBQ1RVLFFBQVFDLE9BQU9DLFVBQVU7UUFDMUI7UUFFQSxxQkFDRSw4REFBQ0M7WUFBSUMsV0FBV2hCLG9FQUFlO1lBQUVrQixRQUFTTixRQUFRTjtZQUFTTSxPQUFRQSxRQUFRTjtZQUFTTixPQUFPO2dCQUFFLFdBQVdPLE1BQU1HLE1BQU07Z0JBQUUsWUFBWUMsU0FBU1EsS0FBS0MsR0FBRyxDQUFDWCxjQUFlLE9BQU1VLEtBQUtFLEVBQUU7WUFBRztzQkFDbkxkLE1BQU1lLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDaEIsOERBQUNuQjtvQkFBaUJvQixNQUFLO29CQUFRekIsT0FBTzt3QkFBQyxXQUFXd0I7b0JBQU07OEJBQ3hERDttQkFEV0M7Ozs7Ozs7Ozs7SUFNYjtPQW5CSXBCO0lBdUJOLHFCQUNDO2tCQUNDLDRFQUFDc0I7WUFBSVYsV0FBVyxHQUFpQixPQUFkaEIsa0VBQWEsRUFBQzs7OEJBQ2hDLDhEQUFDRCxnRUFBTUE7b0JBQUNpQixXQUFXaEIsaUVBQVk7b0JBQUVBLE9BQU87d0JBQUNZLE9BQU87d0JBQW9CTSxRQUFRO29CQUFrQjtvQkFBR1csT0FBTTs7Ozs7OzhCQUN2Ryw4REFBQ0M7b0JBQUtkLFdBQVcsR0FBbUJoQixPQUFoQkEsaUVBQVksRUFBQyxLQUFlLE9BQVpBLGdFQUFXOzhCQUM1Q0ksU0FBUyw4Q0FBOEM7Ozs7Ozs4QkFFMUQsOERBQUMwQjtvQkFBS2QsV0FBVyxHQUFtQmhCLE9BQWhCQSxpRUFBWSxFQUFDLEtBQWdCLE9BQWJBLGlFQUFZOzhCQUM3Q0ksU0FBUywwRUFBMEU7Ozs7Ozs4QkFFdEYsOERBQUMwQjtvQkFBS2QsV0FBVyxHQUFtQmhCLE9BQWhCQSxpRUFBWSxFQUFDLEtBQWUsT0FBWkEsZ0VBQVc7OEJBQzVDSSxTQUFTLGtJQUFrSTs7Ozs7OzhCQVc5SSw4REFBQ3NCO29CQUFJVixXQUFXLEdBQWUsT0FBWmhCLGdFQUFXLEVBQUM7O3NDQUM5Qiw4REFBQ29DOzRCQUFHcEIsV0FBV2hCLDRFQUF1QjtzQ0FBRTs7Ozs7O3NDQUN4Qyw4REFBQzBCOzRCQUFJVixXQUFXLEdBQWtCaEIsT0FBZkEsZ0VBQVcsRUFBQyxLQUEyQixPQUF4QkEsNEVBQXVCO3NDQUFJOzs7Ozs7Ozs7Ozs7OEJBRTlELDhEQUFDMEI7b0JBQUlWLFdBQVcsR0FBZSxPQUFaaEIsZ0VBQVcsRUFBQzs4QkFDOUIsNEVBQUMwQjt3QkFBSVYsV0FBVTtrQ0FDZCw0RUFBQ1U7NEJBQUlWLFdBQVU7OzhDQUNPLDhEQUFDZixrREFBSUE7b0NBQUNzQyxNQUFLO29DQUFRdkIsV0FBV2hCLGlFQUFZOzhDQUFFOzs7Ozs7OENBQzVDLDhEQUFDQyxrREFBSUE7b0NBQUNzQyxNQUFLO29DQUFhdkIsV0FBV2hCLGlFQUFZOzhDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU83RTtLQS9Ed0JHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTcGxpbmUgZnJvbSBcIkBzcGxpbmV0b29sL3JlYWN0LXNwbGluZVwiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oKSB7XG5cdC8vIGNvbnN0IFt3aWR0aCwgc2V0V2lkdGhdID0gdXNlU3RhdGUod2luZG93LmlubmVyV2lkdGgpO1xuXG5cdGNvbnN0IFRleHRSaW5nID0gKHRleHQ6IHN0cmluZywgcmFkaXVzOiBudW1iZXIpID0+IHtcblx0XHRjb25zdCBDSEFSUyA9IHRleHQuc3BsaXQoJycpXG5cdFx0Y29uc3QgSU5ORVJfQU5HTEUgPSAzNjAgLyBDSEFSUy5sZW5ndGhcblx0XHRjb25zdCBSQURJVVMgPSAyO1xuXHRcdHZhciB3aWR0aCA9IDA7XG5cdFx0XG5cdFx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRcdHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gKFxuXHRcdCAgPHN2ZyBjbGFzc05hbWU9e3N0eWxlLnRleHRfcmluZ30gaGVpZ2h0PXsgd2lkdGggKiByYWRpdXMgfSB3aWR0aD17IHdpZHRoICogcmFkaXVzIH0gc3R5bGU9e3sgJy0tdG90YWwnOiBDSEFSUy5sZW5ndGgsICctLXJhZGl1cyc6IFJBRElVUyAvIE1hdGguc2luKElOTkVSX0FOR0xFIC8gKDE4MCAvIE1hdGguUEkpKSB9IGFzIFJlYWN0LkNTU1Byb3BlcnRpZXN9PlxuXHRcdFx0e0NIQVJTLm1hcCgoY2hhciwgaW5kZXgpID0+IChcblx0XHRcdCAgPHRleHQga2V5PXtpbmRleH0gZmlsbD1cIndoaXRlXCIgc3R5bGU9e3snLS1pbmRleCc6IGluZGV4IH0gYXMgUmVhY3QuQ1NTUHJvcGVydGllc30+XG5cdFx0XHRcdHtjaGFyfVxuXHRcdFx0ICA8L3RleHQ+XG5cdFx0XHQpKX1cblx0XHQgIDwvc3ZnPlxuXHRcdClcblx0ICB9XG5cdCAgXG5cblx0ICBcblx0cmV0dXJuIChcblx0XHQ8Plx0XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGUuY29udGVudH0gcm93IGNlbnRlcmB9ID5cblx0XHRcdFx0PFNwbGluZSBjbGFzc05hbWU9e3N0eWxlLnNwbGluZX0gc3R5bGU9e3t3aWR0aDogJ21pbigzMHZ3LCA1MDBweCknLCBoZWlnaHQ6ICdtaW4oMzB2dywgNTAwcHgpJ319IHNjZW5lPVwiaHR0cHM6Ly9wcm9kLnNwbGluZS5kZXNpZ24vdWF3Qzg0UTFQYUZrMUl6dC9zY2VuZS5zcGxpbmVjb2RlXCIgLz5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtgJHtzdHlsZS5jaXJjbGV9ICR7c3R5bGUuaW5uZXJ9YH0+XG5cdFx0XHRcdFx0eyBUZXh0UmluZyhcIkhBWVdBUkRfS0lNICAgSEFZV0FSRF9LSU0gICBIQVlXQVJEX0tJTSAgIFwiLCAwLjMpIH1cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2Ake3N0eWxlLmNpcmNsZX0gJHtzdHlsZS5taWRkbGV9YH0+XG5cdFx0XHRcdFx0eyBUZXh0UmluZyhcIkhBWVdBUkRfS0lNICAgSEFZV0FSRF9LSU0gICBIQVlXQVJEX0tJTSAgIEhBWVdBUkRfS0lNICAgSEFZV0FSRF9LSU0gICBcIiwgMC41KSB9XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtgJHtzdHlsZS5jaXJjbGV9ICR7c3R5bGUub3V0ZXJ9YH0+XG5cdFx0XHRcdFx0eyBUZXh0UmluZyhcIkhBWVdBUkRfS0lNICAgSEFZV0FSRF9LSU0gICBIQVlXQVJEX0tJTSAgIEhBWVdBUkRfS0lNICAgSEFZV0FSRF9LSU0gICBIQVlXQVJEX0tJTSAgIEhBWVdBUkRfS0lNICAgSEFZV0FSRF9LSU0gICBIQVlXQVJEX0tJTSAgIFwiLCAwLjkpIH1cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHR7LyogPHN2ZyBjbGFzc05hbWU9e2Ake3N0eWxlLmNpcmNsZX0gJHtzdHlsZS5taWRkbGV9YH0+XG5cdFx0XHRcdFx0eyBUZXh0UmluZyhcIkhBWVdBUkRfS0lNICAgSEFZV0FSRF9LSU0gICBIQVlXQVJEX0tJTSAgIEhBWVdBUkRfS0lNICAgSEFZV0FSRF9LSU0gICBcIikgfVxuXHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0PHN2ZyBjbGFzc05hbWU9e2Ake3N0eWxlLmNpcmNsZX0gJHtzdHlsZS5vdXRlcn1gfT5cblx0XHRcdFx0XHR7IFRleHRSaW5nKFwiSEFZV0FSRF9LSU0gICBIQVlXQVJEX0tJTSAgIEhBWVdBUkRfS0lNICAgSEFZV0FSRF9LSU0gICBIQVlXQVJEX0tJTSAgIEhBWVdBUkRfS0lNICAgSEFZV0FSRF9LSU0gICBIQVlXQVJEX0tJTSAgIEhBWVdBUkRfS0lNICAgXCIpIH1cblx0XHRcdFx0PC9zdmc+ICovfVxuXHRcdFx0XHR7LyogPEltYWdlIHNyYz1cIi4vY2lyY3VsYXJfdGV4dF9pbm5lci5zdmdcIiBhbHQ9XCJIQVlXQVJEX0tJTVwiIGNsYXNzTmFtZT17YCR7c3R5bGUuY2lyY2xlfSAke3N0eWxlLmlubmVyfWB9IHdpZHRoPXs1MDB9IGhlaWdodD17NTAwfS8+ICovfVxuXG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlLmZyYW1lfSBjb2x1bW4gc3RhcnRgfT5cblx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPXtzdHlsZS5zbGlkZWluX2FuaW1hdGlvbn0+67Cp6rWs7ISdIOqwnOuwnOyekCw8L2gyPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZS50aXRsZX0gJHtzdHlsZS5zbGlkZWluX2FuaW1hdGlvbn1gfT7quYDtmJXshJ08L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZS5mcmFtZX0gY29sdW1uIGVuZGB9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYmxvZ1wiIGNsYXNzTmFtZT17c3R5bGUuYnV0dG9ufT7ruJTroZzqt7gg67O06riwPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9ydGZvbGlvXCIgY2xhc3NOYW1lPXtzdHlsZS5idXR0b259Pu2PrO2KuO2PtOumrOyYpCDrs7TquLA8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn07XG5cbiJdLCJuYW1lcyI6WyJTcGxpbmUiLCJzdHlsZSIsIkxpbmsiLCJ1c2VFZmZlY3QiLCJNYWluIiwiVGV4dFJpbmciLCJ0ZXh0IiwicmFkaXVzIiwiQ0hBUlMiLCJzcGxpdCIsIklOTkVSX0FOR0xFIiwibGVuZ3RoIiwiUkFESVVTIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwic3ZnIiwiY2xhc3NOYW1lIiwidGV4dF9yaW5nIiwiaGVpZ2h0IiwiTWF0aCIsInNpbiIsIlBJIiwibWFwIiwiY2hhciIsImluZGV4IiwiZmlsbCIsImRpdiIsImNvbnRlbnQiLCJzcGxpbmUiLCJzY2VuZSIsInNwYW4iLCJjaXJjbGUiLCJpbm5lciIsIm1pZGRsZSIsIm91dGVyIiwiZnJhbWUiLCJoMiIsInNsaWRlaW5fYW5pbWF0aW9uIiwidGl0bGUiLCJocmVmIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});