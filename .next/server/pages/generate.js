"use strict";
(() => {
var exports = {};
exports.id = 343;
exports.ids = [343];
exports.modules = {

/***/ 424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ generate)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "react-qr-code"
const external_react_qr_code_namespaceObject = require("react-qr-code");
var external_react_qr_code_default = /*#__PURE__*/__webpack_require__.n(external_react_qr_code_namespaceObject);
// EXTERNAL MODULE: external "crypto-js"
var external_crypto_js_ = __webpack_require__(666);
var external_crypto_js_default = /*#__PURE__*/__webpack_require__.n(external_crypto_js_);
;// CONCATENATED MODULE: ./pages/generate/index.js




const GenComponent = (props)=>{
    const [value, setValue] = (0,external_react_.useState)("No result");
    // Encrypt
    let ciphertext = external_crypto_js_default().AES.encrypt(value, "secret key 123").toString();
    // Decrypt
    var bytes = external_crypto_js_default().AES.decrypt(ciphertext, "secret key 123");
    var originalText = bytes.toString((external_crypto_js_default()).enc.Utf8);
    console.log(originalText); // 'my message'
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    height: "50vh",
                    margin: "0 auto",
                    maxWidth: "100%",
                    width: "100%"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_qr_code_default()), {
                    size: 256,
                    style: {
                        paddingTop: "5%",
                        paddingBottom: "5%",
                        height: "50vh",
                        maxWidth: "100%",
                        width: "100%"
                    },
                    value: ciphertext,
                    viewBox: `0 0 256 256`
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        for: "value",
                        children: "Value:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        value: value,
                        onChange: (e)=>setValue(e.target.value),
                        id: "value",
                        name: "value"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "/",
                className: "link",
                children: "return Home"
            })
        ]
    });
};
/* harmony default export */ const generate = (GenComponent);


/***/ }),

/***/ 666:
/***/ ((module) => {

module.exports = require("crypto-js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(424));
module.exports = __webpack_exports__;

})();