webpackHotUpdate("static\\development\\pages\\skills.js",{

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/skills.js":
/*!*************************!*\
  !*** ./pages/skills.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/Layout/Layout */ "./Components/Layout/Layout.js");





var _jsxFileName = "C:\\Users\\CRAYSY\\Desktop\\chrisnextsite\\pages\\skills.js";




var Skills =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Skills, _Component);

  function Skills() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Skills);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Skills).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Skills, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Components_Layout_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "contentBody",
        style: {
          textAlign: 'center'
        },
        className: "jsx-4152720480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "jumbotron",
        style: {
          backgroundImage: "url('http://www.designshock.com/wp-content/uploads/2014/08/1_thumb1.jpg')"
        },
        className: "jsx-4152720480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        class: "display-4",
        className: "jsx-4152720480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, "Skills"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        class: "lead",
        className: "jsx-4152720480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, "Top 5 skills"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", {
        class: "my-4",
        className: "jsx-4152720480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        style: {
          width: '75px',
          height: '75px',
          margin: '1.6%'
        },
        src: "/static/boot.png",
        alt: "...",
        class: "rounded-circle",
        className: "jsx-4152720480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        style: {
          width: '75px',
          height: '75px',
          margin: '1.6%'
        },
        src: "/static/boot.png",
        alt: "...",
        class: "rounded-circle",
        className: "jsx-4152720480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        style: {
          width: '75px',
          height: '75px',
          margin: '1.6%'
        },
        src: "/static/boot.png",
        alt: "...",
        class: "rounded-circle",
        className: "jsx-4152720480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        style: {
          width: '75px',
          height: '75px',
          margin: '1.6%'
        },
        src: "/static/boot.png",
        alt: "...",
        class: "rounded-circle",
        className: "jsx-4152720480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        style: {
          width: '75px',
          height: '75px',
          margin: '1.6%'
        },
        src: "/static/boot.png",
        alt: "...",
        class: "rounded-circle",
        className: "jsx-4152720480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-4152720480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "card-deck",
        className: "jsx-4152720480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "card",
        className: "jsx-4152720480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "card-body",
        className: "jsx-4152720480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", {
        class: "card-title",
        className: "jsx-4152720480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "Front-End"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        style: {
          width: '75px',
          height: '75px',
          margin: '1.6%'
        },
        src: "/static/boot.png",
        alt: "...",
        class: "rounded-circle",
        className: "jsx-4152720480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        style: {
          width: '75px',
          height: '75px',
          margin: '1.6%'
        },
        src: "/static/boot.png",
        alt: "...",
        class: "rounded-circle",
        className: "jsx-4152720480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        style: {
          width: '75px',
          height: '75px',
          margin: '1.6%'
        },
        src: "/static/boot.png",
        alt: "...",
        class: "rounded-circle",
        className: "jsx-4152720480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        style: {
          width: '75px',
          height: '75px',
          margin: '1.6%'
        },
        src: "/static/boot.png",
        alt: "...",
        class: "rounded-circle",
        className: "jsx-4152720480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        style: {
          width: '75px',
          height: '75px',
          margin: '1.6%'
        },
        src: "/static/boot.png",
        alt: "...",
        class: "rounded-circle",
        className: "jsx-4152720480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        style: {
          width: '75px',
          height: '75px',
          margin: '1.6%'
        },
        src: "/static/boot.png",
        alt: "...",
        class: "rounded-circle",
        className: "jsx-4152720480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        style: {
          width: '75px',
          height: '75px',
          margin: '1.6%'
        },
        src: "/static/boot.png",
        alt: "...",
        class: "rounded-circle",
        className: "jsx-4152720480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "card",
        className: "jsx-4152720480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "...",
        class: "card-img-top",
        alt: "...",
        className: "jsx-4152720480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "card-body",
        className: "jsx-4152720480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", {
        class: "card-title",
        className: "jsx-4152720480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Card title"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        class: "card-text",
        className: "jsx-4152720480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "This card has supporting text below as a natural lead-in to additional content."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        class: "card-text",
        className: "jsx-4152720480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("small", {
        class: "text-muted",
        className: "jsx-4152720480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Last updated 3 mins ago")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "card",
        className: "jsx-4152720480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "...",
        class: "card-img-top",
        alt: "...",
        className: "jsx-4152720480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        class: "card-body",
        className: "jsx-4152720480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", {
        class: "card-title",
        className: "jsx-4152720480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Card title"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        class: "card-text",
        className: "jsx-4152720480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        class: "card-text",
        className: "jsx-4152720480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("small", {
        class: "text-muted",
        className: "jsx-4152720480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Last updated 3 mins ago")))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "4152720480",
        __self: this
      }, "p.jsx-4152720480{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQ1JBWVNZXFxEZXNrdG9wXFxjaHJpc25leHRzaXRlXFxwYWdlc1xcc2tpbGxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEZ0IsQUFHc0IsVUFDWiIsImZpbGUiOiJDOlxcVXNlcnNcXENSQVlTWVxcRGVza3RvcFxcY2hyaXNuZXh0c2l0ZVxccGFnZXNcXHNraWxscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL0NvbXBvbmVudHMvTGF5b3V0L0xheW91dCdcclxuXHJcblxyXG5jbGFzcyBTa2lsbHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdHJlbmRlcigpe1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PExheW91dD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPSdjb250ZW50Qm9keScgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcid9fT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJqdW1ib3Ryb25cIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTpgdXJsKCdodHRwOi8vd3d3LmRlc2lnbnNob2NrLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8wOC8xX3RodW1iMS5qcGcnKWB9fT5cclxuXHRcdFx0XHRcdCAgPGgxIGNsYXNzPVwiZGlzcGxheS00XCI+U2tpbGxzPC9oMT5cclxuXHRcdFx0XHRcdCAgPHAgY2xhc3M9XCJsZWFkXCI+VG9wIDUgc2tpbGxzPC9wPlxyXG5cdFx0XHRcdFx0ICA8aHIgY2xhc3M9XCJteS00XCIvPlxyXG5cdFx0XHRcdFx0ICA8aW1nIHN0eWxlPXt7d2lkdGg6Jzc1cHgnLGhlaWdodDonNzVweCcsIG1hcmdpbjonMS42JSd9fXNyYz1cIi9zdGF0aWMvYm9vdC5wbmdcIiBhbHQ9XCIuLi5cIiBjbGFzcz1cInJvdW5kZWQtY2lyY2xlXCIvPlxyXG5cdFx0XHRcdFx0ICA8aW1nIHN0eWxlPXt7d2lkdGg6Jzc1cHgnLGhlaWdodDonNzVweCcsIG1hcmdpbjonMS42JSd9fXNyYz1cIi9zdGF0aWMvYm9vdC5wbmdcIiBhbHQ9XCIuLi5cIiBjbGFzcz1cInJvdW5kZWQtY2lyY2xlXCIvPlxyXG5cdFx0XHRcdFx0ICA8aW1nIHN0eWxlPXt7d2lkdGg6Jzc1cHgnLGhlaWdodDonNzVweCcsIG1hcmdpbjonMS42JSd9fXNyYz1cIi9zdGF0aWMvYm9vdC5wbmdcIiBhbHQ9XCIuLi5cIiBjbGFzcz1cInJvdW5kZWQtY2lyY2xlXCIvPlxyXG5cdFx0XHRcdFx0ICA8aW1nIHN0eWxlPXt7d2lkdGg6Jzc1cHgnLGhlaWdodDonNzVweCcsIG1hcmdpbjonMS42JSd9fXNyYz1cIi9zdGF0aWMvYm9vdC5wbmdcIiBhbHQ9XCIuLi5cIiBjbGFzcz1cInJvdW5kZWQtY2lyY2xlXCIvPlxyXG5cdFx0XHRcdFx0ICA8aW1nIHN0eWxlPXt7d2lkdGg6Jzc1cHgnLGhlaWdodDonNzVweCcsIG1hcmdpbjonMS42JSd9fXNyYz1cIi9zdGF0aWMvYm9vdC5wbmdcIiBhbHQ9XCIuLi5cIiBjbGFzcz1cInJvdW5kZWQtY2lyY2xlXCIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkLWRlY2tcIj5cclxuXHRcdFx0XHRcdCAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuXHRcdFx0XHRcdCAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcblx0XHRcdFx0XHQgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlXCI+RnJvbnQtRW5kPC9oNT5cclxuXHRcdFx0XHRcdCAgICAgIDxpbWcgc3R5bGU9e3t3aWR0aDonNzVweCcsaGVpZ2h0Oic3NXB4JywgbWFyZ2luOicxLjYlJ319XHJcblx0XHRcdFx0XHQgICAgICBzcmM9XCIvc3RhdGljL2Jvb3QucG5nXCIgYWx0PVwiLi4uXCIgY2xhc3M9XCJyb3VuZGVkLWNpcmNsZVwiLz5cclxuXHRcdFx0XHRcdCAgICAgIDxpbWcgc3R5bGU9e3t3aWR0aDonNzVweCcsaGVpZ2h0Oic3NXB4JywgbWFyZ2luOicxLjYlJ319c3JjPVwiL3N0YXRpYy9ib290LnBuZ1wiIGFsdD1cIi4uLlwiIGNsYXNzPVwicm91bmRlZC1jaXJjbGVcIi8+XHJcblx0XHRcdFx0XHQgICAgICA8aW1nIHN0eWxlPXt7d2lkdGg6Jzc1cHgnLGhlaWdodDonNzVweCcsIG1hcmdpbjonMS42JSd9fXNyYz1cIi9zdGF0aWMvYm9vdC5wbmdcIiBhbHQ9XCIuLi5cIiBjbGFzcz1cInJvdW5kZWQtY2lyY2xlXCIvPlxyXG5cdFx0XHRcdFx0ICAgICAgPGltZyBzdHlsZT17e3dpZHRoOic3NXB4JyxoZWlnaHQ6Jzc1cHgnLCBtYXJnaW46JzEuNiUnfX1zcmM9XCIvc3RhdGljL2Jvb3QucG5nXCIgYWx0PVwiLi4uXCIgY2xhc3M9XCJyb3VuZGVkLWNpcmNsZVwiLz5cclxuXHRcdFx0XHRcdCAgICAgIDxpbWcgc3R5bGU9e3t3aWR0aDonNzVweCcsaGVpZ2h0Oic3NXB4JywgbWFyZ2luOicxLjYlJ319c3JjPVwiL3N0YXRpYy9ib290LnBuZ1wiIGFsdD1cIi4uLlwiIGNsYXNzPVwicm91bmRlZC1jaXJjbGVcIi8+XHJcblx0XHRcdFx0XHQgICAgICA8aW1nIHN0eWxlPXt7d2lkdGg6Jzc1cHgnLGhlaWdodDonNzVweCcsIG1hcmdpbjonMS42JSd9fXNyYz1cIi9zdGF0aWMvYm9vdC5wbmdcIiBhbHQ9XCIuLi5cIiBjbGFzcz1cInJvdW5kZWQtY2lyY2xlXCIvPlxyXG5cdFx0XHRcdFx0ICAgICAgPGltZyBzdHlsZT17e3dpZHRoOic3NXB4JyxoZWlnaHQ6Jzc1cHgnLCBtYXJnaW46JzEuNiUnfX1zcmM9XCIvc3RhdGljL2Jvb3QucG5nXCIgYWx0PVwiLi4uXCIgY2xhc3M9XCJyb3VuZGVkLWNpcmNsZVwiLz5cclxuXHRcdFx0XHRcdCAgICA8L2Rpdj5cclxuXHRcdFx0XHRcdCAgPC9kaXY+XHJcblx0XHRcdFx0XHQgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcblx0XHRcdFx0XHQgICAgPGltZyBzcmM9XCIuLi5cIiBjbGFzcz1cImNhcmQtaW1nLXRvcFwiIGFsdD1cIi4uLlwiLz5cclxuXHRcdFx0XHRcdCAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcblx0XHRcdFx0XHQgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlXCI+Q2FyZCB0aXRsZTwvaDU+XHJcblx0XHRcdFx0XHQgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPlRoaXMgY2FyZCBoYXMgc3VwcG9ydGluZyB0ZXh0IGJlbG93IGFzIGEgbmF0dXJhbCBsZWFkLWluIHRvIGFkZGl0aW9uYWwgY29udGVudC48L3A+XHJcblx0XHRcdFx0XHQgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj5MYXN0IHVwZGF0ZWQgMyBtaW5zIGFnbzwvc21hbGw+PC9wPlxyXG5cdFx0XHRcdFx0ICAgIDwvZGl2PlxyXG5cdFx0XHRcdFx0ICA8L2Rpdj5cclxuXHRcdFx0XHRcdCAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuXHRcdFx0XHRcdCAgICA8aW1nIHNyYz1cIi4uLlwiIGNsYXNzPVwiY2FyZC1pbWctdG9wXCIgYWx0PVwiLi4uXCIvPlxyXG5cdFx0XHRcdFx0ICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuXHRcdFx0XHRcdCAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGVcIj5DYXJkIHRpdGxlPC9oNT5cclxuXHRcdFx0XHRcdCAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+VGhpcyBpcyBhIHdpZGVyIGNhcmQgd2l0aCBzdXBwb3J0aW5nIHRleHQgYmVsb3cgYXMgYSBuYXR1cmFsIGxlYWQtaW4gdG8gYWRkaXRpb25hbCBjb250ZW50LiBUaGlzIGNhcmQgaGFzIGV2ZW4gbG9uZ2VyIGNvbnRlbnQgdGhhbiB0aGUgZmlyc3QgdG8gc2hvdyB0aGF0IGVxdWFsIGhlaWdodCBhY3Rpb24uPC9wPlxyXG5cdFx0XHRcdFx0ICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+TGFzdCB1cGRhdGVkIDMgbWlucyBhZ288L3NtYWxsPjwvcD5cclxuXHRcdFx0XHRcdCAgICA8L2Rpdj5cclxuXHRcdFx0XHRcdCAgPC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdCAgICAgIHAge1xyXG5cdFx0XHQgICAgICAgIGNvbG9yOiByZWQ7XHJcblx0XHRcdCAgICAgIH1cclxuXHRcdFx0ICAgIGB9PC9zdHlsZT5cclxuXHRcdFx0PC9MYXlvdXQ+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTa2lsbHMgOyJdfQ== */\n/*@ sourceURL=C:\\Users\\CRAYSY\\Desktop\\chrisnextsite\\pages\\skills.js */"));
    }
  }]);

  return Skills;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Skills);

/***/ })

})
//# sourceMappingURL=skills.js.5aff96cfd3d02b7632cd.hot-update.js.map