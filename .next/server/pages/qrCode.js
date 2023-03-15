"use strict";
(() => {
var exports = {};
exports.id = 871;
exports.ids = [871];
exports.modules = {

/***/ 494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ qrCode)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "react-qr-reader"
const external_react_qr_reader_namespaceObject = require("react-qr-reader");
;// CONCATENATED MODULE: external "webrtc-adapter"
const external_webrtc_adapter_namespaceObject = require("webrtc-adapter");
var external_webrtc_adapter_default = /*#__PURE__*/__webpack_require__.n(external_webrtc_adapter_namespaceObject);
;// CONCATENATED MODULE: external "react-modal"
const external_react_modal_namespaceObject = require("react-modal");
var external_react_modal_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_namespaceObject);
// EXTERNAL MODULE: external "crypto-js"
var external_crypto_js_ = __webpack_require__(666);
var external_crypto_js_default = /*#__PURE__*/__webpack_require__.n(external_crypto_js_);
;// CONCATENATED MODULE: ./pages/qrCode/index.js






const GenerateComponent = (props)=>{
    const [data, setData] = (0,external_react_.useState)("No result");
    const [isOpen, setIsOpen] = (0,external_react_.useState)(false);
    const [getCode, setGetCode] = (0,external_react_.useState)(false);
    const className = getCode ? "camera none" : "camera ";
    const customStyles = {
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.6)"
        },
        content: {
            top: "50%",
            left: "50%",
            with: "99vw",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)"
        }
    };
    // Decrypt
    function decrypt(string) {
        var bytes = external_crypto_js_default().AES.decrypt(string, "secret key 123");
        var originalText = bytes.toString((external_crypto_js_default()).enc.Utf8);
        return originalText;
    }
    (external_webrtc_adapter_default()).browserDetails.browser;
    (external_webrtc_adapter_default()).browserDetails.version;
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_qr_reader_namespaceObject.QrReader, {
                    className: className,
                    constraints: {
                        minAspectRatio: 1.333,
                        minFrameRate: 30,
                        height: 720,
                        width: 1280,
                        resizeMode: "crop-and-scale",
                        aspectRatio: {
                            min: 1,
                            max: 2
                        },
                        facingMode: "environment"
                    },
                    onResult: (result, error)=>{
                        if (!!result) {
                            setData(result?.text);
                            setIsOpen(true);
                            console.log(result);
                        }
                    // if (!!error) {
                    //   console.info(error);
                    // }
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "/",
                    className: "link",
                    children: "return Home"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "pad",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_modal_default()), {
                        isOpen: isOpen,
                        onAfterOpen: ()=>setGetCode(true),
                        onAfterClose: ()=>setGetCode(false),
                        onRequestClose: ()=>setIsOpen(false),
                        style: customStyles,
                        ariaHideApp: false,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: "Qr Code Content"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    "Decrypt:",
                                    decrypt(data)
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    "noDecrypt:",
                                    data
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "link",
                                onClick: ()=>setIsOpen(false),
                                children: "Close Modal"
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const qrCode = (GenerateComponent);


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
var __webpack_exports__ = (__webpack_exec__(494));
module.exports = __webpack_exports__;

})();