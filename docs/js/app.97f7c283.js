(function(t){function e(e){for(var n,i,r=e[0],c=e[1],l=e[2],d=0,u=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&u.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(u.length)u.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var r=a[i];0!==s[r]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},i={app:0},s={app:0},o=[];function r(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"5886f5f9"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"ff6baab8"}[t]+".css",s=c.p+n,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var l=o[r],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===n||d===s))return e()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){l=u[r],d=l.getAttribute("data-href");if(d===n||d===s)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete i[t],p.parentNode.removeChild(p),a(o)},p.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){i[t]=0})));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,a){n=s[t]=[e,a]}));e.push(n[2]=o);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=r(t);var u=new Error;l=function(e){d.onerror=d.onload=null,clearTimeout(p);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",u.name="ChunkLoadError",u.type=n,u.request=i,a[1](u)}s[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var p=d;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0c33":function(t,e,a){"use strict";var n=a("a013"),i=a.n(n);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("9743"),a("b8aa"),a("5493"),a("fa55");var n=a("0261"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-btn",{staticClass:"hlHeader",attrs:{href:"#/",text:""}},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Honey Lemon Logo",contain:"",src:a("c857"),transition:"scale-transition",width:"40"}}),n("span",{staticClass:"mr-2 hlLogo"},[t._v("Honey Lemon")])],1)],1),n("v-spacer"),t._l(t.navItems,(function(e){var a=e[0],i=e[1];return n("v-btn",{key:i,attrs:{href:i,text:""}},[n("span",{staticClass:"mr-2",class:{"nav-active":"#"+t.$route.path===i}},[t._v(t._s(a))])])}))],2),n("v-content",[n("router-view")],1),n("v-footer",{staticClass:"px-10 white--text",attrs:{color:"primary",dark:""}},[n("div",[t._v(" Honey Lemon ©"+t._s((new Date).getFullYear())+" ")]),n("a",{staticClass:"mx-4 white--text",staticStyle:{"text-decoration":"none"},attrs:{href:"#/about"}},[t._v(" Disclaimer ")]),n("v-spacer"),n("div",[n("a",{staticClass:"white--text mr-1",staticStyle:{"text-decoration":"none"},attrs:{href:"mailto:yours@honeylemon.market",target:"_top"}},[n("v-icon",{staticClass:"ma-2 white--text display-1"},[t._v("mdi-email")])],1),n("a",{attrs:{href:"https://twitter.com/HoneylemonM",target:"_blank"}},[n("v-icon",{staticClass:"ma-2 white--text display-1"},[t._v("mdi-twitter")])],1),n("a",{attrs:{href:"https://t.me/joinchat/HD_sbVF5xOzoBZNuIcDlqQ",target:"_blank"}},[n("v-icon",{staticClass:"ma-2 white--text display-1"},[t._v("mdi-telegram")])],1)])],1)],1)},s=[],o={name:"App",beforeMount:function(){this.$store.dispatch("init")},data:function(){return{navItems:[["HOME","#/"],["DEALS","#/products"],["FAQ","#/about"]]}}},r=o,c=(a("5c0b"),a("5511")),l=a("2c44"),d=a.n(l),u=a("1dc2"),p=a("ff6d"),m=a("7e06"),f=a("f8c1"),v=a("886b"),h=a("ce9d"),g=a("65d2"),y=a("67b3"),b=Object(c["a"])(r,i,s,!1,null,null,null),w=b.exports;d()(b,{VApp:u["a"],VAppBar:p["a"],VBtn:m["a"],VContent:f["a"],VFooter:v["a"],VIcon:h["a"],VImg:g["a"],VSpacer:y["a"]});var _=a("0a0b"),C=(a("a178"),a("3252"));n["a"].use(_["a"]);var x=new _["a"]({icons:{iconfont:"mdi"},theme:{themes:{light:{primary:C["a"].grey.darken4,secondary:C["a"].yellow.accent2,accent:C["a"].cyan.lighten4,error:C["a"].red.accent3,yellow:C["a"].yellow.darken3},dark:{primary:C["a"].blue.lighten3}}}}),k=(a("4861"),a("7a2d"),a("63ff"),a("e5af")),E=a("08c1"),O=a("2427"),P=a.n(O);n["a"].use(E["a"]);var S=new E["a"].Store({state:{products:[],selectedCoins:["BTC"],favorites:JSON.parse(localStorage.getItem("favorites")||"[]")},mutations:{setProducts:function(t,e){t.products=e},toggleFavorites:function(t,e){t.favorites.indexOf(e)<0?t.favorites.push(e):t.favorites=t.favorites.filter((function(t){return t!==e})),localStorage.setItem("favorites",JSON.stringify(t.favorites))}},actions:{init:function(){var t=Object(k["a"])(regeneratorRuntime.mark((function t(e){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.next=3,P.a.get("https://api.i43.io/honey");case 3:n=t.sent,a("setProducts",n.data);case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},modules:{}}),D=(a("c41e"),a("c478")),T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"content"},[a("v-row",{staticClass:"layout"},[a("div",{staticClass:"innerContent"},[a("div",{staticClass:"slogan mr-4"},[a("span",{staticClass:"slogan-yellow"},[t._v("SWEET DEALS")]),a("br"),a("span",{staticClass:"slogan-yellow"},[t._v("IN CRYPTO")]),a("br"),a("span",{staticClass:"slogan-yellow"},[t._v("MINING")]),a("br")]),a("div",{staticClass:"slogan"},[a("span",{staticClass:"slogan-black"},[t._v("BEST PRICE x OBJECTIVE METRICS")]),a("form",{staticClass:"validate",attrs:{action:"https://market.us4.list-manage.com/subscribe/post?u=466b3785cad82e2db6271ffcc&id=2f33950de0",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",target:"_blank",novalidate:""}},[a("div",{staticClass:"desc"},[t._v("We aggregate and rate existing cloud mining contracts, for transparency, standardization and price discovery.")]),a("div",{staticClass:"desc sign_up"},[t._v("Sign up for fresh updates & never miss a juicy deal.")]),a("div",{staticClass:"row form inputEmail"},[a("input",{attrs:{id:"email",name:"EMAIL",type:"email",placeholder:"Enter email address"}}),a("input",{staticClass:"btn",attrs:{type:"submit",value:"GO"}})])])])])]),a("v-row",{staticClass:"mt-10",attrs:{justify:"center"}},[a("v-col",{staticStyle:{"max-width":"1080px"}},[a("div",{staticClass:"display-2 deal-header"},[t._v("Discover best deals in cloud mining contracts listed across reputable platforms:")])])],1),a("v-row",{staticClass:"deals d-flex mb-10",attrs:{justify:"center"}},[a("v-row",{staticStyle:{"max-width":"1080px"},attrs:{justify:"center"}},t._l(t.summary,(function(e){return a("v-col",{key:e.duration,attrs:{cols:"12",sm:"12",md:"6",lg:"6"}},[a("v-card",{staticClass:"mx-auto coinDetail",attrs:{href:"#/products",height:"420","max-width":"560",ripple:!1},on:{click:function(a){t.$store.state.selectedCoins=[e.type]}}},[a("v-card-text",{staticClass:"text-left"},[a("v-row",[a("div",{staticClass:"flex-grow-1"},[a("div",{staticClass:"mx-4 mt-4"},[a("span",{staticClass:"display-3 mr-4 font-weight-bold"},[t._v(t._s(e.type))]),a("v-chip",{staticClass:"mb-3",attrs:{color:"accent","text-color":"black",label:""}},[a("span",{staticClass:"font-weight-bold"},[t._v(t._s(e.sellers.size)+" Platforms")])])],1),a("div",{staticClass:"mb-4 ml-4"},[t._v("mining contract")])]),a("div",{staticClass:"pr-2"},[a("v-img",{attrs:{width:"80",src:e.img}})],1)]),a("v-divider"),a("div",{staticClass:"ma-4"},[a("v-icon",{staticClass:"ma-2"},[t._v("mdi-sale")]),t._v("up to "),a("span",{staticClass:"discount"},[t._v(t._s((100*e.maxDiscount).toFixed(0))+"% OFF")]),a("v-tooltip",{attrs:{top:"","max-width":"400px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-icon",t._g({staticClass:"body-1 ml-1"},n),[t._v("mdi-help-circle-outline")])]}}],null,!0)},[t._v(" Note: Discount calculated as the cost of buying "+t._s(e.type)+" compared to "+t._s(e.type)+" earned via buying the cloud mining contract. The "+t._s(e.type)+" earned via contract is calculated based on static projection of theoretical mining payoff given network difficulty and coin price at the moment ")]),t._v(" vs buying "+t._s(e.type)+" ")],1),a("div",{staticClass:"ma-4"},[a("v-icon",{staticClass:"ma-2"},[t._v("mdi-tag-heart")]),t._v("as low as "),a("span",{staticClass:"dealData"},[t._v("$"+t._s(e.price.toFixed(6))+" "+t._s(e.unit))])],1)],1),a("div",{staticClass:"coinDetailPart"},[a("div",{staticClass:"ma-4"},[a("v-icon",{staticClass:"ma-2"},[t._v("mdi-coin")]),t._v(t._s(e.type)+" price: "),a("span",{staticClass:"dealData"},[t._v("$"+t._s(e.coinPrice.toFixed(2))+" ")])],1),a("div",{staticClass:"ma-4"},[a("v-icon",{staticClass:"ma-2"},[t._v("mdi-treasure-chest")]),t._v(t._s(e.type)+" mining earnings:"),a("span",{staticClass:"dealData"},[t._v(" $"+t._s(e.maxPayOff.toFixed(5))+" "+t._s(e.unit)+" ")]),a("v-tooltip",{attrs:{top:"","max-width":"400px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-icon",t._g({staticClass:"body-1"},n),[t._v("mdi-help-circle-outline")])]}}],null,!0)},[t._v(" Theoretical output from "+t._s("BTC"===e.type?"BTC.com":"sparkpool.com")+" ")])],1)])],1)],1)})),1)],1),a("v-row",{staticClass:"faq d-flex",attrs:{justify:"center"}},[a("v-row",{staticClass:"mt-10",staticStyle:{"max-width":"1080px"}},[a("div",{staticClass:"display-2 mr-10 ml-4 mb-4"},[t._v("FAQ")]),a("div",[a("v-expansion-panels",[a("v-expansion-panel",[a("v-expansion-panel-header",{staticClass:"display-1 font-weight-bold"},[t._v("Economics 101: What does Mining and Lemon have in common?")]),a("v-expansion-panel-content",[a("p",[t._v('"The Market for Lemons: Quality Uncertainty and the Market Mechanism" is a well-known 1978 paper by economist '),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/George_Akerlof",target:"_blank"}},[t._v("George Akerlof")]),t._v(" which examines how the quality of goods traded in a market can degrade in the presence of "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Information_asymmetry",target:"_blank"}},[t._v("information asymmetry")]),t._v(' between buyers and sellers, leaving only "lemons" behind (Wikipedia).')]),a("p",[t._v("Mining contracts serve a function in the financialization of mining. Miners have traditionally resorted to selling cloud mining contracts to hedge risk by locking in future mining rewards ahead of time or earning premium for performing mining services. However, there have been few credible choices available for miners of small to medium size operations to list their mining services.")]),a("p",[t._v("On the other hand, investors who are interested in exposure to mining cashflow without having to deal with the hassle of actual mining, only have the choice of centralized cloud mining or staking platforms that leave them with little pricing power or choice of cryptocurrencies. Moreover, prevalent cloud mining contract design which requires investors to put up full collateral upfront but no collateral for the issuers, exposing investors to significant counterparty risk.")]),a("p",[t._v("Even across reputable platforms, existing cloud mining market is far from standardized or efficient. Price disparities of 10-40% for the same type of mining contract underwritten by different platforms is common.")]),a("p",[t._v("That’s why we created HoneyLemon, and start by aggregating available cloud mining contracts from select platforms with a track record of operations, for transparency, standardization and price discovery.")])])],1),a("v-expansion-panel",[a("v-expansion-panel-header",{staticClass:"display-1 font-weight-bold"},[t._v("What are the typical cloud mining contracts in financial terms?")]),a("v-expansion-panel-content",[t._v(" According to "),a("a",{attrs:{href:"https://www.fincen.gov/sites/default/files/2019-05/FinCEN%20Guidance%20CVC%20FINAL%20508.pdf",target:"_blank"}},[t._v("FinCEN")]),t._v(", “persons (contract purchasers) may purchase “mining contracts” from a seller of computer processing (the cloud miner) that grants these purchasers permission to use the cloud miner’s computers to mine CVCs on the purchaser’s behalf.” Cloud mining contracts can be commonly classified into two types: termed contracts with fixed duration such as 180 days or 1 year contract, and “lifetime” contracts that terminate after the mining earnings falls below electricity cost. The investor of cloud mining contracts and the miner/platform issuing these contracts are essentially exchanging a cashflow swap: investor receives the mining cashflow produced by the mining asset (floating leg), and the miner/platform either receives cash upfront or across multiple (often equal) installments over a period of time (fixed leg). ")])],1),a("v-expansion-panel",[a("v-expansion-panel-header",{staticClass:"display-1 font-weight-bold"},[t._v("Disclaimer")]),a("v-expansion-panel-content",[a("span",{staticClass:"title-1"},[t._v("No Investment Advice")]),a("p",[t._v(" The information provided on this website does not constitute investment advice, financial advice, trading advice, or any other sort of advice and you should not treat any of the website's content as such. Honeyl Lemon does not recommend that any mining contract should be bought, sold, or held by you. Do conduct your own due diligence and consult your financial advisor before making any investment decisions. ")]),a("span",{staticClass:"title-1"},[t._v("Accuracy of Information")]),a("p",[t._v(" Honeylemon will strive to ensure accuracy of information listed on this website although it will not hold any responsibility for any missing or wrong information. Honeylemon provides all information as is. You understand that you are using any and all information available here at your own risk. ")])])],1)],1)],1)])],1)],1)},V=[],j=(a("87b8"),a("8e80"),a("79fd"),a("5228"),{name:"home",computed:{summary:function(){return this.$store.state.products.reduce((function(t,e){var a=t.find((function(t){return t.type===e.coin}));return a&&(a.sellers.add(e.issuers),a.maxDiscount=Math.max(a.maxDiscount,e.expected_discount),a.price=Math.min(a.price,e.contract_cost),a.coinPrice=e.btc_price,a.maxPayOff=Math.max(a.maxPayOff,e.mining_payoff)),t}),[{type:"BTC",coinPrice:0,maxDiscount:0,maxPayOff:0,duration:"30Days",price:99999999,unit:"/TH/Day",sellers:new Set,img:a("e49e")},{type:"ETH",coinPrice:0,maxDiscount:0,maxPayOff:0,duration:"60Days",price:99999999,unit:"/MH/Day",sellers:new Set,img:a("dbd0")}])}}}),I=j,M=(a("0c33"),a("1d85")),A=a("020b"),L=a("555d"),H=a("d14f"),F=a("6694"),N=a("1a8b"),B=a("9440"),$=a("84d8"),z=a("622a"),q=a("0f1e"),R=a("73ee"),G=a("b538"),J=Object(c["a"])(I,T,V,!1,null,"4e83bcfa",null),W=J.exports;d()(J,{VCard:M["a"],VCardText:A["a"],VChip:L["a"],VCol:H["a"],VContainer:F["a"],VDivider:N["a"],VExpansionPanel:B["a"],VExpansionPanelContent:$["a"],VExpansionPanelHeader:z["a"],VExpansionPanels:q["a"],VIcon:h["a"],VImg:g["a"],VRow:R["a"],VTooltip:G["a"]}),n["a"].use(D["a"]);var Q=[{path:"/",name:"home",component:W},{path:"/products",name:"products",component:function(){return a.e("about").then(a.bind(null,"e6dc"))}},{path:"/product",name:"product",component:function(){return a.e("about").then(a.bind(null,"d2f1"))}},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],Y=new D["a"]({routes:Q}),U=Y;n["a"].config.productionTip=!1,new n["a"]({vuetify:x,store:S,router:U,render:function(t){return t(w)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("f201"),i=a.n(n);i.a},a013:function(t,e,a){},c857:function(t,e,a){t.exports=a.p+"img/hl-logo.56a8eae1.svg"},dbd0:function(t,e,a){t.exports=a.p+"img/eth-logo.f6e9b99c.png"},e49e:function(t,e,a){t.exports=a.p+"img/btc-logo.991b7a02.png"},f201:function(t,e,a){}});
//# sourceMappingURL=app.97f7c283.js.map