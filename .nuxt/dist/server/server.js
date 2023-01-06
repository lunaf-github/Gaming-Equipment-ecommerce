module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/app-card","2":"components/app-cart-display","3":"components/app-cart-steps","4":"components/app-feature-products","5":"components/app-sales-boxes","6":"components/app-store-grid","7":"components/app-textlockup","8":"pages/Accessories","9":"pages/All","10":"pages/Cart","11":"pages/Chairs","12":"pages/Desks","13":"pages/Keyboards","14":"pages/Monitors","15":"pages/MouseDevices","16":"pages/headsets","17":"pages/index","18":"pages/product/_id"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppNav.vue?vue&type=template&id=27f423be&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('header', [_vm._ssrNode("<h1 data-v-27f423be>Gamer's Den</h1> "), _vm._ssrNode("<nav data-v-27f423be>", "</nav>", [_vm._ssrNode("<ul data-v-27f423be>", "</ul>", [_vm._ssrNode("<li data-v-27f423be>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Home")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-27f423be>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/All"
    }
  }, [_vm._v("All")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-27f423be>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/Accessories"
    }
  }, [_vm._v("Accessories")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-27f423be>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/Desks"
    }
  }, [_vm._v("Desks")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-27f423be>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/Chairs"
    }
  }, [_vm._v("Chairs")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-27f423be>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/keyboards"
    }
  }, [_vm._v("Keyboards")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-27f423be>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/MouseDevices"
    }
  }, [_vm._v("Mouse Devices")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-27f423be>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/headsets"
    }
  }, [_vm._v("Headsets")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-27f423be>", "</li>", [_c('nuxt-link', {
    attrs: {
      "to": "/Monitors"
    }
  }, [_vm._v("Monitors")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-27f423be>", "</li>", [_vm._ssrNode((_vm.cartCount > 0 ? "<div class=\"carttotal\" data-v-27f423be>" + _vm._ssrEscape(_vm._s(_vm.cartCount)) + "</div>" : "<!---->") + " "), _c('nuxt-link', {
    attrs: {
      "to": "/Cart"
    }
  }, [_vm._v("Cart")])], 2)], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/AppNav.vue?vue&type=template&id=27f423be&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppNav.vue?vue&type=script&lang=js&

/* harmony default export */ var AppNavvue_type_script_lang_js_ = ({
  computed: {
    ...Object(external_vuex_["mapGetters"])(["cartCount"])
  }
});
// CONCATENATED MODULE: ./components/AppNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AppNavvue_type_script_lang_js_ = (AppNavvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AppNav.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(31)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AppNavvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "27f423be",
  "d4757426"
  
)

/* harmony default export */ var AppNav = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppFooter.vue?vue&type=template&id=7dd9d3a6&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('footer', [_c('app-footer-links'), _vm._ssrNode(" <div class=\"fernstuff\" data-v-7dd9d3a6><p data-v-7dd9d3a6>\n   This project is \n   <a href=\"https://github.com/lunaf-github/Gaming-Equipment-ecommerce\" data-v-7dd9d3a6>open source</a>\n   and was developed by Fernando Luna. \n  </p></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/AppFooter.vue?vue&type=template&id=7dd9d3a6&scoped=true&

// EXTERNAL MODULE: ./components/AppFooterLinks.vue + 4 modules
var AppFooterLinks = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppFooter.vue?vue&type=script&lang=js&

/* harmony default export */ var AppFootervue_type_script_lang_js_ = ({
  components: {
    AppFooterLinks: AppFooterLinks["default"]
  }
});
// CONCATENATED MODULE: ./components/AppFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AppFootervue_type_script_lang_js_ = (AppFootervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AppFooter.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(35)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AppFootervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7dd9d3a6",
  "18420c7e"
  
)

/* harmony default export */ var AppFooter = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AppFooterLinks: __webpack_require__(9).default})


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppFooterLinks.vue?vue&type=template&id=c9b2a5b2&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_vm._ssrNode("<ul data-v-c9b2a5b2><li data-v-c9b2a5b2>About</li> <li data-v-c9b2a5b2>Company</li> <li data-v-c9b2a5b2>Locations</li> <li data-v-c9b2a5b2>Contact</li> <li data-v-c9b2a5b2>Hours</li></ul> <ul data-v-c9b2a5b2><li data-v-c9b2a5b2>Twitter</li> <li data-v-c9b2a5b2>Facebook</li> <li data-v-c9b2a5b2>Instagram</li> <li data-v-c9b2a5b2>LinkedIn</li></ul> <ul data-v-c9b2a5b2><h4 data-v-c9b2a5b2>Newsletter:</h4> <input type=\"text\" data-v-c9b2a5b2></ul>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/AppFooterLinks.vue?vue&type=template&id=c9b2a5b2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppFooterLinks.vue?vue&type=script&lang=js&
/* harmony default export */ var AppFooterLinksvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/AppFooterLinks.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AppFooterLinksvue_type_script_lang_js_ = (AppFooterLinksvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AppFooterLinks.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(33)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AppFooterLinksvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c9b2a5b2",
  "a2432fb0"
  
)

/* harmony default export */ var AppFooterLinks = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(24);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("110c29f4", content, true, context)
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(26);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2c2e3aba", content, true, context)
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(32);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("76d6777f", content, true, context)
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("495ed312", content, true, context)
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("f279c314", content, true, context)
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("d21f6090", content, true, context)
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 20 */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"YG636ec1-edcR-cf2g-9V8c-7ed40255GVX\",\"category\":\"Monitor\",\"name\":\"LG 24GQ50F-B\",\"brand\":\"LG\",\"description\":[\"Designed especially for gaming, this display features a Full HD display for high color reproduction and image quality\",\"High 165-Hertz refresh rate with 1-millisecond Motion Blur Reduction (MBR) is ideal for fast-paced games\",\"AMD FreeSync Premium improves baseline FreeSync technology, with fluid and tear-free gameplay and video with compatible video cards\",\"Customize your settings for different games with the Enhanced Gaming UI. OnScreen Control software allows you to control various display settings with a single mouse click\",\"Three-side, virtually borderless bezel and tilt adjustment is the ideal screen for a desktop setup, or mount with 75 x 75 mm bracket sizing\"],\"starrating\":4,\"price\":189.99,\"img\":\"Monitor4.jpg\"},{\"id\":\"9d436e98-1dc9-4f21-958G-06d4cV235e13\",\"category\":\"Headset\",\"name\":\"BINNUNE Wireless Gaming Headset\",\"brand\":\"BINNUNE\",\"description\":[\"[High Performance 2.4G+Bluetooth 5.0] BINNUNE wireless gaming headset combines high performance 2.4 GHz lossless wireless for Pro-level gaming audio on PlayStation and PC , with the convenience of simultaneous Bluetooth connectivity for most of your mobile devices.\",\"[Hear Every Details] The 50mm driver plus 2.4G lossless wireless emphasizes both subtle and critical in-game background sounds, allowing you to hear very details, so you will never miss a step or shot during game playing.\",\"[Extraordinary Battery Life] Thanks to an impressive 48-hour battery life and fast USB-C charging, the BINNUE gaming headset is your ideal for listening music or playing long session video games throughout the day on a single charge.\",\"[Ultra- Low Latency Wireless Gaming] Features ultra-low latency 2.4GHz lossless wireless for high fidelity audio, the audio latency is less than 38ms which is far more better than Bluetooth 150ms, no audio and video to be out of sync issue, so you can enjoy an immersive lag-free wireless gaming experience.\",\"[Ultra Compatible With Multiple Devices] Your game headset is compatible via 2.4GHz wireless connection on PC, PlayStation; 3.5mm audio jack is compatible with PC, Mac, laptop, PlayStation, Xbox, Nintendo Switch , cell phones and VR. Bluetooth is compatible with most of your Bluetooth enabled devices. (Please check the connectivity guide for compatibility on user manual).\"],\"starrating\":4,\"price\":31.99,\"img\":\"headset1.jpg\"},{\"id\":\"9e436f01-1zv9-452L-9587-76d4c0255e91\",\"category\":\"Mouse\",\"name\":\"Logitech G502 HERO\",\"brand\":\"Logitech\",\"description\":[\"Hero 25K sensor through a software update from G HUB, this upgrade is free to all players: Our most advanced, with 1:1 tracking, 400-plus ips, and 100 - 25,600 max dpi sensitivity plus zero smoothing, filtering, or acceleration\",\"11 customizable buttons and onboard memory: Assign custom commands to the buttons and save up to five ready to play profiles directly to the mouse\",\"Adjustable weight system: Arrange up to five removable 3.6 grams weights inside the mouse for personalized weight and balance tuning\",\"Programmable RGB Lighting and Lightsync technology: Customize lighting from nearly 16.8 million colors to match your team's colors, sport your own or sync colors with other Logitech G gear\",\"Mechanical switch button tensioning: Metal spring tensioning system and pivot hinges are built into left and right gaming mouse buttons for a crisp, clean click feel with rapid click feedback\",\"1 year hardware limited warranty\"],\"starrating\":4,\"price\":33.98,\"img\":\"Mouse1.jpg\"},{\"id\":\"9d436b98-1dc9-4f33-9599-76d4c0255e34\",\"category\":\"Headset\",\"name\":\"HyperX Cloud II\",\"brand\":\"HyperX\",\"description\":[\"15-25kKhz Frequency Response.Headphones fit type:Over-Ear\",\"Designed for comfort: Exceptionally comfortable memory foam ear cushions and padded leatherette headband help keep you focused on gaming\",\"Supreme audio quality: Large 53 millimeter drivers provide high-quality audio. Hear in-game details better and get the in-game advantage on your opponents\",\"7.1 virtual surround sound: Truly immerse yourself in your games with hardware-driven virtual 7.1 surround sound for precisely located audio\",\"Passive noise cancellation: The closed ear cup design blocks out outside distractions to keep you in the game\",\"Built to last: The solid, durable aluminum frame is built to withstand the blows of daily use\",\"Detachable, noise-cancelling microphone: TeamSpeak and Discord certified so you can chat with your friends and your callouts will be heard loud and clear\",\"Compatibility: 7.1 virtual surround sound on PC & Mac. Stereo on PS4, Xbox One, Nintendo Switch, and mobile devices\"],\"starrating\":4.5,\"price\":49.99,\"img\":\"headset2.jpg\"},{\"id\":\"bfa86b1c-9ebf-4555-987f-7b8bf7d27be7\",\"category\":\"Headset\",\"name\":\"SENZER SG500\",\"brand\":\"SENZER\",\"description\":[\"[FOLDABLE & DETACHABLE EAR PADS]: Features flexible headphones with telescopic arms and detachable ear pads. The headphones fold inside the arm, making them perfect for easy storage and travelling and the ear pads are magnetic, allowing them to be conveniently attached and removed, making them easier to clean and maintain compared with other headphones.\",\"[COMFORTABLE LIGHTWEIGHT DESIGN]: Comfortable for kids and adults alike, the detachable memory foam ear cushions are extremely lightweight, allowing for up to 8 hours usage without excess pressure build up, meaning you won't feel any discomfort even after many hours of gaming. The overall weight is only 0.66lb; approximately 40% lighter than standard gaming headsets.\",\"[NOISE CANCELLING ANTI-STATIC MICROPHONE]: The bendable microphone arm can be fixed to any position to ensure the clearest voice pick-up, and filters out surrounding environmental noise and eliminates static. The Senzer SG500 noise cancelling headset with microphone provides real-time in game chat without delay, making it easier to communicate with team-mates, friends and family without unnecessary interruptions.\",\"SURROUND SOUND CAPABLE: Proven to enhance your gaming performance, this surround sound gaming headset gives you crystal clear audio and provides you a truly immersive video game experience. Pick up the direction of gunfire, vehicles and voices more clearly, as well as enjoying a more enhanced audio experience as subtle sounds like footsteps, wind and rain are projected with more clarity and precision.\",\"[PLUG AND PLAY MULTI-PLATFORM COMPATIBILITY]: Works with most modern devices which include a 3.5mm jack like PlayStation 4, Xbox One (Older version requires adaptor), Apple Mac, Laptop, PC & Mobile. No drivers or downloads required, simply Plug & Play, making it the ideal headset for travelling or as a gift, safe in the knowledge it will fit a multitude of devices.\"],\"starrating\":4.5,\"price\":39.99,\"img\":\"headset3.jpg\"},{\"id\":\"eca6b1c7-6b8c-4416-aae0-98cecdc18e92\",\"category\":\"Headset\",\"name\":\"Razer Kraken Gaming Headset\",\"brand\":\"Razer Kraken\",\"description\":[\"Frequency Response 12 Hz – 28 kHz.Headphones fit type:Over-Ear\",\"TheBest-Selling Gaming Peripherals Manufacturer in the US: Source - The NPD Group, Inc. U.S. Retail Tracking Service, Keyboards, Mice, PC Headset/Pc Microphone, Gaming Designed, based on dollar sales, 2017-2021\",\"Immersive, 7.1 Surround Sound for Positional Audio: Outfitted with custom-tuned 50 millimeter drivers, capable of software-enabled surround sound (only available on Windows 10 64-bit)\",\"All-Day Comfort: Oval, cooling gel-infused cushions that prevent overheating and pressure build-up\",\"Retractable Noise Isolating Microphone: An improved cardioid mic reduces background and ambient noises for crystal-clear communication\",\"In-Line Audio Controls: A built-in an analog volume control wheel and mic mute switch\",\"Lightweight and Durable: Made of bauxite aluminum, the Kraken frame is flexible and designed to last\"],\"starrating\":4,\"price\":39.99,\"img\":\"headset4.jpg\"},{\"id\":\"440e2eac-67ed-4407-993a-d9f6b7f15087\",\"category\":\"Headset\",\"name\":\"Logitech G535\",\"brand\":\"Logitech\",\"description\":[\"LIGHTSPEED Wireless: Pro-grade LIGHTSPEED wireless technology provides 33 hours of battery life(1) and up to 12 meters of reliable wireless freedom\",\"Lightweight and Comfortable: At only 236 grams, G535 is smaller and lighter than the G733; reversible suspension headband helps distribute weight and is adjustable for a customized fit\",\"Plug and Play: Optimize your game time with an easy-to-use plug-and-play gaming headset; G535 uses a USB connection compatible with PC and PlayStation gaming devices\",\"On-Ear Controls: Volume roller is located directly on the ear cup, to quickly turn up your game, music or comms; simply flip up microphone to mute and get it out of the way\",\"40 mm Drivers: With 40 mm neodymium drivers, this wireless gaming headset delivers crisp, clear, and deep stereo sound that makes your game come alive\",\"All-Day Comfort: Comfortable soft memory foam ear cups and sports mesh material are great for extended use\",\"PC and Console Compatible: PlayStation 5, PlayStation 4\",\"G535 is Discord Certified to guarantee crystal clear communication performance with amazing audio and voice clarity\"],\"starrating\":4.5,\"price\":79.99,\"img\":\"headset5.jpg\"},{\"id\":\"9d436e91-1dc9-4f2G-9587-76d4c02S1e13\",\"category\":\"Mouse\",\"name\":\"Redragon M612\",\"brand\":\"Redragon\",\"description\":[\"Pentakill, 5 DPI Levels - Geared with 5 redefinable DPI levels (default as: 500/1000/2000/3000/4000), easy to switch between different game needs. Dedicated demand of DPI options between 500-8000 is also available to be processed by software.\",\"Any Button is Reassignable - 11 programmable buttons are all editable with customizable tactical keybinds in whatever game or work you are engaging. 1 rapid fire + 2 side macro buttons offer you a better gaming and working experience.\",\"Comfort Grip with Details - The skin-friendly frosted coating is the main comfort grip of the mouse surface, which offers you the most enjoyable fingerprints-free tactility. The left side equipped with ubber texture strengthen the friction and made the mouse easier to be controlled.\",\"5 Decent Backlit Modes - Turn the backlit on and make some kills in your gaming battlefield. The hyped dynamic RGB backlit vibe will never let you down when decorating your gaming space, it would be better with other Redragon accessories with lights on.\",\"Fatigue Killer with Ergonomic Design - Solid frame with a streamlined and general claw-grip design offers each gamer a satisfying and comfortable gaming experience with less fatigue even though after hours of use.\"],\"starrating\":0,\"price\":17.99,\"img\":\"Mouse2.jpg\"},{\"id\":\"0g536eF81-1WX9-4V31-9533-88d4c1255e01\",\"category\":\"Mouse\",\"name\":\"UtechSmart Venus Pro\",\"brand\":\"UtechSmart\",\"description\":[\"【Extensive Fully Programmable Buttons】16 customizable buttons can improve your gaming skills and performance by complex custom button macro coding of reconfiguration and assignment. The button custom function combines multiple keys into one button that reducing your arsenal of spells (actions) and response time. 12 of 16 thumb grip programmable buttons were designed by different inclination angles to fit for your thumb tip to click.\",\"【Dual Modes with Ultra-Speed Wireless Technology】UtechSmart VENUS Pro RGB Wireless MMO Gaming Mouse is a new revolution of RGB MMO gaming mouse. It has 2.4 GHz data transmission technology with Mini signal receiver(Nano) and stable 1. 5m wire transmission that provides professional-level performance. VENUS Pro overcomes the traditional limitation of wireless latency and connectivity which offers stable and fast data transmission with 10-meter reception boundary. You can take this mouse anywhere!\",\"【Endurable Battery Lifetime】 UtechSmart Venus Pro Wireless RGB MMO gaming mouse has special auto sleeping mode and low power consumption mode or extending the battery life of wireless mode. Large battery (1000mA) capacity which offers to recharge over 300 times and single 2 hours fully charge. The wireless mode lasts up to 70 hours that fulfill your long-time gaming experience. Moreover, UtechSmart actuation software provides battery specify consumption monitoring for you.\",\"【Customizable Mouse High Precision Optical Sensor】Thousands of customers and professional gamers have tested and verified its function. Venus Pro has an UtechSmart custom PixArt PMW3335 ultra-accurate Optical sensor. Up to 16000 DPI with 5 DPI switchable stages and 1000 Hz polling rate that offers you an incomparable MMO and FPS gaming experience. The huge adjustable DPI range from 100-16000 comes with UtechSmart user-friendly software that can perfectly tweak the performance of mouse accuracy.\",\"【Ergonomic Design Ensures Your Comfortable】Great as a real mouse stuck in your hand. The UtechSmart Venus Pro Wireless RGB MMO gaming mouse is flawlessly designed to alleviate wrist fatigue while being able to firmly hold the mouse in your hand. The grinding coating on the mouse surface increases the friction between your hand and the mouse. Grinding coating also provides gamer a extra comfortable sweat-resistant and skin-friendly gaming mouse.\",\"【Amazing RGB Lighting and Reliable Buttons】Fully customize RGB lighting up to 16 Million colors and 4 programmable RGB modes (Steady Respiration Neon and Matte) by UtechSmart software. Software can be easily installed by inserting the drive software card into the USB port of your laptop. It's compatible with Windows98SE/ME/2000/XP/Vista/Win7 Mac10. For the gamer, the switch of a button is applied with a great microswitch which provides 10 million times click duration and without double click problem!\",\"【You are our VIP customer】For each of you who purchased UtechSmart RGB MMO Wireless gaming mouse, we have lifetime product care. If your mouse has any problem, that you will get refund or a new mouse replacement. No any questioning. All you need to do is contact our CS team (Click on the store name). We hope you will have a wonderful shopping experience.\"],\"starrating\":4,\"price\":47.99,\"img\":\"Mouse3.jpg\"},{\"id\":\"9d436e98-1dc9-4f21-9587-76d4c0255e33\",\"category\":\"Mouse\",\"name\":\"Corsair Nightsword\",\"brand\":\"Corsair\",\"description\":[\"Corsair exclusive software automatically detects the center of gravity in real time, allowing you to adjust weight between 119g and 141g and fine tune balance to perfectly fit your grip\",\"A custom PixArt PMW3391 native 18, 000 DPI optical sensor, adjustable in 1 DPI resolution steps, gives you total sensitivity customization and ultra accurate tracking\",\"Built with a comfortable contoured shape that naturally fits your hand, with high-performance rubber grips inspired by Pro sports equipment\",\"Ten fully programmable buttons let you customize your gaming, with the in game advantage of powerful macros and key Remaps\",\"Includes two sets of weights with six mounting locations, Offering 120 different weight and balance configurations for a precisely calibrated gaming experience\"],\"starrating\":4,\"price\":66.7,\"img\":\"Mouse4.jpg\"},{\"id\":\"9d4d6101-1dc0-4fg1-95c7-81d4cY255eWW\",\"category\":\"Keyboard\",\"name\":\"SteelSeries Apex 3 TKL\",\"brand\":\"SteelSeries\",\"description\":[\"The compact tenkeyless design is the most popular form factor used by the pros, allowing you to position the keyboard for comfort and to maximize in-game performance.\",\"Our whisper quiet gaming switches with anti-ghosting technology for keystroke accuracy are made from durable low friction material for near silent use and guaranteed performance for over 20 million keypresses.\",\"Designed with IP32 Water & Dust Resistant for extra durability to prevent damage from liquids and dust particles, so you can continue to play no matter what happens to your keyboard.\",\"PrismSync RGB Illumination allows you to choose from millions of colors and effects from reactive lighting to interactive lightshows that bring RGB to the next level.\",\"Dedicated Multimedia Controls with a clickable volume roller and media keys allowing you to adjust brightness, rewind, skip or pause all at the touch of a button.\"],\"starrating\":4,\"price\":43.1,\"img\":\"Keyboard1.jpg\"},{\"id\":\"9d455e33-1dcv-4f2F-15X7-76GGc0255e76\",\"category\":\"Keyboard\",\"name\":\"Dacoity Gaming Keyboard\",\"brand\":\"Dacoity\",\"description\":[\"【Ergonomic Design with Wrist Rest】This silent keyboard features a scientific stepped keycap design to maximize hand comfort for long hours of gaming or work. It also provides you with an ergonomic typing angle (7°) and wrist support during use. All keys have a soft feel and no loud clicks. It will not affect others when staying up late typing or playing games, it is very suitable for office or games.\",\"【LED Backlit Light Up Keyboard】There are 2 light-up modes and 3 levels of brightness for choice. ☼: Static Backlit/turn off; FN+☼: Dynamic backlight. Fn+PgUp: Adjust the brightness plus; Fn+PgDn: Adjust the brightness reduction. FN+ +/-: Adjust the speed of the dynamic backlight. (Note: the light is not RGB, the light color cannot be changed).\",\"【Durable Metal Panel Keyboard】This rainbow backlit keyboard is designed with an aluminum alloy panel, which not only improves the overall texture of the USB keyboard but also greatly improves the durability and water resistance. The metal frame on the keyboard is also coated with rubber oil, which is skin-friendly and feels more comfortable. At the same time, there are 4 drainage holes at the bottom of the led keyboard, you don't worry about spilled liquids that will damage the computer keyboard.\",\"【Multi-Media & Anti Ghosting】12 multimedia keys for your gaming operation or work efficiency. 19 anti-ghosting keys, every click is never lost, ensuring smooth typing. You can interchange WSAD keys with arrow keys by pressing FN+W and lock/unlock the WIN key by pressing N+WIN. (Note: Multimedia keys are unavailable on Mac)\",\"【Strong Compatibility & Quality Assurance】Constructed with a classic crater structure, this waterproof keyboard can withstand 50 million keystrokes. No matter how long you use it, the laser-engraved letters on the keycaps are durable and never fade. Removable keycaps for quick cleaning without worrying about dust or dirt. It supports Plug & Play and is widely compatible with Windows 95/98/XP/2000/ME/VISTA/7/8/9/10, Mac.\",\"【You are our VIP customer】Dacoity wired keyboard that meets the need of gamers, typists, programmers, and writers, and combines your office and gaming experience. If you have any quality problems, please contact customer service. We offer 180 days refund or replacement and a free-time warranty for the quality problem.\"],\"starrating\":4,\"price\":24.99,\"img\":\"Keyboard2.jpg\"},{\"id\":\"F9c36eb3-1dc9-4f21-z585-7cd4c02SSe09\",\"category\":\"Keyboard\",\"name\":\"Snpurdiri 60\",\"brand\":\"Snpurdiri\",\"description\":[\"【Classic 60% Compact Design】This 60% gaming keyboard has a perfect size and it's good for all environnement, business travel games office home use, without Numpad, more practical for Gamers and Typist, give more space to your desktop.\",\"【Ergonomic Design and Mechanical Feel】The mini gaming keyboard key height is designed according to ergonomics,and it is not easy to fatigue after long-term use. Using advanced imitation mechanical technology, one of the attractive features is the mechanical feeling.It also belongs to a relatively silent membrane gaming keyboard.\",\"【Cool RGB Backlit Effect】The 60% rgb keyboard include 6 backlight effects and 8 backlight color switching. Different RGB setting enriches your typing time. Lighting speed and level can also be adjusted according to your need.Now,Key cap upgraded to double - color injection molding, character transparent luminous.\",\"【Simple Elegant Personality】For some small keyboard, if you are tired of monotones, you can choose this elegant and mature black and white matching classic style. In addition,detachable cable makes this portable gaming keboard connecting simple and easy to carry. USB Type-C connection also provide more stable transmission.\",\"【After-sales Guarantee】We maintain continuous improvement of product quality.For example, the Snpurdiri 60 keyboard is upgraded to two-color injection molding, and the character is transparent.We make every effort to ensure the quality of Snpurdiri 60 keyboard.Your satisfaction and happiness will be our motivation and direction to pursue continuous product upgrades!\"],\"starrating\":4,\"price\":28.99,\"img\":\"Keyboard3.jpg\"},{\"id\":\"9W436e96-0dDa-zE2L-9S85-16FccO2S3e22\",\"category\":\"Keyboard\",\"name\":\"Razer Huntsman Mini\",\"brand\":\"Razer\",\"description\":[\"Faster Than Legacy Mechanical Switches: Razer Optical switches use light-based actuation, registering key presses at the speed of light (30% shorter actuation distance than other clicky switches at 1.5 mm) with satisfying, clicky feedback\",\"Ultimate Personalization & Gaming Immersion with Razer Chroma: Fully syncs with popular games, Razer hardware, Philips Hue, and gear from 30plus partners; supports 16.8 million colors on individually backlit keys\",\"Quality, Aluminum Construction: Covered with a matte, aluminum top frame for increased structural integrity\",\"Oil-Resistant Doubleshot PBT Keycaps: Made of textured, high-grade PBT for a more durable and textured finish less prone to long-term grime buildup\",\"Fully Programmable Macros: Razer Hypershift allows for all keys and keypress combinations to be remapped to execute complex commands. Gaming mode option\"],\"starrating\":5,\"price\":79.99,\"img\":\"Keyboard4.jpg\"},{\"id\":\"E9436e98-1dE9-4B2P-988O-76Y4M0238eE6\",\"category\":\"Monitor\",\"name\":\"GTEK 165Hz Gaming Monitor\",\"brand\":\"GTEK\",\"description\":[\"ESPORT DISPLAY: 24 inch Full HD 1920 x 1080 @ 165Hz (supports 144Hz) refresh rate and 1ms response time defeats ghosting and provides an immersive gaming experience at the highest tier in FPS and other real-time games\",\"ULTRA-FAST: Our ultra fast screens eliminate image tearing, smearing and motion blur to create advantages for all gamers and allows for perfectly smooth game or picture motion; creating advantages for split second decisions when gaming\",\"FRAMELESS DESIGN: Fiercely designed and constructed for the perfect gaming platform with less wasted room from your monitor. With the ultra-thin bezel design, multi-monitor setups are seamless and connected\",\"FLEXIBLE CONNECTIVITY: The broad range of available connections for the gaming monitor is DisplayPort, HDMI. The wide range of connectivity allow for laptops, computers and gaming consoles to easily connect\",\"FREE-SYNC: Free Sync technology provides variable refresh rates that decreases lag and motion blur to create a stutter and tear free advantage in first person shooters, racers and real-time strategy games\"],\"starrating\":4,\"price\":139.87,\"img\":\"Monitor1.jpg\"},{\"id\":\"Yd636ec1-edcR-cf2g-9D87-7ed402553ct\",\"category\":\"Monitor\",\"name\":\"Sceptre 30-inch Curved Gaming Monitor\",\"brand\":\"Sceptre\",\"description\":[\"30\\\" Curved Gaming Monitor 2560 x 1080 Full HD Resolution. Response Time- 5ms GTG.Aspect Ratio: 21:9. Viewing Angle is 170° (H) / 170° (V). Brightness(typ) is 250. Without Stand (W x H x D)-27.82 x 12.64 x 3.69 inches\",\"DP Up to 200Hz Refresh Rate / HDMI 2. 0 Up to 120Hz Refresh Rate: More than double the standard refresh rate, 200Hz gives gamers an edge in visibility as frames transition instantly, leaving behind no blurred images\",\"AMD Free Sync With Free Sync, gamers now enjoy smooth video and seamless on the spot movement through their fast paced games. Free Sync is an AMD technology that nearly eliminates tearing and stuttering due to differences between a graphics card's frame rate and a monitor's refresh rate.\",\"FPS-RTS FPS and RTS are Scepter's custom set display settings built for an enhanced gaming experience. FPS (First Person Shooter) , RTS (Real-Time Strategy).\",\"Blue Light Shift Reduce your monitors blue light to protect you from eye fatigue, irritation and strains. This enables you to work on you documents, watch movies, or play games more comfortably for extended periods\",\"Gaming LED Light\",\"VESA Wall Mount Pattern Using the VESA wall mount pattern, easily mount your Scepter LED monitor on the wall in a manner that is both aesthetically pleasing and conveniently practical. You will be able to save ample space and view the screen in a position that affords the greatest visibility possible.\"],\"starrating\":4,\"price\":289,\"img\":\"Monitor2.jpg\"},{\"id\":\"Yd636ec1-edvR-cf2g-0D87-7ed402553Dt\",\"category\":\"Monitor\",\"name\":\"SAMSUNG 32” Odyssey G5\",\"brand\":\"Samsung\",\"description\":[\"UNMATCHED IMMERSION: Get your head in the game with Odyssey’s 1000R curved panel, which matches the curvature of the human eye for maximum immersion and minimal eye strain\",\"STUNNING WQHD: Your gaming world, now astoundingly lifelike; Packing in 1.7 times the pixel density of Full HD, WQHD resolution boasts incredibly detailed, pin-sharp images; Experience a fuller view with more space to take in the action\",\"EXPRESS 144hz REFRESH RATE: Get more than double your potential frame production with the Odyssey G5; With a 144hz super smooth refresh rate, you’ll never want to go back to a traditional screen\",\"LIGHTNING FAST 1ms RESPONSE TIMES: A fraction of a second can be the difference between your destruction or your enemy’s; With Odyssey’s grey to grey 1ms response time, you can be sure that you’re receiving information as fast as technologically possible\",\"AMD FREESYNC PREMIUM: Features adaptive sync technology which reduces screen tearing, stutter, and input latency; Low framerate compensation ensures every scene flows seamlessly\",\"AWE-INSPIRING GRAPHICS WITH HDR10: A kaleidoscope of shades brings game scenes to life more vibrantly than ever before; Uncover the secrets hiding in the shadows with deep dark blacks, luminous whites, and outstandingly detailed resolution\"],\"starrating\":5,\"price\":299,\"img\":\"Monitor3.jpg\"},{\"id\":\"YG636ec1-edcR-cf2g-9D87-7ed40255cVY\",\"category\":\"Desk\",\"name\":\"MOTPK Gaming Desk\",\"brand\":\"MOTPK\",\"description\":[\"Large Monitor Shelf: We developed this MOTPK small corner desk with a large monitor shelf that holds up to 40LBs (about one monitor arm + two 24-inch monitors + one PS5), 29.5\\\" to 36.7\\\" height, provides a more ergonomic gaming experience.\",\"Unique LED Strips Lights: MOTPK developed high-quality LED Strips to bring gamers the best gaming experience: multi-color, multi-mode, and anti-fire.\",\"Power Outlets: MOTPK corner gaming desk includes a built-in socket with 2-Outlets & 2 USB Ports to charge your devices.\",\"Small L Shaped Design: MOTPK L-shaped gaming desks are specially designed for Gamers and dedicated to providing a superior gaming experience. This small L-shaped design can perfectly fit a corner, save space, and give an ergonomic gaming experience to each gamer.\",\"STURDY & STEADY: The MOTPK gaming table utilizes an ultra-stable updated Z-shaped leg design and qualified table board to meet any serious gamer's demands. The Sturdy table top is supported by a solid steel frame featuring up to 221lbs of load-bearing capacity. Adjustable leg pads ensure the table keeps a sturdy construction even on uneven ground without wobbling.\"],\"starrating\":4,\"price\":239.99,\"img\":\"Desk1.jpg\"},{\"id\":\"1G636ecW-ePcR-cfcg-9D87-7edC0255c32\",\"category\":\"Desk\",\"name\":\"VITESSE Gaming Desk 63 Inch\",\"brand\":\"VITESSE\",\"description\":[\"【STURDY & STEADY】 –Sturdy PVC tabletops are supported by a solid steel frame. Up to 260 pounds of load-bearing capacity, T-shaped legs design for more stable support.\",\"【OVERSIZED DESKTOP WITH MOUSE PAD 】–63“ W*29.5” D carbon fiber desktop, the large PVC laminated surface and mouse pad provides massive space for your gaming monitors, PC, gaming keyboards and other gaming gear.\",\"【CONVENIENT CHARGING PORT】– Smart USB gaming handle rack with four charging port, allow you charging your phone, ipad or headphone, while you working or gaming.\",\"【MULTI-FUNCTIONS FOR GAMER】–Coming with a USB gaming handle rack,  storage tray, cable grommets, cup holder, headphone hook holder. These Professional equipments provide better gaming experience.\",\"【1 YEAR WORRY-FREE】–Free replacement or parts for any quality problem within 1 year. Just feel free to contact our staff if you have any issues with this product.\"],\"starrating\":5,\"price\":139.99,\"img\":\"Desk2.jpg\"},{\"id\":\"bG63cecM-edcR-cfcg-9DG7-7edC0255cV1\",\"category\":\"Desk\",\"name\":\"EUREKA ERGONOMIC Gaming Desk with Led Lights\",\"brand\":\"EUREKA ERGONOMIC\",\"description\":[\"Large Desk Surface: Wing-shaped Gaming desk measures 72\\\" wide by 24\\\" deep, supports up to 400 LBS. Ergonomic Desktop provides flexible room for your abdomen and arms, designed for the people who sit for a long time. Large gaming desktop with smooth carbon fiber texture easily hold gaming gears, music studio or live streaming devices.\",\"Fully Functional: Gaming desk comes with 2 monitor shelves with RGB lights for PC gamers and streaming. 2 iPad grooves to place the mobile phones and tablets. 2 cable management holes and 2 power socket holders keep your field tidy. A cup holder and a dual headphone holder on both sides of the desktop. You will have the perfect battle station to destroy your competition.\",\"Safe and Reliable: EUREKA desk complies with all California toxic substances regulations including formaldehyde, heavy metals and other strict inspections. For the safety of your children and pets, each board comes with a certificate of origin which meets the felling standards and is only listed after passing tens of thousands of beat tests.\",\"Customer Satisfaction: We have been devoted to designing and manufacturing the best desks offering excellent customer experience. Therefore, we pay much attention to customers need and we take pride in our innovative design, rigorous testing, and world class manufacturing process. Our local customer support team is always there to offer timely help.\"],\"starrating\":5,\"price\":379.99,\"img\":\"Desk3.jpg\"},{\"id\":\"YG636ec1-eTcR-cfcg-9D87-7edC0G55x11\",\"category\":\"Chair\",\"name\":\"Goplus Massage Gaming Chair\",\"brand\":\"Goplus\",\"description\":[\"【Massage Function to Relax Your Body】Our massage gaming chair with 4 massage spots, 2 on back and 2 on lumbar, can help to relax your body and loosen up your back and waist muscles. In addition, this massage chair features 8 massage modes, as well as adjustable massage strength, positions and time, to meet your different needs.\",\"【Adjustable Backrest & Footrest】This gaming chair is equipped with adjustable backrest and footrest. You can easily change the angle of backrest between 90-140°. Besides, the ergonomic design perfectly fits the curvature of human’s back. It is worth mentioning that the backrest and footrest can be adjust independently.\",\"【High Quality & Comfortable Material】On the one hand, covered with environmental friendly PU leather, the office chair is not only skin-friendly and easy to clean, but also breathable and water resistant. On the other hand, padded with high-density thicker sponge, it is highly resilient and more comfortable.\",\"【Humanized & User-friendly Design】The attached side pouch, measuring 7.5” X 7.5”, allows you to store the controller and your handy stuffs like phone. And the cup holder built in left armrest is more convenient to for you to place your cups so that you don't need to get up to get your water cups. As well as the headrest pillow offers extra comfort for you.\",\"【Stable and Sturdy Structure】Constructed by iron round base, the massage gaming chair is stable and sturdy. It has the maximum bearing capacity of 264.5 lbs. Other than that, the seat can swivel 360˚ so that you can switch directions freely and chat with friends.\"],\"starrating\":4,\"price\":299.99,\"img\":\"Chair1.jpg\"},{\"id\":\"YG636ec2-FTcC-1fcg-1DB7-7edC0G55x19\",\"category\":\"Chair\",\"name\":\"Homall Gaming Chair\",\"brand\":\"Homall\",\"description\":[\"[Designed for Comfort] Homall gaming chair is made of high quality materials: The soft cushion is made of high-density sponge, and the entire seat is wrapped in elastic pu leather. The back of the chair provides multi-point support, matched with the headrest and massage lumbar support, which will relax your tired waist energetically. The retractable footrest can be adjusted at will.\",\"[Modern Collocation] The gaming chair adopts ergonomic design, it can make your body fit the seat to the greatest extent, and achieve the effect of relaxing the whole body; In the design of color matching, the main color of the chair is black, you can choose the color you like from 6 different colors.\",\"[Stable & Robust Architecture] The entire gaming chair uses a steel frame as the main structure, the seat back and seat cushion are connected by back steel plate,this connection method is not only strong, but also keeps the stability of the seat back, the textured metal feet can rotate 360 degrees.\",\"[Adjust at Will] The adjustment range of the seat height is 14.3 inch to 17.5 inch, the adjustment range of the seat back angle is from 90 degrees to 160 degrees, both adjustable wrenches are located on the right side of the chassis, you only need to be slightly sideways to adjust the chair easily.\",\"[Easy to Install & Customer Service] The overall design of the gaming chair focuses on the simplest installation method for customers to experience. If you have any questions, please feel free to contact us.\"],\"starrating\":4,\"price\":119.99,\"img\":\"Chair2.jpg\"},{\"id\":\"YG636ec1-eTc1-cfcg-9D87-73dC0G55x1B\",\"category\":\"Chair\",\"name\":\"Fantasylab Big and Tall Gaming Chair\",\"brand\":\"Fantasylab\",\"description\":[\"FULLY ADJUSTABLE ARMRESTS & BACK -- You can adjust every single part of this racing gaming chair to perfectly fit the type and height of your body. The height of the racing chair, the tilt of the backrest (90°~155°), the tilt tension（loose/tight）, 3D armrests, all of these practical mechanisms are very easy to adjust to meet your needs\",\"PREMIUM QUALITY RECLINING GAMING CHAIR - Durable leather cover executive chair, integrated metal frame, explosion-proof gas lift, heavy duty metal gaming chair base with smooth-rolling casters make it a superb stable and comfy chair for gaming or office work (Maximum weight capacity: 400 LB)\",\"BIG AND TALL COMPUTER GAME CHAIR WITH MASSAGE - This large gaming chair with massage including grand seat and high back, ergonomic design of the high back computer gamer chair will properly support your spine, which is a big man friendly XL gamer chair with massage\",\"EXTRA LARGE GAMING CHAIR for HEAVY PEOPLE -- The overall dimensions of the computer chair are 27.6\\\" x 26.4\\\"x 51.2\\\"- 53.5\\\" inches. The seating area is 21.7\\\" x 20.5\\\" inches, and the high backrest is 23.4\\\" x 33.5\\\" inches large. This pc gaming chair will perfectly fit your office desk and in front of your computer and consoles\",\"EXCELLENT AFTER-SALES SERVICE -- 1 year warranty on parts. Any dissatisfaction with our ergonomic gaming chair or service, please feel free to contact us. Our customer service team is always there for you\"],\"starrating\":4,\"price\":229.99,\"img\":\"Chair3.jpg\"},{\"id\":\"YG636ec1-eTcR-cfVg-1D8a-73dC0G55xc5\",\"category\":\"Accessory\",\"name\":\"Everlasting Comfort Foot Rest\",\"brand\":\"Everlasting\",\"description\":[\"Effective Pain Relief for Those Who Sit for Hours: Our under desk footrest takes ergonomics to your work and play. By elevating your legs, it puts hips and knees on the same plane, lessening pressure on joints and muscles so you feel better all over. You’ll enjoy uninterrupted comfort during your entire 8 hour workday or while gaming with no annoying pins and needles to numb your brain or poke holes in your strategy\",\"Velvety Soft Washable Cover: The plush cover feels heavenly against bare feet. But if you like to use our computer foot rest under desk with your shoes on and end up leaving dirt behind, no worries. Unzip the cover and toss it into the washing machine and dryer\",\"Unique Teardrop Design: Unlike the fussy 2 piece footrests, our office foot rest is a simple, 1 piece design that accommodates most any leg length. The unique graduated teardrop shape encourages a natural sitting posture no matter your stature, enhances ergonomics, and contours to the curves of your feet arches. Just put it on the floor and it’s ready to deliver instant comfort\",\"Raise Your Feet if You Want Good Sitting Posture: When legs are flat on the floor, they create strain on hips and back. The foot stool under desk lifts legs a few inches from the floor yet makes a world of difference in posture, comfort and circulation\",\"Heat Responsive Technology: Made with 100 percent pure memory foam, the desk foot rest adapts to the shape of your feet and arches so you can really relax into it. Unlike hard wooden rests and stiff pads, it yields gently under your weight to support and cushion at the same time. Slowly springs back to its original shape after each use for lasting comfort\",\"Rock and Roll: Flip our 2 in 1 under desk foot rest and you have a rocking exerciser to energize your legs. The back and forth motion increases circulation, relieves ankle stiffness and refreshes tired feet. So when you stand up, you’re ready to roll\",\"Made with Certified Safe Materials: In our commitment to providing you with the highest quality items, our footrest for under desk has been tested by OEKO-TEX to earn the coveted STANDARD 100 label meaning every component is certified safe and harmless for human health\"],\"starrating\":4,\"price\":37.99,\"img\":\"Accessory1.jpg\"},{\"id\":\"YG636ec1-e6c9-c1VB-1D3a-73dCOG55xc8\",\"category\":\"Accessory\",\"name\":\"WILLED Under Monitor Light Bar\",\"brand\":\"Willed\",\"description\":[\"Dynamic Rainbow Effect & Dimmable -- The gaming light bar with RGBIC have 351 dynamics modes and 15 static color modes, including colors jump, colors fade and dream color rainbow effect etc. Brightness is also adjustable, you can choose your favorite color mode and brightness to decorate your desk stand when you palying games or watching movie.\",\"Memory Function & USB Powered-- Choose one of your favorite mode to decor your PC, the gaming lights can remember your last used brightness and lighting mode, no need to reset it every time. The ambient backlights with 5V USB port fits to any pc.\",\"Space-Saving & Black Aluminum Body -- Use strong adhesive tape with your led gaming lights, can stick it under your desk stand or behind your monitor as ambient lighting, save your desk space. With black aluminum outer case have good heat dissipation, cool for your desk setup.\",\"Remote Control & Easy Operation -- Have 2 methods to control the under monitor light bar. You can use the switch on the light to control on/off and change mode. Also can use the wireless remote controller to change the Color, Mode, Speed and Brightness. One remote can control several monitor light bars in the same time.\",\"Easy Installation -- It’s easy to install the RGBIC lights for gaming room, use with the provided strong adhesive tape stick it to anywhere you want, no need to worry about the falling. And the tape is easy to remove no remains. Noted: if you have any inquiries please contact us first, we are always here to solve any problems for you.\"],\"starrating\":4,\"price\":17.99,\"img\":\"Accessory2.jpg\"},{\"id\":\"YG636ec1-eTc1-cfVG-2D8a-73dC065Sxc7\",\"category\":\"Accessory\",\"name\":\"KAFRI RGB Headphone Stand\",\"brand\":\"KAFRI\",\"description\":[\"【RGB LED lights】KAFRI RBG Headphone Stand can display 9 lighting effects modes, up to 16.8 million colors to creat an amazing gaming atmosphere at your preference. that can be selected merely by pressing a Touch switch. Great gifts for Son, boy, Men, husband and boyfriend.\",\"【10W Qi Wireless Charger】Say goodbye to tangled wires and messing cables, just place your phone on fast charger pad. no cables or USB interface required. Charger compatible with Apple iPhone XS Max,XR,XS, X, iPhone 8/8 Plus, Samsung Galaxy S9/S9 Plus, Note 8, S8/S8 Plus, and other Qi-enabled cell phones.(Metal attachments or credit cards will interfere with charging.)\",\"【Intelligently Identify Charge Models】 Fast wireless charge up to 10W compatible with Samsung Galaxy S10,S10 Plus, S10E, S9, S9 Plus, S8, S8 Plus, Note 9, Note 8, S7, S7 edge, S6 edge+, 7.5W qi wireless charging for iPhone 11/11 Pro Max X/ XS/ XS Max/ XR/ 8/ 8 Plus ( Note: QC2.0/3.0 adapter needed for fast charge) and 5W standard wireless charge for All Qi-enabled phones.\",\"【Safe Guard】Fire-resistant and hardened plastic outer shell for durability, no risk of wood flammable and metal leakage,build-in premium circuitry and microchip, ensure device safety.Multi-protection system shields everything from overload, short-circuits, over-current and other charging issues.\",\"【What You Get】KAFRI Headphone dock / Wireless Charging Pad, 5ft / 1.5m USB Cord , If there is any quality issue for this headphone rack or you are not happy with your purchase, please do not hesitate to contact us.\"],\"starrating\":5,\"price\":20.99,\"img\":\"Accessory3.jpg\"},{\"id\":\"YG636ec1-eTcR-cfVg-1D81-73dC0G55xB3\",\"category\":\"Accessory\",\"name\":\"Cup holder\",\"brand\":\"Cup-Holster\",\"description\":[\"Strong Grip: High tension provides strength for even large drinks. Attaches to surfaces up to 1.75\\\" thick with cap or 2\\\" thick with cap removed.\",\"Scratch free: polyethylene screw caps won't scratch surfaces.\",\"Uses: Perfect for hot or cold drinks, mobile phones, small flower pots, virtually any small item you want out of the way. Attaches to a variety of surfaces\",\"Size: 4 x 3.5 x 4 inches. Weight: 8 ounces. Will hold items up to a 3.4 inch diameter. Fits most glasses, cans, cups, large to go cups, tumblers, thermoses and bottles.\",\"Quality: We're an American family owned company. Each cup holder is proudly made in the USA! Customer satisfaction is important to us!\"],\"starrating\":4,\"price\":14.97,\"img\":\"Accessory4.jpg\"}]");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(22);
module.exports = __webpack_require__(40);


/***/ }),
/* 22 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n.__nuxt-error-page {\n  padding: 1rem;\n  background: #F7F8FB;\n  color: #47494E;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-family: sans-serif;\n  font-weight: 100 !important;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  -webkit-font-smoothing: antialiased;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.__nuxt-error-page .error {\n  max-width: 450px;\n}\n.__nuxt-error-page .title {\n  font-size: 1.5rem;\n  margin-top: 15px;\n  color: #47494E;\n  margin-bottom: 8px;\n}\n.__nuxt-error-page .description {\n  color: #7F828B;\n  line-height: 21px;\n  margin-bottom: 10px;\n}\n.__nuxt-error-page a {\n  color: #7F828B !important;\n  text-decoration: none;\n}\n.__nuxt-error-page .logo {\n  position: fixed;\n  left: 12px;\n  bottom: 12px;\n}\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_33856d5f_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n.nuxt-progress {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 2px;\n  width: 0%;\n  opacity: 1;\n  transition: width 0.1s, opacity 0.4s;\n  background-color: black;\n  z-index: 999999;\n}\n.nuxt-progress.nuxt-progress-notransition {\n  transition: none;\n}\n.nuxt-progress-failed {\n  background-color: red;\n}\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(28);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("2b97fb6a", content, true)

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(30);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("70f4beca", content, true)

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body{border:10px solid #ccc;background-color:#000;min-height:100vh;font-family:\"Montserrat\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;font-size:16px;line-height:1.4;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box;color:#fff}h1,h2,h3{font-family:\"PT Serif\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;font-weight:normal}h1{font-size:40px}p{margin:20px 0}*,*:before,*:after{box-sizing:border-box;margin:0}a,a:active,a:visited{color:#d96528;text-decoration:none;transition:.3s all ease}button.purchase{background:#d96528;color:#fff;font-size:16px;border:none}button.purchase:hover{background:#c14103}button{border:1px solid #ccc;background:#000;padding:10px 14px;cursor:pointer;color:#fff;font-weight:700;font-family:\"Montserrat\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;transition:.3s all ease}button:hover{background:#c14103;border:1px solid #000;color:#fff}button.pay-with-stripe{background:#000;color:#fff;font-size:16px;border:none}button.pay-with-stripe:hover{background:#c14103}button.pay-with-stripe:disabled{background:#999}.price{color:#d96528;font-size:20px;margin:5px 0;font-weight:normal;font-family:\"PT Serif\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif}hr{border-top:1px solid #eee;margin:30px 0}label{font-weight:600;text-transform:uppercase;font-size:14px;letter-spacing:.1em;margin-top:20px;display:inline-block}input{font-family:\"Montserrat\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;font-size:16px;padding:5px 10px}.center{text-align:center}.storegrid{width:95%;display:grid;grid-template-columns:3fr 1fr;grid-template-rows:1fr;grid-column-gap:40px;grid-row-gap:0px}aside{float:left;width:19.1489%}.content{float:right;width:79.7872%;display:grid;grid-template-columns:repeat(3, 1fr);grid-gap:10px;padding:0 !important}@media(max-width: 600px){aside{width:100% !important;margin-bottom:10px !important}.content{width:100% !important;grid-template-columns:1fr !important}}@media(min-width: 601px)and (max-width: 900px){.content{grid-template-columns:repeat(2, 1fr) !important}}@media screen and (max-width: 550px){.storegrid{width:90%;display:table}.special-sales{display:table-header-group;position:absolute;top:0px;height:auto}}.items-leave-active{transition:opacity .2s ease-out,scale .2s ease-out}.items-move{transition:opacity .2s ease-out,scale .2s ease-out}.items-enter-active{transition:opacity .2s ease-out,scale .2s ease-out}.items-enter,.items-leave-to{opacity:0;transform:scale(0.9);transform-origin:50% 50%}input[type=range].slider{-webkit-appearance:none;width:100%;margin:25px 0 5px;background-color:#000}input[type=range].slider:focus{outline:none}input[type=range].slider::-webkit-slider-runnable-track{width:100%;height:4.3px;cursor:pointer;box-shadow:0px 0px 0px rgba(0,0,0,0),0px 0px 0px rgba(13,13,13,0);background:#d96528;border-radius:13.7px;border:0px solid rgba(1,1,1,0)}input[type=range].slider::-webkit-slider-thumb{box-shadow:0px 0px 0px rgba(0,0,62,0),0px 0px 0px rgba(0,0,88,0);border:1.9px solid #d96528;height:17px;width:17px;border-radius:31px;background:#fff;cursor:pointer;-webkit-appearance:none;margin-top:-6.35px}input[type=range].slider:focus::-webkit-slider-runnable-track{background:#d96528}input[type=range].slider::-moz-range-track{width:100%;height:4.3px;cursor:pointer;box-shadow:0px 0px 0px rgba(0,0,0,0),0px 0px 0px rgba(13,13,13,0);background:#d96528;border-radius:13.7px;border:0px solid rgba(1,1,1,0)}input[type=range].slider::-moz-range-thumb{box-shadow:0px 0px 0px rgba(0,0,62,0),0px 0px 0px rgba(0,0,88,0);border:1.9px solid #d96528;height:17px;width:17px;border-radius:31px;background:#fff;cursor:pointer}input[type=range].slider::-ms-track{width:100%;height:4.3px;cursor:pointer;background:rgba(0,0,0,0);border-color:rgba(0,0,0,0);color:rgba(0,0,0,0)}input[type=range].slider::-ms-fill-lower{background:#d96528;border:0px solid rgba(1,1,1,0);border-radius:27.4px;box-shadow:0px 0px 0px rgba(0,0,0,0),0px 0px 0px rgba(13,13,13,0)}input[type=range].slider::-ms-fill-upper{background:#d96528;border:0px solid rgba(1,1,1,0);border-radius:27.4px;box-shadow:0px 0px 0px rgba(0,0,0,0),0px 0px 0px rgba(13,13,13,0)}input[type=range].slider::-ms-thumb{box-shadow:0px 0px 0px rgba(0,0,62,0),0px 0px 0px rgba(0,0,88,0);border:1.9px solid #d96528;height:17px;width:17px;border-radius:31px;background:#fff;cursor:pointer;height:4.3px}input[type=range].slider:focus::-ms-fill-lower{background:#d96528}input[type=range].slider:focus::-ms-fill-upper{background:#d96528}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNav_vue_vue_type_style_index_0_id_27f423be_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNav_vue_vue_type_style_index_0_id_27f423be_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNav_vue_vue_type_style_index_0_id_27f423be_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNav_vue_vue_type_style_index_0_id_27f423be_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNav_vue_vue_type_style_index_0_id_27f423be_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "header[data-v-27f423be]{display:flex;justify-content:center;flex-direction:column;padding:40px 40px 0}nav[data-v-27f423be]{display:flex;width:80vw;margin-top:30px;justify-content:center;align-items:center;padding:8px 0}nav ul[data-v-27f423be]{padding-left:0}nav ul li[data-v-27f423be]{display:inline;margin-left:1vw;text-transform:uppercase;letter-spacing:.1em;font-size:.9em;position:relative}nav ul li a[data-v-27f423be]{color:#fff;font-weight:bold}nav ul li a[data-v-27f423be]:hover{color:#c14103}.carttotal[data-v-27f423be]{position:absolute;border-radius:100%;background-color:#000;color:#fff;font-size:10px;top:-23px;right:-15px;width:6px;height:14px;padding:6px 10px;font-size:10px;font-weight:bold;text-align:center}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooterLinks_vue_vue_type_style_index_0_id_c9b2a5b2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooterLinks_vue_vue_type_style_index_0_id_c9b2a5b2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooterLinks_vue_vue_type_style_index_0_id_c9b2a5b2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooterLinks_vue_vue_type_style_index_0_id_c9b2a5b2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooterLinks_vue_vue_type_style_index_0_id_c9b2a5b2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "section[data-v-c9b2a5b2]{width:80%;margin-left:10%;padding:40px 0;display:grid;grid-template-columns:repeat(3, 1fr)}ul[data-v-c9b2a5b2]{list-style:none;padding-left:0}input[data-v-c9b2a5b2]{width:100%}@media screen and (min-width: 850px){section[data-v-c9b2a5b2]{padding:40px !important}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_id_7dd9d3a6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_id_7dd9d3a6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_id_7dd9d3a6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_id_7dd9d3a6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_id_7dd9d3a6_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".fernstuff[data-v-7dd9d3a6]{background:#000;width:100%;padding:10px 30px;color:#fff;text-align:center}a[data-v-7dd9d3a6],a[data-v-7dd9d3a6]:active,a[data-v-7dd9d3a6]:visited{color:#c4c3ec;font-weight:bold}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_04f17bfa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_04f17bfa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_04f17bfa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_04f17bfa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_04f17bfa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\nbody[data-v-04f17bfa] {\n  border: 10px solid #ccc;\n  min-height: 100vh;\n  font-family: \"Montserrat\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\n    Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  font-size: 16px;\n  line-height: 1.4;\n  word-spacing: 1px;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  box-sizing: border-box;\n}\n*[data-v-04f17bfa],\n*[data-v-04f17bfa]:before,\n*[data-v-04f17bfa]:after {\n  box-sizing: border-box;\n  margin: 0;\n}\nmain[data-v-04f17bfa] {\n\n  padding: 0;\n  width: 95vw;\n  margin-left: 0vw; \n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n\n/* div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n} */\n@media screen and (min-width: 1000px) {\nmain[data-v-04f17bfa] {\n    padding: 40px;\n    width: 80vw;\n    margin-left: 7vw;\n}\n}\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _static_storedata_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
var _static_storedata_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(20, 1);

const state = () => ({
  cartUIStatus: "idle",
  storedata: _static_storedata_json__WEBPACK_IMPORTED_MODULE_0__,
  cart: [],
  clientSecret: "" // Required to initiate the payment from the client
});

const getters = {
  featuredProducts: state => state.storedata.slice(0, 3),
  headsets: state => state.storedata.filter(el => el.category === "Headset"),
  mouseDevices: state => state.storedata.filter(el => el.category === "Mouse"),
  keyboards: state => state.storedata.filter(el => el.category === "Keyboard"),
  accessories: state => state.storedata.filter(el => el.category === "Accessory"),
  monitors: state => state.storedata.filter(el => el.category === "Monitor"),
  desks: state => state.storedata.filter(el => el.category === "Desk"),
  chairs: state => state.storedata.filter(el => el.category === "Chair"),
  cartCount: state => {
    if (!state.cart.length) return 0;
    return state.cart.reduce((ac, next) => ac + next.quantity, 0);
  },
  cartTotal: state => {
    if (!state.cart.length) return 0;
    return state.cart.reduce((ac, next) => ac + next.quantity * next.price, 0);
  }
};
const mutations = {
  updateCartUI: (state, payload) => {
    state.cartUIStatus = payload;
  },
  addToCart: (state, payload) => {
    let itemfound = state.cart.find(el => el.id === payload.id);
    itemfound ? itemfound.quantity += parseInt(payload.quantity) : state.cart.push(payload);
  },
  addOneToCart: (state, payload) => {
    let itemfound = state.cart.find(el => el.id === payload.id);
    itemfound ? itemfound.quantity++ : state.cart.push(payload);
  },
  removeOneFromCart: (state, payload) => {
    let index = state.cart.findIndex(el => el.id === payload.id);
    state.cart[index].quantity === 1 ? state.cart.splice(index, 1) : state.cart[index].quantity--;
  },
  removeAllFromCart: (state, payload) => {
    state.cart = state.cart.filter(el => el.id !== payload.id);
  },
  clearCart: state => {
    state.cart = [];
    state.cartUIStatus = 'idle';
  }
};
const actions = {};

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "AppCard", function() { return AppCard; });
__webpack_require__.d(components_namespaceObject, "AppCartDisplay", function() { return AppCartDisplay; });
__webpack_require__.d(components_namespaceObject, "AppCartSteps", function() { return AppCartSteps; });
__webpack_require__.d(components_namespaceObject, "AppFeatureProducts", function() { return AppFeatureProducts; });
__webpack_require__.d(components_namespaceObject, "AppFooter", function() { return components_AppFooter; });
__webpack_require__.d(components_namespaceObject, "AppFooterLinks", function() { return AppFooterLinks; });
__webpack_require__.d(components_namespaceObject, "AppNav", function() { return components_AppNav; });
__webpack_require__.d(components_namespaceObject, "AppSalesBoxes", function() { return AppSalesBoxes; });
__webpack_require__.d(components_namespaceObject, "AppStoreGrid", function() { return AppStoreGrid; });
__webpack_require__.d(components_namespaceObject, "AppTextlockup", function() { return AppTextlockup; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(1);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(18);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js



// window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
if (false) {}
function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }
    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }
  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);
    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }
    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];
  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }
  return instances;
}
function applyAsyncData(Component, asyncData) {
  if (
  // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }
  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };
  Component.options._originDataFn = ComponentData;
  Component.options.data = function () {
    const data = ComponentData.call(this, this);
    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }
    return {
      ...data,
      ...asyncData
    };
  };
  Component.options.__hasNuxtData = true;
  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }
  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6
    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  }
  // If no component name defined, set file path as name, (also fixes #5703)
  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }
  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }
      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload'));

          // check for previous reload time not to reload infinitely
          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true /* skip cache */);
          }
        }

        throw error;
      }
    }
    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  }
  // Make sure the components are resolved (code-splitting)
  await resolveRouteComponents(route);
  // Send back a copy of route with meta based on Component definition
  return {
    ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return {
        ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: true,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    };
    // Only set once

    if (context.req) {
      app.context.req = context.req;
    }
    if (context.res) {
      app.context.res = context.res;
    }
    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }
    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }
      app.context._redirected = true;
      // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
      let pathType = typeof path;
      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }
      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      }
      // "/absolute/route", "./relative/route" or "../relative/route"
      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);
        if (true) {
          app.context.next({
            path,
            status
          });
        }
        if (false) {}
      }
    };
    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }
    if (false) {}
  }

  // Dynamic keys
  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);
  if (context.route) {
    app.context.route = currentRouteData;
  }
  if (context.from) {
    app.context.from = fromRouteData;
  }
  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }
  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;
  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }
        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }
  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }
  return Promise.resolve(promise);
}

// Imported from vue-router
function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }
  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash
  let path = decodeURI(window.location.pathname);
  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
}

// Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = {
    ...toQuery,
    ...fromQuery
  };
  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }
  return diff;
}
function normalizeError(err) {
  let message;
  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }
  return {
    ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
const PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;
  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }
    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }
    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }
  return tokens;
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }
  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (typeof token === 'string') {
        path += token;
        continue;
      }
      const value = data[token.name || 'pathMatch'];
      let segment;
      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }
          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }
      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }
        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }
        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);
          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }
          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }
        continue;
      }
      segment = token.asterisk ? encodeAsterisk(value) : encode(value);
      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }
      path += token.prefix + segment;
    }
    return path;
  };
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }
  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js


async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  }

  // Call and await on $fetch
  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}
    this.$fetchState.error = normalizeError(err);
  }
  this.$fetchState.pending = false;

  // Define an ssrKey for hydration
  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++;

  // Add data-fetch-key on parent element of Component
  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey;

  // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}
/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }
    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }
    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);
    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    }

    // Added for remove vue undefined warning while ssr
    this.$fetch = () => {}; // issue #8043
    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }
});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(19);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(10);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(6);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(11);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js

if (false) {}
function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);
  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }
  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}
/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from;

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }
  const nuxt = window.$nuxt;
  if (
  // Initial load (vuejs/vue-router#3199)
  !isRouteChanged ||
  // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }
  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash;
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }
      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js





const _7f17eed0 = () => interopDefault(__webpack_require__.e(/* import() | pages/Accessories */ 8).then(__webpack_require__.bind(null, 84)));
const _53c9e2ee = () => interopDefault(__webpack_require__.e(/* import() | pages/All */ 9).then(__webpack_require__.bind(null, 85)));
const _f5c94630 = () => interopDefault(__webpack_require__.e(/* import() | pages/Cart */ 10).then(__webpack_require__.bind(null, 86)));
const _017d9116 = () => interopDefault(__webpack_require__.e(/* import() | pages/Chairs */ 11).then(__webpack_require__.bind(null, 87)));
const _7b4fa162 = () => interopDefault(__webpack_require__.e(/* import() | pages/Desks */ 12).then(__webpack_require__.bind(null, 88)));
const _0b793359 = () => interopDefault(__webpack_require__.e(/* import() | pages/headsets */ 16).then(__webpack_require__.bind(null, 89)));
const _09393658 = () => interopDefault(__webpack_require__.e(/* import() | pages/Keyboards */ 13).then(__webpack_require__.bind(null, 90)));
const _619b18be = () => interopDefault(__webpack_require__.e(/* import() | pages/Monitors */ 14).then(__webpack_require__.bind(null, 91)));
const _eb2c8b80 = () => interopDefault(__webpack_require__.e(/* import() | pages/MouseDevices */ 15).then(__webpack_require__.bind(null, 92)));
const _31c97522 = () => interopDefault(__webpack_require__.e(/* import() | pages/product/_id */ 18).then(__webpack_require__.bind(null, 93)));
const _6caa295a = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 17).then(__webpack_require__.bind(null, 94)));

const emptyFn = () => {};
external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/Accessories",
    component: _7f17eed0,
    name: "Accessories"
  }, {
    path: "/All",
    component: _53c9e2ee,
    name: "All"
  }, {
    path: "/Cart",
    component: _f5c94630,
    name: "Cart"
  }, {
    path: "/Chairs",
    component: _017d9116,
    name: "Chairs"
  }, {
    path: "/Desks",
    component: _7b4fa162,
    name: "Desks"
  }, {
    path: "/headsets",
    component: _0b793359,
    name: "headsets"
  }, {
    path: "/Keyboards",
    component: _09393658,
    name: "Keyboards"
  }, {
    path: "/Monitors",
    component: _619b18be,
    name: "Monitors"
  }, {
    path: "/MouseDevices",
    component: _eb2c8b80,
    name: "MouseDevices"
  }, {
    path: "/product/:id?",
    component: _31c97522,
    name: "product-id"
  }, {
    path: "/",
    component: _6caa295a,
    name: "index"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({
    ...routerOptions,
    base
  });

  // TODO: remove in Nuxt 3
  const originalPush = router.push;
  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };
  const resolve = router.resolve.bind(router);
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }
    return resolve(to, current, append);
  };
  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },
  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }
      parent = parent.$parent;
    }
    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });
    if (false) {}

    // make sure that leave is called asynchronous (fix #5703)
    if (transition.css === false) {
      const leave = listeners.leave;

      // only add leave listener when user didnt provide one
      // or when it misses the done argument
      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }
          _parent.$nextTick(done);
        };
      }
    }
    let routerView = h('routerView', data);
    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }
    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }
});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "__nuxt-error-page"
  }, [_vm._ssrNode("<div class=\"error\">", "</div>", [_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">" + _vm._ssrEscape(_vm._s(_vm.message)) + "</div> "), _vm.statusCode === 404 ? _vm._ssrNode("<p class=\"description\">", "</p>", [typeof _vm.$route === 'undefined' ? _vm._ssrNode("<a href=\"/\" class=\"error-link\">", "</a>") : _c('NuxtLink', {
    staticClass: "error-link",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Back to the home page")])], 1) : _vm._e(), _vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },
    message() {
      return this.error.message || 'Error';
    }
  },
  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }
});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(23)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "b7b9642a"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },
  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },
  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }
      const [matchedRoute] = this.$route.matched;
      if (!matchedRoute) {
        return this.$route.path;
      }
      const Component = matchedRoute.components.default;
      if (Component && Component.options) {
        const {
          options
        } = Component;
        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }
      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }
  },
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },
  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    }

    // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping
    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    }

    // track if we are showing the NuxtError component
    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',
  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },
  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }
      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }
  },
  beforeDestroy() {
    this.clear();
  },
  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },
    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;
      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }
      return this;
    },
    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },
    get() {
      return this.percent;
    },
    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },
    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },
    pause() {
      clearInterval(this._timer);
      return this;
    },
    resume() {
      this.startTimer();
      return this;
    },
    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },
    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },
    fail(error) {
      this.canSucceed = false;
      return this;
    },
    startTimer() {
      if (!this.show) {
        this.show = true;
      }
      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }
      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }
        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }
        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }
  },
  render(h) {
    let el = h(false);
    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }
    return el;
  }
});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(25)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "c2430742"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/normalize.css/normalize.css
var normalize = __webpack_require__(27);

// EXTERNAL MODULE: ./assets/main.scss
var main = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=04f17bfa&scoped=true&
var defaultvue_type_template_id_04f17bfa_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('article', [_c('app-nav'), _vm._ssrNode(" "), _vm._ssrNode("<main data-v-04f17bfa>", "</main>", [_c('nuxt')], 1), _vm._ssrNode(" "), _c('app-footer')], 2);
};
var defaultvue_type_template_id_04f17bfa_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=04f17bfa&scoped=true&

// EXTERNAL MODULE: ./components/AppNav.vue + 4 modules
var AppNav = __webpack_require__(7);

// EXTERNAL MODULE: ./components/AppFooter.vue + 4 modules
var AppFooter = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&


/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  components: {
    AppNav: AppNav["default"],
    AppFooter: AppFooter["default"]
  }
});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue



function default_injectStyles (context) {
  
  var style0 = __webpack_require__(37)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_04f17bfa_scoped_true_render,
  defaultvue_type_template_id_04f17bfa_scoped_true_staticRenderFns,
  false,
  default_injectStyles,
  "04f17bfa",
  "3bdd1cad"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);

/* nuxt-component-imports */
installComponents(default_component, {AppNav: __webpack_require__(7).default,AppFooter: __webpack_require__(8).default})

// CONCATENATED MODULE: ./.nuxt/App.js








const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }
      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },
  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;
    if (false) {}
    // Add $nuxt.error()
    this.error = this.nuxt.error;
    // Add $nuxt.context
    this.context = this.$options.context;
  },
  async mounted() {
    this.$loading = this.$refs.loading;
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },
    isFetching() {
      return this.nbFetching > 0;
    },
    isPreview() {
      return Boolean(this.$options.previewData);
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },
    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);
      if (!pages.length) {
        return;
      }
      this.$loading.start();
      const promises = pages.map(page => {
        const p = [];

        // Old fetch
        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }
        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }
        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }
        return Promise.all(p);
      });
      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }
      this.$loading.finish();
    },
    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }
          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }
        let errorLayout = (nuxt_error.options || nuxt_error).layout;
        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }
        this.setLayout(errorLayout);
      }
    },
    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      return Promise.resolve(layouts['_' + layout]);
    }
  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
let store_store = {};
(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(39), 'store/index.js');

  // If store is an exported method = classic mode (deprecated)

  // Enforce store modules
  store_store.modules = store_store.modules || {};

  // If the environment supports hot reloading...
})();

// createStore
const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};
function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;
  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }
  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }
  return normalizeModule(moduleData, filePath);
}
function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state);
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }
  return moduleData;
}
// CONCATENATED MODULE: ./.nuxt/components/index.js
const AppCard = () => __webpack_require__.e(/* import() | components/app-card */ 1).then(__webpack_require__.bind(null, 56)).then(c => wrapFunctional(c.default || c));
const AppCartDisplay = () => __webpack_require__.e(/* import() | components/app-cart-display */ 2).then(__webpack_require__.bind(null, 74)).then(c => wrapFunctional(c.default || c));
const AppCartSteps = () => __webpack_require__.e(/* import() | components/app-cart-steps */ 3).then(__webpack_require__.bind(null, 75)).then(c => wrapFunctional(c.default || c));
const AppFeatureProducts = () => __webpack_require__.e(/* import() | components/app-feature-products */ 4).then(__webpack_require__.bind(null, 57)).then(c => wrapFunctional(c.default || c));
const components_AppFooter = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 8)).then(c => wrapFunctional(c.default || c));
const AppFooterLinks = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 9)).then(c => wrapFunctional(c.default || c));
const components_AppNav = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 7)).then(c => wrapFunctional(c.default || c));
const AppSalesBoxes = () => __webpack_require__.e(/* import() | components/app-sales-boxes */ 5).then(__webpack_require__.bind(null, 77)).then(c => wrapFunctional(c.default || c));
const AppStoreGrid = () => __webpack_require__.e(/* import() | components/app-store-grid */ 6).then(__webpack_require__.bind(null, 45)).then(c => wrapFunctional(c.default || c));
const AppTextlockup = () => __webpack_require__.e(/* import() | components/app-textlockup */ 7).then(__webpack_require__.bind(null, 76)).then(c => wrapFunctional(c.default || c));

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }
  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};
      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }
      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }
  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js


for (const name in components_namespaceObject) {
  external_vue_default.a.component(name, components_namespaceObject[name]);
  external_vue_default.a.component('Lazy' + name, components_namespaceObject[name]);
}
// CONCATENATED MODULE: ./plugins/currency-filter.js

external_vue_default.a.filter("dollar", function (value) {
  return `$${parseFloat(value).toFixed(2)}`;
});
// CONCATENATED MODULE: ./.nuxt/index.js













/* Plugins */

 // Source: ./components/plugin.js (mode: 'all')
 // Source: ../plugins/currency-filter.js (mode: 'all')

// Component: <ClientOnly>
external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a);

// TODO: Remove in Nuxt 3: <NoSsr>
external_vue_default.a.component(external_vue_no_ssr_default.a.name, {
  ...external_vue_no_ssr_default.a,
  render(h, ctx) {
    if (false) {}
    return external_vue_no_ssr_default.a.render(h, ctx);
  }
});

// Component: <NuxtChild>
external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child);

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;
    if (false) {}
    return globalNuxt;
  },
  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;
function registerModule(path, rawModule, options = {}) {
  const preserveState =  false && (false);
  return originalRegisterModule.call(this, path, rawModule, {
    preserveState,
    ...options
  });
}
async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config);
  const store = createStore(ssrContext);
  // Add this.$router into store actions/mutations
  store.$router = router;

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule;

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {
      "title": "Gamer's Den",
      "script": [{
        "src": "https:\u002F\u002Fjs.stripe.com\u002Fv3\u002F"
      }],
      "htmlAttrs": {
        "lang": "en"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }, {
        "name": "format-detection",
        "content": "telephone=no"
      }],
      "link": [{
        "rel": "stylesheet",
        "href": "https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Montserrat:300,600|PT+Serif&display=swap"
      }],
      "style": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }
        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }
          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },
      err: null,
      dateErr: null,
      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }
        nuxt.dateErr = Date.now();
        nuxt.err = err;
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }
        return err;
      }
    },
    ...App
  };

  // Make app available into store via this.app
  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location);
  // Resolve route
  let route;
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });
  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }
    key = '$' + key;
    // Add into app
    app[key] = value;
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value;
    }

    // Add into store
    store[key] = app[key];

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__';
    if (external_vue_default.a[installKey]) {
      return;
    }
    external_vue_default.a[installKey] = true;
    // Call Vue.use() to install the plugin into vm
    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }
        });
      }
    });
  }

  // Inject runtime config as $config
  inject('config', config);
  if (false) {}

  // Add enablePreview(previewData = {}) in context for plugins
  if (false) {}
  // Plugin execution

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (typeof /* Cannot get final name for export "default" in "./plugins/currency-filter.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/currency-filter.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  // Lock enablePreview in context
  if (false) {}

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}
    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve();

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }
        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    store,
    app,
    router
  };
}

// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js

// Update serverPrefetch strategy
external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created;

// Fetch mixin
if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
}

// Component: <NuxtLink>
external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);
if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}
const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});
const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;
  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }
  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';
  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  }
  // Avoid loop redirect
  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }
  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
};

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext);
  // Used for beforeNuxtRender({ Components, nuxtState })
  ssrContext.beforeRenderFns = [];
  // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)
  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {};

  // Remove query from url is static target

  // Public runtime config
  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;
  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  }
  // Create the app definition and the instance (created for each request)
  const {
    app,
    router,
    store
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);
  const _app = new external_vue_default.a(app);
  // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr
  ssrContext.nuxt.routePath = app.context.route.path;

  // Add meta infos (used in renderer.js)
  ssrContext.meta = _app.$meta();

  // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)
  ssrContext.asyncData = {};
  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };
  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    }

    // Load layout for error page
    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);
    _app.setLayout(errLayout);
    await beforeRender();
    return _app;
  };
  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  };

  // Components are already resolved by setContext -> getRouteData (app/utils.js)
  const Components = getMatchedComponents(app.context.route);

  /*
  ** Dispatch store nuxtServerInit
  */
  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  }
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Call global middleware (nuxt.config.js)
  */
  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Set layout
  */
  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;
  if (typeof layout === 'function') {
    layout = layout(app.context);
  }
  await _app.loadLayout(layout);
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;

  /*
  ** Call middleware (layout + pages)
  */
  midd = [];
  layout = sanitizeComponent(layout);
  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }
  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Call .validate()
  */
  let isValid = true;
  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }
      isValid = await Component.options.validate(app.context);
      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  }

  // ...If .validate() returned false
  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  }

  // If no Components found, returns 404
  if (!Components.length) {
    return render404Page();
  }

  // Call asyncData & fetch hooks on components matched by the route.
  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = [];

    // Call asyncData(context)
    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    }

    // Call fetch(context)
    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }
    return Promise.all(promises);
  }));

  // datas are the first row of each
  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {});

  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  // Call beforeNuxtRender methods & add store state
  await beforeRender();
  return _app;
});

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("vue-stripe-elements-plus");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map