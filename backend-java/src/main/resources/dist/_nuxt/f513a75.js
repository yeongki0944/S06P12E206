(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{431:function(t,e,c){"use strict";c.r(e);c(5),c(4),c(2),c(1),c(6),c(3),c(7);var n=c(0),r=c(58);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(object);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,c)}return e}var o={data:function(){return{activeIndex:0,styleObject:{"background-size":"cover","background-position":"center",display:"block"}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.c)({missedCalls:function(t){return t.common.missedCalls},activecalltabs:function(t){return t.common.activecalltabs}})),methods:{getImgUrl:function(path){return c(338)("./"+path)},setActive:function(t){this.activeIndex=t}}},d=o,f=c(57),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"tab-content",attrs:{id:"contactTabContent"}},[c("div",{staticClass:"tab-pane fade",class:4==t.activecalltabs?"show active":"",attrs:{id:"con2",role:"tabpanel","aria-labelledby":"con2-tab"}},[c("ul",{staticClass:"call-log-main"},t._l(t.missedCalls,(function(e,n){return c("li",{key:e.id,class:{active:t.activeIndex===n},on:{click:function(e){return t.setActive(n)}}},[c("div",{staticClass:"call-box"},[c("div",{staticClass:"profile",class:e.status,style:[{"background-image":"url("+t.getImgUrl(e.img)+")"},t.styleObject]}),t._v(" "),c("div",{staticClass:"details"},[c("h5",[t._v(t._s(e.name))]),t._v(" "),c("h6",[c("feather",{staticClass:"missed",attrs:{type:"corner-left-down"}}),t._v(t._s(e.time)+"\n            ")],1)]),t._v(" "),c("div",{staticClass:"call-status"},[c("div",{staticClass:"icon-btn btn-outline-danger button-effect btn-sm"},[c("feather",{attrs:{type:e.log_symbol,size:"15",height:"15"}})],1)])])])})),0)])])}),[],!1,null,null,null);e.default=component.exports}}]);