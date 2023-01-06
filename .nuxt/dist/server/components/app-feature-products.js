exports.ids = [4];
exports.modules = {

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
  add("42ff6d7b", content, true, context)
};

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppFeatureProducts.vue?vue&type=template&id=33a46c0c&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_vm._ssrNode("<h2 data-v-33a46c0c><span data-v-33a46c0c>Featured Products</span></h2> "), _vm._ssrNode("<div class=\"featureditems\" data-v-33a46c0c>", "</div>", _vm._l(_vm.featuredProducts, function (product, i) {
    return _vm._ssrNode("<div" + _vm._ssrClass(null, `item${i}`) + " data-v-33a46c0c>", "</div>", [_c('nuxt-link', {
      attrs: {
        "to": `../product/${product.id}`
      }
    }, [_c('div', {
      staticClass: "image-container"
    }, [_c('img', {
      staticClass: "img",
      attrs: {
        "src": `/products/${product.img}`
      }
    })])]), _vm._ssrNode(" <h3 data-v-33a46c0c>" + _vm._ssrEscape(_vm._s(product.name)) + "</h3> <h4 data-v-33a46c0c>" + _vm._ssrEscape(_vm._s(_vm._f("dollar")(product.price))) + "</h4>")], 2);
  }), 0)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/AppFeatureProducts.vue?vue&type=template&id=33a46c0c&scoped=true&

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
  "33a46c0c",
  "330478c4"
  
)

/* harmony default export */ var AppFeatureProducts = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFeatureProducts_vue_vue_type_style_index_0_id_33a46c0c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFeatureProducts_vue_vue_type_style_index_0_id_33a46c0c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFeatureProducts_vue_vue_type_style_index_0_id_33a46c0c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFeatureProducts_vue_vue_type_style_index_0_id_33a46c0c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFeatureProducts_vue_vue_type_style_index_0_id_33a46c0c_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "section[data-v-33a46c0c]{margin-top:60px}.featureditems[data-v-33a46c0c]{width:100%;margin:20px 0 70px}.featureditems .item0[data-v-33a46c0c],.featureditems .item1[data-v-33a46c0c],.featureditems .item2[data-v-33a46c0c]{border-radius:10%;padding:20px 20px 30px 20px;height:55vh;justify-self:center;align-self:center;text-align:center}.featureditems .item1[data-v-33a46c0c]{grid-area:1/1/2/2;border:1px solid #e62a2a;box-shadow:0 3px 10px 0px red}.featureditems .item2[data-v-33a46c0c]{grid-area:1/2/2/3;border:1px solid #2a33e6;box-shadow:0 3px 10px 0px #0004ff}.featureditems .item0[data-v-33a46c0c]{grid-area:1/3/2/4;border:1px solid #69e62a;box-shadow:0 3px 10px 0px #2fff00}h4[data-v-33a46c0c]{color:#d96528;margin:10px 0}h2[data-v-33a46c0c]{color:#d96528;text-align:center;overflow:hidden}h2 span[data-v-33a46c0c]{display:inline-block;position:relative}h2 span[data-v-33a46c0c]:after,h2 span[data-v-33a46c0c]:before{content:\" \";display:block;height:1px;width:1000px;background:#e6baa4;position:absolute;top:50%}h2 span[data-v-33a46c0c]:before{left:-1010px}h2 span[data-v-33a46c0c]:after{right:-1010px}h3[data-v-33a46c0c]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;width:97%}@media screen and (max-width: 699px){.featureditems[data-v-33a46c0c]{width:83vw;margin-left:5vw}.featureditems img[data-v-33a46c0c]{max-width:75vw}.featureditems div[data-v-33a46c0c]{padding:10px 20px;margin-bottom:10px}img[data-v-33a46c0c]{width:initial}}@media screen and (min-width: 700px){.featureditems[data-v-33a46c0c]{display:grid;grid-template-columns:repeat(3, 1fr);grid-template-rows:1fr;grid-column-gap:20px;grid-row-gap:0px;text-align:center;width:80vw}img[data-v-33a46c0c]{width:90%}.image-container[data-v-33a46c0c]{display:flex;justify-content:center;align-items:center;margin-top:5px;height:40vh;border:4px solid gray;overflow:hidden;background-color:#fff;border-radius:10%;margin-bottom:5px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=app-feature-products.js.map