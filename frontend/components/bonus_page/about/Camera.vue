<template>
  <div id="main-container" class="container">
    <div id="join" v-if="!session">
      <div id="img-div">
        <img src="resources/images/openvidu_grey_bg_transp_cropped.png" />
      </div>
      <div id="join-dialog" class="jumbotron vertical-center">
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
      </div>
    </div>

    <div id="session" v-if="session">
      <div id="session-header">
        <h1 id="session-title">{{ mySessionId }}</h1>
        <input
          class="btn btn-large btn-danger"
          type="button"
          id="buttonLeaveSession"
          @click="leaveSession"
          value="Leave session"
        />
      </div>
      <!-- <div id="main-video" class="col-md-6">
        <user-video :stream-manager="mainStreamManager" />
      </div> -->
      <div id="video-container" class="col-md-6">
        <user-video
          :stream-manager="publisher"
          @click.native="updateMainVideoStreamManager(publisher)"
        />
        <user-video
          v-for="sub in subscribers"
          :key="sub.stream.connection.connectionId"
          :stream-manager="sub"
          @click.native="updateMainVideoStreamManager(sub)"
        />
      </div>
      <div>
        <canvas id = "canvas"></canvas>
        <video id = "video"></video>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { OpenVidu } from "openvidu-browser";
import UserVideo from "./components/UserVideo";

import * as tf from '@tensorflow/tfjs'

const weights = '/web_model/model.json';
// var start = null;
// let video = undefined;
const names = ['ache', 'cough', 'head', 'snot']

const [modelWeight, modelHeight] = [640, 640];

axios.defaults.headers.post["Content-Type"] = "application/json";

const OPENVIDU_SERVER_URL = "https://i6e206.p.ssafy.io";
const OPENVIDU_SERVER_SECRET = "Z5YF9UcUB9";
export default {
  name: "App",

  components: {
    UserVideo,
  },

  data() {
    return {
      OV: undefined,
      session: undefined,
      mainStreamManager: undefined,
      publisher: undefined,
      subscribers: [],

      mySessionId: "SessionA",
      myUserName: "Participant" + Math.floor(Math.random() * 100),
      state: {
				model: null,
				preview: "",
				predictions: [],
			}
    };
  },
  mounted() {
		tf.loadGraphModel(weights).then(model => {
			this.state.model = model
		});
	},
  methods: {
    cropToCanvas: (image, canvas, ctx) => {
			
			// canvas.width = image.width;
			// canvas.height = image.height;

			ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
			ctx.fillStyle = "#000000";
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			ctx.drawImage(
			image,
			0,
			0,
			640,
			640
			);

		},
    joinSession() {
      // --- Get an OpenVidu object ---
      this.OV = new OpenVidu();

      // --- Init a session ---
      this.session = this.OV.initSession();

      // --- Specify the actions when events take place in the session ---

      // On every new Stream received...
      this.session.on("streamCreated", ({ stream }) => {
        const subscriber = this.session.subscribe(stream);
        this.subscribers.push(subscriber);
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

      // --- Connect to the session with a valid user token ---
      var self = this;
      // 'getToken' method is simulating what your server-side should do.
      // 'token' parameter should be retrieved and returned by your own backend
      this.getToken(this.mySessionId).then((token) => {
        this.session
          .connect(token, { clientData: this.myUserName })
          .then(() => {
            // --- Get your own camera stream with the desired properties ---
            var constraints = { audio: true, video: { width: 640, height: 640 } };
            var FRAME_RATE = 30;
            navigator.mediaDevices.getUserMedia(constraints)
            .then(function(mediaStream) {
              var videoTrack = mediaStream.getVideoTracks()[0];
              var video = document.createElement('video');
              video.srcObject = new MediaStream([videoTrack]);
              
              var canvas = document.getElementById('canvas');
              canvas.width = 640
              canvas.height = 640
              var ctx = canvas.getContext('2d');
              video.onloadedmetadata = function(e) {
                video.addEventListener('play', () => {
                  var loop = () => {
                    if (!video.paused && !video.ended) {
                      self.cropToCanvas(video, canvas, ctx);
                      const input = tf.tidy(() => {
                        return tf.image.resizeBilinear(tf.browser.fromPixels(canvas), [modelWeight, modelHeight]).div(255.0).expandDims(0);
                      });
                      self.state.model.executeAsync(input).then(res => {
                        const font = "16px sans-serif";
                        ctx.font = font;
                        ctx.textBaseline = "top";

                        const [boxes, scores, classes, valid_detections] = res;
                        const boxes_data = boxes.dataSync(); //검출된 바운딩 박스
                        const scores_data = scores.dataSync(); //검출 정확도
                        const classes_data = classes.dataSync();//해당하는 클래스
                        const valid_detections_data = valid_detections.dataSync()[0]; // 검축된 박스의 개수
                        tf.dispose(res)
                        var i;
                        for (i = 0; i < valid_detections_data; ++i){
                          let [x1, y1, x2, y2] = boxes_data.slice(i * 4, (i + 1) * 4);
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
                          const textWidth = ctx.measureText(klass + ":" + score).width;
                          const textHeight = parseInt(font, 10); // base 10
                          ctx.fillRect(x1, y1, textWidth + 4, textHeight + 4);

                        }
                        for (i = 0; i < valid_detections_data; ++i){
                          let [x1, y1, , ] = boxes_data.slice(i * 4, (i + 1) * 4);
                          x1 *= canvas.width;
                          y1 *= canvas.height;
                          const klass = names[classes_data[i]];
                          const score = scores_data[i].toFixed(2);

                          // Draw the text last to ensure it's on top.
                          ctx.fillStyle = "#000000";
                          ctx.fillText(klass + ":" + score, x1, y1);

                        }
                      })
                      ctx.drawImage(video, 0, 0, 640, 640);
                      setTimeout(loop, 1000/ FRAME_RATE); // Drawing at 10 fps
                    }
                  };
                  loop();
                });
                video.msHorizontalMirror = true
							video.play();
							var signVideoTrack = canvas.captureStream(FRAME_RATE).getVideoTracks()[0];

							var publisher = this.OV.initPublisher(
								undefined,
								{
									audioSource: false,
									videoSource: signVideoTrack,
								});
								this.publisher = publisher;
								// --- Publish your stream ---

								this.session.publish(this.publisher);
              };
            })
            .catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.
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

						this.session.publish(this.publisher);
					})
					.catch(error => {
						console.log('There was an error connecting to the session:', error.code, error.message);
					});
			});

			window.addEventListener('beforeunload', this.leaveSession)
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
  },
};
</script>
