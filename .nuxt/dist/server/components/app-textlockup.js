exports.ids = [6];
exports.modules = {

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(66);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("707ef58a", content, true, context)
};

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTextlockup_vue_vue_type_style_index_0_id_6e9307ab_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTextlockup_vue_vue_type_style_index_0_id_6e9307ab_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTextlockup_vue_vue_type_style_index_0_id_6e9307ab_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTextlockup_vue_vue_type_style_index_0_id_6e9307ab_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTextlockup_vue_vue_type_style_index_0_id_6e9307ab_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".textlockup[data-v-6e9307ab]{display:grid;grid-template-columns:50px 100px 1fr;grid-template-rows:50px 50px 100px 20px 1fr;grid-column-gap:0px;grid-row-gap:0px}.textlockup .new[data-v-6e9307ab]{grid-area:1/3/5/4;font-size:23vmin;color:#efefef;text-transform:uppercase}.textlockup .sale[data-v-6e9307ab]{grid-area:2/3/3/4;font-size:6.5vmin;color:#d96528;font-family:\"PT Serif\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif}.textlockup .collection[data-v-6e9307ab]{grid-area:3/3/4/4;font-size:2vmin;letter-spacing:.2em;text-transform:uppercase}.textlockup .details[data-v-6e9307ab]{grid-area:4/3/5/4;font-size:2vmin;letter-spacing:.2em;text-transform:uppercase}.textlockup .img[data-v-6e9307ab]{grid-area:1/3/6/4;max-width:950px}.textlockup .img img[data-v-6e9307ab]{width:95%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppTextlockup.vue?vue&type=template&id=6e9307ab&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "textlockup"
  }, [_vm._ssrNode("<div class=\"img\" data-v-6e9307ab>", "</div>", [_vm._t("img", function () {
    return [_c('img', {
      attrs: {
        "src": "/gamer-setup-1.jpg",
        "alt": "shoe"
      }
    })];
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"new\" data-v-6e9307ab>", "</div>", [_vm._t("new", function () {
    return [_vm._v("Game")];
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"sale\" data-v-6e9307ab>", "</div>", [_vm._t("sale", function () {
    return [_vm._v("With")];
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"collection\" data-v-6e9307ab>", "</div>", [_vm._t("collection", function () {
    return [_vm._v("Style")];
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"details\" data-v-6e9307ab>", "</div>", [_vm._t("details", function () {
    return [_vm._v("Street Style New Fashion")];
  })], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/AppTextlockup.vue?vue&type=template&id=6e9307ab&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppTextlockup.vue?vue&type=script&lang=js&
/* harmony default export */ var AppTextlockupvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/AppTextlockup.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AppTextlockupvue_type_script_lang_js_ = (AppTextlockupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AppTextlockup.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(65)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AppTextlockupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6e9307ab",
  "103c0599"
  
)

/* harmony default export */ var AppTextlockup = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=app-textlockup.js.map