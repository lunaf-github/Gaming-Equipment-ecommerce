exports.ids = [4];
exports.modules = {

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(59);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("4f88cfe7", content, true, context)
};

/***/ }),

/***/ 55:
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
  
  var style0 = __webpack_require__(58)
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

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFeatureProducts_vue_vue_type_style_index_0_id_e43ccc88_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFeatureProducts_vue_vue_type_style_index_0_id_e43ccc88_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFeatureProducts_vue_vue_type_style_index_0_id_e43ccc88_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFeatureProducts_vue_vue_type_style_index_0_id_e43ccc88_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFeatureProducts_vue_vue_type_style_index_0_id_e43ccc88_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "section[data-v-e43ccc88]{margin-top:60px}.featureditems[data-v-e43ccc88]{width:100%;margin:20px 0 70px}.featureditems .item[data-v-e43ccc88]{border:1px solid #eee2dc;box-shadow:0 3px 10px 0px #eee;border-radius:40px;padding:10px 20px 30px;min-height:150px;justify-self:center;align-self:center;text-align:center}h4[data-v-e43ccc88]{color:#d96528;margin:10px 0}h2[data-v-e43ccc88]{color:#d96528;text-align:center;overflow:hidden}h2 span[data-v-e43ccc88]{display:inline-block;position:relative}h2 span[data-v-e43ccc88]:after,h2 span[data-v-e43ccc88]:before{content:\" \";display:block;height:1px;width:1000px;background:#e6baa4;position:absolute;top:50%}h2 span[data-v-e43ccc88]:before{left:-1010px}h2 span[data-v-e43ccc88]:after{right:-1010px}@media screen and (max-width: 699px){.featureditems[data-v-e43ccc88]{width:83vw;margin-left:5vw}.featureditems div[data-v-e43ccc88]{padding:10px 20px;margin-bottom:10px}img[data-v-e43ccc88]{width:initial}}@media screen and (min-width: 700px){.featureditems[data-v-e43ccc88]{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:1fr;grid-column-gap:20px}.featureditems div[data-v-e43ccc88]{padding:40px 50px}img[data-v-e43ccc88]{width:100%}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=app-feature-products.js.map