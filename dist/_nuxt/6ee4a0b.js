(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{274:function(t,e,n){var content=n(277);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("7fb7a4a8",content,!0,{sourceMap:!1})},275:function(t,e,n){"use strict";n.r(e);n(46),n(38),n(17),n(37);var r={props:{data:{required:!0}},data:function(){return{min:0,max:0,pricerange:0}},computed:{filteredprice:function(){var t=this;return this.data.filter((function(e){return e.price<=t.pricerange}))}},components:{StarRating:n(278).a},methods:{getMaxRange:function(){var t=0;this.data.forEach((function(e){e.price>t&&(t=e.price)})),this.pricerange=Math.ceil(t),this.max=Math.ceil(t)}},mounted:function(){this.getMaxRange()}},c=(n(276),n(19)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"storegrid"},[e("transition-group",{staticClass:"content",attrs:{name:"items",tag:"section"}},t._l(t.filteredprice,(function(n){return e("div",{key:n.id,staticClass:"item"},[e("div",{staticClass:"img-contain"},[e("nuxt-link",{attrs:{to:"/product/".concat(n.id)}},[e("Img",{attrs:{src:"/products/".concat(n.img)}})],1)],1),t._v(" "),e("star-rating",{staticStyle:{margin:"5px 0"},attrs:{rating:n.starrating,"active-color":"#000","star-size":15}}),t._v(" "),e("h3",[t._v(t._s(n.name))]),t._v(" "),e("h4",{staticClass:"price"},[t._v(t._s(n.price))])],1)})),0),t._v(" "),e("aside",[e("h3",[t._v("Special Sale")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam libero iusto nemo laboriosam perferendis voluptas ullam officiis, quibusdam quas quam eveniet est fugit delectus corporis incidunt nam esse suscipit itaque?")]),t._v(" "),e("h3",[t._v("Filter by Price:")]),t._v(" "),e("p",[t._v("\n     Max Price\n     "),e("strong",[t._v("$"+t._s(t.pricerange))])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.pricerange,expression:"pricerange"}],staticClass:"slider",attrs:{id:"pricerange",type:"range",min:t.min,max:t.max,step:"0.1"},domProps:{value:t.pricerange},on:{__r:function(e){t.pricerange=e.target.value}}}),t._v(" "),e("span",{staticClass:"min"},[t._v("$"+t._s(t.min))]),t._v(" "),e("span",{staticClass:"max"},[t._v("$"+t._s(t.max))])])],1)}),[],!1,null,"6ee24b0f",null);e.default=component.exports},276:function(t,e,n){"use strict";n(274)},277:function(t,e,n){var r=n(27)(!1);r.push([t.i,".content[data-v-6ee24b0f]{height:100%;width:100%}.img-contain[data-v-6ee24b0f]{max-height:200px;display:flex;align-content:center;align-items:center}.img-contain img[data-v-6ee24b0f]{width:100%}.item[data-v-6ee24b0f]{max-height:500px;display:flex;justify-content:center;align-items:center;flex-direction:column;margin:20px 0}aside[data-v-6ee24b0f]{height:100%;width:100%}.max[data-v-6ee24b0f]{display:inline-block;float:right}",""]),t.exports=r}}]);