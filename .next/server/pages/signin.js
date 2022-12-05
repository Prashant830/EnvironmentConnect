"use strict";
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
exports.id = "pages/signin";
exports.ids = ["pages/signin"];
exports.modules = {

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/connectors/metaMask */ \"wagmi/connectors/metaMask\");\n/* harmony import */ var wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction SignIn() {\n    const { connectAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useConnect)();\n    const { disconnectAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useDisconnect)();\n    const { isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)();\n    const { signMessageAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useSignMessage)();\n    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleAuth = async ()=>{\n        if (isConnected) {\n            await disconnectAsync();\n        }\n        const { account , chain  } = await connectAsync({\n            connector: new wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_5__.MetaMaskConnector()\n        });\n        const userData = {\n            address: account,\n            chain: chain.id,\n            network: \"evm\"\n        };\n        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_1___default().post(\"/api/auth/request-message\", userData, {\n            headers: {\n                \"content-type\": \"application/json\"\n            }\n        });\n        const message = data.message;\n        const signature = await signMessageAsync({\n            message\n        });\n        // redirect user after success authentication to '/user' page\n        const { url  } = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(\"credentials\", {\n            message,\n            signature,\n            redirect: false,\n            callbackUrl: \"/user\"\n        });\n        /**\r\n         * instead of using signIn(..., redirect: \"/user\")\r\n         * we get the url from callback and push it to the router to avoid page refreshing\r\n         */ push(url);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"signinPage\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"signPage-Container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Welcome to EnviromentConnect!!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ps962\\\\Downloads\\\\Telegram Desktop\\\\nextjs_moralis_auth\\\\nextjs_moralis_auth\\\\pages\\\\signin.js\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ps962\\\\Downloads\\\\Telegram Desktop\\\\nextjs_moralis_auth\\\\nextjs_moralis_auth\\\\pages\\\\signin.js\",\n                    lineNumber: 46,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>handleAuth(),\n                    children: \"Connect Metamask\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ps962\\\\Downloads\\\\Telegram Desktop\\\\nextjs_moralis_auth\\\\nextjs_moralis_auth\\\\pages\\\\signin.js\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ps962\\\\Downloads\\\\Telegram Desktop\\\\nextjs_moralis_auth\\\\nextjs_moralis_auth\\\\pages\\\\signin.js\",\n            lineNumber: 45,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ps962\\\\Downloads\\\\Telegram Desktop\\\\nextjs_moralis_auth\\\\nextjs_moralis_auth\\\\pages\\\\signin.js\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignIn);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWduaW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ2U7QUFDRDtBQUNzQztBQUNoQjtBQUc5RCxTQUFTUSxNQUFNLEdBQUc7SUFDZCxNQUFNLEVBQUVDLFlBQVksR0FBRSxHQUFHTCxpREFBVSxFQUFFO0lBQ3JDLE1BQU0sRUFBRU0sZUFBZSxHQUFFLEdBQUdMLG9EQUFhLEVBQUU7SUFDM0MsTUFBTSxFQUFFTSxXQUFXLEdBQUUsR0FBR1IsaURBQVUsRUFBRTtJQUNwQyxNQUFNLEVBQUVTLGdCQUFnQixHQUFFLEdBQUdOLHFEQUFjLEVBQUU7SUFDN0MsTUFBTSxFQUFFTyxJQUFJLEdBQUUsR0FBR1gsc0RBQVMsRUFBRTtJQUU1QixNQUFNWSxVQUFVLEdBQUcsVUFBWTtRQUMzQixJQUFJSCxXQUFXLEVBQUU7WUFDYixNQUFNRCxlQUFlLEVBQUUsQ0FBQztTQUMzQjtRQUVELE1BQU0sRUFBRUssT0FBTyxHQUFFQyxLQUFLLEdBQUUsR0FBRyxNQUFNUCxZQUFZLENBQUM7WUFBRVEsU0FBUyxFQUFFLElBQUlWLHdFQUFpQixFQUFFO1NBQUUsQ0FBQztRQUVyRixNQUFNVyxRQUFRLEdBQUc7WUFBRUMsT0FBTyxFQUFFSixPQUFPO1lBQUVDLEtBQUssRUFBRUEsS0FBSyxDQUFDSSxFQUFFO1lBQUVDLE9BQU8sRUFBRSxLQUFLO1NBQUU7UUFFdEUsTUFBTSxFQUFFQyxJQUFJLEdBQUUsR0FBRyxNQUFNdEIsaURBQVUsQ0FBQywyQkFBMkIsRUFBRWtCLFFBQVEsRUFBRTtZQUNyRU0sT0FBTyxFQUFFO2dCQUNMLGNBQWMsRUFBRSxrQkFBa0I7YUFDckM7U0FDSixDQUFDO1FBRUYsTUFBTUMsT0FBTyxHQUFHSCxJQUFJLENBQUNHLE9BQU87UUFFNUIsTUFBTUMsU0FBUyxHQUFHLE1BQU1kLGdCQUFnQixDQUFDO1lBQUVhLE9BQU87U0FBRSxDQUFDO1FBRXJELDZEQUE2RDtRQUM3RCxNQUFNLEVBQUVFLEdBQUcsR0FBRSxHQUFHLE1BQU0xQix1REFBTSxDQUFDLGFBQWEsRUFBRTtZQUFFd0IsT0FBTztZQUFFQyxTQUFTO1lBQUVFLFFBQVEsRUFBRSxLQUFLO1lBQUVDLFdBQVcsRUFBRSxPQUFPO1NBQUUsQ0FBQztRQUMxRztLQUtIO0lBRUQscUJBQ0ksUUFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUM7O1lBQ05BLFNBQVMsRUFBQzs7OEJBQ1gsK0RBQUNDLE9BQU07OEJBQ1A7Ozs7Ozs0QkFBdUM7Ozs7O3dCQUFTOzhCQUNoRDtvQkFBUUcsT0FBTyxFQUFFLElBQU1yQjs7Ozs7O3dCQUF1Qzs7Ozs7O2dCQUM1RDs7Ozs7WUFFSCxDQUNUO0NBQ0w7QUFFRCxlQUFlTixNQUFNLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anNfbW9yYWxpc19hdXRoLy4vcGFnZXMvc2lnbmluLmpzPzc4ZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgc2lnbkluIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VBY2NvdW50LCB1c2VDb25uZWN0LCB1c2VEaXNjb25uZWN0LCB1c2VTaWduTWVzc2FnZSB9IGZyb20gJ3dhZ21pJztcclxuaW1wb3J0IHsgTWV0YU1hc2tDb25uZWN0b3IgfSBmcm9tICd3YWdtaS9jb25uZWN0b3JzL21ldGFNYXNrJztcclxuXHJcblxyXG5mdW5jdGlvbiBTaWduSW4oKSB7XHJcbiAgICBjb25zdCB7IGNvbm5lY3RBc3luYyB9ID0gdXNlQ29ubmVjdCgpO1xyXG4gICAgY29uc3QgeyBkaXNjb25uZWN0QXN5bmMgfSA9IHVzZURpc2Nvbm5lY3QoKTtcclxuICAgIGNvbnN0IHsgaXNDb25uZWN0ZWQgfSA9IHVzZUFjY291bnQoKTtcclxuICAgIGNvbnN0IHsgc2lnbk1lc3NhZ2VBc3luYyB9ID0gdXNlU2lnbk1lc3NhZ2UoKTtcclxuICAgIGNvbnN0IHsgcHVzaCB9ID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQXV0aCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZiAoaXNDb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgYXdhaXQgZGlzY29ubmVjdEFzeW5jKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB7IGFjY291bnQsIGNoYWluIH0gPSBhd2FpdCBjb25uZWN0QXN5bmMoeyBjb25uZWN0b3I6IG5ldyBNZXRhTWFza0Nvbm5lY3RvcigpIH0pO1xyXG5cclxuICAgICAgICBjb25zdCB1c2VyRGF0YSA9IHsgYWRkcmVzczogYWNjb3VudCwgY2hhaW46IGNoYWluLmlkLCBuZXR3b3JrOiAnZXZtJyB9O1xyXG5cclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvYXV0aC9yZXF1ZXN0LW1lc3NhZ2UnLCB1c2VyRGF0YSwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gZGF0YS5tZXNzYWdlO1xyXG5cclxuICAgICAgICBjb25zdCBzaWduYXR1cmUgPSBhd2FpdCBzaWduTWVzc2FnZUFzeW5jKHsgbWVzc2FnZSB9KTtcclxuXHJcbiAgICAgICAgLy8gcmVkaXJlY3QgdXNlciBhZnRlciBzdWNjZXNzIGF1dGhlbnRpY2F0aW9uIHRvICcvdXNlcicgcGFnZVxyXG4gICAgICAgIGNvbnN0IHsgdXJsIH0gPSBhd2FpdCBzaWduSW4oJ2NyZWRlbnRpYWxzJywgeyBtZXNzYWdlLCBzaWduYXR1cmUsIHJlZGlyZWN0OiBmYWxzZSwgY2FsbGJhY2tVcmw6ICcvdXNlcicgfSk7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogaW5zdGVhZCBvZiB1c2luZyBzaWduSW4oLi4uLCByZWRpcmVjdDogXCIvdXNlclwiKVxyXG4gICAgICAgICAqIHdlIGdldCB0aGUgdXJsIGZyb20gY2FsbGJhY2sgYW5kIHB1c2ggaXQgdG8gdGhlIHJvdXRlciB0byBhdm9pZCBwYWdlIHJlZnJlc2hpbmdcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdXNoKHVybCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NpZ25pblBhZ2UnID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWduUGFnZS1Db250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxjZW50ZXI+XHJcbiAgICAgICAgICAgICAgICA8aDI+V2VsY29tZSB0byBFbnZpcm9tZW50Q29ubmVjdCEhPC9oMj48L2NlbnRlcj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQXV0aCgpfT5Db25uZWN0IE1ldGFtYXNrPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduSW47XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsInNpZ25JbiIsInVzZVJvdXRlciIsInVzZUFjY291bnQiLCJ1c2VDb25uZWN0IiwidXNlRGlzY29ubmVjdCIsInVzZVNpZ25NZXNzYWdlIiwiTWV0YU1hc2tDb25uZWN0b3IiLCJTaWduSW4iLCJjb25uZWN0QXN5bmMiLCJkaXNjb25uZWN0QXN5bmMiLCJpc0Nvbm5lY3RlZCIsInNpZ25NZXNzYWdlQXN5bmMiLCJwdXNoIiwiaGFuZGxlQXV0aCIsImFjY291bnQiLCJjaGFpbiIsImNvbm5lY3RvciIsInVzZXJEYXRhIiwiYWRkcmVzcyIsImlkIiwibmV0d29yayIsImRhdGEiLCJwb3N0IiwiaGVhZGVycyIsIm1lc3NhZ2UiLCJzaWduYXR1cmUiLCJ1cmwiLCJyZWRpcmVjdCIsImNhbGxiYWNrVXJsIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2VudGVyIiwiaDIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/signin.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/connectors/metaMask":
/*!********************************************!*\
  !*** external "wagmi/connectors/metaMask" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("wagmi/connectors/metaMask");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/signin.js"));
module.exports = __webpack_exports__;

})();