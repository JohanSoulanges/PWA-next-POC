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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_qr_reader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-qr-reader */ \"./node_modules/react-qr-reader/dist/esm/index.js\");\n/* harmony import */ var webrtc_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webrtc-adapter */ \"./node_modules/webrtc-adapter/src/js/adapter_core.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst GenerateComponent = (props)=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"No result\");\n    webrtc_adapter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].browserDetails.browser;\n    webrtc_adapter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].browserDetails.version;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().QrCodeReader),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_qr_reader__WEBPACK_IMPORTED_MODULE_2__.QrReader, {\n                    onResult: (result, error)=>{\n                        if (!!result) {\n                            setData(result === null || result === void 0 ? void 0 : result.text);\n                            console.log(result);\n                        }\n                        if (!!error) {\n                        // console.info(error);\n                        }\n                    },\n                    //this is facing mode : \"environment \" it will open backcamera of the smartphone and if not found will\n                    // open the front camera\n                    constraints: {\n                        minAspectRatio: 1.333,\n                        minFrameRate: 30,\n                        width: 1280,\n                        height: 720,\n                        facingMode: \"environment\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/home/damiot/Dyma/Alternance/PWA-Next-POC/pages/GenerateComponent.js\",\n                    lineNumber: 15,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: data\n                }, void 0, false, {\n                    fileName: \"/home/damiot/Dyma/Alternance/PWA-Next-POC/pages/GenerateComponent.js\",\n                    lineNumber: 37,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/damiot/Dyma/Alternance/PWA-Next-POC/pages/GenerateComponent.js\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(GenerateComponent, \"dmPFwrOsvHW3b4sogji5iMpClo0=\");\n_c = GenerateComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GenerateComponent);\nvar _c;\n$RefreshReg$(_c, \"GenerateComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9HZW5lcmF0ZUNvbXBvbmVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF3QztBQUNHO0FBQ047QUFDUztBQUU5QyxNQUFNSyxvQkFBb0IsQ0FBQ0MsUUFBVTs7SUFDbkMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDO0lBRWpDRSw2RUFBOEI7SUFDOUJBLDZFQUE4QjtJQUU5QixxQkFDRTtrQkFDRSw0RUFBQ1M7WUFBSUMsV0FBV1QsNkVBQW1COzs4QkFDL0IsOERBQUNGLHFEQUFRQTtvQkFFUGEsVUFBVSxDQUFDQyxRQUFRQyxRQUFVO3dCQUMzQixJQUFJLENBQUMsQ0FBQ0QsUUFBUTs0QkFDWlIsUUFBUVEsbUJBQUFBLG9CQUFBQSxLQUFBQSxJQUFBQSxPQUFRRSxJQUFJOzRCQUNwQkMsUUFBUUMsR0FBRyxDQUFDSjt3QkFDZCxDQUFDO3dCQUVELElBQUksQ0FBQyxDQUFDQyxPQUFPO3dCQUNYLHVCQUF1Qjt3QkFDekIsQ0FBQztvQkFDSDtvQkFDQSxzR0FBc0c7b0JBQ3RHLHdCQUF3QjtvQkFDeEJJLGFBQWE7d0JBQ1hDLGdCQUFnQjt3QkFDaEJDLGNBQWM7d0JBQ2RDLE9BQU87d0JBQ1BDLFFBQVE7d0JBQ1JDLFlBQVk7b0JBQ2Q7Ozs7Ozs4QkFFRiw4REFBQ0M7OEJBQUdwQjs7Ozs7Ozs7Ozs7OztBQUlkO0dBbkNNRjtLQUFBQTtBQXFDTiwrREFBZUEsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0dlbmVyYXRlQ29tcG9uZW50LmpzP2U5MzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBRclJlYWRlciB9IGZyb20gXCJyZWFjdC1xci1yZWFkZXJcIjtcbmltcG9ydCBhZGFwdGVyIGZyb20gXCJ3ZWJydGMtYWRhcHRlclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IEdlbmVyYXRlQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFwiTm8gcmVzdWx0XCIpO1xuXG4gIGFkYXB0ZXIuYnJvd3NlckRldGFpbHMuYnJvd3NlcjtcbiAgYWRhcHRlci5icm93c2VyRGV0YWlscy52ZXJzaW9uO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuUXJDb2RlUmVhZGVyfT5cbiAgICAgICAgICA8UXJSZWFkZXJcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgb25SZXN1bHQ9eyhyZXN1bHQsIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgIGlmICghIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHNldERhdGEocmVzdWx0Py50ZXh0KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCEhZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmluZm8oZXJyb3IpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgLy90aGlzIGlzIGZhY2luZyBtb2RlIDogXCJlbnZpcm9ubWVudCBcIiBpdCB3aWxsIG9wZW4gYmFja2NhbWVyYSBvZiB0aGUgc21hcnRwaG9uZSBhbmQgaWYgbm90IGZvdW5kIHdpbGxcbiAgICAgICAgICAgIC8vIG9wZW4gdGhlIGZyb250IGNhbWVyYVxuICAgICAgICAgICAgY29uc3RyYWludHM9e3tcbiAgICAgICAgICAgICAgbWluQXNwZWN0UmF0aW86IDEuMzMzLFxuICAgICAgICAgICAgICBtaW5GcmFtZVJhdGU6IDMwLFxuICAgICAgICAgICAgICB3aWR0aDogMTI4MCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiA3MjAsXG4gICAgICAgICAgICAgIGZhY2luZ01vZGU6IFwiZW52aXJvbm1lbnRcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cD57ZGF0YX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdlbmVyYXRlQ29tcG9uZW50O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJRclJlYWRlciIsImFkYXB0ZXIiLCJzdHlsZXMiLCJHZW5lcmF0ZUNvbXBvbmVudCIsInByb3BzIiwiZGF0YSIsInNldERhdGEiLCJicm93c2VyRGV0YWlscyIsImJyb3dzZXIiLCJ2ZXJzaW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiUXJDb2RlUmVhZGVyIiwib25SZXN1bHQiLCJyZXN1bHQiLCJlcnJvciIsInRleHQiLCJjb25zb2xlIiwibG9nIiwiY29uc3RyYWludHMiLCJtaW5Bc3BlY3RSYXRpbyIsIm1pbkZyYW1lUmF0ZSIsIndpZHRoIiwiaGVpZ2h0IiwiZmFjaW5nTW9kZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/GenerateComponent.js\n"));

/***/ })

});