exports.ids = [3];
exports.modules = {

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(69);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("d0fb7d26", content, true, context)
};

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCartSteps_vue_vue_type_style_index_0_id_371dc672_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCartSteps_vue_vue_type_style_index_0_id_371dc672_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCartSteps_vue_vue_type_style_index_0_id_371dc672_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCartSteps_vue_vue_type_style_index_0_id_371dc672_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCartSteps_vue_vue_type_style_index_0_id_371dc672_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "section[data-v-371dc672]{display:grid;grid-template-columns:repeat(3, 1fr);grid-template-rows:1fr;grid-column-gap:100px;grid-row-gap:0px;text-align:center;width:80%;margin:20px auto 0}section div[data-v-371dc672]{display:flex;flex-direction:column;align-items:center}h2[data-v-371dc672]{width:80px;height:80px;border-radius:1000px;border:1px solid #ccc;padding-top:21px;color:#555}h2.active[data-v-371dc672]{background:#d96528;border:1px solid #d96528;color:#fff}h4[data-v-371dc672]{margin-top:20px;color:#555}@media screen and (max-width: 600px){section[data-v-371dc672]{grid-column-gap:30px !important}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppCartSteps.vue?vue&type=template&id=371dc672&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_vm._ssrNode("<div class=\"shopping\" data-v-371dc672><h2" + _vm._ssrClass(null, {
    active: _vm.cartUIStatus === 'idle' && _vm.cartCount === 0
  }) + " data-v-371dc672>01</h2> <h4 data-v-371dc672>Shopping Cart</h4></div> <div class=\"checkout\" data-v-371dc672><h2" + _vm._ssrClass(null, {
    active: _vm.cartUIStatus === 'idle' && _vm.cartCount > 0
  }) + " data-v-371dc672>02</h2> <h4 data-v-371dc672>Check out</h4></div> <div class=\"order\" data-v-371dc672><h2" + _vm._ssrClass(null, {
    active: _vm.cartUIStatus === 'success'
  }) + " data-v-371dc672>03</h2> <h4 data-v-371dc672>Order Complete</h4></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/AppCartSteps.vue?vue&type=template&id=371dc672&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppCartSteps.vue?vue&type=script&lang=js&

/* harmony default export */ var AppCartStepsvue_type_script_lang_js_ = ({
  computed: {
    ...Object(external_vuex_["mapState"])(["cartUIStatus"]),
    ...Object(external_vuex_["mapGetters"])(["cartCount"])
  }
});
// CONCATENATED MODULE: ./components/AppCartSteps.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AppCartStepsvue_type_script_lang_js_ = (AppCartStepsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AppCartSteps.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(68)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AppCartStepsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "371dc672",
  "735e2d9e"
  
)

/* harmony default export */ var AppCartSteps = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=app-cart-steps.js.map