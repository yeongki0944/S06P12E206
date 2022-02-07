<template>
  <!--SignUp Classic start -->
  <div class="login-page2 animat-rate">
    <div class="login-content-main">

      <div class="login-content" style="height:970px">
        <div class="login-content-header">
          <img
            src="../../assets/images/logo/landing-logo.png"
            alt="sign-logo"
          />
        </div>
        <h4>의사님 환영합니다! 정보를 입력해주세요. </h4>
        <form class="form2">
          <div class="form-group">
            <input
              class="form-control"
              id="inputname"
              type="text"
              placeholder="아이디"
              :class="{ 'is-valid': isUserIdFocusAndValid , 'is-invalid': isUserIdFocusAndInvalid  }" 
                        v-model="userId" 
                        @input="validateUserId" 
                        @focus="isUserIdFocus = true"
            />
            <h5 style="margin-left:10px; margin-top:10px">최소 5글자이상 입력하세요. </h5>
          </div>

          <div class="form-group">
            <input
              class="form-control"
              id="inputPassword"
              type="password"
              placeholder="비밀번호"
              :class="{ 'is-valid': isUserPasswordFocusAndValid , 'is-invalid': isUserPasswordFocusAndInvalid  }" 
                        v-model="userPassword"         
                        @input="validatePassword"
                        @focus="isUserPasswordFocus = true"
            />
            <h5 style="margin-left:10px; margin-top:10px; margin-bottom:10px">1개 이상의 특수문자를 포함하고 8자리 이상이여야 합니다. </h5>
            
            <input
              class="form-control"
              id="inputPassword2"
              type="password"
              placeholder="비밀번호 재확인"
              :class="{ 'is-valid': isUserPassword2FocusAndValid , 'is-invalid': isUserPassword2FocusAndInvalid  }" 
                        v-model="userPassword2"         
                        @input="validatePassword2"
                        @focus="isUserPassword2Focus = true"
            />
          </div>





          <div style="padding-top:0px" class="form-group">

            <input 
              class="form-control"
              id="inputname"
              type="text"
              placeholder="이름"
              :class="{ 'is-valid': isUserNameFocusAndValid , 'is-invalid': isUserNameFocusAndInValid  }" 
              v-model="userName" 
              @input="validateName" 
              @focus="isUserNameFocus = true"
            />
          </div>

          <div class="form-group">
            <input
              class="form-control"
              id="email"
              type="email"
              placeholder="이메일"
              :class="{ 'is-valid': isUserEmailFocusAndValid , 'is-invalid': isUserEmailFocusAndInValid  }" 
                        v-model="userEmail" 
                        @input="validateEmail" 
                        @focus="isUserEmailFocus = true"
            />
            <h5 style="margin-left:10px; margin-top:10px">이메일 형식으로 입력해주세요. </h5>
          </div>

          <div class="form-group">
            <input
              class="form-control"
              id="inputname"
              type="text"
              placeholder="휴대전화번호 입력"
              style="width:250px; display: inline-block"
              v-model="userPhone"
            />
          <a
                class="ml-1 btn button-effect btn-info signpbtn"
                @click="getSms"
                >인증번호 받기</a>

            <input
              class="form-control"
              id="inputname"
              type="text"
              placeholder="인증번호 입력하세요"
                :class="{ 'is-valid': isSecretFocusAndValid , 'is-invalid': isSecretFocusAndInvalid  }" 
                v-model="secretNumber" 
                @blur="validateSecret" 

            />
          </div>
          <div class="form-group">

            <label class="col-form-label">진료 과목</label>
            <select class="ml-3" style="height:30px; width:100px;" id="subject" @change="onChange($event)">
              <option :value="1">내과</option>
              <option :value="2">치과</option>
              <option :value="3">소아과</option>
              <option :value="4">이비인후과</option>
              <option :value="5">외과</option>
              <option :value="6">안과</option>
              <option :value="7" selected>선택</option>
            </select>
          </div>
          <div class="form-group">
            <label class="col-form-label">의사 자격증을 첨부해주세요.</label>

          <input @change="changeFile" type="file" class="form-control-file" id="inputFileUploadInsert" multiple>

          </div>
          
          <div class="form-group mb-0">
            <div class="buttons">
              <a
                class="btn button-effect btn-primary signpbtn"
                @click="register"
                >가입 완료</a
              >
            </div>
          </div>
        </form>
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
  </div>
  <!--SignUp Classic end -->
</template>
<style scoped>
img {
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}
button {
  
}
</style>
<script>
import Vue from 'vue';
import VueAlertify from 'vue-alertify'; 
Vue.use(VueAlertify);

import http from "@/components/common/axios.js";

export default {
    data() {
      return {
        image: '',
        originalSN: '',
        fileList:[],
        // v-model
        userName: '',
        subject: '',
        userId: '',
        userPhone: '',
        userEmail: '',
        userPassword: '',
        userPassword2: '',
        secretNumber: '',
        // focus
        isUserIdFocus: false,
        isUserEmailFocus: false,
        isUserPasswordFocus: false,
        isUserPassword2Focus: false,
        isSecretFocus: false,
        isUserNameFocus: false,
        // validation
        isUserIdValid: false,
        isUserEmailValid: false,
        isUserPasswordValid: false,
        isUserPassword2Valid: false,
        isSecretValid: false,
        isUserNameValid: false
      }
    },
  computed: {
    isUserIdFocusAndValid(){
      return this.isUserIdFocus && this.isUserIdValid;
    },
    isUserIdFocusAndInvalid(){
      return this.isUserIdFocus && ! this.isUserIdValid;
    },
    isUserNameFocusAndValid() {
      return this.isUserNameFocus && this.isUserNameValid;
    },
    isUserNameFocusAndInValid() {
      return this.isUserNameFocus && ! this.isUserNameValid;
    },
    isUserEmailFocusAndValid(){
      return this.isUserEmailFocus && this.isUserEmailValid;
    },
    isUserEmailFocusAndInValid(){
      return this.isUserEmailFocus && ! this.isUserEmailValid;
    },
    isUserPasswordFocusAndValid(){
      return this.isUserPasswordFocus && this.isUserPasswordValid;
    },
    isUserPasswordFocusAndInvalid(){
      return this.isUserPasswordFocus && ! this.isUserPasswordValid;
    },
    isUserPassword2FocusAndValid(){
      return this.isUserPassword2Focus && this.isUserPassword2Valid;
    },
    isUserPassword2FocusAndInvalid(){
      return this.isUserPassword2Focus && ! this.isUserPassword2Valid;
    },
    isSecretFocusAndValid(){
      return ! this.isSecretFocus && this.isSecretValid;
    },
    isSecretFocusAndInvalid(){
      return ! this.isSecretFocus && ! this.isSecretValid;
    }    
  },
  methods: {
    validateSecret() {
      if(this.isSecretValid && this.secretNumber == this.originalSN) {
        return;
      }

      if(this.isSecretValid && this.secretNumber != this.originalSN) {
        this.$alertify.warning('인증번호가 만료되었습니다 다시 발급해주세요.');
        this.isSecretValid = false;
        return;
      }

      http.post(
        "/api/v1/users/sms/confirms",
        {
          to: this.userPhone,
          number: this.secretNumber
        }
      )
      .then(({ data }) => {
        this.isSecretValid = true;
        this.originalSN = this.secretNumber;
      })
      .catch( error => {
        console.log("RegisterVue: error : ");
        this.$alertify.error('인증번호가 틀렸습니다.');
        this.isSecretValid = false;
      });      
    },

    validateUserId() {
      this.isUserIdValid = this.userId.length >= 5 ? true : false;
      console.log(this.isUserIdValid)
    },

    validateName() {
      this.isUserNameValid = this.userName.length > 1 ? true : false;
    },
    validateEmail() {
      // ^ 시작일치, $ 끝 일치
      // {2, 3} 2개 ~ 3개
      // * 0회 이상, + 1회 이상
      // [-_.] - 또는 _ 또는 .
      // ? 없거나 1회
      let regexp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      this.isUserEmailValid = (regexp.test(this.userEmail)) ? true : false;
      console.log(this.isUserEmailValid)
    },
    validatePassword() {

      let patternEngAtListOne = new RegExp(/[a-zA-Z]+/);// + for at least one
      let patternSpeAtListOne = new RegExp(/[~!@#$%^&*()_+|<>?:{}]+/);// + for at least one
      let patternNumAtListOne = new RegExp(/[0-9]+/);// + for at least one
      
      this.isUserPasswordValid = 
        ( patternEngAtListOne.test( this.userPassword ) 
          && patternSpeAtListOne.test( this.userPassword )  
          && patternNumAtListOne.test( this.userPassword )
          && this.userPassword.length >= 8
        ) ? true : false;
    },
    validatePassword2() {
        this.isUserPassword2Valid = ( this.userPassword == this.userPassword2 ) ? true : false;
    },
    onChange(event) {
      this.subject = event.target.value;
      if(event.target.value == '1'){
      this.subject = "내과";
      }else if(event.target.value == '2'){
      this.subject = "치과";
      }else if(event.target.value == '3'){
      this.subject = "소아과";
      }else if(event.target.value == '4'){
      this.subject = "이비인후과";
      }else if(event.target.value == '5'){
      this.subject = "외과";
      }else if(event.target.value == '6'){
      this.subject = "안과";
      }
    },
    changeFile(fileEvent) {
        if( fileEvent.target.files && fileEvent.target.files.length > 0 ){

          for( var i=0; i<fileEvent.target.files.length; i++ ){
            const file = fileEvent.target.files[i];
            this.fileList.push(URL.createObjectURL(file));
          }
        }      
    },
    getSms() {
      this.$alertify.success('문자가 발송되었습니다!'); 
      http.post(
        "/api/v1/users/sms/sends",
        {
          to: this.userPhone,
        }
      )
      .then(({ data }) => {
        console.log(data);

      })
      .catch( error => {
        console.log("RegisterVue: error : ");
        this.$alertify.error('서버 오류 발생.');
      });
    },

    register(){
      if( ! this.isUserEmailValid || ! this.isUserPasswordValid || ! this.isUserPassword2Valid || ! this.isUserIdValid || this.userName == '' || ! this.isSecretValid ) {
        this.$alertify.error('정보를 정확하게 입력해주세요');
        return;
      }
      console.log("register");
      
      var formData = new FormData();
      formData.append("name", this.userName);
      formData.append("email", this.userEmail);
      formData.append("phone", this.userPhone);
      formData.append("userId", this.userId);
      formData.append("departName", this.subject);
      formData.append("password", this.userPassword);
      var attachFiles = document.querySelector("#inputFileUploadInsert");
      var cnt = attachFiles.files.length;
        for (var i = 0; i < cnt; i++) {
          formData.append("file", attachFiles.files[i]);
        }
      console.log(formData);
        http.post(
          '/api/v1/users/resume',
          formData,
          { headers: { 'Content-Type': 'multipart/form-data' } })
          .then(({ data }) => {
            console.log(data);
          this.$alertify.alert(
            '가입 신청이 완료되었습니다. \n인증이 완료되면 이메일로 알려드리겠습니다',
            function() {
   
            }
          );
            this.$nuxt.$options.router.push('/')
          })
          .catch((error) => {
            console.log("doctor apply : error ");
            console.log(error);
          });
      // http.post(
      //   "/user/register",
      //   {
      //     userName: this.userName,
      //     userEmail: this.userEmail,
      //     userPassword: this.userPassword,
      //     userClsf: this.userClsf
      //   }
      // )
      // .then(({ data }) => {
      //   console.log("RegisterVue: data : ");
      //   console.log(data);

      //   let $this = this;

      //   this.$alertify.alert(
      //     '회원가입을 축하합니다. 로그인 페이지로 이동합니다',
      //     function() {
      //       $this.$router.push({ path: '/login' });
      //     }
      //   );
      // })
      // .catch( error => {
      //   console.log("RegisterVue: error : ");
      //   console.log(error);
      //   if( error.response.status == '404'){
      //     this.$alertify.error('Opps!! 서버에 문제가 발생했습니다.');
      //   }
          
      // });
    }
  },
  mounted() {
    this.fileList = [];
  }
}
</script>

<style>

</style>