(window.webpackJsonp=window.webpackJsonp||[]).push([[18,5],{279:function(t,e,r){var content=r(284);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(28).default)("0ff5b90c",content,!0,{sourceMap:!1})},280:function(t,e,r){"use strict";r.r(e);r(46);var n={computed:{featuredProducts:function(){return this.$store.getters.featuredProducts}}},o=(r(283),r(19)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("section",[t._m(0),t._v(" "),e("div",{staticClass:"featureditems"},t._l(t.featuredProducts,(function(r){return e("div",{key:r.id,staticClass:"item"},[e("nuxt-link",{attrs:{to:"../product/".concat(r.id)}},[e("img",{attrs:{src:"/products/".concat(r.img)}})]),t._v(" "),e("h3",[t._v(t._s(r.name))]),t._v(" "),e("h4",[t._v(t._s(r.price))])],1)})),0)])}),[function(){var t=this._self._c;return t("h2",[t("span",[this._v("Featured Products")])])}],!1,null,"2e146b02",null);e.default=component.exports},283:function(t,e,r){"use strict";r(279)},284:function(t,e,r){var n=r(27)(!1);n.push([t.i,'section[data-v-2e146b02]{margin-top:60px}.featureditems[data-v-2e146b02]{width:100%;margin:20px 0 70px}.featureditems .item[data-v-2e146b02]{border:1px solid #eee2dc;box-shadow:0 3px 10px 0px #eee;border-radius:40px;padding:10px 20px 30px;min-height:150px;justify-self:center;align-self:center;text-align:center}h4[data-v-2e146b02]{color:#d96528;margin:10px 0}h2[data-v-2e146b02]{color:#d96528;text-align:center;overflow:hidden}h2 span[data-v-2e146b02]{display:inline-block;position:relative}h2 span[data-v-2e146b02]:after,h2 span[data-v-2e146b02]:before{content:" ";display:block;height:1px;width:1000px;background:#e6baa4;position:absolute;top:50%}h2 span[data-v-2e146b02]:before{left:-1010px}h2 span[data-v-2e146b02]:after{right:-1010px}@media screen and (max-width: 699px){.featureditems[data-v-2e146b02]{width:83vw;margin-left:5vw}.featureditems div[data-v-2e146b02]{padding:10px 20px;margin-bottom:10px}img[data-v-2e146b02]{width:initial}}@media screen and (min-width: 700px){.featureditems[data-v-2e146b02]{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:1fr;grid-column-gap:20px}.featureditems div[data-v-2e146b02]{padding:40px 50px}img[data-v-2e146b02]{width:100%}}',""]),t.exports=n},304:function(t,e,r){var content=r(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(28).default)("7f4e7e9c",content,!0,{sourceMap:!1})},315:function(t,e,r){"use strict";r(304)},316:function(t,e,r){var n=r(27)(!1);n.push([t.i,".item-contain[data-v-0e5535db]{margin-left:8%;width:80%;display:grid;grid-template-columns:1fr 2fr}img[data-v-0e5535db]{width:100%}",""]),t.exports=n},327:function(t,e,r){"use strict";r.r(e);r(46),r(39),r(63),r(47),r(38),r(17),r(77),r(37),r(78);var n=r(29),o=r(62),c=r(278),d=r(280);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={components:{StarRating:c.a,AppFeatureProducts:d.default},data:function(){return{id:this.$route.params.id,quantity:1,tempcart:[]}},computed:v(v({},Object(o.c)(["storedata"])),{},{product:function(){for(var t,i=0;i<this.storedata.length;i++)this.storedata[i].id===this.id&&(t=this.storedata[i]);return t}}),methods:{cartAdd:function(){var t=this.product;t=v(v({},t),{},{quantity:this.quantity}),this.tempcart.push(t),this.$store.commit("addToCart",v({},t))}}},m=(r(315),r(19)),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"item-contain"},[e("section",{staticClass:"img"},[e("img",{attrs:{src:"/products/".concat(t.product.img)}})]),t._v(" "),e("section",{staticClass:"product-info"},[e("h1",[t._v(t._s(t.product.name))]),t._v(" "),e("star-rating",{staticStyle:{margin:"5px 0"},attrs:{rating:t.product.starrating,"star-size":15,"active-color":"#000"}}),t._v(" "),e("h4",{staticClass:"price"},[t._v(t._s(t.product.price))]),t._v(" "),e("ul",t._l(t.product.description,(function(r){return e("li",{key:r,staticClass:"product-detail"},[t._v(t._s(r))])})),0),t._v(" "),e("div",{staticClass:"product-options"},[e("div",{staticClass:"quantity"},[e("button",{staticClass:"update-num",on:{click:function(e){t.quantity>0?t.quantity--:t.quanty=0}}},[t._v("-")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],attrs:{type:"number"},domProps:{value:t.quantity},on:{input:function(e){e.target.composing||(t.quantity=e.target.value)}}}),t._v(" "),e("button",{staticClass:"update-num",on:{click:function(e){t.quantity++}}},[t._v("+")])])]),t._v(" "),e("p",[e("button",{staticClass:"button purchase",on:{click:t.cartAdd}},[t._v("Add to Cart")])])],1)]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"review"},[e("h2",[t._v("Reviews")]),t._v(" "),e("star-rating",{staticStyle:{},attrs:{rating:t.product.starrating,"active-color":"#000","star-size":15}}),t._v(" "),e("p",[t._v("Great Product!")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iusto placeat consequatur voluptas sit mollitia ratione autem, atque sequi odio laborum, recusandae quia distinctio voluptatibus sint, quae aliquid possimus exercitationem.")])],1),t._v(" "),e("app-feature-products")],1)}),[],!1,null,"0e5535db",null);e.default=component.exports;installComponents(component,{AppFeatureProducts:r(280).default})}}]);