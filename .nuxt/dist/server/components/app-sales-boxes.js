exports.ids = [5];
exports.modules = {

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(73);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6e9197fc", content, true, context)
};

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSalesBoxes_vue_vue_type_style_index_0_id_77ad34aa_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSalesBoxes_vue_vue_type_style_index_0_id_77ad34aa_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSalesBoxes_vue_vue_type_style_index_0_id_77ad34aa_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSalesBoxes_vue_vue_type_style_index_0_id_77ad34aa_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSalesBoxes_vue_vue_type_style_index_0_id_77ad34aa_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".boxes[data-v-77ad34aa]{margin:70px 0}.boxes div[data-v-77ad34aa]{min-height:150px;justify-self:center;align-self:center;text-align:center;border:1px solid #eee2dc;box-shadow:0 3px 10px 0px #eee;border-radius:40px}.boxes .box1[data-v-77ad34aa]{grid-area:1/1/2/2;border:1px solid #e62a2a;box-shadow:0 3px 10px 0px red}.boxes .box2[data-v-77ad34aa]{grid-area:1/2/2/3;border:1px solid #2a33e6;box-shadow:0 3px 10px 0px #0004ff}.boxes .box0[data-v-77ad34aa]{grid-area:1/3/2/4;border:1px solid #69e62a;box-shadow:0 3px 10px 0px #2fff00}h4[data-v-77ad34aa]{text-transform:uppercase;letter-spacing:.15em;margin:0 0 10px 0}@media screen and (min-width: 700px){.boxes[data-v-77ad34aa]{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:1fr;grid-column-gap:20px;grid-row-gap:0px}.boxes div[data-v-77ad34aa]{padding:40px 50px}}@media screen and (max-width: 699px){.boxes[data-v-77ad34aa]{width:83vw;margin-left:5vw}.boxes div[data-v-77ad34aa]{padding:10px 20px;margin-bottom:10px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppSalesBoxes.vue?vue&type=template&id=77ad34aa&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "boxes"
  }, [_vm._ssrNode(_vm._ssrList(_vm.boxes, function (box, i) {
    return "<div" + _vm._ssrClass(null, `box${i}`) + " data-v-77ad34aa><img" + _vm._ssrAttr("src", box.icon) + " alt=\"service icon\" data-v-77ad34aa> <h4 data-v-77ad34aa>" + _vm._ssrEscape(_vm._s(box.heading)) + "</h4> <p data-v-77ad34aa>" + _vm._ssrEscape(_vm._s(box.details)) + "</p></div>";
  }))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/AppSalesBoxes.vue?vue&type=template&id=77ad34aa&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppSalesBoxes.vue?vue&type=script&lang=js&
/* harmony default export */ var AppSalesBoxesvue_type_script_lang_js_ = ({
  data() {
    return {
      boxes: [{
        icon: "/icon-package.svg",
        heading: "Free Shipping Globally",
        details: "Delivery in 4 Days"
      }, {
        icon: "/icon-cal.svg",
        heading: "24/7 Customer Service",
        details: "Call us any time"
      }, {
        icon: "/icon-service.svg",
        heading: "Easy Online Returns",
        details: "Send Within 30 Days"
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/AppSalesBoxes.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AppSalesBoxesvue_type_script_lang_js_ = (AppSalesBoxesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AppSalesBoxes.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(72)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AppSalesBoxesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "77ad34aa",
  "6fae5633"
  
)

/* harmony default export */ var AppSalesBoxes = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=app-sales-boxes.js.map