(window.webpackJsonp=window.webpackJsonp||[]).push([[80,93,94],{461:function(e,t,n){"use strict";n.r(t);var o={name:"OvVideo",components:{},props:{streamManager:Object,test:Boolean},mounted:function(){this.streamManager.stream&&this.streamManager.addVideoElement(this.$refs.video)},updated:function(){this.streamManager.stream&&this.streamManager.addVideoElement(this.$refs.video)}},r=n(57),component=Object(r.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("video",{ref:"video",attrs:{id:"video",autoplay:""}})])}),[],!1,null,null,null);t.default=component.exports},491:function(e,t){},492:function(e,t){},499:function(e,t){},503:function(e,t){},504:function(e,t){},505:function(e,t){},506:function(e,t){},507:function(e,t){},541:function(e,t,n){"use strict";n.r(t);var o={name:"UserVideo",components:{OvVideo:n(461).default},props:{streamManager:Object},computed:{clientData:function(){var e=this.getConnectionData().clientData;return e}},methods:{getConnectionData:function(){var e=this.streamManager.stream.connection;return JSON.parse(e.data)}}},r=n(57),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.streamManager?n("div",[n("ov-video",{attrs:{"stream-manager":e.streamManager,test:!0}}),e._v(" "),n("div",[n("p",[e._v(e._s(e.clientData))])])],1):e._e()}),[],!1,null,null,null);t.default=component.exports},631:function(e,t,n){"use strict";n.r(t);var o=n(34),r=(n(176),n(18),n(136),n(36),n(22),n(1),n(433)),c=n.n(r),d=n(488),l=n(541),m=n(511),v=["ache","cough","head","snot"];c.a.defaults.headers.post["Content-Type"]="application/json";var h="https://i6e206.p.ssafy.io",f="Z5YF9UcUB9",S={name:"App",components:{UserVideo:l.default},data:function(){return{OV:void 0,session:void 0,mainStreamManager:void 0,publisher:void 0,subscribers:[],mySessionId:"SessionA",myUserName:"Participant"+Math.floor(100*Math.random()),state:{model:null,preview:"",predictions:[]}}},mounted:function(){var e=this;m.e("/web_model/model.json").then((function(t){e.state.model=t}))},methods:{cropToCanvas:function(image,canvas,e){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillStyle="#000000",e.fillRect(0,0,canvas.width,canvas.height),e.drawImage(image,0,0,640,640)},joinSession:function(){var e=this;this.OV=new d.OpenVidu,this.session=this.OV.initSession(),this.session.on("streamCreated",(function(t){var n=t.stream,o=e.session.subscribe(n);e.subscribers.push(o)})),this.session.on("streamDestroyed",(function(t){var n=t.stream,o=e.subscribers.indexOf(n.streamManager,0);o>=0&&e.subscribers.splice(o,1)})),this.session.on("exception",(function(e){var t=e.exception;console.warn(t)}));var t=this;this.getToken(this.mySessionId).then((function(n){e.session.connect(n,{clientData:e.myUserName}).then((function(){navigator.mediaDevices.getUserMedia({audio:!0,video:{width:640,height:640}}).then((function(e){var n=e.getVideoTracks()[0],video=document.createElement("video");video.srcObject=new MediaStream([n]);var canvas=document.getElementById("canvas");canvas.width=640,canvas.height=640;var r=canvas.getContext("2d");video.onloadedmetadata=function(e){video.addEventListener("play",(function(){!function e(){if(!video.paused&&!video.ended){t.cropToCanvas(video,canvas,r);var input=m.f((function(){return m.d.resizeBilinear(m.a.fromPixels(canvas),[640,640]).div(255).expandDims(0)}));t.state.model.executeAsync(input).then((function(e){var t="16px sans-serif";r.font=t,r.textBaseline="top";var i,n=Object(o.a)(e,4),c=n[0],d=n[1],l=n[2],h=n[3],f=c.dataSync(),S=d.dataSync(),_=l.dataSync(),y=h.dataSync()[0];for(m.b(e),i=0;i<y;++i){var w=f.slice(4*i,4*(i+1)),O=Object(o.a)(w,4),M=O[0],x=O[1],V=O[2],k=O[3];M*=canvas.width,V*=canvas.width,x*=canvas.height;var C=V-M,j=(k*=canvas.height)-x,I=v[_[i]],T=S[i].toFixed(2);r.strokeStyle="#00FFFF",r.lineWidth=4,r.strokeRect(M,x,C,j),r.fillStyle="#00FFFF";var E=r.measureText(I+":"+T).width,N=parseInt(t,10);r.fillRect(M,x,E+4,N+4)}for(i=0;i<y;++i){var P=f.slice(4*i,4*(i+1)),U=Object(o.a)(P,3),D=U[0],F=U[1];D*=canvas.width,F*=canvas.height;var $=v[_[i]],J=S[i].toFixed(2);r.fillStyle="#000000",r.fillText($+":"+J,D,F)}})),r.drawImage(video,0,0,640,640),setTimeout(e,1e3/30)}}()})),video.msHorizontalMirror=!0,video.play();var n=canvas.captureStream(30).getVideoTracks()[0],c=t.OV.initPublisher(void 0,{audioSource:!1,videoSource:n});t.publisher=c,t.session.publish(t.publisher)}})).catch((function(e){console.log(e.name+": "+e.message)})),e.session.publish(e.publisher)})).catch((function(e){console.log("There was an error connecting to the session:",e.code,e.message)}))})),window.addEventListener("beforeunload",this.leaveSession)},leaveSession:function(){this.session&&this.session.disconnect(),this.session=void 0,this.mainStreamManager=void 0,this.publisher=void 0,this.subscribers=[],this.OV=void 0,window.removeEventListener("beforeunload",this.leaveSession)},updateMainVideoStreamManager:function(e){this.mainStreamManager!==e&&(this.mainStreamManager=e)},getToken:function(e){var t=this;return this.createSession(e).then((function(e){return t.createToken(e)}))},createSession:function(e){return new Promise((function(t,n){c.a.post("".concat(h,"/openvidu/api/sessions"),JSON.stringify({customSessionId:e}),{auth:{username:"OPENVIDUAPP",password:f}}).then((function(e){return e.data})).then((function(data){return t(data.id)})).catch((function(o){409===o.response.status?t(e):(console.warn("No connection to OpenVidu Server. This may be a certificate error at ".concat(h)),window.confirm("No connection to OpenVidu Server. This may be a certificate error at ".concat(h,'\n\nClick OK to navigate and accept it. If no certificate warning is shown, then check that your OpenVidu Server is up and running at "').concat(h,'"'))&&location.assign("".concat(h,"/accept-certificate")),n(o.response))}))}))},createToken:function(e){return new Promise((function(t,n){c.a.post("".concat(h,"/openvidu/api/sessions/").concat(e,"/connection"),{},{auth:{username:"OPENVIDUAPP",password:f}}).then((function(e){return e.data})).then((function(data){return t(data.token)})).catch((function(e){return n(e.response)}))}))}}},_=n(57),component=Object(_.a)(S,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",attrs:{id:"main-container"}},[e.session?e._e():n("div",{attrs:{id:"join"}},[e._m(0),e._v(" "),n("div",{staticClass:"jumbotron vertical-center",attrs:{id:"join-dialog"}},[n("h1",[e._v("Join a video session")]),e._v(" "),n("div",{staticClass:"form-group"},[n("p",[n("label",[e._v("Participant")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.myUserName,expression:"myUserName"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:e.myUserName},on:{input:function(t){t.target.composing||(e.myUserName=t.target.value)}}})]),e._v(" "),n("p",[n("label",[e._v("Session")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.mySessionId,expression:"mySessionId"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:e.mySessionId},on:{input:function(t){t.target.composing||(e.mySessionId=t.target.value)}}})]),e._v(" "),n("p",{staticClass:"text-center"},[n("button",{staticClass:"btn btn-lg btn-success",on:{click:function(t){return e.joinSession()}}},[e._v("\n            Join!\n          ")])])])])]),e._v(" "),e.session?n("div",{attrs:{id:"session"}},[n("div",{attrs:{id:"session-header"}},[n("h1",{attrs:{id:"session-title"}},[e._v(e._s(e.mySessionId))]),e._v(" "),n("input",{staticClass:"btn btn-large btn-danger",attrs:{type:"button",id:"buttonLeaveSession",value:"Leave session"},on:{click:e.leaveSession}})]),e._v(" "),n("div",{staticClass:"col-md-6",attrs:{id:"video-container"}},e._l(e.subscribers,(function(sub){return n("user-video",{key:sub.stream.connection.connectionId,attrs:{"stream-manager":sub},nativeOn:{click:function(t){return e.updateMainVideoStreamManager(sub)}}})})),1),e._v(" "),e._m(1)]):e._e()])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"img-div"}},[t("img",{attrs:{src:"resources/images/openvidu_grey_bg_transp_cropped.png"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("canvas",{attrs:{id:"canvas"}})])}],!1,null,null,null);t.default=component.exports}}]);