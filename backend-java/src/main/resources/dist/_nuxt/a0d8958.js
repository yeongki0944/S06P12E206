(window.webpackJsonp=window.webpackJsonp||[]).push([[159,61,62,63,64,65,143,144],{324:function(t,e,n){t.exports=n.p+"img/2.a54c787.png"},325:function(t,e,n){t.exports=n.p+"img/landing-logo.a81471c.png"},328:function(t,e,n){"use strict";n.r(e);var l=n(55),component=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("nuxt-link",{staticClass:"navbar-brand",attrs:{to:"/messenger/messenger"}},[e("div",{staticClass:"logo-block"},[e("img",{staticClass:"img-fluid",attrs:{src:n(325),alt:"logo"}})])])}),[],!1,null,null,null);e.default=component.exports},329:function(t,e,n){"use strict";n.r(e);var l=n(55),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-right-margin"},[n("client-only",[n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[n("nuxt-link",{attrs:{to:"/messenger/messenger"}},[t._v("Messenger")])],1),t._v(" "),n("b-dropdown",{attrs:{id:"dropdown-4",text:"Bouns page"}},[n("b-dropdown-item",{staticClass:"nav-link"},[n("nuxt-link",{attrs:{to:"/bonus/about"}},[t._v("프로젝트 소개")])],1),t._v(" "),n("b-dropdown-item",{staticClass:"nav-link"},[n("nuxt-link",{attrs:{to:"/bonus/faq"}},[t._v("자주 묻는 질문")])],1),t._v(" "),n("b-dropdown-item",{staticClass:"nav-link"},[n("nuxt-link",{attrs:{to:"/bonus/elements"}},[t._v("Elements")])],1)],1),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[n("nuxt-link",{attrs:{to:"/authentication/login"}},[t._v("로그인")])],1),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[n("nuxt-link",{attrs:{to:"/authentication/signup"}},[t._v("회원가입")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},331:function(t,e,n){"use strict";n.r(e);var l=n(328),o=n(329),r={components:{Logo:l.default,Navbar:o.default},data:function(){return{windowTop:0,fixedheader:!1}},mounted:function(){window.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(t){this.windowTop=t.target.documentElement.scrollTop,this.windowTop>=60?this.fixedheader=!0:this.fixedheader=!1}}},c=n(55),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{attrs:{id:"home"}},[n("div",{staticClass:"custom-container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"landing-header fixed"},[n("div",{staticClass:"main-menu"},[n("div",[n("b-navbar",{staticClass:"navbar navbar-light",attrs:{toggleable:"xl"}},[n("Logo"),t._v(" "),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),n("Navbar")],1)],1)])])])])])])}),[],!1,null,null,null);e.default=component.exports},334:function(t,e,n){"use strict";n.r(e);var l={name:"TapTop",data:function(){return{display:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{executeScroll:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},handleScroll:function(){window.scrollY>600?this.display=!0:this.display=!1}}},o=n(55),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"tap-top",style:t.display?"display:block":"display:none",on:{click:function(e){return t.executeScroll()}}},[t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("i",{staticClass:"fa fa-angle-double-up"})])}],!1,null,null,null);e.default=component.exports},335:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-title footer-mobile-title"},[n("h3",[t._v("About")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"social-group"},[n("li",[n("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"https://www.facebook.com/"}},[n("i",{staticClass:"fa fa-facebook"})])]),t._v(" "),n("li",[n("a",{staticClass:"icon-btn btn-twiter button-effect btn-sm",attrs:{href:"https://twitter.com/"}},[n("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),n("li",[n("a",{staticClass:"icon-btn btn-linkedin button-effect btn-sm",attrs:{href:"https://www.linkedin.com/"}},[n("i",{staticClass:"fa fa-linkedin"})])]),t._v(" "),n("li",[n("a",{staticClass:"icon-btn btn-instagram button-effect btn-sm",attrs:{href:"https://www.instagram.com/"}},[n("i",{staticClass:"fa fa-instagram"})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-title"},[n("h3",[t._v("Useful Links")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-title"},[n("h3",[t._v("Blog Links")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-title"},[n("h3",[t._v("Authentication")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-3 col-md-4"},[n("div",{staticClass:"downlaod"},[n("div",[n("div",{staticClass:"footer-title"},[n("h3",[t._v("Download Apps")])]),t._v(" "),n("div",{staticClass:"footer-contant"},[n("div",{staticClass:"footer-btn"},[n("a",{staticClass:"btn active",attrs:{href:"https://www.apple.com/in/itunes/"}},[n("i",{staticClass:"fa fa-apple"}),t._v(" "),n("div",[n("h6",[t._v("Available on the")]),t._v(" "),n("h4",[t._v("App store")])])]),n("a",{staticClass:"btn",attrs:{href:"https://play.google.com/store"}},[n("i",{staticClass:"fa fa-play"}),t._v(" "),n("div",[n("h6",[t._v("Available on the")]),t._v(" "),n("h4",[t._v("Google play")])])])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer-back-block"},[e("img",{staticClass:"img-fluid inner1",attrs:{src:n(324),alt:"footer-back-img"}}),e("img",{staticClass:"img-fluid inner2",attrs:{src:n(324),alt:"footer-back-img"}})])}],o=n(55),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("footer",[l("div",{staticClass:"container footer-main"},[l("div",{staticClass:"row footer-block"},[l("div",{staticClass:"col-lg-3 col-md-6"},[t._m(0),t._v(" "),l("div",{staticClass:"about-payment footer-contant"},[l("div",{staticClass:"logo"},[l("nuxt-link",{attrs:{to:"/messenger/messenger"}},[l("img",{attrs:{src:n(325),alt:"logo"}})])],1),t._v(" "),l("p",[t._v("\n            Contrary to popular belief, Lorem Ipsum is not simply random text.\n            It has roots in a piece Lorem fugit on looked ipsum.\n          ")]),t._v(" "),t._m(1)])]),t._v(" "),l("div",{staticClass:"col-lg-2 col-md-3"},[l("div",{staticClass:"links"},[t._m(2),t._v(" "),l("div",{staticClass:"footer-contant"},[l("ul",[l("li",[l("nuxt-link",{attrs:{to:"/messenger/messenger"}},[t._v("Home")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/bonus/about"}},[t._v("About us")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/bonus/faq"}},[t._v("FAQ")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/bonus/elements"}},[t._v("Elements")])],1)])])])]),t._v(" "),l("div",{staticClass:"col-lg-2 col-md-3"},[l("div",{staticClass:"links"},[t._m(3),t._v(" "),l("div",{staticClass:"footer-contant"},[l("ul",[l("li",[l("nuxt-link",{attrs:{to:"/blogs/blog_no-sidebar"}},[t._v("No sidebar")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blogs/blog_left-sidebar"}},[t._v("Left sidebar")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blogs/blog_right-sidebar"}},[t._v("Right sidebar")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/blogs/blog_details"}},[t._v("Details page")])],1)])])])]),t._v(" "),l("div",{staticClass:"col-lg-2 col-md-4"},[l("div",{staticClass:"links"},[t._m(4),t._v(" "),l("div",{staticClass:"footer-contant"},[l("ul",[l("li",[l("nuxt-link",{attrs:{to:"/authentication/login"}},[t._v("Signin")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/authentication/login-2"}},[t._v("Signin classic")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/authentication/signup"}},[t._v("Signup")])],1),t._v(" "),l("li",[l("nuxt-link",{attrs:{to:"/authentication/signup-2"}},[t._v("Signup classic")])],1)])])])]),t._v(" "),t._m(5)])]),t._v(" "),t._m(6),t._v(" "),l("div",{staticClass:"container copyright-footer"})])}),l,!1,null,null,null);e.default=component.exports},481:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ul",{staticClass:"page-decore"},[l("li",{staticClass:"top"},[l("img",{staticClass:"img-fluid inner2",attrs:{src:n(324),alt:"footer-back-img"}})]),t._v(" "),l("li",{staticClass:"bottom"},[l("img",{staticClass:"img-fluid inner2",attrs:{src:n(324),alt:"footer-back-img"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h4",[t._v("\n            The Page You Are Attempting To Reach Is Not Available. "),n("br"),t._v("This\n            May Be Because The Page Does Not Exist Or Has Been Moved.\n          ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"animated-bg"},[e("i"),e("i"),e("i")])}],o=n(55),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"error-main"},[t._m(0),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"error-contain"},[n("h1",[t._v("404")]),t._v(" "),n("h2",[t._v("Page Not Found")]),t._v(" "),t._m(1),t._v(" "),n("nuxt-link",{attrs:{to:"/"}},[n("a",{staticClass:"btn btn-primary"},[t._v("back to home")])]),t._v(" "),t._m(2)],1)])])])])}),l,!1,null,null,null);e.default=component.exports},533:function(t,e,n){"use strict";n.r(e);var header=n(331),l=n(170),o=n(481),footer=n(335),r=n(334),c={components:{Header:header.default,Breadcrumbs:l.default,Errorpage:o.default,Footer:footer.default,TapTop:r.default}},v=n(55),component=Object(v.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("client-only",[n("div",[n("div",{staticClass:"inner-page"},[n("Header"),t._v(" "),n("Breadcrumbs",{attrs:{main:"Home",title:"404"}})],1),t._v(" "),n("Errorpage"),t._v(" "),n("Footer"),t._v(" "),n("TapTop")],1)])}),[],!1,null,null,null);e.default=component.exports},765:function(t,e,n){"use strict";n.r(e);var l={components:{PageNotFound:n(533).default}},o=n(55),component=Object(o.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("PageNotFound")}),[],!1,null,null,null);e.default=component.exports}}]);