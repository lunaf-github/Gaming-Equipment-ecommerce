(window.webpackJsonp=window.webpackJsonp||[]).push([[12,7],{273:function(t,e,r){var content=r(276);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(28).default)("7fb7a4a8",content,!0,{sourceMap:!1})},274:function(t,e,r){"use strict";r.r(e);r(46),r(38),r(17),r(37);var n={props:{data:{required:!0}},data:function(){return{min:0,max:0,pricerange:0}},computed:{filteredprice:function(){var t=this;return this.data.filter((function(e){return e.price<=t.pricerange}))}},components:{StarRating:r(277).a},methods:{getMaxRange:function(){var t=0;this.data.forEach((function(e){e.price>t&&(t=e.price)})),this.pricerange=Math.ceil(t),this.max=Math.ceil(t)}},mounted:function(){this.getMaxRange()}},c=(r(275),r(19)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"storegrid"},[e("transition-group",{staticClass:"content",attrs:{name:"items",tag:"section"}},t._l(t.filteredprice,(function(r){return e("div",{key:r.id,staticClass:"item"},[e("div",{staticClass:"img-contain"},[e("nuxt-link",{attrs:{to:"/product/".concat(r.id)}},[e("Img",{attrs:{src:"/products/".concat(r.img)}})],1)],1),t._v(" "),e("star-rating",{staticStyle:{margin:"5px 0"},attrs:{rating:r.starrating,"active-color":"#000","star-size":15}}),t._v(" "),e("h3",[t._v(t._s(r.name))]),t._v(" "),e("h4",{staticClass:"price"},[t._v(t._s(r.price))])],1)})),0),t._v(" "),e("aside",[e("h3",[t._v("Special Sale")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam libero iusto nemo laboriosam perferendis voluptas ullam officiis, quibusdam quas quam eveniet est fugit delectus corporis incidunt nam esse suscipit itaque?")]),t._v(" "),e("h3",[t._v("Filter by Price:")]),t._v(" "),e("p",[t._v("\n     Max Price\n     "),e("strong",[t._v("$"+t._s(t.pricerange))])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.pricerange,expression:"pricerange"}],staticClass:"slider",attrs:{id:"pricerange",type:"range",min:t.min,max:t.max,step:"0.1"},domProps:{value:t.pricerange},on:{__r:function(e){t.pricerange=e.target.value}}}),t._v(" "),e("span",{staticClass:"min"},[t._v("$"+t._s(t.min))]),t._v(" "),e("span",{staticClass:"max"},[t._v("$"+t._s(t.max))])])],1)}),[],!1,null,"6ee24b0f",null);e.default=component.exports},275:function(t,e,r){"use strict";r(273)},276:function(t,e,r){var n=r(27)(!1);n.push([t.i,".content[data-v-6ee24b0f]{height:100%;width:100%}.img-contain[data-v-6ee24b0f]{max-height:200px;display:flex;align-content:center;align-items:center}.img-contain img[data-v-6ee24b0f]{width:100%}.item[data-v-6ee24b0f]{max-height:500px;display:flex;justify-content:center;align-items:center;flex-direction:column;margin:20px 0}aside[data-v-6ee24b0f]{height:100%;width:100%}.max[data-v-6ee24b0f]{display:inline-block;float:right}",""]),t.exports=n},321:function(t,e,r){"use strict";r.r(e);r(47),r(39),r(38),r(17),r(77),r(37),r(78);var n=r(29),c=r(61),o=r(274);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)(["desks"])),components:{AppStoreGrid:o.default}},f=d,m=r(19),component=Object(m.a)(f,(function(){return(0,this._self._c)("app-store-grid",{attrs:{data:this.desks}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppStoreGrid:r(274).default})}}]);