(function(e){function t(t){for(var n,r,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,r=1;r<a.length;r++){var i=a[r];0!==c[i]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},c={app:0},o=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-895f96b8":"bb3b2a90","chunk-46386b1b":"2fbb4fd6","chunk-56a02a5c":"8beee04f","chunk-26d3431a":"14193f17","chunk-65b089af":"d52eff95"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a={"chunk-895f96b8":1,"chunk-46386b1b":1,"chunk-56a02a5c":1,"chunk-26d3431a":1,"chunk-65b089af":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-895f96b8":"d1cd8238","chunk-46386b1b":"ddc9cf01","chunk-56a02a5c":"97945c54","chunk-26d3431a":"c7779bac","chunk-65b089af":"3d0f83db"}[e]+".css",c=s.p+n,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===c))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===n||l===c)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete r[e],p.parentNode.removeChild(p),a(o)},p.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[e]=0})));var n=c[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,a){n=c[e]=[t,a]}));t.push(n[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var a=c[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}c[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0974":function(e,t){e.exports={state:{data:{bitdeer:{guaranteedUptime:"-",deliveryTime:"after 1 day",acceptedPayment:"BTC/BCH/ETH/LTC\nUSDT/TETHER/USDT(OMNI)",payout:"$coin"},btccom:{guaranteedUptime:"100%",deliveryTime:"after 1 day",acceptedPayment:"-",payout:"$coin"},genesis_mining:{guaranteedUptime:"100%",deliveryTime:"immediately",acceptedPayment:"CreditCard(USD)\nBTC/LTC/DOGE/DASH/ZCASH/BCH",payout:"Default: $coin\nCan choose to swap:\nBTC/DASH/DOGE/ZEC/BCH/BTG"},oxbtc:{guaranteedUptime:"-",deliveryTime:"after 2 days",acceptedPayment:"BTC/ETH/LTC\nUSDT/Credit Card",payout:"$coin"},viabtc:{guaranteedUptime:"100%",deliveryTime:"immediately",acceptedPayment:"BTC",payout:"$coin"},wayi:{guaranteedUptime:"100%",deliveryTime:"after 1 day",acceptedPayment:"CNY/USDT",payout:"$coin/CNY"},iqmining:{guaranteedUptime:"-",deliveryTime:"after 1 day",acceptedPayment:"Visa/Perfect money\nBTC/Altcoins",payout:"$coin"},miningzoo:{guaranteedUptime:"100%",deliveryTime:"after 1 day",deliveryTimeFutures:"after 30 days",acceptedPayment:"-",payout:"$coin"}}}}},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("2bdd"),c=a.n(r),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-btn",{staticClass:"hlHeader",attrs:{href:"#/",text:""}},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Honey Lemon Logo",contain:"",src:a("b4be"),transition:"scale-transition",width:"36"}}),n("span",{staticClass:"mr-2 hlLogo"},[e._v("Honey Lemon")])],1)],1),n("v-spacer"),e._l(e.navItems,(function(t){var a=t[0],r=t[1];return n("v-btn",{key:r,attrs:{href:r,text:""}},[n("span",{staticClass:"mr-2",class:{"nav-active":"#"+e.$route.path===r}},[e._v(e._s(a))])])}))],2),n("v-content",[n("router-view")],1),n("v-footer",{staticClass:"footer-space white--text",attrs:{color:"primary",dark:""}},[n("div",[e._v(" Honey Lemon ©"+e._s((new Date).getFullYear())+" ")]),n("a",{staticClass:"mx-4 white--text",staticStyle:{"text-decoration":"none"},attrs:{href:"#/about"}},[e._v(" Disclaimer ")]),n("v-spacer"),n("div",{staticClass:"footer-social"},[n("a",{staticClass:"white--text mr-1",staticStyle:{"text-decoration":"none"},attrs:{href:"mailto:yours@honeylemon.market",target:"_top"}},[n("v-icon",{staticClass:"ma-2 white--text display-1"},[e._v("mdi-email")])],1),n("a",{attrs:{href:"https://twitter.com/HoneylemonM",target:"_blank"}},[n("v-icon",{staticClass:"ma-2 white--text display-1"},[e._v("mdi-twitter")])],1),n("a",{attrs:{href:"https://t.me/joinchat/HD_sbVF5xOzoBZNuIcDlqQ",target:"_blank"}},[n("v-icon",{staticClass:"ma-2 white--text display-1"},[e._v("mdi-telegram")])],1)])],1)],1)},i=[],s={name:"App",beforeMount:function(){this.$store.dispatch("init")},data:function(){return{navItems:[["HOME","#/"],["DEALS","#/products"],["FAQ","#/about"]]}}},u=s,l=(a("5c0b"),a("2877")),d=a("6544"),p=a.n(d),f=a("7496"),m=a("40dc"),h=a("8336"),y=a("a75b"),b=a("553a"),v=a("132d"),g=a("adda"),w=a("2fa4"),S=Object(l["a"])(u,o,i,!1,null,null,null),O=S.exports;p()(S,{VApp:f["a"],VAppBar:m["a"],VBtn:h["a"],VContent:y["a"],VFooter:b["a"],VIcon:v["a"],VImg:g["a"],VSpacer:w["a"]});var C=a("f309"),T=(a("5363"),a("fcf4"));n["a"].use(C["a"]);var P=new C["a"]({icons:{iconfont:"mdi"},theme:{themes:{light:{primary:T["a"].grey.darken4,secondary:T["a"].yellow.accent2,accent:T["a"].cyan.lighten4,error:T["a"].red.accent3,yellow:T["a"].yellow.darken3},dark:{primary:T["a"].blue.lighten3}}}}),x=(a("a4d3"),a("99af"),a("4de4"),a("4160"),a("c975"),a("d81d"),a("13d5"),a("4ec9"),a("e439"),a("dbb4"),a("b64b"),a("d3b7"),a("6062"),a("3ca3"),a("159b"),a("ddb0"),a("3835")),k=a("2909"),_=(a("96cf"),a("ade3")),H=a("2ef0"),B=a.n(H),E=a("2f62"),j=a("bc3a"),D=a.n(j),A=a("0974"),M=a.n(A);function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function L(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(Object(a),!0).forEach((function(t){Object(_["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}n["a"].use(E["a"]);var N=["BTC","ETH","BCH"],V={coinPrice:0,maxDiscount:0,maxPayOff:0,maxPayOffBtc:0,price:0},$=new E["a"].Store({state:{selectedProduct:null,niceHash:{SHA256:{minPrice:0,avgPrice:0},DAGGERHASHIMOTO:{minPrice:0,avgPrice:0}},products:[],coins:N,summary:{BTC:L({},V,{unit:"T",sellers:new Set,durationSellers:new Map,contracts:[]}),ETH:L({},V,{unit:"M",sellers:new Set,durationSellers:new Map,contracts:[]}),BCH:L({},V,{unit:"T",sellers:new Set,durationSellers:new Map,contracts:[]}),BSV:L({},V,{unit:"T",sellers:new Set,durationSellers:new Map,contracts:[]}),ETC:L({},V,{unit:"M",sellers:new Set,durationSellers:new Map,contracts:[]})},selectedCoins:["BTC"],favorites:JSON.parse(localStorage.getItem("favorites")||"[]")},mutations:{setProducts:function(e,t){e.products=t,t.forEach((function(t){var a=e.summary[t.coin];a&&(a.sellers.add(t.issuers),a.maxDiscount=Math.max(a.maxDiscount,t.expected_discount),a.price=Math.min(a.price||999999,t.contract_cost),a.coinPrice=t.btc_price,a.maxPayOff=Math.max(a.maxPayOff,t.mining_payoff),a.maxPayOffBtc=Math.max(a.maxPayOffBtc,t.mining_payoff_btc),a.contracts.push(t))}));var a=function(e,t){return B.a.chain(e.contracts).filter((function(e){return e.duration<=t})).sortBy((function(e){return e.duration+(1-e.expected_discount)})).sortedUniqBy((function(t){var a=e.durationSellers.get(t.duration)||new Set;return a.add(t.issuers),e.durationSellers.set(t.duration,a),t.duration})).value()};e.summary.BTC.contracts=a(e.summary.BTC,360),e.summary.ETH.contracts=a(e.summary.ETH,2e3),e.summary.BCH.contracts=a(e.summary.BCH,2e3),e.summary.BSV.contracts=a(e.summary.BSV,2e3),e.summary.ETC.contracts=a(e.summary.ETC,2e3)},toggleFavorites:function(e,t){e.favorites.indexOf(t)<0?e.favorites.push(t):e.favorites=e.favorites.filter((function(e){return e!==t})),localStorage.setItem("favorites",JSON.stringify(e.favorites))},selectProduct:function(e,t){e.selectedProduct=t},setNiceHash:function(e,t){var a=t.algorithm,n=t.data;Object.assign(e.niceHash[a],n)}},actions:{init:function(e){var t,a,n,r,c;return regeneratorRuntime.async((function(o){while(1)switch(o.prev=o.next){case 0:return t=e.commit,o.next=3,regeneratorRuntime.awrap(D.a.get("https://api.i43.io/honey"));case 3:a=o.sent,n=a.data,r=Math.max.apply(Math,Object(k["a"])(n.map((function(e){return e.update_time})))),t("setProducts",n.filter((function(e){return e.sold_percent<99.99&&r-e.update_time<3600}))),c=function(e){var a,n,r,c,o,i,s,u;return regeneratorRuntime.async((function(l){while(1)switch(l.prev=l.next){case 0:return l.next=2,regeneratorRuntime.awrap(D.a.get("https://api.i43.io/nicehash/main/api/v2/hashpower/orderBook?algorithm="+e));case 2:a=l.sent,n=a.data,r=[].concat(Object(k["a"])(n.stats.EU.orders),Object(k["a"])(n.stats.USA.orders)).filter((function(e){return"STANDARD"===e.type&&e.acceptedSpeed>0||e.payingSpeed>0})),c=Math.min.apply(Math,Object(k["a"])(r.map((function(e){return e.price})))),o=r.reduce((function(e,t){return[e[0]+t.price*(1*t.acceptedSpeed+1*t.payingSpeed),e[1]+1*t.acceptedSpeed+1*t.payingSpeed]}),[0,0]),i=Object(x["a"])(o,2),s=i[0],u=i[1],t("setNiceHash",{algorithm:e,data:{minPrice:c,avgPrice:s/u}});case 8:case"end":return l.stop()}}))},c("SHA256"),c("DAGGERHASHIMOTO");case 10:case"end":return o.stop()}}))}},modules:{issuers:M.a}}),I=a("8c4f");n["a"].use(I["a"]);var R=[{path:"/",name:"home",component:function(){return Promise.all([a.e("chunk-895f96b8"),a.e("chunk-56a02a5c"),a.e("chunk-26d3431a")]).then(a.bind(null,"bb51"))}},{path:"/products",name:"products",component:function(){return Promise.all([a.e("chunk-895f96b8"),a.e("chunk-56a02a5c"),a.e("chunk-65b089af")]).then(a.bind(null,"e6dc"))}},{path:"/about",name:"about",component:function(){return Promise.all([a.e("chunk-895f96b8"),a.e("chunk-46386b1b")]).then(a.bind(null,"f820"))}}],F=new I["a"]({routes:R}),G=F;n["a"].config.productionTip=!1,n["a"].use(c.a,{config:{id:"UA-155181824-1"}},G),new n["a"]({vuetify:P,store:$,router:G,render:function(e){return e(O)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var n=a("7694"),r=a.n(n);r.a},7694:function(e,t,a){},b4be:function(e,t,a){e.exports=a.p+"img/hl-logo.22bcfb23.png"}});
//# sourceMappingURL=app.7fdfb9bd.js.map