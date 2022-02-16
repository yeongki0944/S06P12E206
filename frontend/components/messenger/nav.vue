<template>
  <!-- Main Left Sidebar Menu start -->
  <nav class="main-nav custom-scroll" :class="toggleleftside">
    <div class="logo-warpper">
      <a>
        <nuxt-link to="/">
          <img src="../../assets/images/logo/logo.png" alt="logo" />
        </nuxt-link>
      </a>
    </div>
    <div class="sidebar-main">
      <ul
        class="sidebar-bottom"
        style="display: flex; flex-direction: column; justify-content: center"
      >
        <!-- 마이페이지 연결해야함 -->
        <div>
          <li>
            <nuxt-link
              to="/authentication/login"
              class="icon-btn btn-light button-effect"
            >
              <i
                class="fa fa-user"
                v-b-tooltip.hover.topright
                title="내 정보"
                data-tippy-content=" 내 정보"
              ></i>
            </nuxt-link>
          </li>
          <div style="width: 100px; text-align: center; margin-top: 10px">
            내정보
          </div>
        </div>
        <div v-if="this.roomCreated">
          <div>
            <li>
              <a
                class="icon-btn btn-light button-effect"
                v-on:click="this.leaveSession"
              >
                <i
                  class="fa fa-power-off"
                  v-b-tooltip.hover.topright
                  title="진료실 나가기"
                  data-tippy-content="진료실 나가기"
                ></i>
              </a>
            </li>
            <div style="width: 100px; text-align: center; margin-top: 10px">
              진료실 나가기
            </div>
          </div>

          <div>
            <li>
              <a
                class="icon-btn btn-light button-effect"
                v-on:click="this.videoController"
              >
                <i
                  class="fa fa-camera"
                  v-b-tooltip.hover.topright
                  title="Video"
                  data-tippy-content="Video"
                ></i>
              </a>
            </li>
            <div
              style="width: 100px; text-align: center; margin-top: 10px"
              v-if="this.videoOn"
            >
              Camera On
            </div>
            <div
              style="width: 100px; text-align: center; margin-top: 10px"
              v-else
            >
              Camera Off
            </div>
          </div>

          <div>
            <li>
              <a
                class="icon-btn btn-light button-effect"
                v-on:click="this.micController"
              >
                <i
                  class="fa fa-microphone"
                  v-b-tooltip.hover.topright
                  title="MIC"
                  data-tippy-content="MIC"
                  v-if="this.micOn"
                ></i>
                <i
                  class="fa fa-microphone-slash"
                  v-b-tooltip.hover.topright
                  title="MIC"
                  data-tippy-content="MIC"
                  v-else
                ></i>
              </a>
            </li>
            <div
              style="width: 100px; text-align: center; margin-top: 10px"
              v-if="this.micOn"
            >
              MIC On
            </div>
            <div
              style="width: 100px; text-align: center; margin-top: 10px"
              v-else
            >
              MIC Off
            </div>
          </div>
          <div v-if="!this.isDoctorGetters">
            <li>
              <a
                class="icon-btn btn-light button-effect"
                v-on:click="this.signController"
              >
                <i
                  class="fa fa-paper-plane"
                  v-b-tooltip.hover.topright
                  title="수화 단어 보내기"
                  data-tippy-content="수화 단어 보내기"
                ></i>
              </a>
            </li>
            <div style="width: 100px; text-align: center; margin-top: 10px">
              수화 단어 보내기
            </div>
          </div>
        </div>
      </ul>
    </div>
  </nav>
  <!-- Main Left Sidebar Menu end -->
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      mixLayout: "",
      status: "avtar/2.jpg",
      styleObject: {
        "background-size": "cover",
        "background-position": "center",
        display: "block",
      },
      // videoOn: true,
      // micOn: true,
    };
  },
  computed: {
    ...mapState({
      toggleleftside: (state) => state.common.toggleleftside,
      activesidebar: (state) => state.common.activesidebar,
      videoOn: (state) => state.chat.cameraState,
      micOn: (state) => state.chat.micState,
      session: (state) => state.chat.leaveSession,
      roomCreated: (state) => state.chat.session,
      signOn: (state) => state.openvidu.signwordsend,
    }),
    isDoctorGetters() {
      return this.$store.getters["login/isDoctor"];
    },
  },
  methods: {
    getImgUrl(path) {
      return require("@/assets/images/" + path);
    },
    activemenu(id) {
      this.$store.state.common.activesidebar = id;
    },
    customizeMixLayout() {
      if (this.mixLayout === "") {
        this.mixLayout = "dark";
      } else {
        this.mixLayout = "";
      }
      this.$store.dispatch("layout/setLayout", this.mixLayout);
    },
    leaveSession() {
      this.$store.commit("chat/setLeaveSession", !this.session);

      // alert("leaveSession");
    },
    videoController() {
      this.$store.commit("chat/setCameraState", !this.videoOn);
      // alert("video");
    },
    micController() {
      this.$store.commit("chat/setMicState", !this.micOn);
      // alert("mic");
    },
    signController() {
      this.$store.commit("openvidu/setSignWordSend", !this.signOn);
    },
  },
};
</script>
