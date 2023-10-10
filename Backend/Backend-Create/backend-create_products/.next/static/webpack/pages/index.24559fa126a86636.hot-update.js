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

/***/ "./components/ProductForm/index.js":
/*!*****************************************!*\
  !*** ./components/ProductForm/index.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ProductForm_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductForm.styled */ \"./components/ProductForm/ProductForm.styled.js\");\n/* harmony import */ var _Button_Button_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button/Button.styled */ \"./components/Button/Button.styled.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n\n\n\n\nfunction ProductForm() {\n    async function handleSubmit(event) {\n        event.preventDefault();\n        const formData = new FormData(event.target);\n        const productData = Object.fromEntries(formData);\n        event.target.reset();\n        const response = await fetch(\"/api/products\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(productData)\n        });\n        if (response.ok) {\n            (0,swr__WEBPACK_IMPORTED_MODULE_3__.mutate)();\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductForm_styled__WEBPACK_IMPORTED_MODULE_1__.StyledForm, {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductForm_styled__WEBPACK_IMPORTED_MODULE_1__.StyledHeading, {\n                children: \"Add a new Fish\"\n            }, void 0, false, {\n                fileName: \"/Users/nagim/Documents/Projects/Spiced/spiced-bootcamp/challenges/Backend/Backend-Create/backend-create_products/components/ProductForm/index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductForm_styled__WEBPACK_IMPORTED_MODULE_1__.StyledLabel, {\n                htmlFor: \"name\",\n                children: [\n                    \"Name:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"name\",\n                        name: \"name\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nagim/Documents/Projects/Spiced/spiced-bootcamp/challenges/Backend/Backend-Create/backend-create_products/components/ProductForm/index.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nagim/Documents/Projects/Spiced/spiced-bootcamp/challenges/Backend/Backend-Create/backend-create_products/components/ProductForm/index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductForm_styled__WEBPACK_IMPORTED_MODULE_1__.StyledLabel, {\n                htmlFor: \"description\",\n                children: [\n                    \"Description:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"description\",\n                        name: \"description\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nagim/Documents/Projects/Spiced/spiced-bootcamp/challenges/Backend/Backend-Create/backend-create_products/components/ProductForm/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nagim/Documents/Projects/Spiced/spiced-bootcamp/challenges/Backend/Backend-Create/backend-create_products/components/ProductForm/index.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductForm_styled__WEBPACK_IMPORTED_MODULE_1__.StyledLabel, {\n                htmlFor: \"price\",\n                children: [\n                    \"Price:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        id: \"price\",\n                        name: \"price\",\n                        min: \"0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nagim/Documents/Projects/Spiced/spiced-bootcamp/challenges/Backend/Backend-Create/backend-create_products/components/ProductForm/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nagim/Documents/Projects/Spiced/spiced-bootcamp/challenges/Backend/Backend-Create/backend-create_products/components/ProductForm/index.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductForm_styled__WEBPACK_IMPORTED_MODULE_1__.StyledLabel, {\n                htmlFor: \"currency\",\n                children: [\n                    \"Currency:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        id: \"currency\",\n                        name: \"currency\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"EUR\",\n                                children: \"EUR\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nagim/Documents/Projects/Spiced/spiced-bootcamp/challenges/Backend/Backend-Create/backend-create_products/components/ProductForm/index.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"USD\",\n                                children: \"USD\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nagim/Documents/Projects/Spiced/spiced-bootcamp/challenges/Backend/Backend-Create/backend-create_products/components/ProductForm/index.js\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"GBP\",\n                                children: \"GBP\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nagim/Documents/Projects/Spiced/spiced-bootcamp/challenges/Backend/Backend-Create/backend-create_products/components/ProductForm/index.js\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nagim/Documents/Projects/Spiced/spiced-bootcamp/challenges/Backend/Backend-Create/backend-create_products/components/ProductForm/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nagim/Documents/Projects/Spiced/spiced-bootcamp/challenges/Backend/Backend-Create/backend-create_products/components/ProductForm/index.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button_styled__WEBPACK_IMPORTED_MODULE_2__.StyledButton, {\n                type: \"submit\",\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/nagim/Documents/Projects/Spiced/spiced-bootcamp/challenges/Backend/Backend-Create/backend-create_products/components/ProductForm/index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nagim/Documents/Projects/Spiced/spiced-bootcamp/challenges/Backend/Backend-Create/backend-create_products/components/ProductForm/index.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_c = ProductForm;\nvar _c;\n$RefreshReg$(_c, \"ProductForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RGb3JtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEU7QUFDdkI7QUFDMUI7QUFFZCxTQUFTSztJQUN0QixlQUFlQyxhQUFhQyxLQUFLO1FBQy9CQSxNQUFNQztRQUVOLE1BQU1DLFdBQVcsSUFBSUMsU0FBU0gsTUFBTUk7UUFFcEMsTUFBTUMsY0FBY0MsT0FBT0MsWUFBWUw7UUFDdkNGLE1BQU1JLE9BQU9JO1FBQ2IsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLGlCQUFpQjtZQUM1Q0MsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNQyxLQUFLQyxVQUFVVjtRQUN2QjtRQUVBLElBQUlJLFNBQVNPLElBQUk7WUFDZm5CLDJDQUFNQTtRQUNSO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0osMkRBQVVBO1FBQUN3QixVQUFVbEI7OzBCQUNwQiw4REFBQ0wsOERBQWFBOzBCQUFDOzs7Ozs7MEJBQ2YsOERBQUNDLDREQUFXQTtnQkFBQ3VCLFNBQVE7O29CQUFPO2tDQUUxQiw4REFBQ0M7d0JBQU1DLE1BQUs7d0JBQU9DLElBQUc7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFcEMsOERBQUMzQiw0REFBV0E7Z0JBQUN1QixTQUFROztvQkFBYztrQ0FFakMsOERBQUNDO3dCQUFNQyxNQUFLO3dCQUFPQyxJQUFHO3dCQUFjQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRTNDLDhEQUFDM0IsNERBQVdBO2dCQUFDdUIsU0FBUTs7b0JBQVE7a0NBRTNCLDhEQUFDQzt3QkFBTUMsTUFBSzt3QkFBU0MsSUFBRzt3QkFBUUMsTUFBSzt3QkFBUUMsS0FBSTs7Ozs7Ozs7Ozs7OzBCQUVuRCw4REFBQzVCLDREQUFXQTtnQkFBQ3VCLFNBQVE7O29CQUFXO2tDQUU5Qiw4REFBQ007d0JBQU9ILElBQUc7d0JBQVdDLE1BQUs7OzBDQUN6Qiw4REFBQ0c7Z0NBQU9DLE9BQU07MENBQU07Ozs7OzswQ0FDcEIsOERBQUNEO2dDQUFPQyxPQUFNOzBDQUFNOzs7Ozs7MENBQ3BCLDhEQUFDRDtnQ0FBT0MsT0FBTTswQ0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUd4Qiw4REFBQzlCLCtEQUFZQTtnQkFBQ3dCLE1BQUs7MEJBQVM7Ozs7Ozs7Ozs7OztBQUdsQztLQS9Dd0J0QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2R1Y3RGb3JtL2luZGV4LmpzP2FmMDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3R5bGVkRm9ybSwgU3R5bGVkSGVhZGluZywgU3R5bGVkTGFiZWwgfSBmcm9tIFwiLi9Qcm9kdWN0Rm9ybS5zdHlsZWRcIjtcbmltcG9ydCB7IFN0eWxlZEJ1dHRvbiB9IGZyb20gXCIuLi9CdXR0b24vQnV0dG9uLnN0eWxlZFwiO1xuaW1wb3J0IHsgbXV0YXRlIH0gZnJvbSBcInN3clwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0Rm9ybSgpIHtcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldCk7XG5cbiAgICBjb25zdCBwcm9kdWN0RGF0YSA9IE9iamVjdC5mcm9tRW50cmllcyhmb3JtRGF0YSk7XG4gICAgZXZlbnQudGFyZ2V0LnJlc2V0KCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvcHJvZHVjdHNcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocHJvZHVjdERhdGEpLFxuICAgIH0pO1xuXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICBtdXRhdGUoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRGb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgPFN0eWxlZEhlYWRpbmc+QWRkIGEgbmV3IEZpc2g8L1N0eWxlZEhlYWRpbmc+XG4gICAgICA8U3R5bGVkTGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5cbiAgICAgICAgTmFtZTpcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgbmFtZT1cIm5hbWVcIiAvPlxuICAgICAgPC9TdHlsZWRMYWJlbD5cbiAgICAgIDxTdHlsZWRMYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgRGVzY3JpcHRpb246XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZGVzY3JpcHRpb25cIiBuYW1lPVwiZGVzY3JpcHRpb25cIiAvPlxuICAgICAgPC9TdHlsZWRMYWJlbD5cbiAgICAgIDxTdHlsZWRMYWJlbCBodG1sRm9yPVwicHJpY2VcIj5cbiAgICAgICAgUHJpY2U6XG4gICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJwcmljZVwiIG5hbWU9XCJwcmljZVwiIG1pbj1cIjBcIiAvPlxuICAgICAgPC9TdHlsZWRMYWJlbD5cbiAgICAgIDxTdHlsZWRMYWJlbCBodG1sRm9yPVwiY3VycmVuY3lcIj5cbiAgICAgICAgQ3VycmVuY3k6XG4gICAgICAgIDxzZWxlY3QgaWQ9XCJjdXJyZW5jeVwiIG5hbWU9XCJjdXJyZW5jeVwiPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFVVJcIj5FVVI8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVVNEXCI+VVNEPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkdCUFwiPkdCUDwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvU3R5bGVkTGFiZWw+XG4gICAgICA8U3R5bGVkQnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L1N0eWxlZEJ1dHRvbj5cbiAgICA8L1N0eWxlZEZvcm0+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiU3R5bGVkRm9ybSIsIlN0eWxlZEhlYWRpbmciLCJTdHlsZWRMYWJlbCIsIlN0eWxlZEJ1dHRvbiIsIm11dGF0ZSIsIlByb2R1Y3RGb3JtIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJ0YXJnZXQiLCJwcm9kdWN0RGF0YSIsIk9iamVjdCIsImZyb21FbnRyaWVzIiwicmVzZXQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJvblN1Ym1pdCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJtaW4iLCJzZWxlY3QiLCJvcHRpb24iLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductForm/index.js\n"));

/***/ })

});