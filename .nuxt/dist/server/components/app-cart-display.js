exports.ids = [1];
exports.modules = {

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(62);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("62dd829a", content, true, context)
};

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCartDisplay_vue_vue_type_style_index_0_id_6c2d0bde_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCartDisplay_vue_vue_type_style_index_0_id_6c2d0bde_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCartDisplay_vue_vue_type_style_index_0_id_6c2d0bde_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCartDisplay_vue_vue_type_style_index_0_id_6c2d0bde_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCartDisplay_vue_vue_type_style_index_0_id_6c2d0bde_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".product-img[data-v-6c2d0bde]{float:left;margin-right:15px;width:100px}.total[data-v-6c2d0bde]{display:grid;grid-template-columns:repeat(2, 1fr);grid-column-gap:100px}table[data-v-6c2d0bde]{width:100%;margin-top:20px}tr[data-v-6c2d0bde]{text-align:center}th[data-v-6c2d0bde]{text-align:center}td[data-v-6c2d0bde],th[data-v-6c2d0bde]{border-bottom:1px solid #ccc}.golden[data-v-6c2d0bde]{background:#f2eee2;font-weight:bold;padding:10px}.product-name[data-v-6c2d0bde]{text-align:left;padding-top:36px}.num[data-v-6c2d0bde]{text-align:right}button a[data-v-6c2d0bde]{color:#fff;transition:.3s all ease}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppCartDisplay.vue?vue&type=template&id=6c2d0bde&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.cartCount > 0 ? _vm._ssrNode("<section data-v-6c2d0bde>", "</section>", [_vm._ssrNode("<table data-v-6c2d0bde><tr data-v-6c2d0bde><th data-v-6c2d0bde>Product</th> <th data-v-6c2d0bde>Price</th> <th data-v-6c2d0bde>Quantity</th> <th data-v-6c2d0bde>Total</th> <th data-v-6c2d0bde></th></tr> " + _vm._ssrList(_vm.cart, function (item) {
    return "<tr data-v-6c2d0bde><td data-v-6c2d0bde><img" + _vm._ssrAttr("src", `/products/${item.img}`) + _vm._ssrAttr("alt", item.name) + " class=\"product-img\" data-v-6c2d0bde> <h3 class=\"product-name\" data-v-6c2d0bde>" + _vm._ssrEscape(_vm._s(item.name)) + "</h3></td> <td data-v-6c2d0bde><h4 class=\"price\" data-v-6c2d0bde>" + _vm._ssrEscape(_vm._s(item.price)) + "</h4></td> <td data-v-6c2d0bde><button class=\"quantity-adjust\" data-v-6c2d0bde>-</button> <strong data-v-6c2d0bde>" + _vm._ssrEscape(_vm._s(item.quantity)) + "</strong> <button class=\"quantity-adjust\" data-v-6c2d0bde>+</button></td> <td data-v-6c2d0bde>" + _vm._ssrEscape(_vm._s(item.quantity * item.price)) + "</td> <td data-v-6c2d0bde><button class=\"delete-product\" data-v-6c2d0bde>X</button></td></tr>";
  }) + "</table> <section class=\"payment\" data-v-6c2d0bde><div class=\"total\" data-v-6c2d0bde><div class=\"caption\" data-v-6c2d0bde><p data-v-6c2d0bde><strong data-v-6c2d0bde>Subtotal:</strong></p> <p data-v-6c2d0bde>Shipping:</p> <p class=\"golden\" data-v-6c2d0bde>Total:</p></div> <div class=\"num\" data-v-6c2d0bde><p data-v-6c2d0bde><strong data-v-6c2d0bde>" + _vm._ssrEscape(_vm._s(_vm.cartTotal)) + "</strong></p> <p data-v-6c2d0bde>Free Shipping</p> <p class=\"golden\" data-v-6c2d0bde>" + _vm._ssrEscape(_vm._s(_vm.cartTotal)) + "</p></div></div></section>")], 2) : _vm._ssrNode("<section class=\"center\" data-v-6c2d0bde>", "</section>", [_vm._ssrNode("<p data-v-6c2d0bde>Your cart is empty, fill it up!</p> "), _vm._ssrNode("<button class=\"pay-with-stripe\" data-v-6c2d0bde>", "</button>", [_c('nuxt-link', {
    attrs: {
      "exact": "",
      "to": "/"
    }
  }, [_vm._v("Back Home")])], 1)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/AppCartDisplay.vue?vue&type=template&id=6c2d0bde&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppCartDisplay.vue?vue&type=script&lang=js&

/* harmony default export */ var AppCartDisplayvue_type_script_lang_js_ = ({
  components: {},
  computed: {
    ...Object(external_vuex_["mapState"])(["cart"]),
    ...Object(external_vuex_["mapGetters"])(["cartCount", "cartTotal"])
  },
  methods: {
    addToCart(item) {
      this.$store.commit("addOneToCart", item);
    },
    removeOneFromCart(item) {
      this.$store.commit("removeOneFromCart", item);
    },
    removeAllFromCart(item) {
      this.$store.commit("removeAllFromCart", item);
    }
  }
});
// CONCATENATED MODULE: ./components/AppCartDisplay.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AppCartDisplayvue_type_script_lang_js_ = (AppCartDisplayvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AppCartDisplay.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(61)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AppCartDisplayvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6c2d0bde",
  "3db0f4cc"
  
)

/* harmony default export */ var AppCartDisplay = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=app-cart-display.js.map