"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Contact.tsx":
/*!************************************!*\
  !*** ./src/components/Contact.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Contact; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Mail_MapPin_Phone_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Mail,MapPin,Phone!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/mail.js\");\n/* harmony import */ var _barrel_optimize_names_Mail_MapPin_Phone_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Mail,MapPin,Phone!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/phone.js\");\n/* harmony import */ var _barrel_optimize_names_Mail_MapPin_Phone_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Mail,MapPin,Phone!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/map-pin.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Contact() {\n    _s();\n    const { register, handleSubmit, reset } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)();\n    const onSubmit = async (data)=>{\n        try {\n            const response = await fetch(\"/app/api/contact\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(data)\n            });\n            console.log(\"response\", response);\n            if (response.ok) {\n                alert(\"Message sent successfully!\");\n                reset();\n            } else {\n                alert(\"Failed to send message.\");\n            }\n        } catch (error) {\n            console.error(\"Error:\", error);\n            alert(\"An error occurred while sending the message.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"contact\",\n        className: \"py-20 bg-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-3xl font-bold text-center mb-12\",\n                    children: \"Get In Touch\"\n                }, void 0, false, {\n                    fileName: \"/Users/alial-kheder/Desktop/dev/project/src/components/Contact.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-1 md:grid-cols-2 gap-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-xl font-semibold mb-6\",\n                                    children: \"Contact Information\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alial-kheder/Desktop/dev/project/src/components/Contact.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"space-y-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Mail_MapPin_Phone_lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                    className: \"w-6 h-6 text-blue-600 mr-3\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/alial-kheder/Desktop/dev/project/src/components/Contact.tsx\",\n                                                    lineNumber: 39,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    href: \"mailto:alkhdyyr@gmail.com\",\n                                                    children: \"alkhdyyr@gmail.com\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/alial-kheder/Desktop/dev/project/src/components/Contact.tsx\",\n                                                    lineNumber: 40,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/alial-kheder/Desktop/dev/project/src/components/Contact.tsx\",\n                                            lineNumber: 38,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Mail_MapPin_Phone_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                    className: \"w-6 h-6 text-blue-600 mr-3\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/alial-kheder/Desktop/dev/project/src/components/Contact.tsx\",\n                                                    lineNumber: 43,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    href: \"tel:+4915901184486\",\n                                                    children: \"+49 (159) 01184486 \"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/alial-kheder/Desktop/dev/project/src/components/Contact.tsx\",\n                                                    lineNumber: 44,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/alial-kheder/Desktop/dev/project/src/components/Contact.tsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Mail_MapPin_Phone_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                    className: \"w-6 h-6 text-blue-600 mr-3\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/alial-kheder/Desktop/dev/project/src/components/Contact.tsx\",\n                                                    lineNumber: 47,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: \"Germany, Berlin\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/alial-kheder/Desktop/dev/project/src/components/Contact.tsx\",\n                                                    lineNumber: 48,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/alial-kheder/Desktop/dev/project/src/components/Contact.tsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alial-kheder/Desktop/dev/project/src/components/Contact.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alial-kheder/Desktop/dev/project/src/components/Contact.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit(onSubmit),\n                            className: \"space-y-4 p-6 bg-white shadow-md rounded-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"name\",\n                                            className: \"block text-sm font-medium text-gray-700\",\n                                            children: \"Name\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alial-kheder/Desktop/dev/project/src/components/Contact.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            id: \"name\",\n                                            type: \"text\",\n                                            ...register(\"name\", {\n                                                required: true\n                                            }),\n                                            className: \"mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alial-kheder/Desktop/dev/project/src/components/Contact.tsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alial-kheder/Desktop/dev/project/src/components/Contact.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"email\",\n                                            className: \"block text-sm font-medium text-gray-700\",\n                                            children: \"Email\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alial-kheder/Desktop/dev/project/src/components/Contact.tsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            id: \"email\",\n                                            type: \"email\",\n                                            ...register(\"email\", {\n                                                required: true\n                                            }),\n                                            className: \"mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alial-kheder/Desktop/dev/project/src/components/Contact.tsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alial-kheder/Desktop/dev/project/src/components/Contact.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"message\",\n                                            className: \"block text-sm font-medium text-gray-700\",\n                                            children: \"Message\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alial-kheder/Desktop/dev/project/src/components/Contact.tsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                            id: \"message\",\n                                            ...register(\"message\", {\n                                                required: true\n                                            }),\n                                            className: \"mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alial-kheder/Desktop/dev/project/src/components/Contact.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alial-kheder/Desktop/dev/project/src/components/Contact.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500\",\n                                    children: \"Send\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alial-kheder/Desktop/dev/project/src/components/Contact.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alial-kheder/Desktop/dev/project/src/components/Contact.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alial-kheder/Desktop/dev/project/src/components/Contact.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/alial-kheder/Desktop/dev/project/src/components/Contact.tsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/alial-kheder/Desktop/dev/project/src/components/Contact.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(Contact, \"Tv3ax+IYeS+IUhXACHCvYwCyM94=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm\n    ];\n});\n_c = Contact;\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvbnRhY3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ21EO0FBQ1Q7QUFFM0IsU0FBU0k7O0lBQ3RCLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUVDLEtBQUssRUFBRSxHQUFHSix3REFBT0E7SUFDakQsTUFBTUssV0FBVyxPQUFPQztRQUN0QixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLG9CQUFvQjtnQkFDL0NDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDUDtZQUN2QjtZQUNBUSxRQUFRQyxHQUFHLENBQUMsWUFBWVI7WUFFeEIsSUFBSUEsU0FBU1MsRUFBRSxFQUFFO2dCQUNmQyxNQUFNO2dCQUNOYjtZQUNGLE9BQU87Z0JBQ0xhLE1BQU07WUFDUjtRQUNGLEVBQUUsT0FBT0MsT0FBTztZQUNkSixRQUFRSSxLQUFLLENBQUMsVUFBVUE7WUFDeEJELE1BQU07UUFDUjtJQUNGO0lBRUEscUJBQ0UsOERBQUNFO1FBQVFDLElBQUc7UUFBVUMsV0FBVTtrQkFDOUIsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNiLDhEQUFDRTtvQkFBR0YsV0FBVTs4QkFBdUM7Ozs7Ozs4QkFDckQsOERBQUNDO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ0M7OzhDQUNDLDhEQUFDRTtvQ0FBR0gsV0FBVTs4Q0FBNkI7Ozs7Ozs4Q0FDM0MsOERBQUNDO29DQUFJRCxXQUFVOztzREFDYiw4REFBQ0M7NENBQUlELFdBQVU7OzhEQUNiLDhEQUFDeEIsNkZBQUlBO29EQUFDd0IsV0FBVTs7Ozs7OzhEQUNoQiw4REFBQ0k7b0RBQUVDLE1BQUs7OERBQTRCOzs7Ozs7Ozs7Ozs7c0RBRXRDLDhEQUFDSjs0Q0FBSUQsV0FBVTs7OERBQ2IsOERBQUN0Qiw2RkFBS0E7b0RBQUNzQixXQUFVOzs7Ozs7OERBQ2pCLDhEQUFDSTtvREFBRUMsTUFBSzs4REFBcUI7Ozs7Ozs7Ozs7OztzREFFL0IsOERBQUNKOzRDQUFJRCxXQUFVOzs4REFDYiw4REFBQ3ZCLDZGQUFNQTtvREFBQ3VCLFdBQVU7Ozs7Ozs4REFDbEIsOERBQUNNOzhEQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSVosOERBQUNDOzRCQUNDdkIsVUFBVUYsYUFBYUU7NEJBQ3ZCZ0IsV0FBVTs7OENBRVYsOERBQUNDOztzREFDQyw4REFBQ087NENBQ0NDLFNBQVE7NENBQ1JULFdBQVU7c0RBQ1g7Ozs7OztzREFHRCw4REFBQ1U7NENBQ0NYLElBQUc7NENBQ0hZLE1BQUs7NENBQ0osR0FBRzlCLFNBQVMsUUFBUTtnREFBRStCLFVBQVU7NENBQUssRUFBRTs0Q0FDeENaLFdBQVU7Ozs7Ozs7Ozs7Ozs4Q0FHZCw4REFBQ0M7O3NEQUNDLDhEQUFDTzs0Q0FDQ0MsU0FBUTs0Q0FDUlQsV0FBVTtzREFDWDs7Ozs7O3NEQUdELDhEQUFDVTs0Q0FDQ1gsSUFBRzs0Q0FDSFksTUFBSzs0Q0FDSixHQUFHOUIsU0FBUyxTQUFTO2dEQUFFK0IsVUFBVTs0Q0FBSyxFQUFFOzRDQUN6Q1osV0FBVTs7Ozs7Ozs7Ozs7OzhDQUdkLDhEQUFDQzs7c0RBQ0MsOERBQUNPOzRDQUNDQyxTQUFROzRDQUNSVCxXQUFVO3NEQUNYOzs7Ozs7c0RBR0QsOERBQUNhOzRDQUNDZCxJQUFHOzRDQUNGLEdBQUdsQixTQUFTLFdBQVc7Z0RBQUUrQixVQUFVOzRDQUFLLEVBQUU7NENBQzNDWixXQUFVOzs7Ozs7Ozs7Ozs7OENBR2QsOERBQUNjO29DQUNDSCxNQUFLO29DQUNMWCxXQUFVOzhDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFiO0dBdkd3QnBCOztRQUNvQkQsb0RBQU9BOzs7S0FEM0JDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NvbnRhY3QudHN4PzA4NTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBNYWlsLCBNYXBQaW4sIFBob25lIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdCgpIHtcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCByZXNldCB9ID0gdXNlRm9ybSgpO1xuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChkYXRhKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBwL2FwaS9jb250YWN0XCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZVwiLCByZXNwb25zZSk7XG4gICAgICBcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICBhbGVydChcIk1lc3NhZ2Ugc2VudCBzdWNjZXNzZnVsbHkhXCIpO1xuICAgICAgICByZXNldCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoXCJGYWlsZWQgdG8gc2VuZCBtZXNzYWdlLlwiKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvcik7XG4gICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIHNlbmRpbmcgdGhlIG1lc3NhZ2UuXCIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwiY29udGFjdFwiIGNsYXNzTmFtZT1cInB5LTIwIGJnLXdoaXRlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1jZW50ZXIgbWItMTJcIj5HZXQgSW4gVG91Y2g8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTEyXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItNlwiPkNvbnRhY3QgSW5mb3JtYXRpb248L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxNYWlsIGNsYXNzTmFtZT1cInctNiBoLTYgdGV4dC1ibHVlLTYwMCBtci0zXCIgLz5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOmFsa2hkeXlyQGdtYWlsLmNvbVwiPmFsa2hkeXlyQGdtYWlsLmNvbTwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8UGhvbmUgY2xhc3NOYW1lPVwidy02IGgtNiB0ZXh0LWJsdWUtNjAwIG1yLTNcIiAvPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6KzQ5MTU5MDExODQ0ODZcIj4rNDkgKDE1OSkgMDExODQ0ODYgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxNYXBQaW4gY2xhc3NOYW1lPVwidy02IGgtNiB0ZXh0LWJsdWUtNjAwIG1yLTNcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPkdlcm1hbnksIEJlcmxpbjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzcGFjZS15LTQgcC02IGJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkLW1kXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICBodG1sRm9yPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIE5hbWVcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwibmFtZVwiLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgYmxvY2sgdy1mdWxsIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBzaGFkb3ctc20gcC0yIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgaHRtbEZvcj1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRW1haWxcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJlbWFpbFwiLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgYmxvY2sgdy1mdWxsIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBzaGFkb3ctc20gcC0yIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgaHRtbEZvcj1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBNZXNzYWdlXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgIGlkPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwibWVzc2FnZVwiLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgYmxvY2sgdy1mdWxsIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBzaGFkb3ctc20gcC0yIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcC0yIHJvdW5kZWQtbWQgaG92ZXI6YmctYmx1ZS02MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctYmx1ZS01MDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTZW5kXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIk1haWwiLCJNYXBQaW4iLCJQaG9uZSIsInVzZUZvcm0iLCJDb250YWN0IiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJyZXNldCIsIm9uU3VibWl0IiwiZGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwibG9nIiwib2siLCJhbGVydCIsImVycm9yIiwic2VjdGlvbiIsImlkIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDIiLCJoMyIsImEiLCJocmVmIiwic3BhbiIsImZvcm0iLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJyZXF1aXJlZCIsInRleHRhcmVhIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Contact.tsx\n"));

/***/ })

});