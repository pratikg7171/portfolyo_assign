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

/***/ "./src/components/News.js":
/*!********************************!*\
  !*** ./src/components/News.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Shivam_Desktop_dizme_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_Users_Shivam_Desktop_dizme_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_Users_Shivam_Desktop_dizme_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Shivam_Desktop_dizme_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilits */ \"./src/utilits.js\");\n/* harmony import */ var _popup_BlogPopUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popup/BlogPopUp */ \"./src/components/popup/BlogPopUp.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\Shivam\\\\Desktop\\\\dizme\\\\src\\\\components\\\\News.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar News = function News() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),\n      popupData = _useState2[0],\n      setPopupData = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      popup = _useState3[0],\n      setPopup = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var fetchData = /*#__PURE__*/function () {\n      var _ref = (0,C_Users_Shivam_Desktop_dizme_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_Users_Shivam_Desktop_dizme_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var fetchedData;\n        return C_Users_Shivam_Desktop_dizme_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return (0,_utilits__WEBPACK_IMPORTED_MODULE_3__.fatchData)(\"/static/blog.json\");\n\n              case 2:\n                fetchedData = _context.sent;\n                setData(fetchedData);\n                (0,_utilits__WEBPACK_IMPORTED_MODULE_3__.aTagClick)();\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function fetchData() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchData();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n    className: \"dizme_tm_section\",\n    id: \"blog\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_popup_BlogPopUp__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      open: popup,\n      data: popupData,\n      close: function close() {\n        return setPopup(false);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: \"dizme_tm_news\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n          className: \"dizme_tm_main_title\",\n          \"data-align\": \"center\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"span\", {\n            children: \"From My Blog\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"h3\", {\n            children: \"Our Recent Updates, Blog, Tips, Tricks & More\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n          className: \"news_list\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"ul\", {\n            children: data && data.map(function (blog, i) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"li\", {\n                className: \"wow fadeInUp\",\n                \"data-wow-duration\": \"1s\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n                  className: \"list_inner\",\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n                    className: \"image\",\n                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"img\", {\n                      src: \"/img/thumbs/42-29.jpg\",\n                      alt: \"image\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 37,\n                      columnNumber: 25\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n                      className: \"main\",\n                      \"data-img-url\": blog && blog.img,\n                      style: {\n                        backgroundImagae: \"url(\".concat(blog && blog.img, \")\")\n                      }\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 38,\n                      columnNumber: 25\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n                      className: \"date\",\n                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"h3\", {\n                        children: blog && blog.date && blog.date.date\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 46,\n                        columnNumber: 27\n                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"span\", {\n                        children: blog && blog.date && blog.date.month\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 47,\n                        columnNumber: 27\n                      }, _this)]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 45,\n                      columnNumber: 25\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"a\", {\n                      className: \"dizme_tm_full_link\",\n                      href: \"#\",\n                      onClick: function onClick() {\n                        setPopupData(blog && blog);\n                        setPopup(true);\n                      }\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 49,\n                      columnNumber: 25\n                    }, _this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 36,\n                    columnNumber: 23\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n                    className: \"details\",\n                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"span\", {\n                      className: \"category\",\n                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"a\", {\n                        href: \"#\",\n                        children: blog.category\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 60,\n                        columnNumber: 27\n                      }, _this)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 59,\n                      columnNumber: 25\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"h3\", {\n                      className: \"title\",\n                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"a\", {\n                        href: \"#\",\n                        children: blog.title\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 63,\n                        columnNumber: 27\n                      }, _this)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 62,\n                      columnNumber: 25\n                    }, _this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 58,\n                    columnNumber: 23\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n                    className: \"news_hidden_details\",\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n                      className: \"news_popup_informations\",\n                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n                        className: \"text\",\n                        children: blog.details && blog.details.map(function (details, i) {\n                          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n                            children: details\n                          }, i, false, {\n                            fileName: _jsxFileName,\n                            lineNumber: 71,\n                            columnNumber: 33\n                          }, _this);\n                        })\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 68,\n                        columnNumber: 27\n                      }, _this)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 67,\n                      columnNumber: 25\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 66,\n                    columnNumber: 23\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 35,\n                  columnNumber: 21\n                }, _this)\n              }, i, false, {\n                fileName: _jsxFileName,\n                lineNumber: 34,\n                columnNumber: 19\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        className: \"brush_1 wow zoomIn\",\n        \"data-wow-duration\": \"1s\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"img\", {\n          src: \"/img/brushes/news/1.png\",\n          alt: \"image\",\n          width: 100,\n          height: 100\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        className: \"brush_2 wow zoomIn\",\n        \"data-wow-duration\": \"1s\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"img\", {\n          src: \"/img/brushes/news/2.png\",\n          alt: \"image\",\n          width: 100,\n          height: 100\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(News, \"fZMq1oVhN/ROFscYXsbz3gLbUjA=\");\n\n_c = News;\n/* harmony default export */ __webpack_exports__[\"default\"] = (News);\n\nvar _c;\n\n$RefreshReg$(_c, \"News\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQS9CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixpQkFBeURBLENBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRE87QUFBQSxhQUFUO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUEwREU7QUFBSyxpQkFBUyxFQUFDLG9CQUFmO0FBQW9DLDZCQUFrQixJQUF0RDtBQUFBLCtCQUNFO0FBQUssYUFBRyxFQUFDLHlCQUFUO0FBQW1DLGFBQUcsRUFBQyxPQUF2QztBQUErQyxlQUFLLEVBQUUsR0FBdEQ7QUFBMkQsZ0JBQU0sRUFBRTtBQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTFERixlQTZERTtBQUFLLGlCQUFTLEVBQUMsb0JBQWY7QUFBb0MsNkJBQWtCLElBQXREO0FBQUEsK0JBQ0U7QUFBSyxhQUFHLEVBQUMseUJBQVQ7QUFBbUMsYUFBRyxFQUFDLE9BQXZDO0FBQStDLGVBQUssRUFBRSxHQUF0RDtBQUEyRCxnQkFBTSxFQUFFO0FBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBN0RGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0VELENBckZEOztHQUFNWDs7S0FBQUE7QUF1Rk4sK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmV3cy5qcz80ZmU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgYVRhZ0NsaWNrLCBmYXRjaERhdGEgfSBmcm9tIFwiLi4vdXRpbGl0c1wiO1xyXG5pbXBvcnQgQmxvZ1BvcFVwIGZyb20gXCIuL3BvcHVwL0Jsb2dQb3BVcFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7IFxyXG5cclxuY29uc3QgTmV3cyA9ICgpID0+IHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3BvcHVwRGF0YSwgc2V0UG9wdXBEYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbcG9wdXAsIHNldFBvcHVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgZmV0Y2hlZERhdGEgPSBhd2FpdCBmYXRjaERhdGEoXCIvc3RhdGljL2Jsb2cuanNvblwiKTtcclxuICAgICAgc2V0RGF0YShmZXRjaGVkRGF0YSk7XHJcbiAgICAgIGFUYWdDbGljaygpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRpem1lX3RtX3NlY3Rpb25cIiBpZD1cImJsb2dcIj5cclxuICAgICAgPEJsb2dQb3BVcCBvcGVuPXtwb3B1cH0gZGF0YT17cG9wdXBEYXRhfSBjbG9zZT17KCkgPT4gc2V0UG9wdXAoZmFsc2UpfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpem1lX3RtX25ld3NcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXptZV90bV9tYWluX3RpdGxlXCIgZGF0YS1hbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICA8c3Bhbj5Gcm9tIE15IEJsb2c8L3NwYW4+XHJcbiAgICAgICAgICAgIDxoMz57YE91ciBSZWNlbnQgVXBkYXRlcywgQmxvZywgVGlwcywgVHJpY2tzICYgTW9yZWB9PC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzX2xpc3RcIj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIHtkYXRhICYmXHJcbiAgICAgICAgICAgICAgICBkYXRhLm1hcCgoYmxvZywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwid293IGZhZGVJblVwXCIgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy90aHVtYnMvNDItMjkuanBnXCIgYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pbWctdXJsPXtibG9nICYmIGJsb2cuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2FlOiBgdXJsKCR7YmxvZyAmJiBibG9nLmltZ30pYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2Jsb2cgJiYgYmxvZy5kYXRlICYmIGJsb2cuZGF0ZS5kYXRlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2Jsb2cgJiYgYmxvZy5kYXRlICYmIGJsb2cuZGF0ZS5tb250aH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRpem1lX3RtX2Z1bGxfbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBvcHVwRGF0YShibG9nICYmIGJsb2cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UG9wdXAodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj57YmxvZy5jYXRlZ29yeX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj57YmxvZy50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c19oaWRkZW5fZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NfcG9wdXBfaW5mb3JtYXRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmxvZy5kZXRhaWxzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2cuZGV0YWlscy5tYXAoKGRldGFpbHMsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2l9PntkZXRhaWxzfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJ1c2hfMSB3b3cgem9vbUluXCIgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvaW1nL2JydXNoZXMvbmV3cy8xLnBuZ1wiIGFsdD1cImltYWdlXCIgd2lkdGg9ezEwMH0gaGVpZ2h0PXsxMDB9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicnVzaF8yIHdvdyB6b29tSW5cIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjFzXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvYnJ1c2hlcy9uZXdzLzIucG5nXCIgYWx0PVwiaW1hZ2VcIiB3aWR0aD17MTAwfSBoZWlnaHQ9ezEwMH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3cztcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYVRhZ0NsaWNrIiwiZmF0Y2hEYXRhIiwiQmxvZ1BvcFVwIiwiSW1hZ2UiLCJOZXdzIiwiZGF0YSIsInNldERhdGEiLCJwb3B1cERhdGEiLCJzZXRQb3B1cERhdGEiLCJwb3B1cCIsInNldFBvcHVwIiwiZmV0Y2hEYXRhIiwiZmV0Y2hlZERhdGEiLCJtYXAiLCJibG9nIiwiaSIsImltZyIsImJhY2tncm91bmRJbWFnYWUiLCJkYXRlIiwibW9udGgiLCJjYXRlZ29yeSIsInRpdGxlIiwiZGV0YWlscyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/News.js\n");

/***/ })

});