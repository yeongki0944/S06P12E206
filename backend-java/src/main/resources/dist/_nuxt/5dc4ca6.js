(window.webpackJsonp=window.webpackJsonp||[]).push([[42,43,45,46],{1033:function(e,t,n){"use strict";n.r(t);n(180),n(1);var o=n(181),r=n.n(o),c=n(504),d=n(524);r.a.defaults.headers.post["Content-Type"]="application/json";var l="https://i6e206.p.ssafy.io",m="Z5YF9UcUB9",h={name:"App",components:{UserVideo:d.default},data:function(){return{OV:void 0,session:void 0,mainStreamManager:void 0,publisher:void 0,subscribers:[],videoMute:!1,audioMute:!1,mySessionId:"SessionA",myUserName:"Participant"+Math.floor(100*Math.random()),message:"",chatSeq:0,chatList:[]}},methods:{joinSession:function(){var e=this;this.OV=new c.OpenVidu,this.session=this.OV.initSession(),this.session.on("streamCreated",(function(t){var n=t.stream,o=e.session.subscribe(n);e.subscribers.push(o)})),this.session.on("streamDestroyed",(function(t){var n=t.stream,o=e.subscribers.indexOf(n.streamManager,0);o>=0&&e.subscribers.splice(o,1)})),this.session.on("exception",(function(e){var t=e.exception;console.warn(t)})),this.session.on("signal:my-chat",(function(t){e.chatSeq=e.chatSeq+1;var n={chatSeq:e.chatSeq,timeStamp:Date.now(),date:new Date,creationTime:t.from.creationTime,user:t.from.data,message:t.data};e.chatList.push(n),console.log("Message :"+t.data),console.log("Connection object of the sender :"+t.from),console.log("The type of message :"+t.type)})),this.getToken(this.mySessionId).then((function(t){e.session.connect(t,{clientData:e.myUserName}).then((function(){var t=e.OV.initPublisher(void 0,{audioSource:void 0,videoSource:void 0,publishAudio:!0,publishVideo:!0,resolution:"640x480",frameRate:30,insertMode:"APPEND",mirror:!1});e.mainStreamManager=t,e.publisher=t,e.session.publish(e.publisher)})).catch((function(e){console.log("There was an error connecting to the session:",e.code,e.message)}))})),window.addEventListener("beforeunload",this.leaveSession)},leaveSession:function(){this.session&&this.session.disconnect(),this.session=void 0,this.mainStreamManager=void 0,this.publisher=void 0,this.subscribers=[],this.OV=void 0,window.removeEventListener("beforeunload",this.leaveSession)},updateMainVideoStreamManager:function(e){this.mainStreamManager!==e&&(this.mainStreamManager=e)},getToken:function(e){var t=this;return this.createSession(e).then((function(e){return t.createToken(e)}))},createSession:function(e){return new Promise((function(t,n){r.a.post("".concat(l,"/openvidu/api/sessions"),JSON.stringify({customSessionId:e}),{auth:{username:"OPENVIDUAPP",password:m}}).then((function(e){return e.data})).then((function(data){return t(data.id)})).catch((function(o){409===o.response.status?t(e):(console.warn("No connection to OpenVidu Server. This may be a certificate error at ".concat(l)),window.confirm("No connection to OpenVidu Server. This may be a certificate error at ".concat(l,'\n\nClick OK to navigate and accept it. If no certificate warning is shown, then check that your OpenVidu Server is up and running at "').concat(l,'"'))&&location.assign("".concat(l,"/accept-certificate")),n(o.response))}))}))},createToken:function(e){return new Promise((function(t,n){r.a.post("".concat(l,"/openvidu/api/sessions/").concat(e,"/connection"),{},{auth:{username:"OPENVIDUAPP",password:m}}).then((function(e){return e.data})).then((function(data){return t(data.token)})).catch((function(e){return n(e.response)}))}))},videoController:function(){this.videoMute=!this.videoMute,this.publisher.publishVideo(this.videoMute)},audioController:function(){this.audioMute=!this.audioMute,this.publisher.publishAudio(this.audioMute)},sendChat:function(){var e=this;""!=this.message&&this.session.signal({data:this.message,to:[],type:"my-chat"}).then((function(){e.message="",console.log("Message successfully sent")})).catch((function(e){console.error(e)}))}}},v=n(60),component=Object(v.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",attrs:{id:"main-container"}},[e.session?e._e():n("div",{attrs:{id:"join"}},[e._m(0),e._v(" "),n("div",{staticClass:"jumbotron vertical-center",attrs:{id:"join-dialog"}},[n("h1",[e._v("Join a video session")]),e._v(" "),n("div",{staticClass:"form-group"},[n("p",[n("label",[e._v("Participant")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.myUserName,expression:"myUserName"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:e.myUserName},on:{input:function(t){t.target.composing||(e.myUserName=t.target.value)}}})]),e._v(" "),n("p",[n("label",[e._v("Session")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.mySessionId,expression:"mySessionId"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:e.mySessionId},on:{input:function(t){t.target.composing||(e.mySessionId=t.target.value)}}})]),e._v(" "),n("p",{staticClass:"text-center"},[n("button",{staticClass:"btn btn-lg btn-success",on:{click:function(t){return e.joinSession()}}},[e._v("\n            Join!\n          ")])])])])]),e._v(" "),e.session?n("div",{attrs:{id:"session"}},[n("div",{attrs:{id:"session-header"}},[n("h1",{attrs:{id:"session-title"}},[e._v(e._s(e.mySessionId))]),e._v(" "),n("input",{staticClass:"btn btn-large btn-danger",attrs:{type:"button",id:"buttonLeaveSession",value:"Leave session"},on:{click:e.leaveSession}}),e._v(" "),n("input",{staticClass:"btn btn-large btn-danger",attrs:{type:"button",id:"buttonVideo",value:"mute Video"},on:{click:e.videoController}}),e._v(" "),n("input",{staticClass:"btn btn-large btn-danger",attrs:{type:"button",id:"buttonAudio",value:"mute Audio"},on:{click:e.audioController}}),e._v(" "),n("ul",e._l(e.chatList,(function(t){return n("li",{key:t.chatSeq},[n("p",[e._v("chatSeq : "+e._s(t.chatSeq))]),e._v(" "),n("p",[e._v("timeStamp : "+e._s(t.timeStamp))]),e._v(" "),n("p",[e._v("date : "+e._s(t.date))]),e._v(" "),n("p",[e._v("user : "+e._s(t.user))]),e._v(" "),n("p",[e._v("message : "+e._s(t.message))])])})),0),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{placeholder:"message"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),e._v(" "),n("input",{staticClass:"btn btn-large btn-danger",attrs:{type:"button",id:"buttonSendChat",value:"SendChat"},on:{click:e.sendChat}})]),e._v(" "),n("div",{staticClass:"col-md-6",attrs:{id:"main-video"}},[n("user-video",{attrs:{"stream-manager":e.mainStreamManager}})],1),e._v(" "),n("div",{staticClass:"col-md-6",attrs:{id:"video-container"}},[n("user-video",{attrs:{"stream-manager":e.publisher},nativeOn:{click:function(t){return e.updateMainVideoStreamManager(e.publisher)}}}),e._v(" "),e._l(e.subscribers,(function(sub){return n("user-video",{key:sub.stream.connection.connectionId,attrs:{"stream-manager":sub},nativeOn:{click:function(t){return e.updateMainVideoStreamManager(sub)}}})}))],2)]):e._e()])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"img-div"}},[t("img",{attrs:{src:"resources/images/openvidu_grey_bg_transp_cropped.png"}})])}],!1,null,null,null);t.default=component.exports},1198:function(e,t,n){"use strict";n.r(t);var o={name:"about-page",components:{Chatting:n(1033).default}},r=n(60),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"about-page section-py-space"},[o("div",{staticClass:"custom-container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-8 offset-sm-2 text-center"},[o("Chatting"),e._v(" "),o("img",{staticClass:"img-fluid w-100 pb-4",attrs:{src:n(475),alt:"about"}}),e._v(" "),e._m(0)],1)])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-10 offset-md-1"},[n("p",[e._v("\n              On the other hand, we denounce with righteous indignation and\n              dislike men who are so beguiled and demoralized by the charms of\n              pleasure of the moment, so blinded by desire, that they cannot\n              foresee the pain and trouble that are bound to ensue; and equal\n              blame belongs to those who fail in their duty through weakness\n              of will, which is the same as saying through shrinking from toil\n              and pain. These cases are perfectly simple and easy to\n              distinguish.\n            ")])])])}],!1,null,null,null);t.default=component.exports},475:function(e,t,n){e.exports=n.p+"img/1.8b458a4.jpg"},510:function(e,t,n){"use strict";n.r(t);var o={name:"OvVideo",components:{},props:{streamManager:Object,test:Boolean},mounted:function(){this.streamManager.stream&&this.streamManager.addVideoElement(this.$refs.video)},updated:function(){this.streamManager.stream&&this.streamManager.addVideoElement(this.$refs.video)}},r=n(60),component=Object(r.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("video",{ref:"video",attrs:{id:"video",autoplay:""}})])}),[],!1,null,null,null);t.default=component.exports},524:function(e,t,n){"use strict";n.r(t);var o={name:"UserVideo",components:{OvVideo:n(510).default},props:{streamManager:Object},computed:{clientData:function(){var e=this.getConnectionData().clientData;return e}},methods:{getConnectionData:function(){var e=this.streamManager.stream.connection;return JSON.parse(e.data)}}},r=n(60),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.streamManager?n("div",[n("ov-video",{attrs:{"stream-manager":e.streamManager,test:!0}}),e._v(" "),n("div",[n("p",[e._v(e._s(e.clientData))])])],1):e._e()}),[],!1,null,null,null);t.default=component.exports}}]);