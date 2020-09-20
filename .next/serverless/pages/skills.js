module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	return __webpack_require__(__webpack_require__.s = "qeJ0");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+SFK":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("AUvm");
__webpack_require__("wgeU");
__webpack_require__("adOz");
__webpack_require__("dl0q");
module.exports = __webpack_require__("WEpk").Symbol;


/***/ }),

/***/ "+iuc":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("wgeU");
__webpack_require__("FlQf");
__webpack_require__("bBy9");
__webpack_require__("B9jh");
__webpack_require__("dL40");
__webpack_require__("xvv9");
__webpack_require__("V+O7");
module.exports = __webpack_require__("WEpk").Set;


/***/ }),

/***/ "+plK":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("ApPD");
module.exports = __webpack_require__("WEpk").Object.getPrototypeOf;


/***/ }),

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

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "/a9y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__("q1tI"));

var head_1 = __importDefault(__webpack_require__("PgRs"));

var statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  500: 'Internal Server Error',
  501: 'Not Implemented'
};

var Error =
/*#__PURE__*/
function (_react_1$default$Comp) {
  (0, _inherits2.default)(Error, _react_1$default$Comp);

  function Error() {
    (0, _classCallCheck2.default)(this, Error);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Error).apply(this, arguments));
  }

  (0, _createClass2.default)(Error, [{
    key: "render",
    value: function render() {
      var statusCode = this.props.statusCode;
      var title = statusCodes[statusCode] || 'An unexpected error has occurred';
      return react_1.default.createElement("div", {
        style: styles.error
      }, react_1.default.createElement(head_1.default, null, react_1.default.createElement("title", null, statusCode, ": ", title)), react_1.default.createElement("div", null, react_1.default.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: 'body { margin: 0 }'
        }
      }), statusCode ? react_1.default.createElement("h1", {
        style: styles.h1
      }, statusCode) : null, react_1.default.createElement("div", {
        style: styles.desc
      }, react_1.default.createElement("h2", {
        style: styles.h2
      }, title, "."))));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          err = _ref.err;
      var statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
      return {
        statusCode: statusCode
      };
    }
  }]);
  return Error;
}(react_1.default.Component);

Error.displayName = 'ErrorPage';
exports.default = Error;
var styles = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0
  }
};

/***/ }),

/***/ "/h46":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__("cHUd")('Map');


/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _assign = _interopRequireDefault(__webpack_require__("UXZV"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__("q1tI"));

var prop_types_1 = __importDefault(__webpack_require__("17x9"));

function withRouter(ComposedComponent) {
  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react_1$default$Comp) {
    (0, _inherits2.default)(WithRouteWrapper, _react_1$default$Comp);

    function WithRouteWrapper() {
      (0, _classCallCheck2.default)(this, WithRouteWrapper);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithRouteWrapper).apply(this, arguments));
    }

    (0, _createClass2.default)(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return react_1.default.createElement(ComposedComponent, (0, _assign.default)({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(react_1.default.Component);

  WithRouteWrapper.contextTypes = {
    router: prop_types_1.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (false) { var name; }

  return WithRouteWrapper;
}

exports.default = withRouter;

/***/ }),

/***/ "0KLy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/
// https://github.com/jamiebuilds/react-loadable/blob/v5.5.0/src/index.js
// Modified to be compatible with webpack 4 / Next.js

var _interopRequireDefault = __webpack_require__("KI45");

var _construct = _interopRequireDefault(__webpack_require__("pbKT"));

var _getIterator2 = _interopRequireDefault(__webpack_require__("XXOK"));

var _iterator2 = _interopRequireDefault(__webpack_require__("XVgq"));

var _symbol = _interopRequireDefault(__webpack_require__("Z7t5"));

var _from = _interopRequireDefault(__webpack_require__("d04V"));

var _isArray = _interopRequireDefault(__webpack_require__("p0XB"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("0iUn"));

var _createClass2 = _interopRequireDefault(__webpack_require__("sLSF"));

var _inherits2 = _interopRequireDefault(__webpack_require__("Tit0"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("MI3g"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("a7VT"));

var _assign = _interopRequireDefault(__webpack_require__("UXZV"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _keys = _interopRequireDefault(__webpack_require__("pLtp"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = (0, _construct.default)(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_construct.default) return false; if (_construct.default.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call((0, _construct.default)(Date, [], function () {})); return true; } catch (e) { return false; } }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof _symbol.default === "undefined" || o[_iterator2.default] == null) { if ((0, _isArray.default)(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = (0, _getIterator2.default)(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return (0, _from.default)(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__("q1tI"));

var loadable_context_1 = __webpack_require__("Q0KE");

var ALL_INITIALIZERS = [];
var READY_INITIALIZERS = [];
var initialized = false;

function load(loader) {
  var promise = loader();
  var state = {
    loading: true,
    loaded: null,
    error: null
  };
  state.promise = promise.then(function (loaded) {
    state.loading = false;
    state.loaded = loaded;
    return loaded;
  }).catch(function (err) {
    state.loading = false;
    state.error = err;
    throw err;
  });
  return state;
}

function loadMap(obj) {
  var state = {
    loading: false,
    loaded: {},
    error: null
  };
  var promises = [];

  try {
    (0, _keys.default)(obj).forEach(function (key) {
      var result = load(obj[key]);

      if (!result.loading) {
        state.loaded[key] = result.loaded;
        state.error = result.error;
      } else {
        state.loading = true;
      }

      promises.push(result.promise);
      result.promise.then(function (res) {
        state.loaded[key] = res;
      }).catch(function (err) {
        state.error = err;
      });
    });
  } catch (err) {
    state.error = err;
  }

  state.promise = _promise.default.all(promises).then(function (res) {
    state.loading = false;
    return res;
  }).catch(function (err) {
    state.loading = false;
    throw err;
  });
  return state;
}

function resolve(obj) {
  return obj && obj.__esModule ? obj.default : obj;
}

function render(loaded, props) {
  return react_1.default.createElement(resolve(loaded), props);
}

function createLoadableComponent(loadFn, options) {
  var _a;

  var opts = (0, _assign.default)({
    loader: null,
    loading: null,
    delay: 200,
    timeout: null,
    render: render,
    webpack: null,
    modules: null
  }, options);
  var res = null;

  function init() {
    if (!res) {
      res = loadFn(opts.loader);
    }

    return res.promise;
  } // Server only


  if (typeof window === 'undefined') {
    ALL_INITIALIZERS.push(init);
  } // Client only


  if (!initialized && typeof window !== 'undefined' && typeof opts.webpack === 'function') {
    var moduleIds = opts.webpack();
    READY_INITIALIZERS.push(function (ids) {
      var _iterator = _createForOfIteratorHelper(moduleIds),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var moduleId = _step.value;

          if (ids.indexOf(moduleId) !== -1) {
            return init();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
  }

  return _a = /*#__PURE__*/function (_react_1$default$Comp) {
    (0, _inherits2.default)(LoadableComponent, _react_1$default$Comp);

    var _super = _createSuper(LoadableComponent);

    function LoadableComponent(props) {
      var _this;

      (0, _classCallCheck2.default)(this, LoadableComponent);
      _this = _super.call(this, props);

      _this.retry = function () {
        _this.setState({
          error: null,
          loading: true,
          timedOut: false
        });

        res = loadFn(opts.loader);

        _this._loadModule();
      };

      init();
      _this.state = {
        error: res.error,
        pastDelay: false,
        timedOut: false,
        loading: res.loading,
        loaded: res.loaded
      };
      return _this;
    }

    (0, _createClass2.default)(LoadableComponent, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        this._mounted = true;

        this._loadModule();
      }
    }, {
      key: "_loadModule",
      value: function _loadModule() {
        var _this2 = this;

        if (this.context && (0, _isArray.default)(opts.modules)) {
          opts.modules.forEach(function (moduleName) {
            _this2.context(moduleName);
          });
        }

        if (!res.loading) {
          return;
        }

        if (typeof opts.delay === 'number') {
          if (opts.delay === 0) {
            this.setState({
              pastDelay: true
            });
          } else {
            this._delay = setTimeout(function () {
              _this2.setState({
                pastDelay: true
              });
            }, opts.delay);
          }
        }

        if (typeof opts.timeout === 'number') {
          this._timeout = setTimeout(function () {
            _this2.setState({
              timedOut: true
            });
          }, opts.timeout);
        }

        var update = function update() {
          if (!_this2._mounted) {
            return;
          }

          _this2.setState({
            error: res.error,
            loaded: res.loaded,
            loading: res.loading
          });

          _this2._clearTimeouts();
        };

        res.promise.then(function () {
          update();
        }) // eslint-disable-next-line handle-callback-err
        .catch(function (err) {
          update();
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this._mounted = false;

        this._clearTimeouts();
      }
    }, {
      key: "_clearTimeouts",
      value: function _clearTimeouts() {
        clearTimeout(this._delay);
        clearTimeout(this._timeout);
      }
    }, {
      key: "render",
      value: function render() {
        if (this.state.loading || this.state.error) {
          return react_1.default.createElement(opts.loading, {
            isLoading: this.state.loading,
            pastDelay: this.state.pastDelay,
            timedOut: this.state.timedOut,
            error: this.state.error,
            retry: this.retry
          });
        } else if (this.state.loaded) {
          return opts.render(this.state.loaded, this.props);
        } else {
          return null;
        }
      }
    }], [{
      key: "preload",
      value: function preload() {
        return init();
      }
    }]);
    return LoadableComponent;
  }(react_1.default.Component), _a.contextType = loadable_context_1.LoadableContext, _a;
}

function Loadable(opts) {
  return createLoadableComponent(load, opts);
}

function LoadableMap(opts) {
  if (typeof opts.render !== 'function') {
    throw new Error('LoadableMap requires a `render(loaded, props)` function');
  }

  return createLoadableComponent(loadMap, opts);
}

Loadable.Map = LoadableMap;

function flushInitializers(initializers, ids) {
  var promises = [];

  while (initializers.length) {
    var init = initializers.pop();
    promises.push(init(ids));
  }

  return _promise.default.all(promises).then(function () {
    if (initializers.length) {
      return flushInitializers(initializers, ids);
    }
  });
}

Loadable.preloadAll = function () {
  return new _promise.default(function (resolve, reject) {
    flushInitializers(ALL_INITIALIZERS).then(resolve, reject);
  });
};

Loadable.preloadReady = function (ids) {
  return new _promise.default(function (resolve) {
    var res = function res() {
      initialized = true;
      return resolve();
    }; // We always will resolve, errors should be handled within loading UIs.


    flushInitializers(READY_INITIALIZERS, ids).then(res, res);
  });
};

exports.default = Loadable;

/***/ }),

/***/ "0gFS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PHASE_EXPORT = 'phase-export';
exports.PHASE_PRODUCTION_BUILD = 'phase-production-build';
exports.PHASE_PRODUCTION_SERVER = 'phase-production-server';
exports.PHASE_DEVELOPMENT_SERVER = 'phase-development-server';
exports.PAGES_MANIFEST = 'pages-manifest.json';
exports.BUILD_MANIFEST = 'build-manifest.json';
exports.REACT_LOADABLE_MANIFEST = 'react-loadable-manifest.json';
exports.CHUNK_GRAPH_MANIFEST = 'compilation-modules.json';
exports.SERVER_DIRECTORY = 'server';
exports.CONFIG_FILE = 'next.config.js';
exports.BUILD_ID_FILE = 'BUILD_ID';
exports.BLOCKED_PAGES = ['/_document', '/_app'];
exports.CLIENT_STATIC_FILES_PATH = 'static';
exports.CLIENT_STATIC_FILES_RUNTIME = 'runtime';
exports.CLIENT_STATIC_FILES_RUNTIME_PATH = "".concat(exports.CLIENT_STATIC_FILES_PATH, "/").concat(exports.CLIENT_STATIC_FILES_RUNTIME); // static/runtime/main.js

exports.CLIENT_STATIC_FILES_RUNTIME_MAIN = "".concat(exports.CLIENT_STATIC_FILES_RUNTIME_PATH, "/main.js"); // static/runtime/amp.js

exports.CLIENT_STATIC_FILES_RUNTIME_AMP = "".concat(exports.CLIENT_STATIC_FILES_RUNTIME_PATH, "/amp.js"); // static/runtime/webpack.js

exports.CLIENT_STATIC_FILES_RUNTIME_WEBPACK = "".concat(exports.CLIENT_STATIC_FILES_RUNTIME_PATH, "/webpack.js"); // matches static/<buildid>/pages/<page>.js

exports.IS_BUNDLED_PAGE_REGEX = /^static[/\\][^/\\]+[/\\]pages.*\.js$/; // matches static/<buildid>/pages/:page*.js

exports.ROUTE_NAME_REGEX = /^static[/\\][^/\\]+[/\\]pages[/\\](.*)\.js$/;
exports.HEAD_BUILD_ID_FILE = "".concat(exports.CLIENT_STATIC_FILES_PATH, "/HEAD_BUILD_ID");

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "0tVQ":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("FlQf");
__webpack_require__("VJsP");
module.exports = __webpack_require__("WEpk").Array.from;


/***/ }),

/***/ "1+rp":
/***/ (function(module, exports) {



/***/ }),

/***/ "16Al":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__("WbBG");

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "17x9":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__("16Al")();
}


/***/ }),

/***/ "1KsK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ "1seS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__("1KsK");

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__("sYn3");

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ "1u+m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var numberIsNaN = function (value) {
	return value !== value;
};

module.exports = function is(a, b) {
	if (a === 0 && b === 0) {
		return 1 / a === 1 / b;
	}
	if (a === b) {
		return true;
	}
	if (numberIsNaN(a) && numberIsNaN(b)) {
		return true;
	}
	return false;
};



/***/ }),

/***/ "29s/":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("WEpk");
var global = __webpack_require__("5T2Y");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("uOPS") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "2GTP":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("eaoh");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "2Nb0":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("FlQf");
__webpack_require__("bBy9");
module.exports = __webpack_require__("zLkG").f('iterator');


/***/ }),

/***/ "2faE":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("5K7Z");
var IE8_DOM_DEFINE = __webpack_require__("eUtF");
var toPrimitive = __webpack_require__("G8Mo");
var dP = Object.defineProperty;

exports.f = __webpack_require__("jmDH") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "3GJH":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("lCc8");
var $Object = __webpack_require__("WEpk").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "3hBj":
/***/ (function(module, exports) {



/***/ }),

/***/ "3niX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__("q1tI");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__("SevZ"));

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

/***/ "4Vye":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__("q1tI"));

exports.RequestContext = React.createContext(null);

/***/ }),

/***/ "4hZ1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _construct = _interopRequireDefault(__webpack_require__("pbKT"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("0iUn"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("AT/M"));

var _createClass2 = _interopRequireDefault(__webpack_require__("sLSF"));

var _inherits2 = _interopRequireDefault(__webpack_require__("Tit0"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("MI3g"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("a7VT"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("dfwq"));

var _set = _interopRequireDefault(__webpack_require__("ttDY"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = (0, _construct.default)(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_construct.default) return false; if (_construct.default.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call((0, _construct.default)(Date, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __webpack_require__("q1tI");

var isServer = typeof window === 'undefined';

function withSideEffect() {
  var mountedInstances = new _set.default();
  var state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState((0, _toConsumableArray2.default)(mountedInstances), component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  var SideEffect = /*#__PURE__*/function (_react_1$Component) {
    (0, _inherits2.default)(SideEffect, _react_1$Component);

    var _super = _createSuper(SideEffect);

    (0, _createClass2.default)(SideEffect, null, [{
      key: "rewind",
      // Used when server rendering
      value: function rewind() {
        var recordedState = state;
        state = undefined;
        mountedInstances.clear();
        return recordedState;
      }
    }]);

    function SideEffect(props) {
      var _this;

      (0, _classCallCheck2.default)(this, SideEffect);
      _this = _super.call(this, props);

      if (isServer) {
        mountedInstances.add((0, _assertThisInitialized2.default)(_this));
        emitChange((0, _assertThisInitialized2.default)(_this));
      }

      return _this;
    }

    (0, _createClass2.default)(SideEffect, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        mountedInstances.add(this);
        emitChange(this);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        emitChange(this);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        mountedInstances.delete(this);
        emitChange(this);
      }
    }, {
      key: "render",
      value: function render() {
        return null;
      }
    }]);
    return SideEffect;
  }(react_1.Component);

  return SideEffect;
}

exports.default = withSideEffect;

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("7TPF");

/***/ }),

/***/ "5K7Z":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("93I4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "5T2Y":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "5vMV":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("B+OT");
var toIObject = __webpack_require__("NsO/");
var arrayIndexOf = __webpack_require__("W070")(false);
var IE_PROTO = __webpack_require__("VVlx")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "6/1s":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("YqAc")('meta');
var isObject = __webpack_require__("93I4");
var has = __webpack_require__("B+OT");
var setDesc = __webpack_require__("2faE").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("KUxP")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "67Bq":
/***/ (function(module) {

module.exports = {};

/***/ }),

/***/ "6CmU":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("LzdP");
module.exports = __webpack_require__("WEpk").Date.now;


/***/ }),

/***/ "6tYh":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("93I4");
var anObject = __webpack_require__("5K7Z");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("2GTP")(Function.call, __webpack_require__("vwuL").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "7TPF":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("AUvm");
module.exports = __webpack_require__("WEpk").Object.getOwnPropertySymbols;


/***/ }),

/***/ "82c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__("1seS");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ "8cXa":
/***/ (function(module, exports, __webpack_require__) {

if (true) {
  module.exports = __webpack_require__("ZR7Y")
} else {}


/***/ }),

/***/ "8gHz":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("5K7Z");
var aFunction = __webpack_require__("eaoh");
var SPECIES = __webpack_require__("UWiX")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "8iia":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__("QMMT");
var from = __webpack_require__("RRc/");
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),

/***/ "93I4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "9BDd":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("GvbO");
module.exports = __webpack_require__("WEpk").Array.isArray;


/***/ }),

/***/ "9EOK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__("q1tI"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("oh+g");

/***/ }),

/***/ "9kyW":
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

/***/ "A5Xg":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("NsO/");
var gOPN = __webpack_require__("ar/p").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "AUvm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("5T2Y");
var has = __webpack_require__("B+OT");
var DESCRIPTORS = __webpack_require__("jmDH");
var $export = __webpack_require__("Y7ZC");
var redefine = __webpack_require__("kTiW");
var META = __webpack_require__("6/1s").KEY;
var $fails = __webpack_require__("KUxP");
var shared = __webpack_require__("29s/");
var setToStringTag = __webpack_require__("RfKB");
var uid = __webpack_require__("YqAc");
var wks = __webpack_require__("UWiX");
var wksExt = __webpack_require__("zLkG");
var wksDefine = __webpack_require__("Zxgi");
var enumKeys = __webpack_require__("R+7+");
var isArray = __webpack_require__("kAMH");
var anObject = __webpack_require__("5K7Z");
var isObject = __webpack_require__("93I4");
var toObject = __webpack_require__("JB68");
var toIObject = __webpack_require__("NsO/");
var toPrimitive = __webpack_require__("G8Mo");
var createDesc = __webpack_require__("rr1i");
var _create = __webpack_require__("oVml");
var gOPNExt = __webpack_require__("A5Xg");
var $GOPD = __webpack_require__("vwuL");
var $GOPS = __webpack_require__("mqlF");
var $DP = __webpack_require__("2faE");
var $keys = __webpack_require__("w6GO");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("ar/p").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("NV0k").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("uOPS")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("NegM")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "AXZJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
Object.defineProperty(exports, "__esModule", { value: true });
const ESCAPE_LOOKUP = {
    '&': '\\u0026',
    '>': '\\u003e',
    '<': '\\u003c',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029',
};
const ESCAPE_REGEX = /[&><\u2028\u2029]/g;
function htmlEscapeJsonString(str) {
    return str.replace(ESCAPE_REGEX, (match) => ESCAPE_LOOKUP[match]);
}
exports.htmlEscapeJsonString = htmlEscapeJsonString;


/***/ }),

/***/ "ApPD":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__("JB68");
var $getPrototypeOf = __webpack_require__("U+KD");

__webpack_require__("zn7N")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "B+OT":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _assign = _interopRequireDefault(__webpack_require__("UXZV"));

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

var react_1 = __importStar(__webpack_require__("q1tI"));

var prop_types_1 = __importDefault(__webpack_require__("17x9"));

var utils_1 = __webpack_require__("Bu4q");

var router_1 = __webpack_require__("nOHt");

var App =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(App, _react_1$Component);

  function App() {
    (0, _classCallCheck2.default)(this, App);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(App).apply(this, arguments));
  }

  (0, _createClass2.default)(App, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        router: router_1.makePublicRouterInstance(this.props.router)
      };
    } // Kept here for backwards compatibility.
    // When someone ended App they could call `super.componentDidCatch`. This is now deprecated.

  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(err) {
      throw err;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          router = _this$props.router,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var url = createUrl(router);
      return react_1.default.createElement(Container, null, react_1.default.createElement(Component, (0, _assign.default)({}, pageProps, {
        url: url
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function (_ref) {
      var Component = _ref.Component,
          router = _ref.router,
          ctx = _ref.ctx;

      try {
        return _promise.default.resolve(utils_1.loadGetInitialProps(Component, ctx)).then(function (pageProps) {
          return {
            pageProps: pageProps
          };
        });
      } catch (e) {
        return _promise.default.reject(e);
      }
    }
  }]);
  return App;
}(react_1.Component);

App.childContextTypes = {
  router: prop_types_1.default.object
};
exports.default = App;

var Container =
/*#__PURE__*/
function (_react_1$Component2) {
  (0, _inherits2.default)(Container, _react_1$Component2);

  function Container() {
    (0, _classCallCheck2.default)(this, Container);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Container).apply(this, arguments));
  }

  (0, _createClass2.default)(Container, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToHash();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToHash();
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash() {
      var hash = window.location.hash;
      hash = hash ? hash.substring(1) : false;
      if (!hash) return;
      var el = document.getElementById(hash);
      if (!el) return; // If we call scrollIntoView() in here without a setTimeout
      // it won't scroll properly.

      setTimeout(function () {
        return el.scrollIntoView();
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return Container;
}(react_1.Component);

exports.Container = Container;
var warnUrl = utils_1.execOnce(function () {
  if (false) {}
});

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var pathname = router.pathname,
      asPath = router.asPath,
      query = router.query;
  return {
    get query() {
      warnUrl();
      return query;
    },

    get pathname() {
      warnUrl();
      return pathname;
    },

    get asPath() {
      warnUrl();
      return asPath;
    },

    back: function back() {
      warnUrl();
      router.back();
    },
    push: function push(url, as) {
      warnUrl();
      return router.push(url, as);
    },
    pushTo: function pushTo(href, as) {
      warnUrl();
      var pushRoute = as ? href : null;
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: function replace(url, as) {
      warnUrl();
      return router.replace(url, as);
    },
    replaceTo: function replaceTo(href, as) {
      warnUrl();
      var replaceRoute = as ? href : null;
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

exports.createUrl = createUrl;

/***/ }),

/***/ "B9jh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__("Wu5q");
var validate = __webpack_require__("n3ko");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__("raTm")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "BMJj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * fresh
 * Copyright(c) 2012 TJ Holowaychuk
 * Copyright(c) 2016-2017 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * RegExp to check for no-cache token in Cache-Control.
 * @private
 */

var CACHE_CONTROL_NO_CACHE_REGEXP = /(?:^|,)\s*?no-cache\s*?(?:,|$)/

/**
 * Module exports.
 * @public
 */

module.exports = fresh

/**
 * Check freshness of the response using request and response headers.
 *
 * @param {Object} reqHeaders
 * @param {Object} resHeaders
 * @return {Boolean}
 * @public
 */

function fresh (reqHeaders, resHeaders) {
  // fields
  var modifiedSince = reqHeaders['if-modified-since']
  var noneMatch = reqHeaders['if-none-match']

  // unconditional request
  if (!modifiedSince && !noneMatch) {
    return false
  }

  // Always return stale when Cache-Control: no-cache
  // to support end-to-end reload requests
  // https://tools.ietf.org/html/rfc2616#section-14.9.4
  var cacheControl = reqHeaders['cache-control']
  if (cacheControl && CACHE_CONTROL_NO_CACHE_REGEXP.test(cacheControl)) {
    return false
  }

  // if-none-match
  if (noneMatch && noneMatch !== '*') {
    var etag = resHeaders['etag']

    if (!etag) {
      return false
    }

    var etagStale = true
    var matches = parseTokenList(noneMatch)
    for (var i = 0; i < matches.length; i++) {
      var match = matches[i]
      if (match === etag || match === 'W/' + etag || 'W/' + match === etag) {
        etagStale = false
        break
      }
    }

    if (etagStale) {
      return false
    }
  }

  // if-modified-since
  if (modifiedSince) {
    var lastModified = resHeaders['last-modified']
    var modifiedStale = !lastModified || !(parseHttpDate(lastModified) <= parseHttpDate(modifiedSince))

    if (modifiedStale) {
      return false
    }
  }

  return true
}

/**
 * Parse an HTTP Date into a number.
 *
 * @param {string} date
 * @private
 */

function parseHttpDate (date) {
  var timestamp = date && Date.parse(date)

  // istanbul ignore next: guard against date.js Date.parse patching
  return typeof timestamp === 'number'
    ? timestamp
    : NaN
}

/**
 * Parse a HTTP token list.
 *
 * @param {string} str
 * @private
 */

function parseTokenList (str) {
  var end = 0
  var list = []
  var start = 0

  // gather tokens
  for (var i = 0, len = str.length; i < len; i++) {
    switch (str.charCodeAt(i)) {
      case 0x20: /*   */
        if (start === end) {
          start = end = i + 1
        }
        break
      case 0x2c: /* , */
        list.push(str.substring(start, end))
        start = end = i + 1
        break
      default:
        end = i + 1
        break
    }
  }

  // final token
  list.push(str.substring(start, end))

  return list
}


/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("+plK");

/***/ }),

/***/ "Bu4q":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _keys = _interopRequireDefault(__webpack_require__("pLtp"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("O40h"));

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

function execOnce(fn) {
  var _this = this;

  var used = false;
  return function () {
    if (!used) {
      used = true;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      fn.apply(_this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(_x, _x2) {
  return _loadGetInitialProps.apply(this, arguments);
}

function _loadGetInitialProps() {
  _loadGetInitialProps = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(Component, ctx) {
    var message, props, _message;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (true) {
              _context.next = 4;
              break;
            }

            if (!(Component.prototype && Component.prototype.getInitialProps)) {
              _context.next = 4;
              break;
            }

            message = "\"".concat(getDisplayName(Component), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
            throw new Error(message);

          case 4:
            if (Component.getInitialProps) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", {});

          case 6:
            _context.next = 8;
            return Component.getInitialProps(ctx);

          case 8:
            props = _context.sent;

            if (!(ctx.res && isResSent(ctx.res))) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", props);

          case 11:
            if (props) {
              _context.next = 14;
              break;
            }

            _message = "\"".concat(getDisplayName(Component), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
            throw new Error(_message);

          case 14:
            return _context.abrupt("return", props);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadGetInitialProps.apply(this, arguments);
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;

/***/ }),

/***/ "C2SN":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("93I4");
var isArray = __webpack_require__("kAMH");
var SPECIES = __webpack_require__("UWiX")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "Cg2A":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("6CmU");

/***/ }),

/***/ "D3zA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("aI7X");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "D8kY":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("Ojgd");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "DHOm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
async function optimize(html, { amphtml, query }) {
    let ampOptimizer;
    try {
        ampOptimizer = __webpack_require__("bWkV");
    }
    catch (_) {
        return html;
    }
    const validAmp = Boolean(amphtml && query && query.amp);
    //  Examples below
    //
    //  pages/foo.js
    //  pages/foo.amp.js
    //  pages/bar.amp.js
    //
    //  /foo => traditional
    //  /foo?amp=1 => clean AMP
    //  /bar => dirty amp
    //  /bar?amp=1 => clean AMP
    ampOptimizer.setConfig({ validAmp });
    html = await ampOptimizer.transformHtml(html);
    return html;
}
exports.default = optimize;


/***/ }),

/***/ "DTay":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("nWF0")


/***/ }),

/***/ "EXMj":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "FDah":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-dom-server.node.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var k=__webpack_require__("MgzW"),m=__webpack_require__("q1tI"),aa=__webpack_require__("msIP");function r(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var u="function"===typeof Symbol&&Symbol.for,ba=u?Symbol.for("react.portal"):60106,v=u?Symbol.for("react.fragment"):60107,ca=u?Symbol.for("react.strict_mode"):60108,da=u?Symbol.for("react.profiler"):60114,w=u?Symbol.for("react.provider"):60109,ea=u?Symbol.for("react.context"):60110,fa=u?Symbol.for("react.concurrent_mode"):60111,ha=u?Symbol.for("react.forward_ref"):60112,B=u?Symbol.for("react.suspense"):60113,ia=u?Symbol.for("react.suspense_list"):60120,ja=u?Symbol.for("react.memo"):60115,ka=u?Symbol.for("react.lazy"):
60116,la=u?Symbol.for("react.block"):60121,ma=u?Symbol.for("react.fundamental"):60117,na=u?Symbol.for("react.scope"):60119;function oa(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(c){0===a._status&&(c=c.default,a._status=1,a._result=c)},function(c){0===a._status&&(a._status=2,a._result=c)})}}
function C(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case v:return"Fragment";case ba:return"Portal";case da:return"Profiler";case ca:return"StrictMode";case B:return"Suspense";case ia:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case ea:return"Context.Consumer";case w:return"Context.Provider";case ha:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");
case ja:return C(a.type);case la:return C(a.render);case ka:if(a=1===a._status?a._result:null)return C(a)}return null}var D=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;D.hasOwnProperty("ReactCurrentDispatcher")||(D.ReactCurrentDispatcher={current:null});D.hasOwnProperty("ReactCurrentBatchConfig")||(D.ReactCurrentBatchConfig={suspense:null});var pa={};function E(a,b){for(var c=a._threadCount|0;c<=b;c++)a[c]=a._currentValue2,a._threadCount=c+1}
function qa(a,b,c,d){if(d&&(d=a.contextType,"object"===typeof d&&null!==d))return E(d,c),d[c];if(a=a.contextTypes){c={};for(var f in a)c[f]=b[f];b=c}else b=pa;return b}for(var F=new Uint16Array(16),H=0;15>H;H++)F[H]=H+1;F[15]=0;
var ra=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sa=Object.prototype.hasOwnProperty,ta={},ua={};
function va(a){if(sa.call(ua,a))return!0;if(sa.call(ta,a))return!1;if(ra.test(a))return ua[a]=!0;ta[a]=!0;return!1}function wa(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function xa(a,b,c,d){if(null===b||"undefined"===typeof b||wa(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function J(a,b,c,d,f,h){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=f;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=h}var K={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){K[a]=new J(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];K[b]=new J(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){K[a]=new J(a,2,!1,a.toLowerCase(),null,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){K[a]=new J(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){K[a]=new J(a,3,!1,a.toLowerCase(),null,!1)});
["checked","multiple","muted","selected"].forEach(function(a){K[a]=new J(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){K[a]=new J(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){K[a]=new J(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){K[a]=new J(a,5,!1,a.toLowerCase(),null,!1)});var L=/[\-:]([a-z])/g;function M(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(L,
M);K[b]=new J(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(L,M);K[b]=new J(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(L,M);K[b]=new J(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){K[a]=new J(a,1,!1,a.toLowerCase(),null,!1)});
K.xlinkHref=new J("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){K[a]=new J(a,1,!1,a.toLowerCase(),null,!0)});var ya=/["'&<>]/;
function N(a){if("boolean"===typeof a||"number"===typeof a)return""+a;a=""+a;var b=ya.exec(a);if(b){var c="",d,f=0;for(d=b.index;d<a.length;d++){switch(a.charCodeAt(d)){case 34:b="&quot;";break;case 38:b="&amp;";break;case 39:b="&#x27;";break;case 60:b="&lt;";break;case 62:b="&gt;";break;default:continue}f!==d&&(c+=a.substring(f,d));f=d+1;c+=b}a=f!==d?c+a.substring(f,d):c}return a}
function za(a,b){var c=K.hasOwnProperty(a)?K[a]:null;var d;if(d="style"!==a)d=null!==c?0===c.type:!(2<a.length)||"o"!==a[0]&&"O"!==a[0]||"n"!==a[1]&&"N"!==a[1]?!1:!0;if(d||xa(a,b,c,!1))return"";if(null!==c){a=c.attributeName;d=c.type;if(3===d||4===d&&!0===b)return a+'=""';c.sanitizeURL&&(b=""+b);return a+'="'+(N(b)+'"')}return va(a)?a+'="'+(N(b)+'"'):""}function Aa(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}
var Ba="function"===typeof Object.is?Object.is:Aa,O=null,P=null,Q=null,R=!1,S=!1,U=null,V=0;function W(){if(null===O)throw Error(r(321));return O}function Ca(){if(0<V)throw Error(r(312));return{memoizedState:null,queue:null,next:null}}function Da(){null===Q?null===P?(R=!1,P=Q=Ca()):(R=!0,Q=P):null===Q.next?(R=!1,Q=Q.next=Ca()):(R=!0,Q=Q.next);return Q}function Ea(a,b,c,d){for(;S;)S=!1,V+=1,Q=null,c=a(b,d);P=O=null;V=0;Q=U=null;return c}function Fa(a,b){return"function"===typeof b?b(a):b}
function Ga(a,b,c){O=W();Q=Da();if(R){var d=Q.queue;b=d.dispatch;if(null!==U&&(c=U.get(d),void 0!==c)){U.delete(d);d=Q.memoizedState;do d=a(d,c.action),c=c.next;while(null!==c);Q.memoizedState=d;return[d,b]}return[Q.memoizedState,b]}a=a===Fa?"function"===typeof b?b():b:void 0!==c?c(b):b;Q.memoizedState=a;a=Q.queue={last:null,dispatch:null};a=a.dispatch=Ha.bind(null,O,a);return[Q.memoizedState,a]}
function Ha(a,b,c){if(!(25>V))throw Error(r(301));if(a===O)if(S=!0,a={action:c,next:null},null===U&&(U=new Map),c=U.get(b),void 0===c)U.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}}function Ia(){}
var X=0,Ja={readContext:function(a){var b=X;E(a,b);return a[b]},useContext:function(a){W();var b=X;E(a,b);return a[b]},useMemo:function(a,b){O=W();Q=Da();b=void 0===b?null:b;if(null!==Q){var c=Q.memoizedState;if(null!==c&&null!==b){a:{var d=c[1];if(null===d)d=!1;else{for(var f=0;f<d.length&&f<b.length;f++)if(!Ba(b[f],d[f])){d=!1;break a}d=!0}}if(d)return c[0]}}a=a();Q.memoizedState=[a,b];return a},useReducer:Ga,useRef:function(a){O=W();Q=Da();var b=Q.memoizedState;return null===b?(a={current:a},Q.memoizedState=
a):b},useState:function(a){return Ga(Fa,a)},useLayoutEffect:function(){},useCallback:function(a){return a},useImperativeHandle:Ia,useEffect:Ia,useDebugValue:Ia,useResponder:function(a,b){return{props:b,responder:a}},useDeferredValue:function(a){W();return a},useTransition:function(){W();return[function(a){a()},!1]}},Ka={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function La(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
var Ma={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},Na=k({menuitem:!0},Ma),Y={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,
gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oa=["Webkit","ms","Moz","O"];Object.keys(Y).forEach(function(a){Oa.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Y[b]=Y[a]})});
var Pa=/([A-Z])/g,Qa=/^ms-/,Z=m.Children.toArray,Ra=D.ReactCurrentDispatcher,Sa={listing:!0,pre:!0,textarea:!0},Ta=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Ua={},Va={};function Wa(a){if(void 0===a||null===a)return a;var b="";m.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}var Xa=Object.prototype.hasOwnProperty,Ya={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function Za(a,b){if(void 0===a)throw Error(r(152,C(b)||"Component"));}
function $a(a,b,c){function d(d,h){var e=h.prototype&&h.prototype.isReactComponent,f=qa(h,b,c,e),p=[],g=!1,l={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===p)return null},enqueueReplaceState:function(a,c){g=!0;p=[c]},enqueueSetState:function(a,c){if(null===p)return null;p.push(c)}};if(e){if(e=new h(d.props,f,l),"function"===typeof h.getDerivedStateFromProps){var x=h.getDerivedStateFromProps.call(null,d.props,e.state);null!=x&&(e.state=k({},e.state,x))}}else if(O={},e=h(d.props,
f,l),e=Ea(h,d.props,e,f),null==e||null==e.render){a=e;Za(a,h);return}e.props=d.props;e.context=f;e.updater=l;l=e.state;void 0===l&&(e.state=l=null);if("function"===typeof e.UNSAFE_componentWillMount||"function"===typeof e.componentWillMount)if("function"===typeof e.componentWillMount&&"function"!==typeof h.getDerivedStateFromProps&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&"function"!==typeof h.getDerivedStateFromProps&&e.UNSAFE_componentWillMount(),p.length){l=p;var t=
g;p=null;g=!1;if(t&&1===l.length)e.state=l[0];else{x=t?l[0]:e.state;var y=!0;for(t=t?1:0;t<l.length;t++){var q=l[t];q="function"===typeof q?q.call(e,x,d.props,f):q;null!=q&&(y?(y=!1,x=k({},x,q)):k(x,q))}e.state=x}}else p=null;a=e.render();Za(a,h);if("function"===typeof e.getChildContext&&(d=h.childContextTypes,"object"===typeof d)){var A=e.getChildContext();for(var T in A)if(!(T in d))throw Error(r(108,C(h)||"Unknown",T));}A&&(b=k({},b,A))}for(;m.isValidElement(a);){var f=a,h=f.type;if("function"!==
typeof h)break;d(f,h)}return{child:a,context:b}}
var ab=function(){function a(a,b){m.isValidElement(a)?a.type!==v?a=[a]:(a=a.props.children,a=m.isValidElement(a)?[a]:Z(a)):a=Z(a);a={type:null,domNamespace:Ka.html,children:a,childIndex:0,context:pa,footer:""};var c=F[0];if(0===c){var d=F;c=d.length;var p=2*c;if(!(65536>=p))throw Error(r(304));var g=new Uint16Array(p);g.set(d);F=g;F[0]=c+1;for(d=c;d<p-1;d++)F[d]=d+1;F[p-1]=0}else F[0]=F[c];this.threadID=c;this.stack=[a];this.exhausted=!1;this.currentSelectValue=null;this.previousWasTextNode=!1;this.makeStaticMarkup=
b;this.suspenseDepth=0;this.contextIndex=-1;this.contextStack=[];this.contextValueStack=[]}var b=a.prototype;b.destroy=function(){if(!this.exhausted){this.exhausted=!0;this.clearProviders();var a=this.threadID;F[a]=F[0];F[0]=a}};b.pushProvider=function(a){var b=++this.contextIndex,c=a.type._context,h=this.threadID;E(c,h);var p=c[h];this.contextStack[b]=c;this.contextValueStack[b]=p;c[h]=a.props.value};b.popProvider=function(){var a=this.contextIndex,b=this.contextStack[a],f=this.contextValueStack[a];
this.contextStack[a]=null;this.contextValueStack[a]=null;this.contextIndex--;b[this.threadID]=f};b.clearProviders=function(){for(var a=this.contextIndex;0<=a;a--)this.contextStack[a][this.threadID]=this.contextValueStack[a]};b.read=function(a){if(this.exhausted)return null;var b=X;X=this.threadID;var c=Ra.current;Ra.current=Ja;try{for(var h=[""],p=!1;h[0].length<a;){if(0===this.stack.length){this.exhausted=!0;var g=this.threadID;F[g]=F[0];F[0]=g;break}var e=this.stack[this.stack.length-1];if(p||e.childIndex>=
e.children.length){var I=e.footer;""!==I&&(this.previousWasTextNode=!1);this.stack.pop();if("select"===e.type)this.currentSelectValue=null;else if(null!=e.type&&null!=e.type.type&&e.type.type.$$typeof===w)this.popProvider(e.type);else if(e.type===B){this.suspenseDepth--;var G=h.pop();if(p){p=!1;var n=e.fallbackFrame;if(!n)throw Error(r(303));this.stack.push(n);h[this.suspenseDepth]+="\x3c!--$!--\x3e";continue}else h[this.suspenseDepth]+=G}h[this.suspenseDepth]+=I}else{var l=e.children[e.childIndex++],
x="";try{x+=this.render(l,e.context,e.domNamespace)}catch(t){if(null!=t&&"function"===typeof t.then)throw Error(r(294));throw t;}finally{}h.length<=this.suspenseDepth&&h.push("");h[this.suspenseDepth]+=x}}return h[0]}finally{Ra.current=c,X=b}};b.render=function(a,b,f){if("string"===typeof a||"number"===typeof a){f=""+a;if(""===f)return"";if(this.makeStaticMarkup)return N(f);if(this.previousWasTextNode)return"\x3c!-- --\x3e"+N(f);this.previousWasTextNode=!0;return N(f)}b=$a(a,b,this.threadID);a=b.child;
b=b.context;if(null===a||!1===a)return"";if(!m.isValidElement(a)){if(null!=a&&null!=a.$$typeof){f=a.$$typeof;if(f===ba)throw Error(r(257));throw Error(r(258,f.toString()));}a=Z(a);this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""});return""}var c=a.type;if("string"===typeof c)return this.renderDOM(a,b,f);switch(c){case ca:case fa:case da:case ia:case v:return a=Z(a.props.children),this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""}),
"";case B:throw Error(r(294));}if("object"===typeof c&&null!==c)switch(c.$$typeof){case ha:O={};var d=c.render(a.props,a.ref);d=Ea(c.render,a.props,d,a.ref);d=Z(d);this.stack.push({type:null,domNamespace:f,children:d,childIndex:0,context:b,footer:""});return"";case ja:return a=[m.createElement(c.type,k({ref:a.ref},a.props))],this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""}),"";case w:return c=Z(a.props.children),f={type:a,domNamespace:f,children:c,childIndex:0,
context:b,footer:""},this.pushProvider(a),this.stack.push(f),"";case ea:c=a.type;d=a.props;var g=this.threadID;E(c,g);c=Z(d.children(c[g]));this.stack.push({type:a,domNamespace:f,children:c,childIndex:0,context:b,footer:""});return"";case ma:throw Error(r(338));case ka:switch(c=a.type,oa(c),c._status){case 1:return a=[m.createElement(c._result,k({ref:a.ref},a.props))],this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""}),"";case 2:throw c._result;default:throw Error(r(295));
}case na:throw Error(r(343));}throw Error(r(130,null==c?c:typeof c,""));};b.renderDOM=function(a,b,f){var c=a.type.toLowerCase();f===Ka.html&&La(c);if(!Ua.hasOwnProperty(c)){if(!Ta.test(c))throw Error(r(65,c));Ua[c]=!0}var d=a.props;if("input"===c)d=k({type:void 0},d,{defaultChecked:void 0,defaultValue:void 0,value:null!=d.value?d.value:d.defaultValue,checked:null!=d.checked?d.checked:d.defaultChecked});else if("textarea"===c){var g=d.value;if(null==g){g=d.defaultValue;var e=d.children;if(null!=e){if(null!=
g)throw Error(r(92));if(Array.isArray(e)){if(!(1>=e.length))throw Error(r(93));e=e[0]}g=""+e}null==g&&(g="")}d=k({},d,{value:void 0,children:""+g})}else if("select"===c)this.currentSelectValue=null!=d.value?d.value:d.defaultValue,d=k({},d,{value:void 0});else if("option"===c){e=this.currentSelectValue;var I=Wa(d.children);if(null!=e){var G=null!=d.value?d.value+"":I;g=!1;if(Array.isArray(e))for(var n=0;n<e.length;n++){if(""+e[n]===G){g=!0;break}}else g=""+e===G;d=k({selected:void 0,children:void 0},
d,{selected:g,children:I})}}if(g=d){if(Na[c]&&(null!=g.children||null!=g.dangerouslySetInnerHTML))throw Error(r(137,c,""));if(null!=g.dangerouslySetInnerHTML){if(null!=g.children)throw Error(r(60));if(!("object"===typeof g.dangerouslySetInnerHTML&&"__html"in g.dangerouslySetInnerHTML))throw Error(r(61));}if(null!=g.style&&"object"!==typeof g.style)throw Error(r(62,""));}g=d;e=this.makeStaticMarkup;I=1===this.stack.length;G="<"+a.type;for(z in g)if(Xa.call(g,z)){var l=g[z];if(null!=l){if("style"===
z){n=void 0;var x="",t="";for(n in l)if(l.hasOwnProperty(n)){var y=0===n.indexOf("--"),q=l[n];if(null!=q){if(y)var A=n;else if(A=n,Va.hasOwnProperty(A))A=Va[A];else{var T=A.replace(Pa,"-$1").toLowerCase().replace(Qa,"-ms-");A=Va[A]=T}x+=t+A+":";t=n;y=null==q||"boolean"===typeof q||""===q?"":y||"number"!==typeof q||0===q||Y.hasOwnProperty(t)&&Y[t]?(""+q).trim():q+"px";x+=y;t=";"}}l=x||null}n=null;b:if(y=c,q=g,-1===y.indexOf("-"))y="string"===typeof q.is;else switch(y){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":y=
!1;break b;default:y=!0}y?Ya.hasOwnProperty(z)||(n=z,n=va(n)&&null!=l?n+'="'+(N(l)+'"'):""):n=za(z,l);n&&(G+=" "+n)}}e||I&&(G+=' data-reactroot=""');var z=G;g="";Ma.hasOwnProperty(c)?z+="/>":(z+=">",g="</"+a.type+">");a:{e=d.dangerouslySetInnerHTML;if(null!=e){if(null!=e.__html){e=e.__html;break a}}else if(e=d.children,"string"===typeof e||"number"===typeof e){e=N(e);break a}e=null}null!=e?(d=[],Sa.hasOwnProperty(c)&&"\n"===e.charAt(0)&&(z+="\n"),z+=e):d=Z(d.children);a=a.type;f=null==f||"http://www.w3.org/1999/xhtml"===
f?La(a):"http://www.w3.org/2000/svg"===f&&"foreignObject"===a?"http://www.w3.org/1999/xhtml":f;this.stack.push({domNamespace:f,type:c,children:d,childIndex:0,context:b,footer:g});this.previousWasTextNode=!1;return z};return a}();function bb(a,b){a.prototype=Object.create(b.prototype);a.prototype.constructor=a;a.__proto__=b}
var cb=function(a){function b(b,c){var d=a.call(this,{})||this;d.partialRenderer=new ab(b,c);return d}bb(b,a);var c=b.prototype;c._destroy=function(a,b){this.partialRenderer.destroy();b(a)};c._read=function(a){try{this.push(this.partialRenderer.read(a))}catch(f){this.destroy(f)}};return b}(aa.Readable),db={renderToString:function(a){a=new ab(a,!1);try{return a.read(Infinity)}finally{a.destroy()}},renderToStaticMarkup:function(a){a=new ab(a,!0);try{return a.read(Infinity)}finally{a.destroy()}},renderToNodeStream:function(a){return new cb(a,
!1)},renderToStaticNodeStream:function(a){return new cb(a,!0)},version:"16.13.1"};module.exports=db.default||db;


/***/ }),

/***/ "FlQf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("ccE7")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("MPFp")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "FpHa":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "FpZJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "Fw1r":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__("pV7Z");


/***/ }),

/***/ "G8Mo":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("93I4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "GvbO":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__("Y7ZC");

$export($export.S, 'Array', { isArray: __webpack_require__("kAMH") });


/***/ }),

/***/ "Hfiw":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__("Y7ZC");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__("6tYh").set });


/***/ }),

/***/ "Hsns":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("93I4");
var document = __webpack_require__("5T2Y").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "I8F5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const etag_1 = __importDefault(__webpack_require__("Y4gF"));
const fresh_1 = __importDefault(__webpack_require__("BMJj"));
const utils_1 = __webpack_require__("Bu4q");
function sendHTML(req, res, html, { generateEtags, poweredByHeader }) {
    if (utils_1.isResSent(res))
        return;
    const etag = generateEtags ? etag_1.default(html) : undefined;
    if (poweredByHeader) {
        res.setHeader('X-Powered-By', 'Next.js');
    }
    if (fresh_1.default(req.headers, { etag })) {
        res.statusCode = 304;
        res.end();
        return;
    }
    if (etag) {
        res.setHeader('ETag', etag);
    }
    if (!res.getHeader('Content-Type')) {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
    }
    res.setHeader('Content-Length', Buffer.byteLength(html));
    res.end(req.method === 'HEAD' ? null : html);
}
exports.sendHTML = sendHTML;


/***/ }),

/***/ "IClC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__("q1tI"));

exports.HeadManagerContext = React.createContext(null);

/***/ }),

/***/ "IP1Z":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("2faE");
var createDesc = __webpack_require__("rr1i");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "JB68":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("Jes0");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "JMW+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("uOPS");
var global = __webpack_require__("5T2Y");
var ctx = __webpack_require__("2GTP");
var classof = __webpack_require__("QMMT");
var $export = __webpack_require__("Y7ZC");
var isObject = __webpack_require__("93I4");
var aFunction = __webpack_require__("eaoh");
var anInstance = __webpack_require__("EXMj");
var forOf = __webpack_require__("oioR");
var speciesConstructor = __webpack_require__("8gHz");
var task = __webpack_require__("QXhf").set;
var microtask = __webpack_require__("q6LJ")();
var newPromiseCapabilityModule = __webpack_require__("ZW5q");
var perform = __webpack_require__("RDmV");
var userAgent = __webpack_require__("vBP9");
var promiseResolve = __webpack_require__("zXhZ");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("UWiX")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("XJU/")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("RfKB")($Promise, PROMISE);
__webpack_require__("TJWN")(PROMISE);
Wrapper = __webpack_require__("WEpk")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("TuGD")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "JQMT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _regenerator = _interopRequireDefault(__webpack_require__("ln6h"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("O40h"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("doui"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _assign = _interopRequireDefault(__webpack_require__("UXZV"));

var _set = _interopRequireDefault(__webpack_require__("ttDY"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("0iUn"));

var _createClass2 = _interopRequireDefault(__webpack_require__("sLSF"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var mitt_1 = __importDefault(__webpack_require__("kiME"));

var utils_1 = __webpack_require__("Bu4q");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var Router = /*#__PURE__*/function () {
  function Router(pathname, query, as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        Component = _ref.Component,
        err = _ref.err;
    (0, _classCallCheck2.default)(this, Router);

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (false) {}

      _this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.subscriptions = new _set.default();
    this.componentLoadCancel = null;

    if (typeof window !== 'undefined') {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', utils_1.formatWithValidation({
        pathname: pathname,
        query: query
      }), as);
      window.addEventListener('popstate', this.onPopState);
      window.addEventListener('unload', function () {
        // Workaround for popstate firing on initial page load when
        // navigating back from an external site
        if (history.state) {
          var _history$state = history.state,
              _url2 = _history$state.url,
              _as2 = _history$state.as,
              options = _history$state.options;

          _this.changeState('replaceState', _url2, _as2, (0, _assign.default)({}, options, {
            fromExternal: true
          }));
        }
      });
    }
  }

  (0, _createClass2.default)(Router, [{
    key: "update",
    value: function update(route, Component) {
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = (0, _assign.default)({}, data, {
        Component: Component
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload(route) {
      var _this2 = this;

      return new _promise.default(function (resolve, reject) {
        delete _this2.components[route];

        _this2.pageLoader.clearCache(route);

        if (route !== _this2.route) {
          return resolve();
        }

        var pathname = _this2.pathname,
            query = _this2.query;
        var url = window.location.href; // This makes sure we only use pathname + query + hash, to mirror `asPath` coming from the server.

        var as = window.location.pathname + window.location.search + window.location.hash;
        Router.events.emit('routeChangeStart', url);

        _this2.getRouteInfo(route, pathname, query, as).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve();
          }

          _this2.notify(routeInfo);

          if (error) {
            Router.events.emit('routeChangeError', error, url);
            return reject(error);
          }

          Router.events.emit('routeChangeComplete', url);
        });
      });
    }
  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this3 = this;

      return new _promise.default(function (resolve, reject) {
        // If url and as provided as an object representation,
        // we'll format them into the string version here.
        var url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
        var as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (true) {
          // @ts-ignore this is temporarily global (attached to window)
          if (__NEXT_DATA__.nextExport) {
            as = Router._rewriteUrlForNextExport(as);
          }
        }

        _this3.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.


        if (_this3.onlyAHashChange(as)) {
          Router.events.emit('hashChangeStart', as);

          _this3.changeState(method, url, as);

          _this3.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return true;
        }

        var _url_1$parse = url_1.parse(url, true),
            pathname = _url_1$parse.pathname,
            query = _url_1$parse.query; // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this3.urlIsNew(as)) {
          method = 'replaceState';
        } // @ts-ignore pathname is always a string


        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;
        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
        // @ts-ignore pathname is always a string

        _this3.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this3.changeState(method, url, as, options);

          var hash = window.location.hash.substring(1); // @ts-ignore pathname is always defined

          _this3.set(route, pathname, query, as, (0, _assign.default)({}, routeInfo, {
            hash: hash
          }));

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (false) {}

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        // @ts-ignore method should always exist on history
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, null, as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this4 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return _promise.default.resolve(cachedRouteInfo);
      }

      return new _promise.default(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this4.fetchComponent(route).then(function (Component) {
          return resolve({
            Component: Component
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component;

        if (false) { var _require, isValidElementType; }

        return new _promise.default(function (resolve, reject) {
          var ctx = {
            pathname: pathname,
            query: query,
            asPath: as
          };

          _this4.getInitialProps(Component, ctx).then(function (props) {
            routeInfo.props = props;
            _this4.components[route] = routeInfo;
            resolve(routeInfo);
          }, reject);
        });
      }).catch(function (err) {
        return new _promise.default(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR') {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this4.fetchComponent('/_error').then(function (Component) {
            var routeInfo = {
              Component: Component,
              err: err
            };
            var ctx = {
              err: err,
              pathname: pathname,
              query: query
            };
            return new _promise.default(function (resolve) {
              _this4.getInitialProps(Component, ctx).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          }));
        });
      });
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = (0, _slicedToArray2.default)(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = (0, _slicedToArray2.default)(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = (0, _slicedToArray2.default)(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this5 = this;

      return new _promise.default(function (resolve, reject) {
        // Prefetch is not supported in development mode because it would trigger on-demand-entries
        if (false) {}

        var _url_1$parse2 = url_1.parse(url),
            pathname = _url_1$parse2.pathname; // @ts-ignore pathname is always defined


        var route = toRoute(pathname);

        _this5.pageLoader.prefetch(route).then(resolve, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function () {
      var _fetchComponent = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(route) {
        var cancelled, cancel, Component, error;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                cancelled = false;

                cancel = this.componentLoadCancel = function () {
                  cancelled = true;
                };

                _context.next = 4;
                return this.pageLoader.loadPage(route);

              case 4:
                Component = _context.sent;

                if (!cancelled) {
                  _context.next = 9;
                  break;
                }

                error = new Error("Abort fetching component for route: \"".concat(route, "\""));
                error.cancelled = true;
                throw error;

              case 9:
                if (cancel === this.componentLoadCancel) {
                  this.componentLoadCancel = null;
                }

                return _context.abrupt("return", Component);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchComponent(_x) {
        return _fetchComponent.apply(this, arguments);
      }

      return fetchComponent;
    }()
  }, {
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(Component, ctx) {
        var cancelled, cancel, App, props, err;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                cancelled = false;

                cancel = function cancel() {
                  cancelled = true;
                };

                this.componentLoadCancel = cancel;
                App = this.components['/_app'].Component;
                _context2.next = 6;
                return utils_1.loadGetInitialProps(App, {
                  Component: Component,
                  router: this,
                  ctx: ctx
                });

              case 6:
                props = _context2.sent;

                if (cancel === this.componentLoadCancel) {
                  this.componentLoadCancel = null;
                }

                if (!cancelled) {
                  _context2.next = 12;
                  break;
                }

                err = new Error('Loading initial props cancelled');
                err.cancelled = true;
                throw err;

              case 12:
                return _context2.abrupt("return", props);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x2, _x3) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.componentLoadCancel) {
        Router.events.emit('routeChangeError', new Error('Route Cancelled'), as);
        this.componentLoadCancel();
        this.componentLoadCancel = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      var App = this.components['/_app'].Component;
      this.subscriptions.forEach(function (fn) {
        return fn((0, _assign.default)({}, data, {
          App: App
        }));
      });
    }
  }, {
    key: "subscribe",
    value: function subscribe(fn) {
      var _this6 = this;

      this.subscriptions.add(fn);
      return function () {
        return _this6.subscriptions.delete(fn);
      };
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      var _url$split = url.split('#'),
          _url$split2 = (0, _slicedToArray2.default)(_url$split, 2),
          pathname = _url$split2[0],
          hash = _url$split2[1]; // tslint:disable-next-line


      var _pathname$split = pathname.split('?'),
          _pathname$split2 = (0, _slicedToArray2.default)(_pathname$split, 2),
          path = _pathname$split2[0],
          qs = _pathname$split2[1];

      path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

      if (!/\.[^/]+\/?$/.test(path)) path += "/";
      if (qs) path += '?' + qs;
      if (hash) path += '#' + hash;
      return path;
    }
  }]);
  return Router;
}();

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "JbBM":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("Hfiw");
module.exports = __webpack_require__("WEpk").Object.setPrototypeOf;


/***/ }),

/***/ "Jes0":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


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

/***/ "KUxP":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "Keko":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __webpack_require__("dDGi");
const internalPrefixes = [
    /^\/_next\//,
    /^\/static\//,
];
function isInternalUrl(url) {
    for (const prefix of internalPrefixes) {
        if (prefix.test(url)) {
            return true;
        }
    }
    return false;
}
exports.isInternalUrl = isInternalUrl;
function isBlockedPage(pathname) {
    return (constants_1.BLOCKED_PAGES.indexOf(pathname) !== -1);
}
exports.isBlockedPage = isBlockedPage;
function cleanAmpPath(pathname) {
    if (pathname.match(/\?amp=(y|yes|true|1)/)) {
        pathname = pathname.replace(/\?amp=(y|yes|true|1)/, '?');
    }
    if (pathname.match(/&amp=(y|yes|true|1)/)) {
        pathname = pathname.replace(/\?amp=(y|yes|true|1)/, '');
    }
    pathname = pathname.replace(/\?$/, '');
    return pathname;
}
exports.cleanAmpPath = cleanAmpPath;


/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("UDep");

/***/ }),

/***/ "LZ9C":
/***/ (function(module) {

module.exports = {"devFiles":[],"pages":{"/":["static/runtime/webpack-8ed9452df514b4d17d80.js","static/css/commons.f9887609.chunk.css","static/chunks/commons.c962b54a1c5d367cfbe4.js","static/css/styles.4d4fdc24.chunk.css","static/chunks/styles.af2abc7e4e07033debb9.js","static/runtime/main-a70f447d93a9b26e2907.js"],"/_app":["static/runtime/webpack-8ed9452df514b4d17d80.js","static/css/commons.f9887609.chunk.css","static/chunks/commons.c962b54a1c5d367cfbe4.js","static/runtime/main-a70f447d93a9b26e2907.js"],"/_error":["static/runtime/webpack-8ed9452df514b4d17d80.js","static/css/commons.f9887609.chunk.css","static/chunks/commons.c962b54a1c5d367cfbe4.js","static/runtime/main-a70f447d93a9b26e2907.js"],"/index":["static/runtime/webpack-8ed9452df514b4d17d80.js","static/css/commons.f9887609.chunk.css","static/chunks/commons.c962b54a1c5d367cfbe4.js","static/css/styles.4d4fdc24.chunk.css","static/chunks/styles.af2abc7e4e07033debb9.js","static/runtime/main-a70f447d93a9b26e2907.js"],"/projects":["static/runtime/webpack-8ed9452df514b4d17d80.js","static/css/commons.f9887609.chunk.css","static/chunks/commons.c962b54a1c5d367cfbe4.js","static/css/styles.4d4fdc24.chunk.css","static/chunks/styles.af2abc7e4e07033debb9.js","static/runtime/main-a70f447d93a9b26e2907.js"],"/skills":["static/runtime/webpack-8ed9452df514b4d17d80.js","static/css/commons.f9887609.chunk.css","static/chunks/commons.c962b54a1c5d367cfbe4.js","static/css/styles.4d4fdc24.chunk.css","static/chunks/styles.af2abc7e4e07033debb9.js","static/runtime/main-a70f447d93a9b26e2907.js"]}};

/***/ }),

/***/ "LzdP":
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__("Y7ZC");

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),

/***/ "M1xp":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("a0xu");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "MCSJ":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

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
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["default"])(self);
}

/***/ }),

/***/ "MPFp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("uOPS");
var $export = __webpack_require__("Y7ZC");
var redefine = __webpack_require__("kTiW");
var hide = __webpack_require__("NegM");
var Iterators = __webpack_require__("SBuE");
var $iterCreate = __webpack_require__("j2DC");
var setToStringTag = __webpack_require__("RfKB");
var getPrototypeOf = __webpack_require__("U+KD");
var ITERATOR = __webpack_require__("UWiX")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "MgzW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "Mqbl":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("JB68");
var $keys = __webpack_require__("w6GO");

__webpack_require__("zn7N")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "MvwC":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("5T2Y").document;
module.exports = document && document.documentElement;


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

/***/ "NV0k":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "NegM":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("2faE");
var createDesc = __webpack_require__("rr1i");
module.exports = __webpack_require__("jmDH") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "NsO/":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("M1xp");
var defined = __webpack_require__("Jes0");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "NwJ3":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("SBuE");
var ITERATOR = __webpack_require__("UWiX")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "O40h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "Ojgd":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "PBE1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__("Y7ZC");
var core = __webpack_require__("WEpk");
var global = __webpack_require__("5T2Y");
var speciesConstructor = __webpack_require__("8gHz");
var promiseResolve = __webpack_require__("zXhZ");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "PJMN":
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "PgRs":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("m/Pd")


/***/ }),

/***/ "Q/yX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__("Y7ZC");
var newPromiseCapability = __webpack_require__("ZW5q");
var perform = __webpack_require__("RDmV");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "Q0KE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__("q1tI")); // @ts-ignore for some reason the React types don't like this, but it's correct.


exports.LoadableContext = React.createContext(null);

/***/ }),

/***/ "QMMT":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("a0xu");
var TAG = __webpack_require__("UWiX")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "QXhf":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("2GTP");
var invoke = __webpack_require__("MCSJ");
var html = __webpack_require__("MvwC");
var cel = __webpack_require__("Hsns");
var global = __webpack_require__("5T2Y");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("a0xu")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "R+7+":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("w6GO");
var gOPS = __webpack_require__("mqlF");
var pIE = __webpack_require__("NV0k");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "R+7f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__("q1tI"));
const server_1 = __webpack_require__("Fw1r");
const react_ssr_prepass_1 = __importDefault(__webpack_require__("8cXa"));
const mitt_1 = __importDefault(__webpack_require__("kiME"));
const utils_1 = __webpack_require__("Bu4q");
const head_1 = __importStar(__webpack_require__("m/Pd"));
const loadable_1 = __importDefault(__webpack_require__("0KLy"));
const data_manager_context_1 = __webpack_require__("qS9g");
const request_context_1 = __webpack_require__("4Vye");
const loadable_context_1 = __webpack_require__("Q0KE");
const router_context_1 = __webpack_require__("9EOK");
const data_manager_1 = __webpack_require__("cuFY");
const get_dynamic_import_bundles_1 = __webpack_require__("W8Q5");
const get_page_files_1 = __webpack_require__("bkef");
const amphtml_context_1 = __webpack_require__("imt6");
const optimize_amp_1 = __importDefault(__webpack_require__("DHOm"));
const amp_1 = __webpack_require__("Wziy");
function noRouter() {
    const message = 'No router instance found. you should only use "next/router" inside the client side of your app. https://err.sh/zeit/next.js/no-router-instance';
    throw new Error(message);
}
class ServerRouter {
    constructor(pathname, query, as) {
        this.route = pathname.replace(/\/$/, '') || '/';
        this.pathname = pathname;
        this.query = query;
        this.asPath = as;
        this.pathname = pathname;
    }
    // @ts-ignore
    push() {
        noRouter();
    }
    // @ts-ignore
    replace() {
        noRouter();
    }
    // @ts-ignore
    reload() {
        noRouter();
    }
    back() {
        noRouter();
    }
    // @ts-ignore
    prefetch() {
        noRouter();
    }
    beforePopState() {
        noRouter();
    }
}
// TODO: Remove in the next major version, as this would mean the user is adding event listeners in server-side `render` method
ServerRouter.events = mitt_1.default();
function enhanceComponents(options, App, Component) {
    // For backwards compatibility
    if (typeof options === 'function') {
        return {
            App,
            Component: options(Component),
        };
    }
    return {
        App: options.enhanceApp ? options.enhanceApp(App) : App,
        Component: options.enhanceComponent
            ? options.enhanceComponent(Component)
            : Component,
    };
}
function render(renderElementToString, element) {
    let html;
    let head;
    try {
        html = renderElementToString(element);
    }
    finally {
        head = head_1.default.rewind() || head_1.defaultHead();
    }
    return { html, head };
}
function renderDocument(Document, { dataManagerData, props, docProps, pathname, query, buildId, dynamicBuildId = false, assetPrefix, runtimeConfig, nextExport, dynamicImportsIds, dangerousAsPath, err, dev, ampPath, amphtml, hasAmp, ampMode, staticMarkup, devFiles, files, dynamicImports, }) {
    return ('<!DOCTYPE html>' +
        server_1.renderToStaticMarkup(react_1.default.createElement(amphtml_context_1.AmpModeContext.Provider, { value: ampMode },
            react_1.default.createElement(Document, Object.assign({ __NEXT_DATA__: {
                    dataManager: dataManagerData,
                    props,
                    page: pathname,
                    query,
                    buildId,
                    dynamicBuildId,
                    assetPrefix: assetPrefix === '' ? undefined : assetPrefix,
                    runtimeConfig,
                    nextExport,
                    dynamicIds: dynamicImportsIds.length === 0 ? undefined : dynamicImportsIds,
                    err: err ? serializeError(dev, err) : undefined,
                }, dangerousAsPath: dangerousAsPath, ampPath: ampPath, amphtml: amphtml, hasAmp: hasAmp, staticMarkup: staticMarkup, devFiles: devFiles, files: files, dynamicImports: dynamicImports, assetPrefix: assetPrefix }, docProps)))));
}
async function renderToHTML(req, res, pathname, query, renderOpts) {
    pathname = pathname === '/index' ? '/' : pathname;
    const { err, dev = false, ampBindInitData = false, staticMarkup = false, ampPath = '', App, Document, Component, buildManifest, reactLoadableManifest, ErrorDebug, } = renderOpts;
    await loadable_1.default.preloadAll(); // Make sure all dynamic imports are loaded
    if (dev) {
        const { isValidElementType } = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-is'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
        if (!isValidElementType(Component)) {
            throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
        if (!isValidElementType(App)) {
            throw new Error(`The default export is not a React Component in page: "/_app"`);
        }
        if (!isValidElementType(Document)) {
            throw new Error(`The default export is not a React Component in page: "/_document"`);
        }
    }
    // @ts-ignore url will always be set
    const asPath = req.url;
    const ctx = { err, req, res, pathname, query, asPath };
    const router = new ServerRouter(pathname, query, asPath);
    let props;
    try {
        props = await utils_1.loadGetInitialProps(App, { Component, router, ctx });
    }
    catch (err) {
        if (!dev || !err)
            throw err;
        ctx.err = err;
        renderOpts.err = err;
    }
    // the response might be finished on the getInitialProps call
    if (utils_1.isResSent(res))
        return null;
    const devFiles = buildManifest.devFiles;
    const files = [
        ...new Set([
            ...get_page_files_1.getPageFiles(buildManifest, pathname),
            ...get_page_files_1.getPageFiles(buildManifest, '/_app'),
        ]),
    ];
    let dataManager;
    if (ampBindInitData) {
        dataManager = new data_manager_1.DataManager();
    }
    const reactLoadableModules = [];
    const renderElementToString = staticMarkup
        ? server_1.renderToStaticMarkup
        : server_1.renderToString;
    const renderPageError = () => {
        if (ctx.err && ErrorDebug) {
            return render(renderElementToString, react_1.default.createElement(ErrorDebug, { error: ctx.err }));
        }
        if (dev && (props.router || props.Component)) {
            throw new Error(`'router' and 'Component' can not be returned in getInitialProps from _app.js https://err.sh/zeit/next.js/cant-override-next-props.md`);
        }
    };
    let renderPage;
    const ampMode = {
        enabled: false,
        hasQuery: Boolean(query.amp && /^(y|yes|true|1)/i.test(query.amp.toString())),
    };
    if (ampBindInitData) {
        renderPage = async (options = {}) => {
            const renderError = renderPageError();
            if (renderError)
                return renderError;
            const { App: EnhancedApp, Component: EnhancedComponent, } = enhanceComponents(options, App, Component);
            const Application = () => react_1.default.createElement(request_context_1.RequestContext.Provider, { value: req },
                react_1.default.createElement(router_context_1.RouterContext.Provider, { value: router },
                    react_1.default.createElement(data_manager_context_1.DataManagerContext.Provider, { value: dataManager },
                        react_1.default.createElement(amphtml_context_1.AmpModeContext.Provider, { value: ampMode },
                            react_1.default.createElement(loadable_context_1.LoadableContext.Provider, { value: (moduleName) => reactLoadableModules.push(moduleName) },
                                react_1.default.createElement(EnhancedApp, Object.assign({ Component: EnhancedComponent, router: router }, props)))))));
            const element = react_1.default.createElement(Application, null);
            try {
                return render(renderElementToString, element);
            }
            catch (err) {
                if (err && typeof err === 'object' && typeof err.then === 'function') {
                    await react_ssr_prepass_1.default(element);
                    if (renderOpts.dataOnly) {
                        return {
                            html: '',
                            head: [],
                            dataOnly: true,
                        };
                    }
                    else {
                        return render(renderElementToString, element);
                    }
                }
                throw err;
            }
        };
    }
    else {
        renderPage = (options = {}) => {
            const renderError = renderPageError();
            if (renderError)
                return renderError;
            const { App: EnhancedApp, Component: EnhancedComponent, } = enhanceComponents(options, App, Component);
            return render(renderElementToString, react_1.default.createElement(request_context_1.RequestContext.Provider, { value: req },
                react_1.default.createElement(router_context_1.RouterContext.Provider, { value: router },
                    react_1.default.createElement(amphtml_context_1.AmpModeContext.Provider, { value: ampMode },
                        react_1.default.createElement(loadable_context_1.LoadableContext.Provider, { value: (moduleName) => reactLoadableModules.push(moduleName) },
                            react_1.default.createElement(EnhancedApp, Object.assign({ Component: EnhancedComponent, router: router }, props)))))));
        };
    }
    const docProps = await utils_1.loadGetInitialProps(Document, Object.assign({}, ctx, { renderPage }));
    // the response might be finished on the getInitialProps call
    if (utils_1.isResSent(res))
        return null;
    let dataManagerData = '[]';
    if (dataManager) {
        dataManagerData = JSON.stringify([...dataManager.getData()]);
    }
    if (docProps.dataOnly) {
        return dataManagerData;
    }
    const dynamicImports = [
        ...get_dynamic_import_bundles_1.getDynamicImportBundles(reactLoadableManifest, reactLoadableModules),
    ];
    const dynamicImportsIds = dynamicImports.map((bundle) => bundle.id);
    const amphtml = amp_1.isAmp(ampMode);
    const hasAmp = !amphtml && ampMode.enabled;
    // update renderOpts so export knows it's AMP
    renderOpts.amphtml = amphtml;
    renderOpts.hasAmp = hasAmp;
    let html = renderDocument(Document, Object.assign({}, renderOpts, { dangerousAsPath: router.asPath, dataManagerData,
        ampMode,
        props,
        docProps,
        pathname,
        ampPath,
        amphtml,
        hasAmp,
        query,
        dynamicImportsIds,
        dynamicImports,
        files,
        devFiles }));
    if (amphtml && html) {
        html = await optimize_amp_1.default(html, { amphtml, query });
        // don't validate dirty AMP
        if (renderOpts.ampValidator && query.amp) {
            await renderOpts.ampValidator(html, pathname);
        }
    }
    if (amphtml || hasAmp) {
        // fix &amp being escaped for amphtml rel link
        html = html.replace(/&amp;amp=1/g, '&amp=1');
    }
    return html;
}
exports.renderToHTML = renderToHTML;
function errorToJSON(err) {
    const { name, message, stack } = err;
    return { name, message, stack };
}
function serializeError(dev, err) {
    if (dev) {
        return errorToJSON(err);
    }
    return {
        name: 'Internal Server Error.',
        message: '500 - Internal Server Error.',
        statusCode: 500,
    };
}


/***/ }),

/***/ "RDmV":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "RRc/":
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__("oioR");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "RU/L":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("Rqdy");
var $Object = __webpack_require__("WEpk").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "RfKB":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("2faE").f;
var has = __webpack_require__("B+OT");
var TAG = __webpack_require__("UWiX")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "Rp86":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("bBy9");
__webpack_require__("FlQf");
module.exports = __webpack_require__("fXsU");


/***/ }),

/***/ "Rqdy":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("Y7ZC");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("jmDH"), 'Object', { defineProperty: __webpack_require__("2faE").f });


/***/ }),

/***/ "S8m4":
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ "SBuE":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "SevZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__("9kyW"));

var _stylesheet = _interopRequireDefault(__webpack_require__("bVZc"));

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

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("3GJH");

/***/ }),

/***/ "TJWN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("5T2Y");
var core = __webpack_require__("WEpk");
var dP = __webpack_require__("2faE");
var DESCRIPTORS = __webpack_require__("jmDH");
var SPECIES = __webpack_require__("UWiX")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "TOwV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("qT12");
} else {}


/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("JbBM");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });


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

/***/ "TuGD":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("UWiX")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "U+KD":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("B+OT");
var toObject = __webpack_require__("JB68");
var IE_PROTO = __webpack_require__("VVlx")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "UDep":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("wgeU");
__webpack_require__("FlQf");
__webpack_require__("bBy9");
__webpack_require__("g33z");
__webpack_require__("XLbu");
__webpack_require__("/h46");
__webpack_require__("dVTT");
module.exports = __webpack_require__("WEpk").Map;


/***/ }),

/***/ "UO39":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "UVaH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var origSymbol = global.Symbol;
var hasSymbolSham = __webpack_require__("FpZJ");

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};


/***/ }),

/***/ "UWiX":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("29s/")('wks');
var uid = __webpack_require__("YqAc");
var Symbol = __webpack_require__("5T2Y").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("UbbE");

/***/ }),

/***/ "UbbE":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("o8NH");
module.exports = __webpack_require__("WEpk").Object.assign;


/***/ }),

/***/ "V+O7":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__("aPfg")('Set');


/***/ }),

/***/ "V7Et":
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__("2GTP");
var IObject = __webpack_require__("M1xp");
var toObject = __webpack_require__("JB68");
var toLength = __webpack_require__("tEej");
var asc = __webpack_require__("v6xn");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "VDXt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _keys = _interopRequireDefault(__webpack_require__("pLtp"));

var _assign = _interopRequireDefault(__webpack_require__("UXZV"));

var _promise = _interopRequireDefault(__webpack_require__("eVuF"));

var _now = _interopRequireDefault(__webpack_require__("Cg2A"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var _getOwnPropertySymbols = _interopRequireDefault(__webpack_require__("4mXO"));

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof _getOwnPropertySymbols.default === "function") for (var i = 0, p = (0, _getOwnPropertySymbols.default)(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  }
  return t;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable */

var prop_types_1 = __importDefault(__webpack_require__("17x9"));

var react_1 = __importStar(__webpack_require__("q1tI"));

var utils_1 = __webpack_require__("Keko");

var htmlescape_1 = __webpack_require__("AXZJ");

var server_1 = __importDefault(__webpack_require__("DTay"));

var constants_1 = __webpack_require__("dDGi");

function getAmpPath(ampPath, asPath) {
  return ampPath ? ampPath : "".concat(asPath).concat(asPath.includes('?') ? '&' : '?', "amp=1");
}

var Document =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Document, _react_1$Component);

  function Document() {
    (0, _classCallCheck2.default)(this, Document);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Document).apply(this, arguments));
  }

  (0, _createClass2.default)(Document, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        _documentProps: this.props,
        // In dev we invalidate the cache by appending a timestamp to the resource URL.
        // This is a workaround to fix https://github.com/zeit/next.js/issues/5860
        // TODO: remove this workaround when https://bugs.webkit.org/show_bug.cgi?id=187726 is fixed.
        _devOnlyInvalidateCacheQueryString:  false ? undefined : ''
      };
    }
  }, {
    key: "render",
    value: function render() {
      return react_1.default.createElement(Html, null, react_1.default.createElement(Head, null), react_1.default.createElement("body", null, react_1.default.createElement(Main, null), react_1.default.createElement(NextScript, null)));
    }
  }], [{
    key: "getInitialProps",
    value: function (_ref) {
      var renderPage = _ref.renderPage;

      try {
        return _promise.default.resolve(renderPage()).then(function (_ref2) {
          var html = _ref2.html,
              head = _ref2.head,
              dataOnly = _ref2.dataOnly;
          var styles = server_1.default();
          return {
            html: html,
            head: head,
            styles: styles,
            dataOnly: dataOnly
          };
        });
      } catch (e) {
        return _promise.default.reject(e);
      }
    }
  }]);
  return Document;
}(react_1.Component);

Document.childContextTypes = {
  _documentProps: prop_types_1.default.any,
  _devOnlyInvalidateCacheQueryString: prop_types_1.default.string
};
exports.default = Document;

var Html =
/*#__PURE__*/
function (_react_1$Component2) {
  (0, _inherits2.default)(Html, _react_1$Component2);

  function Html() {
    (0, _classCallCheck2.default)(this, Html);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Html).apply(this, arguments));
  }

  (0, _createClass2.default)(Html, [{
    key: "render",
    value: function render() {
      var amphtml = this.context._documentProps.amphtml;

      var _a = this.props,
          children = _a.children,
          props = __rest(_a, ["children"]);

      return react_1.default.createElement("html", (0, _assign.default)({}, props, {
        amp: amphtml ? '' : null
      }), children);
    }
  }]);
  return Html;
}(react_1.Component);

Html.contextTypes = {
  _documentProps: prop_types_1.default.any
};
Html.propTypes = {
  children: prop_types_1.default.node.isRequired
};
exports.Html = Html;

var Head =
/*#__PURE__*/
function (_react_1$Component3) {
  (0, _inherits2.default)(Head, _react_1$Component3);

  function Head() {
    (0, _classCallCheck2.default)(this, Head);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Head).apply(this, arguments));
  }

  (0, _createClass2.default)(Head, [{
    key: "getCssLinks",
    value: function getCssLinks() {
      var _this = this;

      var _this$context$_docume = this.context._documentProps,
          assetPrefix = _this$context$_docume.assetPrefix,
          files = _this$context$_docume.files;

      if (!files || files.length === 0) {
        return null;
      }

      return files.map(function (file) {
        // Only render .css files here
        if (!/\.css$/.exec(file)) {
          return null;
        }

        return react_1.default.createElement("link", {
          key: file,
          nonce: _this.props.nonce,
          rel: "stylesheet",
          href: "".concat(assetPrefix, "/_next/").concat(file),
          crossOrigin: _this.props.crossOrigin || undefined
        });
      });
    }
  }, {
    key: "getPreloadDynamicChunks",
    value: function getPreloadDynamicChunks() {
      var _this2 = this;

      var _this$context$_docume2 = this.context._documentProps,
          dynamicImports = _this$context$_docume2.dynamicImports,
          assetPrefix = _this$context$_docume2.assetPrefix;
      var _devOnlyInvalidateCacheQueryString = this.context._devOnlyInvalidateCacheQueryString;
      return dynamicImports.map(function (bundle) {
        return react_1.default.createElement("link", {
          rel: "preload",
          key: bundle.file,
          href: "".concat(assetPrefix, "/_next/").concat(bundle.file).concat(_devOnlyInvalidateCacheQueryString),
          as: "script",
          nonce: _this2.props.nonce,
          crossOrigin: _this2.props.crossOrigin || undefined
        });
      });
    }
  }, {
    key: "getPreloadMainLinks",
    value: function getPreloadMainLinks() {
      var _this3 = this;

      var _this$context$_docume3 = this.context._documentProps,
          assetPrefix = _this$context$_docume3.assetPrefix,
          files = _this$context$_docume3.files;

      if (!files || files.length === 0) {
        return null;
      }

      var _devOnlyInvalidateCacheQueryString = this.context._devOnlyInvalidateCacheQueryString;
      return files.map(function (file) {
        // Only render .js files here
        if (!/\.js$/.exec(file)) {
          return null;
        }

        return react_1.default.createElement("link", {
          key: file,
          nonce: _this3.props.nonce,
          rel: "preload",
          href: "".concat(assetPrefix, "/_next/").concat(file).concat(_devOnlyInvalidateCacheQueryString),
          as: "script",
          crossOrigin: _this3.props.crossOrigin || undefined
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$context$_docume4 = this.context._documentProps,
          styles = _this$context$_docume4.styles,
          amphtml = _this$context$_docume4.amphtml,
          hasAmp = _this$context$_docume4.hasAmp,
          ampPath = _this$context$_docume4.ampPath,
          assetPrefix = _this$context$_docume4.assetPrefix,
          __NEXT_DATA__ = _this$context$_docume4.__NEXT_DATA__,
          dangerousAsPath = _this$context$_docume4.dangerousAsPath;
      var _devOnlyInvalidateCacheQueryString = this.context._devOnlyInvalidateCacheQueryString;
      var page = __NEXT_DATA__.page,
          buildId = __NEXT_DATA__.buildId,
          dynamicBuildId = __NEXT_DATA__.dynamicBuildId;
      var isDirtyAmp = amphtml && !__NEXT_DATA__.query.amp;
      var head = this.context._documentProps.head;
      var children = this.props.children; // show a warning if Head contains <title> (only in development)

      if (false) {} // show warning and remove conflicting amp head tags


      head = !amphtml ? head : react_1.default.Children.map(head, function (child) {
        if (!child) return child;
        var type = child.type,
            props = child.props;
        var badProp;

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          badProp = 'rel="canonical"';
        } else if (type === 'script') {
          // only block if 
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            (0, _keys.default)(props).forEach(function (prop) {
              badProp += " ".concat(prop, "=\"").concat(props[prop], "\"");
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn("Found conflicting amp tag \"".concat(child.type, "\" with conflicting prop ").concat(badProp, ". https://err.sh/next.js/conflicting-amp-tag"));
          return null;
        }

        return child;
      });
      return react_1.default.createElement("head", (0, _assign.default)({}, this.props), children, head, amphtml && react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement("meta", {
        name: "viewport",
        content: "width=device-width,minimum-scale=1,initial-scale=1"
      }), react_1.default.createElement("link", {
        rel: "canonical",
        href: utils_1.cleanAmpPath(dangerousAsPath)
      }), isDirtyAmp && react_1.default.createElement("link", {
        rel: "amphtml",
        href: getAmpPath(ampPath, dangerousAsPath)
      }), react_1.default.createElement("link", {
        rel: "preload",
        as: "script",
        href: "https://cdn.ampproject.org/v0.js"
      }), styles && react_1.default.createElement("style", {
        "amp-custom": "",
        dangerouslySetInnerHTML: {
          __html: styles.map(function (style) {
            return style.props.dangerouslySetInnerHTML.__html;
          }).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
        }
      }), react_1.default.createElement("style", {
        "amp-boilerplate": "",
        dangerouslySetInnerHTML: {
          __html: "body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}"
        }
      }), react_1.default.createElement("noscript", null, react_1.default.createElement("style", {
        "amp-boilerplate": "",
        dangerouslySetInnerHTML: {
          __html: "body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}"
        }
      })), react_1.default.createElement("script", {
        async: true,
        src: "https://cdn.ampproject.org/v0.js"
      })), !amphtml && react_1.default.createElement(react_1.default.Fragment, null, hasAmp && react_1.default.createElement("link", {
        rel: "amphtml",
        href: getAmpPath(ampPath, dangerousAsPath)
      }), page !== '/_error' && react_1.default.createElement("link", {
        rel: "preload",
        href: assetPrefix + (dynamicBuildId ? "/_next/static/client/pages".concat(getPageFile(page, buildId)) : "/_next/static/".concat(buildId, "/pages").concat(getPageFile(page))) + _devOnlyInvalidateCacheQueryString,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }), react_1.default.createElement("link", {
        rel: "preload",
        href: assetPrefix + (dynamicBuildId ? "/_next/static/client/pages/_app.".concat(buildId, ".js") : "/_next/static/".concat(buildId, "/pages/_app.js")) + _devOnlyInvalidateCacheQueryString,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }), this.getPreloadDynamicChunks(), this.getPreloadMainLinks(), this.getCssLinks(), styles || null));
    }
  }]);
  return Head;
}(react_1.Component);

Head.contextTypes = {
  _documentProps: prop_types_1.default.any,
  _devOnlyInvalidateCacheQueryString: prop_types_1.default.string
};
Head.propTypes = {
  nonce: prop_types_1.default.string,
  crossOrigin: prop_types_1.default.string
};
exports.Head = Head;

var Main =
/*#__PURE__*/
function (_react_1$Component4) {
  (0, _inherits2.default)(Main, _react_1$Component4);

  function Main() {
    (0, _classCallCheck2.default)(this, Main);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Main).apply(this, arguments));
  }

  (0, _createClass2.default)(Main, [{
    key: "render",
    value: function render() {
      var html = this.context._documentProps.html;
      return react_1.default.createElement("div", {
        id: "__next",
        dangerouslySetInnerHTML: {
          __html: html
        }
      });
    }
  }]);
  return Main;
}(react_1.Component);

Main.contextTypes = {
  _documentProps: prop_types_1.default.any,
  _devOnlyInvalidateCacheQueryString: prop_types_1.default.string
};
exports.Main = Main;

var NextScript =
/*#__PURE__*/
function (_react_1$Component5) {
  (0, _inherits2.default)(NextScript, _react_1$Component5);

  function NextScript() {
    (0, _classCallCheck2.default)(this, NextScript);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(NextScript).apply(this, arguments));
  }

  (0, _createClass2.default)(NextScript, [{
    key: "getDynamicChunks",
    value: function getDynamicChunks() {
      var _this4 = this;

      var _this$context$_docume5 = this.context._documentProps,
          dynamicImports = _this$context$_docume5.dynamicImports,
          assetPrefix = _this$context$_docume5.assetPrefix;
      var _devOnlyInvalidateCacheQueryString = this.context._devOnlyInvalidateCacheQueryString;
      return dynamicImports.map(function (bundle) {
        return react_1.default.createElement("script", {
          async: true,
          key: bundle.file,
          src: "".concat(assetPrefix, "/_next/").concat(bundle.file).concat(_devOnlyInvalidateCacheQueryString),
          nonce: _this4.props.nonce,
          crossOrigin: _this4.props.crossOrigin || undefined
        });
      });
    }
  }, {
    key: "getScripts",
    value: function getScripts() {
      var _this5 = this;

      var _this$context$_docume6 = this.context._documentProps,
          assetPrefix = _this$context$_docume6.assetPrefix,
          files = _this$context$_docume6.files;

      if (!files || files.length === 0) {
        return null;
      }

      var _devOnlyInvalidateCacheQueryString = this.context._devOnlyInvalidateCacheQueryString;
      return files.map(function (file) {
        // Only render .js files here
        if (!/\.js$/.exec(file)) {
          return null;
        }

        return react_1.default.createElement("script", {
          key: file,
          src: "".concat(assetPrefix, "/_next/").concat(file).concat(_devOnlyInvalidateCacheQueryString),
          nonce: _this5.props.nonce,
          async: true,
          crossOrigin: _this5.props.crossOrigin || undefined
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var _this$context$_docume7 = this.context._documentProps,
          staticMarkup = _this$context$_docume7.staticMarkup,
          assetPrefix = _this$context$_docume7.assetPrefix,
          amphtml = _this$context$_docume7.amphtml,
          devFiles = _this$context$_docume7.devFiles,
          __NEXT_DATA__ = _this$context$_docume7.__NEXT_DATA__;
      var _devOnlyInvalidateCacheQueryString = this.context._devOnlyInvalidateCacheQueryString;

      if (amphtml) {
        if (true) {
          return null;
        }

        var _devFiles = [constants_1.CLIENT_STATIC_FILES_RUNTIME_AMP, constants_1.CLIENT_STATIC_FILES_RUNTIME_WEBPACK];
        return react_1.default.createElement(react_1.default.Fragment, null, staticMarkup ? null : react_1.default.createElement("script", {
          id: "__NEXT_DATA__",
          type: "application/json",
          nonce: this.props.nonce,
          crossOrigin: this.props.crossOrigin || undefined,
          dangerouslySetInnerHTML: {
            __html: NextScript.getInlineScriptSource(this.context._documentProps)
          },
          "data-amp-development-mode-only": true
        }), _devFiles ? _devFiles.map(function (file) {
          return react_1.default.createElement("script", {
            key: file,
            src: "".concat(assetPrefix, "/_next/").concat(file).concat(_devOnlyInvalidateCacheQueryString),
            nonce: _this6.props.nonce,
            crossOrigin: _this6.props.crossOrigin || undefined,
            "data-amp-development-mode-only": true
          });
        }) : null);
      }

      var page = __NEXT_DATA__.page,
          buildId = __NEXT_DATA__.buildId,
          dynamicBuildId = __NEXT_DATA__.dynamicBuildId;

      if (false) {}

      return react_1.default.createElement(react_1.default.Fragment, null, devFiles ? devFiles.map(function (file) {
        return react_1.default.createElement("script", {
          key: file,
          src: "".concat(assetPrefix, "/_next/").concat(file).concat(_devOnlyInvalidateCacheQueryString),
          nonce: _this6.props.nonce,
          crossOrigin: _this6.props.crossOrigin || undefined
        });
      }) : null, staticMarkup ? null : react_1.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context._documentProps)
        }
      }), page !== '/_error' && react_1.default.createElement("script", {
        async: true,
        id: "__NEXT_PAGE__".concat(page),
        src: assetPrefix + (dynamicBuildId ? "/_next/static/client/pages".concat(getPageFile(page, buildId)) : "/_next/static/".concat(buildId, "/pages").concat(getPageFile(page))) + _devOnlyInvalidateCacheQueryString,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }), react_1.default.createElement("script", {
        async: true,
        id: "__NEXT_PAGE__/_app",
        src: assetPrefix + (dynamicBuildId ? "/_next/static/client/pages/_app.".concat(buildId, ".js") : "/_next/static/".concat(buildId, "/pages/_app.js")) + _devOnlyInvalidateCacheQueryString,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }), staticMarkup ? null : this.getDynamicChunks(), staticMarkup ? null : this.getScripts());
    }
  }], [{
    key: "getInlineScriptSource",
    value: function getInlineScriptSource(documentProps) {
      var __NEXT_DATA__ = documentProps.__NEXT_DATA__;

      try {
        var data = (0, _stringify.default)(__NEXT_DATA__);
        return htmlescape_1.htmlEscapeJsonString(data);
      } catch (err) {
        if (err.message.indexOf('circular structure')) {
          throw new Error("Circular structure in \"getInitialProps\" result of page \"".concat(__NEXT_DATA__.page, "\". https://err.sh/zeit/next.js/circular-structure"));
        }

        throw err;
      }
    }
  }]);
  return NextScript;
}(react_1.Component);

NextScript.contextTypes = {
  _documentProps: prop_types_1.default.any,
  _devOnlyInvalidateCacheQueryString: prop_types_1.default.string
};
NextScript.propTypes = {
  nonce: prop_types_1.default.string,
  crossOrigin: prop_types_1.default.string
};
exports.NextScript = NextScript;

function getPageFile(page, buildId) {
  if (page === '/') {
    return buildId ? "/index.".concat(buildId, ".js") : '/index.js';
  }

  return buildId ? "".concat(page, ".").concat(buildId, ".js") : "".concat(page, ".js");
}

/***/ }),

/***/ "VJsP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("2GTP");
var $export = __webpack_require__("Y7ZC");
var toObject = __webpack_require__("JB68");
var call = __webpack_require__("sNwI");
var isArrayIter = __webpack_require__("NwJ3");
var toLength = __webpack_require__("tEej");
var createProperty = __webpack_require__("IP1Z");
var getIterFn = __webpack_require__("fNZA");

$export($export.S + $export.F * !__webpack_require__("TuGD")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "VKFn":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("bBy9");
__webpack_require__("FlQf");
module.exports = __webpack_require__("ldVq");


/***/ }),

/***/ "VVlx":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("29s/")('keys');
var uid = __webpack_require__("YqAc");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "W070":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("NsO/");
var toLength = __webpack_require__("tEej");
var toAbsoluteIndex = __webpack_require__("D8kY");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "W8Q5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Based on https://github.com/jamiebuilds/react-loadable/pull/132
function getDynamicImportBundles(manifest, moduleIds) {
    return moduleIds.reduce((bundles, moduleId) => {
        if (typeof manifest[moduleId] === 'undefined') {
            return bundles;
        }
        manifest[moduleId].map((item) => bundles.add(item));
        return bundles;
    }, new Set());
}
exports.getDynamicImportBundles = getDynamicImportBundles;


/***/ }),

/***/ "WDQk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("1u+m");

module.exports = function getPolyfill() {
	return typeof Object.is === 'function' ? Object.is : implementation;
};


/***/ }),

/***/ "WEpk":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


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

/***/ "WbBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "Wu5q":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__("2faE").f;
var create = __webpack_require__("oVml");
var redefineAll = __webpack_require__("XJU/");
var ctx = __webpack_require__("2GTP");
var anInstance = __webpack_require__("EXMj");
var forOf = __webpack_require__("oioR");
var $iterDefine = __webpack_require__("MPFp");
var step = __webpack_require__("UO39");
var setSpecies = __webpack_require__("TJWN");
var DESCRIPTORS = __webpack_require__("jmDH");
var fastKey = __webpack_require__("6/1s").fastKey;
var validate = __webpack_require__("n3ko");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "Wziy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__("q1tI"));

var amphtml_context_1 = __webpack_require__("imt6");

function isAmp() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$enabled = _ref.enabled,
      enabled = _ref$enabled === void 0 ? false : _ref$enabled,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return enabled && (!hybrid || hybrid && hasQuery);
}

exports.isAmp = isAmp;

function useAmp() {
  var ampMode = react_1.default.useContext(amphtml_context_1.AmpModeContext); // un-comment below to not be considered AMP in dirty mode

  return isAmp(ampMode); // && ampMode.hasQuery
}

exports.useAmp = useAmp;

function withAmp(Component) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$hybrid = _ref2.hybrid,
      hybrid = _ref2$hybrid === void 0 ? false : _ref2$hybrid;

  function WithAmpWrapper() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var ampMode = react_1.default.useContext(amphtml_context_1.AmpModeContext);
    ampMode.enabled = true;
    ampMode.hybrid = hybrid;
    return react_1.default.createElement(Component, props);
  }

  WithAmpWrapper.__nextAmpOnly = !hybrid;
  WithAmpWrapper.getInitialProps = Component.getInitialProps;
  return WithAmpWrapper;
}

exports.withAmp = withAmp;

/***/ }),

/***/ "XJU/":
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__("NegM");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "XLbu":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__("Y7ZC");

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__("8iia")('Map') });


/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("2Nb0");

/***/ }),

/***/ "XXOK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Rp86");

/***/ }),

/***/ "Y4gF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * etag
 * Copyright(c) 2014-2016 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

module.exports = etag

/**
 * Module dependencies.
 * @private
 */

var crypto = __webpack_require__("PJMN")
var Stats = __webpack_require__("mw/K").Stats

/**
 * Module variables.
 * @private
 */

var toString = Object.prototype.toString

/**
 * Generate an entity tag.
 *
 * @param {Buffer|string} entity
 * @return {string}
 * @private
 */

function entitytag (entity) {
  if (entity.length === 0) {
    // fast-path empty
    return '"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk"'
  }

  // compute hash of entity
  var hash = crypto
    .createHash('sha1')
    .update(entity, 'utf8')
    .digest('base64')
    .substring(0, 27)

  // compute length of entity
  var len = typeof entity === 'string'
    ? Buffer.byteLength(entity, 'utf8')
    : entity.length

  return '"' + len.toString(16) + '-' + hash + '"'
}

/**
 * Create a simple ETag.
 *
 * @param {string|Buffer|Stats} entity
 * @param {object} [options]
 * @param {boolean} [options.weak]
 * @return {String}
 * @public
 */

function etag (entity, options) {
  if (entity == null) {
    throw new TypeError('argument entity is required')
  }

  // support fs.Stats object
  var isStats = isstats(entity)
  var weak = options && typeof options.weak === 'boolean'
    ? options.weak
    : isStats

  // validate argument
  if (!isStats && typeof entity !== 'string' && !Buffer.isBuffer(entity)) {
    throw new TypeError('argument entity must be string, Buffer, or fs.Stats')
  }

  // generate entity tag
  var tag = isStats
    ? stattag(entity)
    : entitytag(entity)

  return weak
    ? 'W/' + tag
    : tag
}

/**
 * Determine if object is a Stats object.
 *
 * @param {object} obj
 * @return {boolean}
 * @api private
 */

function isstats (obj) {
  // genuine fs.Stats
  if (typeof Stats === 'function' && obj instanceof Stats) {
    return true
  }

  // quack quack
  return obj && typeof obj === 'object' &&
    'ctime' in obj && toString.call(obj.ctime) === '[object Date]' &&
    'mtime' in obj && toString.call(obj.mtime) === '[object Date]' &&
    'ino' in obj && typeof obj.ino === 'number' &&
    'size' in obj && typeof obj.size === 'number'
}

/**
 * Generate a tag for a stat.
 *
 * @param {object} stat
 * @return {string}
 * @private
 */

function stattag (stat) {
  var mtime = stat.mtime.getTime().toString(16)
  var size = stat.size.toString(16)

  return '"' + size + '-' + mtime + '"'
}


/***/ }),

/***/ "Y7ZC":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("5T2Y");
var core = __webpack_require__("WEpk");
var ctx = __webpack_require__("2GTP");
var hide = __webpack_require__("NegM");
var has = __webpack_require__("B+OT");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YR0K":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* globals
	Atomics,
	SharedArrayBuffer,
*/

var undefined;

var $TypeError = TypeError;

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () { throw new $TypeError(); };
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__("UVaH")();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var generator; // = function * () {};
var generatorFunction = generator ? getProto(generator) : undefined;
var asyncFn; // async function() {};
var asyncFunction = asyncFn ? asyncFn.constructor : undefined;
var asyncGen; // async function * () {};
var asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;
var asyncGenIterator = asyncGen ? asyncGen() : undefined;

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%ArrayPrototype%': Array.prototype,
	'%ArrayProto_entries%': Array.prototype.entries,
	'%ArrayProto_forEach%': Array.prototype.forEach,
	'%ArrayProto_keys%': Array.prototype.keys,
	'%ArrayProto_values%': Array.prototype.values,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': asyncFunction,
	'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,
	'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,
	'%AsyncGeneratorFunction%': asyncGenFunction,
	'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,
	'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%Boolean%': Boolean,
	'%BooleanPrototype%': Boolean.prototype,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,
	'%Date%': Date,
	'%DatePrototype%': Date.prototype,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%ErrorPrototype%': Error.prototype,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%EvalErrorPrototype%': EvalError.prototype,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,
	'%Function%': Function,
	'%FunctionPrototype%': Function.prototype,
	'%Generator%': generator ? getProto(generator()) : undefined,
	'%GeneratorFunction%': generatorFunction,
	'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,
	'%Math%': Math,
	'%Number%': Number,
	'%NumberPrototype%': Number.prototype,
	'%Object%': Object,
	'%ObjectPrototype%': Object.prototype,
	'%ObjProto_toString%': Object.prototype.toString,
	'%ObjProto_valueOf%': Object.prototype.valueOf,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,
	'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,
	'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,
	'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,
	'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%RangeErrorPrototype%': RangeError.prototype,
	'%ReferenceError%': ReferenceError,
	'%ReferenceErrorPrototype%': ReferenceError.prototype,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%RegExpPrototype%': RegExp.prototype,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%StringPrototype%': String.prototype,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,
	'%SyntaxError%': SyntaxError,
	'%SyntaxErrorPrototype%': SyntaxError.prototype,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,
	'%TypeError%': $TypeError,
	'%TypeErrorPrototype%': $TypeError.prototype,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,
	'%URIError%': URIError,
	'%URIErrorPrototype%': URIError.prototype,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
	'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype
};

var bind = __webpack_require__("D3zA");
var $replace = bind.call(Function.call, String.prototype.replace);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	if (!(name in INTRINSICS)) {
		throw new SyntaxError('intrinsic ' + name + ' does not exist!');
	}

	// istanbul ignore if // hopefully this is impossible to test :-)
	if (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {
		throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
	}

	return INTRINSICS[name];
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);

	var value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);
	for (var i = 1; i < parts.length; i += 1) {
		if (value != null) {
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, parts[i]);
				if (!allowMissing && !(parts[i] in value)) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				value = desc ? (desc.get || desc.value) : value[parts[i]];
			} else {
				value = value[parts[i]];
			}
		}
	}
	return value;
};


/***/ }),

/***/ "YqAc":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("+SFK");

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

/***/ "ZR7Y":
/***/ (function(module, exports, __webpack_require__) {

function t(t){return t&&"object"==typeof t&&"default"in t?t.default:t}var e=__webpack_require__("TOwV"),n=__webpack_require__("q1tI"),r=t(n),u=t(__webpack_require__("bbcx")),o=e.Element,i=e.Portal,c=e.Fragment,a=e.StrictMode,l=e.Profiler,f=e.ContextProvider,s=e.ContextConsumer,p=e.ConcurrentMode,d=e.ForwardRef,v=e.Suspense,y=e.Memo,h=e.Lazy,m=n.Children.toArray,x=function(t){return null!==t&&"object"==typeof t},_=function(t){return m(t).filter(x)},S=function(t,e){return"object"==typeof e?Object.assign({},e,t):t},g=new Map,b={},M=void 0,j=void 0,C=function(){return Object.assign({},b)},w=function(){return new Map(g)},z=function(t){M=void 0,b=t},E=function(t){j=void 0,g=t},k=function(t){var e=g.get(t);return void 0!==e?e:t._currentValue},q={},F=function(t){var e=t.contextType,n=t.contextTypes;if(e)return k(e);if(!n)return q;var r={};for(var u in n)r[u]=b[u];return r},O=null,P=function(t){O=t},R=function(){if(null===O)throw new Error("[react-ssr-prepass] Hooks can only be called inside the body of a function component. (https://fb.me/react-invalid-hook-call)");return O},W=null,U=null,D=!1,N=!1,T=null,A=0,L=function(t){W=t};function I(){return null===U?null===W?(D=!1,W=U={memoizedState:null,queue:null,next:null}):(D=!0,U=W):null===U.next?(D=!1,U=U.next={memoizedState:null,queue:null,next:null}):(D=!0,U=U.next),U}function $(t,e){return"function"==typeof e?e(t):e}function H(t,e,n){var r,u=R();if(U=I(),D){var o=U.queue,i=o.dispatch;if(null!==T){var c=T.get(o);if(void 0!==c){T.delete(o);var a=U.memoizedState,l=c;do{a=t(a,l.action),l=l.next}while(null!==l);return U.memoizedState=a,[a,i]}}return[U.memoizedState,i]}r=t===$?"function"==typeof e?e():e:void 0!==n?n(e):e,U.memoizedState=r;var f=U.queue={last:null,dispatch:null},s=f.dispatch=function(t,e,n){if(t===R()){N=!0;var r={action:n,next:null};null===T&&(T=new Map);var u=T.get(e);if(void 0===u)T.set(e,r);else{for(var o=u;null!==o.next;)o=o.next;o.next=r}}}.bind(null,u,f);return[U.memoizedState,s]}function V(){}var B={readContext:function(t,e){return k(t)},useContext:function(t,e){return R(),k(t)},useMemo:function(t,e){R();var n=void 0===e?null:e;if(null!==(U=I())){var r=U.memoizedState;if(null!==r&&null!==n&&function(t,e){if(null===e)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!u(t[n],e[n]))return!1;return!0}(n,r[1]))return r[0]}var o=t();return U.memoizedState=[o,n],o},useReducer:H,useRef:function(t){R();var e=(U=I()).memoizedState;if(null===e){var n={current:t};return U.memoizedState=n,n}return e},useState:function(t){return H($,t)},useCallback:function(t,e){return t},useLayoutEffect:V,useImperativeHandle:V,useEffect:V,useDebugValue:V},Y=function(t){return t._status=0,t._ctor().then(function(e){"function"==typeof e?(t._result=e,t._status=1):null!==e&&"object"==typeof e&&"function"==typeof e.default?(t._result=e.default,t._status=1):t._status=2}).catch(function(){t._status=2})},G=function(t,e,r){return 1===t._status?n.createElement(t._result,e):null},J=function(t,e,n){return{contextMap:C(),contextStore:w(),id:R(),hook:W,kind:"frame.hooks",thenable:n,props:e,type:t}},K=function(t,e,n){try{return function(t,e,n){for(var r=t(e,n);A<25&&N;)N=!1,A+=1,U=null,r=t(e,n);return A=0,T=null,U=null,r}(t,S(e,t.defaultProps),F(t))}catch(r){if("function"!=typeof r.then)throw r;return n.push(J(t,e,r)),null}finally{P(null)}},Q=function(t,e,n,r,u){if(L(null),P({}),void 0!==u){var o=r(u);if("object"==typeof o&&null!==o&&"function"==typeof o.then)return n.push(J(t,e,o)),null}return K(t,e,n)},X=function(t,e,n){return{contextMap:C(),contextStore:w(),thenable:n,kind:"frame.class",instance:e,type:t}},Z=function(t,e,n){!function(t){var e=t.updater.queue;if(e.length>0){for(var n=Object.assign({},t.state),r=0,u=e.length;r<u;r++){var o=e[r],i="function"==typeof o?o.call(t,n,t.props,t.context):o;null!==i&&Object.assign(n,i)}t.state=n,e.length=0}}(e);var r=null;try{r=e.render()}catch(r){if("function"!=typeof r.then)throw r;return n.push(X(t,e,r)),null}if(void 0!==t.childContextTypes&&"function"==typeof e.getChildContext){var u=e.getChildContext();null!==u&&"object"==typeof u&&function(t){for(var e in M={},t)M[e]=b[e],b[e]=t[e]}(u)}if("function"!=typeof e.getDerivedStateFromProps&&("function"==typeof e.componentWillMount||"function"==typeof e.UNSAFE_componentWillMount)&&"function"==typeof e.componentWillUnmount)try{e.componentWillUnmount()}catch(t){}return e._isMounted=!1,r},tt=function(t,e,n,r,u){return(o=t).prototype&&o.prototype.isReactComponent?function(t,e,n,r,u){P(null);var o=function(t,e){var n,r={queue:n=[],isMounted:function(){return!1},enqueueForceUpdate:function(){return null},enqueueReplaceState:function(t,e){t._isMounted&&(n.length=0,n.push(e))},enqueueSetState:function(t,e){t._isMounted&&n.push(e)}},u=S(e,t.defaultProps),o=F(t),i=new t(u,o,r);if(i.props=u,i.context=o,i.updater=r,i._isMounted=!0,void 0===i.state&&(i.state=null),"function"==typeof t.getDerivedStateFromProps){var c=(0,t.getDerivedStateFromProps)(i.props,i.state);null!=c&&(i.state=Object.assign({},i.state,c))}else"function"==typeof i.componentWillMount?i.componentWillMount():"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount();return i}(t,e);if(void 0!==u){var i=r(u,o);if("object"==typeof i&&null!==i&&"function"==typeof i.then)return n.push(X(t,o,i)),null}return Z(t,o,n)}(t,e,n,r,u):Q(t,e,n,r,u);var o},et=function(t,e,n){var r,u=function(t,e,n){switch(function(t){switch(t.$$typeof){case i:return i;case o:switch(t.type){case p:return p;case c:return c;case l:return l;case a:return a;case v:return v;default:switch(t.type&&t.type.$$typeof){case h:return h;case y:return y;case s:return s;case f:return f;case d:return d;default:return o}}default:return}}(t)){case v:case a:case p:case l:case c:return _(t.props.children);case f:var r=t.props,u=r.children;return F=r.value,j=[q=t.type._context,g.get(q)],g.set(q,F),_(u);case s:var m=t.props.children;if("function"==typeof m){var x=t.type,S=k("object"==typeof x._context?x._context:x);return _(m(S))}return[];case h:var b=function(t,e,n){return 2!==t._status&&1!==t._status?(n.push({contextMap:C(),contextStore:w(),kind:"frame.lazy",thenable:Y(t),props:e,type:t}),null):G(t,e)}(t.type,t.props,e);return _(b);case y:var M=tt(t.type.type,t.props,e,n);return _(M);case d:var z=Q(t.type.render,t.props,e,n);return _(z);case o:if("string"==typeof t.type)return _(t.props.children);var E=tt(t.type,t.props,e,n,t);return _(E);case i:default:return[]}var q,F}(t,e,n),m=(r=M,M=void 0,r),x=function(){var t=j;return j=void 0,t}();nt(u,e,n),void 0!==m&&Object.assign(b,m),void 0!==x&&g.set(x[0],x[1])},nt=function(t,e,n){for(var r=0,u=t.length;r<u;r++)et(t[r],e,n)},rt=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher,ut=rt.current,ot=function(t,e){if(0===t.length)return Promise.resolve();var n=t.shift();return n.thenable.then(function(){ut=rt.current,rt.current=B;var r=[];return"frame.class"===n.kind?r=_(function(t,e){return P(null),z(e.contextMap),E(e.contextStore),Z(e.type,e.instance,t)}(t,n)):"frame.hooks"===n.kind?r=_(function(t,e){return L(e.hook),P(e.id),z(e.contextMap),E(e.contextStore),K(e.type,e.props,t)}(t,n)):"frame.lazy"===n.kind&&(r=_(function(t,e){return P(null),z(e.contextMap),E(e.contextStore),G(e.type,e.props)}(0,n))),nt(r,t,e),rt.current=ut,ot(t,e)})},it=function(){};module.exports=function(t,e){var n=[],r=void 0!==e?e:it;z({}),E(new Map);try{ut=rt.current,rt.current=B,nt(_(t),n,r)}catch(t){return Promise.reject(t)}finally{rt.current=ut}return ot(n,r)};
//# sourceMappingURL=react-ssr-prepass.production.min.js.map


/***/ }),

/***/ "ZW5q":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("eaoh");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "Zxgi":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("5T2Y");
var core = __webpack_require__("WEpk");
var LIBRARY = __webpack_require__("uOPS");
var wksExt = __webpack_require__("zLkG");
var defineProperty = __webpack_require__("2faE").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "a0xu":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
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

/***/ "aI7X":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "aPfg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__("Y7ZC");
var aFunction = __webpack_require__("eaoh");
var ctx = __webpack_require__("2GTP");
var forOf = __webpack_require__("oioR");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),

/***/ "aW7e":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("wgeU");
__webpack_require__("FlQf");
__webpack_require__("bBy9");
__webpack_require__("JMW+");
__webpack_require__("PBE1");
__webpack_require__("Q/yX");
module.exports = __webpack_require__("WEpk").Promise;


/***/ }),

/***/ "adOz":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("Zxgi")('asyncIterator');


/***/ }),

/***/ "ar/p":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("5vMV");
var hiddenKeys = __webpack_require__("FpHa").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "b3CU":
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__("pbKT");

var setPrototypeOf = __webpack_require__("vjea");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = _Reflect$construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "bBy9":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("w2d+");
var global = __webpack_require__("5T2Y");
var hide = __webpack_require__("NegM");
var Iterators = __webpack_require__("SBuE");
var TO_STRING_TAG = __webpack_require__("UWiX")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "bVZc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
var isProd = process.env && "production" === 'production';

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

/***/ }),

/***/ "bWkV":
/***/ (function(module, exports) {

module.exports = require("amp-toolbox-optimizer");

/***/ }),

/***/ "bbcx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__("82c2");
var callBind = __webpack_require__("xQ1C");

var implementation = __webpack_require__("1u+m");
var getPolyfill = __webpack_require__("WDQk");
var shim = __webpack_require__("wVpn");

var polyfill = callBind(getPolyfill(), Object);

define(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "bkef":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const normalize_page_path_1 = __webpack_require__("f7u1");
function getPageFiles(buildManifest, page) {
    const normalizedPage = normalize_page_path_1.normalizePagePath(page);
    const files = buildManifest.pages[normalizedPage];
    if (!files) {
        // tslint:disable-next-line
        console.warn(`Could not find files for ${normalizedPage} in .next/build-manifest.json`);
        return [];
    }
    return files;
}
exports.getPageFiles = getPageFiles;


/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cHUd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__("Y7ZC");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


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

var react_1 = __importStar(__webpack_require__("q1tI"));

var prop_types_1 = __importDefault(__webpack_require__("17x9"));

var router_1 = __importStar(__webpack_require__("nOHt"));

var utils_1 = __webpack_require__("Bu4q");

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

/***/ "ccE7":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("Ojgd");
var defined = __webpack_require__("Jes0");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "cuFY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("0iUn"));

var _createClass2 = _interopRequireDefault(__webpack_require__("sLSF"));

Object.defineProperty(exports, "__esModule", {
  value: true
});

var DataManager = /*#__PURE__*/function () {
  function DataManager(data) {
    (0, _classCallCheck2.default)(this, DataManager);
    this.data = new _map.default(data);
  }

  (0, _createClass2.default)(DataManager, [{
    key: "getData",
    value: function getData() {
      return this.data;
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.data.get(key);
    }
  }, {
    key: "set",
    value: function set(key, value) {
      this.data.set(key, value);
    }
  }, {
    key: "overwrite",
    value: function overwrite(data) {
      this.data = new _map.default(data);
    }
  }]);
  return DataManager;
}();

exports.DataManager = DataManager;

/***/ }),

/***/ "czwh":
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__("Y7ZC");
var create = __webpack_require__("oVml");
var aFunction = __webpack_require__("eaoh");
var anObject = __webpack_require__("5K7Z");
var isObject = __webpack_require__("93I4");
var fails = __webpack_require__("KUxP");
var bind = __webpack_require__("wYmx");
var rConstruct = (__webpack_require__("5T2Y").Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "d04V":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("0tVQ");

/***/ }),

/***/ "dDGi":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("0gFS")


/***/ }),

/***/ "dL40":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__("Y7ZC");

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__("8iia")('Set') });


/***/ }),

/***/ "dVTT":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__("aPfg")('Map');


/***/ }),

/***/ "dfwq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (is_array_default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("d04V");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js
var is_iterable = __webpack_require__("yLu3");
var is_iterable_default = /*#__PURE__*/__webpack_require__.n(is_iterable);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js


function _iterableToArray(iter) {
  if (is_iterable_default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return from_default()(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

/***/ }),

/***/ "dl0q":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("Zxgi")('observable');


/***/ }),

/***/ "doui":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js

function _arrayWithHoles(arr) {
  if (is_array_default()(arr)) return arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("XXOK");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = get_iterator_default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

/***/ }),

/***/ "eUtF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("jmDH") && !__webpack_require__("KUxP")(function () {
  return Object.defineProperty(__webpack_require__("Hsns")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aW7e");

/***/ }),

/***/ "eaoh":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "f7u1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __webpack_require__("oyvS");
function normalizePagePath(page) {
    // If the page is `/` we need to append `/index`, otherwise the returned directory root will be bundles instead of pages
    if (page === '/') {
        page = '/index';
    }
    // Resolve on anything that doesn't start with `/`
    if (page[0] !== '/') {
        page = `/${page}`;
    }
    // Throw when using ../ etc in the pathname
    const resolvedPage = path_1.posix.normalize(page);
    if (page !== resolvedPage) {
        throw new Error('Requested and resolved page mismatch');
    }
    return page;
}
exports.normalizePagePath = normalizePagePath;


/***/ }),

/***/ "fNZA":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("QMMT");
var ITERATOR = __webpack_require__("UWiX")('iterator');
var Iterators = __webpack_require__("SBuE");
module.exports = __webpack_require__("WEpk").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "fXsU":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("5K7Z");
var get = __webpack_require__("fNZA");
module.exports = __webpack_require__("WEpk").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "fpC5":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("2faE");
var anObject = __webpack_require__("5K7Z");
var getKeys = __webpack_require__("w6GO");

module.exports = __webpack_require__("jmDH") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "g33z":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__("Wu5q");
var validate = __webpack_require__("n3ko");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__("raTm")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "hDam":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RU/L");

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

/***/ "imt6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__("q1tI"));

exports.AmpModeContext = React.createContext({});

/***/ }),

/***/ "iq4v":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("Mqbl");
module.exports = __webpack_require__("WEpk").Object.keys;


/***/ }),

/***/ "j2DC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("oVml");
var descriptor = __webpack_require__("rr1i");
var setToStringTag = __webpack_require__("RfKB");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("NegM")(IteratorPrototype, __webpack_require__("UWiX")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "j7IG":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__("S8m4");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "jmDH":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("KUxP")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "kAMH":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("a0xu");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "kTiW":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("NegM");


/***/ }),

/***/ "kiME":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _interopRequireDefault = __webpack_require__("KI45");

var _create = _interopRequireDefault(__webpack_require__("SqZg"));

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = (0, _create.default)(null);
  return {
    on: function on(type, handler) {
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports.default = mitt;

/***/ }),

/***/ "kwZ1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__("jmDH");
var getKeys = __webpack_require__("w6GO");
var gOPS = __webpack_require__("mqlF");
var pIE = __webpack_require__("NV0k");
var toObject = __webpack_require__("JB68");
var IObject = __webpack_require__("M1xp");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("KUxP")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "lCc8":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("Y7ZC");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__("oVml") });


/***/ }),

/***/ "ldVq":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("QMMT");
var ITERATOR = __webpack_require__("UWiX")('iterator');
var Iterators = __webpack_require__("SBuE");
module.exports = __webpack_require__("WEpk").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("j7IG");


/***/ }),

/***/ "m/Pd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _set = _interopRequireDefault(__webpack_require__("ttDY"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__("q1tI"));

var side_effect_1 = __importDefault(__webpack_require__("4hZ1"));

var amphtml_context_1 = __webpack_require__("imt6");

var head_manager_context_1 = __webpack_require__("IClC");

var amp_1 = __webpack_require__("Wziy");

function defaultHead() {
  var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'next-head';
  var isAmp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var head = [react_1.default.createElement("meta", {
    key: "charSet",
    charSet: "utf-8",
    className: className
  })];

  if (!isAmp) {
    head.push(react_1.default.createElement("meta", {
      key: "viewport",
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1",
      className: className
    }));
  }

  return head;
}

exports.defaultHead = defaultHead;

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === "string" || typeof child === "number") {
    return list;
  } // Adds support for React.Fragment


  if (child.type === react_1.default.Fragment) {
    return list.concat(react_1.default.Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === "string" || typeof fragmentChild === "number") {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ["name", "httpEquiv", "charSet", "viewport", "itemProp"];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new _set.default();
  var tags = new _set.default();
  var metaTypes = new _set.default();
  var metaCategories = {};
  return function (h) {
    if (h.key && typeof h.key !== 'number' && h.key.indexOf(".$") === 0) {
      if (keys.has(h.key)) return false;
      keys.add(h.key);
      return true;
    }

    switch (h.type) {
      case "title":
      case "base":
        if (tags.has(h.type)) return false;
        tags.add(h.type);
        break;

      case "meta":
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === "charSet" || metatype === "viewport") {
            if (metaTypes.has(metatype)) return false;
            metaTypes.add(metatype);
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new _set.default();
            if (categories.has(category)) return false;
            categories.add(category);
            metaCategories[metatype] = categories;
          }
        }

        break;
    }

    return true;
  };
}
/**
 *
 * @param headElement List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = react_1.default.Children.toArray(headElement.props.children);
    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead('', props.isAmp)).filter(unique()).reverse().map(function (c, i) {
    var className = (c.props && c.props.className ? c.props.className + " " : "") + "next-head";
    var key = c.key || i;
    return react_1.default.cloneElement(c, {
      key: key,
      className: className
    });
  });
}

var Effect = side_effect_1.default();

function Head(_ref) {
  var children = _ref.children;
  return react_1.default.createElement(amphtml_context_1.AmpModeContext.Consumer, null, function (ampMode) {
    return react_1.default.createElement(head_manager_context_1.HeadManagerContext.Consumer, null, function (updateHead) {
      return react_1.default.createElement(Effect, {
        reduceComponentsToState: reduceComponents,
        handleStateChange: updateHead,
        isAmp: amp_1.isAmp(ampMode)
      }, children);
    });
  });
}

Head.rewind = Effect.rewind;
exports.default = Head;

/***/ }),

/***/ "mqlF":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "msIP":
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),

/***/ "mw/K":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "n3ko":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("93I4");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _assign = _interopRequireDefault(__webpack_require__("UXZV"));

var _construct2 = _interopRequireDefault(__webpack_require__("b3CU"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global window */

var react_1 = __importDefault(__webpack_require__("q1tI"));

var router_1 = __importDefault(__webpack_require__("JQMT"));

exports.Router = router_1.default;

var router_context_1 = __webpack_require__("9EOK");

var request_context_1 = __webpack_require__("4Vye");

var SingletonRouter = {
  router: null,
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (typeof window !== 'undefined') {
      this.readyCallbacks.push(cb);
    }
  }
}; // const x = SingletonRouter as IRealRouter
// Create public properties and methods of the router in the SingletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(SingletonRouter, 'events', {
  get: function get() {
    return router_1.default.events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(SingletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  SingletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  SingletonRouter.ready(function () {
    router_1.default.events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));
      var singletonRouter = SingletonRouter;

      if (singletonRouter[eventField]) {
        try {
          singletonRouter[eventField].apply(singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: ".concat(eventField)); // tslint:disable-next-line:no-console

          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function getRouter() {
  if (!SingletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return SingletonRouter.router;
} // Export the SingletonRouter and this is the public API.


exports.default = SingletonRouter; // Reexport the withRoute HOC

var with_router_1 = __webpack_require__("0Bsm");

exports.withRouter = with_router_1.default;

function useRouter() {
  return react_1.default.useContext(router_context_1.RouterContext);
}

exports.useRouter = useRouter;

function useRequest() {
  return react_1.default.useContext(request_context_1.RequestContext);
}

exports.useRequest = useRequest; // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.

exports.createRouter = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  SingletonRouter.router = (0, _construct2.default)(router_1.default, args);
  SingletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  SingletonRouter.readyCallbacks = [];
  return SingletonRouter.router;
}; // This function is used to create the `withRouter` router instance


function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var _i = 0; _i < urlPropertyFields.length; _i++) {
    var property = urlPropertyFields[_i];

    if (typeof _router[property] === 'object') {
      instance[property] = (0, _assign.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = router_1.default.events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get: function get() {
        return _router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

exports.makePublicRouterInstance = makePublicRouterInstance;

/***/ }),

/***/ "nWF0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flushToReact;
exports.flushToHTML = flushToHTML;

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _style = __webpack_require__("3niX");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function flushToReact() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _style.flush)().map(function (args) {
    var id = args[0];
    var css = args[1];
    return _react.default.createElement('style', {
      id: "__".concat(id),
      // Avoid warnings upon render with a key
      key: "__".concat(id),
      nonce: options.nonce ? options.nonce : undefined,
      dangerouslySetInnerHTML: {
        __html: css
      }
    });
  });
}

function flushToHTML() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _style.flush)().reduce(function (html, args) {
    var id = args[0];
    var css = args[1];
    html += "<style id=\"__".concat(id, "\"").concat(options.nonce ? " nonce=\"".concat(options.nonce, "\"") : '', ">").concat(css, "</style>");
    return html;
  }, '');
}

/***/ }),

/***/ "o8NH":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("Y7ZC");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("kwZ1") });


/***/ }),

/***/ "oD5A":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js
var construct = __webpack_require__("pbKT");
var construct_default = /*#__PURE__*/__webpack_require__.n(construct);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/next-server/dist/lib/head.js
var head = __webpack_require__("m/Pd");
var head_default = /*#__PURE__*/__webpack_require__.n(head);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./Components/test.scss
var test = __webpack_require__("1+rp");

// CONCATENATED MODULE: ./Components/Navbar/Navbar.js







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["default"])(this).constructor; result = construct_default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !construct_default.a) return false; if (construct_default.a.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(construct_default()(Date, [], function () {})); return true; } catch (e) { return false; } }






var Navbar_Navbar = /*#__PURE__*/function (_Component) {
  Object(inherits["default"])(Navbar, _Component);

  var _super = _createSuper(Navbar);

  function Navbar() {
    Object(classCallCheck["default"])(this, Navbar);

    return _super.apply(this, arguments);
  }

  Object(createClass["default"])(Navbar, [{
    key: "render",
    value: function render() {
      var openNewTab = function openNewTab(url) {
        window.open("".concat(url));
      };

      return /*#__PURE__*/react_default.a.createElement("nav", {
        id: "navColor",
        style: {
          width: '100%'
        },
        className: "navbar navbar-expand-lg navbar-light bg-light sticky-top"
      }, /*#__PURE__*/react_default.a.createElement(link_default.a, {
        href: "/"
      }, /*#__PURE__*/react_default.a.createElement("a", {
        className: "navbar-brand logo"
      }, /*#__PURE__*/react_default.a.createElement("strong", null, "CO"))), /*#__PURE__*/react_default.a.createElement("div", {
        className: "navbar-toggler"
      }, /*#__PURE__*/react_default.a.createElement("button", {
        type: "button",
        className: "btn-sm btn-dark"
      }, /*#__PURE__*/react_default.a.createElement("a", {
        className: "nav-link",
        href: "/projects"
      }, " Projects ")), /*#__PURE__*/react_default.a.createElement("button", {
        type: "button",
        className: "btn-sm btn-dark skillbutton"
      }, /*#__PURE__*/react_default.a.createElement("a", {
        className: "nav-link",
        href: "/skills"
      }, " Skills ")), /*#__PURE__*/react_default.a.createElement("button", {
        type: "button",
        className: "btn-sm btn-dark skillbutton"
      }, /*#__PURE__*/react_default.a.createElement("a", {
        className: "nav-link resumelink",
        onClick: function onClick() {
          return openNewTab('/static/chrisortegaresume.pdf');
        }
      }, " Resume "))), /*#__PURE__*/react_default.a.createElement("div", {
        className: "collapse navbar-collapse",
        id: "navbarSupportedContent test"
      }, /*#__PURE__*/react_default.a.createElement("ul", {
        className: "navbar-nav ml-auto"
      }, /*#__PURE__*/react_default.a.createElement("li", {
        className: "nav-item"
      }, /*#__PURE__*/react_default.a.createElement(link_default.a, {
        href: "/projects"
      }, /*#__PURE__*/react_default.a.createElement("a", {
        className: "nav-link"
      }, "Projects"))), /*#__PURE__*/react_default.a.createElement("li", {
        className: "nav-item "
      }, /*#__PURE__*/react_default.a.createElement(link_default.a, {
        href: "/skills"
      }, /*#__PURE__*/react_default.a.createElement("a", {
        className: "nav-link"
      }, "Skills"))), /*#__PURE__*/react_default.a.createElement("li", {
        className: "nav-item "
      }, /*#__PURE__*/react_default.a.createElement(link_default.a, null, /*#__PURE__*/react_default.a.createElement("a", {
        className: "nav-link resumelink",
        onClick: function onClick() {
          return openNewTab('/static/chrisortegaresume.pdf');
        }
      }, "Resume"))))));
    }
  }]);

  return Navbar;
}(react["Component"]);

/* harmony default export */ var Components_Navbar_Navbar = (Navbar_Navbar);
// CONCATENATED MODULE: ./Components/Layout/Layout.js







function Layout_createSuper(Derived) { var hasNativeReflectConstruct = Layout_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["default"])(this).constructor; result = construct_default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["default"])(this, result); }; }

function Layout_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !construct_default.a) return false; if (construct_default.a.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(construct_default()(Date, [], function () {})); return true; } catch (e) { return false; } }






var Layout_Layout = /*#__PURE__*/function (_Component) {
  Object(inherits["default"])(Layout, _Component);

  var _super = Layout_createSuper(Layout);

  function Layout() {
    Object(classCallCheck["default"])(this, Layout);

    return _super.apply(this, arguments);
  }

  Object(createClass["default"])(Layout, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement(head_default.a, null, /*#__PURE__*/react_default.a.createElement("title", null, " Chris Ortega's Portfolio "), /*#__PURE__*/react_default.a.createElement("link", {
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
        rel: "stylesheet",
        integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
        crossOrigin: "anonymous"
      })), /*#__PURE__*/react_default.a.createElement(Components_Navbar_Navbar, null), /*#__PURE__*/react_default.a.createElement("div", {
        className: "container",
        style: {
          paddingTop: '6.17%'
        }
      }, this.props.children));
    }
  }]);

  return Layout;
}(react["Component"]);

/* harmony default export */ var Components_Layout_Layout = __webpack_exports__["a"] = (Layout_Layout);

/***/ }),

/***/ "oVml":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("5K7Z");
var dPs = __webpack_require__("fpC5");
var enumBugKeys = __webpack_require__("FpHa");
var IE_PROTO = __webpack_require__("VVlx")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("Hsns")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("MvwC").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "oh+g":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("WEpk");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "oioR":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("2GTP");
var call = __webpack_require__("sNwI");
var isArrayIter = __webpack_require__("NwJ3");
var anObject = __webpack_require__("5K7Z");
var toLength = __webpack_require__("tEej");
var getIterFn = __webpack_require__("fNZA");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("9BDd");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("iq4v");

/***/ }),

/***/ "pV7Z":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("FDah");
} else {}


/***/ }),

/***/ "pbKT":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qijr");

/***/ }),

/***/ "q1tI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("viRO");
} else {}


/***/ }),

/***/ "q6LJ":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("5T2Y");
var macrotask = __webpack_require__("QXhf").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("a0xu")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "qS9g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__("q1tI"));

exports.DataManagerContext = React.createContext(null);

/***/ }),

/***/ "qT12":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.memo"):
60115,r=b?Symbol.for("react.lazy"):60116;function t(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case r:case q:case d:return u}}}function v(a){return t(a)===m}exports.typeOf=t;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;
exports.Fragment=e;exports.Lazy=r;exports.Memo=q;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||"object"===typeof a&&null!==a&&(a.$$typeof===r||a.$$typeof===q||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n)};exports.isAsyncMode=function(a){return v(a)||t(a)===l};exports.isConcurrentMode=v;exports.isContextConsumer=function(a){return t(a)===k};
exports.isContextProvider=function(a){return t(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return t(a)===n};exports.isFragment=function(a){return t(a)===e};exports.isLazy=function(a){return t(a)===r};exports.isMemo=function(a){return t(a)===q};exports.isPortal=function(a){return t(a)===d};exports.isProfiler=function(a){return t(a)===g};exports.isStrictMode=function(a){return t(a)===f};
exports.isSuspense=function(a){return t(a)===p};


/***/ }),

/***/ "qeJ0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "url"
var external_url_ = __webpack_require__("bzos");

// EXTERNAL MODULE: ./node_modules/next-server/dist/server/render.js
var server_render = __webpack_require__("R+7f");

// EXTERNAL MODULE: ./node_modules/next-server/dist/server/send-html.js
var send_html = __webpack_require__("I8F5");

// EXTERNAL MODULE: ./.next/build-manifest.json
var build_manifest = __webpack_require__("LZ9C");

// EXTERNAL MODULE: ./.next/react-loadable-manifest.json
var react_loadable_manifest = __webpack_require__("67Bq");

// EXTERNAL MODULE: ./node_modules/next/dist/pages/_document.js
var _document = __webpack_require__("VDXt");
var _document_default = /*#__PURE__*/__webpack_require__.n(_document);

// EXTERNAL MODULE: ./node_modules/next/dist/pages/_error.js
var _error = __webpack_require__("/a9y");
var _error_default = /*#__PURE__*/__webpack_require__.n(_error);

// EXTERNAL MODULE: ./node_modules/next/dist/pages/_app.js
var _app = __webpack_require__("B5Ud");
var _app_default = /*#__PURE__*/__webpack_require__.n(_app);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js
var construct = __webpack_require__("pbKT");
var construct_default = /*#__PURE__*/__webpack_require__.n(construct);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./Components/Layout/Layout.js + 1 modules
var Layout = __webpack_require__("oD5A");

// EXTERNAL MODULE: ./Components/skills.scss
var skills = __webpack_require__("3hBj");

// CONCATENATED MODULE: ./pages/skills.js







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["default"])(this).constructor; result = construct_default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !construct_default.a) return false; if (construct_default.a.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(construct_default()(Date, [], function () {})); return true; } catch (e) { return false; } }





var skills_Skills = /*#__PURE__*/function (_Component) {
  Object(inherits["default"])(Skills, _Component);

  var _super = _createSuper(Skills);

  function Skills() {
    Object(classCallCheck["default"])(this, Skills);

    return _super.apply(this, arguments);
  }

  Object(createClass["default"])(Skills, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement(Layout["a" /* default */], null, /*#__PURE__*/react_default.a.createElement("div", {
        className: "contentBody",
        style: {
          textAlign: 'center'
        }
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "jumbotron"
      }, /*#__PURE__*/react_default.a.createElement("h1", {
        style: {
          fontSize: '6.18em'
        },
        className: ""
      }, "Skills"), /*#__PURE__*/react_default.a.createElement("p", {
        className: ""
      }, /*#__PURE__*/react_default.a.createElement("h3", null, "Top 5")), /*#__PURE__*/react_default.a.createElement("hr", {
        className: "my-4"
      }), /*#__PURE__*/react_default.a.createElement("img", {
        title: "javascript",
        style: {
          width: '121.35px',
          height: '121.35px',
          margin: '1.6%'
        },
        src: "/static/js.png",
        alt: "...",
        className: "rounded-circle grow"
      }), /*#__PURE__*/react_default.a.createElement("img", {
        title: "react",
        style: {
          width: '121.35px',
          height: '121.35px',
          margin: '1.6%'
        },
        src: "/static/react.png",
        alt: "...",
        className: "rounded-circle grow"
      }), /*#__PURE__*/react_default.a.createElement("img", {
        title: "node.js",
        style: {
          width: '121.35px',
          height: '121.35px',
          margin: '1.6%'
        },
        src: "/static/node.png",
        alt: "...",
        className: "rounded-circle grow"
      }), /*#__PURE__*/react_default.a.createElement("img", {
        title: "css",
        style: {
          width: '121.35px',
          height: '121.35px',
          margin: '1.6%'
        },
        src: "/static/css.png",
        alt: "...",
        className: "rounded-circle grow"
      }), /*#__PURE__*/react_default.a.createElement("img", {
        title: "html",
        style: {
          width: '121.35px',
          height: '121.35px',
          margin: '1.6%'
        },
        src: "/static/html.png",
        alt: "...",
        className: "rounded-circle grow"
      }))), /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("div", {
        className: "card-deck"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "card tc"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/react_default.a.createElement("h3", {
        className: "card-title"
      }, "Front-End"), /*#__PURE__*/react_default.a.createElement("img", {
        title: "bootstrap ",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/boot.png",
        alt: "...",
        className: "rounded-circle grow"
      }), /*#__PURE__*/react_default.a.createElement("img", {
        title: "html",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/html.png",
        alt: "...",
        className: "rounded-circle grow"
      }), /*#__PURE__*/react_default.a.createElement("img", {
        title: "CSS",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/css.png",
        alt: "...",
        className: "rounded-circle grow"
      }), /*#__PURE__*/react_default.a.createElement("img", {
        title: "javascript",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/js.png",
        alt: "...",
        className: "rounded-circle grow"
      }), /*#__PURE__*/react_default.a.createElement("img", {
        title: "jquery",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/jq.png",
        alt: "...",
        className: "rounded-circle grow"
      }), /*#__PURE__*/react_default.a.createElement("img", {
        title: "sass",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/sass.png",
        alt: "...",
        className: "rounded-circle grow"
      }), /*#__PURE__*/react_default.a.createElement("img", {
        title: "react",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/react.png",
        alt: "...",
        className: "rounded-circle grow"
      }), /*#__PURE__*/react_default.a.createElement("img", {
        title: "redux",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/redux.png",
        alt: "...",
        className: "rounded-circle grow"
      }), /*#__PURE__*/react_default.a.createElement("img", {
        title: "next.js",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/next.png",
        alt: "...",
        className: "rounded-circle grow"
      }), /*#__PURE__*/react_default.a.createElement("img", {
        title: "typescript",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/ts.png",
        alt: "...",
        className: "rounded-circle grow"
      }))), /*#__PURE__*/react_default.a.createElement("div", {
        className: "card tc"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/react_default.a.createElement("h3", {
        className: "card-title"
      }, "Back-End"), /*#__PURE__*/react_default.a.createElement("img", {
        title: "node.js",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/node.png",
        alt: "...",
        className: "rounded-circle grow"
      }), /*#__PURE__*/react_default.a.createElement("img", {
        title: "mysql",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/mysql.png",
        alt: "...",
        className: "rounded-circle grow"
      }), /*#__PURE__*/react_default.a.createElement("img", {
        title: "mongodb",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/mongo.png",
        alt: "...",
        className: "rounded-circle grow"
      }), /*#__PURE__*/react_default.a.createElement("img", {
        title: "python",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/python.jpg",
        alt: "...",
        className: "rounded-circle grow"
      }), /*#__PURE__*/react_default.a.createElement("img", {
        title: "express",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/express.png",
        alt: "...",
        className: "rounded-circle grow"
      }), /*#__PURE__*/react_default.a.createElement("img", {
        title: "postgres",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/postgres.png",
        alt: "...",
        className: "rounded-circle grow"
      }), /*#__PURE__*/react_default.a.createElement("img", {
        title: "redis",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/redis.png",
        alt: "...",
        className: "rounded-circle grow"
      }))), /*#__PURE__*/react_default.a.createElement("div", {
        className: "card tc"
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/react_default.a.createElement("h3", {
        className: "card-title"
      }, "Other"), /*#__PURE__*/react_default.a.createElement("img", {
        title: "git",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/git.png",
        alt: "...",
        className: "rounded-circle grow"
      }), /*#__PURE__*/react_default.a.createElement("img", {
        title: "RESTful",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/rest.jpg",
        alt: "...",
        className: "rounded-circle grow"
      }), /*#__PURE__*/react_default.a.createElement("img", {
        title: "Responsive Design",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/res.png",
        alt: "...",
        className: "rounded-circle grow"
      }), /*#__PURE__*/react_default.a.createElement("img", {
        title: "Unity 3D",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/unity.png",
        alt: "...",
        className: "rounded-circle grow"
      }), /*#__PURE__*/react_default.a.createElement("img", {
        title: "C#",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/c.png",
        alt: "...",
        className: "rounded-circle grow"
      }), /*#__PURE__*/react_default.a.createElement("img", {
        title: "heroku",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/heroku.png",
        alt: "...",
        className: "rounded-circle grow"
      }), /*#__PURE__*/react_default.a.createElement("img", {
        title: "Amazon Web Services",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/aws.png",
        alt: "...",
        className: "rounded-circle grow"
      }), /*#__PURE__*/react_default.a.createElement("img", {
        title: "jest",
        style: {
          width: '46.35px',
          height: '46.35px',
          margin: '1.6%'
        },
        src: "/static/jest.png",
        alt: "...",
        className: "rounded-circle grow"
      }), /*#__PURE__*/react_default.a.createElement("img", {
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
}(react["Component"]);

/* harmony default export */ var pages_skills = (skills_Skills);
// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-serverless-loader.js?page=%2Fskills&absolutePagePath=private-next-pages%2Fskills.js&absoluteAppPath=next%2Fdist%2Fpages%2F_app&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&absoluteErrorPath=next%2Fdist%2Fpages%2F_error&distDir=private-dot-next&assetPrefix=&generateEtags=true&ampBindInitData=false&dynamicBuildId=false
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return next_serverless_loaderpage_2Fskills_absolutePagePath_private_next_pages_2Fskills_js_absoluteAppPath_next_2Fdist_2Fpages_2F_app_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_absoluteErrorPath_next_2Fdist_2Fpages_2F_error_distDir_private_dot_next_assetPrefix_generateEtags_true_ampBindInitData_false_dynamicBuildId_false_render; });

    
    
    
    
    
    
    
    
    
    async function renderReqToHTML(req, res) {
      const options = {
        App: _app_default.a,
        Document: _document_default.a,
        buildManifest: build_manifest,
        reactLoadableManifest: react_loadable_manifest,
        buildId: "tJNMZj8X97EFMpzJQmim6",
        dynamicBuildId: false,
        assetPrefix: "",
        ampBindInitData: false
      }
      const parsedUrl = Object(external_url_["parse"])(req.url, true)
      try {
        
        const result = await Object(server_render["renderToHTML"])(req, res, "/skills", parsedUrl.query, Object.assign(
          {
            Component: pages_skills,
            dataOnly: req.headers && (req.headers.accept || '').indexOf('application/amp.bind+json') !== -1,
          }, 
          options, 
        ))
        return result
      } catch (err) {
        if (err.code === 'ENOENT') {
          res.statusCode = 404
          const result = await Object(server_render["renderToHTML"])(req, res, "/_error", parsedUrl.query, Object.assign({}, options, {
            Component: _error_default.a
          }))
          return result
        } else {
          console.error(err)
          res.statusCode = 500
          const result = await Object(server_render["renderToHTML"])(req, res, "/_error", parsedUrl.query, Object.assign({}, options, {
            Component: _error_default.a,
            err
          }))
          return result
        }
      }
    }
    async function next_serverless_loaderpage_2Fskills_absolutePagePath_private_next_pages_2Fskills_js_absoluteAppPath_next_2Fdist_2Fpages_2F_app_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_absoluteErrorPath_next_2Fdist_2Fpages_2F_error_distDir_private_dot_next_assetPrefix_generateEtags_true_ampBindInitData_false_dynamicBuildId_false_render (req, res) {
      try {
        const html = await renderReqToHTML(req, res)
        Object(send_html["sendHTML"])(req, res, html, {generateEtags: true})
      } catch(err) {
        console.error(err)
        res.statusCode = 500
        res.end('Internal Server Error')
      }
    }
  

/***/ }),

/***/ "qijr":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("czwh");
module.exports = __webpack_require__("WEpk").Reflect.construct;


/***/ }),

/***/ "raTm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("5T2Y");
var $export = __webpack_require__("Y7ZC");
var meta = __webpack_require__("6/1s");
var fails = __webpack_require__("KUxP");
var hide = __webpack_require__("NegM");
var redefineAll = __webpack_require__("XJU/");
var forOf = __webpack_require__("oioR");
var anInstance = __webpack_require__("EXMj");
var isObject = __webpack_require__("93I4");
var setToStringTag = __webpack_require__("RfKB");
var dP = __webpack_require__("2faE").f;
var each = __webpack_require__("V7Et")(0);
var DESCRIPTORS = __webpack_require__("jmDH");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "rr1i":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
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

/***/ "sNwI":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("5K7Z");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "sYn3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__("1KsK"); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


/***/ }),

/***/ "tEej":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("Ojgd");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "ttDY":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("+iuc");

/***/ }),

/***/ "uOPS":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "v6xn":
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__("C2SN");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "vBP9":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("5T2Y");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "viRO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var l=__webpack_require__("MgzW"),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,z=n?Symbol.for("react.memo"):60115,A=n?Symbol.for("react.lazy"):
60116,B="function"===typeof Symbol&&Symbol.iterator;function C(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E={};function F(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(C(85));this.updater.enqueueSetState(this,a,b,"setState")};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function G(){}G.prototype=F.prototype;function H(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D}var I=H.prototype=new G;I.constructor=H;l(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,c){var e,d={},g=null,k=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var h=Array(f),m=0;m<f;m++)h[m]=arguments[m+2];d.children=h}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return{$$typeof:p,type:a,key:g,ref:k,props:d,_owner:J.current}}
function N(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g,Q=[];function R(a,b,c,e){if(Q.length){var d=Q.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return{result:a,keyPrefix:b,func:c,context:e,count:0}}
function S(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>Q.length&&Q.push(a)}
function T(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return c(e,a,""===b?"."+U(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){d=a[k];var f=b+U(d,k);g+=T(d,f,c,e)}else if(null===a||"object"!==typeof a?f=null:(f=B&&a[B]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),k=
0;!(d=a.next()).done;)d=d.value,f=b+U(d,k++),g+=T(d,f,c,e);else if("object"===d)throw c=""+a,Error(C(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function V(a,b,c){return null==a?0:T(a,"",b,c)}function U(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function W(a,b){a.func.call(a.context,b,a.count++)}
function aa(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?X(a,e,c,function(a){return a}):null!=a&&(O(a)&&(a=N(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+c)),e.push(a))}function X(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(P,"$&/")+"/");b=R(b,g,e,d);V(a,aa,b);S(b)}var Y={current:null};function Z(){var a=Y.current;if(null===a)throw Error(C(321));return a}
var ba={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:l};exports.Children={map:function(a,b,c){if(null==a)return a;var e=[];X(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=R(null,null,b,c);V(a,W,b);S(b)},count:function(a){return V(a,function(){return null},null)},toArray:function(a){var b=[];X(a,b,null,function(a){return a});return b},only:function(a){if(!O(a))throw Error(C(143));return a}};
exports.Component=F;exports.Fragment=r;exports.Profiler=u;exports.PureComponent=H;exports.StrictMode=t;exports.Suspense=y;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ba;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(C(267,a));var e=l({},a.props),d=a.key,g=a.ref,k=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,k=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(h in b)K.call(b,h)&&!L.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==f?f[h]:b[h])}var h=arguments.length-2;if(1===h)e.children=c;else if(1<h){f=Array(h);for(var m=0;m<h;m++)f[m]=arguments[m+2];e.children=f}return{$$typeof:p,type:a.type,
key:d,ref:g,props:e,_owner:k}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:x,render:a}};exports.isValidElement=O;
exports.lazy=function(a){return{$$typeof:A,_ctor:a,_status:-1,_result:null}};exports.memo=function(a,b){return{$$typeof:z,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return Z().useCallback(a,b)};exports.useContext=function(a,b){return Z().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return Z().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return Z().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return Z().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return Z().useMemo(a,b)};exports.useReducer=function(a,b,c){return Z().useReducer(a,b,c)};exports.useRef=function(a){return Z().useRef(a)};exports.useState=function(a){return Z().useState(a)};exports.version="16.13.1";


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

/***/ "vwuL":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("NV0k");
var createDesc = __webpack_require__("rr1i");
var toIObject = __webpack_require__("NsO/");
var toPrimitive = __webpack_require__("G8Mo");
var has = __webpack_require__("B+OT");
var IE8_DOM_DEFINE = __webpack_require__("eUtF");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("jmDH") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "w2d+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("hDam");
var step = __webpack_require__("UO39");
var Iterators = __webpack_require__("SBuE");
var toIObject = __webpack_require__("NsO/");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("MPFp")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "w6GO":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("5vMV");
var enumBugKeys = __webpack_require__("FpHa");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "wVpn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getPolyfill = __webpack_require__("WDQk");
var define = __webpack_require__("82c2");

module.exports = function shimObjectIs() {
	var polyfill = getPolyfill();
	define(Object, { is: polyfill }, {
		is: function testObjectIs() {
			return Object.is !== polyfill;
		}
	});
	return polyfill;
};


/***/ }),

/***/ "wYmx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__("eaoh");
var isObject = __webpack_require__("93I4");
var invoke = __webpack_require__("MCSJ");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "wgeU":
/***/ (function(module, exports) {



/***/ }),

/***/ "xQ1C":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("D3zA");

var GetIntrinsic = __webpack_require__("YR0K");

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

module.exports = function callBind() {
	return $reflectApply(bind, $call, arguments);
};

module.exports.apply = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};


/***/ }),

/***/ "xvv9":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__("cHUd")('Set');


/***/ }),

/***/ "yLu3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("VKFn");

/***/ }),

/***/ "zLkG":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("UWiX");


/***/ }),

/***/ "zXhZ":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("5K7Z");
var isObject = __webpack_require__("93I4");
var newPromiseCapability = __webpack_require__("ZW5q");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "zn7N":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("Y7ZC");
var core = __webpack_require__("WEpk");
var fails = __webpack_require__("KUxP");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ })

/******/ });