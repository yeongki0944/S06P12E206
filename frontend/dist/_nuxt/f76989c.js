(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{428:function(t,e,l){"use strict";l.r(e);l(5),l(4),l(2),l(1),l(6),l(3),l(7);var c=l(0),o=l(82),n=l(56);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}var y={data:function(){return{activecolor:o.config.color}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.b)({togglerightside:function(t){return t.common.togglerightside}})),methods:{activeColor:function(t){this.activecolor=t,(document.getElementsByTagName("html")[0].classList.contains("style")||document.getElementsByTagName("html")[0].classList.contains("style1")||document.getElementsByTagName("html")[0].classList.contains("style2")||document.getElementsByTagName("html")[0].classList.contains("style3")||document.getElementsByTagName("html")[0].classList.contains("style4")||document.getElementsByTagName("html")[0].classList.contains("style5")||document.getElementsByTagName("html")[0].classList.contains("style6"))&&document.getElementsByTagName("html")[0].classList.remove("style","style1","style2","style3","style4","style5","style6"),"style"==t?document.getElementsByTagName("html")[0].classList.add("style"):"style1"==t?document.getElementsByTagName("html")[0].classList.add("style1"):"style2"==t?document.getElementsByTagName("html")[0].classList.add("style2"):"style3"==t?document.getElementsByTagName("html")[0].classList.add("style3"):"style4"==t?document.getElementsByTagName("html")[0].classList.add("style4"):"style5"==t?document.getElementsByTagName("html")[0].classList.add("style5"):"style6"==t&&document.getElementsByTagName("html")[0].classList.add("style6"),this.$store.dispatch("layout/setcolor",t),document.querySelector(".app-sidebar").classList.add("active"),document.body.classList.remove("menu-active"),document.body.classList.add("sidebar-active"),this.$store.state.common.togglerightside=!0}}},m=y,d=l(55),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"color-picker"},[l("h5",[t._v("Choose color")]),t._v(" "),l("ul",{staticClass:"colors"},[l("li",{staticClass:"color",class:"style"==t.activecolor?"active":"",attrs:{"data-attr":"style"},on:{click:function(e){return t.activeColor("style")}}}),t._v(" "),l("li",{staticClass:"color1",class:"style1"==t.activecolor?"active":"",attrs:{"data-attr":"style1"},on:{click:function(e){return t.activeColor("style1")}}}),t._v(" "),l("li",{staticClass:"color2",class:"style2"==t.activecolor?"active":"",attrs:{"data-attr":"style2"},on:{click:function(e){return t.activeColor("style2")}}}),t._v(" "),l("li",{staticClass:"color3",class:"style3"==t.activecolor?"active":"",attrs:{"data-attr":"style3"},on:{click:function(e){return t.activeColor("style3")}}}),t._v(" "),l("li",{staticClass:"color4",class:"style4"==t.activecolor?"active":"",attrs:{"data-attr":"style4"},on:{click:function(e){return t.activeColor("style4")}}}),t._v(" "),l("li",{staticClass:"color5",class:"style5"==t.activecolor?"active":"",attrs:{"data-attr":"style5"},on:{click:function(e){return t.activeColor("style5")}}}),t._v(" "),l("li",{staticClass:"color6",class:"style6"==t.activecolor?"active":"",attrs:{"data-attr":"style6"},on:{click:function(e){return t.activeColor("style6")}}})])])}),[],!1,null,null,null);e.default=component.exports}}]);