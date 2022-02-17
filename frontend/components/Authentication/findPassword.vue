<template>
  <!--SignIn Classic start -->
  <div class="login-page2 animat-rate">
    <div class="login-content-main">
      <div class="login-content">
        <div class="login-content-header">
          <img
            class="img-fluid"
            src="../../assets/images/logo/landing-logo.png"
            alt="images"
          />
        </div>
        <h3 v-if="!isIdfind" class="mt-3" style="text-align: left">
          비밀번호 재설정
        </h3>
        <h4 v-if="!isIdfind" style="text-align: left">
          회원가입 시 등록한 이메일 주소를 입력해주세요.
        </h4>
        <form class="form2">
          <div v-if="!isIdfind" class="form-group">
            <label class="col-form-label" for="inputEmail3"
              ><span style="font-size: 17px; color: red">*</span>이메일</label
            >
            <input
              class="form-control"
              id="inputEmail3"
              type="email"
              v-model="email"
            />
          </div>

          <div v-if="!isIdfind" class="form-group mb-0">
            <div class="buttons">
              <a class="btn button-effect btn-primary btn-block" @click="findPw"
                >비밀번호 재설정</a
              >
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="animation-block">
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
        src="../../assets/images/login_signup/2.png"
        alt="login logo"
      /><img
        class="cloud-logo1"
        src="../../assets/images/login_signup/2.png"
        alt="login logo"
      /><img
        class="cloud-logo2"
        src="../../assets/images/login_signup/2.png"
        alt="login logo"
      /><img
        class="cloud-logo3"
        src="../../assets/images/login_signup/2.png"
        alt="login logo"
      /><img
        class="cloud-logo4"
        src="../../assets/images/login_signup/2.png"
        alt="login logo"
      /><img
        class="cloud-logo5"
        src="../../assets/images/login_signup/2.png"
        alt="login logo"
      />
    </div>
  </div>
  <!--SignIn Classic end -->
</template>

<script>
import Vue from "vue";
import VueAlertify from "vue-alertify";
Vue.use(VueAlertify);

import http from "@/components/common/axios.js";

export default {
  data() {
    return {
      email: null,
      isfind: false,
    };
  },
  computed: {
    isIdfind() {
      return this.isfind;
    },
  },
  methods: {
    // 아이디 찾는 post 보내기
    findPw() {
      this.$alertify
        .alert(
          "새 비밀번호를 이메일로 발송하였습니다. 이용해주셔서 감사합니다",
          function () {}
        )
        .set({ title: "수화닥터.site" });
      this.$nuxt.$options.router.push("/");

      http
        .post("/find/pw", {
          email: this.email,
        })
        .then(({ data }) => {
          // this.isfind = true;
          // this.findId = data.user.userId;
          // console.log(this.findId);
          console.log(data);
        })
        .catch((error) => {
          console.log("RegisterVue: error : ");
          this.$alertify.error("등록된 유저정보가 없습니다.");
        });
    },

    // 아이디 받아서 isFind 및 Id 보여주기
  },
};
</script>

<style></style>
