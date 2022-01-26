<template>
  <el-dialog custom-class="login-dialog" title="로그인" v-model="state.dialogVisible" @close="handleClose">
    <el-form :model="state.form" :rules="state.rules" ref="loginForm" :label-position="state.form.align">
      <el-form-item prop="id" label="아이디" :label-width="state.formLabelWidth" >
        <el-input v-model="state.form.id" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="password" label="비밀번호" :label-width="state.formLabelWidth">
        <el-input v-model="state.form.password" autocomplete="off" show-password></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="clickLogin">로그인</el-button>

      </span>
            <!-- OAuth2.0 -->
      <h1>IsInit: {{ Vue3GoogleOauth.isInit }}</h1>
      <h1>IsAuthorized: {{ Vue3GoogleOauth.isAuthorized }}</h1>
      <h2 v-if="user">signed user: {{user}}</h2>

      <div class="google-btn" @click="handleClickSignIn" :disabled="!Vue3GoogleOauth.isInit || Vue3GoogleOauth.isAuthorized">
        <div class="google-icon-wrapper">
          <img class="google-icon-svg" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
        </div>
        <p class="btn-text"><b>Sign in with Google</b></p>
      </div>

      <button>sign in</button>
      <button @click="handleClickGetAuthCode" :disabled="!Vue3GoogleOauth.isInit">get authCode</button>
      <button @click="handleClickSignOut" :disabled="!Vue3GoogleOauth.isAuthorized">sign out</button>
      <button @click="handleClickDisconnect" :disabled="!Vue3GoogleOauth.isAuthorized">disconnect</button>
    </template>
  </el-dialog>
</template>
<style>
.google-btn {
    margin: 25px;
    width: 80%;
    min-width: 184px;
    max-width: 184px;
    height: 42px;
    background-color: #fcfcfc;
    border-radius: 2px;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, .2);
    cursor: pointer;
    cursor: hand;
    align-self: center;
    user-select: none;
    transition: all 400ms ease 0s;
    display: flex;
}
.google-btn .google-icon-wrapper {
    position: absolute;
    margin-top: 1px;
    margin-left: 1px;
    width: 40px;
    height: 40px;
    border-radius: 2px;
    user-select: none
}
.google-btn .google-icon-svg {
    position: absolute;
    margin-top: 11px;
    margin-left: 11px;
    width: 18px;
    height: 18px;
    user-select: none
}
.google-btn .btn-text {
    float: right;
    margin: 11px 14px 40px 40px;
    color: #757575;
    font-size: 13px;
    letter-spacing: .2px;
    font-family: Roboto;
    user-select: none
}
.google-btn:hover {
    box-shadow: 0 3px 8px rgba(117, 117, 117, .5);
    user-select: none
}
.google-btn:active {
    box-shadow: 0 1px 1px #757575;
    background: #F8F8F8;
    color: #fff;
    user-select: none
}

.normal-btn {
    margin: 25px;
    width: auto;
    display: inline-block;
    min-width: auto;
    max-width: 184px;
    height: 42px;
    background-color: #fcfcfc;
    border-radius: 2px;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, .2);
    cursor: pointer;
    cursor: hand;
    align-self: center;-webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transition: all 400ms ease 0s
}
.normal-btn .btn-text {
    float: left;
    margin: 11px 14px 11px 14px;
    color: #757575;
    font-size: 14px;
    letter-spacing: .2px;
    font-family: Roboto;
    user-select: none
}
.normal-btn:hover {
    box-shadow: 0 3px 8px rgba(117, 117, 117, .5);
    user-select: none
}
.normal-btn:active {
    box-shadow: 0 1px 1px #757575;
    background: #F8F8F8;
    color: #fff;
    user-select: none
}




.login-dialog {
  width: 400px !important;
  height: 300px;
}
.login-dialog .el-dialog__headerbtn {
  float: right;
}
.login-dialog .el-form-item__content {
  margin-left: 0 !important;
  float: right;
  width: 200px;
  display: inline-block;
}
.login-dialog .el-form-item {
  margin-bottom: 20px;
}
.login-dialog .el-form-item__error {
  font-size: 12px;
  color: red;
}
.login-dialog .el-input__suffix {
  display: none;
}
.login-dialog .el-dialog__footer {
  margin: 0 calc(50% - 80px);
  padding-top: 0;
  display: inline-block;
}
.login-dialog .dialog-footer .el-button {
  width: 120px;
}
</style>

<script>
import {inject, toRefs, reactive, computed, ref, onMounted } from 'vue'
import { useStore } from 'vuex'

import http from "@/common/axios.js";
export default {
  name: 'login-dialog',

  props: {
    open: {
      type: Boolean,
      default: false
    }
  },

  data(){
    return {
      user: '',
    }
  },

  methods: {

    // OAuth2.0 login
    async handleClickSignIn(){
      try {
        const googleUser = await this.$gAuth.signIn();
        if (!googleUser) {
          return null;
        }

        //springboot 연동 JWT 인가 받기.
        //axios 연결
        http
        .post("/api/v1/oauth/login", {
          idToken: googleUser.getAuthResponse().id_token
        })
        .then(({ data }) => {
          console.log("LoginVue: data : ");
          console.log(data);

          localStorage.setItem("jwtToken", data.accessToken);


          this.$store.commit("SET_LOGIN", {
            userSeq: data.userSeq,
            isLogin: true,
            userName: data.userName,
            userProfileImageUrl: data.userProfileImageUrl,
          });
          
          this.$router.replace("/");

          
        })
        .catch(error => {
          console.log("LoginVue: error : ");
          console.log(error);
          if (error.response.status == "404") {
            this.$alertify.error("이메일 또는 비밀번호를 확인하세요.");
          } else {
            this.$alertify.error("Opps!! 서버에 문제가 발생했습니다.");
          }
        });

        console.log("googleUser", googleUser);
        this.user = googleUser.getBasicProfile().getEmail();
        console.log("getId", this.user);
        console.log("getBasicProfile", googleUser.getBasicProfile());
        console.log("getAuthResponse", googleUser.getAuthResponse());
        console.log("getAuthResponse", googleUser.getAuthResponse().id_token);
        console.log(
          "getAuthResponse",
          this.$gAuth.instance.currentUser.get().getAuthResponse()
        );
      } catch (error) {
        //on fail do something
        console.error(error);
        return null;
      }
    },
    async handleClickGetAuthCode(){
      try {
        const authCode = await this.$gAuth.getAuthCode();
        console.log("authCode", authCode);
      } catch(error) {
        //on fail do something
        console.error(error);
        return null;
      }
    },

    // OAuth2.0 logout
    async handleClickSignOut() {
      try {
        await this.$gAuth.signOut();
        console.log("isAuthorized", this.Vue3GoogleOauth.isAuthorized);
        this.user = "";
      } catch (error) {
        console.error(error);
      }
    },
    handleClickDisconnect() {
      window.location.href = `https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=${window.location.href}`;
    },
  },
  setup(props, { emit }) {

    const { isSignIn } = toRefs(props);
    const Vue3GoogleOauth = inject("Vue3GoogleOauth");
    const handleClickLogin = () => {};

    const store = useStore()
    // 마운드 이후 바인딩 될 예정 - 컨텍스트에 노출시켜야함. <return>
    const loginForm = ref(null)

    /*
      // Element UI Validator
      // rules의 객체 키 값과 form의 객체 키 값이 같아야 매칭되어 적용됨
      //
    */
    const state = reactive({
      form: {
        id: '',
        password: '',
        align: 'left'
      },
      rules: {
        id: [
          { required: true, message: 'Please input ID', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please input password', trigger: 'blur' }
        ]
      },
      dialogVisible: computed(() => props.open),
      formLabelWidth: '120px'
    })

    onMounted(() => {
      // console.log(loginForm.value)
    })

    const clickLogin = function () {
      // 로그인 클릭 시 validate 체크 후 그 결과 값에 따라, 로그인 API 호출 또는 경고창 표시
      loginForm.value.validate((valid) => {
        if (valid) {
          console.log('submit')
          store.dispatch('root/requestLogin', { id: state.form.id, password: state.form.password })
          .then(function (result) {
            alert('accessToken: ' + result.data.accessToken)
          })
          .catch(function (err) {
            alert(err)
          })
        } else {
          alert('Validate error!')
        }
      });
    }




    const handleClose = function () {
      state.form.id = ''
      state.form.password = ''
      emit('closeLoginDialog')
    }

    return {Vue3GoogleOauth,handleClickLogin,isSignIn,loginForm, state, clickLogin, handleClose }
  }
}
</script>
