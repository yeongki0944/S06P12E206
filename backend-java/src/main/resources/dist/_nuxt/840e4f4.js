(window.webpackJsonp=window.webpackJsonp||[]).push([[152,107,154,155,158],{473:function(t,e,l){"use strict";l.r(e);var r={data:function(){return{opendoc:!0}},methods:{toggledoc:function(){this.opendoc=!this.opendoc}}},c=l(60),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"document"},[l("div",{staticClass:"filter-block"},[l("div",{staticClass:"collapse-block",class:{open:t.opendoc}},[l("h5",{staticClass:"block-title",on:{click:function(e){return t.toggledoc()}}},[t._v("\n        Shared Document\n        "),l("label",{staticClass:"badge badge-success sm ml-2"},[t._v("3")])]),t._v(" "),l("div",{staticClass:"block-content",style:t.opendoc?"display: ;":"display: none;"},[t._m(0)])])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ul",{staticClass:"document-list"},[l("li",[l("i",{staticClass:"ti-folder font-danger"}),t._v(" "),l("h5",[t._v("Simple_practice_project-zip")])]),t._v(" "),l("li",[l("i",{staticClass:"ti-write font-success"}),t._v(" "),l("h5",[t._v("Word_Map-jpg")])]),t._v(" "),l("li",[l("i",{staticClass:"ti-zip font-primary"}),t._v(" "),l("h5",[t._v("Latest_Design_portfolio.pdf")])])])}],!1,null,null,null);e.default=component.exports},608:function(t,e,l){"use strict";l.r(e);l(5),l(4),l(2),l(1),l(6),l(3),l(7);var r=l(0),c=l(61);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}var n={data:function(){return{currentchat:[],styleObject:{"background-size":"cover","background-position":"center",display:"block"}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({currentChat:function(){return this.currentchat=this.$store.getters["chat/currentChat"]}})),methods:{getImgUrl:function(path){return l(369)("./"+path)},close:function(){document.querySelector(".app-sidebar").classList.add("active"),document.body.classList.remove("menu-active"),document.body.classList.add("sidebar-active"),this.$store.state.common.togglerightside=!0}}},d=n,v=l(60),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"contact-profile"},[l("div",{staticClass:"theme-title"},[l("div",{staticClass:"media"},[t._m(0),t._v(" "),l("div",{staticClass:"media-body text-right"},[l("a",{staticClass:"icon-btn btn-outline-light btn-sm close-profile ml-3",attrs:{href:"javascript:void(0)"}},[l("feather",{attrs:{type:"x",size:"15",height:"15"},on:{click:function(e){return t.close()}}})],1)])])]),t._v(" "),l("div",{staticClass:"details"},[l("div",{staticClass:"contact-top",style:[{"background-image":"url("+this.getImgUrl(t.currentChat.img)+")"},t.styleObject]}),t._v(" "),l("div",{staticClass:"name"},[l("h3",[t._v(t._s(t.currentChat.name))]),t._v(" "),l("h6",[t._v("Add Description")])]),t._v(" "),t._m(1)])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("h2",[t._v("Profile")]),t._v(" "),l("h4",[t._v("Personal Information")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ul",{staticClass:"medialogo"},[l("li",[l("a",{staticClass:"icon-btn btn-danger button-effect",attrs:{href:"https://www.google.com/"}},[l("i",{staticClass:"fa fa-google"})])]),t._v(" "),l("li",[l("a",{staticClass:"icon-btn btn-primary button-effect",attrs:{href:"https://twitter.com/"}},[l("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),l("li",[l("a",{staticClass:"icon-btn btn-facebook button-effect",attrs:{href:"https://www.facebook.com/"}},[l("i",{staticClass:"fa fa-facebook-f"})])])])}],!1,null,null,null);e.default=component.exports},609:function(t,e,l){"use strict";l.r(e);var r={data:function(){return{opendoc:!0,media:[{src:l(407)},{src:l(392)},{src:l(393)},{src:l(394)},{src:l(408)},{src:l(392)},{src:l(393)},{src:l(394)}]}},methods:{openGallery:function(t){this.$refs.lightbox.showImage(t)},toggledoc:function(){this.opendoc=!this.opendoc}}},c=l(60),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"media-gallery portfolio-section grid-portfolio"},[r("div",{staticClass:"collapse-block"},[r("h5",{staticClass:"block-title",on:{click:function(e){return t.toggledoc()}}},[t._v("\n      Shared Media\n      "),r("label",{staticClass:"badge badge-primary sm ml-2"},[t._v("2")])]),t._v(" "),r("div",{staticClass:"block-content",style:t.opendoc?"display:block":"display:none"},[r("div",{staticClass:"row share-media zoom-gallery"},[t._m(0),t._v(" "),r("div",{staticClass:"col-4 isotopeSelector filter"},[r("div",{staticClass:"media-big"},[r("div",{staticClass:"overlay"},[r("div",{staticClass:"border-portfolio"},[r("a",{on:{click:function(e){return t.openGallery(0)}}},[t._m(1),t._v(" "),r("img",{staticClass:"img-fluid bg-img",attrs:{src:l(407),alt:"portfolio-image"}})])])])])]),t._v(" "),r("div",{staticClass:"col-4"},[r("div",{staticClass:"media-small isotopeSelector filter"},[r("div",{staticClass:"overlay"},[r("div",{staticClass:"border-portfolio"},[r("a",{on:{click:function(e){return t.openGallery(1)}}},[t._m(2),t._v(" "),r("img",{staticClass:"img-fluid bg-img",attrs:{src:l(392),alt:"portfolio-image"}})])])])]),t._v(" "),r("div",{staticClass:"media-small isotopeSelector filter"},[r("div",{staticClass:"overlay"},[r("div",{staticClass:"border-portfolio"},[r("a",{on:{click:function(e){return t.openGallery(2)}}},[t._m(3),t._v(" "),r("img",{staticClass:"img-fluid bg-img",attrs:{src:l(393),alt:"portfolio-image"}})])])])])]),t._v(" "),r("div",{staticClass:"col-4"},[r("div",{staticClass:"media-small isotopeSelector filter"},[r("div",{staticClass:"overlay"},[r("div",{staticClass:"border-portfolio"},[r("a",{on:{click:function(e){return t.openGallery(3)}}},[t._m(4),t._v(" "),r("img",{staticClass:"img-fluid bg-img",attrs:{src:l(394),alt:"portfolio-image"}})])])])]),t._v(" "),r("div",{staticClass:"media-small isotopeSelector filter fashion"},[r("div",{staticClass:"overlay"},[r("div",{staticClass:"border-portfolio"},[r("a",{on:{click:function(e){return t.openGallery(4)}}},[t._m(5),t._v(" "),r("img",{staticClass:"img-fluid bg-img",attrs:{src:l(408),alt:"portfolio-image"}})])])])])]),t._v(" "),t._m(6),t._v(" "),r("div",{staticClass:"col-4"},[r("div",{staticClass:"media-small isotopeSelector filter"},[r("div",{staticClass:"overlay"},[r("div",{staticClass:"border-portfolio"},[r("a",{on:{click:function(e){return t.openGallery(5)}}},[t._m(7),t._v(" "),r("img",{staticClass:"img-fluid bg-img",attrs:{src:l(392),alt:"portfolio-image"}})])])])])]),t._v(" "),r("div",{staticClass:"col-4"},[r("div",{staticClass:"media-small isotopeSelector filter"},[r("div",{staticClass:"overlay"},[r("div",{staticClass:"border-portfolio"},[r("a",{on:{click:function(e){return t.openGallery(6)}}},[t._m(8),t._v(" "),r("img",{staticClass:"img-fluid bg-img",attrs:{src:l(393),alt:"portfolio-image"}})])])])])]),t._v(" "),r("div",{staticClass:"col-4"},[r("div",{staticClass:"media-small isotopeSelector filter"},[r("div",{staticClass:"overlay"},[r("div",{staticClass:"border-portfolio"},[r("a",{on:{click:function(e){return t.openGallery(7)}}},[t._m(9),t._v(" "),r("img",{staticClass:"img-fluid bg-img",attrs:{src:l(394),alt:"portfolio-image"}})])])])])])])]),t._v(" "),r("client-only",[r("light-box",{ref:"lightbox",attrs:{media:t.media,showLightBox:!1,showThumbs:!1}})],1)],1)])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-12"},[l("h6",{staticClass:"mb-2"},[t._v("22/03/2019")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"overlay-background"},[e("i",{staticClass:"ti-plus",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"overlay-background"},[e("i",{staticClass:"ti-plus",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"overlay-background"},[e("i",{staticClass:"ti-plus",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"overlay-background"},[e("i",{staticClass:"ti-plus",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"overlay-background"},[e("i",{staticClass:"ti-plus",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-12"},[l("h6",{staticClass:"mb-2 mt-2"},[t._v("20/04/2019")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"overlay-background"},[e("i",{staticClass:"ti-plus",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"overlay-background"},[e("i",{staticClass:"ti-plus",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"overlay-background"},[e("i",{staticClass:"ti-plus",attrs:{"aria-hidden":"true"}})])}],!1,null,null,null);e.default=component.exports},610:function(t,e,l){"use strict";l.r(e);var r={data:function(){return{messages:[{img:l(381),name:"Alan josheph",time:"01:35 AM",msg:"Hi I am Alan,"},{img:l(395),name:"Josephin water",time:"01:35 AM",msg:"Can you help me to find best chat app?."}],opendoc:!0,styleObject:{"background-size":"cover","background-position":"center",display:"block"}}},methods:{toggledoc:function(){this.opendoc=!this.opendoc}}},c=l(60),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"status"},[l("div",{staticClass:"collapse-block",class:{open:t.opendoc}},[l("h5",{staticClass:"block-title",on:{click:function(e){return t.toggledoc()}}},[t._v("\n      Starred Messages\n      "),l("label",{staticClass:"badge badge-outline-dark sm ml-2"},[t._v("2")])]),t._v(" "),l("div",{staticClass:"block-content",style:t.opendoc?"display:block":"display:none"},[l("div",{staticClass:"contact-chat p-0 m-0"},[l("ul",{staticClass:"str-msg"},t._l(t.messages,(function(e,r){return l("li",{key:r},[l("div",{staticClass:"media"},[l("div",{staticClass:"profile mr-4",style:[{"background-image":"url("+e.img+")"},t.styleObject]}),t._v(" "),l("div",{staticClass:"media-body"},[l("div",{staticClass:"contact-name"},[l("h5",[t._v(t._s(e.name))]),t._v(" "),l("h6",[t._v(t._s(e.time))]),t._v(" "),l("ul",{staticClass:"msg-box"},[l("li",[l("h5",[t._v(t._s(e.msg))])])])])])])])})),0)])])])])}),[],!1,null,null,null);e.default=component.exports},611:function(t,e,l){"use strict";l.r(e);var r={data:function(){return{groups:[{img:l(490),groupname:"Tech Ninjas",group:"johan, deo, Sufiya Elija, Pabelo & you"},{img:l(489),groupname:"Family Ties",group:"Mukrani, deo & you"}],opendoc:!0,styleObject:{"background-size":"cover","background-position":"center",display:"block"}}},methods:{toggledoc:function(){this.opendoc=!this.opendoc}}},c=l(60),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"status"},[l("div",{staticClass:"collapse-block",class:{open:t.opendoc}},[l("h5",{staticClass:"block-title",on:{click:function(e){return t.toggledoc()}}},[t._v("\n      Common groups\n      "),l("label",{staticClass:"badge badge-outline-dark sm ml-2"},[t._v("3")])]),t._v(" "),l("div",{staticClass:"block-content",style:t.opendoc?"display:block":"display:none"},[l("ul",{staticClass:"group-main"},t._l(t.groups,(function(e,r){return l("li",{key:r},[l("div",{staticClass:"group-box"},[l("div",{staticClass:"profile",style:[{"background-image":"url("+e.img+")"},t.styleObject]}),t._v(" "),l("div",{staticClass:"details"},[l("h5",[t._v(t._s(e.groupname))]),t._v(" "),l("h6",[t._v(t._s(e.group))])])])])})),0)])])])}),[],!1,null,null,null);e.default=component.exports},620:function(t,e,l){"use strict";l.r(e);var r=l(60),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"status other"},[l("h5",{staticClass:"block-title p-b-25"},[t._v("Contact info")]),t._v(" "),l("ul",[l("li",[l("h5",[l("a",{attrs:{href:"javascript:void(0)"}},[l("feather",{attrs:{type:"smartphone",size:"15",height:"15"}}),t._v("+12\n          3456789587")],1)])]),t._v(" "),l("li",[l("h5",[l("a",{attrs:{href:"https://themeforest.net/user/pixelstrap/portfolio"}},[l("feather",{attrs:{type:"crosshair",size:"15",height:"15"}}),t._v("https://pixelstrap")],1)])]),t._v(" "),l("li",[l("h5",[l("a",{attrs:{href:"javascript:void(0)"}},[l("feather",{attrs:{type:"map-pin",size:"15",height:"15"}}),t._v("1766 Fidler\n          Drive Texas, 78238.")],1)])])])])}),[],!1,null,null,null);e.default=component.exports},621:function(t,e,l){"use strict";l.r(e);var r=l(60),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"status"},[l("ul",[l("li",[l("b-form-checkbox",{staticClass:"js-switch",attrs:{name:"check-button",switch:"",size:"lg"}},[l("h5",[t._v("Block")])])],1),t._v(" "),l("li",[l("b-form-checkbox",{staticClass:"js-switch1",attrs:{name:"check-button",switch:"",size:"lg"}},[l("h5",[t._v("Mute")])])],1),t._v(" "),l("li",[l("b-form-checkbox",{staticClass:"js-switch2",attrs:{name:"check-button",switch:"",size:"lg"}},[l("h5",[t._v("Get Notification")])])],1)])]),t._v(" "),l("div",{staticClass:"status other"},[l("ul",[l("li",[l("h5",[l("a",{attrs:{href:"javascript:void(0)"}},[l("feather",{attrs:{type:"share-2",size:"15",height:"15"}}),t._v("share\n            Contact")],1)])]),t._v(" "),l("li",[l("h5",[l("a",{attrs:{href:"javascript:void(0)"}},[l("feather",{attrs:{type:"trash-2",size:"15",height:"15"}}),t._v("Clear\n            Chat")],1)])]),t._v(" "),l("li",[l("h5",[l("a",{attrs:{href:"javascript:void(0)"}},[l("feather",{attrs:{type:"external-link",size:"15",height:"15"}}),t._v("Export Chat")],1)])]),t._v(" "),l("li",[l("h5",[l("a",{attrs:{href:"javascript:void(0)"}},[l("feather",{attrs:{type:"alert-circle",size:"15",height:"15"}}),t._v("Report Contact\n          ")],1)])])])])])}),[],!1,null,null,null);e.default=component.exports},779:function(t,e,l){"use strict";l.r(e);var r=l(608),c=l(473),o=l(609),n=l(610),d=l(611),v=l(620),f=l(621),h={components:{PersonalInfo:r.default,SharedDoc:c.default,SharedMedia:o.default,StarredMessage:n.default,CommonGroup:d.default,ContactInfo:v.default,Status:f.default}},m=l(60),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("aside",{staticClass:"chitchat-right-sidebar",attrs:{id:"slide-menu"}},[l("div",{staticClass:"custom-scroll right-sidebar"},[l("PersonalInfo"),t._v(" "),l("SharedDoc"),t._v(" "),l("SharedMedia"),t._v(" "),l("StarredMessage"),t._v(" "),l("CommonGroup"),t._v(" "),l("ContactInfo"),t._v(" "),l("Status")],1)])}),[],!1,null,null,null);e.default=component.exports}}]);