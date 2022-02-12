<template>
  <!--Direct Chat User start -->
  <div>
    <li
      :class="{ active: activeIndex === index }"
      v-for="(user, index) in chatuser"
      :key="user.id"
      @click="setActive(index), setActiveuser(user.id)"
    >
      <div class="chat-box">
        <div
          :class="user.profile"
          :style="[
            { 'background-image': 'url(' + getImgUrl(user.img) + ')' },
            styleObject,
          ]"
        ></div>
        <div class="details">
          <h5>{{ user.name }}</h5>
          <h6>{{ user.status }}</h6>
        </div>
        <div class="date-status">
          <i class="ti-pin2"></i>
          <h6>{{ user.date }}</h6>
          <div v-html="user.active"></div>
        </div>
      </div>
    </li>
  </div>
  <!--Direct Chat User end -->
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      activeIndex: 0,
      styleObject: {
        "background-size": "cover",
        "background-position": "center",
        display: "block",
      },
    };
  },
  computed: {
    ...mapState({
      chatuser: (state) => state.chat.users,
      activechatType: (state) => state.common.activechatType,
    }),
  },
  methods: {
    getImgUrl(path) {
      return require("../../../../assets/images/" + path);
    },
    setActiveuser: function(id) {
      this.$store.dispatch("chat/setActiveuser", id);
      if (process.client) {
        this.width = window.innerWidth;
        if (this.width < 992) {
          document
            .querySelector(".sidebar-toggle")
            .classList.add("mobile-menu");
        }
      } else {
        return null;
      }
      this.$store.state.common.showsticker = false;
      this.$store.state.common.showemogi = false;
      this.$store.state.common.showcontactcontent = false;
    },
    setActive(index) {
      this.activeIndex = index;
    },
  },
};
</script>
