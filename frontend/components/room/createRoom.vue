<template>
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
          <option value="1">이아경   4:00 예약</option>
          <option value="2">김순신   6:00 예약</option>
        </select>

        <div class="card mt-4">
          <div class="card-header">
            <h5>환자 이아경</h5>
          </div>
          <img style="height:400px" src="../../assets/images/profile1.png" alt="" />
          <div class="card-body">
            <h5 class="card-title">환자 증상</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam egestas sed sem ut malesuada.</p>
            <button class="btn btn-primary btn-block">진료실 생성</button>
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
</template>

<script>
import Vue from "vue";
import VueAlertify from "vue-alertify";
Vue.use(VueAlertify);

export default{

		data() {
      return {

        options: [ 
            { "id": "1", "name": "[필수] 서비스 이용약관 동의" }, 
            { "id": "2", "name": "[필수] 개인정보 처리방침 동의" }, 
            { "id": "3", "name": "[필수] 개인 민감(건강)정보 처리방침 동의" }
        ],
        optioned: [],
        alloptioned: false,
        optionIds: []
		}
	},
  mounted() {

  },
  methods: {


    }

}	
</script>