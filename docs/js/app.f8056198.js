(function(e){function t(t){for(var a,r,i=t[0],s=t[1],u=t[2],d=0,l=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&l.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);p&&p(t);while(l.length)l.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o={app:0},c=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-895f96b8":"bb3b2a90","chunk-46386b1b":"2fbb4fd6","chunk-dd207860":"55550e4b","chunk-3c916ee5":"fa8c9357","chunk-74596bdc":"872d2053"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-895f96b8":1,"chunk-46386b1b":1,"chunk-dd207860":1,"chunk-3c916ee5":1,"chunk-74596bdc":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-895f96b8":"d1cd8238","chunk-46386b1b":"ddc9cf01","chunk-dd207860":"97945c54","chunk-3c916ee5":"b9f58b49","chunk-74596bdc":"bec4d14f"}[e]+".css",o=s.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===a||d===o))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){u=l[i],d=u.getAttribute("data-href");if(d===a||d===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],p.parentNode.removeChild(p),n(c)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=c);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=i(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,n[1](l)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0974":function(e,t){e.exports={state:{data:{bitdeer:{guaranteedUptime:"-",deliveryTime:"after 1 day",acceptedPayment:"BTC/BCH/ETH/LTC\nUSDT/TETHER/USDT(OMNI)",payout:"$coin"},btccom:{guaranteedUptime:"100%",deliveryTime:"after 1 day",acceptedPayment:"-",payout:"$coin"},genesis_mining:{guaranteedUptime:"100%",deliveryTime:"immediately",acceptedPayment:"CreditCard(USD)\nBTC/LTC/DOGE/DASH/ZCASH/BCH",payout:"Default: $coin\nCan choose to swap:\nBTC/DASH/DOGE/ZEC/BCH/BTG"},oxbtc:{guaranteedUptime:"-",deliveryTime:"after 2 days",acceptedPayment:"BTC/ETH/LTC\nUSDT/Credit Card",payout:"$coin"},viabtc:{guaranteedUptime:"100%",deliveryTime:"immediately",acceptedPayment:"BTC",payout:"$coin"},wayi:{guaranteedUptime:"100%",deliveryTime:"after 1 day",acceptedPayment:"CNY/USDT",payout:"$coin/CNY"},iqmining:{guaranteedUptime:"-",deliveryTime:"after 1 day",acceptedPayment:"Visa/Perfect money\nBTC/Altcoins",payout:"$coin"},miningzoo:{guaranteedUptime:"100%",deliveryTime:"after 1 day",deliveryTimeFutures:"after 30 days",acceptedPayment:"-",payout:"$coin"}}}}},4360:function(e,t,n){"use strict";n.d(t,"b",(function(){return v}));n("a4d3"),n("99af"),n("4de4"),n("4160"),n("c975"),n("d81d"),n("13d5"),n("4ec9"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("6062"),n("3ca3"),n("159b"),n("ddb0");var a=n("3835"),r=n("2909"),o=(n("96cf"),n("ade3")),c=n("2ef0"),i=n.n(c),s=n("2b0e"),u=n("2f62"),d=n("bc3a"),l=n.n(d),p=n("0974"),f=n.n(p);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}s["a"].use(u["a"]);var y=["BTC","ETH","BCH"],b={coinPrice:0,maxDiscount:0,maxPayOff:0,maxPayOffBtc:0,price:0,hashrate:0,reward:0};function v(e){var t=Math.round(e/30);if(t<=1)return"1 month";if(t<12)return t+" months";var n=Math.round(e/365);return 1===n?"1 year":n+" years"}t["a"]=new u["a"].Store({state:{selectedProduct:null,niceHash:{SHA256:{minPrice:0,avgPrice:0},DAGGERHASHIMOTO:{minPrice:0,avgPrice:0}},products:[],coins:y,summary:{BTC:h({},b,{unit:"T",sellers:new Set,durationSellers:new Map,contracts:[]}),ETH:h({},b,{unit:"M",sellers:new Set,durationSellers:new Map,contracts:[]}),BCH:h({},b,{unit:"T",sellers:new Set,durationSellers:new Map,contracts:[]})},selectedCoins:["BTC"],favorites:JSON.parse(localStorage.getItem("favorites")||"[]")},mutations:{setProducts:function(e,t){t=t.map((function(e){return h({},e,{durationAlias:v(e.duration)})})),e.products=t,t.forEach((function(t){var n=e.summary[t.coin];n&&(n.sellers.add(t.issuers),n.maxDiscount=Math.max(n.maxDiscount,t.expected_discount),n.price=Math.min(n.price||999999,t.contract_cost),n.coinPrice=t.btc_price,n.maxPayOff=Math.max(n.maxPayOff,t.mining_payoff),n.maxPayOffBtc=Math.max(n.maxPayOffBtc,t.mining_payoff_btc),n.contracts.push(t))}));var n=function(e){return i.a.chain(e.contracts).sortBy(["durationAlias","contract_cost"]).sortedUniqBy((function(t){var n=e.durationSellers.get(t.durationAlias)||new Set;return n.add(t.issuers),e.durationSellers.set(t.durationAlias,n),t.durationAlias})).sortBy("duration").value()};e.summary.BTC.contracts=n(e.summary.BTC),e.summary.ETH.contracts=n(e.summary.ETH),e.summary.BCH.contracts=n(e.summary.BCH)},setHashrate:function(e,t){Object.assign(e.summary[t.coin],t)},toggleFavorites:function(e,t){e.favorites.indexOf(t)<0?e.favorites.push(t):e.favorites=e.favorites.filter((function(e){return e!==t})),localStorage.setItem("favorites",JSON.stringify(e.favorites))},selectProduct:function(e,t){e.selectedProduct=t},setNiceHash:function(e,t){var n=t.algorithm,a=t.data;Object.assign(e.niceHash[n],a)}},actions:{init:function(e){var t,n,o,c,i;return regeneratorRuntime.async((function(s){while(1)switch(s.prev=s.next){case 0:return t=e.commit,s.next=3,regeneratorRuntime.awrap(l.a.get("https://api.i43.io/honey"));case 3:n=s.sent,o=n.data,c=Math.max.apply(Math,Object(r["a"])(o.map((function(e){return e.update_time})))),t("setProducts",o.filter((function(e){return e.sold_percent<99.99&&c-e.update_time<3600}))),i=function(e){var n,o,c,i,s,u,d,p;return regeneratorRuntime.async((function(f){while(1)switch(f.prev=f.next){case 0:return f.next=2,regeneratorRuntime.awrap(l.a.get("https://api.i43.io/nicehash/main/api/v2/hashpower/orderBook?algorithm="+e));case 2:n=f.sent,o=n.data,c=[].concat(Object(r["a"])(o.stats.EU.orders),Object(r["a"])(o.stats.USA.orders)).filter((function(e){return"STANDARD"===e.type&&e.acceptedSpeed>0||e.payingSpeed>0})),i=Math.min.apply(Math,Object(r["a"])(c.map((function(e){return e.price})))),s=c.reduce((function(e,t){return[e[0]+t.price*(1*t.acceptedSpeed+1*t.payingSpeed),e[1]+1*t.acceptedSpeed+1*t.payingSpeed]}),[0,0]),u=Object(a["a"])(s,2),d=u[0],p=u[1],t("setNiceHash",{algorithm:e,data:{minPrice:i,avgPrice:d/p}});case 8:case"end":return f.stop()}}))},i("SHA256"),i("DAGGERHASHIMOTO");case 10:case"end":return s.stop()}}))}},modules:{issuers:f.a}})},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("2bdd"),o=n.n(r),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-btn",{staticClass:"hlHeader",attrs:{href:"#/",text:""}},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Honey Lemon Logo",contain:"",src:n("b4be"),transition:"scale-transition",width:"36"}}),a("span",{staticClass:"mr-2 hlLogo"},[e._v("Honey Lemon")])],1)],1),a("v-spacer"),e._l(e.navItems,(function(t){var n=t[0],r=t[1];return a("v-btn",{key:r,attrs:{href:r,text:""}},[a("span",{staticClass:"mr-2",class:{"nav-active":"#"+e.$route.path===r}},[e._v(e._s(n))])])}))],2),a("v-content",[a("router-view")],1),a("v-footer",{staticClass:"footer-space white--text",attrs:{color:"primary",dark:""}},[a("div",[e._v(" Honey Lemon ©"+e._s((new Date).getFullYear())+" ")]),a("a",{staticClass:"mx-4 white--text",staticStyle:{"text-decoration":"none"},attrs:{href:"#/about"}},[e._v(" Disclaimer ")]),a("v-spacer"),a("div",{staticClass:"footer-social"},[a("a",{staticClass:"white--text mr-1",staticStyle:{"text-decoration":"none"},attrs:{href:"mailto:yours@honeylemon.market",target:"_top"}},[a("v-icon",{staticClass:"ma-2 white--text display-1"},[e._v("mdi-email")])],1),a("a",{attrs:{href:"https://twitter.com/HoneylemonM",target:"_blank"}},[a("v-icon",{staticClass:"ma-2 white--text display-1"},[e._v("mdi-twitter")])],1),a("a",{attrs:{href:"https://t.me/joinchat/HD_sbVF5xOzoBZNuIcDlqQ",target:"_blank"}},[a("v-icon",{staticClass:"ma-2 white--text display-1"},[e._v("mdi-telegram")])],1)])],1)],1)},i=[],s={name:"App",beforeMount:function(){this.$store.dispatch("init")},data:function(){return{navItems:[["HOME","#/"],["DEALS","#/products"],["FAQ","#/about"]]}}},u=s,d=(n("5c0b"),n("2877")),l=n("6544"),p=n.n(l),f=n("7496"),m=n("40dc"),h=n("8336"),y=n("a75b"),b=n("553a"),v=n("132d"),g=n("adda"),w=n("2fa4"),O=Object(d["a"])(u,c,i,!1,null,null,null),C=O.exports;p()(O,{VApp:f["a"],VAppBar:m["a"],VBtn:h["a"],VContent:y["a"],VFooter:b["a"],VIcon:v["a"],VImg:g["a"],VSpacer:w["a"]});var P=n("f309"),S=(n("5363"),n("fcf4"));a["a"].use(P["a"]);var T=new P["a"]({icons:{iconfont:"mdi"},theme:{themes:{light:{primary:S["a"].grey.darken4,secondary:S["a"].yellow.accent2,accent:S["a"].cyan.lighten4,error:S["a"].red.accent3,yellow:S["a"].yellow.darken3},dark:{primary:S["a"].blue.lighten3}}}}),x=n("4360"),k=(n("d3b7"),n("8c4f"));a["a"].use(k["a"]);var H=[{path:"/",name:"home",component:function(){return Promise.all([n.e("chunk-895f96b8"),n.e("chunk-dd207860"),n.e("chunk-3c916ee5")]).then(n.bind(null,"bb51"))}},{path:"/products",name:"products",component:function(){return Promise.all([n.e("chunk-895f96b8"),n.e("chunk-dd207860"),n.e("chunk-74596bdc")]).then(n.bind(null,"e6dc"))}},{path:"/about",name:"about",component:function(){return Promise.all([n.e("chunk-895f96b8"),n.e("chunk-46386b1b")]).then(n.bind(null,"f820"))}}],_=new k["a"]({routes:H,scrollBehavior:function(){return{x:0,y:0}}}),B=_;a["a"].config.productionTip=!1,a["a"].use(o.a,{config:{id:"UA-155181824-1"}},B),new a["a"]({vuetify:T,store:x["a"],router:B,render:function(e){return e(C)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("7694"),r=n.n(a);r.a},7694:function(e,t,n){},b4be:function(e,t,n){e.exports=n.p+"img/hl-logo.22bcfb23.png"}});
//# sourceMappingURL=app.f8056198.js.map