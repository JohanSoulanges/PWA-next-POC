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

/***/ "./pages/GenerateComponent.js":
/*!************************************!*\
  !*** ./pages/GenerateComponent.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_qr_reader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-qr-reader */ \"./node_modules/react-qr-reader/dist/esm/index.js\");\n/* harmony import */ var webrtc_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webrtc-adapter */ \"./node_modules/webrtc-adapter/src/js/adapter_core.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst GenerateComponent = (props)=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"No result\");\n    webrtc_adapter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].browserDetails.browser;\n    webrtc_adapter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].browserDetails.version;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_qr_reader__WEBPACK_IMPORTED_MODULE_2__.QrReader, {\n                onResult: (result, error)=>{\n                    if (!!result) {\n                        setData(result === null || result === void 0 ? void 0 : result.text);\n                        console.log(result);\n                    }\n                    if (!!error) {\n                    // console.info(error);\n                    }\n                },\n                //this is facing mode : \"environment \" it will open backcamera of the smartphone and if not found will\n                // open the front camera\n                constraints: {\n                    minAspectRatio: 1.333,\n                    minFrameRate: 30,\n                    width: 1280,\n                    height: 720,\n                    facingMode: \"environment\"\n                },\n                styles: wi\n            }, void 0, false, {\n                fileName: \"/home/damiot/Dyma/Alternance/PWA-Next-POC/pages/GenerateComponent.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: data\n            }, void 0, false, {\n                fileName: \"/home/damiot/Dyma/Alternance/PWA-Next-POC/pages/GenerateComponent.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(GenerateComponent, \"dmPFwrOsvHW3b4sogji5iMpClo0=\");\n_c = GenerateComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GenerateComponent);\nvar _c;\n$RefreshReg$(_c, \"GenerateComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9HZW5lcmF0ZUNvbXBvbmVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDRztBQUNOO0FBQ1M7QUFFOUMsTUFBTUssb0JBQW9CLENBQUNDLFFBQVU7O0lBQ25DLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUVqQ0UsNkVBQThCO0lBQzlCQSw2RUFBOEI7SUFFOUIscUJBQ0U7OzBCQUNFLDhEQUFDRCxxREFBUUE7Z0JBQ1BVLFVBQVUsQ0FBQ0MsUUFBUUMsUUFBVTtvQkFDM0IsSUFBSSxDQUFDLENBQUNELFFBQVE7d0JBQ1pMLFFBQVFLLG1CQUFBQSxvQkFBQUEsS0FBQUEsSUFBQUEsT0FBUUUsSUFBSTt3QkFDcEJDLFFBQVFDLEdBQUcsQ0FBQ0o7b0JBQ2QsQ0FBQztvQkFFRCxJQUFJLENBQUMsQ0FBQ0MsT0FBTztvQkFDWCx1QkFBdUI7b0JBQ3pCLENBQUM7Z0JBQ0g7Z0JBQ0Esc0dBQXNHO2dCQUN0Ryx3QkFBd0I7Z0JBQ3hCSSxhQUFhO29CQUNYQyxnQkFBZ0I7b0JBQ2hCQyxjQUFjO29CQUNkQyxPQUFPO29CQUNQQyxRQUFRO29CQUNSQyxZQUFZO2dCQUNkO2dCQUNBbkIsUUFBUW9COzs7Ozs7MEJBRVYsOERBQUNDOzBCQUFHbEI7Ozs7Ozs7O0FBR1Y7R0FqQ01GO0tBQUFBO0FBbUNOLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvR2VuZXJhdGVDb21wb25lbnQuanM/ZTkzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFFyUmVhZGVyIH0gZnJvbSBcInJlYWN0LXFyLXJlYWRlclwiO1xuaW1wb3J0IGFkYXB0ZXIgZnJvbSBcIndlYnJ0Yy1hZGFwdGVyXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgR2VuZXJhdGVDb21wb25lbnQgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoXCJObyByZXN1bHRcIik7XG5cbiAgYWRhcHRlci5icm93c2VyRGV0YWlscy5icm93c2VyO1xuICBhZGFwdGVyLmJyb3dzZXJEZXRhaWxzLnZlcnNpb247XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFFyUmVhZGVyXG4gICAgICAgIG9uUmVzdWx0PXsocmVzdWx0LCBlcnJvcikgPT4ge1xuICAgICAgICAgIGlmICghIXJlc3VsdCkge1xuICAgICAgICAgICAgc2V0RGF0YShyZXN1bHQ/LnRleHQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoISFlcnJvcikge1xuICAgICAgICAgICAgLy8gY29uc29sZS5pbmZvKGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAgIC8vdGhpcyBpcyBmYWNpbmcgbW9kZSA6IFwiZW52aXJvbm1lbnQgXCIgaXQgd2lsbCBvcGVuIGJhY2tjYW1lcmEgb2YgdGhlIHNtYXJ0cGhvbmUgYW5kIGlmIG5vdCBmb3VuZCB3aWxsXG4gICAgICAgIC8vIG9wZW4gdGhlIGZyb250IGNhbWVyYVxuICAgICAgICBjb25zdHJhaW50cz17e1xuICAgICAgICAgIG1pbkFzcGVjdFJhdGlvOiAxLjMzMyxcbiAgICAgICAgICBtaW5GcmFtZVJhdGU6IDMwLFxuICAgICAgICAgIHdpZHRoOiAxMjgwLFxuICAgICAgICAgIGhlaWdodDogNzIwLFxuICAgICAgICAgIGZhY2luZ01vZGU6IFwiZW52aXJvbm1lbnRcIixcbiAgICAgICAgfX1cbiAgICAgICAgc3R5bGVzPXt3aX1cbiAgICAgIC8+XG4gICAgICA8cD57ZGF0YX08L3A+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHZW5lcmF0ZUNvbXBvbmVudDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUXJSZWFkZXIiLCJhZGFwdGVyIiwic3R5bGVzIiwiR2VuZXJhdGVDb21wb25lbnQiLCJwcm9wcyIsImRhdGEiLCJzZXREYXRhIiwiYnJvd3NlckRldGFpbHMiLCJicm93c2VyIiwidmVyc2lvbiIsIm9uUmVzdWx0IiwicmVzdWx0IiwiZXJyb3IiLCJ0ZXh0IiwiY29uc29sZSIsImxvZyIsImNvbnN0cmFpbnRzIiwibWluQXNwZWN0UmF0aW8iLCJtaW5GcmFtZVJhdGUiLCJ3aWR0aCIsImhlaWdodCIsImZhY2luZ01vZGUiLCJ3aSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/GenerateComponent.js\n"));

/***/ })

});