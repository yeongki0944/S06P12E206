(window.webpackJsonp=window.webpackJsonp||[]).push([[207,69,70,71,72,73,74,180,181,182],{1031:function(t,e,n){"use strict";n.r(e);n(180),n(21);var o=n(86),r={data:function(){return{fields1:["담당의","환자명","환자정보","진료_예약_날짜","confirm"],items1:[],fields2:["담당의","환자명","환자정보","진료_예약_날짜","confirm"],items2:[],fields3:["담당의","환자명","환자정보","진료_예약_날짜","confirm"],items3:[],fields4:["담당의","환자명","환자정보","진료_예약_날짜","confirm","show_details"],items4:[]}},computed:{isDoctorGetters:function(){return this.$store.getters["login/isDoctor"]},listDoctorAppliedGetters:function(){return this.$store.getters}},methods:{accept:function(t){var e=this;console.log(t),this.$data.items1.splice(t.index,1),o.default.post("/reserve/doctor/accept",{id:t.item.id}).then((function(t){var data=t.data;console.log(data)})).catch((function(t){console.log("DoctorReservatedVue: error : "),e.$alertify.error("서버에러 발생.")})),o.default.post("/reserve/doctor",{userId:this.$store.state.login.login.userId}).then((function(t){var data=t.data;console.log(data),e.$data.items1=[],e.$data.items2=[],console.log("ssssssssssss");for(var i=0;i<data.appliedList.length;i++){var n=data.confirmList[i].reservedDt,b={isActive:!0,"담당의":data.appliedList[i].doctorInfo.user.name,"환자명":data.appliedList[i].user.name,"환자정보":data.appliedList[i].contents,"진료_예약_날짜":n,id:data.appliedList[i].id};e.$data.items1.push(b),console.log(e.$data.items1)}console.log("ssssssssssss22222222222222");for(i=0;i<data.confirmList.length;i++){n=data.confirmList[i].reservedDt,b={isActive:!0,"담당의":data.confirmList[i].doctorInfo.user.name,"환자명":data.confirmList[i].user.name,"환자정보":data.confirmList[i].contents,"진료_예약_날짜":n,id:data.confirmList[i].id};e.$data.items2.push(b),console.log(e.$data.items2)}})).catch((function(t){console.log("DoctorReservatedVue: error : "),e.$alertify.error("서버에러 발생.")}))},cancel:function(t){var e=this;console.log(t),this.$data.items1.splice(t.index,1),o.default.post("/reserve/doctor/cancel",{id:t.item.id}).then((function(t){var data=t.data;console.log(data)})).catch((function(t){console.log("DoctorReservatedVue: error : "),e.$alertify.error("서버에러 발생.")})),o.default.post("/reserve/doctor",{userId:this.$store.state.login.login.userId}).then((function(t){var data=t.data;console.log(data),e.$data.items1=[],e.$data.items2=[];for(var i=0;i<data.appliedList.length;i++){var n=data.confirmList[i].reservedDt,b={isActive:!0,"담당의":data.appliedList[i].doctorInfo.user.name,"환자명":data.appliedList[i].user.name,"환자정보":data.appliedList[i].contents,"진료_예약_날짜":n,id:data.appliedList[i].id};e.$data.items1.push(b),console.log(e.$data.items1)}for(i=0;i<data.confirmList.length;i++){n=data.confirmList[i].reservedDt,b={isActive:!0,"담당의":data.confirmList[i].doctorInfo.user.name,"환자명":data.confirmList[i].user.name,"환자정보":data.confirmList[i].contents,"진료_예약_날짜":n,id:data.confirmList[i].id};e.$data.items2.push(b),console.log(e.$data.items2)}})).catch((function(t){console.log("DoctorReservatedVue: error : "),e.$alertify.error("서버에러 발생.")}))}},mounted:function(){var t=this;this.isDoctorGetters?o.default.post("/reserve/doctor",{userId:this.$store.state.login.login.userId}).then((function(e){var data=e.data;console.log(data),t.$data.items1=[],t.$data.items2=[],console.log("sssssssssssss");for(var i=0;i<data.appliedList.length;i++){var n=data.appliedList[i].reservedDt,b={isActive:!0,"담당의":data.appliedList[i].doctorInfo.user.name,"환자명":data.appliedList[i].user.name,"환자정보":data.appliedList[i].contents,"진료_예약_날짜":n,id:data.appliedList[i].id};t.$data.items1.push(b),console.log(t.$data.items1)}console.log("sssssssssssss22222222");for(i=0;i<data.confirmList.length;i++){console.log("sssssssss3333333333333333");n=data.confirmList[i].reservedDt;console.log("sssssssss44444444444444");var o={isActive:!0,"담당의":data.confirmList[i].doctorInfo.user.name,"환자명":data.confirmList[i].user.name,"환자정보":data.confirmList[i].contents,"진료_예약_날짜":n,id:data.confirmList[i].id};t.$data.items2.push(o),console.log("sssssssss3333333333333333"),console.log(t.$data.items2)}})).catch((function(e){console.log("DoctorReservatedVue: error : "),t.$alertify.error("서버에러 발생.")})):o.default.post("/reserve/patient",{userId:this.$store.state.login.login.userId}).then((function(e){var data=e.data;console.log(data);for(var i=0;i<data.appliedList.length;i++){var n=data.confirmList[i].reservedDt,b={isActive:!0,"담당의":data.appliedList[i].doctorInfo.user.name,"환자명":data.appliedList[i].user.name,"환자정보":data.appliedList[i].contents,"진료_예약_날짜":n,id:data.appliedList[i].id};t.$data.items3.push(b),console.log(t.$data.items3)}for(i=0;i<data.confirmList.length;i++){n=data.confirmList[i].reservedDt,b={isActive:!0,"담당의":data.confirmList[i].doctorInfo.user.name,"환자명":data.confirmList[i].user.name,"환자정보":data.confirmList[i].contents,"진료_예약_날짜":n,id:data.confirmList[i].id};t.$data.items4.push(b),console.log(t.$data.items4)}})).catch((function(e){console.log("PatientReservatedVue: error : "),t.$alertify.error("서버에러 발생.")}))}},l=n(60),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"element-span-prag"},[t.isDoctorGetters?n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"element-card"},[t._m(0),t._v(" "),n("div",{staticClass:"element-card-body typography"},[n("b-table",{attrs:{items:t.items1,fields:t.fields1,striped:"",responsive:"sm"},scopedSlots:t._u([{key:"cell(confirm)",fn:function(data){return[n("b-button",{staticClass:"mr-2",attrs:{variant:"success",size:"sm"},on:{click:function(e){return t.accept(data)}}},[t._v("승인")]),t._v(" "),n("b-button",{staticClass:"mr-2",attrs:{variant:"danger",size:"sm"},on:{click:function(e){return t.cancel(data)}}},[t._v("취소")])]}},{key:"cell(show_details)",fn:function(e){return[n("b-button",{staticClass:"mr-2",attrs:{variant:"info",size:"sm"},on:{click:e.toggleDetails}},[t._v("\n                "+t._s((e.detailsShowing,""))+" 상세\n              ")])]}},{key:"row-details",fn:function(e){return[n("b-card",[n("b-row",{staticClass:"mb-2"},[n("b-col",{staticClass:"text-sm-right",attrs:{sm:"3"}},[n("b",[t._v("환자명:")])]),t._v(" "),n("b-col",[t._v(t._s(e.item.환자명))])],1),t._v(" "),n("b-row",{staticClass:"mb-2"},[n("b-col",{staticClass:"text-sm-right",attrs:{sm:"3"}},[n("b",[t._v("환자정보:")])]),t._v(" "),n("b-col",[t._v(t._s(e.item.환자정보))])],1),t._v(" "),n("b-row",{staticClass:"mb-2"},[n("b-col",{staticClass:"text-sm-right",attrs:{sm:"3"}},[n("b",[t._v("증상:")])]),t._v(" "),n("b-col",[t._v(t._s(e.item.증상))])],1),t._v(" "),n("b-button",{attrs:{variant:"info",size:"sm"},on:{click:e.toggleDetails}},[t._v("접기")])],1)]}}],null,!1,1006444177)})],1)])])]):t._e(),t._v(" "),t.isDoctorGetters?n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"element-card"},[t._m(1),t._v(" "),n("div",{staticClass:"element-card-body typography"},[n("b-table",{attrs:{items:t.items2,fields:t.fields2,striped:"",responsive:"sm"},scopedSlots:t._u([{key:"cell(confirm)",fn:function(){return[n("b-button",{staticClass:"mr-2",attrs:{variant:"success",size:"sm"}},[t._v("확정됨")])]},proxy:!0}],null,!1,3884581627)})],1)])])]):t._e(),t._v(" "),t.isDoctorGetters?t._e():n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"element-card"},[t._m(2),t._v(" "),n("div",{staticClass:"element-card-body typography"},[n("b-table",{attrs:{items:t.items3,fields:t.fields4,striped:"",responsive:"sm"},scopedSlots:t._u([{key:"cell(confirm)",fn:function(){return[n("b-button",{staticClass:"mr-2",attrs:{variant:"info",size:"sm"}},[t._v("대기중")])]},proxy:!0},{key:"cell(show_details)",fn:function(e){return[n("b-button",{staticClass:"mr-2",attrs:{variant:"info",size:"sm"},on:{click:e.toggleDetails}},[t._v("\n                "+t._s((e.detailsShowing,""))+" 상세\n              ")])]}},{key:"row-details",fn:function(e){return[n("b-card",[n("b-row",{staticClass:"mb-2"},[n("b-col",{staticClass:"text-sm-right",attrs:{sm:"3"}},[n("b",[t._v("예약시간:")])]),t._v(" "),n("b-col",[t._v(t._s(e.item.예약시간))])],1),t._v(" "),n("b-row",{staticClass:"mb-2"},[n("b-col",{staticClass:"text-sm-right",attrs:{sm:"3"}},[n("b",[t._v("본인증상입력:")])]),t._v(" "),n("b-col",[t._v(t._s(e.item.본인증상입력))])],1),t._v(" "),n("b-button",{attrs:{variant:"info",size:"sm"},on:{click:e.toggleDetails}},[t._v("접기")])],1)]}}],null,!1,1096168551)})],1)])])]),t._v(" "),t.isDoctorGetters?t._e():n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"element-card"},[t._m(3),t._v(" "),n("div",{staticClass:"element-card-body typography"},[n("b-table",{attrs:{items:t.items4,fields:t.fields2,striped:"",responsive:"sm"},scopedSlots:t._u([{key:"cell(confirm)",fn:function(){return[n("b-button",{staticClass:"mr-2",attrs:{variant:"success",size:"sm"}},[t._v("확정됨")])]},proxy:!0}],null,!1,3884581627)})],1)])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"element-card-header heading"},[n("h2",[t._v("진료 신청 내역")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"element-card-header heading"},[n("h2",[t._v("진료 예약 목록")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"element-card-header heading"},[n("h2",[t._v("진료 예약 목록")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"element-card-header heading"},[n("h2",[t._v("환자측 확정 목록")])])}],!1,null,null,null);e.default=component.exports},1199:function(t,e,n){"use strict";n.r(e);var header=n(388),table=(n(511),n(86),n(1031)),o=n(619),r={components:{Header:header.default,Table:table.default,ForEmptySpace:o.default}},l=n(60),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("client-only",[n("Table"),t._v(" "),n("ForEmptySpace")],1)],1)}),[],!1,null,null,null);e.default=component.exports},1360:function(t,e,n){"use strict";n.r(e);var o=n(1199),header=n(388),r=n(182),footer=n(399),l=n(398),c={components:{CheckReservation:o.default,Header:header.default,Breadcrumbs:r.default,Footer:footer.default,TapTop:l.default}},d=n(60),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("client-only",[o("div",{staticClass:"inner-page"},[o("Header"),t._v(" "),o("Breadcrumbs",{attrs:{main:"Home",title:"예약 확인"}})],1),t._v(" "),o("ul",{staticClass:"page-decore"},[o("li",{staticClass:"top"},[o("img",{staticClass:"img-fluid inner2",attrs:{src:n(377),alt:"footer-back-img"}})]),t._v(" "),o("li",{staticClass:"bottom"},[o("img",{staticClass:"img-fluid inner2",attrs:{src:n(377),alt:"footer-back-img"}})])]),t._v(" "),o("CheckReservation"),t._v(" "),o("Footer"),t._v(" "),o("TapTop")],1)],1)}),[],!1,null,null,null);e.default=component.exports},376:function(t,e,n){t.exports=n.p+"img/landing-logo.a81471c.png"},377:function(t,e,n){t.exports=n.p+"img/2.a54c787.png"},379:function(t,e,n){var content=n(387);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("3d17c8b8",content,!0,{sourceMap:!1})},382:function(t,e,n){t.exports=n.p+"img/noProfile.9d28d4a.png"},384:function(t,e,n){"use strict";n.r(e);var o={computed:{isLoginGetters:function(){return this.$store.getters["login/isLogin"]},isManagerGetters:function(){return this.$store.getters["login/isManager"]},isDoctorGetters:function(){return this.$store.getters["login/isDoctor"]}},methods:{logout:function(){this.$store.state.login.isLogin=!1,this.$store.state.login.isnLogin=!0,this.$store.state.login.isDoctor=!1,this.$store.state.login.isManager=!1,localStorage.removeItem("vuex"),localStorage.removeItem("jwtToken"),this.$alertify.success("로그아웃되었습니다. 감사합니다!"),this.$nuxt.$options.router.push("/authentication/login")}}},r=(n(386),n(60)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"header-right-margin"},[o("client-only",[o("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[o("b-navbar-nav",[o("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[o("nuxt-link",{attrs:{to:"/online/room"}},[t._v("온라인 진료실")])],1),t._v(" "),o("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[o("nuxt-link",{attrs:{to:"/offline/room"}},[t._v("오프라인 진료실")])],1),t._v(" "),o("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[o("nuxt-link",{attrs:{to:"/offline/help"}},[t._v("오프라인 안내페이지")])],1),t._v(" "),o("b-dropdown",{attrs:{id:"dropdown-4",text:"개발중인 페이지들"}},[o("b-dropdown-item",{staticClass:"nav-link"},[o("nuxt-link",{attrs:{to:"/bonus/about"}},[t._v("Tensor.js")])],1),t._v(" "),o("b-dropdown-item",{staticClass:"nav-link"},[o("nuxt-link",{attrs:{to:"/bonus/elements"}},[t._v("진료 예약 목록 관련")])],1),t._v(" "),o("b-dropdown-item",{staticClass:"nav-link"},[o("nuxt-link",{attrs:{to:"/bonus/price"}},[t._v("Price")])],1)],1),t._v(" "),t.isLoginGetters?t._e():o("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[o("nuxt-link",{attrs:{to:"/authentication/login"}},[t._v("로그인")])],1),t._v(" "),t.isLoginGetters?t._e():o("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[o("nuxt-link",{attrs:{to:"/authentication/signup-2"}},[t._v("회원가입")])],1),t._v(" "),t.isLoginGetters?o("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[o("nuxt-link",{attrs:{to:"/authentication/mypage"}},[t._v("마이페이지")])],1):t._e(),t._v(" "),t.isLoginGetters?o("button",{staticClass:"btn btn-primary",attrs:{id:"logout",type:"button"}},[o("a",{on:{click:t.logout}},[t._v("로그아웃")])]):t._e(),t._v(" "),t.isManagerGetters?o("button",{staticClass:"btn btn-primary",attrs:{id:"mystate",type:"button"}},[o("nuxt-link",{attrs:{to:"/manager/manager"}},[t._v("관리자페이지")])],1):t._e(),t._v(" "),!t.isLoginGetters||t.isManagerGetters||t.isDoctorGetters?t._e():o("button",{staticClass:"btn btn-primary",attrs:{id:"mystate",type:"button"}},[o("nuxt-link",{attrs:{to:"/reserve/applyReservation"}},[t._v("예약신청")])],1),t._v(" "),t.isLoginGetters&&!t.isManagerGetters?o("button",{staticClass:"btn btn-primary",attrs:{id:"mystate",type:"button"}},[o("nuxt-link",{attrs:{to:"/reserve/checkReservation"}},[t._v("예약확인")])],1):t._e(),t._v(" "),t.isLoginGetters?o("button",{staticClass:"btn btn-primary",attrs:{id:"mystate",type:"button"}},[o("h5",{staticStyle:{float:"left"}},[t._v("안녕하세요! "+t._s(this.$store.state.login.login.userName)+" "),t.isDoctorGetters?o("span",{staticStyle:{"font-size":"14px"}},[t._v("의사")]):t._e(),t._v("님                    \n                      "),t.isLoginGetters?o("img",{staticClass:"d-inline-block align-text-top",staticStyle:{"border-radius":"50%","margin-left":"10px","padding-bottom":"3px"},attrs:{src:n(382),alt:"",width:"24",height:"20"}}):t._e()])]):t._e()],1)],1)],1)],1)}),[],!1,null,"68ed778c",null);e.default=component.exports},385:function(t,e,n){"use strict";n.r(e);var o=n(60),component=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("nuxt-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e("div",{staticClass:"logo-block"},[e("img",{staticClass:"img-fluid",attrs:{src:n(376),alt:"logo"}})])])}),[],!1,null,null,null);e.default=component.exports},386:function(t,e,n){"use strict";n(379)},387:function(t,e,n){var o=n(53)(!1);o.push([t.i,"@media (min-width:1200px){#mystate[data-v-68ed778c]{left:250px}}",""]),t.exports=o},388:function(t,e,n){"use strict";n.r(e);var o=n(385),r=n(384),l={components:{Logo:o.default,Navbar:r.default},data:function(){return{windowTop:0,fixedheader:!1}},mounted:function(){window.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(t){this.windowTop=t.target.documentElement.scrollTop,this.windowTop>=60?this.fixedheader=!0:this.fixedheader=!1}}},c=n(60),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{attrs:{id:"home"}},[n("div",{staticClass:"custom-container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"landing-header fixed"},[n("div",{staticClass:"main-menu"},[n("div",[n("b-navbar",{staticClass:"navbar navbar-light",attrs:{toggleable:"xl"}},[n("Logo"),t._v(" "),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),n("Navbar")],1)],1)])])])])])])}),[],!1,null,null,null);e.default=component.exports},398:function(t,e,n){"use strict";n.r(e);var o={name:"TapTop",data:function(){return{display:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{executeScroll:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},handleScroll:function(){window.scrollY>600?this.display=!0:this.display=!1}}},r=n(60),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"tap-top",style:t.display?"display:block":"display:none",on:{click:function(e){return t.executeScroll()}}},[t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("i",{staticClass:"fa fa-angle-double-up"})])}],!1,null,null,null);e.default=component.exports},399:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-title footer-mobile-title"},[n("h3",[t._v("About")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-2 col-md-3"},[n("div",{staticClass:"links"},[n("div",{staticClass:"footer-title"},[n("h3",[t._v("AI")])]),t._v(" "),n("div",{staticClass:"footer-contant"},[n("p",{staticClass:"text-black align-items-center"},[t._v("\n              반형동\n              "),n("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"mailto:<아이디>@gmail.com"}},[n("i",{staticClass:"fa-brands fa-google"})]),t._v(" "),n("a",{staticClass:"icon-btn btn-github button-effect btn-sm",attrs:{href:"https://www.github.com/<깃헙아이디>/"}},[n("i",{staticClass:"fa-brands fa-github"})])]),t._v(" "),n("p",{staticClass:"text-black align-items-center"},[t._v("\n              손한기\n              "),n("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"mailto:<아이디>@gmail.com"}},[n("i",{staticClass:"fa-brands fa-google"})]),t._v(" "),n("a",{staticClass:"icon-btn btn-github button-effect btn-sm",attrs:{href:"https://www.github.com/<깃헙아이디>/"}},[n("i",{staticClass:"fa-brands fa-github"})])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-2 col-md-3"},[n("div",{staticClass:"links"},[n("div",{staticClass:"footer-title"},[n("h3",[t._v("Backend")])]),t._v(" "),n("div",{staticClass:"footer-contant"},[n("p",{staticClass:"text-black align-items-center"},[t._v("\n              김영기\n              "),n("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"mailto:<아이디>@gmail.com"}},[n("i",{staticClass:"fa-brands fa-google"})]),t._v(" "),n("a",{staticClass:"icon-btn btn-github button-effect btn-sm",attrs:{href:"https://www.github.com/<깃헙아이디>/"}},[n("i",{staticClass:"fa-brands fa-github"})])]),t._v(" "),n("p",{staticClass:"text-black align-items-center"},[t._v("\n              김창민\n              "),n("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"mailto:<아이디>@gmail.com"}},[n("i",{staticClass:"fa-brands fa-google"})]),t._v(" "),n("a",{staticClass:"icon-btn btn-github button-effect btn-sm",attrs:{href:"https://www.github.com/<깃헙아이디>/"}},[n("i",{staticClass:"fa-brands fa-github"})])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-2 col-md-4"},[n("div",{staticClass:"links"},[n("div",{staticClass:"footer-title"},[n("h3",[t._v("Frontend")])]),t._v(" "),n("div",{staticClass:"footer-contant"},[n("p",{staticClass:"text-black align-items-center"},[t._v("\n              윤찬호\n              "),n("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"mailto:<아이디>@gmail.com"}},[n("i",{staticClass:"fa-brands fa-google"})]),t._v(" "),n("a",{staticClass:"icon-btn btn-github button-effect btn-sm",attrs:{href:"https://www.github.com/<깃헙아이디>/"}},[n("i",{staticClass:"fa-brands fa-github"})])]),t._v(" "),n("p",{staticClass:"text-black align-items-center"},[t._v("\n              이정원\n              "),n("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"mailto:sorrow4468@gmail.com"}},[n("i",{staticClass:"fa-brands fa-google"})]),t._v(" "),n("a",{staticClass:"icon-btn btn-github button-effect btn-sm",attrs:{href:"https://www.github.com/sorrow4468/"}},[n("i",{staticClass:"fa-brands fa-github"})])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer-back-block"},[e("img",{staticClass:"img-fluid inner1",attrs:{src:n(377),alt:"footer-back-img"}}),e("img",{staticClass:"img-fluid inner2",attrs:{src:n(377),alt:"footer-back-img"}})])}],r=n(60),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",[o("div",{staticClass:"container footer-main"},[o("div",{staticClass:"row footer-block"},[o("div",{staticClass:"col-lg-3 col-md-6"},[t._m(0),t._v(" "),o("div",{staticClass:"about-payment footer-contant"},[o("div",{staticClass:"logo"},[o("nuxt-link",{attrs:{to:"/messenger/messenger"}},[o("img",{attrs:{src:n(376),alt:"logo"}})])],1),t._v(" "),o("p",[t._v("\n            SSAFY 6기 부울경 2반 6팀 「SIXMAN」\n          ")])])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])]),t._v(" "),t._m(4),t._v(" "),o("div",{staticClass:"container copyright-footer"})])}),o,!1,null,null,null);e.default=component.exports},511:function(t,e,n){"use strict";n.r(e);var o=n(181),r=n.n(o),l=localStorage.getItem("jwtToken")||"";e.default=r.a.create({baseURL:"http://localhost:8080",headers:{"Content-type":"application/json",Authorization:l},responseType:"blob",withCredentials:!0})},619:function(t,e,n){"use strict";n.r(e);var o=n(60),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section-pb-space"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"})])])}],!1,null,null,null);e.default=component.exports}}]);