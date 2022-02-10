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
      <ul class="sidebar-bottom">
        <!-- 마이페이지 연결해야함 -->
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
        <li>
          <nuxt-link
            to="/authentication/login"
            class="icon-btn btn-light button-effect"
          >
            <i
              class="fa fa-power-off"
              v-b-tooltip.hover.topright
              title="로그아웃"
              data-tippy-content=" 로그아웃"
            ></i>
          </nuxt-link>
        </li>

        <li>
          <nuxt-link
            to="/authentication/login"
            class="icon-btn btn-light button-effect"
          >
            <i
              class="fa fa-power-off"
              v-b-tooltip.hover.topright
              title="video-on"
              data-tippy-content=" video-on"
            ></i>
          </nuxt-link>

          <nuxt-link
            to="/authentication/login"
            class="icon-btn btn-light button-effect"
          >
            <i
              class="fa-solid fa-video"
              v-b-tooltip.hover.topright
              title="video-on"
              data-tippy-content=" video-on"
            ></i>
          </nuxt-link>
        </li>
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
