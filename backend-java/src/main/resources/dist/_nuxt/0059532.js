(window.webpackJsonp=window.webpackJsonp||[]).push([[195,71,72,73,74],{1351:function(t,n,e){"use strict";e.r(n);var header=e(388),o=e(182),r=e(1333),footer=e(399),l=e(398),c={components:{Header:header.default,Breadcrumbs:o.default,About:r.default,Footer:footer.default,TapTop:l.default}},f=e(60),component=Object(f.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"inner-page"},[e("Header")],1),t._v(" "),e("div",[e("About")],1),t._v(" "),e("Footer"),t._v(" "),e("TapTop")],1)}),[],!1,null,null,null);n.default=component.exports},376:function(t,n,e){t.exports=e.p+"img/landing-logo.a81471c.png"},379:function(t,n,e){var content=e(387);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(54).default)("3d17c8b8",content,!0,{sourceMap:!1})},382:function(t,n,e){t.exports=e.p+"img/noProfile.9d28d4a.png"},384:function(t,n,e){"use strict";e.r(n);var o={computed:{isLoginGetters:function(){return this.$store.getters["login/isLogin"]},isManagerGetters:function(){return this.$store.getters["login/isManager"]},isDoctorGetters:function(){return this.$store.getters["login/isDoctor"]}},methods:{logout:function(){this.$store.state.login.isLogin=!1,this.$store.state.login.isnLogin=!0,this.$store.state.login.isDoctor=!1,this.$store.state.login.isManager=!1,localStorage.removeItem("vuex"),localStorage.removeItem("jwtToken"),this.$alertify.success("로그아웃되었습니다. 감사합니다!"),this.$nuxt.$options.router.push("/authentication/login")}}},r=(e(386),e(60)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"header-right-margin"},[o("client-only",[o("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[o("b-navbar-nav",[o("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[o("nuxt-link",{attrs:{to:"/online/room"}},[t._v("온라인 진료실")])],1),t._v(" "),o("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[o("nuxt-link",{attrs:{to:"/offline/room"}},[t._v("오프라인 진료실")])],1),t._v(" "),o("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[o("nuxt-link",{attrs:{to:"/offline/help"}},[t._v("오프라인 안내페이지")])],1),t._v(" "),o("b-dropdown",{attrs:{id:"dropdown-4",text:"개발중인 페이지들"}},[o("b-dropdown-item",{staticClass:"nav-link"},[o("nuxt-link",{attrs:{to:"/bonus/about"}},[t._v("Tensor.js")])],1),t._v(" "),o("b-dropdown-item",{staticClass:"nav-link"},[o("nuxt-link",{attrs:{to:"/bonus/elements"}},[t._v("진료 예약 목록 관련")])],1),t._v(" "),o("b-dropdown-item",{staticClass:"nav-link"},[o("nuxt-link",{attrs:{to:"/bonus/price"}},[t._v("Price")])],1)],1),t._v(" "),t.isLoginGetters?t._e():o("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[o("nuxt-link",{attrs:{to:"/authentication/login"}},[t._v("로그인")])],1),t._v(" "),t.isLoginGetters?t._e():o("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[o("nuxt-link",{attrs:{to:"/authentication/signup-2"}},[t._v("회원가입")])],1),t._v(" "),t.isLoginGetters?o("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[o("nuxt-link",{attrs:{to:"/authentication/mypage"}},[t._v("마이페이지")])],1):t._e(),t._v(" "),t.isLoginGetters?o("button",{staticClass:"btn btn-primary",attrs:{id:"logout",type:"button"}},[o("a",{on:{click:t.logout}},[t._v("로그아웃")])]):t._e(),t._v(" "),t.isManagerGetters?o("button",{staticClass:"btn btn-primary",attrs:{id:"mystate",type:"button"}},[o("nuxt-link",{attrs:{to:"/manager/manager"}},[t._v("관리자페이지")])],1):t._e(),t._v(" "),!t.isLoginGetters||t.isManagerGetters||t.isDoctorGetters?t._e():o("button",{staticClass:"btn btn-primary",attrs:{id:"mystate",type:"button"}},[o("nuxt-link",{attrs:{to:"/reserve/applyReservation"}},[t._v("예약신청")])],1),t._v(" "),t.isLoginGetters&&!t.isManagerGetters?o("button",{staticClass:"btn btn-primary",attrs:{id:"mystate",type:"button"}},[o("nuxt-link",{attrs:{to:"/reserve/checkReservation"}},[t._v("예약확인")])],1):t._e(),t._v(" "),t.isLoginGetters?o("button",{staticClass:"btn btn-primary",attrs:{id:"mystate",type:"button"}},[o("h5",{staticStyle:{float:"left"}},[t._v("안녕하세요! "+t._s(this.$store.state.login.login.userName)+" "),t.isDoctorGetters?o("span",{staticStyle:{"font-size":"14px"}},[t._v("의사")]):t._e(),t._v("님                    \n                      "),t.isLoginGetters?o("img",{staticClass:"d-inline-block align-text-top",staticStyle:{"border-radius":"50%","margin-left":"10px","padding-bottom":"3px"},attrs:{src:e(382),alt:"",width:"24",height:"20"}}):t._e()])]):t._e()],1)],1)],1)],1)}),[],!1,null,"68ed778c",null);n.default=component.exports},385:function(t,n,e){"use strict";e.r(n);var o=e(60),component=Object(o.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("nuxt-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[n("div",{staticClass:"logo-block"},[n("img",{staticClass:"img-fluid",attrs:{src:e(376),alt:"logo"}})])])}),[],!1,null,null,null);n.default=component.exports},386:function(t,n,e){"use strict";e(379)},387:function(t,n,e){var o=e(53)(!1);o.push([t.i,"@media (min-width:1200px){#mystate[data-v-68ed778c]{left:250px}}",""]),t.exports=o},388:function(t,n,e){"use strict";e.r(n);var o=e(385),r=e(384),l={components:{Logo:o.default,Navbar:r.default},data:function(){return{windowTop:0,fixedheader:!1}},mounted:function(){window.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(t){this.windowTop=t.target.documentElement.scrollTop,this.windowTop>=60?this.fixedheader=!0:this.fixedheader=!1}}},c=e(60),component=Object(c.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",{attrs:{id:"home"}},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"landing-header fixed"},[e("div",{staticClass:"main-menu"},[e("div",[e("b-navbar",{staticClass:"navbar navbar-light",attrs:{toggleable:"xl"}},[e("Logo"),t._v(" "),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),e("Navbar")],1)],1)])])])])])])}),[],!1,null,null,null);n.default=component.exports},398:function(t,n,e){"use strict";e.r(n);var o={name:"TapTop",data:function(){return{display:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{executeScroll:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},handleScroll:function(){window.scrollY>600?this.display=!0:this.display=!1}}},r=e(60),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"tap-top",style:t.display?"display:block":"display:none",on:{click:function(n){return t.executeScroll()}}},[t._m(0)])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("i",{staticClass:"fa fa-angle-double-up"})])}],!1,null,null,null);n.default=component.exports},399:function(t,n,e){"use strict";e.r(n);var o=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"footer-title footer-mobile-title"},[e("h3",[t._v("About")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"col-lg-2 col-md-3"},[e("div",{staticClass:"links"},[e("div",{staticClass:"footer-title"},[e("h3",[t._v("AI")])]),t._v(" "),e("div",{staticClass:"footer-contant"},[e("p",{staticClass:"text-black align-items-center"},[t._v("\n              반형동\n              "),e("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"mailto:<아이디>@gmail.com"}},[e("i",{staticClass:"fa-brands fa-google"})]),t._v(" "),e("a",{staticClass:"icon-btn btn-github button-effect btn-sm",attrs:{href:"https://www.github.com/<깃헙아이디>/"}},[e("i",{staticClass:"fa-brands fa-github"})])]),t._v(" "),e("p",{staticClass:"text-black align-items-center"},[t._v("\n              손한기\n              "),e("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"mailto:<아이디>@gmail.com"}},[e("i",{staticClass:"fa-brands fa-google"})]),t._v(" "),e("a",{staticClass:"icon-btn btn-github button-effect btn-sm",attrs:{href:"https://www.github.com/<깃헙아이디>/"}},[e("i",{staticClass:"fa-brands fa-github"})])])])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"col-lg-2 col-md-3"},[e("div",{staticClass:"links"},[e("div",{staticClass:"footer-title"},[e("h3",[t._v("Backend")])]),t._v(" "),e("div",{staticClass:"footer-contant"},[e("p",{staticClass:"text-black align-items-center"},[t._v("\n              김영기\n              "),e("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"mailto:<아이디>@gmail.com"}},[e("i",{staticClass:"fa-brands fa-google"})]),t._v(" "),e("a",{staticClass:"icon-btn btn-github button-effect btn-sm",attrs:{href:"https://www.github.com/<깃헙아이디>/"}},[e("i",{staticClass:"fa-brands fa-github"})])]),t._v(" "),e("p",{staticClass:"text-black align-items-center"},[t._v("\n              김창민\n              "),e("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"mailto:<아이디>@gmail.com"}},[e("i",{staticClass:"fa-brands fa-google"})]),t._v(" "),e("a",{staticClass:"icon-btn btn-github button-effect btn-sm",attrs:{href:"https://www.github.com/<깃헙아이디>/"}},[e("i",{staticClass:"fa-brands fa-github"})])])])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"col-lg-2 col-md-4"},[e("div",{staticClass:"links"},[e("div",{staticClass:"footer-title"},[e("h3",[t._v("Frontend")])]),t._v(" "),e("div",{staticClass:"footer-contant"},[e("p",{staticClass:"text-black align-items-center"},[t._v("\n              윤찬호\n              "),e("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"mailto:<아이디>@gmail.com"}},[e("i",{staticClass:"fa-brands fa-google"})]),t._v(" "),e("a",{staticClass:"icon-btn btn-github button-effect btn-sm",attrs:{href:"https://www.github.com/<깃헙아이디>/"}},[e("i",{staticClass:"fa-brands fa-github"})])]),t._v(" "),e("p",{staticClass:"text-black align-items-center"},[t._v("\n              이정원\n              "),e("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"mailto:sorrow4468@gmail.com"}},[e("i",{staticClass:"fa-brands fa-google"})]),t._v(" "),e("a",{staticClass:"icon-btn btn-github button-effect btn-sm",attrs:{href:"https://www.github.com/sorrow4468/"}},[e("i",{staticClass:"fa-brands fa-github"})])])])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"footer-back-block"},[n("img",{staticClass:"img-fluid inner1",attrs:{src:e(377),alt:"footer-back-img"}}),n("img",{staticClass:"img-fluid inner2",attrs:{src:e(377),alt:"footer-back-img"}})])}],r=e(60),component=Object(r.a)({},(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("footer",[o("div",{staticClass:"container footer-main"},[o("div",{staticClass:"row footer-block"},[o("div",{staticClass:"col-lg-3 col-md-6"},[t._m(0),t._v(" "),o("div",{staticClass:"about-payment footer-contant"},[o("div",{staticClass:"logo"},[o("nuxt-link",{attrs:{to:"/messenger/messenger"}},[o("img",{attrs:{src:e(376),alt:"logo"}})])],1),t._v(" "),o("p",[t._v("\n            SSAFY 6기 부울경 2반 6팀 「SIXMAN」\n          ")])])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])]),t._v(" "),t._m(4),t._v(" "),o("div",{staticClass:"container copyright-footer"})])}),o,!1,null,null,null);n.default=component.exports}}]);