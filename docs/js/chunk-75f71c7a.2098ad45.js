(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75f71c7a"],{"0393":function(e,t,n){"use strict";n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");var a=n("ade3"),i=(n("210b"),n("604c")),s=n("d9bd");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(a["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t["a"]=i["a"].extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean},computed:{classes:function(){return r({},i["a"].options.computed.classes.call(this),{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(s["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(s["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(e,t){var n=this.getValue(e,t),a=this.getValue(e,t+1);e.isActive=this.toggleMethod(n),e.nextIsActive=this.toggleMethod(a)}}})},"09d2":function(e,t,n){},"210b":function(e,t,n){},"439c":function(e,t,n){"use strict";var a=n("5d55"),i=n.n(a);i.a},"49e2":function(e,t,n){"use strict";var a=n("0789"),i=n("9d65"),s=n("3206"),o=n("80d2"),r=n("58df"),c=Object(r["a"])(i["a"],Object(s["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel"));t["a"]=c.extend().extend({name:"v-expansion-panel-content",computed:{isActive:function(){return this.expansionPanel.isActive}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(e){return e(a["a"],[e("div",{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:this.isActive}]},this.showLazyContent([e("div",{class:"v-expansion-panel-content__wrap"},Object(o["o"])(this))]))])}})},"4cfb":function(e,t,n){"use strict";var a=n("09d2"),i=n.n(a);i.a},"5d55":function(e,t,n){},"91dd":function(e,t,n){"use strict";function a(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,n,s){t=t||"&",n=n||"=";var o={};if("string"!==typeof e||0===e.length)return o;var r=/\+/g;e=e.split(t);var c=1e3;s&&"number"===typeof s.maxKeys&&(c=s.maxKeys);var l=e.length;c>0&&l>c&&(l=c);for(var d=0;d<l;++d){var p,u,f,v,m=e[d].replace(r,"%20"),h=m.indexOf(n);h>=0?(p=m.substr(0,h),u=m.substr(h+1)):(p=m,u=""),f=decodeURIComponent(p),v=decodeURIComponent(u),a(o,f)?i(o[f])?o[f].push(v):o[f]=[o[f],v]:o[f]=v}return o};var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},b383:function(e,t,n){"use strict";t.decode=t.parse=n("91dd"),t.encode=t.stringify=n("e099")},bb51:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"content"},[n("v-row",{staticClass:"layout"},[n("div",{staticClass:"innerContent"},[n("div",{staticClass:"slogan mr-4"},[n("span",{staticClass:"slogan-yellow"},[e._v("THE LEMON DILEMMA")]),n("br"),n("span",{staticClass:"slogan-yellow"},[e._v(" IN CLOUD MINING?")]),n("br"),n("div",{staticClass:"desc"},[e._v("We aggregate and rate available mining contracts,"),n("br"),e._v(" for transparency, standardization, price discovery.")])]),n("div",{staticClass:"slogan"},[n("span",{staticClass:"slogan-black"},[e._v("BEST PRICE x OBJECTIVE METRICS")]),n("form",{staticClass:"validate",attrs:{action:"https://market.us4.list-manage.com/subscribe/post?u=466b3785cad82e2db6271ffcc&id=2f33950de0",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",target:"_blank",novalidate:""}},[n("div",{staticClass:"desc sign_up"},[e._v("Sign up for fresh updates on sweet deals in crypto mining.")]),n("div",{staticClass:"row form inputEmail"},[n("input",{attrs:{id:"email",name:"EMAIL",type:"email",placeholder:"Enter email address"}}),n("input",{staticClass:"btn btnGo",attrs:{type:"submit",value:"GO!"}})])])])])]),n("v-row",{staticClass:"mt-10 dealContainer",attrs:{justify:"center"}},[n("v-col",{staticStyle:{"max-width":"1080px","text-align":"center"}},[n("div",{staticClass:"display-2 deal-header"},[e._v(" Discover mining contracts listed across major platforms. ")])])],1),n("v-row",{staticClass:"deals mb-10",attrs:{justify:"center"}},[n("summary-table",{staticStyle:{margin:"0 auto","max-width":"1080px"}})],1),n("v-row",{staticClass:"faq d-flex",attrs:{justify:"center"}},[n("v-row",{staticClass:"mt-10",staticStyle:{"max-width":"1080px"}},[n("div",{staticClass:"display-2 mr-10 ml-4 mb-4"},[e._v("FAQ")]),n("div",[n("v-expansion-panels",[n("v-expansion-panel",[n("v-expansion-panel-header",{staticClass:"display-1 font-weight-bold"},[e._v("Economics 101: What does Mining and Lemon have in common?")]),n("v-expansion-panel-content",[n("p",[e._v(' "The Market for Lemons: Quality Uncertainty and the Market Mechanism" is a well-known 1978 paper by economist '),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/George_Akerlof",target:"_blank"}},[e._v("George Akerlof")]),e._v(" which examines how the quality of goods traded in a market can degrade in the presence of "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Information_asymmetry",target:"_blank"}},[e._v("information asymmetry")]),e._v(' between buyers and sellers, leaving only "lemons" behind (Wikipedia). ')]),n("p",[e._v(" Mining contracts serve a function in the financialization of mining. Miners have traditionally resorted to selling cloud mining contracts to hedge risk by locking in future mining rewards ahead of time or earning premium for performing mining services. However, there have been few credible choices available for miners of small to medium size operations to list their mining services. ")]),n("p",[e._v(" On the other hand, investors who are interested in exposure to mining cashflow without having to deal with the hassle of actual mining, only have the choice of centralized cloud mining or staking platforms that leave them with little pricing power or choice of cryptocurrencies. Moreover, prevalent cloud mining contract design which requires investors to put up full collateral upfront but no collateral for the issuers, exposing investors to significant counterparty risk. ")]),n("p",[e._v("Even across reputable platforms, existing cloud mining market is far from standardized or efficient. Price disparities of 10-40% for the same type of mining contract underwritten by different platforms is common.")]),n("p",[e._v("That’s why we created HoneyLemon, and start by aggregating available cloud mining contracts from select platforms with a track record of operations, for transparency, standardization and price discovery.")])])],1),n("v-expansion-panel",[n("v-expansion-panel-header",{staticClass:"display-1 font-weight-bold"},[e._v("What are the typical cloud mining contracts in financial terms?")]),n("v-expansion-panel-content",[e._v(" According to "),n("a",{attrs:{href:"https://www.fincen.gov/sites/default/files/2019-05/FinCEN%20Guidance%20CVC%20FINAL%20508.pdf",target:"_blank"}},[e._v("FinCEN")]),e._v(" , “persons (contract purchasers) may purchase “mining contracts” from a seller of computer processing (the cloud miner) that grants these purchasers permission to use the cloud miner’s computers to mine CVCs on the purchaser’s behalf.” Cloud mining contracts can be commonly classified into two types: termed contracts with fixed duration such as 180 days or 1 year contract, and “lifetime” contracts that terminate after the mining earnings falls below electricity cost. The investor of cloud mining contracts and the miner/platform issuing these contracts are essentially exchanging a cashflow swap: investor receives the mining cashflow produced by the mining asset (floating leg), and the miner/platform either receives cash upfront or across multiple (often equal) installments over a period of time (fixed leg). ")])],1),n("v-expansion-panel",[n("v-expansion-panel-header",{staticClass:"display-1 font-weight-bold"},[e._v("How are the HoneyLemon mining contract metrics calculated?")]),n("v-expansion-panel-content",[n("span",{staticClass:"title-1 font-weight-bold"},[e._v("% off discount")]),n("p",[e._v(" Discount calculated as the cost of buying BTC or ETH compared to BTC or ETH earned via buying the cloud mining contract. The BTC or ETH earned via contract is calculated based on static projection of theoretical mining payoff given network difficulty and coin price at the moment ")]),n("span",{staticClass:"title-1 font-weight-bold"},[e._v("Contract cost")]),n("p",[e._v(" Sum of upfront fees and present value of expected future cashflow earned over duration of the contract, discounted with CeFi/DeFi interest rate (See Messari), divided into unit cost (BTC: $ per Th per Day, or ETH: $ per Mh per Day) ")]),n("span",{staticClass:"title-1 font-weight-bold"},[e._v("Today’s mining income")]),n("p",[e._v(" Sometimes called theoretical mining yield, is the actual mining income in the past 24 hours (BTC: $ per Th per Day, or ETH: $ per Mh per Day). This estimate of mining income assumes current difficulty and price (Source: btc.com and sparkpool.com). ")]),n("span",{staticClass:"title-1 font-weight-bold"},[e._v("Upfront fee")]),n("p",[e._v("Sometimes called hashrate fee or contract fee, is the fee an investor needs to pay upfront in order to receive mining payoffs.")]),n("span",{staticClass:"title-1 font-weight-bold"},[e._v("Additional daily fee")]),n("p",[e._v(" Sometimes called electricity or maintenance fee, is the additional daily fee consists of several costs including but not limited to mining's electricity fee, mining farm maintenance, heat dissipation, operation and maintenance for miners etc. ")]),n("span",{staticClass:"title-1 font-weight-bold"},[e._v("Today's mining earnings:")]),n("p",[e._v("Theoretical Output from BTC.com for BTC, sparkpool.com for ETH.")])])],1),n("v-expansion-panel",[n("v-expansion-panel-header",{staticClass:"display-1 font-weight-bold"},[e._v("Disclaimer")]),n("v-expansion-panel-content",[n("span",{staticClass:"title-1"},[e._v("No Investment Advice")]),n("p",[e._v(" The information provided on this website does not constitute investment advice, financial advice, trading advice, or any other sort of advice and you should not treat any of the website's content as such. Honeyl Lemon does not recommend that any mining contract should be bought, sold, or held by you. Do conduct your own due diligence and consult your financial advisor before making any investment decisions. ")]),n("span",{staticClass:"title-1"},[e._v("Accuracy of Information")]),n("p",[e._v(" Honeylemon will strive to ensure accuracy of information listed on this website although it will not hold any responsibility for any missing or wrong information. Honeylemon provides all information as is. You understand that you are using any and all information available here at your own risk. ")])])],1)],1)],1)])],1)],1)},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-tabs",{attrs:{centered:"","center-active":""},model:{value:e.activeCoinTab,callback:function(t){e.activeCoinTab=t},expression:"activeCoinTab"}},[e._l(e.coins,(function(t){return n("v-tab",{key:"tab-"+t,on:{click:function(n){e.$store.state.selectedCoins=[t]}}},[e._v(e._s(t))])})),e._l(e.coins,(function(t){return n("v-tab-item",{key:"tab-item-"+t},[n("v-row",{staticClass:"mx-4 pt-4 d-flex font-weight-light",attrs:{justify:e.$vuetify.breakpoint.xsOnly?"start":"center"}},[n("div",{staticClass:"mx-4 d-flex align-center"},[n("v-icon",[e._v("mdi-coin")]),e._v(" "+e._s(t)+" price: $"+e._s(e.summary[t].coinPrice)+" ")],1),n("div",{staticClass:"mx-4 d-flex align-center"},[n("v-icon",[e._v("mdi-treasure-chest")]),e._v(" "+e._s(t)+" mining earnings: $"+e._s(e.summary[t].maxPayOff.toFixed(4))+" /"+e._s(e.summary[t].unit)+"/Day ("+e._s(e.summary[t].maxPayOffBtc.toFixed(8))+" BTC) ")],1)]),n("div",{staticClass:"pa-4"},[n("v-row",{staticClass:"caption d-flex",staticStyle:{margin:"0","margin-top":"24px"},attrs:{justify:"space-between",align:"center","align-content":"center"}},[n("v-col",{attrs:{cols:"3"}},[e._v("Contract Duration")]),n("v-col",{attrs:{cols:"3"}},[e._v("Best Unit Price")]),n("v-col",{staticClass:"costCol",attrs:{cols:"3"}},[e._v("Cost Basis")]),n("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-col",{staticStyle:{"text-align":"center"},attrs:{cols:"3"}},[e._v(" "+e._s(e.slot2[0])+" "),n("v-icon",e._g({staticClass:"body-1 mx-1"},a),[e._v("mdi-arrow-down-drop-circle-outline")])],1)]}}],null,!0)},[n("v-list",e._l(e.slot2Menu,(function(t){var a=t[0],i=t[1];return n("v-list-item",{key:a,on:{click:function(t){e.slot2=[a,i]}}},[n("v-list-item-title",[e._v(e._s(a))])],1)})),1)],1)],1),n("v-row",{staticClass:"homeDeal v-card--hover",attrs:{justify:"space-between",align:"center","align-content":"center"},on:{click:function(n){return e.goToNicehash(t)}}},[n("v-col",{attrs:{cols:"4",xs:"4",sm:"3",md:"3",lg:"3"}},[e._v("Real time "),n("v-chip",{attrs:{small:"",color:"cyan lighten-4"}},[e._v("NiceHash")])],1),n("v-col",{attrs:{cols:"5",xs:"5",sm:"3",md:"3",lg:"3"}},[e._v(e._s(e._f("price")(e.niceHash[e.getAlg(t)].avgPrice*e.btcPrice/e.getFactor(t)))),n("span",{staticClass:"grey--text"},[e._v(" (/"+e._s(e.summary[t].unit)+"/Day)")])]),n("v-col",{staticClass:"costCol",attrs:{cols:"3"}},[e._v(e._s(e._f("price")(e.niceHash[e.getAlg(t)].avgPrice*e.btcPrice/e.summary[t].maxPayOffBtc/e.getFactor(t)))),n("span",{staticClass:"grey--text"},[e._v(" per "+e._s(t))])]),n("v-col",{staticClass:"dealROI",attrs:{cols:"3",xs:"3",sm:"3",md:"3",lg:"3"}},[e._v("N/A")])],1),e._l(e.summary[t].contracts,(function(a,i){return n("v-row",{key:i,staticClass:"homeDeal v-card--hover",attrs:{justify:"space-between",align:"center","align-content":"center"},on:{click:function(n){return e.jump(t,a.duration)}}},[n("v-col",{attrs:{cols:"4",xs:"4",sm:"3",md:"3",lg:"3"}},[e._v(e._s(a.durationAlias)+" "),n("v-chip",{attrs:{small:"",color:"cyan lighten-4"}},[e._v(e._s(e.summary[t].durationSellers.get(a.duration).size)+" Platforms")])],1),n("v-col",{attrs:{cols:"5",xs:"5",sm:"3",md:"3",lg:"3"}},[e._v(e._s(e._f("price")(a.contract_cost))+" "),n("span",{staticClass:"grey--text"},[e._v("(/"+e._s(e.summary[t].unit)+"/Day)")])]),n("v-col",{staticClass:"costCol",attrs:{cols:"3"}},[e._v(e._s(e._f("price")(a.contract_cost/a.mining_payoff_btc))+" "),n("span",{staticClass:"grey--text"},[e._v("per "+e._s(t))])]),"expected_breakeven_days"!==e.slot2[1]?n("v-col",{staticClass:"dealROI",attrs:{cols:"3",xs:"3",sm:"3",md:"3",lg:"3"}},[e._v(" "+e._s(e._f("percent")(a[e.slot2[1]]||e.slot2[1](a)))+" ")]):e._e(),"expected_breakeven_days"===e.slot2[1]?n("v-col",{staticClass:"dealROI",attrs:{cols:"3",xs:"3",sm:"3",md:"3",lg:"3"}},[e._v(" "+e._s(a.expected_breakeven_days.toFixed(0))+" ")]):e._e()],1)}))],2)],1)}))],2)},o=[],r=(n("a4d3"),n("4de4"),n("4160"),n("c975"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),c=n("b383"),l=n.n(c),d=n("2f62"),p=n("98fc");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v={name:"SummaryTable",computed:f({},Object(d["b"])(["summary","niceHash","coins"]),{btcPrice:function(){return this.$store.state.summary.BTC.coinPrice}}),methods:{goToNicehash:function(e){this.$gtag.event("nicehash",{event_category:"check-it-out",event_label:e}),window.open("https://www.nicehash.com/my/marketplace/SHA256")},getAlg:function(e){return"ETH"===e||"ETC"===e?"DAGGERHASHIMOTO":"SHA256"},getFactor:function(e){return"ETH"===e||"ETC"===e?1e6:1e3},jump:function(e,t){location.href="#/products?"+l.a.encode({coin:e,duration:t})}},filters:{percent:p["a"],unit:p["c"],price:p["b"]},data:function(){return{activeCoinTab:this.$store.state.coins.indexOf(this.$store.state.selectedCoins[0]),slot2Menu:[["ROI",function(e){return e.mining_payoff/e.contract_cost-1}],["Breakeven Days","expected_breakeven_days"],["%OFF vs buying",function(e){return(e.btc_price-e.contract_cost/e.mining_payoff_btc)/e.btc_price}]],slot2:["ROI",function(e){return e.mining_payoff/e.contract_cost-1}]}}},m=v,h=(n("439c"),n("2877")),b=n("6544"),y=n.n(b),g=n("cc20"),_=n("62ad"),x=n("132d"),w=n("8860"),O=n("da13"),C=n("5d23"),j=n("e449"),P=n("0fd9"),k=n("71a3"),T=n("c671"),D=n("fe57"),E=Object(h["a"])(m,s,o,!1,null,"75277e52",null),A=E.exports;y()(E,{VChip:g["a"],VCol:_["a"],VIcon:x["a"],VList:w["a"],VListItem:O["a"],VListItemTitle:C["b"],VMenu:j["a"],VRow:P["a"],VTab:k["a"],VTabItem:T["a"],VTabs:D["a"]});var I={name:"home",components:{SummaryTable:A}},S=I,H=(n("4cfb"),n("a523")),B=n("cd55"),M=n("49e2"),$=n("c865"),R=n("0393"),V=Object(h["a"])(S,a,i,!1,null,"2af9e2ab",null);t["default"]=V.exports;y()(V,{VCol:_["a"],VContainer:H["a"],VExpansionPanel:B["a"],VExpansionPanelContent:M["a"],VExpansionPanelHeader:$["a"],VExpansionPanels:R["a"],VRow:P["a"]})},c865:function(e,t,n){"use strict";n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");var a=n("ade3"),i=n("0789"),s=n("9d26"),o=n("3206"),r=n("5607"),c=n("80d2"),l=n("58df");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(a["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=Object(l["a"])(Object(o["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel"));t["a"]=u.extend().extend({name:"v-expansion-panel-header",directives:{ripple:r["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(e){this.$emit("click",e)},genIcon:function(){var e=Object(c["o"])(this,"actions")||[this.$createElement(s["a"],this.expandIcon)];return this.$createElement(i["c"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render:function(e){var t=this;return e("button",{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button"},directives:[{name:"ripple",value:this.ripple}],on:p({},this.$listeners,{click:this.onClick,mousedown:function(){return t.hasMousedown=!0},mouseup:function(){return t.hasMousedown=!1}})},[Object(c["o"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}})},cd55:function(e,t,n){"use strict";n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");var a=n("ade3"),i=n("4e82"),s=n("3206"),o=n("80d2"),r=n("58df");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(a["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t["a"]=Object(r["a"])(Object(i["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(s["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return l({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(e){this.content=e},unregisterContent:function(){this.content=null},registerHeader:function(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var e=this;this.content&&(this.content.isBooted=!0),this.$nextTick((function(){return e.$emit("change")}))}},render:function(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(o["o"])(this))}})},e099:function(e,t,n){"use strict";var a=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,n,r){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"===typeof e?s(o(e),(function(o){var r=encodeURIComponent(a(o))+n;return i(e[o])?s(e[o],(function(e){return r+encodeURIComponent(a(e))})).join(t):r+encodeURIComponent(a(e[o]))})).join(t):r?encodeURIComponent(a(r))+n+encodeURIComponent(a(e)):""};var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function s(e,t){if(e.map)return e.map(t);for(var n=[],a=0;a<e.length;a++)n.push(t(e[a],a));return n}var o=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}}}]);
//# sourceMappingURL=chunk-75f71c7a.2098ad45.js.map