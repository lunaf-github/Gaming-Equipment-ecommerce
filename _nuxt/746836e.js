(window.webpackJsonp=window.webpackJsonp||[]).push([[15,3],{279:function(t,e,r){var content=r(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(28).default)("122c7eac",content,!0,{sourceMap:!1})},280:function(t,e,r){"use strict";r.r(e);r(29);var n={computed:{featuredProducts:function(){return this.$store.getters.featuredProducts}}},o=(r(281),r(20)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("section",[t._m(0),t._v(" "),e("div",{staticClass:"featureditems"},t._l(t.featuredProducts,(function(r){return e("div",{key:r.id,staticClass:"item"},[e("img",{attrs:{src:"/products/".concat(r.img)}}),t._v(" "),e("h3",[t._v(t._s(r.name))]),t._v(" "),e("h4",[t._v(t._s(r.price))])])})),0)])}),[function(){var t=this._self._c;return t("h2",[t("span",[this._v("Featured Products")])])}],!1,null,"7503908b",null);e.default=component.exports},281:function(t,e,r){"use strict";r(279)},282:function(t,e,r){var n=r(27)(!1);n.push([t.i,'section[data-v-7503908b]{margin-top:60px}.featureditems[data-v-7503908b]{width:100%;margin:20px 0 70px}.featureditems .item[data-v-7503908b]{border:1px solid #eee2dc;box-shadow:0 3px 10px 0px #eee;border-radius:40px;padding:10px 20px 30px;min-height:150px;justify-self:center;align-self:center;text-align:center}h4[data-v-7503908b]{color:#d96528;margin:10px 0}h2[data-v-7503908b]{color:#d96528;text-align:center;overflow:hidden}h2 span[data-v-7503908b]{display:inline-block;position:relative}h2 span[data-v-7503908b]:after,h2 span[data-v-7503908b]:before{content:" ";display:block;height:1px;width:1000px;background:#e6baa4;position:absolute;top:50%}h2 span[data-v-7503908b]:before{left:-1010px}h2 span[data-v-7503908b]:after{right:-1010px}@media screen and (max-width: 699px){.featureditems[data-v-7503908b]{width:83vw;margin-left:5vw}.featureditems div[data-v-7503908b]{padding:10px 20px;margin-bottom:10px}img[data-v-7503908b]{width:initial}}@media screen and (min-width: 700px){.featureditems[data-v-7503908b]{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:1fr;grid-column-gap:20px}.featureditems div[data-v-7503908b]{padding:40px 50px}img[data-v-7503908b]{width:100%}}',""]),t.exports=n},315:function(t,e,r){"use strict";r.r(e);r(29),r(40),r(62),r(47),r(39),r(16),r(79),r(38),r(80);var n=r(30),o=r(61),c=r(278),d=r(280);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={components:{StarRating:c.a,AppFeatureProducts:d.default},data:function(){return{id:this.$route.params.id}},computed:f(f({},Object(o.c)(["storedata"])),{},{product:function(){for(var t,i=0;i<this.storedata.length;i++)this.storedata[i].id===this.id&&(t=this.storedata[i]);return t}})},m=r(20),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"item-contain"},[e("section",{staticClass:"img"},[e("img",{attrs:{src:"/products/".concat(t.product.img)}})]),t._v(" "),e("section",{staticClass:"product-info"},[e("h1",[t._v(t._s(t.product.name))]),t._v(" "),e("star-rating",{staticStyle:{margin:"5px 0"},attrs:{rating:t.product.starrating,"star-size":15,"active-color":"#000"}}),t._v(" "),e("h4",{staticClass:"price"},[t._v(t._s(t.product.price))]),t._v(" "),e("ul",t._l(t.product.description,(function(r){return e("li",{key:r},[t._v(t._s(r))])})),0)],1)]),t._v(" "),e("app-feature-products")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppFeatureProducts:r(280).default})}}]);