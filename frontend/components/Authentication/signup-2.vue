<template>
  <!--SignUp Classic start -->
  <div class="login-page2 animat-rate">
    <div class="login-content-main" style="">

      <div class="login-content" style="height:900px">
        <div class="login-content-header">
          <nuxt-link to="/">
          <img
            src="../../assets/images/logo/landing-logo.png"
            alt="sign-logo"
          />
          </nuxt-link>
        </div>
        <h3 class="mt-3">수화닥터 서비스 이용을 위해 약관에 동의해주세요.</h3>

            <div class="container-fluid">
                <table class="">

                    <td><input type="checkbox" @click="optionAll" v-model="alloptioned"></td>
                    <td><h4 style="text-align:left; padding-left:10px; padding-bottom:15px; padding-top:15px; margin: auto"> 모든 약관에 모두 확인, 동의합니다. </h4></td>

                    <tr v-for="option in options" v-bind:key="option.id">
                        <td align="right" style="margin-bottom:30px;"><input type="checkbox" v-model="optionIds" @click="select" :value="option.id"></td>
                        <td><h5 style="text-align: left; padding-left:10px; padding-top:10px; margin-bottom:10px">{{ option.name }}</h5></td>
                        <td><h5 style="text-align: right">&emsp;&emsp;</h5></td>
                        <td><h5 style="text-align: right">&emsp;&emsp;</h5></td>
                        <td><h6 style="text-align: right;text-decoration:underline"><a @click="signDetail(option.id)">자세히보기</a></h6></td>
                    </tr>
                </table>
            </div>
            <div class="mt-4" style="height:30px"></div>
            <div class="container shadow-sm rounded border border-5" style="height:160px">
              <img class="rounded float-left img-fluid" width="100px" style="height:133px" :src="require(`@/assets/images/person.png`)"> 
              <h3 class="rounded float-right mr-5 mt-3" style="">일반 회원가입하기</h3>
              <button @click="signUp()" style="margin-right:80px" class="float-right btn btn-primary">가입하기</button>
            </div>
            <div class="h-5"></div>
            <div class="container shadow-sm mt-4 rounded border border-5" style="height:160px">
              <img class="rounded float-left img-fluid" width="100px" style="height:133px" :src="require(`@/assets/images/doctor.png`)">
              <h3 class="rounded float-right mr-5 mt-3" style="">의사 회원가입하기</h3>
              <button @click="doctorSignUp()" style="margin-right:80px" class="float-right btn btn-primary">가입하기</button>
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
    <detail-modal></detail-modal>
    <detail-modal2></detail-modal2>
    <detail-modal3></detail-modal3>
  </div>
  <!--SignUp Classic end -->
</template>

<script>
import Vue from "vue";
import DetailModal from "@/components/modals/signDetailModal1.vue";
import DetailModal2 from "@/components/modals/signDetailModal2.vue";
import DetailModal3 from "@/components/modals/signDetailModal3.vue";
import { Modal } from "bootstrap";
import VueAlertify from "vue-alertify";
Vue.use(VueAlertify);

export default{
    components : {DetailModal, DetailModal2, DetailModal3},

		data() {
      return {
        detailModal:null,
        detailModal2:null,
        detailModal3:null,
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
    this.detailModal = new Modal(document.getElementById("detailModal"));
    this.detailModal2 = new Modal(document.getElementById("detailModal2"));
    this.detailModal3 = new Modal(document.getElementById("detailModal3"));
  },
  methods: {

        signUp() {
          if(this.optionIds.length == 3) {
            this.$nuxt.$options.router.push('/authentication/signup')
          }else{
            this.$alertify.error('모든 약관에 동의해주세요!')
          }
        },
        doctorSignUp() {
          if(this.optionIds.length == 3) {
            this.$nuxt.$options.router.push('/authentication/doctorsignup')
          }else{
            this.$alertify.error('모든 약관에 동의해주세요!')
          }
        },
        optionAll() {
            this.optionIds = [];
            if (!this.alloptioned) {
                for (var i =0; i<3; i++) {
                    this.optionIds.push(this.options[i].id.toString());
                }
            }
        },
        select() {
            this.alloptioned = false;
        },
        signDetail(id) {
          if(id == "1") {
            this.detailModal.show();
          }else if(id =="2") {
            this.detailModal2.show();
          }else{
            this.detailModal3.show();
          }
          
        }
    }

}	
</script>