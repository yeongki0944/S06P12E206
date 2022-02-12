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

        <div>
          <li>
            <nuxt-link
              to="/authentication/login"
              class="icon-btn btn-light button-effect"
            >
              <i
                class="fa fa-power-off"
                v-b-tooltip.hover.topright
                title="진료실 나가기"
                data-tippy-content="진료실 나가기"
              ></i>
            </nuxt-link>
          </li>
          <div style="width: 100px; text-align: center; margin-top: 10px">
            진료실 나가기
          </div>
        </div>

        <div>
          <li>
            <nuxt-link
              to="/authentication/login"
              class="icon-btn btn-light button-effect"
            >
              <i
                class="fa fa-camera"
                v-b-tooltip.hover.topright
                title="Video"
                data-tippy-content="Video"
              ></i>
            </nuxt-link>
          </li>
          <div style="width: 100px; text-align: center; margin-top: 10px">
            Camera
          </div>
        </div>

        <div>
          <li>
            <nuxt-link
              to="/authentication/login"
              class="icon-btn btn-light button-effect"
            >
              <i
                class="fa fa-camera-slash"
                v-b-tooltip.hover.topright
                title="Camera"
                data-tippy-content="Camera"
              ></i>
            </nuxt-link>
          </li>
          <div style="width: 100px; text-align: center; margin-top: 10px">
            Camera
          </div>
        </div>
        <div>
          <li>
            <nuxt-link
              to="/authentication/login"
              class="icon-btn btn-light button-effect"
            >
              <i
                class="fa fa-microphone"
                v-b-tooltip.hover.topright
                title="MIC"
                data-tippy-content="MIC"
              ></i>
            </nuxt-link>
          </li>
          <div style="width: 100px; text-align: center; margin-top: 10px">
            MIC
          </div>
        </div>
        <div>
          <li>
            <nuxt-link
              to="/authentication/login"
              class="icon-btn btn-light button-effect"
            >
              <i
                class="fa fa-microphone-slash"
                v-b-tooltip.hover.topright
                title="MIC"
                data-tippy-content="MIC"
              ></i>
            </nuxt-link>
          </li>
          <div style="width: 100px; text-align: center; margin-top: 10px">
            MIC
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
    };
  },
  computed: {
    ...mapState({
      toggleleftside: (state) => state.common.toggleleftside,
      activesidebar: (state) => state.common.activesidebar,
    }),
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
  },
};
</script>
