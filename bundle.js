!function(e){var t={};function n(a){if(t[a])return t[a].exports;var l=t[a]={i:a,l:!1,exports:{}};return e[a].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(a,l,function(t){return e[t]}.bind(null,l));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=15)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-router-config")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("react-helmet")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("react-lazy-load-image-component")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("compression")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("serialize-javascript")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("redux-thunk")},function(e,t){e.exports=require("@babel/polyfill")},function(e,t,n){"use strict";n.r(t);n(14);var a=n(8),l=n.n(a),r=n(3),c=n(9),o=n.n(c),s=n(0),i=n.n(s),u=n(10),d=n(2),m=n(4),f=n(11),b=n.n(f),p=n(5),g=n(7),y=n(1),v=n.n(y),E=n(12),h=n.n(E);function x(e,t,n,a,l,r,c){try{var o=e[r](c),s=o.value}catch(e){return void n(e)}o.done?t(s):Promise.resolve(s).then(a,l)}var k=function(e){return function(){var t,n=(t=regeneratorRuntime.mark((function t(n){var a,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="https://api.spaceXdata.com/v3/launches?limit=100",console.log("source",e),e&&(e.includes("20")&&(a+="&launch_year=".concat(e.slice(0,4))),e.includes("LaunchSuccess")&&(a+="&launch_success=true"),e.includes("LaunchFailed")&&(a+="&launch_success=false"),e.includes("LandingSuccess")&&(a+="&land_success=true"),e.includes("LandingFailed")&&(a+="&land_success=false")),t.next=5,h.a.get(a);case 5:l=t.sent,n({type:"fetch_articles",payload:l.data});case 7:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(a,l){var r=t.apply(e,n);function c(e){x(r,a,l,c,o,"next",e)}function o(e){x(r,a,l,c,o,"throw",e)}c(void 0)}))});return function(e){return n.apply(this,arguments)}}()},w=function(e){var t=e.handler,n=e.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"modal1",className:"modal",style:{zIndex:1003,display:"block",opacity:1,top:10,width:"95vw",height:"95vh",maxHeight:"95vh"}},i.a.createElement("div",{className:"modal-footer"},i.a.createElement("button",{type:"button",onClick:t,className:"modal-close waves-effect waves-green btn red"},"Close")),i.a.createElement("div",{className:"modal-content"},i.a.createElement("h4",null,n.title),i.a.createElement("img",{className:"responsive-img",src:n.urlToImage,alt:n.title}),i.a.createElement("p",null,n.description),i.a.createElement("p",null,n.content),i.a.createElement("div",{className:"divider"}),i.a.createElement("div",{className:"section"},i.a.createElement("a",{href:n.url,className:"waves-effect waves-light btn",target:"_blank",rel:"noopener noreferrer"},"Full Article")))),i.a.createElement("div",{role:"presentation",onClick:t,className:"modal-overlay",style:{zIndex:1002,display:"block",opacity:.5}}))};w.propTypes={data:v.a.objectOf(v.a.any),handler:v.a.func},w.defaultProps={data:null,handler:null};var S=w;function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,l=!1,r=void 0;try{for(var c,o=e[Symbol.iterator]();!(a=(c=o.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){l=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(l)throw r}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var C=function(e){var t=O(Object(s.useState)(!1),2),n=t[0],a=t[1],l=O(Object(s.useState)({}),2),r=l[0],c=(l[1],O(Object(s.useState)([]),2)),o=(c[0],c[1]),u=function(){for(var e=[],t=2006,n=0;t<=2020;t++,n++)e.push({year:t,key:n,Enabled:!1});return e},m=function(e){var t="/articles/".concat(e);f.push(t)},f=Object(d.useHistory)(),b=function(e){var t="/articles/".concat(e?"LaunchSuccess":"LaunchFailed");f.push(t)},y=function(e){var t="/articles/".concat(e?"LandingSuccess":"LandingFailed");f.push(t)};Array(u.length).fill(!1);var v=e.fetchArticles;return Object(s.useEffect)((function(){o(u())}),[]),Object(s.useEffect)((function(){window.scrollTo(0,0),v()}),[v]),i.a.createElement("div",null,i.a.createElement(p.Helmet,{key:Math.random()},i.a.createElement("title",null,"SpaceX Launch Programs"),i.a.createElement("meta",{property:"og:title",content:"SpaceX Launch Programs - Publicis Sapient"}),i.a.createElement("meta",{name:"description",content:"Breaking news,latest articles, popular articles from most popular news websites of the world"}),i.a.createElement("meta",{name:"robots",content:"index, follow"}),i.a.createElement("link",{rel:"canonical",href:"https://react-ssr-ilker.herokuapp.com"})),n?i.a.createElement(S,{handler:function(){a(!1)},data:r}):null,i.a.createElement("div",null,i.a.createElement("div",{class:"row",style:L.mrgnLR10},i.a.createElement("div",{class:"col s12 m4 l2 xl2"},i.a.createElement("div",{className:"section"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{class:"col s12 m12 l12 xl12"},i.a.createElement("div",{class:"card white ",style:{height:"700px"}},i.a.createElement("div",{class:"card-content black-text",style:{padding:"10px"}},i.a.createElement("span",{class:"card-title"},i.a.createElement("b",null,"Filters")),i.a.createElement("div",{style:L.textAlignCntr}," ",i.a.createElement("p",null,"Launch Year")," "),i.a.createElement("div",{class:"divider",style:L.dividerStyle}),i.a.createElement("div",null,i.a.createElement("div",{style:{"margin-top":"5px"}},i.a.createElement("div",{class:"col s6 m6 l6 xl6",style:{padding:"4%","text-align":"center"}},i.a.createElement("a",{class:"waves-effect btn",onClick:function(){return m(2006)},style:{"background-color":"#2bbb4361",color:"black"}},"2006")),i.a.createElement("div",{class:"col s6 m6 l6 xl6",style:{padding:"4%","text-align":"center"}},i.a.createElement("a",{class:"waves-effect btn",onClick:function(){return m(2007)},style:{"background-color":"#2bbb4361",color:"black"}},"2007")),i.a.createElement("div",{class:"col s6 m6 l6 xl6",style:{padding:"4%","text-align":"center"}},i.a.createElement("a",{class:"waves-effect btn",onClick:function(){return m(2008)},style:{"background-color":"#2bbb4361",color:"black"}},"2008")),i.a.createElement("div",{class:"col s6 m6 l6 xl6",style:{padding:"4%","text-align":"center"}},i.a.createElement("a",{class:"waves-effect btn",onClick:function(){return m(2009)},style:{"background-color":"#2bbb4361",color:"black"}},"2009")),i.a.createElement("div",{class:"col s6 m6 l6 xl6",style:{padding:"4%","text-align":"center"}},i.a.createElement("a",{class:"waves-effect btn",onClick:function(){return m(2010)},style:{"background-color":"#2bbb4361",color:"black"}},"2010")),i.a.createElement("div",{class:"col s6 m6 l6 xl6",style:{padding:"4%","text-align":"center"}},i.a.createElement("a",{class:"waves-effect btn",onClick:function(){return m(2011)},style:{"background-color":"#2bbb4361",color:"black"}},"2011")),i.a.createElement("div",{class:"col s6 m6 l6 xl6",style:{padding:"4%","text-align":"center"}},i.a.createElement("a",{class:"waves-effect btn",onClick:function(){return m(2012)},style:{"background-color":"#2bbb4361",color:"black"}},"2012")),i.a.createElement("div",{class:"col s6 m6 l6 xl6",style:{padding:"4%","text-align":"center"}},i.a.createElement("a",{class:"waves-effect btn",onClick:function(){return m(2013)},style:{"background-color":"#2bbb4361",color:"black"}},"2013")),i.a.createElement("div",{class:"col s6 m6 l6 xl6",style:{padding:"4%","text-align":"center"}},i.a.createElement("a",{class:"waves-effect btn",onClick:function(){return m(2014)},style:{"background-color":"#2bbb4361",color:"black"}},"2014")),i.a.createElement("div",{class:"col s6 m6 l6 xl6",style:{padding:"4%","text-align":"center"}},i.a.createElement("a",{class:"waves-effect btn",onClick:function(){return m(2015)},style:{"background-color":"#2bbb4361",color:"black"}},"2015")),i.a.createElement("div",{class:"col s6 m6 l6 xl6",style:{padding:"4%","text-align":"center"}},i.a.createElement("a",{class:"waves-effect btn",onClick:function(){return m(2016)},style:{"background-color":"#2bbb4361",color:"black"}},"2016")),i.a.createElement("div",{class:"col s6 m6 l6 xl6",style:{padding:"4%","text-align":"center"}},i.a.createElement("a",{class:"waves-effect btn",onClick:function(){return m(2017)},style:{"background-color":"#2bbb4361",color:"black"}},"2017")),i.a.createElement("div",{class:"col s6 m6 l6 xl6",style:{padding:"4%","text-align":"center"}},i.a.createElement("a",{class:"waves-effect btn",onClick:function(){return m(2018)},style:{"background-color":"#2bbb4361",color:"black"}},"2018")),i.a.createElement("div",{class:"col s6 m6 l6 xl6",style:{padding:"4%","text-align":"center"}},i.a.createElement("a",{class:"waves-effect btn",onClick:function(){return m(2019)},style:{"background-color":"#2bbb4361",color:"black"}},"2019")),i.a.createElement("div",{class:"col s6 m6 l6 xl6",style:{padding:"4%","text-align":"center"}},i.a.createElement("a",{class:"waves-effect btn",onClick:function(){return m(2020)},style:{"background-color":"#2bbb4361",color:"black"}},"2020"))))),i.a.createElement("div",{class:"card-content black-text col s12 m12 l12 xl12s",style:{padding:"10px"}},i.a.createElement("div",{style:L.textAlignCntr}," ",i.a.createElement("p",null,"Successful Launch")," "),i.a.createElement("div",{class:"divider",style:L.dividerStyle}),i.a.createElement("div",{style:{"margin-top":"5px"}},i.a.createElement("div",{class:"col s6 m6 l6 xl6",style:{padding:"4%","text-align":"center"},onClick:function(){return b(!0)}},i.a.createElement("a",{class:"waves-effect btn",style:{"background-color":"#2bbb4361",color:"black","text-transform":"none"}},"True")),i.a.createElement("div",{class:"col s6 m6 l6 xl6",style:{padding:"4%","text-align":"center"},onClick:function(){return b(!1)}},i.a.createElement("a",{class:"waves-effect btn",style:{"background-color":"#2bbb4361",color:"black","text-transform":"none"}},"False")))),i.a.createElement("div",{class:"card-content black-text col s12 m12 l12 xl12s",style:{padding:"10px"}},i.a.createElement("div",{style:L.textAlignCntr}," ",i.a.createElement("p",null,"Successful Landing")," "),i.a.createElement("div",{class:"divider",style:L.dividerStyle}),i.a.createElement("div",{style:{"margin-top":"5px"}},i.a.createElement("div",{class:"col s6 m6 l6 xl6",style:{padding:"4%","text-align":"center"}},i.a.createElement("a",{class:"waves-effect btn",style:{"background-color":"#2bbb4361",color:"black","text-transform":"none"},onClick:function(){return y(!0)}},"True")),i.a.createElement("div",{class:"col s6 m6 l6 xl6",style:{padding:"4%","text-align":"center"}},i.a.createElement("a",{class:"waves-effect btn",style:{"background-color":"#2bbb4361",color:"black","text-transform":"none"},onClick:function(){return y(!1)}},"False"))))))))),i.a.createElement("div",{class:"col s12 m8 l10 xl10"},i.a.createElement("div",{className:"section"},i.a.createElement("div",{className:"row"},e.articles.length>0?e.articles.map((function(e){return i.a.createElement("div",{className:"col s12 m6 l3 xl3",key:e.flight_number},i.a.createElement("div",{className:"card ",style:{"min-height":"430px"}},i.a.createElement("div",{className:"card-image",style:{padding:"15px"}},i.a.createElement(g.LazyLoadImage,{alt:e.links.mission_patch,src:e.links.mission_patch_small,style:{height:"150px","background-color":"#f5f5f5"}})),i.a.createElement("div",{className:"card-content",style:L.padding20},i.a.createElement("div",null,i.a.createElement("b",{style:L.fontHeadr},e.mission_name," #",e.flight_number)),i.a.createElement("div",{style:L.mrgnbttp},i.a.createElement("b",null,"Mission Ids:")),i.a.createElement("div",{style:L.mrgnLft25},i.a.createElement("ul",null,e.mission_id.length>0?e.mission_id.map((function(e){return i.a.createElement("li",{style:{"list-style-type":"disc"}},e)})):"N/A")),i.a.createElement("div",{style:L.mrgnbtm10},i.a.createElement("b",null,"Launch Year: ")," ",i.a.createElement("span",null,e.launch_year)),i.a.createElement("div",{style:L.mrgnbtm10},i.a.createElement("b",null,"Successful Launch: "),i.a.createElement("span",null,e.launch_success?"True":"False")),i.a.createElement("div",null,i.a.createElement("b",null,"Successful Landing: "),i.a.createElement("span",null,e.upcoming?"True":"False")))))})):i.a.createElement("div",null,i.a.createElement("span",null,"No Data"))))))))},L={fullWidth:{width:"100%"},mrgnLR10:{"margin-left":"20px","margin-right":"10px"},textAlignCntr:{"text-align":"center"},dividerStyle:{"text-align":"center",width:"70%","margin-left":"15%"},mrgnbttp:{"margin-bottom":"-15px","margin-top":"10px"},mrgnLft25:{"margin-left":"25px","margin-bottom":"10px"},mrgnbtm10:{"margin-bottom":"10px"},fontHeadr:{"font-weight":700,color:"cornflowerblue"},padding20:{padding:"20px"},btnEffect:{"&:hover":{background:"#efefef"},"background-color":"#2bbb4361",color:"black"}};C.propTypes={articles:v.a.arrayOf(v.a.any),fetchArticles:v.a.func},C.defaultProps={articles:[],fetchArticles:null};var _={component:Object(m.connect)((function(e){return{articles:e.articles}}),{fetchArticles:k})(C),loadData:function(e){return e.dispatch(k())}},N=function(e){var t=e.staticContext;return(void 0===t?{}:t).notFound=!0,i.a.createElement("div",{className:"ui container"},i.a.createElement("h1",null,"Page Not Found!!!"),i.a.createElement("p",null,"Please try again! "))};N.propTypes={staticContext:v.a.objectOf(v.a.any)},N.defaultProps={staticContext:{}};var P={component:N};function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,l=!1,r=void 0;try{for(var c,o=e[Symbol.iterator]();!(a=(c=o.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){l=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(l)throw r}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return F(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var T="",I=function(e){var t=A(Object(s.useState)(!1),2),n=t[0],a=t[1],l=A(Object(s.useState)({}),2),r=l[0],c=(l[1],function(e){T=T.includes("20")?e+"":e+"_"+T;var t="/articles/".concat(T);o.push(t)}),o=Object(d.useHistory)(),u=function(e){e?T.includes("LaunchFailed")?T=T.replace("LaunchFailed","LaunchSuccess"):T.includes("LaunchSuccess")||(T+="_LaunchSuccess"):T.includes("LaunchSuccess")?T=T.replace("LaunchSuccess","LaunchFailed"):T.includes("LaunchFailed")||(T+="_LaunchFailed");var t="/articles/".concat(T);o.push(t)},m=function(e){e?T.includes("LandingFailed")?T=T.replace("LandingFailed","LandingSuccess"):T.includes("LandingSuccess")||(T+="_LandingSuccess"):T.includes("LandingSuccess")?T=T.replace("LandingSuccess","LandingFailed"):T.includes("LandingFailed")||(T+="_LandingFailed");var t="/articles/".concat(T);o.push(t)},f=e.fetchArticles,b=e.match;return Object(s.useEffect)((function(){window.scrollTo(0,0),b.params.id?f(b.params.id):f()}),[f,b.params.id]),i.a.createElement("div",null,i.a.createElement(p.Helmet,{key:Math.random()},i.a.createElement("title",null,"SpaceX Launch Programs"),i.a.createElement("meta",{property:"og:title",content:"SpaceX Launch Programs - Publicis Sapient"}),i.a.createElement("meta",{name:"description",content:"Breaking news,latest articles, popular articles from most popular news websites of the world"}),i.a.createElement("meta",{name:"robots",content:"index, follow"}),i.a.createElement("link",{rel:"canonical",href:"https://react-ssr-ilker.herokuapp.com"})),n?i.a.createElement(S,{handler:function(){a(!1)},data:r}):null,i.a.createElement("div",null,i.a.createElement("div",{class:"row",style:R.mrgnLR10},i.a.createElement("div",{class:"col s12 m4 l2 xl2"},i.a.createElement("div",{className:"section"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{class:"col s12 m12 l12 xl12"},i.a.createElement("div",{class:"card white ",style:{height:"700px"}},i.a.createElement("div",{class:"card-content black-text",style:{padding:"10px"}},i.a.createElement("span",{class:"card-title"},i.a.createElement("b",null,"Filters")),i.a.createElement("div",{style:R.textAlignCntr}," ",i.a.createElement("p",null,"Launch Year")," "),i.a.createElement("div",{class:"divider",style:R.dividerStyle}),i.a.createElement("div",null,i.a.createElement("div",{style:{"margin-top":"5px"}},i.a.createElement("div",{class:"col s6 m6 l6 xl6",style:{padding:"4%","text-align":"center"}},i.a.createElement("a",{class:"waves-effect btn",onClick:function(){return c(2006)},style:{"background-color":"#2bbb4361",color:"black"}},"2006")),i.a.createElement("div",{class:"col s6 m6 l6 xl6",style:{padding:"4%","text-align":"center"}},i.a.createElement("a",{class:"waves-effect btn",onClick:function(){return c(2007)},style:{"background-color":"#2bbb4361",color:"black"}},"2007")),i.a.createElement("div",{class:"col s6 m6 l6 xl6",style:{padding:"4%","text-align":"center"}},i.a.createElement("a",{class:"waves-effect btn",onClick:function(){return c(2008)},style:{"background-color":"#2bbb4361",color:"black"}},"2008")),i.a.createElement("div",{class:"col s6 m6 l6 xl6",style:{padding:"4%","text-align":"center"}},i.a.createElement("a",{class:"waves-effect btn",onClick:function(){return c(2009)},style:{"background-color":"#2bbb4361",color:"black"}},"2009")),i.a.createElement("div",{class:"col s6 m6 l6 xl6",style:{padding:"4%","text-align":"center"}},i.a.createElement("a",{class:"waves-effect btn",onClick:function(){return c(2010)},style:{"background-color":"#2bbb4361",color:"black"}},"2010")),i.a.createElement("div",{class:"col s6 m6 l6 xl6",style:{padding:"4%","text-align":"center"}},i.a.createElement("a",{class:"waves-effect btn",onClick:function(){return c(2011)},style:{"background-color":"#2bbb4361",color:"black"}},"2011")),i.a.createElement("div",{class:"col s6 m6 l6 xl6",style:{padding:"4%","text-align":"center"}},i.a.createElement("a",{class:"waves-effect btn",onClick:function(){return c(2012)},style:{"background-color":"#2bbb4361",color:"black"}},"2012")),i.a.createElement("div",{class:"col s6 m6 l6 xl6",style:{padding:"4%","text-align":"center"}},i.a.createElement("a",{class:"waves-effect btn",onClick:function(){return c(2013)},style:{"background-color":"#2bbb4361",color:"black"}},"2013")),i.a.createElement("div",{class:"col s6 m6 l6 xl6",style:{padding:"4%","text-align":"center"}},i.a.createElement("a",{class:"waves-effect btn",onClick:function(){return c(2014)},style:{"background-color":"#2bbb4361",color:"black"}},"2014")),i.a.createElement("div",{class:"col s6 m6 l6 xl6",style:{padding:"4%","text-align":"center"}},i.a.createElement("a",{class:"waves-effect btn",onClick:function(){return c(2015)},style:{"background-color":"#2bbb4361",color:"black"}},"2015")),i.a.createElement("div",{class:"col s6 m6 l6 xl6",style:{padding:"4%","text-align":"center"}},i.a.createElement("a",{class:"waves-effect btn",onClick:function(){return c(2016)},style:{"background-color":"#2bbb4361",color:"black"}},"2016")),i.a.createElement("div",{class:"col s6 m6 l6 xl6",style:{padding:"4%","text-align":"center"}},i.a.createElement("a",{class:"waves-effect btn",onClick:function(){return c(2017)},style:{"background-color":"#2bbb4361",color:"black"}},"2017")),i.a.createElement("div",{class:"col s6 m6 l6 xl6",style:{padding:"4%","text-align":"center"}},i.a.createElement("a",{class:"waves-effect btn",onClick:function(){return c(2018)},style:{"background-color":"#2bbb4361",color:"black"}},"2018")),i.a.createElement("div",{class:"col s6 m6 l6 xl6",style:{padding:"4%","text-align":"center"}},i.a.createElement("a",{class:"waves-effect btn",onClick:function(){return c(2019)},style:{"background-color":"#2bbb4361",color:"black"}},"2019")),i.a.createElement("div",{class:"col s6 m6 l6 xl6",style:{padding:"4%","text-align":"center"}},i.a.createElement("a",{class:"waves-effect btn",onClick:function(){return c(2020)},style:{"background-color":"#2bbb4361",color:"black"}},"2020"))))),i.a.createElement("div",{class:"card-content black-text col s12 m12 l12 xl12s",style:{padding:"10px"}},i.a.createElement("div",{style:R.textAlignCntr}," ",i.a.createElement("p",null,"Successful Launch")," "),i.a.createElement("div",{class:"divider",style:R.dividerStyle}),i.a.createElement("div",{style:{"margin-top":"5px"}},i.a.createElement("div",{class:"col s6 m6 l6 xl6",style:{padding:"4%","text-align":"center"},onClick:function(){return u(!0)}},i.a.createElement("a",{class:"waves-effect btn",style:{"background-color":"#2bbb4361",color:"black","text-transform":"none"}},"True")),i.a.createElement("div",{class:"col s6 m6 l6 xl6",style:{padding:"4%","text-align":"center"},onClick:function(){return u(!1)}},i.a.createElement("a",{class:"waves-effect btn",style:{"background-color":"#2bbb4361",color:"black","text-transform":"none"}},"False")))),i.a.createElement("div",{class:"card-content black-text col s12 m12 l12 xl12s",style:{padding:"10px"}},i.a.createElement("div",{style:R.textAlignCntr}," ",i.a.createElement("p",null,"Successful Landing")," "),i.a.createElement("div",{class:"divider",style:R.dividerStyle}),i.a.createElement("div",{style:{"margin-top":"5px"}},i.a.createElement("div",{class:"col s6 m6 l6 xl6",style:{padding:"4%","text-align":"center"}},i.a.createElement("a",{class:"waves-effect btn",style:{"background-color":"#2bbb4361",color:"black","text-transform":"none"},onClick:function(){return m(!0)}},"True")),i.a.createElement("div",{class:"col s6 m6 l6 xl6",style:{padding:"4%","text-align":"center"}},i.a.createElement("a",{class:"waves-effect btn",style:{"background-color":"#2bbb4361",color:"black","text-transform":"none"},onClick:function(){return m(!1)}},"False"))))))))),i.a.createElement("div",{class:"col s12 m8 l10 xl10"},i.a.createElement("div",{className:"section"},i.a.createElement("div",{className:"row"},e.articles.length>0?e.articles.map((function(e){return i.a.createElement("div",{className:"col s12 m6 l3 xl3",key:e.flight_number},i.a.createElement("div",{className:"card ",style:{"min-height":"430px"}},i.a.createElement("div",{className:"card-image",style:{padding:"15px"}},i.a.createElement(g.LazyLoadImage,{alt:e.links.mission_patch,src:e.links.mission_patch_small,style:{height:"150px","background-color":"#f5f5f5"}})),i.a.createElement("div",{className:"card-content",style:R.padding20},i.a.createElement("div",null,i.a.createElement("b",{style:R.fontHeadr},e.mission_name," #",e.flight_number)),i.a.createElement("div",{style:R.mrgnbttp},i.a.createElement("b",null,"Mission Ids:")),i.a.createElement("div",{style:R.mrgnLft25},i.a.createElement("ul",null,e.mission_id.length>0?e.mission_id.map((function(e){return i.a.createElement("li",{style:{"list-style-type":"disc"}},e)})):"N/A")),i.a.createElement("div",{style:R.mrgnbtm10},i.a.createElement("b",null,"Launch Year: ")," ",i.a.createElement("span",null,e.launch_year)),i.a.createElement("div",{style:R.mrgnbtm10},i.a.createElement("b",null,"Successful Launch: "),i.a.createElement("span",null,e.launch_success?"True":"False")),i.a.createElement("div",null,i.a.createElement("b",null,"Successful Landing: "),i.a.createElement("span",null,e.upcoming?"True":"False")))))})):i.a.createElement("div",{className:"col s12 m6 l3 xl3"},i.a.createElement("div",{className:"card ",style:{"min-height":"200px"}},i.a.createElement("div",{className:"card-image",style:{padding:"15px"}},i.a.createElement("h3",null,"No Data Found"))))))))))},R={fullWidth:{width:"100%"},mrgnLR10:{"margin-left":"20px","margin-right":"10px"},textAlignCntr:{"text-align":"center"},dividerStyle:{"text-align":"center",width:"70%","margin-left":"15%"},mrgnbttp:{"margin-bottom":"-15px","margin-top":"10px"},mrgnLft25:{"margin-left":"25px","margin-bottom":"10px"},mrgnbtm10:{"margin-bottom":"10px"},fontHeadr:{"font-weight":700,color:"cornflowerblue"},padding20:{padding:"20px"},btnEffect:{"&:hover":{background:"#efefef"},"background-color":"#2bbb4361",color:"black"}};I.propTypes={articles:v.a.arrayOf(v.a.any),fetchArticles:v.a.func,match:v.a.objectOf(v.a.any)},I.defaultProps={articles:[],fetchArticles:null,match:null};var D={component:Object(m.connect)((function(e){return{articles:e.articles}}),{fetchArticles:k})(I),loadData:function(e,t){return e.dispatch(k(t))}};function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Y(e);if(t){var l=Y(this).constructor;n=Reflect.construct(a,arguments,l)}else n=a.apply(this,arguments);return X(this,n)}}function X(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(r,e);var t,n,a,l=z(r);function r(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=l.call(this,e)).state={error:null,errorInfo:null},t}return t=r,(n=[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){var e=this.state,t=this.props.children;return e.errorInfo?i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",null,"Something went wrong."),i.a.createElement("details",{style:{whiteSpace:"pre-wrap"}},e.error&&e.error.toString(),i.a.createElement("br",null),e.errorInfo.componentStack)):t}}])&&M(t.prototype,n),a&&M(t,a),r}(i.a.Component);B.propTypes={children:v.a.oneOfType([v.a.arrayOf(v.a.node),v.a.node]).isRequired};var U=B;function $(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,l=!1,r=void 0;try{for(var c,o=e[Symbol.iterator]();!(a=(c=o.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){l=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(l)throw r}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return W(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var G={"margin-left":"2%"},J={"box-shadow":"none"},K={"background-color":"#80808014"},Q=function(){var e=$(Object(s.useState)(!1),2);e[0],e[1];return i.a.createElement("div",{className:"nav-wrapper",style:K},i.a.createElement("nav",{className:"black-text grey lighten-4",style:J},i.a.createElement("div",{style:G},i.a.createElement("a",{href:"/",className:"brand-logo black-text"},"SpaceX Launch Programs"))))},V=function(){return i.a.createElement("footer",{className:"page-footer",style:{"background-color":"#f5f5f5"}},i.a.createElement("div",{className:"footer-copyright",style:{"background-color":"#f5f5f5"}},i.a.createElement("div",{className:"container"},i.a.createElement("div",{style:{"text-align":"center",color:"black"}},i.a.createElement("b",null,"Developed by: ")," ",i.a.createElement("span",null,"Mayank Budhiraja")))))},Z=function(e){var t=e.route;return i.a.createElement("div",{style:ee},i.a.createElement(Q,null),i.a.createElement("div",{className:"row"},i.a.createElement(U,null,Object(r.renderRoutes)(t.routes))),i.a.createElement(V,null))},ee={"background-color":"#80808014"};function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){ae(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Z.propTypes={route:v.a.objectOf(v.a.any)},Z.defaultProps={route:null};var le=[ne(ne({},{component:Z}),{},{routes:[ne(ne({},_),{},{path:"/",exact:!0}),ne({path:"/articles/:id"},D),ne({},P)]})],re=n(6),ce=n(13),oe=n.n(ce),se=Object(re.combineReducers)({articles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_articles":return t.payload;default:return e}}}),ie=l()();ie.use(o()({level:2,filter:function(e,t){return!e.headers["x-no-compression"]&&o.a.filter(e,t)}}));var ue=process.env.PORT||3001;ie.use(l.a.static("public")),ie.get("*",(function(e,t){console.log("inside index",e);var n=e.params[0].split("/")[2],a=Object(re.createStore)(se,{},Object(re.applyMiddleware)(oe.a)),l=Object(r.matchRoutes)(le,e.path).map((function(e){var t=e.route;return t.loadData?t.loadData(a,n):null})).map((function(e){return e?new Promise((function(t,n){e.then(t).catch(t)})):null}));Promise.all(l).then((function(){var n={},l=function(e,t,n){var a=Object(u.renderToString)(i.a.createElement(m.Provider,{store:t},i.a.createElement(d.StaticRouter,{location:e.path,context:n},i.a.createElement("div",null,Object(r.renderRoutes)(le))))),l=p.Helmet.renderStatic();return"<!DOCTYPE html>\n            <head>\n                ".concat(l.title.toString(),"\n                ").concat(l.meta.toString(),"\n                ").concat(l.link.toString(),'\n                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">\n                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\n            </head>\n            <body>\n                <div id="root">').concat(a,"</div>\n                <script>\n                    window.__PRELOADED_STATE__ = ").concat(b()(t.getState()).replace(/</g,"\\u003c"),'\n                <\/script>\n                <script src="/bundle.js"><\/script>\n                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">\n            </body>\n    </html>')}(e,a,n);n.notFound&&t.status(NoData),t.send(l)}))})),ie.listen(ue,(function(){console.log("Listening on port: ".concat(ue))}))}]);