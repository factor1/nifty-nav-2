(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["niftyNav2"] = factory();
	else
		root["niftyNav2"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/Users/ericstout/Documents/projects/_Factor1/nifty-nav-2/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                    * Nifty Nav 2
                                                                                                                                                                                                                                                                    * A JavaScript menu framework.
                                                                                                                                                                                                                                                                    * Author: Eric Stout, Factor1 Studios
                                                                                                                                                                                                                                                                    * https://github.com/factor1/nifty-nav-2
                                                                                                                                                                                                                                                                  **/

// eslint-disable-next-line


var _niftyNav = __webpack_require__(2);

var _niftyNav2 = _interopRequireDefault(_niftyNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Default Options
 */
var options = {
  icon: 'square', // icon style (square, rounded)
  iconColor: '#fff', // default icon color
  iconColorActive: '#fff', // default active/open icon color
  showMenuText: false, // toggle text next to icon
  menuText: 'Menu', // text to appear when showMenuText is true
  targets: ['niftyNav'], // targets can be an array so you can have multiple instances at a time <div data-nifty-target="niftyNav"></div>
  panelOrigin: 'top', // where the panel will animate or originate from (top/left/right)
  panelTopOffset: 0, // top offset for the panel
  panelPosition: 'absolute', // css position - absolute, relative, fixed, etc...
  panelHeight: 'auto', // panel height
  panelWidth: '100%', // panel width
  panelAnimation: 'slide-in', // type of panel animation (slide-in, fade-in, off)
  panelAnimationSpeed: 500, // speed of panel animation
  showMask: true, // if there should be a mask covering page content,
  maskAnimationSpeed: 600 // speed of the mask animation


  /**
   *
   * Build Icon Structure
   *
  **/
};var buildIcons = function buildIcons(target, options) {

  var icon = '\n    <button class="nifty-icon nifty-icon--' + options.icon + '">\n      <span></span>\n    </button>\n  ';
  target.innerHTML = icon;

  // if we are showing menu text
  if (options.showMenuText === true) {
    target.querySelector('.nifty-icon').classList.add('nifty-icon--has-text');
    target.querySelector('.nifty-icon').innerHTML = '<div class="nifty-icon--text">' + options.menuText + '</div><span></span>';
  }
};

/**
 *
 * Build Panel
 *
**/
var buildPanel = function buildPanel(target, options) {
  // get the panel id from the data attr
  var panelId = target.getAttribute('data-nifty-target');
  var panel = document.getElementById(panelId);

  // Panel Top Offset Setting
  if (options.panelTopOffset !== 0) {
    panel.style.top = options.panelTopOffset + 'px';
  }

  // Panel Origin Setting
  panel.classList.add('nifty-panel--' + options.panelOrigin);

  // Panel Width Setting
  if (options.panelWidth !== '100%') {
    panel.style.width = options.panelWidth;
  }

  // Panel Animation Speed Setting
  panel.style.transition = 'all ' + options.panelAnimationSpeed + 'ms ease-in-out';

  // Set Panel State to Closed
  panel.classList.add('nifty-panel--closed');

  // handle animation options
  if (options.panelAnimation === 'fade-in') {
    panel.classList.add('nifty-panel--fade-in');
  } else if (options.panelAnimation === 'off') {
    panel.classList.add('nifty-panel--off');
  }
};

/**
 *
 * Open/Close Panel
 *
**/
var togglePanel = function togglePanel(panelId) {
  var panel = document.getElementById(panelId);

  panel.classList.toggle('nifty-panel--open');
};

/**
 *
 * Toggle Mask
 *
**/
var toggleMask = function toggleMask() {
  var mask = document.getElementById('niftyMask');

  if (mask.classList.contains('nifty-mask--active')) {
    mask.classList.remove('nifty-mask--active');
    mask.classList.add('nifty-mask--closing');

    setTimeout(function () {
      mask.classList.remove('nifty-mask--closing');
    }, 500);
  } else {
    mask.classList.toggle('nifty-mask--active');
  }
};

/**
 *
 * Add Mask to DOM
 *
**/
var addMask = function addMask() {
  // setup element
  var mask = document.createElement('div');
  mask.setAttribute('id', 'niftyMask');
  mask.setAttribute('class', 'nifty-mask');

  // if animations are disabled set transition to none
  if (options.panelAnimation === 'off') {
    mask.style.transition = 'none';
  } else {
    // set the transition for the mask
    mask.style.transition = 'opacity ' + options.maskAnimationSpeed + 'ms ease-in-out';
  }

  // showMask setting
  if (!options.showMask) {
    mask.style.opacity = 0;
  }

  // add click listener
  mask.addEventListener('click', function () {
    toggleMask();

    // shut down all open nifty nav panels
    var panels = document.querySelectorAll('.nifty-panel');

    for (var i = 0; panels.length > i; i++) {
      panels[i].classList.remove('nifty-panel--open');
    }

    // remove all active icons
    var icons = document.querySelectorAll('.nifty-icon');

    for (var _i = 0; icons.length > _i; _i++) {
      icons[_i].classList.remove('nifty-active');
    }
  });

  return document.body.appendChild(mask);
};

/**
 *
 * Handle click(s) of target listener
 *
**/
var handleTargetClick = function handleTargetClick(e) {
  var panelId = e.target.parentElement.getAttribute('data-nifty-target');
  e.target.classList.toggle('nifty-active');

  togglePanel(panelId);
  toggleMask();
};

/**
 *
 * Initialization of niftyNav2
 *
**/
var init = function init(settings) {
  // quit if browser not supported - TODO: test this actually works.
  // Detect not supported browsers (<=IE9)
  var browserNotSupported = document.all && !window.atob;

  if (browserNotSupported) {
    return console.error('%c [Nifty Nav 2]: Browser not supported. Please upgrade your browser.', 'color: #rgb(232, 141, 57)');
  }

  // get the defaults and user settings
  options = _extends(options, settings);

  // handle click(s) on target
  var clickTargets = document.querySelectorAll('div[data-nifty-target]');

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = clickTargets.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ref = _step.value;

      var _ref2 = _slicedToArray(_ref, 2);

      var i = _ref2[0];
      var target = _ref2[1];

      buildIcons(target, options);
      buildPanel(target, options);
      target.addEventListener('click', function (e) {
        handleTargetClick(e);
      });
    }

    // Add mask (even if false, as its used for click to close)
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  addMask();
};

/**
 *
 * Export Public API
 *
**/
module.exports = {
  init: init,
  togglePanel: togglePanel,
  toggleMask: toggleMask
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=niftyNav2.js.map