webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout/Layout.js":
/*!*************************************!*\
  !*** ./components/layout/Layout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainNavigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainNavigation */ "./components/layout/MainNavigation.js");
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout.module.css */ "./components/layout/Layout.module.css");
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/xmountain/repos/nextjs-project-meetup/components/layout/Layout.js";



function Layout(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MainNavigation__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/layout/Layout.module.css":
/*!*********************************************!*\
  !*** ./components/layout/Layout.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Layout.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/layout/Layout.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Layout.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/layout/Layout.module.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Layout.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/layout/Layout.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./components/layout/MainNavigation.js":
/*!*********************************************!*\
  !*** ./components/layout/MainNavigation.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainNavigation.module.css */ "./components/layout/MainNavigation.module.css");
/* harmony import */ var _MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/xmountain/repos/nextjs-project-meetup/components/layout/MainNavigation.js";


function MainNavigation() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    className: _MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.logo,
      children: "React Meetups"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Link, {
            to: "/",
            children: "All Meetups"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Link, {
            to: "/new-meetup",
            children: "Add New Meetup"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

_c = MainNavigation;
/* harmony default export */ __webpack_exports__["default"] = (MainNavigation);

var _c;

$RefreshReg$(_c, "MainNavigation");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/layout/MainNavigation.module.css":
/*!*****************************************************!*\
  !*** ./components/layout/MainNavigation.module.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./MainNavigation.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/layout/MainNavigation.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./MainNavigation.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/layout/MainNavigation.module.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./MainNavigation.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/layout/MainNavigation.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/layout/Layout.module.css":
/*!*********************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/layout/Layout.module.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Layout_main__2Mwq5 {\n  margin: 3rem auto;\n  width: 90%;\n  max-width: 40rem;\n}", "",{"version":3,"sources":["webpack://components/layout/Layout.module.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,UAAU;EACV,gBAAgB;AAClB","sourcesContent":[".main {\n  margin: 3rem auto;\n  width: 90%;\n  max-width: 40rem;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"main": "Layout_main__2Mwq5"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/layout/MainNavigation.module.css":
/*!*****************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/layout/MainNavigation.module.css ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".MainNavigation_header__t8YPG {\n  width: 100%;\n  height: 5rem;\n  display: -moz-box;\n  display: flex;\n  -moz-box-align: center;\n       align-items: center;\n  -moz-box-pack: justify;\n       justify-content: space-between;\n  background-color: #77002e;\n  padding: 0 10%;\n}\n\n.MainNavigation_logo__Qwpy5 {\n  font-size: 2rem;\n  color: white;\n  font-weight: bold;\n}\n\n.MainNavigation_header__t8YPG ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: -moz-box;\n  display: flex;\n  -moz-box-align: baseline;\n       align-items: baseline;\n}\n\n.MainNavigation_header__t8YPG li {\n  margin-left: 3rem;\n}\n\n.MainNavigation_header__t8YPG a {\n  text-decoration: none;\n  font-size: 1.5rem;\n  color: #fcb8d2;\n}\n\n.MainNavigation_header__t8YPG a:hover,\n.MainNavigation_header__t8YPG a:active,\n.MainNavigation_header__t8YPG a.MainNavigation_active__sxu85 {\n  color: white;\n}\n", "",{"version":3,"sources":["webpack://components/layout/MainNavigation.module.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,iBAAa;EAAb,aAAa;EACb,sBAAmB;OAAnB,mBAAmB;EACnB,sBAA8B;OAA9B,8BAA8B;EAC9B,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,SAAS;EACT,UAAU;EACV,iBAAa;EAAb,aAAa;EACb,wBAAqB;OAArB,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;EACrB,iBAAiB;EACjB,cAAc;AAChB;;AAEA;;;EAGE,YAAY;AACd","sourcesContent":[".header {\n  width: 100%;\n  height: 5rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #77002e;\n  padding: 0 10%;\n}\n\n.logo {\n  font-size: 2rem;\n  color: white;\n  font-weight: bold;\n}\n\n.header ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  align-items: baseline;\n}\n\n.header li {\n  margin-left: 3rem;\n}\n\n.header a {\n  text-decoration: none;\n  font-size: 1.5rem;\n  color: #fcb8d2;\n}\n\n.header a:hover,\n.header a:active,\n.header a.active {\n  color: white;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"header": "MainNavigation_header__t8YPG",
	"logo": "MainNavigation_logo__Qwpy5",
	"active": "MainNavigation_active__sxu85"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");

var _jsxFileName = "/home/xmountain/repos/nextjs-project-meetup/pages/index.js";


var DUMMY_MEETUPS = [{
  id: 'm1',
  title: 'A First Meetup',
  image: 'https://www.planetware.com/photos-large/F/eiffel-tower.jpg',
  address: 'Some address 5, 12345, Paris',
  description: 'This is the first meetup'
}, {
  id: 'm2',
  title: 'A second Meetup',
  image: 'https://www.planetware.com/photos-large/F/eiffel-tower.jpg',
  address: 'Some address 5, 12345, Paris',
  description: 'This is the second meetup'
}];

function HomePage() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      meetups: DUMMY_MEETUPS
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 4
    }, this), ";"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 3
  }, this);
}

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQubW9kdWxlLmNzcz9mMWVjIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC9NYWluTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTWFpbk5hdmlnYXRpb24ubW9kdWxlLmNzcz85YWQ1Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTWFpbk5hdmlnYXRpb24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiTGF5b3V0IiwicHJvcHMiLCJjbGFzc2VzIiwibWFpbiIsImNoaWxkcmVuIiwiTWFpbk5hdmlnYXRpb24iLCJoZWFkZXIiLCJsb2dvIiwiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQ3JCLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBTSxlQUFTLEVBQUVDLHlEQUFPLENBQUNDLElBQXpCO0FBQUEsZ0JBQWdDRixLQUFLLENBQUNHO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU1EOztLQVBRSixNO0FBU01BLHFFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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SUFBRSxFQUFFLElBREw7QUFFQ0MsT0FBSyxFQUFFLGlCQUZSO0FBR0NDLE9BQUssRUFBRSw0REFIUjtBQUlDQyxTQUFPLEVBQUUsOEJBSlY7QUFLQ0MsYUFBVyxFQUFFO0FBTGQsQ0FScUIsQ0FBdEI7O0FBaUJBLFNBQVNDLFFBQVQsR0FBb0I7QUFDbkIsc0JBQ0MscUVBQUMsaUVBQUQ7QUFBQSw0QkFDQyxxRUFBQyxzRUFBRDtBQUFZLGFBQU8sRUFBRU47QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBS0E7O0tBTlFNLFE7QUFPTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjhiYmYzOGVjYjJmMGEwMTA2MGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYWluTmF2aWdhdGlvbiBmcm9tICcuL01haW5OYXZpZ2F0aW9uJztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vTGF5b3V0Lm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBMYXlvdXQocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPE1haW5OYXZpZ2F0aW9uIC8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn0+e3Byb3BzLmNoaWxkcmVufTwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9MYXlvdXQubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vTGF5b3V0Lm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9MYXlvdXQubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgY2xhc3NlcyBmcm9tICcuL01haW5OYXZpZ2F0aW9uLm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBNYWluTmF2aWdhdGlvbigpIHtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfT5SZWFjdCBNZWV0dXBzPC9kaXY+XG4gICAgICA8bmF2PlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89Jy8nPkFsbCBNZWV0dXBzPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89Jy9uZXctbWVldHVwJz5BZGQgTmV3IE1lZXR1cDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5OYXZpZ2F0aW9uO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9NYWluTmF2aWdhdGlvbi5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9NYWluTmF2aWdhdGlvbi5tb2R1bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vTWFpbk5hdmlnYXRpb24ubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuTGF5b3V0X21haW5fXzJNd3E1IHtcXG4gIG1hcmdpbjogM3JlbSBhdXRvO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1heC13aWR0aDogNDByZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL2xheW91dC9MYXlvdXQubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tYWluIHtcXG4gIG1hcmdpbjogM3JlbSBhdXRvO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1heC13aWR0aDogNDByZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIm1haW5cIjogXCJMYXlvdXRfbWFpbl9fMk13cTVcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuTWFpbk5hdmlnYXRpb25faGVhZGVyX190OFlQRyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNXJlbTtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtbW96LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzcwMDJlO1xcbiAgcGFkZGluZzogMCAxMCU7XFxufVxcblxcbi5NYWluTmF2aWdhdGlvbl9sb2dvX19Rd3B5NSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLk1haW5OYXZpZ2F0aW9uX2hlYWRlcl9fdDhZUEcgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbW96LWJveC1hbGlnbjogYmFzZWxpbmU7XFxuICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuXFxuLk1haW5OYXZpZ2F0aW9uX2hlYWRlcl9fdDhZUEcgbGkge1xcbiAgbWFyZ2luLWxlZnQ6IDNyZW07XFxufVxcblxcbi5NYWluTmF2aWdhdGlvbl9oZWFkZXJfX3Q4WVBHIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogI2ZjYjhkMjtcXG59XFxuXFxuLk1haW5OYXZpZ2F0aW9uX2hlYWRlcl9fdDhZUEcgYTpob3ZlcixcXG4uTWFpbk5hdmlnYXRpb25faGVhZGVyX190OFlQRyBhOmFjdGl2ZSxcXG4uTWFpbk5hdmlnYXRpb25faGVhZGVyX190OFlQRyBhLk1haW5OYXZpZ2F0aW9uX2FjdGl2ZV9fc3h1ODUge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy9sYXlvdXQvTWFpbk5hdmlnYXRpb24ubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWE7RUFBYixhQUFhO0VBQ2Isc0JBQW1CO09BQW5CLG1CQUFtQjtFQUNuQixzQkFBOEI7T0FBOUIsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7RUFDVixpQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBcUI7T0FBckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRSxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3MDAyZTtcXG4gIHBhZGRpbmc6IDAgMTAlO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmhlYWRlciB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxufVxcblxcbi5oZWFkZXIgbGkge1xcbiAgbWFyZ2luLWxlZnQ6IDNyZW07XFxufVxcblxcbi5oZWFkZXIgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiAjZmNiOGQyO1xcbn1cXG5cXG4uaGVhZGVyIGE6aG92ZXIsXFxuLmhlYWRlciBhOmFjdGl2ZSxcXG4uaGVhZGVyIGEuYWN0aXZlIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiaGVhZGVyXCI6IFwiTWFpbk5hdmlnYXRpb25faGVhZGVyX190OFlQR1wiLFxuXHRcImxvZ29cIjogXCJNYWluTmF2aWdhdGlvbl9sb2dvX19Rd3B5NVwiLFxuXHRcImFjdGl2ZVwiOiBcIk1haW5OYXZpZ2F0aW9uX2FjdGl2ZV9fc3h1ODVcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dCc7XG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdCc7XG5cbmNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXG5cdHtcblx0XHRpZDogJ20xJyxcblx0XHR0aXRsZTogJ0EgRmlyc3QgTWVldHVwJyxcblx0XHRpbWFnZTogJ2h0dHBzOi8vd3d3LnBsYW5ldHdhcmUuY29tL3Bob3Rvcy1sYXJnZS9GL2VpZmZlbC10b3dlci5qcGcnLFxuXHRcdGFkZHJlc3M6ICdTb21lIGFkZHJlc3MgNSwgMTIzNDUsIFBhcmlzJyxcblx0XHRkZXNjcmlwdGlvbjogJ1RoaXMgaXMgdGhlIGZpcnN0IG1lZXR1cCcsXG5cdH0sXG5cdHtcblx0XHRpZDogJ20yJyxcblx0XHR0aXRsZTogJ0Egc2Vjb25kIE1lZXR1cCcsXG5cdFx0aW1hZ2U6ICdodHRwczovL3d3dy5wbGFuZXR3YXJlLmNvbS9waG90b3MtbGFyZ2UvRi9laWZmZWwtdG93ZXIuanBnJyxcblx0XHRhZGRyZXNzOiAnU29tZSBhZGRyZXNzIDUsIDEyMzQ1LCBQYXJpcycsXG5cdFx0ZGVzY3JpcHRpb246ICdUaGlzIGlzIHRoZSBzZWNvbmQgbWVldHVwJyxcblx0fSxcbl07XG5cbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxMYXlvdXQ+XG5cdFx0XHQ8TWVldHVwTGlzdCBtZWV0dXBzPXtEVU1NWV9NRUVUVVBTfSAvPjtcblx0XHQ8L0xheW91dD5cblx0KTtcbn1cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==