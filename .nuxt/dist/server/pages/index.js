exports.ids = [16,4,5,7];
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

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(71);
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
  add("5d14e659", content, true, context)
};

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTextlockup_vue_vue_type_style_index_0_id_6e9307ab_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTextlockup_vue_vue_type_style_index_0_id_6e9307ab_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTextlockup_vue_vue_type_style_index_0_id_6e9307ab_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTextlockup_vue_vue_type_style_index_0_id_6e9307ab_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppTextlockup_vue_vue_type_style_index_0_id_6e9307ab_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".textlockup[data-v-6e9307ab]{display:grid;grid-template-columns:50px 100px 1fr;grid-template-rows:50px 50px 100px 20px 1fr;grid-column-gap:0px;grid-row-gap:0px}.textlockup .new[data-v-6e9307ab]{grid-area:1/3/5/4;font-size:23vmin;color:#efefef;text-transform:uppercase}.textlockup .sale[data-v-6e9307ab]{grid-area:2/3/3/4;font-size:6.5vmin;color:#d96528;font-family:\"PT Serif\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen,Ubuntu,Cantarell,\"Open Sans\",\"Helvetica Neue\",sans-serif}.textlockup .collection[data-v-6e9307ab]{grid-area:3/3/4/4;font-size:2vmin;letter-spacing:.2em;text-transform:uppercase}.textlockup .details[data-v-6e9307ab]{grid-area:4/3/5/4;font-size:2vmin;letter-spacing:.2em;text-transform:uppercase}.textlockup .img[data-v-6e9307ab]{grid-area:1/3/6/4;max-width:950px}.textlockup .img img[data-v-6e9307ab]{width:95%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSalesBoxes_vue_vue_type_style_index_0_id_29ba55ef_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSalesBoxes_vue_vue_type_style_index_0_id_29ba55ef_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSalesBoxes_vue_vue_type_style_index_0_id_29ba55ef_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSalesBoxes_vue_vue_type_style_index_0_id_29ba55ef_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSalesBoxes_vue_vue_type_style_index_0_id_29ba55ef_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".boxes[data-v-29ba55ef]{margin:70px 0}.boxes div[data-v-29ba55ef]{border:1px solid #ddd;min-height:150px;justify-self:center;align-self:center;text-align:center}.boxes .box1[data-v-29ba55ef]{grid-area:1/1/2/2}.boxes .box2[data-v-29ba55ef]{grid-area:1/2/2/3}.boxes .box3[data-v-29ba55ef]{grid-area:1/3/2/4}h4[data-v-29ba55ef]{text-transform:uppercase;letter-spacing:.15em;margin:0 0 10px 0}@media screen and (min-width: 700px){.boxes[data-v-29ba55ef]{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:1fr;grid-column-gap:20px;grid-row-gap:0px}.boxes div[data-v-29ba55ef]{padding:40px 50px}}@media screen and (max-width: 699px){.boxes[data-v-29ba55ef]{width:83vw;margin-left:5vw}.boxes div[data-v-29ba55ef]{padding:10px 20px;margin-bottom:10px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 76:
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
  
  var style0 = __webpack_require__(70)
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

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppSalesBoxes.vue?vue&type=template&id=29ba55ef&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "boxes"
  }, [_vm._ssrNode(_vm._ssrList(_vm.boxes, function (box, i) {
    return "<div" + _vm._ssrClass(null, `box${i}`) + " data-v-29ba55ef><img" + _vm._ssrAttr("src", box.icon) + " alt=\"service icon\" data-v-29ba55ef> <h4 data-v-29ba55ef>" + _vm._ssrEscape(_vm._s(box.heading)) + "</h4> <p data-v-29ba55ef>" + _vm._ssrEscape(_vm._s(box.details)) + "</p></div>";
  }))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/AppSalesBoxes.vue?vue&type=template&id=29ba55ef&scoped=true&

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
  "29ba55ef",
  "6fae5633"
  
)

/* harmony default export */ var AppSalesBoxes = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("b51ae250", content, true, context)
};

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f4c2321e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f4c2321e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f4c2321e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f4c2321e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f4c2321e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "main[data-v-f4c2321e]{width:75vw}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=f4c2321e&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('app-textlockup'), _vm._ssrNode(" "), _c('app-sales-boxes'), _vm._ssrNode(" "), _c('app-textlockup', {
    scopedSlots: _vm._u([{
      key: "img",
      fn: function () {
        return [_c('img', {
          attrs: {
            "src": "/gamer-setup-2.jpg",
            "alt": "bag"
          }
        })];
      },
      proxy: true
    }, {
      key: "new",
      fn: function () {
        return [_vm._v("60%")];
      },
      proxy: true
    }, {
      key: "sale",
      fn: function () {
        return [_vm._v("Storewide Sale")];
      },
      proxy: true
    }, {
      key: "collection",
      fn: function () {
        return [_vm._v("Summer")];
      },
      proxy: true
    }, {
      key: "details",
      fn: function () {
        return [_vm._v("All accessories")];
      },
      proxy: true
    }])
  }), _vm._ssrNode(" "), _c('app-feature-products')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=f4c2321e&scoped=true&

// EXTERNAL MODULE: ./components/AppTextlockup.vue + 4 modules
var AppTextlockup = __webpack_require__(76);

// EXTERNAL MODULE: ./components/AppSalesBoxes.vue + 4 modules
var AppSalesBoxes = __webpack_require__(77);

// EXTERNAL MODULE: ./components/AppFeatureProducts.vue + 4 modules
var AppFeatureProducts = __webpack_require__(57);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&



/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'IndexPage',
  components: {
    AppTextlockup: AppTextlockup["default"],
    AppSalesBoxes: AppSalesBoxes["default"],
    AppFeatureProducts: AppFeatureProducts["default"]
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(82)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f4c2321e",
  "c6b26c8e"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AppTextlockup: __webpack_require__(76).default,AppSalesBoxes: __webpack_require__(77).default,AppFeatureProducts: __webpack_require__(57).default})


/***/ })

};;
//# sourceMappingURL=index.js.map