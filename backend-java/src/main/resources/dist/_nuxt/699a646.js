(window.webpackJsonp=window.webpackJsonp||[]).push([[33,32],{441:function(e,t,n){"use strict";n.r(t);var r={name:"OvVideo",components:{},props:{streamManager:Object,test:Boolean},mounted:function(){this.streamManager.stream&&this.streamManager.addVideoElement(this.$refs.video)},updated:function(){this.streamManager.stream&&this.streamManager.addVideoElement(this.$refs.video)}},o=n(57),component=Object(o.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("video",{ref:"video",attrs:{id:"video",autoplay:""}})])}),[],!1,null,null,null);t.default=component.exports},512:function(e,t,n){"use strict";n.r(t);var r={name:"UserVideo",components:{OvVideo:n(441).default},props:{streamManager:Object},computed:{clientData:function(){var e=this.getConnectionData().clientData;return e}},methods:{getConnectionData:function(){var e=this.streamManager.stream.connection;return JSON.parse(e.data)}}},o=n(57),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.streamManager?n("div",[n("ov-video",{attrs:{"stream-manager":e.streamManager,test:!0}}),e._v(" "),n("div",[n("p",[e._v(e._s(e.clientData))])])],1):e._e()}),[],!1,null,null,null);t.default=component.exports}}]);