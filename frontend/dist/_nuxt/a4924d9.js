(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{455:function(t,e,n){"use strict";n.r(e);n(5),n(4),n(2),n(1),n(6),n(3),n(7);var c=n(0),r=n(56);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var o={data:function(){return{activeIndex:0,styleObject:{"background-size":"cover","background-position":"center",display:"block"}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.b)({missedCalls:function(t){return t.common.missedCalls},activecalltabs:function(t){return t.common.activecalltabs}})),methods:{getImgUrl:function(path){return n(319)("./"+path)},setActive:function(t){this.activeIndex=t}}},d=o,f=n(55),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-content",attrs:{id:"contactTabContent"}},[n("div",{staticClass:"tab-pane fade",class:4==t.activecalltabs?"show active":"",attrs:{id:"con2",role:"tabpanel","aria-labelledby":"con2-tab"}},[n("ul",{staticClass:"call-log-main"},t._l(t.missedCalls,(function(e,c){return n("li",{key:e.id,class:{active:t.activeIndex===c},on:{click:function(e){return t.setActive(c)}}},[n("div",{staticClass:"call-box"},[n("div",{staticClass:"profile",class:e.status,style:[{"background-image":"url("+t.getImgUrl(e.img)+")"},t.styleObject]}),t._v(" "),n("div",{staticClass:"details"},[n("h5",[t._v(t._s(e.name))]),t._v(" "),n("h6",[n("feather",{staticClass:"missed",attrs:{type:"corner-left-down"}}),t._v(t._s(e.time)+"\n            ")],1)]),t._v(" "),n("div",{staticClass:"call-status"},[n("div",{staticClass:"icon-btn btn-outline-danger button-effect btn-sm"},[n("feather",{attrs:{type:e.log_symbol,size:"15",height:"15"}})],1)])])])})),0)])])}),[],!1,null,null,null);e.default=component.exports}}]);