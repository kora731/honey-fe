(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7df0bfe8"],{"4b85":function(t,e,a){},5178:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticStyle:{"max-width":"1280px"}},[a("div",{ref:"nicehash",staticStyle:{height:"400px"}})])},i=[],r=(a("d81d"),a("d3b7"),a("96cf"),a("bc3a")),s=a.n(r),o=a("ea7f"),c=a.n(o),l={name:"Chart",mounted:function(){var t,e;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(s.a.get("https://api.i43.io/blockchain/cloud_mining/ticks?platform=NICEHASH-STANDARD&algo=SHA256"));case 2:t=a.sent,e=t.data,c.a.chart(this.$refs.nicehash,{title:{text:"Nicehash price & speed."},yAxis:[{title:{text:"speed"},labels:{format:"{value} PH/s"}},{title:{text:"price"},labels:{format:"{value} BTC/PH/s"},opposite:!0}],tooltip:{shared:!0},xAxis:{type:"datetime"},legend:{layout:"vertical",align:"right",verticalAlign:"middle"},plotOptions:{series:{label:{connectorAllowed:!1}}},series:[{name:"Speed",type:"area",yAxis:0,tooltip:{valueDecimals:2,valueSuffix:"PH/s"},data:e.map((function(t){return[1e3*t.ts,t.volume/Math.pow(10,15)]}))},{name:"Price",yAxis:1,tooltip:{valueDecimals:5,valueSuffix:"BTC/PH/s"},data:e.map((function(t){return[1e3*t.ts,t.price*Math.pow(10,15)]}))}],responsive:{rules:[{condition:{maxWidth:500},chartOptions:{legend:{layout:"horizontal",align:"center",verticalAlign:"bottom"}}}]}});case 5:case"end":return a.stop()}}),null,this)}},d=l,u=a("2877"),p=a("6544"),f=a.n(p),h=a("a523"),m=Object(u["a"])(d,n,i,!1,null,"60ad9617",null);e["default"]=m.exports;f()(m,{VContainer:h["a"]})},a523:function(t,e,a){"use strict";a("99af"),a("4de4"),a("b64b"),a("2ca0"),a("20f6"),a("4b85"),a("a15b"),a("498a");var n=a("2b0e");function i(t){return n["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,a){var n=a.props,i=a.data,r=a.children;i.staticClass="".concat(t," ").concat(i.staticClass||"").trim();var s=i.attrs;if(s){i.attrs={};var o=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(i.staticClass+=" ".concat(o.join(" ")))}return n.id&&(i.domProps=i.domProps||{},i.domProps.id=n.id),e(n.tag,i,r)}})}var r=a("d9f7");e["a"]=i("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var a,n=e.props,i=e.data,s=e.children,o=i.attrs;return o&&(i.attrs={},a=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}))),n.id&&(i.domProps=i.domProps||{},i.domProps.id=n.id),t(n.tag,Object(r["a"])(i,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(a||[])}),s)}})}}]);
//# sourceMappingURL=chunk-7df0bfe8.c841c366.js.map