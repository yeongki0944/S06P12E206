(window.webpackJsonp=window.webpackJsonp||[]).push([[98,100],{418:function(t,e,r){"use strict";r.r(e);var c={data:function(){return{show:!1}}},l=r(60),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"msg-dropdown-main"},[r("div",{staticClass:"msg-setting"},[r("i",{staticClass:"ti-more-alt",on:{click:function(e){t.show=!t.show}}})]),t._v(" "),r("div",{staticClass:"msg-dropdown",style:t.show?"display:block;":"display:none"},[t._m(0)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"javascript:void(0)"}},[r("i",{staticClass:"fa fa-share"}),t._v("forward")])]),t._v(" "),r("li",[r("a",{attrs:{href:"javascript:void(0)"}},[r("i",{staticClass:"fa fa-clone"}),t._v("copy")])]),t._v(" "),r("li",[r("a",{attrs:{href:"javascript:void(0)"}},[r("i",{staticClass:"fa fa-star-o"}),t._v("rating")])]),t._v(" "),r("li",[r("a",{attrs:{href:"javascript:void(0)"}},[r("i",{staticClass:"ti-trash"}),t._v("delete")])])])}],!1,null,null,null);e.default=component.exports},540:function(t,e,r){"use strict";r.r(e);var c=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"details"},[r("h5",[t._v("Document.xlsx")]),t._v(" "),r("h6",[t._v("25mb Seprate file")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"media-body"},[r("div",{staticClass:"contact-name"},[r("h5",[t._v("Josephin water")]),t._v(" "),r("ul",{staticClass:"msg-box"},[r("li",[r("h5",[r("div",{staticClass:"type"},[r("div",{staticClass:"typing-loader"})])])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"contact-chat"},[r("div",{staticClass:"rightchat animat-rate"},[r("div",{staticClass:"bg_circle"},[r("div"),t._v(" "),r("div"),t._v(" "),r("div"),t._v(" "),r("div"),t._v(" "),r("div"),t._v(" "),r("div"),t._v(" "),r("div"),t._v(" "),r("div"),t._v(" "),r("div"),t._v(" "),r("div"),t._v(" "),r("div")]),t._v(" "),r("div",{staticClass:"cross"}),t._v(" "),r("div",{staticClass:"cross1"}),t._v(" "),r("div",{staticClass:"cross2"}),t._v(" "),r("div",{staticClass:"dot"}),t._v(" "),r("div",{staticClass:"dot1"})])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"call-list-center"},[c("img",{attrs:{src:r(468),alt:""}}),t._v(" "),c("div",{staticClass:"animated-bg"},[c("i"),c("i"),c("i")]),t._v(" "),c("p",[t._v("Select a chat to read messages")])])}],l=(r(5),r(4),r(2),r(1),r(6),r(3),r(7),r(0)),n=r(61);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d={components:{DropDown:r(418).default},data:function(){return{currentchat:[],showchatuser:!1,refresh:!1,styleObject:{"background-size":"cover","background-position":"center",display:"block"}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.c)({groupchatuser:function(t){return t.groupchat.groupchatuser},typing:function(t){return t.groupchat.typing},currentChat:function(){return this.currentchat=this.$store.getters["groupchat/currentChat"]}})),methods:{getImgUrl:function(path){return r(371)("./"+path)},togglechatuser:function(){this.showchatuser=!this.showchatuser}}},v=d,_=r(60),component=Object(_.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"contact-chat"},[r("ul",{staticClass:"chatappend"},[0==t.currentChat.chat.id?r("li",{staticClass:"groupuser"},[r("h4",[t._v("Jewellery project")]),t._v(" "),r("div",{staticClass:"gr-chat-friend-toggle"},[r("a",{staticClass:"icon-btn btn-sm pull-right add-grbtn outside",attrs:{href:"javascript:void(0)","data-tippy-content":"Add User"},on:{click:function(e){return t.togglechatuser()}}},[r("feather",{attrs:{type:"plus",size:"15",height:"15"}})],1),t._v(" "),r("div",{staticClass:"gr-chat-frind-content",style:t.showchatuser?"display:block":"display:none;"},[r("ul",{staticClass:"chat-main"},t._l(t.groupchatuser,(function(e,c){return r("li",{key:e.id},[r("div",{staticClass:"chat-box"},[r("div",{staticClass:"media"},[r("div",{staticClass:"profile",class:e.profile,style:[{"background-image":"url("+t.getImgUrl(e.img)+")"},t.styleObject]}),t._v(" "),r("div",{staticClass:"details"},[r("h5",[t._v(t._s(e.name))]),t._v(" "),r("h6",[t._v(t._s(e.place))])]),t._v(" "),r("div",{staticClass:"media-body"},[r("a",{staticClass:"icon-btn btn-outline-primary btn-sm",attrs:{href:"javascript:void(0)","data-tippy-content":"Add User"},on:{click:function(e){t.showchatuser=!1}}},[r("i",{staticClass:"fa fa-plus"})])])])])])})),0)])]),t._v(" "),r("div",{staticClass:"gr-profile dot-btn dot-success grow",style:[{"background-image":"url("+t.getImgUrl("avtar/3.jpg")+")"},t.styleObject]}),t._v(" "),r("div",{staticClass:"gr-profile dot-btn dot-success grow",style:[{"background-image":"url("+t.getImgUrl("avtar/5.jpg")+")"},t.styleObject]})]):t._e(),t._v(" "),t._l(t.currentChat.chat.messages,(function(e,c){return t.currentChat.chat.messages.length?r("li",{key:c,class:0==e.sender?"replies":"sent"},[r("div",{staticClass:"media"},[r("div",{staticClass:"profile mr-4",style:0==e.sender?[{"background-image":"url("+t.getImgUrl("contact/2.jpg")+")"},t.styleObject]:[{"background-image":"url("+t.getImgUrl(e.img)+")"},t.styleObject]}),t._v(" "),r("div",{staticClass:"media-body"},[r("div",{staticClass:"contact-name"},[r("h5",[t._v(t._s(0==e.sender?"Alan josheph":e.name?e.name:"Josephin water"))]),t._v(" "),r("h6",[t._v(t._s(e.time))]),t._v(" "),0!=t.currentChat.chat.id||e.stickerpath?t._e():r("ul",{staticClass:"msg-box"},[r("li",{staticClass:"msg-setting-main"},[0!=e.sender||e.lastmsg?t._e():r("DropDown"),t._v(" "),r("h5",[t._v(t._s(e.text)),e.path?r("a",{staticClass:"ml-1",attrs:{href:e.path,target:"_blank"}},[t._v("here.")]):t._e()]),t._v(" "),1==e.sender?r("DropDown"):t._e(),t._v(" "),0==e.sender&&e.lastmsg?r("DropDown"):t._e()],1),t._v(" "),e.lastmsg?t._e():r("li",{staticClass:"msg-setting-main"},[e.text2?r("h5",[t._v(t._s(e.text2)+" ")]):t._e(),t._v(" "),e.document?r("div",{staticClass:"document"},[r("i",{staticClass:"fa fa-file-excel-o font-primary"}),t._v(" "),t._m(0,!0),t._v(" "),r("div",{staticClass:"icon-btns"},[r("a",{staticClass:"icon-btn btn-outline-light",attrs:{":href":e.document,download:e.document,target:"_blank"}},[r("feather",{attrs:{type:"download",size:"15",height:"15"}})],1)])]):t._e(),t._v(" "),e.read?r("div",{staticClass:"badge sm ml-2",class:e.document?"badge-dark":"badge-success"},[t._v(" "+t._s(e.read))]):t._e(),t._v(" "),e.gallery1?r("ul",{staticClass:"auto-gallery"},[r("li",{style:[{"background-image":"url("+t.getImgUrl(e.gallery1)+")"},t.styleObject]}),t._v(" "),r("li",{style:[{"background-image":"url("+t.getImgUrl(e.gallery2)+")"},t.styleObject]}),t._v(" "),r("li",{style:[{"background-image":"url("+t.getImgUrl(e.gallery3)+")"},t.styleObject]})]):t._e(),t._v(" "),e.gallery1?r("div",{staticClass:"refresh-block"},[r("div",{staticClass:"badge badge-outline-primary refresh sm ml-2",class:t.refresh?"refreshed":""},[r("feather",{attrs:{type:"rotate-cw"},on:{click:function(e){t.refresh=!t.refresh}}})],1),t._v(" "),r("div",{staticClass:"badge badge-danger sm ml-2"},[t._v("F")])]):t._e(),t._v(" "),r("DropDown")],1)]),t._v(" "),0!==t.currentChat.chat.id?r("ul",{staticClass:"msg-box"},[0==e.sender?r("li",{staticClass:"msg-setting-main"},[e.text?r("h5",[t._v(t._s(e.text)+" ")]):t._e(),t._v(" "),r("DropDown")],1):t._e(),t._v(" "),1==e.sender&&e.lastmsg?r("li",{staticClass:"msg-setting-main"},[e.text?r("h5",[t._v(t._s(e.text))]):t._e(),t._v(" "),r("div",{staticClass:"badge badge-success sm ml-2"},[t._v(" R")]),t._v(" "),r("DropDown")],1):t._e()]):t._e(),t._v(" "),e.stickerpath?r("ul",{staticClass:"msg-box"},[r("li",{staticClass:"msg-setting-main"},[r("h5",[r("img",{attrs:{src:t.getImgUrl(e.stickerpath),alt:""}})])])]):t._e()])])])]):t._e()})),t._v(" "),r("li",{class:t.typing?"sent last typing-":"sent",style:t.typing?"display: block":"display: none"},[r("div",{staticClass:"media"},[r("div",{staticClass:"profile mr-4",style:[{"background-image":"url("+t.getImgUrl("contact/1.jpg")+")"},t.styleObject]}),t._v(" "),t._m(1)])]),t._v(" "),t.currentChat.chat.messages.length?t._e():r("div",[t._m(2),t._v(" "),t._m(3)])],2)])}),c,!1,null,null,null);e.default=component.exports}}]);