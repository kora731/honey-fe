(function(t){function e(e){for(var n,i,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,i=1;i<a.length;i++){var r=a[i];0!==o[r]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},i={app:0},o={app:0},s=[];function r(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"a13f9c0e"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"106cd910"}[t]+".css",o=c.p+n,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var l=s[r],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===n||d===o))return e()}var p=document.getElementsByTagName("style");for(r=0;r<p.length;r++){l=p[r],d=l.getAttribute("data-href");if(d===n||d===o)return e()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=e,u.onerror=function(e){var n=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete i[t],u.parentNode.removeChild(u),a(s)},u.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(u)})).then((function(){i[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=s);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=r(t);var p=new Error;l=function(e){d.onerror=d.onload=null,clearTimeout(u);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",p.name="ChunkLoadError",p.type=n,p.request=i,a[1](p)}o[t]=void 0}};var u=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var u=d;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"356b":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=a("2bdd"),o=a.n(i),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-btn",{staticClass:"hlHeader",attrs:{href:"#/",text:""}},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Honey Lemon Logo",contain:"",src:a("b4be"),transition:"scale-transition",width:"36"}}),n("span",{staticClass:"mr-2 hlLogo"},[t._v("Honey Lemon")])],1)],1),n("v-spacer"),t._l(t.navItems,(function(e){var a=e[0],i=e[1];return n("v-btn",{key:i,attrs:{href:i,text:""}},[n("span",{staticClass:"mr-2",class:{"nav-active":"#"+t.$route.path===i}},[t._v(t._s(a))])])}))],2),n("v-content",[n("router-view")],1),n("v-footer",{staticClass:"footer-space white--text",attrs:{color:"primary",dark:""}},[n("div",[t._v(" Honey Lemon ©"+t._s((new Date).getFullYear())+" ")]),n("a",{staticClass:"mx-4 white--text",staticStyle:{"text-decoration":"none"},attrs:{href:"#/about"}},[t._v(" Disclaimer ")]),n("v-spacer"),n("div",{staticClass:"footer-social"},[n("a",{staticClass:"white--text mr-1",staticStyle:{"text-decoration":"none"},attrs:{href:"mailto:yours@honeylemon.market",target:"_top"}},[n("v-icon",{staticClass:"ma-2 white--text display-1"},[t._v("mdi-email")])],1),n("a",{attrs:{href:"https://twitter.com/HoneylemonM",target:"_blank"}},[n("v-icon",{staticClass:"ma-2 white--text display-1"},[t._v("mdi-twitter")])],1),n("a",{attrs:{href:"https://t.me/joinchat/HD_sbVF5xOzoBZNuIcDlqQ",target:"_blank"}},[n("v-icon",{staticClass:"ma-2 white--text display-1"},[t._v("mdi-telegram")])],1)])],1)],1)},r=[],c={name:"App",beforeMount:function(){this.$store.dispatch("init")},data:function(){return{navItems:[["HOME","#/"],["DEALS","#/products"],["FAQ","#/about"]]}}},l=c,d=(a("5c0b"),a("2877")),p=a("6544"),u=a.n(p),m=a("7496"),f=a("40dc"),v=a("8336"),h=a("a75b"),g=a("553a"),y=a("132d"),b=a("adda"),_=a("2fa4"),C=Object(d["a"])(l,s,r,!1,null,null,null),w=C.exports;u()(C,{VApp:m["a"],VAppBar:f["a"],VBtn:v["a"],VContent:h["a"],VFooter:g["a"],VIcon:y["a"],VImg:b["a"],VSpacer:_["a"]});var x=a("f309"),k=(a("5363"),a("fcf4"));n["a"].use(x["a"]);var T=new x["a"]({icons:{iconfont:"mdi"},theme:{themes:{light:{primary:k["a"].grey.darken4,secondary:k["a"].yellow.accent2,accent:k["a"].cyan.lighten4,error:k["a"].red.accent3,yellow:k["a"].yellow.darken3},dark:{primary:k["a"].blue.lighten3}}}}),E=(a("4de4"),a("c975"),a("d81d"),a("d3b7"),a("2909")),S=(a("96cf"),a("2f62")),D=a("bc3a"),O=a.n(D);n["a"].use(S["a"]);var P=new S["a"].Store({state:{products:[],selectedCoins:["BTC"],favorites:JSON.parse(localStorage.getItem("favorites")||"[]")},mutations:{setProducts:function(t,e){t.products=e},toggleFavorites:function(t,e){t.favorites.indexOf(e)<0?t.favorites.push(e):t.favorites=t.favorites.filter((function(t){return t!==e})),localStorage.setItem("favorites",JSON.stringify(t.favorites))}},actions:{init:function(t){var e,a,n,i;return regeneratorRuntime.async((function(o){while(1)switch(o.prev=o.next){case 0:return e=t.commit,o.next=3,regeneratorRuntime.awrap(O.a.get("https://api.i43.io/honey"));case 3:a=o.sent,n=a.data,i=Math.max.apply(Math,Object(E["a"])(n.map((function(t){return t.update_time})))),e("setProducts",n.filter((function(t){return i-t.update_time<3600})));case 7:case"end":return o.stop()}}))}},modules:{}}),M=a("8c4f"),V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"content"},[a("v-row",{staticClass:"layout"},[a("div",{staticClass:"innerContent"},[a("div",{staticClass:"slogan mr-4"},[a("span",{staticClass:"slogan-yellow"},[t._v("SWEET DEALS")]),a("br"),a("span",{staticClass:"slogan-yellow"},[t._v("IN CRYPTO")]),a("br"),a("span",{staticClass:"slogan-yellow"},[t._v("MINING")]),a("br")]),a("div",{staticClass:"slogan"},[a("span",{staticClass:"slogan-black"},[t._v("BEST PRICE x OBJECTIVE METRICS")]),a("form",{staticClass:"validate",attrs:{action:"https://market.us4.list-manage.com/subscribe/post?u=466b3785cad82e2db6271ffcc&id=2f33950de0",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",target:"_blank",novalidate:""}},[a("div",{staticClass:"desc"},[t._v("We aggregate and rate existing cloud mining contracts, for transparency, standardization and price discovery.")]),a("div",{staticClass:"desc sign_up"},[t._v("Sign up for fresh updates & never miss a juicy deal.")]),a("div",{staticClass:"row form inputEmail"},[a("input",{attrs:{id:"email",name:"EMAIL",type:"email",placeholder:"Enter email address"}}),a("input",{staticClass:"btn",attrs:{type:"submit",value:"GO"}})])])])])]),a("v-row",{staticClass:"mt-10 dealContainer",attrs:{justify:"center"}},[a("v-col",{staticStyle:{"max-width":"1080px"}},[a("div",{staticClass:"display-2 deal-header"},[t._v("Discover best deals in cloud mining contracts listed across reputable platforms:")])])],1),a("v-row",{staticClass:"deals d-flex mb-10",attrs:{justify:"center"}},[a("v-row",{staticStyle:{"max-width":"1080px"},attrs:{justify:"center"}},t._l(t.summary,(function(e){return a("v-col",{key:e.duration,attrs:{cols:"12",sm:"12",md:"6",lg:"6"}},[a("v-card",{staticClass:"mx-auto coinDetail",attrs:{href:"#/products",height:"440","max-width":"560",ripple:!1},on:{click:function(a){t.$store.state.selectedCoins=[e.type]}}},[a("v-card-text",{staticClass:"text-left"},[a("v-row",{staticClass:"mb-2"},[a("div",{staticClass:"flex-grow-1"},[a("div",{staticClass:"mx-4"},[a("span",{staticClass:"display-3 mr-4 font-weight-bold"},[t._v(t._s(e.type))]),a("span",{staticClass:"display-1"},[t._v("Mining Contracts")]),a("div",[t._v("available across "),a("v-chip",{staticClass:"mb-1 platformChip",attrs:{color:"accent","text-color":"black",label:""}},[a("span",{staticClass:"font-weight-bold"},[t._v(t._s(e.sellers.size)+" Platforms")])])],1)])]),a("div",{staticClass:"pr-2"},[a("v-img",{staticClass:"coinLogo",attrs:{width:"80",src:e.img}})],1)]),a("v-divider"),a("div",{staticClass:"ma-4"},[a("v-icon",{staticClass:"ma-2"},[t._v("mdi-sale")]),t._v("up to "),a("span",{staticClass:"discount"},[t._v(t._s((100*e.maxDiscount).toFixed(0))+"% OFF")]),a("v-tooltip",{attrs:{top:"","max-width":"400px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-icon",t._g({staticClass:"body-1 ml-1"},n),[t._v("mdi-help-circle-outline")])]}}],null,!0)},[t._v(" Note: Discount calculated as the cost of buying "+t._s(e.type)+" compared to "+t._s(e.type)+" earned via buying the cloud mining contract. The "+t._s(e.type)+" earned via contract is calculated based on static projection of theoretical mining payoff given network difficulty and coin price at the moment ")]),t._v(" vs buying "+t._s(e.type)+" ")],1),a("div",{staticClass:"ma-4"},[a("v-icon",{staticClass:"ma-2"},[t._v("mdi-tag-heart")]),t._v("as low as "),a("span",{staticClass:"dealData"},[t._v("$"+t._s(e.price.toFixed(4))+" "+t._s(e.unit))])],1)],1),a("div",{staticClass:"coinDetailPart"},[a("div",{staticClass:"ma-4"},[a("v-icon",{staticClass:"ma-2"},[t._v("mdi-coin")]),t._v(t._s(e.type)+" price: "),a("span",{staticClass:"dealData"},[t._v("$"+t._s(e.coinPrice.toFixed(2))+" ")])],1),a("div",{staticClass:"ma-4"},[a("v-icon",{staticClass:"ma-2"},[t._v("mdi-treasure-chest")]),t._v("Today's "+t._s(e.type)+" mining earnings "),a("span",{staticClass:"dealSource"},[t._v("("+t._s("BTC"===e.type?"BTC.com":"sparkpool.com")+"):")]),a("span",{staticClass:"dealData dealDataEarning"},[t._v(" $"+t._s(e.maxPayOff.toFixed(4))+" "+t._s(e.unit)+" "),a("v-tooltip",{attrs:{top:"","max-width":"400px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-icon",t._g({staticClass:"body-1"},n),[t._v("mdi-help-circle-outline")])]}}],null,!0)},[t._v(" Theoretical output from "+t._s("BTC"===e.type?"BTC.com":"sparkpool.com")+" ")])],1)],1)])],1)],1)})),1)],1),a("v-row",{staticClass:"faq d-flex",attrs:{justify:"center"}},[a("v-row",{staticClass:"mt-10",staticStyle:{"max-width":"1080px"}},[a("div",{staticClass:"display-2 mr-10 ml-4 mb-4"},[t._v("FAQ")]),a("div",[a("v-expansion-panels",[a("v-expansion-panel",[a("v-expansion-panel-header",{staticClass:"display-1 font-weight-bold"},[t._v("Economics 101: What does Mining and Lemon have in common?")]),a("v-expansion-panel-content",[a("p",[t._v('"The Market for Lemons: Quality Uncertainty and the Market Mechanism" is a well-known 1978 paper by economist '),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/George_Akerlof",target:"_blank"}},[t._v("George Akerlof")]),t._v(" which examines how the quality of goods traded in a market can degrade in the presence of "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Information_asymmetry",target:"_blank"}},[t._v("information asymmetry")]),t._v(' between buyers and sellers, leaving only "lemons" behind (Wikipedia).')]),a("p",[t._v("Mining contracts serve a function in the financialization of mining. Miners have traditionally resorted to selling cloud mining contracts to hedge risk by locking in future mining rewards ahead of time or earning premium for performing mining services. However, there have been few credible choices available for miners of small to medium size operations to list their mining services.")]),a("p",[t._v("On the other hand, investors who are interested in exposure to mining cashflow without having to deal with the hassle of actual mining, only have the choice of centralized cloud mining or staking platforms that leave them with little pricing power or choice of cryptocurrencies. Moreover, prevalent cloud mining contract design which requires investors to put up full collateral upfront but no collateral for the issuers, exposing investors to significant counterparty risk.")]),a("p",[t._v("Even across reputable platforms, existing cloud mining market is far from standardized or efficient. Price disparities of 10-40% for the same type of mining contract underwritten by different platforms is common.")]),a("p",[t._v("That’s why we created HoneyLemon, and start by aggregating available cloud mining contracts from select platforms with a track record of operations, for transparency, standardization and price discovery.")])])],1),a("v-expansion-panel",[a("v-expansion-panel-header",{staticClass:"display-1 font-weight-bold"},[t._v("What are the typical cloud mining contracts in financial terms?")]),a("v-expansion-panel-content",[t._v(" According to "),a("a",{attrs:{href:"https://www.fincen.gov/sites/default/files/2019-05/FinCEN%20Guidance%20CVC%20FINAL%20508.pdf",target:"_blank"}},[t._v("FinCEN")]),t._v(", “persons (contract purchasers) may purchase “mining contracts” from a seller of computer processing (the cloud miner) that grants these purchasers permission to use the cloud miner’s computers to mine CVCs on the purchaser’s behalf.” Cloud mining contracts can be commonly classified into two types: termed contracts with fixed duration such as 180 days or 1 year contract, and “lifetime” contracts that terminate after the mining earnings falls below electricity cost. The investor of cloud mining contracts and the miner/platform issuing these contracts are essentially exchanging a cashflow swap: investor receives the mining cashflow produced by the mining asset (floating leg), and the miner/platform either receives cash upfront or across multiple (often equal) installments over a period of time (fixed leg). ")])],1),a("v-expansion-panel",[a("v-expansion-panel-header",{staticClass:"display-1 font-weight-bold"},[t._v("How are the HoneyLemon mining contract metrics calculated?")]),a("v-expansion-panel-content",[a("span",{staticClass:"title-1 font-weight-bold"},[t._v("% off discount")]),a("p",[t._v(" Discount calculated as the cost of buying BTC or ETH compared to BTC or ETH earned via buying the cloud mining contract. The BTC or ETH earned via contract is calculated based on static projection of theoretical mining payoff given network difficulty and coin price at the moment ")]),a("span",{staticClass:"title-1 font-weight-bold"},[t._v("Contract cost")]),a("p",[t._v(" Sum of upfront fees and present value of expected future cashflow earned over duration of the contract, discounted with CeFi/DeFi interest rate (See Messari), divided into unit cost (BTC: $ per Th per Day, or ETH: $ per Mh per Day) ")]),a("span",{staticClass:"title-1 font-weight-bold"},[t._v("Today’s mining income")]),a("p",[t._v(" Sometimes called theoretical mining yield, is the actual mining income in the past 24 hours (BTC: $ per Th per Day, or ETH: $ per Mh per Day). This estimate of mining income assumes current difficulty and price (Source: btc.com and sparkpool.com). ")]),a("span",{staticClass:"title-1 font-weight-bold"},[t._v("Upfront fee")]),a("p",[t._v(" Sometimes called hashrate fee or contract fee, is the fee an investor needs to pay upfront in order to receive mining payoffs. ")]),a("span",{staticClass:"title-1 font-weight-bold"},[t._v("Additional daily fee")]),a("p",[t._v(" Sometimes called electricity or maintenance fee, is the additional daily fee consists of several costs including but not limited to mining's electricity fee, mining farm maintenance, heat dissipation, operation and maintenance for miners etc. ")]),a("span",{staticClass:"title-1 font-weight-bold"},[t._v("Today's mining earnings:")]),a("p",[t._v(" Theoretical Output from BTC.com for BTC, sparkpool.com for ETH. ")])])],1),a("v-expansion-panel",[a("v-expansion-panel-header",{staticClass:"display-1 font-weight-bold"},[t._v("Disclaimer")]),a("v-expansion-panel-content",[a("span",{staticClass:"title-1"},[t._v("No Investment Advice")]),a("p",[t._v(" The information provided on this website does not constitute investment advice, financial advice, trading advice, or any other sort of advice and you should not treat any of the website's content as such. Honeyl Lemon does not recommend that any mining contract should be bought, sold, or held by you. Do conduct your own due diligence and consult your financial advisor before making any investment decisions. ")]),a("span",{staticClass:"title-1"},[t._v("Accuracy of Information")]),a("p",[t._v(" Honeylemon will strive to ensure accuracy of information listed on this website although it will not hold any responsibility for any missing or wrong information. Honeylemon provides all information as is. You understand that you are using any and all information available here at your own risk. ")])])],1)],1)],1)])],1)],1)},H=[],j=(a("7db0"),a("13d5"),a("6062"),a("3ca3"),a("ddb0"),{name:"home",computed:{summary:function(){return this.$store.state.products.reduce((function(t,e){var a=t.find((function(t){return t.type===e.coin}));return a&&(a.sellers.add(e.issuers),a.maxDiscount=Math.max(a.maxDiscount,e.expected_discount),a.price=Math.min(a.price,e.contract_cost),a.coinPrice=e.btc_price,a.maxPayOff=Math.max(a.maxPayOff,e.mining_payoff)),t}),[{type:"BTC",coinPrice:0,maxDiscount:0,maxPayOff:0,duration:"30Days",price:99999999,unit:"/Th/Day",sellers:new Set,img:a("e49e")},{type:"ETH",coinPrice:0,maxDiscount:0,maxPayOff:0,duration:"60Days",price:99999999,unit:"/Mh/Day",sellers:new Set,img:a("dbd0")}])}}}),A=j,B=(a("f725"),a("b0af")),I=a("99d9"),L=a("cc20"),F=a("62ad"),N=a("a523"),$=a("ce7e"),z=a("cd55"),q=a("49e2"),R=a("c865"),G=a("0393"),J=a("0fd9"),W=a("3a2f"),Q=Object(d["a"])(A,V,H,!1,null,"7b932077",null),U=Q.exports;u()(Q,{VCard:B["a"],VCardText:I["a"],VChip:L["a"],VCol:F["a"],VContainer:N["a"],VDivider:$["a"],VExpansionPanel:z["a"],VExpansionPanelContent:q["a"],VExpansionPanelHeader:R["a"],VExpansionPanels:G["a"],VIcon:y["a"],VImg:b["a"],VRow:J["a"],VTooltip:W["a"]}),n["a"].use(M["a"]);var Y=[{path:"/",name:"home",component:U},{path:"/products",name:"products",component:function(){return a.e("about").then(a.bind(null,"e6dc"))}},{path:"/product",name:"product",component:function(){return a.e("about").then(a.bind(null,"d2f1"))}},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],K=new M["a"]({routes:Y}),Z=K;n["a"].config.productionTip=!1,n["a"].use(o.a,{config:{id:"UA-155181824-1"}},Z),new n["a"]({vuetify:T,store:P,router:Z,render:function(t){return t(w)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("7694"),i=a.n(n);i.a},7694:function(t,e,a){},b4be:function(t,e,a){t.exports=a.p+"img/hl-logo.22bcfb23.png"},dbd0:function(t,e,a){t.exports=a.p+"img/eth-logo.f6e9b99c.png"},e49e:function(t,e,a){t.exports=a.p+"img/btc-logo.991b7a02.png"},f725:function(t,e,a){"use strict";var n=a("356b"),i=a.n(n);i.a}});
//# sourceMappingURL=app.97583f2d.js.map