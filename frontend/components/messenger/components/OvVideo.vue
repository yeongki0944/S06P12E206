<template>
  <video ref="video" id="video" autoplay></video>
  <!-- <br />
        <canvas id="canvas" width = "640" height="640"></canvas> -->
</template>

<script>
// import * as tf from '@tensorflow/tfjs'

// const weights = '/web_model/model.json';
// var start = null;
// let video = undefined;
// const names = ['ache', 'cough', 'head', 'snot']

// const [modelWeight, modelHeight] = [640, 640];

export default {
  name: "OvVideo",
  components: {
    //     state: {
    // 		model: null,
    // 		preview: "",
    // 		predictions: [],
    // 		webcam: undefined,
    // }
  },
  props: {
    streamManager: Object,
    test: Boolean,
  },

  mounted() {
    if (this.streamManager.stream) {
      this.streamManager.addVideoElement(this.$refs.video);
      // this.init();
    }
    // tf.loadGraphModel(weights).then(model => {
    // 	this.model = model
    // });
  },
  updated() {
    if (this.streamManager.stream) {
      this.streamManager.addVideoElement(this.$refs.video);
    }
  },
  // methods: {
  //     async init(){
  //         video = document.getElementById("video")
  //         window.requestAnimationFrame(this.loop);
  //     },
  //     async loop(timestamp) {
  //         let videoCanvas = document.getElementById("canvas");
  //         videoCanvas.getContext("2d").drawImage(video, 0, 0, video.videoWidth, video.videoHeight); // update the webcam frame
  //         if (!start) start = timestamp;
  //         console.log("test")
  //         window.requestAnimationFrame(this.loop);
  //     }
  // },
};
</script>
