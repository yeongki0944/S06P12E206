(window.webpackJsonp=window.webpackJsonp||[]).push([[148,58,59],{324:function(t,n,e){"use strict";e.r(n);var l=e(55),component=Object(l.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("nuxt-link",{staticClass:"navbar-brand",attrs:{to:"/messenger/messenger"}},[n("div",{staticClass:"logo-block"},[n("img",{staticClass:"img-fluid",attrs:{src:e(321),alt:"logo"}})])])}),[],!1,null,null,null);n.default=component.exports},325:function(t,n,e){"use strict";e.r(n);var l=e(55),component=Object(l.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"header-right-margin"},[e("client-only",[e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[e("nuxt-link",{attrs:{to:"/messenger/messenger"}},[t._v("Messenger")])],1),t._v(" "),e("b-dropdown",{attrs:{id:"dropdown-1",text:"Blog"}},[e("b-dropdown-item",{staticClass:"nav-link"},[e("nuxt-link",{attrs:{to:"/blogs/blog_right-sidebar"}},[t._v("Blog Right sidebar")])],1),t._v(" "),e("b-dropdown-item",{staticClass:"nav-link"},[e("nuxt-link",{attrs:{to:"/blogs/blog_left-sidebar"}},[t._v("Blog Left sidebar")])],1),t._v(" "),e("b-dropdown-item",{staticClass:"nav-link"},[e("nuxt-link",{attrs:{to:"/blogs/blog_details"}},[t._v("Blog Details")])],1),t._v(" "),e("b-dropdown-item",{staticClass:"nav-link"},[e("nuxt-link",{attrs:{to:"/blogs/blog_no-sidebar"}},[t._v("Blog No sidebar")])],1)],1),t._v(" "),e("b-dropdown",{attrs:{id:"dropdown-3",text:"Authentication"}},[e("b-dropdown-item",{staticClass:"nav-link"},[e("nuxt-link",{attrs:{to:"/authentication/login"}},[t._v("Signin")])],1),t._v(" "),e("b-dropdown-item",{staticClass:"nav-link"},[e("nuxt-link",{attrs:{to:"/authentication/login-2"}},[t._v("Signin Classic")])],1),t._v(" "),e("b-dropdown-item",{staticClass:"nav-link"},[e("nuxt-link",{attrs:{to:"/authentication/signup"}},[t._v("Signup")])],1),t._v(" "),e("b-dropdown-item",{staticClass:"nav-link"},[e("nuxt-link",{attrs:{to:"/authentication/signup-2"}},[t._v("Signup Classic")])],1)],1),t._v(" "),e("b-dropdown",{attrs:{id:"dropdown-4",text:"Bouns page"}},[e("b-dropdown-item",{staticClass:"nav-link"},[e("nuxt-link",{attrs:{to:"/bonus/about"}},[t._v("About")])],1),t._v(" "),e("b-dropdown-item",{staticClass:"nav-link"},[e("nuxt-link",{attrs:{to:"/bonus/faq"}},[t._v("FAQ")])],1),t._v(" "),e("b-dropdown-item",{staticClass:"nav-link"},[e("nuxt-link",{attrs:{to:"/bonus/elements"}},[t._v("Elements")])],1),t._v(" "),e("b-dropdown-item",{staticClass:"nav-link"},[e("nuxt-link",{attrs:{to:"/bonus/price"}},[t._v("Price")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports},327:function(t,n,e){"use strict";e.r(n);var l=e(324),o=e(325),r={components:{Logo:l.default,Navbar:o.default},data:function(){return{windowTop:0,fixedheader:!1}},mounted:function(){window.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(t){this.windowTop=t.target.documentElement.scrollTop,this.windowTop>=60?this.fixedheader=!0:this.fixedheader=!1}}},c=e(55),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",{attrs:{id:"home"}},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"landing-header",class:t.fixedheader?"fixed":""},[e("div",{staticClass:"main-menu"},[e("div",[e("b-navbar",{staticClass:"navbar navbar-light",attrs:{toggleable:"xl"}},[e("Logo"),t._v(" "),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),e("Navbar")],1)],1)])])])])])])}),[],!1,null,null,null);n.default=component.exports},330:function(t,n,e){"use strict";e.r(n);var l={name:"TapTop",data:function(){return{display:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{executeScroll:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},handleScroll:function(){window.scrollY>600?this.display=!0:this.display=!1}}},o=e(55),component=Object(o.a)(l,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"tap-top",style:t.display?"display:block":"display:none",on:{click:function(n){return t.executeScroll()}}},[t._m(0)])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("i",{staticClass:"fa fa-angle-double-up"})])}],!1,null,null,null);n.default=component.exports},331:function(t,n,e){"use strict";e.r(n);var l=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"footer-title footer-mobile-title"},[e("h3",[t._v("About")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",{staticClass:"social-group"},[e("li",[e("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"https://www.facebook.com/"}},[e("i",{staticClass:"fa fa-facebook"})])]),t._v(" "),e("li",[e("a",{staticClass:"icon-btn btn-twiter button-effect btn-sm",attrs:{href:"https://twitter.com/"}},[e("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),e("li",[e("a",{staticClass:"icon-btn btn-linkedin button-effect btn-sm",attrs:{href:"https://www.linkedin.com/"}},[e("i",{staticClass:"fa fa-linkedin"})])]),t._v(" "),e("li",[e("a",{staticClass:"icon-btn btn-instagram button-effect btn-sm",attrs:{href:"https://www.instagram.com/"}},[e("i",{staticClass:"fa fa-instagram"})])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"footer-title"},[e("h3",[t._v("Useful Links")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"footer-title"},[e("h3",[t._v("Blog Links")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"footer-title"},[e("h3",[t._v("Authentication")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"col-lg-3 col-md-4"},[e("div",{staticClass:"downlaod"},[e("div",[e("div",{staticClass:"footer-title"},[e("h3",[t._v("Download Apps")])]),t._v(" "),e("div",{staticClass:"footer-contant"},[e("div",{staticClass:"footer-btn"},[e("a",{staticClass:"btn active",attrs:{href:"https://www.apple.com/in/itunes/"}},[e("i",{staticClass:"fa fa-apple"}),t._v(" "),e("div",[e("h6",[t._v("Available on the")]),t._v(" "),e("h4",[t._v("App store")])])]),e("a",{staticClass:"btn",attrs:{href:"https://play.google.com/store"}},[e("i",{staticClass:"fa fa-play"}),t._v(" "),e("div",[e("h6",[t._v("Available on the")]),t._v(" "),e("h4",[t._v("Google play")])])])])])])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"footer-back-block"},[n("img",{staticClass:"img-fluid inner1",attrs:{src:e(320),alt:"footer-back-img"}}),n("img",{staticClass:"img-fluid inner2",attrs:{src:e(320),alt:"footer-back-img"}})])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container copyright-footer"},[e("div",{staticClass:"row copyright"},[e("div",{staticClass:"col-md-6 col-sm-12"},[e("p",{staticClass:"footer-left"},[t._v("© 2021 Chitchat. All Rights Reserved")])]),t._v(" "),e("div",{staticClass:"col-md-6 col-sm-12 links_horizontal"},[e("p",{staticClass:"text-right"},[t._v("\n          Made with "),e("span",[t._v("♥ ")]),t._v("By Theme Pixelstrap\n        ")])])])])}],o=e(55),component=Object(o.a)({},(function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("footer",[l("div",{staticClass:"container footer-main"},[l("div",{staticClass:"row footer-block"},[l("div",{staticClass:"col-lg-3 col-md-6"},[t._m(0),t._v(" "),l("div",{staticClass:"about-payment footer-contant"},[l("div",{staticClass:"logo"},[l("nuxt-link",{attrs:{to:"/messenger/messenger"}},[l("img",{attrs:{src:e(321),alt:"logo"}})])],1),t._v(" "),l("p",[t._v("\n            Contrary to popular belief, Lorem Ipsum is not simply random text.\n            It has roots in a piece Lorem fugit on looked ipsum.\n          ")]),t._v(" "),t._m(1)])]),t._v(" "),l("div",{staticClass:"col-lg-2 col-md-3"},[l("div",{staticClass:"links"},[t._m(2),t._v(" "),l("div",{staticClass:"footer-contant"},[l("ul",[l("li",[l("nuxt-link",{attrs:{to:"/messenger/messenger"}},[t._v("Home")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/bonus/about"}},[t._v("About us")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/bonus/faq"}},[t._v("FAQ")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/bonus/elements"}},[t._v("Elements")])],1)])])])]),t._v(" "),l("div",{staticClass:"col-lg-2 col-md-3"},[l("div",{staticClass:"links"},[t._m(3),t._v(" "),l("div",{staticClass:"footer-contant"},[l("ul",[l("li",[l("nuxt-link",{attrs:{to:"/blogs/blog_no-sidebar"}},[t._v("No sidebar")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blogs/blog_left-sidebar"}},[t._v("Left sidebar")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blogs/blog_right-sidebar"}},[t._v("Right sidebar")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blogs/blog_details"}},[t._v("Details page")])],1)])])])]),t._v(" "),l("div",{staticClass:"col-lg-2 col-md-4"},[l("div",{staticClass:"links"},[t._m(4),t._v(" "),l("div",{staticClass:"footer-contant"},[l("ul",[l("li",[l("nuxt-link",{attrs:{to:"/authentication/login"}},[t._v("Signin")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/authentication/login-2"}},[t._v("Signin classic")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/authentication/signup"}},[t._v("Signup")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/authentication/signup-2"}},[t._v("Signup classic")])],1)])])])]),t._v(" "),t._m(5)])]),t._v(" "),t._m(6),t._v(" "),t._m(7)])}),l,!1,null,null,null);n.default=component.exports},678:function(t,n,e){"use strict";e.r(n);var header=e(327),l=e(168),o=e(666),footer=e(331),r=e(330),c={components:{Header:header.default,Breadcrumbs:l.default,Elements:o.default,Footer:footer.default,TapTop:r.default}},v=e(55),component=Object(v.a)(c,(function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("div",[l("client-only",[l("div",{staticClass:"inner-page"},[l("Header"),t._v(" "),l("Breadcrumbs",{attrs:{main:"Home",title:"Elements"}})],1),t._v(" "),l("ul",{staticClass:"page-decore"},[l("li",{staticClass:"top"},[l("img",{staticClass:"img-fluid inner2",attrs:{src:e(320),alt:"footer-back-img"}})]),t._v(" "),l("li",{staticClass:"bottom"},[l("img",{staticClass:"img-fluid inner2",attrs:{src:e(320),alt:"footer-back-img"}})])]),t._v(" "),l("Elements"),t._v(" "),l("Footer"),t._v(" "),l("TapTop")],1)],1)}),[],!1,null,null,null);n.default=component.exports}}]);