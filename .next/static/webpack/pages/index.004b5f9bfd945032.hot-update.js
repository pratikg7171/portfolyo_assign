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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Shivam_Desktop_dizme_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_Users_Shivam_Desktop_dizme_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_Users_Shivam_Desktop_dizme_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Shivam_Desktop_dizme_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilits */ \"./src/utilits.js\");\n/* harmony import */ var _popup_BlogPopUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popup/BlogPopUp */ \"./src/components/popup/BlogPopUp.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"C:\\\\Users\\\\Shivam\\\\Desktop\\\\dizme\\\\src\\\\components\\\\News.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar apiUrl = \"https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae\";\n\nvar News = function News() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),\n      popupData = _useState2[0],\n      setPopupData = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      popup = _useState3[0],\n      setPopup = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var fetchData = /*#__PURE__*/function () {\n      var _ref = (0,C_Users_Shivam_Desktop_dizme_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_Users_Shivam_Desktop_dizme_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var fetchedData;\n        return C_Users_Shivam_Desktop_dizme_node_modules_next_dist_compiled_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.next = 3;\n                return (0,_utilits__WEBPACK_IMPORTED_MODULE_3__.fatchData)(apiUrl);\n\n              case 3:\n                fetchedData = _context.sent;\n                setData(fetchedData.user.timeline.slice(0, 3));\n                _context.next = 10;\n                break;\n\n              case 7:\n                _context.prev = 7;\n                _context.t0 = _context[\"catch\"](0);\n                console.error(\"Error fetching data:\", _context.t0);\n\n              case 10:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 7]]);\n      }));\n\n      return function fetchData() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchData();\n  }, []);\n\n  var openPopup = function openPopup(blog) {\n    setPopupData(blog);\n    setPopup(true);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: \"dizme_tm_section\",\n    id: \"blog\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_popup_BlogPopUp__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      open: popup,\n      data: popupData,\n      close: function close() {\n        return setPopup(false);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"dizme_tm_news\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: \"dizme_tm_main_title\",\n          \"data-align\": \"center\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n            children: \"My Timeline\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h3\", {\n            children: \"Work Experience and Achievements\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: \"news_list\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"ul\", {\n            children: data.map(function (blog, i) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"li\", {\n                className: \"wow fadeInUp\",\n                \"data-wow-duration\": \"1s\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n                  className: \"list_inner\",\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n                    className: \"image\",\n                    children: blog.icon && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n                      src: blog.icon.url,\n                      alt: \"image\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 44,\n                      columnNumber: 37\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 43,\n                    columnNumber: 21\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n                    className: \"details\",\n                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n                      className: \"category\",\n                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"a\", {\n                        href: \"#\",\n                        children: blog.company_name\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 48,\n                        columnNumber: 25\n                      }, _this)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 47,\n                      columnNumber: 23\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h3\", {\n                      className: \"title\",\n                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"a\", {\n                        href: \"#\",\n                        children: blog.jobTitle\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 51,\n                        columnNumber: 25\n                      }, _this)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 50,\n                      columnNumber: 23\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n                      children: blog.summary\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 53,\n                      columnNumber: 23\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n                      onClick: function onClick() {\n                        return openPopup(blog);\n                      },\n                      style: {\n                        backgroundColor: 'orange',\n                        color: 'white',\n                        border: 'none',\n                        padding: '10px 20px',\n                        fontSize: '16px',\n                        cursor: 'pointer',\n                        borderRadius: '5px',\n                        boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.2)'\n                      },\n                      children: \"Read More\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 54,\n                      columnNumber: 23\n                    }, _this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 46,\n                    columnNumber: 21\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 42,\n                  columnNumber: 19\n                }, _this)\n              }, i, false, {\n                fileName: _jsxFileName,\n                lineNumber: 41,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"brush_1 wow zoomIn\",\n        \"data-wow-duration\": \"1s\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n          src: \"img/brushes/news/1.png\",\n          alt: \"image\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"brush_2 wow zoomIn\",\n        \"data-wow-duration\": \"1s\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n          src: \"img/brushes/news/2.png\",\n          alt: \"image\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(News, \"fZMq1oVhN/ROFscYXsbz3gLbUjA=\");\n\n_c = News;\n/* harmony default export */ __webpack_exports__[\"default\"] = (News);\n\nvar _c;\n\n$RefreshReg$(_c, \"News\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTtBQUFLLGFBQUcsRUFBQyx3QkFBVDtBQUFrQyxhQUFHLEVBQUM7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE1Q0YsZUErQ0U7QUFBSyxpQkFBUyxFQUFDLG9CQUFmO0FBQW9DLDZCQUFrQixJQUF0RDtBQUFBLCtCQUNFO0FBQUssYUFBRyxFQUFDLHdCQUFUO0FBQWtDLGFBQUcsRUFBQztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQS9DRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdERCxDQS9FRDs7R0FBTWpCOztLQUFBQTtBQWlGTiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OZXdzLmpzPzRmZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBmYXRjaERhdGEgfSBmcm9tIFwiLi4vdXRpbGl0c1wiOyBcclxuaW1wb3J0IEJsb2dQb3BVcCBmcm9tIFwiLi9wb3B1cC9CbG9nUG9wVXBcIjtcclxuY29uc3QgYXBpVXJsID0gcHJvY2Vzcy5lbnYuQVBJX1VSTDtcclxuXHJcbmNvbnN0IE5ld3MgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtwb3B1cERhdGEsIHNldFBvcHVwRGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW3BvcHVwLCBzZXRQb3B1cF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZmV0Y2hlZERhdGEgPSBhd2FpdCBmYXRjaERhdGEoYXBpVXJsKTtcclxuICAgICAgICBzZXREYXRhKGZldGNoZWREYXRhLnVzZXIudGltZWxpbmUuc2xpY2UoMCwgMykpOyBcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb3BlblBvcHVwID0gKGJsb2cpID0+IHtcclxuICAgIHNldFBvcHVwRGF0YShibG9nKTtcclxuICAgIHNldFBvcHVwKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRpem1lX3RtX3NlY3Rpb25cIiBpZD1cImJsb2dcIj5cclxuICAgICAgPEJsb2dQb3BVcCBvcGVuPXtwb3B1cH0gZGF0YT17cG9wdXBEYXRhfSBjbG9zZT17KCkgPT4gc2V0UG9wdXAoZmFsc2UpfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpem1lX3RtX25ld3NcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXptZV90bV9tYWluX3RpdGxlXCIgZGF0YS1hbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICA8c3Bhbj5NeSBUaW1lbGluZTwvc3Bhbj5cclxuICAgICAgICAgICAgPGgzPntgV29yayBFeHBlcmllbmNlIGFuZCBBY2hpZXZlbWVudHNgfTwvaDM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c19saXN0XCI+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGJsb2csIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3b3cgZmFkZUluVXBcIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjFzXCIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2Jsb2cuaWNvbiAmJiA8aW1nIHNyYz17YmxvZy5pY29uLnVybH0gYWx0PVwiaW1hZ2VcIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+e2Jsb2cuY29tcGFueV9uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPntibG9nLmpvYlRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD57YmxvZy5zdW1tYXJ5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICBvbkNsaWNrPXsoKSA9PiBvcGVuUG9wdXAoYmxvZyl9XHJcbiAgc3R5bGU9e3tcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ29yYW5nZScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgcGFkZGluZzogJzEwcHggMjBweCcsXHJcbiAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgYm94U2hhZG93OiAnaW5zZXQgMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpJyxcclxuICB9fVxyXG4+XHJcbiAgUmVhZCBNb3JlXHJcbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJydXNoXzEgd293IHpvb21JblwiIGRhdGEtd293LWR1cmF0aW9uPVwiMXNcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2JydXNoZXMvbmV3cy8xLnBuZ1wiIGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJydXNoXzIgd293IHpvb21JblwiIGRhdGEtd293LWR1cmF0aW9uPVwiMXNcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2JydXNoZXMvbmV3cy8yLnBuZ1wiIGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3cztcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZmF0Y2hEYXRhIiwiQmxvZ1BvcFVwIiwiYXBpVXJsIiwicHJvY2VzcyIsImVudiIsIkFQSV9VUkwiLCJOZXdzIiwiZGF0YSIsInNldERhdGEiLCJwb3B1cERhdGEiLCJzZXRQb3B1cERhdGEiLCJwb3B1cCIsInNldFBvcHVwIiwiZmV0Y2hEYXRhIiwiZmV0Y2hlZERhdGEiLCJ1c2VyIiwidGltZWxpbmUiLCJzbGljZSIsImNvbnNvbGUiLCJlcnJvciIsIm9wZW5Qb3B1cCIsImJsb2ciLCJtYXAiLCJpIiwiaWNvbiIsInVybCIsImNvbXBhbnlfbmFtZSIsImpvYlRpdGxlIiwic3VtbWFyeSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm9yZGVyIiwicGFkZGluZyIsImZvbnRTaXplIiwiY3Vyc29yIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/News.js\n");

/***/ })

});