<template>
  <div id="main-container" class="container">
    <div
      id="join"
      v-if="!session"
      style="height: 100%; width: 100%; display: flex; justify-content: center"
    >
      <div
        class="hov-anim-box"
        style="
          width: 100%;
          height: 100%;
          display: table-cell;
          vertical-align: middle;
        "
      >
        <!--SignUp Classic start -->
        <div class="login-page2 animat-rate">
          <div class="login-content-main" style="">
            <div class="login-content">
              <div class="login-content-header">
                <img
                  src="@/assets/images/logo/landing-logo.png"
                  alt="sign-logo"
                />
              </div>
              <h3 class="mt-3">예약 환자를 선택해주세요.</h3>
              <select class="custom-select" id="gender2">
                <option selected>Choose...</option>
                <option value="1">이아경 4:00 예약</option>
                <option value="2">김순신 6:00 예약</option>
              </select>
              <div class="select">
                <label for="audioSource">Audio input source: </label
                ><select
                  class="custom-select"
                  id="audioSource"
                  v-model="userAudioSource"
                ></select>
              </div>

              <div class="select">
                <label for="audioOutput">Audio output destination: </label
                ><select class="custom-select" id="audioOutput"></select>
              </div>

              <div class="select">
                <label for="videoSource">Video source: </label
                ><select
                  class="custom-select"
                  id="videoSource"
                  v-model="userVideoSource"
                ></select>
              </div>

              <div class="card mt-4">
                <div class="card-header">
                  <h5>환자 이아경</h5>
                </div>
                <img
                  style="height: 200px"
                  src="../../assets/images/profile1.png"
                  alt=""
                />
                <div class="card-body">
                  <!-- <h5 class="card-title">환자 증상</h5>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam egestas sed sem ut malesuada.
                  </p> -->
                  <button
                    class="btn btn-primary btn-block"
                    @click="joinSession()"
                  >
                    진료실 입장
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="animat-block">
            <div class="bg_circle">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="cross"></div>
            <div class="cross1"></div>
            <div class="cross2"></div>
            <div class="dot"></div>
            <div class="dot1"></div>
            <div class="top-circle"></div>
            <div class="center-circle"></div>
            <div class="bottom-circle1"></div>
            <div class="right-circle"></div>
            <div class="right-circle1"></div>
            <div class="quarterCircle"></div>
            <img
              class="cloud-logo"
              src="@/assets/images/login_signup/2.png"
              alt="login logo"
            /><img
              class="cloud-logo1"
              src="@/assets/images/login_signup/2.png"
              alt="login logo"
            /><img
              class="cloud-logo2"
              src="@/assets/images/login_signup/2.png"
              alt="login logo"
            /><img
              class="cloud-logo3"
              src="@/assets/images/login_signup/2.png"
              alt="login logo"
            /><img
              class="cloud-logo4"
              src="@/assets/images/login_signup/2.png"
              alt="login logo"
            /><img
              class="cloud-logo5"
              src="@/assets/images/login_signup/2.png"
              alt="login logo"
            />
          </div>
        </div>
        <!--SignUp Classic end -->
        <!-- <img
          src="@/assets/images/videocall/closeDoor.jpg"
          alt=""
          class="static"
          style="width: 80%; heigt: 80%; display: inline"
          onmouseover="this.style.display='none';"
          onmouseout="this.style.display='inline';"
        /> -->
        <!-- <img
          src="@/assets/images/videocall/heaven-opendoor.gif"
          alt=""
          class="animated"
          style="display: inline-block; width: 80%; heigt: 80%"
        /> -->
      </div>

      <!-- <div id="join-dialog" class="jumbotron vertical-center">
        <h1>Join a video session</h1>
        <div class="form-group">
          <p>
            <label>Participant</label>
            <input
              v-model="myUserName"
              class="form-control"
              type="text"
              required
            />
          </p>
          <p>
            <label>Session</label>
            <input
              v-model="mySessionId"
              class="form-control"
              type="text"
              required
            />
          </p>
          <p class="text-center">
            <button class="btn btn-lg btn-success" @click="joinSession()">
              Join!
            </button>
          </p>
        </div>
      </div> -->
    </div>

    <div id="session" v-if="session">
      <div id="session-header">
        <h1 id="session-title">{{ mySessionId }}</h1>

        <a v-on:click="leaveSession()">
          <img src="@/assets/images/videocall/exit.png" />
        </a>

        <a v-if="videoMute == true" v-on:click="videoOn()">
          <img
            src="@/assets/images/videocall/video.png"
            style="filter: opacity(0.6) drop-shadow(0 0 0 red)"
          />
        </a>
        <a v-else v-on:click="videoOff()">
          <img src="@/assets/images/videocall/no-video.png" />
        </a>

        <a v-if="audioMute == true" v-on:click="audioOn()">
          <img
            src="@/assets/images/videocall/audio.png"
            style="filter: opacity(0.6) drop-shadow(0 0 0 blue)"
          />
        </a>
        <a v-else v-on:click="audioOff()">
          <img src="@/assets/images/videocall/no-audio.png" />
        </a>

        <a v-if="sttOff == true" v-on:click="audioOn()">
          <img
            src="@/assets/images/videocall/audio.png"
            style="filter: opacity(0.6) drop-shadow(0 0 0 blue)"
          />
        </a>
        <a v-else v-on:click="audioOff()">
          <img src="@/assets/images/videocall/no-audio.png" />
        </a>

        <!-- <input
          class="btn btn-large btn-danger"
          type="button"
          id="buttonLeaveSession"
          @click="leaveSession"
          value="Leave session"
        />
        <input
          class="btn btn-large btn-danger"
          type="button"
          id="buttonVideo"
          @click="videoController"
          value="mute Video"
        />

        <input
          class="btn btn-large btn-danger"
          type="button"
          id="buttonAudio"
          @click="audioController"
          value="mute Audio"
        /> -->
        <!-- <ul>
          <li v-for="chat in chatList" v-bind:key="chat.chatSeq">
            <p>chatSeq : {{ chat.chatSeq }}</p>
            <p>timeStamp : {{ chat.timeStamp }}</p>
            <p>date : {{ chat.date }}</p>
            <p>user : {{ chat.user }}</p>
            <p>message : {{ chat.message }}</p>
          </li>
        </ul> -->

        <input v-model="message" placeholder="message" />

        <input
          class="btn btn-large btn-danger"
          type="button"
          id="buttonSendChat"
          @click="sendChatTest"
          value="sendChatTest"
        />
      </div>
      <div style="display: flex">
        <!-- <div id="main-video" class="col-md-6">
          <user-video :stream-manager="mainStreamManager" />
        </div> -->

        <div id="video-container" class="col-md-6">
          <!-- <user-video
          :stream-manager="publisher"
          @click.native="updateMainVideoStreamManager(publisher)"
        /> -->
          <canvas id="canvas"></canvas>
          <user-video
            v-for="sub in subscribers"
            :key="sub.stream.connection.connectionId"
            :stream-manager="sub"
            @click.native="updateMainVideoStreamManager(sub)"
            v-
          />
        </div>
      </div>
      <div>
        <horizontal-scroll>
          <sign-card
            v-for="(card,i) in cardList"
            :key="card.index"
            :imageUrl="card.name"
            :cardList="cardList"
            :index="i"
          />
        </horizontal-scroll>
      </div>
      <input type="button" id="ssbtn" class="ssbtn" @click="sendSign"/>
    </div>
  </div>
</template>

<style>
.hov-anim-box .animated {
  display: none;
}

.hov-anim-box:hover .animated {
  display: inline;
}

.hov-anim-box:hover .static {
  display: none;
}
#ssbtn {
  background: url("@/assets/images/send.png");
  border: none;
  width: 90px;
  height: 34px;
  outline: 0;
}
#ssbtn:active{
  background: url("@/assets/images/send2.png");
}
</style>

<script>
import axios from "axios";
import { OpenVidu } from "openvidu-browser";
import UserVideo from "./components/UserVideo";
import { mapState } from "vuex";
import SignCard from "./signcard";
import CreateRoom from "@/components/room/createRoom.vue";
import HorizontalScroll from 'vue-horizontal-scroll'
import 'vue-horizontal-scroll/dist/vue-horizontal-scroll.css'

import * as tf from "@tensorflow/tfjs";

axios.defaults.headers.post["Content-Type"] = "application/json";

const weights = "/web_model/model.json";

const names = ["ache", "cough", "head", "snot", "neck", "chest", "stomach", "digest", "sweat", "strange", "swell", "cold", "dizzy", "itchy"];

const [modelWeight, modelHeight] = [640, 640];

const OPENVIDU_SERVER_URL = "https://i6e206.p.ssafy.io";
const OPENVIDU_SERVER_SECRET = "Z5YF9UcUB9";
export default {
  name: "App",
  components: {
    UserVideo,
    CreateRoom,
    SignCard,
    HorizontalScroll,
  },

  data() {
    return {
      OV: undefined,
      session: undefined, // store??? 저장하면 되지 않을까??
      mainStreamManager: undefined,
      publisher: undefined,
      subscribers: [],
      userAudioSource: undefined,
      userVideoSource: undefined,
      videoMute: true,
      audioMute: true,
      sttOff: true,
      mySessionId: "SessionA11",
      myUserName: "Participant" + Math.floor(Math.random() * 100),
      message: "",
      chatSeq: 0,
      chatList: [],
      state: {
        model: null,
        preview: "",
        predictions: [],
      },
      signMap: new Map(),
      cardList: [],
    };
  },
  async mounted() {
    // const model = await tf.loadGraphModel("indexeddb://my-model");

    // var model_url =
    //   "https://staticfileserver.herokuapp.com/web_model/model.json";
    // await tf.loadGraphModel(model_url).then((model) => {
    //   model.save("indexeddb://my-model");
    //   tf.loadGraphModel("indexeddb://my-model").then((model2) => {
    //     this.state.model = model2;
    //   });
    // });
    // tf.loadGraphModel(weights).then((model) => {
    //   console.log(model)
    //   this.state.model = model;
    // });
    // this.signMap.set('ache','아프다')
    // this.signMap.set('cough','기침')
    // this.signMap.set('head','머리')
    // this.signMap.set('snot','콧물')
    // this.signMap.set('neck','목')
    // this.signMap.set('chest','가슴')
    // this.signMap.set('stomach','배')
    // this.signMap.set('digest','소화')
    // this.signMap.set('sweat','땀')
    // this.signMap.set('strange','이상하다')
    // this.signMap.set('swell','부어오르다')
    // this.signMap.set('cold','춥다')
    // this.signMap.set('dizzy','어지럽다')
    // this.signMap.set('itchy','가렵다')
  },
  computed: {
    // ...mapState(["sessionStore"]),
  },
  methods: {
    // Vuex
    // ...mapMutations(["SET_SESSION"]),
    // Vuex
    cropToCanvas: (image, canvas, ctx) => {
      // canvas.width = image.width;
      // canvas.height = image.height;

      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 0, 0, 640, 640);
    },
    joinSession() {
      // --- Get an OpenVidu object ---
      this.OV = new OpenVidu();
      tf.loadGraphModel(weights).then((model) => {
        console.log(model)
        this.state.model = model;
      });

      this.signMap.set('ache','아파요')
      this.signMap.set('cough','기침')  
      this.signMap.set('head','머리')
      this.signMap.set('snot','콧물')
      this.signMap.set('neck','목')
      this.signMap.set('chest','가슴')
      this.signMap.set('stomach','배')
      this.signMap.set('digest','소화')
      this.signMap.set('sweat','땀')
      this.signMap.set('strange','이상해요')
      this.signMap.set('swell','부었어요')
      this.signMap.set('cold','춥다')
      this.signMap.set('dizzy','어지러워요')
      this.signMap.set('itchy','가려워요')

      // --- Init a session ---
      this.session = this.OV.initSession();
      this.addSessionOn();
      // this.setActiveUser;
      this.setLocalName(this.myUserName);
      console.log("store log - " + this.sessionStore);
      // --- Specify the actions when events take place in the session ---

      // On every new Stream received...
      this.session.on("streamCreated", ({ stream }) => {
        const subscriber = this.session.subscribe(stream);
        this.subscribers.push(subscriber);

        // remote user
        // console.log("[sub] : " + JSON.stringify(subscriber));
        // for (output in subscriber) {
        //   console.log("노드 값: " + JSON.stringify(output));
        // }

        // console.log("[sub] : " + subscriber.stream.connection.data);
        var afterStr = subscriber.stream.connection.data.split(":");
        var userName = afterStr[1].slice(1, afterStr[1].length - 2);
        // console.log("[userName] " + userName);
        this.setRomoteName(userName);
      });

      // On every Stream destroyed...
      this.session.on("streamDestroyed", ({ stream }) => {
        const index = this.subscribers.indexOf(stream.streamManager, 0);
        if (index >= 0) {
          this.subscribers.splice(index, 1);
        }
      });

      // On every asynchronous exception...
      this.session.on("exception", ({ exception }) => {
        console.warn(exception);
      });

      // Receiver of the message (usually before calling 'session.connect')
      this.session.on("signal:my-chat", (event) => {
        this.chatSeq = this.chatSeq + 1;
        var chat = {
          chatSeq: this.chatSeq,
          timeStamp: Date.now(),
          date: new Date(),
          creationTime: event.from.creationTime,
          user: event.from.data,
          message: event.data,
        };
        this.chatList.push(chat);
        var afterStr = event.from.data.split(":");
        var userName = afterStr[1].slice(1, afterStr[1].length - 2);
        if (this.myUserName == userName) {
        } else {
          this.$store.dispatch("chat/addChat", {
            sender: 1,
            msg: event.data,
          });
        }

        // alert("보낸사람 - " + event.from.data + "\n 메시지 - " + event.data);
        console.log("Message :" + event.data); // Message
        console.log("Connection object of the sender :" + event.from); // Connection object of the sender
        console.log("The type of message :" + event.type); // The type of message ("my-chat")
      });

      // --- Connect to the session with a valid user token ---

      var self = this;
      // 'getToken' method is simulating what your server-side should do.
      // 'token' parameter should be retrieved and returned by your own backend
      this.getToken(this.mySessionId).then((token) => {
        this.session
          .connect(token, { clientData: this.myUserName })
          .then(() => {
            // --- Get your own camera stream with the desired properties ---
            var lastDetected = undefined;
            // --- Get your own camera stream with the desired properties ---
            var constraints = {
              audio: true,
              video: { width: 640, height: 640 },
            };
            var FRAME_RATE = 30;
            navigator.mediaDevices
              .getUserMedia(constraints)
              .then(function (mediaStream) {
                var videoTrack = mediaStream.getVideoTracks()[0];
                var video = document.createElement("video");
                video.srcObject = new MediaStream([videoTrack]);

                var canvas = document.getElementById("canvas");

                canvas.width = 480;
                canvas.height = 480;
                var ctx = canvas.getContext("2d");

                video.onloadedmetadata = function (e) {
                  video.addEventListener("play", () => {
                    var loop = () => {
                      if (!video.paused && !video.ended) {
                        self.cropToCanvas(video, canvas, ctx);
                        tf.engine().startScope();
                        const input = tf.tidy(() => {
                          return tf.image
                            .resizeBilinear(tf.browser.fromPixels(video), [
                              modelWeight,
                              modelHeight,
                            ])
                            .div(255.0)
                            .expandDims(0);
                        });
                        self.state.model.executeAsync(input).then((res) => {
                          const font = "16px sans-serif";
                          ctx.font = font;
                          ctx.textBaseline = "top";

                          const [boxes, scores, classes, valid_detections] =
                            res;
                          const boxes_data = boxes.dataSync(); //검출된 바운딩 박스
                          const scores_data = scores.dataSync(); //검출 정확도
                          const classes_data = classes.dataSync(); //해당하는 클래스
                          const valid_detections_data =
                            valid_detections.dataSync()[0]; // 검축된 박스의 개수
                          tf.dispose(res);
                          var i;
                          for (i = 0; i < valid_detections_data; ++i) {
                            var score = scores_data[i].toFixed(2);
                            if(score > 0.9){
                              let [x1, y1, x2, y2] = boxes_data.slice(
                                i * 4,
                                (i + 1) * 4
                              );
                              x1 *= canvas.width;
                              x2 *= canvas.width;
                              y1 *= canvas.height;
                              y2 *= canvas.height;
                              const width = x2 - x1;
                              const height = y2 - y1;
                              const klass = names[classes_data[i]];
                              const score = scores_data[i].toFixed(2);

                              // Draw the bounding box.
                              ctx.strokeStyle = "#00FFFF";
                              ctx.lineWidth = 4;
                              ctx.strokeRect(x1, y1, width, height);

                              // Draw the label background.
                              ctx.fillStyle = "#00FFFF";
                              const textWidth = ctx.measureText(
                                klass + ":" + score
                              ).width;
                              const textHeight = parseInt(font, 10); // base 10
                              ctx.fillRect(x1, y1, textWidth + 4, textHeight + 4);
                            }
                          }
                          for (i = 0; i < valid_detections_data; ++i) {
                            var score = scores_data[i].toFixed(2);
                            if(score > 0.9){
                              let [x1, y1, ,] = boxes_data.slice(
                                i * 4,
                                (i + 1) * 4
                              );
                              x1 *= canvas.width;
                              y1 *= canvas.height;
                              const klass = names[classes_data[i]];
                              //가장 최근에 인식된 수어와 현재 인식된 수어를 비교하여 다를 경우 번역 (연속적으로 같은 수화를 인식 하기 때문에 가장 최근과 다를 경우만 번역)
                              if(lastDetected != klass){
                                lastDetected = klass
                                console.log(klass)
                                console.log(self.signMap.get(klass))
                                self.cardList.push({name: klass, index: self.cardList.length})
                                console.log(self.cardList)
                              }
                              // Draw the text last to ensure it's on top.
                              ctx.fillStyle = "#000000";
                              ctx.fillText(klass + ":" + score, x1, y1);
                            }
                          }
                        });
                        ctx.drawImage(video, 0, 0, 480, 480);
                        setTimeout(loop, 1000 / FRAME_RATE); // Drawing at 10 fps
                        tf.engine().endScope();
                      }
                    };
                    loop();
                  });
                  video.msHorizontalMirror = true;
                  video.play();
                  var signVideoTrack = canvas
                    .captureStream(FRAME_RATE)
                    .getVideoTracks()[0];

                  var publisher = self.OV.initPublisher(undefined, {
                    audioSource: this.userAudioSource, // The source of audio. If undefined default microphone
                    videoSource: signVideoTrack, // The source of video. If undefined default webcam
                    publishAudio: true, // Whether you want to start publishing with your audio unmuted or not
                    publishVideo: true, // Whether you want to start publishing with your video enabled or not
                    resolution: "480x480", // The resolution of your video
                    frameRate: 30, // The frame rate of your video
                    insertMode: "APPEND", // How the video is inserted in the target element 'video-container'
                    mirror: false, // Whether to mirror your local video or not
                  });
                  self.mainStreamManager = publisher;
                  self.publisher = publisher;
                  // --- Publish your stream ---
                  self.session.publish(self.publisher);
                };
              })
              .catch(function (err) {
                console.log(err.name + ": " + err.message);
              }); // always check for errors at the end.
            // --- Get your own camera stream with the desired properties ---
            // let publisher = this.OV.initPublisher(undefined, {
            // 	audioSource: undefined, // The source of audio. If undefined default microphone
            // 	videoSource: undefined, // The source of video. If undefined default webcam
            // 	publishAudio: true,  	// Whether you want to start publishing with your audio unmuted or not
            // 	publishVideo: true,  	// Whether you want to start publishing with your video enabled or not
            // 	resolution: '640x480',  // The resolution of your video
            // 	frameRate: 30,			// The frame rate of your video
            // 	insertMode: 'APPEND',	// How the video is inserted in the target element 'video-container'
            // 	mirror: false       	// Whether to mirror your local video or not
            // });
            // this.mainStreamManager = publisher;
            // this.publisher = publisher;
            // console.log(this.publisher)
            // --- Publish your stream ---

            // this.session.publish(this.publisher);
          })
          .catch((error) => {
            console.log(
              "There was an error connecting to the session:",
              error.code,
              error.message
            );
          })
          .finally(() => {
            this.addVideoCss();
          });
      });

      window.addEventListener("beforeunload", this.leaveSession);
    },

    leaveSession() {
      // --- Leave the session by calling 'disconnect' method over the Session object ---
      if (this.session) this.session.disconnect();

      this.session = undefined;
      this.mainStreamManager = undefined;
      this.publisher = undefined;
      this.subscribers = [];
      this.OV = undefined;

      window.removeEventListener("beforeunload", this.leaveSession);
      this.addSessionOff();
    },

    updateMainVideoStreamManager(stream) {
      if (this.mainStreamManager === stream) return;
      this.mainStreamManager = stream;
    },

    /**
     * --------------------------
     * SERVER-SIDE RESPONSIBILITY
     * --------------------------
     * These methods retrieve the mandatory user token from OpenVidu Server.
     * This behavior MUST BE IN YOUR SERVER-SIDE IN PRODUCTION (by using
     * the API REST, openvidu-java-client or openvidu-node-client):
     *   1) Initialize a Session in OpenVidu Server	(POST /openvidu/api/sessions)
     *   2) Create a Connection in OpenVidu Server (POST /openvidu/api/sessions/<SESSION_ID>/connection)
     *   3) The Connection.token must be consumed in Session.connect() method
     */

    getToken(mySessionId) {
      return this.createSession(mySessionId).then((sessionId) =>
        this.createToken(sessionId)
      );
    },

    // See https://docs.openvidu.io/en/stable/reference-docs/REST-API/#post-openviduapisessions
    createSession(sessionId) {
      return new Promise((resolve, reject) => {
        axios
          .post(
            `${OPENVIDU_SERVER_URL}/openvidu/api/sessions`,
            JSON.stringify({
              customSessionId: sessionId,
            }),
            {
              auth: {
                username: "OPENVIDUAPP",
                password: OPENVIDU_SERVER_SECRET,
              },
            }
          )
          .then((response) => response.data)
          .then((data) => resolve(data.id))
          .catch((error) => {
            if (error.response.status === 409) {
              resolve(sessionId);
            } else {
              console.warn(
                `No connection to OpenVidu Server. This may be a certificate error at ${OPENVIDU_SERVER_URL}`
              );
              if (
                window.confirm(
                  `No connection to OpenVidu Server. This may be a certificate error at ${OPENVIDU_SERVER_URL}\n\nClick OK to navigate and accept it. If no certificate warning is shown, then check that your OpenVidu Server is up and running at "${OPENVIDU_SERVER_URL}"`
                )
              ) {
                location.assign(`${OPENVIDU_SERVER_URL}/accept-certificate`);
              }
              reject(error.response);
            }
          });
      });
    },

    // See https://docs.openvidu.io/en/stable/reference-docs/REST-API/#post-openviduapisessionsltsession_idgtconnection
    createToken(sessionId) {
      return new Promise((resolve, reject) => {
        axios
          .post(
            `${OPENVIDU_SERVER_URL}/openvidu/api/sessions/${sessionId}/connection`,
            {},
            {
              auth: {
                username: "OPENVIDUAPP",
                password: OPENVIDU_SERVER_SECRET,
              },
            }
          )
          .then((response) => response.data)
          .then((data) => resolve(data.token))
          .catch((error) => reject(error.response));
      });
    },

    videoOn() {
      this.videoMute = false;
      this.publisher.publishVideo(this.videoMute);
    },
    videoOff() {
      this.videoMute = true;
      this.publisher.publishVideo(this.videoMute);
    },

    audioOn() {
      this.audioMute = false;
      this.publisher.publishAudio(this.audioMute);
    },
    audioOff() {
      this.audioMute = true;
      this.publisher.publishAudio(this.audioMute);
    },
    audioController() {
      this.audioMute = !this.audioMute;
      this.publisher.publishAudio(this.audioMute);
    },
    sendChat(msg) {
      // this.addVideoCss();
      if (msg != "") {
        this.session
          .signal({
            data: msg, // Any string (optional)
            to: [], // Array of Connection objects (optional. Broadcast to everyone if empty)
            type: "my-chat", // The type of message (optional)
          })
          .then(() => {
            // this.message = "";
            console.log("Message successfully sent");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
    sendSign() {
      var msg="";
      var self = this;
      this.cardList.forEach(function(element){
        msg += self.signMap.get(element.name)+" "
      });
      if (msg != "") {
        this.session
          .signal({
            data: msg, // Any string (optional)
            to: [], // Array of Connection objects (optional. Broadcast to everyone if empty)
            type: "my-chat", // The type of message (optional)
          })
          .then(() => {
            // this.message = "";
            console.log("Message successfully sent");
          })
          .catch((error) => {
            console.error(error);
          });
      }
      this.cardList = [];
    },
    sendChatTest() {
      if (this.message != "") {
        this.session
          .signal({
            data: this.message, // Any string (optional)
            to: [], // Array of Connection objects (optional. Broadcast to everyone if empty)
            type: "my-chat", // The type of message (optional)
          })
          .then(() => {
            this.message = "";
            console.log("Message successfully sent");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
    addVideoCss: function () {
      // document.getElementById("video").style.borderRadius = "20px";
      var videos = document.querySelectorAll("video");
      videos.forEach((element) => (element.style.borderRadius = "20px"));
    },
    addSessionOn: function () {
      this.$store.commit("chat/addSession", true);
    },
    addSessionOff: function () {
      this.$store.commit("chat/addSession", false);
    },
    setActiveUser: function () {
      this.$store.commit("chat/setActiveuser", 0);
    },
    setLocalName: function (payload) {
      this.$store.commit("chat/setLocalName", payload);
    },
    setRomoteName: function (payload) {
      this.$store.commit("chat/setRemoteName", payload);
    },

    gotDevices: function (deviceInfos) {
      const audioInputSelect = document.querySelector("select#audioSource");
      const audioOutputSelect = document.querySelector("select#audioOutput");
      const videoSelect = document.querySelector("select#videoSource");
      const selectors = [audioInputSelect, audioOutputSelect, videoSelect];
      // const selectors = [audioInputSelect, videoSelect];

      // Handles being called several times to update labels. Preserve values.
      const values = selectors.map((select) => select.value);
      selectors.forEach((select) => {
        while (select.firstChild) {
          select.removeChild(select.firstChild);
        }
      });
      for (let i = 0; i !== deviceInfos.length; ++i) {
        const deviceInfo = deviceInfos[i];
        const option = document.createElement("option");
        option.value = deviceInfo.deviceId;
        if (deviceInfo.kind === "audioinput") {
          option.text =
            deviceInfo.label || `microphone ${audioInputSelect.length + 1}`;
          audioInputSelect.appendChild(option);
        } else if (deviceInfo.kind === "audiooutput") {
          option.text =
            deviceInfo.label || `speaker ${audioOutputSelect.length + 1}`;
          audioOutputSelect.appendChild(option);
        } else if (deviceInfo.kind === "videoinput") {
          option.text = deviceInfo.label || `camera ${videoSelect.length + 1}`;
          videoSelect.appendChild(option);
        } else {
          console.log("Some other kind of source/device: ", deviceInfo);
        }
      }
      selectors.forEach((select, selectorIndex) => {
        if (
          Array.prototype.slice
            .call(select.childNodes)
            .some((n) => n.value === values[selectorIndex])
        ) {
          select.value = values[selectorIndex];
        }
      });
    },
  },

  computed: {
    ...mapState({
      addNewChat: (state) => state.chat.newChat.text,
    }),
  },
  watch: {
    addNewChat() {
      this.sendChat(this.addNewChat);
      console.log("new chatting");
    },
  },
  mounted() {
    console.log("Parent mounted");
    console.log(navigator);
    navigator.mediaDevices.enumerateDevices().then(this.gotDevices).catch();
  },
};
</script>
