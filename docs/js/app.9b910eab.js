(function(t){function e(e){for(var r,n,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&d.push(s[n][0]),s[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,n=1;n<a.length;n++){var i=a[n];0!==s[i]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={app:0},s={app:0},o=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"b63f8046"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"548966d2"}[t]+".css",s=c.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=o[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===s))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===r||u===s)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete n[t],p.parentNode.removeChild(p),a(o)},p.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){n[t]=0})));var r=s[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,a){r=s[t]=[e,a]}));e.push(r[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var a=s[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,a[1](d)}s[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("div",{staticClass:"d-flex align-center"},[r("v-btn",{attrs:{href:"#/",text:""}},[r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:a("c857"),transition:"scale-transition",width:"40"}}),r("span",{staticClass:"mr-2"},[t._v("Honey Lemon")])],1)],1),r("v-spacer"),r("v-btn",{attrs:{href:"#/",text:""}},[r("span",{staticClass:"mr-2"},[t._v("HOME")])]),r("v-btn",{attrs:{href:"#/products",text:""}},[r("span",{staticClass:"mr-2"},[t._v("DEALS")])]),r("v-btn",{attrs:{href:"#/about",text:""}},[r("span",{staticClass:"mr-2"},[t._v("FAQ")])])],1),r("v-content",[r("router-view")],1)],1)},s=[],o={name:"App",components:{},beforeMount:function(){this.$store.dispatch("init")},data:function(){return{}}},i=o,c=a("2877"),l=a("6544"),u=a.n(l),d=a("7496"),p=a("40dc"),f=a("8336"),v=a("a75b"),m=a("adda"),b=a("2fa4"),h=Object(c["a"])(i,n,s,!1,null,null,null),y=h.exports;u()(h,{VApp:d["a"],VAppBar:p["a"],VBtn:f["a"],VContent:v["a"],VImg:m["a"],VSpacer:b["a"]});var g=a("f309"),C=(a("5363"),a("fcf4"));r["a"].use(g["a"]);var _=new g["a"]({icons:{iconfont:"mdi"},theme:{themes:{light:{primary:C["a"].grey.darken4,secondary:C["a"].yellow.darken3,accent:C["a"].shades.blue,error:C["a"].red.accent3},dark:{primary:C["a"].blue.lighten3}}}}),w=(a("d3b7"),a("96cf"),a("2f62")),x=a("bc3a"),E=a.n(x);r["a"].use(w["a"]);var T=new w["a"].Store({state:{products:[]},mutations:{setProducts:function(t,e){t.products=e}},actions:{init:function(t){var e,a;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return e=t.commit,r.next=3,regeneratorRuntime.awrap(E.a.get("https://api.i43.io/honey"));case 3:a=r.sent,e("setProducts",a.data);case 5:case"end":return r.stop()}}))}},modules:{}}),O=a("8c4f"),S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"content"},[a("v-row",{staticClass:"layout",attrs:{justify:"center"}},[a("v-col",{staticClass:"col slogan",attrs:{cols:"4",sm:"12",lg:"4"}},[a("span",{staticClass:"yellow"},[t._v("SWEET DEALS")]),a("br"),a("span",{staticClass:"yellow"},[t._v("IN CRYPTO")]),a("br"),a("span",{staticClass:"yellow"},[t._v("MINING")]),a("br")]),a("v-col",{staticClass:"col slogan",attrs:{cols:"5",sm:"12",lg:"5"}},[a("span",{staticClass:"black"},[t._v("BEST PRICE x OBJECTIVE METRICS")]),a("form",{staticClass:"validate",attrs:{action:"https://market.us4.list-manage.com/subscribe/post?u=466b3785cad82e2db6271ffcc&id=2f33950de0",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",target:"_blank",novalidate:""}},[a("div",{staticClass:"desc"},[t._v(" We aggregate and rate existing cloud mining contracts, for transparency, standardization and price discovery. ")]),a("div",{staticClass:"desc sign_up"},[t._v("Sign up for fresh updates & never miss a juicy deal.")]),a("div",{staticClass:"row form"},[a("div",{staticStyle:{position:"absolute",left:"-5000px"},attrs:{"aria-hidden":"true"}},[a("input",{attrs:{type:"text",name:"b_466b3785cad82e2db6271ffcc_2f33950de0",tabindex:"-1",value:""}})]),a("label",{staticStyle:{display:"none"},attrs:{for:"email"}},[t._v("email")]),a("input",{attrs:{id:"email",name:"EMAIL",type:"email",placeholder:"Enter email address"}}),a("input",{staticClass:"btn",attrs:{type:"submit",value:"GO"}})])])])],1),a("v-row",{staticClass:"mt-10",attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"8",sm:"12",lg:"8"}},[a("div",{staticClass:"display-2"},[t._v("Honey Lemon -> Cryptocurrancy Mining ")]),a("div",{staticClass:"headline"},[t._v("Discover best deals in cloud mining contracts listed across reputable platforms: ")])])],1),a("v-row",{staticClass:"deals d-flex",attrs:{justify:"center"}},t._l(t.products,(function(e){return a("v-col",{key:e.duration,staticClass:"mx-5",attrs:{cols:"4",sm:"12",md:"4",lg:"4"}},[a("v-card",{staticClass:"mx-auto",attrs:{href:"#/products",height:"360","max-width":"560"}},[a("v-card-text",{staticClass:"text-left"},[a("div",{staticClass:"display-2 ma-4"},[t._v(t._s(e.type))]),a("div",{staticClass:"ma-4"},[t._v("mining contract")]),a("div",{staticClass:"ma-4"},[t._v(t._s(e.sellers)+" Platforms")]),a("v-divider"),a("div",{staticClass:"ma-4"},[a("v-icon",[t._v("mdi-sale")]),t._v(" up to 22% OFF vs buying BTC")],1),a("div",{staticClass:"ma-4"},[a("v-icon",[t._v("mdi-tag-heart")]),t._v("as low as $0.1139 / T / Day")],1),a("div",{staticClass:"ma-4"},[a("v-icon",[t._v("mdi-coin")]),t._v("BTC price: $7,147.01 (-1.63%)")],1),a("div",{staticClass:"ma-4"},[a("v-icon",[t._v("mdi-treasure-chest")]),t._v("BTC mining earnings: $0.1388 / T / Day")],1)],1)],1)],1)})),1),a("v-row",{staticClass:"row faq"},[a("h2",[t._v("FAQ")])])],1)},j=[],k={name:"home",components:{},data:function(){return{products:[{type:"BTC",duration:"30Days",price:"0.45/TH/D",sellers:10},{type:"ETH",duration:"60Days",price:"0.43/TH/D",sellers:8}]}}},P=k,V=(a("8771"),a("b0af")),A=a("99d9"),D=a("62ad"),B=a("a523"),L=a("ce7e"),I=a("132d"),M=a("0fd9"),N=Object(c["a"])(P,S,j,!1,null,"3d83dd66",null),H=N.exports;u()(N,{VCard:V["a"],VCardText:A["a"],VCol:D["a"],VContainer:B["a"],VDivider:L["a"],VIcon:I["a"],VRow:M["a"]}),r["a"].use(O["a"]);var $=[{path:"/",name:"home",component:H},{path:"/products",name:"products",component:function(){return a.e("about").then(a.bind(null,"e6dc"))}},{path:"/product",name:"product",component:function(){return a.e("about").then(a.bind(null,"d2f1"))}},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],R=new O["a"]({routes:$}),F=R;r["a"].config.productionTip=!1,new r["a"]({vuetify:_,store:T,router:F,render:function(t){return t(y)}}).$mount("#app")},8771:function(t,e,a){"use strict";var r=a("cd8b"),n=a.n(r);n.a},c857:function(t,e,a){t.exports=a.p+"img/hl-logo.1a4fb611.svg"},cd8b:function(t,e,a){}});
//# sourceMappingURL=app.9b910eab.js.map