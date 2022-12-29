exports.ids = [17,4];
exports.modules = {

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(48);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7df8fd2f", content, true, context)
};

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(50);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("353fe2f4", content, true, context)
};

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

class AlphaColor {

    constructor(color) {
        this.color = color
    }

    parseAlphaColor() {
        if (/^rgba\((\d{1,3}%?\s*,\s*){3}(\d*(?:\.\d+)?)\)$/.test(this.color)) {
            return this.parseRgba()
        } else if (/^hsla\(\d+\s*,\s*([\d.]+%\s*,\s*){2}(\d*(?:\.\d+)?)\)$/.test(this.color)) {
            return this.parseHsla()
        } else if (/^#([0-9A-Fa-f]{4}|[0-9A-Fa-f]{8})$/.test(this.color)) {
            return this.parseAlphaHex()
        } else if (/^transparent$/.test(this.color)) {
            return this.parseTransparent()
        }

        return {
            color: this.color,
            opacity: '1'
        }
    }

    parseRgba() {
        return {
            color: this.color.replace(/,(?!.*,).*(?=\))|a/g, ''),
            opacity: this.color.match(/\.\d+|[01](?=\))/)[0]
        }
    }

    parseHsla() {
        return {
            color: this.color.replace(/,(?!.*,).*(?=\))|a/g, ''),
            opacity: this.color.match(/\.\d+|[01](?=\))/)[0]
        }
    }

    parseAlphaHex() {
        return {
            color: this.color.length === 5 ? this.color.substring(0, 4) : this.color.substring(0, 7),
            opacity: this.color.length === 5 ? (parseInt(this.color.substring(4, 5) + this.color.substring(4, 5), 16) / 255).toFixed(2) : (parseInt(this.color.substring(7, 9), 16) / 255).toFixed(2)

        }
    }

    parseTransparent() {
        return {
            color: '#fff',
            opacity: 0
        }
    }
}

module.exports = AlphaColor

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_star_vue_vue_type_style_index_0_id_5d61ae9c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_star_vue_vue_type_style_index_0_id_5d61ae9c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_star_vue_vue_type_style_index_0_id_5d61ae9c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_star_vue_vue_type_style_index_0_id_5d61ae9c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_star_vue_vue_type_style_index_0_id_5d61ae9c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n.vue-star-rating-star[data-v-5d61ae9c] {\n    overflow: visible !important;\n}\n.vue-star-rating-star-rotate[data-v-5d61ae9c] {\n    transition: all .25s;\n}\n.vue-star-rating-star-rotate[data-v-5d61ae9c]:hover {\n    transition: transform 0.25s;\n    transform: rotate(-15deg) scale(1.3)\n}\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_star_rating_vue_vue_type_style_index_0_id_79b2ecfa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_star_rating_vue_vue_type_style_index_0_id_79b2ecfa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_star_rating_vue_vue_type_style_index_0_id_79b2ecfa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_star_rating_vue_vue_type_style_index_0_id_79b2ecfa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_star_rating_vue_vue_type_style_index_0_id_79b2ecfa_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n.vue-star-rating-star[data-v-79b2ecfa] {\n    display: inline-block;\n}\n.vue-star-rating-pointer[data-v-79b2ecfa] {\n    cursor: pointer;\n}\n.vue-star-rating[data-v-79b2ecfa] {\n    display: flex;\n    align-items: center;\n}\n.vue-star-rating-inline[data-v-79b2ecfa] {\n    display: inline-flex;\n}\n.vue-star-rating-rating-text[data-v-79b2ecfa] {\n    margin-left: 7px;\n}\n.vue-star-rating-rtl[data-v-79b2ecfa] {\n    direction: rtl;\n}\n.vue-star-rating-rtl .vue-star-rating-rating-text[data-v-79b2ecfa] {\n    margin-right: 10px;\n    direction: rtl;\n}\n.sr-only[data-v-79b2ecfa] {\n    position: absolute;\n    left: -10000px;\n    top: auto;\n    width: 1px;\n    height: 1px;\n    overflow: hidden;\n}\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-star-rating/src/star-rating.vue?vue&type=template&id=79b2ecfa&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: ['vue-star-rating', {
      'vue-star-rating-rtl': _vm.rtl
    }, {
      'vue-star-rating-inline': _vm.inline
    }]
  }, [_vm._ssrNode("<div class=\"sr-only\" data-v-79b2ecfa>", "</div>", [_vm._t("screen-reader", function () {
    return [_c('span', [_vm._v("Rated " + _vm._s(_vm.selectedRating) + " stars out of " + _vm._s(_vm.maxRating))])];
  }, {
    "rating": _vm.selectedRating,
    "stars": _vm.maxRating
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"vue-star-rating\" data-v-79b2ecfa>", "</div>", [_vm._l(_vm.maxRating, function (n) {
    return _vm._ssrNode("<span" + _vm._ssrClass(null, [{
      'vue-star-rating-pointer': !_vm.readOnly
    }, 'vue-star-rating-star']) + _vm._ssrStyle(null, {
      'margin-right': _vm.margin + 'px'
    }, null) + " data-v-79b2ecfa>", "</span>", [_c('star', {
      attrs: {
        "fill": _vm.fillLevel[n - 1],
        "size": _vm.starSize,
        "points": _vm.starPoints,
        "star-id": n,
        "step": _vm.step,
        "active-color": _vm.currentActiveColor,
        "inactive-color": _vm.inactiveColor,
        "border-color": _vm.borderColor,
        "active-border-color": _vm.currentActiveBorderColor,
        "border-width": _vm.borderWidth,
        "rounded-corners": _vm.roundedCorners,
        "rtl": _vm.rtl,
        "glow": _vm.glow,
        "glow-color": _vm.glowColor,
        "animate": _vm.animate
      },
      on: {
        "star-selected": function ($event) {
          return _vm.setRating($event, true);
        },
        "star-mouse-move": _vm.setRating
      }
    })], 1);
  }), _vm._ssrNode(" " + (_vm.showRating ? "<span" + _vm._ssrClass(null, ['vue-star-rating-rating-text', _vm.textClass]) + " data-v-79b2ecfa>" + _vm._ssrEscape(" " + _vm._s(_vm.formattedRating)) + "</span>" : "<!---->"))], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/vue-star-rating/src/star-rating.vue?vue&type=template&id=79b2ecfa&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-star-rating/src/star.vue?vue&type=template&id=5d61ae9c&scoped=true&
var starvue_type_template_id_5d61ae9c_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('svg', {
    class: ['vue-star-rating-star', {
      'vue-star-rating-star-rotate': _vm.shouldAnimate
    }],
    attrs: {
      "height": _vm.starSize,
      "width": _vm.starSize,
      "viewBox": _vm.viewBox
    },
    on: {
      "mousemove": _vm.mouseMoving,
      "click": _vm.selected,
      "touchstart": _vm.touchStart,
      "touchend": _vm.touchEnd
    }
  }, [_c('linearGradient', {
    attrs: {
      "id": _vm.grad,
      "x1": "0",
      "x2": "100%",
      "y1": "0",
      "y2": "0"
    }
  }, [_c('stop', {
    attrs: {
      "offset": _vm.starFill,
      "stop-color": _vm.rtl ? _vm.getColor(_vm.inactiveColor) : _vm.getColor(_vm.activeColor),
      "stop-opacity": _vm.rtl ? _vm.getOpacity(_vm.inactiveColor) : _vm.getOpacity(_vm.activeColor)
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": _vm.starFill,
      "stop-color": _vm.rtl ? _vm.getColor(_vm.activeColor) : _vm.getColor(_vm.inactiveColor),
      "stop-opacity": _vm.rtl ? _vm.getOpacity(_vm.activeColor) : _vm.getOpacity(_vm.inactiveColor)
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<filter" + _vm._ssrAttr("id", _vm.glowId) + " height=\"130%\" width=\"130%\" filterUnits=\"userSpaceOnUse\" data-v-5d61ae9c>", "</filter>", [_c('feGaussianBlur', {
    attrs: {
      "stdDeviation": _vm.glow,
      "result": "coloredBlur"
    }
  }), _vm._ssrNode(" "), _c('feMerge', [_c('feMergeNode', {
    attrs: {
      "in": "coloredBlur"
    }
  }), _vm._v(" "), _c('feMergeNode', {
    attrs: {
      "in": "SourceGraphic"
    }
  })], 1)], 2), _vm._ssrNode(" " + (_vm.glowColor && _vm.glow > 0 ? "<polygon" + _vm._ssrAttr("points", _vm.starPointsToString) + _vm._ssrAttr("fill", _vm.gradId) + _vm._ssrAttr("stroke", _vm.glowColor) + _vm._ssrAttr("filter", 'url(#' + _vm.glowId + ')') + _vm._ssrAttr("stroke-width", _vm.border) + _vm._ssrStyle(null, null, {
    display: _vm.fill > 1 ? '' : 'none'
  }) + " data-v-5d61ae9c></polygon>" : "<!---->") + " <polygon" + _vm._ssrAttr("points", _vm.starPointsToString) + _vm._ssrAttr("fill", _vm.gradId) + _vm._ssrAttr("stroke", _vm.getBorderColor) + _vm._ssrAttr("stroke-width", _vm.border) + _vm._ssrAttr("stroke-linejoin", _vm.strokeLinejoin) + " data-v-5d61ae9c></polygon> <polygon" + _vm._ssrAttr("points", _vm.starPointsToString) + _vm._ssrAttr("fill", _vm.gradId) + " data-v-5d61ae9c></polygon>")], 2);
};
var starvue_type_template_id_5d61ae9c_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/vue-star-rating/src/star.vue?vue&type=template&id=5d61ae9c&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-star-rating/src/classes/AlphaColor.js
var AlphaColor = __webpack_require__(46);
var AlphaColor_default = /*#__PURE__*/__webpack_require__.n(AlphaColor);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-star-rating/src/star.vue?vue&type=script&lang=js&

/* harmony default export */ var starvue_type_script_lang_js_ = ({
  name: 'Star',
  props: {
    fill: {
      type: Number,
      default: 0
    },
    points: {
      type: Array,
      default() {
        return [];
      }
    },
    size: {
      type: Number,
      default: 50
    },
    starId: {
      type: Number,
      required: true
    },
    activeColor: {
      type: String,
      required: true
    },
    inactiveColor: {
      type: String,
      required: true
    },
    borderColor: {
      type: String,
      default: '#000'
    },
    activeBorderColor: {
      type: String,
      default: '#000'
    },
    borderWidth: {
      type: Number,
      default: 0
    },
    roundedCorners: {
      type: Boolean,
      default: false
    },
    rtl: {
      type: Boolean,
      default: false
    },
    glow: {
      type: Number,
      default: 0
    },
    glowColor: {
      type: String,
      default: null,
      required: false
    },
    animate: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      starPoints: [19.8, 2.2, 6.6, 43.56, 39.6, 17.16, 0, 17.16, 33, 43.56],
      grad: '',
      glowId: '',
      isStarActive: true
    };
  },
  computed: {
    starPointsToString() {
      return this.starPoints.join(',');
    },
    gradId() {
      return 'url(#' + this.grad + ')';
    },
    starSize() {
      // Adjust star size when rounded corners are set with no border, to account for the 'hidden' border
      const size = this.roundedCorners && this.borderWidth <= 0 ? parseInt(this.size) - parseInt(this.border) : this.size;
      return parseInt(size) + parseInt(this.border);
    },
    starFill() {
      return this.rtl ? 100 - this.fill + '%' : this.fill + '%';
    },
    border() {
      return this.roundedCorners && this.borderWidth <= 0 ? 6 : this.borderWidth;
    },
    getBorderColor() {
      if (this.roundedCorners && this.borderWidth <= 0) {
        // create a hidden border
        return this.fill <= 0 ? this.inactiveColor : this.activeColor;
      }
      return this.fill <= 0 ? this.borderColor : this.activeBorderColor;
    },
    maxSize() {
      return this.starPoints.reduce(function (a, b) {
        return Math.max(a, b);
      });
    },
    viewBox() {
      return '0 0 ' + this.maxSize + ' ' + this.maxSize;
    },
    shouldAnimate() {
      return this.animate && this.isStarActive;
    },
    strokeLinejoin() {
      return this.roundedCorners ? 'round' : 'miter';
    }
  },
  created() {
    this.starPoints = this.points.length ? this.points : this.starPoints;
    this.calculatePoints();
    this.grad = this.getRandomId();
    this.glowId = this.getRandomId();
  },
  methods: {
    mouseMoving($event) {
      if ($event.touchAction !== 'undefined') {
        this.$emit('star-mouse-move', {
          event: $event,
          position: this.getPosition($event),
          id: this.starId
        });
      }
    },
    touchStart() {
      this.$nextTick(() => {
        this.isStarActive = true;
      });
    },
    touchEnd() {
      this.$nextTick(() => {
        this.isStarActive = false;
      });
    },
    getPosition($event) {
      // calculate position in percentage.
      var starWidth = 92 / 100 * this.size;
      const offset = this.rtl ? Math.min($event.offsetX, 45) : Math.max($event.offsetX, 1);
      var position = Math.round(100 / starWidth * offset);
      return Math.min(position, 100);
    },
    selected($event) {
      this.$emit('star-selected', {
        id: this.starId,
        position: this.getPosition($event)
      });
    },
    getRandomId() {
      return Math.random().toString(36).substring(7);
    },
    calculatePoints() {
      this.starPoints = this.starPoints.map((point, i) => {
        const offset = i % 2 === 0 ? this.border * 1.5 : 0;
        return this.size / this.maxSize * point + offset;
      });
    },
    getColor(color) {
      return new AlphaColor_default.a(color).parseAlphaColor().color;
    },
    getOpacity(color) {
      return new AlphaColor_default.a(color).parseAlphaColor().opacity;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-star-rating/src/star.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_starvue_type_script_lang_js_ = (starvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vue-star-rating/src/star.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(47)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_starvue_type_script_lang_js_,
  starvue_type_template_id_5d61ae9c_scoped_true_render,
  starvue_type_template_id_5d61ae9c_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "5d61ae9c",
  "f1ded35c"
  
)

/* harmony default export */ var star = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-star-rating/src/star-rating.vue?vue&type=script&lang=js&

/* harmony default export */ var star_ratingvue_type_script_lang_js_ = ({
  components: {
    star: star
  },
  model: {
    prop: 'rating',
    event: 'rating-selected'
  },
  props: {
    increment: {
      type: Number,
      default: 1
    },
    rating: {
      type: Number,
      default: 0
    },
    roundStartRating: {
      type: Boolean,
      default: true
    },
    activeColor: {
      type: [String, Array],
      default: '#ffd055'
    },
    inactiveColor: {
      type: String,
      default: '#d8d8d8'
    },
    maxRating: {
      type: Number,
      default: 5
    },
    starPoints: {
      type: Array,
      default() {
        return [];
      }
    },
    starSize: {
      type: Number,
      default: 50
    },
    showRating: {
      type: Boolean,
      default: true
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    textClass: {
      type: String,
      default: ''
    },
    inline: {
      type: Boolean,
      default: false
    },
    borderColor: {
      type: String,
      default: '#999'
    },
    activeBorderColor: {
      type: [String, Array],
      default: null
    },
    borderWidth: {
      type: Number,
      default: 0
    },
    roundedCorners: {
      type: Boolean,
      default: false
    },
    padding: {
      type: Number,
      default: 0
    },
    rtl: {
      type: Boolean,
      default: false
    },
    fixedPoints: {
      type: Number,
      default: null
    },
    glow: {
      type: Number,
      default: 0
    },
    glowColor: {
      type: String,
      default: '#fff'
    },
    clearable: {
      type: Boolean,
      default: false
    },
    activeOnClick: {
      type: Boolean,
      default: false
    },
    animate: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      step: 0,
      fillLevel: [],
      currentRating: 0,
      selectedRating: 0,
      ratingSelected: false
    };
  },
  computed: {
    formattedRating() {
      return this.fixedPoints === null ? this.currentRating : this.currentRating.toFixed(this.fixedPoints);
    },
    shouldRound() {
      return this.ratingSelected || this.roundStartRating;
    },
    margin() {
      return this.padding + this.borderWidth;
    },
    activeColors() {
      if (Array.isArray(this.activeColor)) {
        return this.padColors(this.activeColor, this.maxRating, this.activeColor.slice(-1)[0]);
      }
      return new Array(this.maxRating).fill(this.activeColor);
    },
    currentActiveColor() {
      if (!this.activeOnClick) {
        return this.currentRating > 0 ? this.activeColors[Math.ceil(this.currentRating) - 1] : this.inactiveColor;
      }
      return this.selectedRating > 0 ? this.activeColors[Math.ceil(this.selectedRating) - 1] : this.inactiveColor;
    },
    activeBorderColors() {
      if (Array.isArray(this.activeBorderColor)) {
        return this.padColors(this.activeBorderColor, this.maxRating, this.activeBorderColor.slice(-1)[0]);
      }
      let borderColor = this.activeBorderColor ? this.activeBorderColor : this.borderColor;
      return new Array(this.maxRating).fill(borderColor);
    },
    currentActiveBorderColor() {
      if (!this.activeOnClick) {
        return this.currentRating > 0 ? this.activeBorderColors[Math.ceil(this.currentRating) - 1] : this.borderColor;
      }
      return this.selectedRating > 0 ? this.activeBorderColors[Math.ceil(this.selectedRating) - 1] : this.borderColor;
    }
  },
  watch: {
    rating(val) {
      this.currentRating = val;
      this.selectedRating = val;
      this.createStars(this.shouldRound);
    }
  },
  created() {
    this.step = this.increment * 100;
    this.currentRating = this.rating;
    this.selectedRating = this.currentRating;
    this.createStars(this.roundStartRating);
  },
  methods: {
    setRating($event, persist) {
      if (!this.readOnly) {
        const position = this.rtl ? (100 - $event.position) / 100 : $event.position / 100;
        this.currentRating = ($event.id + position - 1).toFixed(2);
        this.currentRating = this.currentRating > this.maxRating ? this.maxRating : this.currentRating;
        if (persist) {
          this.createStars(true, true);
          if (this.clearable && this.currentRating === this.selectedRating) {
            this.selectedRating = 0;
          } else {
            this.selectedRating = this.currentRating;
          }
          this.$emit('rating-selected', this.selectedRating);
          this.ratingSelected = true;
        } else {
          this.createStars(true, !this.activeOnClick);
          this.$emit('current-rating', this.currentRating);
        }
      }
    },
    resetRating() {
      if (!this.readOnly) {
        this.currentRating = this.selectedRating;
        this.createStars(this.shouldRound);
      }
    },
    createStars(round = true, applyFill = true) {
      if (round) {
        this.round();
      }
      for (var i = 0; i < this.maxRating; i++) {
        let level = 0;
        if (i < this.currentRating) {
          level = this.currentRating - i > 1 ? 100 : (this.currentRating - i) * 100;
        }
        if (applyFill) {
          this.fillLevel[i] = Math.round(level);
        }
      }
    },
    round() {
      var inv = 1.0 / this.increment;
      this.currentRating = Math.min(this.maxRating, Math.ceil(this.currentRating * inv) / inv);
    },
    padColors(array, minLength, fillValue) {
      return Object.assign(new Array(minLength).fill(fillValue), array);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-star-rating/src/star-rating.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_star_ratingvue_type_script_lang_js_ = (star_ratingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-star-rating/src/star-rating.vue



function star_rating_injectStyles (context) {
  
  var style0 = __webpack_require__(49)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var star_rating_component = Object(componentNormalizer["a" /* default */])(
  src_star_ratingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  star_rating_injectStyles,
  "79b2ecfa",
  "2c0f10a8"
  
)

/* harmony default export */ var star_rating = __webpack_exports__["a"] = (star_rating_component.exports);

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(63);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("4f88cfe7", content, true, context)
};

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppFeatureProducts.vue?vue&type=template&id=e43ccc88&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_vm._ssrNode("<h2 data-v-e43ccc88><span data-v-e43ccc88>Featured Products</span></h2> "), _vm._ssrNode("<div class=\"featureditems\" data-v-e43ccc88>", "</div>", _vm._l(_vm.featuredProducts, function (product) {
    return _vm._ssrNode("<div class=\"item\" data-v-e43ccc88>", "</div>", [_c('nuxt-link', {
      attrs: {
        "to": `../product/${product.id}`
      }
    }, [_c('img', {
      attrs: {
        "src": `/products/${product.img}`
      }
    })]), _vm._ssrNode(" <h3 data-v-e43ccc88>" + _vm._ssrEscape(_vm._s(product.name)) + "</h3> <h4 data-v-e43ccc88>" + _vm._ssrEscape(_vm._s(_vm._f("dollar")(product.price))) + "</h4>")], 2);
  }), 0)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/AppFeatureProducts.vue?vue&type=template&id=e43ccc88&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppFeatureProducts.vue?vue&type=script&lang=js&
/* harmony default export */ var AppFeatureProductsvue_type_script_lang_js_ = ({
  computed: {
    featuredProducts() {
      return this.$store.getters.featuredProducts;
    }
  }
});
// CONCATENATED MODULE: ./components/AppFeatureProducts.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AppFeatureProductsvue_type_script_lang_js_ = (AppFeatureProductsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AppFeatureProducts.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(62)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AppFeatureProductsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e43ccc88",
  "330478c4"
  
)

/* harmony default export */ var AppFeatureProducts = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFeatureProducts_vue_vue_type_style_index_0_id_e43ccc88_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFeatureProducts_vue_vue_type_style_index_0_id_e43ccc88_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFeatureProducts_vue_vue_type_style_index_0_id_e43ccc88_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFeatureProducts_vue_vue_type_style_index_0_id_e43ccc88_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFeatureProducts_vue_vue_type_style_index_0_id_e43ccc88_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "section[data-v-e43ccc88]{margin-top:60px}.featureditems[data-v-e43ccc88]{width:100%;margin:20px 0 70px}.featureditems .item[data-v-e43ccc88]{border:1px solid #eee2dc;box-shadow:0 3px 10px 0px #eee;border-radius:40px;padding:10px 20px 30px;min-height:150px;justify-self:center;align-self:center;text-align:center}h4[data-v-e43ccc88]{color:#d96528;margin:10px 0}h2[data-v-e43ccc88]{color:#d96528;text-align:center;overflow:hidden}h2 span[data-v-e43ccc88]{display:inline-block;position:relative}h2 span[data-v-e43ccc88]:after,h2 span[data-v-e43ccc88]:before{content:\" \";display:block;height:1px;width:1000px;background:#e6baa4;position:absolute;top:50%}h2 span[data-v-e43ccc88]:before{left:-1010px}h2 span[data-v-e43ccc88]:after{right:-1010px}@media screen and (max-width: 699px){.featureditems[data-v-e43ccc88]{width:83vw;margin-left:5vw}.featureditems div[data-v-e43ccc88]{padding:10px 20px;margin-bottom:10px}img[data-v-e43ccc88]{width:initial}}@media screen and (min-width: 700px){.featureditems[data-v-e43ccc88]{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:1fr;grid-column-gap:20px}.featureditems div[data-v-e43ccc88]{padding:40px 50px}img[data-v-e43ccc88]{width:100%}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(81);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3d95c694", content, true, context)
};

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_5520750a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_5520750a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_5520750a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_5520750a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_5520750a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".item-contain[data-v-5520750a]{margin-left:8%;width:80%;display:grid;grid-template-columns:1fr 2fr}img[data-v-5520750a]{width:100%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/product/_id.vue?vue&type=template&id=5520750a&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<section class=\"item-contain\" data-v-5520750a>", "</section>", [_vm._ssrNode("<section class=\"img\" data-v-5520750a><img" + _vm._ssrAttr("src", `/products/${_vm.product.img}`) + " data-v-5520750a></section> "), _vm._ssrNode("<section class=\"product-info\" data-v-5520750a>", "</section>", [_vm._ssrNode("<h1 data-v-5520750a>" + _vm._ssrEscape(_vm._s(_vm.product.name)) + "</h1> "), _c('star-rating', {
    staticStyle: {
      "margin": "5px 0"
    },
    attrs: {
      "rating": _vm.product.starrating,
      "star-size": 15,
      "active-color": "#000"
    }
  }), _vm._ssrNode(" <h4 class=\"price\" data-v-5520750a>" + _vm._ssrEscape(_vm._s(_vm._f("dollar")(_vm.product.price))) + "</h4> <ul data-v-5520750a>" + _vm._ssrList(_vm.product.description, function (detail) {
    return "<li class=\"product-detail\" data-v-5520750a>" + _vm._ssrEscape(_vm._s(detail)) + "</li>";
  }) + "</ul> <div class=\"product-options\" data-v-5520750a><div class=\"quantity\" data-v-5520750a><button class=\"update-num\" data-v-5520750a>-</button> <input type=\"number\"" + _vm._ssrAttr("value", _vm.quantity) + " data-v-5520750a> <button class=\"update-num\" data-v-5520750a>+</button></div></div> <p data-v-5520750a><button class=\"button purchase\" data-v-5520750a>Add to Cart</button></p>")], 2)], 2), _vm._ssrNode(" <hr data-v-5520750a> "), _vm._ssrNode("<div class=\"review\" data-v-5520750a>", "</div>", [_vm._ssrNode("<h2 data-v-5520750a>Reviews</h2> "), _c('star-rating', {
    staticStyle: {},
    attrs: {
      "rating": _vm.product.starrating,
      "active-color": "#000",
      "star-size": 15
    }
  }), _vm._ssrNode(" <p data-v-5520750a>Great Product!</p> <p data-v-5520750a>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iusto placeat consequatur voluptas sit mollitia ratione autem, atque sequi odio laborum, recusandae quia distinctio voluptatibus sint, quae aliquid possimus exercitationem.</p>")], 2), _vm._ssrNode(" "), _c('app-feature-products')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/product/_id.vue?vue&type=template&id=5520750a&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/vue-star-rating/src/star-rating.vue + 9 modules
var star_rating = __webpack_require__(51);

// EXTERNAL MODULE: ./components/AppFeatureProducts.vue + 4 modules
var AppFeatureProducts = __webpack_require__(57);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/product/_id.vue?vue&type=script&lang=js&



/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  components: {
    StarRating: star_rating["a" /* default */],
    AppFeatureProducts: AppFeatureProducts["default"]
  },
  data() {
    return {
      id: this.$route.params.id,
      quantity: 1,
      tempcart: [] // this object should be the same as the json store object, with additional param, quantity
    };
  },

  computed: {
    ...Object(external_vuex_["mapState"])(["storedata"]),
    product() {
      let result;
      for (let i = 0; i < this.storedata.length; i++) {
        if (this.storedata[i].id === this.id) result = this.storedata[i];
      }
      return result;
    }
  },
  methods: {
    cartAdd() {
      let item = this.product;
      item = {
        ...item,
        quantity: this.quantity
      };
      this.tempcart.push(item);
      this.$store.commit("addToCart", {
        ...item
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/product/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/product/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(80)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5520750a",
  "0983db7e"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AppFeatureProducts: __webpack_require__(57).default})


/***/ })

};;
//# sourceMappingURL=_id.js.map