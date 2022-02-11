<template>
  <div>
    <!-- slider start -->
    <section class="slider-block">
      <div class="custom-container">
        <div class="row">
          <div class="col-12">
            <div class="slider-main">
              <div class="slider-contain">
                <h1>온라인 진료실</h1>
                <h4>
                  <span>진료 5분 전부터 입장 가능합니다 </span>– Easy to use our
                  chat app, Attractive and<br />
                  clean design, with many Features Dark & light, Recent Chat And
                  many more.......
                </h4>
                <div class="downlaod">
                  <div class="footer-btn">
                    <nuxt-link to="/room/createRoom">
                      <a @click="enterRoom" v-if="!isDoctor" class="btn active"
                        >진료실 입장</a
                      >
                    </nuxt-link>
                    <a @click="makeRoom" v-if="isDoctor" class="btn active"
                      >진료실 생성</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        class="img-fluid chat-slide"
        src="../../assets/images/landing/2.png"
        alt="inner"
      />
      <img
        class="img-fluid inner1"
        src="../../assets/images/landing/header/1.png"
        alt="inner1"
      />
    </section>
  </div>

  <!-- slider end -->
</template>

<script>
import Vue from "vue";
import VueAlertify from "vue-alertify";

Vue.use(VueAlertify);

export default {
  data() {
    return {
      enterRoomModal: null,
    };
  },

  computed: {
    isDoctor() {
      return this.$store.getters["login/isDoctor"];
    },
  },

  mounted() {},
  methods: {
    makeRoom() {
      this.$nuxt.$options.router.push("/room/createRoom");
    },
    enterRoom() {
      if (!this.$store.state.login.isLogin) {
        this.$alertify.error("로그인 후 이용해주세요!");
        this.$nuxt.$options.router.push("/authentication/login");
      }
    },
  },
};
</script>

<style></style>
