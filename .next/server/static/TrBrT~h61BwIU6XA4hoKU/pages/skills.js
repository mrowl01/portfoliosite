module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "15ed");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "1+rp":
/***/ (function(module, exports) {



/***/ }),

/***/ "15ed":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("6SVQ");


/***/ }),

/***/ "3hBj":
/***/ (function(module, exports) {



/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6SVQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Components_Layout_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("oD5A");
/* harmony import */ var _Components_skills_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("3hBj");
/* harmony import */ var _Components_skills_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Components_skills_scss__WEBPACK_IMPORTED_MODULE_7__);









var Skills =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Skills, _Component);

  function Skills() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Skills);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Skills).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Skills, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Layout_Layout__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "contentBody",
        style: {
          textAlign: 'center'
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "jumbotron"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        style: {
          fontSize: '6.18em'
        },
        className: ""
      }, "Skills"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Top 5")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
        className: "my-4"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        title: "javascript",
        style: {
          width: '121.35px',
          height: '121.35px',
          margin: '1.6%'
        },
        src: "/static/js.png",
        alt: "...",
        className: "rounded-circle grow"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        title: "react",
        style: {
          width: '121.35px',
          height: '121.35px',
          margin: '1.6%'
        },
        src: "/static/react.png",
        alt: "...",
        className: "rounded-circle grow"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        title: "node.js",
        style: {
          width: '121.35px',
          height: '121.35px',
          margin: '1.6%'
        },
        src: "/static/node.png",
        alt: "...",
        className: "rounded-circle grow"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        title: "css",
        style: {
          width: '121.35px',
          height: '121.35px',
          margin: '1.6%'
        },
        src: "/static/css.png",
        alt: "...",
        className: "rounded-circle grow"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        title: "html",
        style: {
          width: '121.35px',
          height: '121.35px',
          margin: '1.6%'
        },
        src: "/static/html.png",
        alt: "...",
        className: "rounded-circle grow"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "card-deck"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "card tc"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        className: "card-title"
      }, "Front-End"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        title: "bootstrap ",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/boot.png",
        alt: "...",
        className: "rounded-circle grow"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        title: "html",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/html.png",
        alt: "...",
        className: "rounded-circle grow"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        title: "CSS",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/css.png",
        alt: "...",
        className: "rounded-circle grow"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        title: "javascript",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/js.png",
        alt: "...",
        className: "rounded-circle grow"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        title: "jquery",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/jq.png",
        alt: "...",
        className: "rounded-circle grow"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        title: "sass",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/sass.png",
        alt: "...",
        className: "rounded-circle grow"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        title: "react",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/react.png",
        alt: "...",
        className: "rounded-circle grow"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        title: "redux",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/redux.png",
        alt: "...",
        className: "rounded-circle grow"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        title: "next.js",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/next.png",
        alt: "...",
        className: "rounded-circle grow"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        title: "typescript",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/ts.png",
        alt: "...",
        className: "rounded-circle grow"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "card tc"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        className: "card-title"
      }, "Back-End"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        title: "node.js",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/node.png",
        alt: "...",
        className: "rounded-circle grow"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        title: "mysql",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/mysql.png",
        alt: "...",
        className: "rounded-circle grow"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        title: "mongodb",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/mongo.png",
        alt: "...",
        className: "rounded-circle grow"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        title: "python",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/python.jpg",
        alt: "...",
        className: "rounded-circle grow"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        title: "express",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/express.png",
        alt: "...",
        className: "rounded-circle grow"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        title: "postgres",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/postgres.png",
        alt: "...",
        className: "rounded-circle grow"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        title: "redis",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/redis.png",
        alt: "...",
        className: "rounded-circle grow"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "card tc"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        className: "card-title"
      }, "Other"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        title: "git",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/git.png",
        alt: "...",
        className: "rounded-circle grow"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        title: "RESTful",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/rest.jpg",
        alt: "...",
        className: "rounded-circle grow"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        title: "Responsive Design",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/res.png",
        alt: "...",
        className: "rounded-circle grow"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        title: "Unity 3D",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/unity.png",
        alt: "...",
        className: "rounded-circle grow"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        title: "C#",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/c.png",
        alt: "...",
        className: "rounded-circle grow"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        title: "heroku",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/heroku.png",
        alt: "...",
        className: "rounded-circle grow"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        title: "Amazon Web Services",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/aws.png",
        alt: "...",
        className: "rounded-circle grow"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        title: "jest",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/jest.png",
        alt: "...",
        className: "rounded-circle grow"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        title: "docker",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/docker.png",
        alt: "...",
        className: "rounded-circle grow"
      })))))));
    }
  }]);

  return Skills;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Skills);

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oD5A":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 2 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./Components/test.scss
var test = __webpack_require__("1+rp");

// CONCATENATED MODULE: ./Components/Navbar/Navbar.js










var Navbar_Navbar =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Navbar, _Component);

  function Navbar() {
    Object(classCallCheck["a" /* default */])(this, Navbar);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Navbar).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Navbar, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("nav", {
        id: "navColor",
        style: {
          width: '100%'
        },
        className: "navbar navbar-expand-lg navbar-light bg-light sticky-top"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/"
      }, external_react_default.a.createElement("a", {
        className: "navbar-brand"
      }, "CO")), external_react_default.a.createElement("button", {
        className: "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, external_react_default.a.createElement("span", {
        className: "navbar-toggler-icon"
      })), external_react_default.a.createElement("div", {
        className: "collapse navbar-collapse",
        id: "navbarSupportedContent test"
      }, external_react_default.a.createElement("ul", {
        className: "navbar-nav ml-auto"
      }, external_react_default.a.createElement("li", {
        className: "nav-item"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/projects"
      }, external_react_default.a.createElement("a", {
        className: "nav-link"
      }, "Projects"))), external_react_default.a.createElement("li", {
        className: "nav-item "
      }, external_react_default.a.createElement(link_default.a, {
        href: "/skills"
      }, external_react_default.a.createElement("a", {
        className: "nav-link"
      }, "Skills"))))));
    }
  }]);

  return Navbar;
}(external_react_["Component"]);

/* harmony default export */ var Components_Navbar_Navbar = (Navbar_Navbar);
// CONCATENATED MODULE: ./Components/Layout/Layout.js










var Layout_Layout =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Layout, _Component);

  function Layout() {
    Object(classCallCheck["a" /* default */])(this, Layout);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Layout).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Layout, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, " Chris Ortega's Portfolio "), external_react_default.a.createElement("link", {
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
        rel: "stylesheet",
        integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
        crossorigin: "anonymous"
      })), external_react_default.a.createElement(Components_Navbar_Navbar, null), external_react_default.a.createElement("div", {
        className: "container",
        style: {
          paddingTop: '6.17%'
        }
      }, this.props.children));
    }
  }]);

  return Layout;
}(external_react_["Component"]);

/* harmony default export */ var Components_Layout_Layout = __webpack_exports__["a"] = (Layout_Layout);

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });