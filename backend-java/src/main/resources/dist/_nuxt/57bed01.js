(window.webpackJsonp=window.webpackJsonp||[]).push([[144,17,19,20,21,22,23,24,25,27,55,56,57,58,59],{320:function(t,e,l){t.exports=l.p+"img/2.a54c787.png"},321:function(t,e,l){t.exports=l.p+"img/landing-logo.d9ecd4c.png"},324:function(t,e,l){"use strict";l.r(e);var n=l(55),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("nuxt-link",{staticClass:"navbar-brand",attrs:{to:"/messenger/messenger"}},[e("div",{staticClass:"logo-block"},[e("img",{staticClass:"img-fluid",attrs:{src:l(321),alt:"logo"}})])])}),[],!1,null,null,null);e.default=component.exports},325:function(t,e,l){"use strict";l.r(e);var n=l(55),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"header-right-margin"},[l("client-only",[l("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[l("b-navbar-nav",[l("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[l("nuxt-link",{attrs:{to:"/messenger/messenger"}},[t._v("Messenger")])],1),t._v(" "),l("b-dropdown",{attrs:{id:"dropdown-1",text:"Blog"}},[l("b-dropdown-item",{staticClass:"nav-link"},[l("nuxt-link",{attrs:{to:"/blogs/blog_right-sidebar"}},[t._v("Blog Right sidebar")])],1),t._v(" "),l("b-dropdown-item",{staticClass:"nav-link"},[l("nuxt-link",{attrs:{to:"/blogs/blog_left-sidebar"}},[t._v("Blog Left sidebar")])],1),t._v(" "),l("b-dropdown-item",{staticClass:"nav-link"},[l("nuxt-link",{attrs:{to:"/blogs/blog_details"}},[t._v("Blog Details")])],1),t._v(" "),l("b-dropdown-item",{staticClass:"nav-link"},[l("nuxt-link",{attrs:{to:"/blogs/blog_no-sidebar"}},[t._v("Blog No sidebar")])],1)],1),t._v(" "),l("b-dropdown",{attrs:{id:"dropdown-3",text:"Authentication"}},[l("b-dropdown-item",{staticClass:"nav-link"},[l("nuxt-link",{attrs:{to:"/authentication/login"}},[t._v("Signin")])],1),t._v(" "),l("b-dropdown-item",{staticClass:"nav-link"},[l("nuxt-link",{attrs:{to:"/authentication/login-2"}},[t._v("Signin Classic")])],1),t._v(" "),l("b-dropdown-item",{staticClass:"nav-link"},[l("nuxt-link",{attrs:{to:"/authentication/signup"}},[t._v("Signup")])],1),t._v(" "),l("b-dropdown-item",{staticClass:"nav-link"},[l("nuxt-link",{attrs:{to:"/authentication/signup-2"}},[t._v("Signup Classic")])],1)],1),t._v(" "),l("b-dropdown",{attrs:{id:"dropdown-4",text:"Bouns page"}},[l("b-dropdown-item",{staticClass:"nav-link"},[l("nuxt-link",{attrs:{to:"/bonus/about"}},[t._v("About")])],1),t._v(" "),l("b-dropdown-item",{staticClass:"nav-link"},[l("nuxt-link",{attrs:{to:"/bonus/faq"}},[t._v("FAQ")])],1),t._v(" "),l("b-dropdown-item",{staticClass:"nav-link"},[l("nuxt-link",{attrs:{to:"/bonus/elements"}},[t._v("Elements")])],1),t._v(" "),l("b-dropdown-item",{staticClass:"nav-link"},[l("nuxt-link",{attrs:{to:"/bonus/price"}},[t._v("Price")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},327:function(t,e,l){"use strict";l.r(e);var n=l(324),o=l(325),r={components:{Logo:n.default,Navbar:o.default},data:function(){return{windowTop:0,fixedheader:!1}},mounted:function(){window.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(t){this.windowTop=t.target.documentElement.scrollTop,this.windowTop>=60?this.fixedheader=!0:this.fixedheader=!1}}},c=l(55),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("header",{attrs:{id:"home"}},[l("div",{staticClass:"custom-container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-12"},[l("div",{staticClass:"landing-header",class:t.fixedheader?"fixed":""},[l("div",{staticClass:"main-menu"},[l("div",[l("b-navbar",{staticClass:"navbar navbar-light",attrs:{toggleable:"xl"}},[l("Logo"),t._v(" "),l("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),l("Navbar")],1)],1)])])])])])])}),[],!1,null,null,null);e.default=component.exports},328:function(t,e,l){t.exports=l.p+"img/1.cb170ac.jpg"},329:function(t,e,l){t.exports=l.p+"img/2.cb170ac.jpg"},330:function(t,e,l){"use strict";l.r(e);var n={name:"TapTop",data:function(){return{display:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{executeScroll:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},handleScroll:function(){window.scrollY>600?this.display=!0:this.display=!1}}},o=l(55),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"tap-top",style:t.display?"display:block":"display:none",on:{click:function(e){return t.executeScroll()}}},[t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("i",{staticClass:"fa fa-angle-double-up"})])}],!1,null,null,null);e.default=component.exports},331:function(t,e,l){"use strict";l.r(e);var n=[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"footer-title footer-mobile-title"},[l("h3",[t._v("About")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ul",{staticClass:"social-group"},[l("li",[l("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"https://www.facebook.com/"}},[l("i",{staticClass:"fa fa-facebook"})])]),t._v(" "),l("li",[l("a",{staticClass:"icon-btn btn-twiter button-effect btn-sm",attrs:{href:"https://twitter.com/"}},[l("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),l("li",[l("a",{staticClass:"icon-btn btn-linkedin button-effect btn-sm",attrs:{href:"https://www.linkedin.com/"}},[l("i",{staticClass:"fa fa-linkedin"})])]),t._v(" "),l("li",[l("a",{staticClass:"icon-btn btn-instagram button-effect btn-sm",attrs:{href:"https://www.instagram.com/"}},[l("i",{staticClass:"fa fa-instagram"})])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"footer-title"},[l("h3",[t._v("Useful Links")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"footer-title"},[l("h3",[t._v("Blog Links")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"footer-title"},[l("h3",[t._v("Authentication")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-lg-3 col-md-4"},[l("div",{staticClass:"downlaod"},[l("div",[l("div",{staticClass:"footer-title"},[l("h3",[t._v("Download Apps")])]),t._v(" "),l("div",{staticClass:"footer-contant"},[l("div",{staticClass:"footer-btn"},[l("a",{staticClass:"btn active",attrs:{href:"https://www.apple.com/in/itunes/"}},[l("i",{staticClass:"fa fa-apple"}),t._v(" "),l("div",[l("h6",[t._v("Available on the")]),t._v(" "),l("h4",[t._v("App store")])])]),l("a",{staticClass:"btn",attrs:{href:"https://play.google.com/store"}},[l("i",{staticClass:"fa fa-play"}),t._v(" "),l("div",[l("h6",[t._v("Available on the")]),t._v(" "),l("h4",[t._v("Google play")])])])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer-back-block"},[e("img",{staticClass:"img-fluid inner1",attrs:{src:l(320),alt:"footer-back-img"}}),e("img",{staticClass:"img-fluid inner2",attrs:{src:l(320),alt:"footer-back-img"}})])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"container copyright-footer"},[l("div",{staticClass:"row copyright"},[l("div",{staticClass:"col-md-6 col-sm-12"},[l("p",{staticClass:"footer-left"},[t._v("© 2021 Chitchat. All Rights Reserved")])]),t._v(" "),l("div",{staticClass:"col-md-6 col-sm-12 links_horizontal"},[l("p",{staticClass:"text-right"},[t._v("\n          Made with "),l("span",[t._v("♥ ")]),t._v("By Theme Pixelstrap\n        ")])])])])}],o=l(55),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"container footer-main"},[n("div",{staticClass:"row footer-block"},[n("div",{staticClass:"col-lg-3 col-md-6"},[t._m(0),t._v(" "),n("div",{staticClass:"about-payment footer-contant"},[n("div",{staticClass:"logo"},[n("nuxt-link",{attrs:{to:"/messenger/messenger"}},[n("img",{attrs:{src:l(321),alt:"logo"}})])],1),t._v(" "),n("p",[t._v("\n            Contrary to popular belief, Lorem Ipsum is not simply random text.\n            It has roots in a piece Lorem fugit on looked ipsum.\n          ")]),t._v(" "),t._m(1)])]),t._v(" "),n("div",{staticClass:"col-lg-2 col-md-3"},[n("div",{staticClass:"links"},[t._m(2),t._v(" "),n("div",{staticClass:"footer-contant"},[n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/messenger/messenger"}},[t._v("Home")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/bonus/about"}},[t._v("About us")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/bonus/faq"}},[t._v("FAQ")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/bonus/elements"}},[t._v("Elements")])],1)])])])]),t._v(" "),n("div",{staticClass:"col-lg-2 col-md-3"},[n("div",{staticClass:"links"},[t._m(3),t._v(" "),n("div",{staticClass:"footer-contant"},[n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/blogs/blog_no-sidebar"}},[t._v("No sidebar")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/blogs/blog_left-sidebar"}},[t._v("Left sidebar")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/blogs/blog_right-sidebar"}},[t._v("Right sidebar")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/blogs/blog_details"}},[t._v("Details page")])],1)])])])]),t._v(" "),n("div",{staticClass:"col-lg-2 col-md-4"},[n("div",{staticClass:"links"},[t._m(4),t._v(" "),n("div",{staticClass:"footer-contant"},[n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/authentication/login"}},[t._v("Signin")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/authentication/login-2"}},[t._v("Signin classic")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/authentication/signup"}},[t._v("Signup")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/authentication/signup-2"}},[t._v("Signup classic")])],1)])])])]),t._v(" "),t._m(5)])]),t._v(" "),t._m(6),t._v(" "),t._m(7)])}),n,!1,null,null,null);e.default=component.exports},335:function(t,e,l){t.exports=l.p+"img/2.64da6f4.jpg"},339:function(t,e,l){t.exports=l.p+"img/3.cb170ac.jpg"},340:function(t,e,l){t.exports=l.p+"img/4.cb170ac.jpg"},342:function(t,e,l){t.exports=l.p+"img/1.64da6f4.jpg"},343:function(t,e,l){t.exports=l.p+"img/3.64da6f4.jpg"},344:function(t,e,l){t.exports=l.p+"img/4.64da6f4.jpg"},355:function(t,e,l){"use strict";l.r(e);var n=l(55),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"blog-card"},[l("h4",[t._v("search")]),t._v(" "),l("div",{staticClass:"blog-search"},[l("div",{staticClass:"input-group"},[l("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"search in blog"}}),l("span",[l("i",{staticClass:"fa fa-search"})])])])])}],!1,null,null,null);e.default=component.exports},356:function(t,e,l){"use strict";l.r(e);var n=l(55),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"blog-card"},[l("h4",[t._v("follow us")]),t._v(" "),l("ul",{staticClass:"blog-follow"},[l("li",[l("a",{attrs:{href:"https://www.facebook.com/"}},[l("i",{staticClass:"fa fa-facebook-square"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://twitter.com/"}},[l("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://www.instagram.com/"}},[l("i",{staticClass:"fa fa-instagram"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://www.skype.com/en/"}},[l("i",{staticClass:"fa fa-skype"})])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://www.linkedin.com/"}},[l("i",{staticClass:"fa fa-linkedin"})])])])])}],!1,null,null,null);e.default=component.exports},357:function(t,e,l){"use strict";l.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog-card"},[n("h4",[t._v("Recent Blog")]),t._v(" "),n("ul",{staticClass:"recent-blog"},[n("li",[n("div",{staticClass:"media"},[n("img",{staticClass:"img-fluid blur-up lazyload",attrs:{src:l(342),alt:"Generic placeholder image"}}),t._v(" "),n("div",{staticClass:"media-body align-self-center"},[n("h5",[t._v("1 Dec 2020")]),t._v(" "),n("p",[t._v("0 hits")])])])]),t._v(" "),n("li",[n("div",{staticClass:"media"},[n("img",{staticClass:"img-fluid blur-up lazyload",attrs:{src:l(335),alt:"Generic placeholder image"}}),t._v(" "),n("div",{staticClass:"media-body align-self-center"},[n("h5",[t._v("2 Dec 2020")]),t._v(" "),n("p",[t._v("0 hits")])])])]),t._v(" "),n("li",[n("div",{staticClass:"media"},[n("img",{staticClass:"img-fluid blur-up lazyload",attrs:{src:l(343),alt:"Generic placeholder image"}}),t._v(" "),n("div",{staticClass:"media-body align-self-center"},[n("h5",[t._v("3 Dec 2020")]),t._v(" "),n("p",[t._v("0 hits")])])])]),t._v(" "),n("li",[n("div",{staticClass:"media"},[n("img",{staticClass:"img-fluid blur-up lazyload",attrs:{src:l(344),alt:"Generic placeholder image"}}),t._v(" "),n("div",{staticClass:"media-body align-self-center"},[n("h5",[t._v("4 Dec 2020")]),t._v(" "),n("p",[t._v("0 hits")])])])]),t._v(" "),n("li",[n("div",{staticClass:"media"},[n("img",{staticClass:"img-fluid blur-up lazyload",attrs:{src:l(335),alt:"Generic placeholder image"}}),t._v(" "),n("div",{staticClass:"media-body align-self-center"},[n("h5",[t._v("5 Dec 2020")]),t._v(" "),n("p",[t._v("0 hits")])])])])])])}],o=l(55),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),n,!1,null,null,null);e.default=component.exports},358:function(t,e,l){"use strict";l.r(e);var n=l(55),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"blog-card"},[l("h4",[t._v("Popular Blog")]),t._v(" "),l("ul",{staticClass:"popular-blog"},[l("li",[l("div",{staticClass:"media"},[l("div",{staticClass:"blog-date"},[l("h3",[t._v("03")]),t._v(" "),l("span",[t._v("may")])]),t._v(" "),l("div",{staticClass:"media-body align-self-center"},[l("h5",[t._v("Humour the like")]),t._v(" "),l("p",[t._v("\n            it look like readable English. Many desktop publishing text.\n          ")])])])]),t._v(" "),l("li",[l("div",{staticClass:"media"},[l("div",{staticClass:"blog-date"},[l("h3",[t._v("03")]),t._v(" "),l("span",[t._v("may")])]),t._v(" "),l("div",{staticClass:"media-body align-self-center"},[l("h5",[t._v("Injected like")]),t._v(" "),l("p",[t._v("\n            it look like readable English. Many desktop publishing text.\n          ")])])])]),t._v(" "),l("li",[l("div",{staticClass:"media"},[l("div",{staticClass:"blog-date"},[l("h3",[t._v("03")]),t._v(" "),l("span",[t._v("may")])]),t._v(" "),l("div",{staticClass:"media-body align-self-center"},[l("h5",[t._v("Injected like")]),t._v(" "),l("p",[t._v("\n            it look like readable English. Many desktop publishing text.\n          ")])])])]),t._v(" "),l("li",[l("div",{staticClass:"media"},[l("div",{staticClass:"blog-date"},[l("h3",[t._v("03")]),t._v(" "),l("span",[t._v("may")])]),t._v(" "),l("div",{staticClass:"media-body align-self-center"},[l("h5",[t._v("Injected the")]),t._v(" "),l("p",[t._v("\n            it look like readable English. Many desktop publishing text.\n          ")])])])])])])}],!1,null,null,null);e.default=component.exports},359:function(t,e,l){"use strict";l.r(e);var n=l(55),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"blog-card"},[l("ul",{staticClass:"tags"},[l("li",[l("a",{attrs:{href:"javascript:void(0)"}},[t._v("Design")])]),t._v(" "),l("li",[l("a",{attrs:{href:"javascript:void(0)"}},[t._v("Clean")])]),t._v(" "),l("li",[l("a",{attrs:{href:"javascript:void(0)"}},[t._v("CSS3")])]),t._v(" "),l("li",[l("a",{attrs:{href:"javascript:void(0)"}},[t._v("Portfolio")])]),t._v(" "),l("li",[l("a",{attrs:{href:"javascript:void(0)"}},[t._v("Pixelstrap")])]),t._v(" "),l("li",[l("a",{attrs:{href:"javascript:void(0)"}},[t._v("Perfect")])]),t._v(" "),l("li",[l("a",{attrs:{href:"javascript:void(0)"}},[t._v("NoJquery ")])])])])}],!1,null,null,null);e.default=component.exports},368:function(t,e,l){"use strict";l.r(e);var n=l(355),o=l(356),r=l(357),c=l(358),v=l(359),d={components:{BlogSearch:n.default,BlogFollowUs:o.default,BlogRecentBlog:r.default,BlogPopularBlog:c.default,BlogTags:v.default}},_=l(55),component=Object(_.a)(d,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-xl-3 col-lg-4 col-md-5"},[l("div",{staticClass:"blog-sidebar"},[l("BlogSearch"),t._v(" "),l("BlogFollowUs"),t._v(" "),l("BlogRecentBlog"),t._v(" "),l("BlogPopularBlog"),t._v(" "),l("BlogTags")],1)])}),[],!1,null,null,null);e.default=component.exports},383:function(t,e,l){"use strict";l.r(e);var header=l(327),n=l(168),o={components:{Header:header.default,Breadcrumbs:n.default}},r=l(55),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"inner-page"},[l("Header"),t._v(" "),l("Breadcrumbs",{attrs:{main:"Home",title:"Blog"}})],1)}),[],!1,null,null,null);e.default=component.exports},384:function(t,e,l){"use strict";l.r(e);var n={data:function(){return{blogDetail:[{img:l(328),img1:l(329),date:"25 January 2021",shortDesc:"you how all this mistaken idea of denouncing pleasure.",user:"Admin",comment:"10 Comment",longDesc:"Consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure."},{img:l(339),img1:l(340),date:"25 January 2021",shortDesc:"you how all this mistaken idea of denouncing pleasure.",user:"Admin",comment:"10 Comment",longDesc:"Consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure."},{img:l(328),img1:l(329),date:"25 January 2021",shortDesc:"you how all this mistaken idea of denouncing pleasure.",user:"Admin",comment:"10 Comment",longDesc:"Consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure."}]}}},o=l(55),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"col-xl-9 col-lg-8 col-md-7"},t._l(t.blogDetail,(function(e,n){return l("div",{key:n,staticClass:"row blog-media"},[l("div",{staticClass:"col-xl-6"},[l("div",{staticClass:"blog-side"},[l("div",{staticClass:"blog-left"},[l("a",{attrs:{href:"javascript:void(0)"}},[l("img",{staticClass:"img-fluid",attrs:{src:e.img,alt:""}})])]),t._v(" "),l("div",{staticClass:"blog-right"},[l("div",[l("h6",[t._v(t._s(e.date))]),t._v(" "),l("nuxt-link",{attrs:{to:"/blogs/blog_details"}},[l("h4",[t._v(t._s(e.shortDesc))])]),t._v(" "),l("ul",{staticClass:"post-social"},[l("li",[l("i",{staticClass:"fa fa-user"}),t._v(t._s(e.user))]),t._v(" "),l("li",[l("i",{staticClass:"fa fa-comments"}),t._v(" "+t._s(e.comment))])]),t._v(" "),l("p",[t._v(t._s(e.longDesc))])],1)])])]),t._v(" "),l("div",{staticClass:"col-xl-6"},[l("div",{staticClass:"blog-side"},[l("div",{staticClass:"blog-left"},[l("a",{attrs:{href:"javascript:void(0)"}},[l("img",{staticClass:"img-fluid",attrs:{src:e.img1,alt:""}})])]),t._v(" "),l("div",{staticClass:"blog-right"},[l("div",[l("h6",[t._v(t._s(e.date))]),t._v(" "),l("nuxt-link",{attrs:{to:"/blogs/blog_details"}},[l("a",{attrs:{href:"javascript:void(0)"}},[l("h4",[t._v(t._s(e.shortDesc))])])]),t._v(" "),l("ul",{staticClass:"post-social"},[l("li",[l("i",{staticClass:"fa fa-user"}),t._v(t._s(e.user))]),t._v(" "),l("li",[l("i",{staticClass:"fa fa-comments"}),t._v(" "+t._s(e.comment))])]),t._v(" "),l("p",[t._v(t._s(e.longDesc))])],1)])])])])})),0)}),[],!1,null,null,null);e.default=component.exports},484:function(t,e,l){"use strict";l.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"page-decore"},[n("li",{staticClass:"top"},[n("img",{staticClass:"img-fluid inner2",attrs:{src:l(320),alt:"footer-back-img"}})]),t._v(" "),n("li",{staticClass:"bottom"},[n("img",{staticClass:"img-fluid inner2",attrs:{src:l(320),alt:"footer-back-img"}})])])}],o=l(384),r=l(368),c={components:{BlogMedia:o.default,BlogSidebar:r.default}},v=l(55),component=Object(v.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"section-py-space blog-page ratio2_3"},[t._m(0),t._v(" "),l("div",{staticClass:"custom-container left-blog"},[l("div",{staticClass:"row"},[l("BlogSidebar"),t._v(" "),l("BlogMedia")],1)])])}),n,!1,null,null,null);e.default=component.exports},674:function(t,e,l){"use strict";l.r(e);var n=l(383),o=l(484),footer=l(331),r=l(330),c={components:{BlogHeader:n.default,Blog:o.default,Footer:footer.default,TapTop:r.default}},v=l(55),component=Object(v.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("BlogHeader"),t._v(" "),l("Blog"),t._v(" "),l("Footer"),t._v(" "),l("TapTop")],1)}),[],!1,null,null,null);e.default=component.exports}}]);