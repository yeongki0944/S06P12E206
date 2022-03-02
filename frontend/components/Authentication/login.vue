<template>
  <!--SignIn start -->
  <div class="container-fluid p-0">
    <div class="row">
      <div class="col-12">
        <div class="login-contain-main">
          <div class="left-page">
            <div class="login-content">
              <div class="login-content-header">
                <nuxt-link to="/">
                <img
                  src="../../assets/images/logo/landing-logo.png"
                  alt="sign-logo"
                />
                </nuxt-link>
              </div>
              <h3>반갑습니다. 수화닥터 입니다.</h3>
              <h4>Welcome to SignDoctor please login to your account.</h4>
              <form class="form1">
                <div class="form-group">
                  <label class="col-form-label" for="inputEmail3">아이디</label>
                  <input
                    class="form-control"
                    id="inputEmail3"
                    type="id"
                    v-model="id"
                    placeholder="아이디 입력"
                  />
                </div>
                <div class="form-group">
                  <label class="col-form-label" for="inputPassword3"
                    >비밀번호</label
                  ><span> </span>
                  <input
                    class="form-control"
                    id="inputPassword3"
                    type="password"
                    v-model="password"
                    placeholder="***********"
                  />
                </div>
                <div class="form-group">
                  <div class="rememberchk">
                    <div class="form-check pl-0">
                      <input
                        class="form-check-input m-0"
                        id="gridCheck1"
                        type="checkbox"
                      />
                      <label class="form-check-label" for="gridCheck1"
                        >아이디 저장</label
                      >
                      <h6>
                        <nuxt-link to="/authentication/login"
                          >비밀번호를 잊으셨나요?</nuxt-link
                        >
                      </h6>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="buttons">
                    <button
                      class="btn btn-primary button-effect"
                      @click="signUp"
                      v-on:keyup.enter="signUp"
                      >로그인
                      </button
                    >
                    <nuxt-link
                      class="btn button-effect btn-signup"
                      to="/authentication/signup-2"
                    >
                      회원가입
                    </nuxt-link>
                  </div>
                </div>
              </form>
              <center class="">
                <h6>SNS 계정으로 로그인</h6>

              </center>

              <div class="medialogo d-flex justify-content-center">
                  <!-- <a class="social_btn" href="`${BACKEND_URL}/oauth2/authorization/${socialType}?redirect_uri=${REDIRECT_URI}`">(:href='socialLoginUrl(social.socialType)')
                    img.social_login(
                      :src='social.src'
                      :style='{width: social.width, height: social.height}'
                    )
                    | {{ social.comment }}
                    </a> -->
                <div
                  class="google-btn btn-block"
                  @click="handleClickGetAuth"

                >
                  <div class="google-icon-wrapper btn-block">
                    <img
                      class="google-icon-svg"
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    />
                  </div>
                  <p class="btn-text"><b>Sign in with Google</b></p>
                </div>
              </div>              
            </div>
          </div>
          <div class="right-page">
            <div class="right-login animat-rate">
              <div class="animation-block">
                <img
                  class="heart-logo"
                  src="../../assets/images/login_signup/5.png"
                  alt="login logo"
                /><img
                  class="has-logo"
                  src="../../assets/images/login_signup/4.png"
                  alt="login logo"
                /><img
                  class="login-img"
                  src="../../assets/images/login_signup/login2.png"
                  alt="login logo"
                /><img
                  class="girl-logo"
                  src="../../assets/images/login_signup/login1.png"
                  alt="girl logo"
                /><img
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
                  class="heart-logo"
                  style="left: 90px; top: 400px"
                  src="../../assets/images/login_signup/5.png"
                  alt="login logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--SignIn end -->
</template>

<script>
import http from "@/components/common/axios.js";
import jwt_decode from "jwt-decode";
export default {
  data() {
    return {
      id: "",
      password: "",
    };
  },
  methods: {
    async handleClickGetAuth() {
      const googleUser = await this.$gAuth.signIn();
      if (!googleUser) {
        return null;
      }
      http
        .post("/api/v1/oauth/login", {
          idToken: googleUser.getAuthResponse().id_token,
        })
        .then(({ data }) => {
          console.log("LoginVue: data : ");
          console.log(data);

          localStorage.setItem("jwtToken", data.accessToken);
          let info = jwt_decode(data.accessToken);
          console.log(info);
          this.$store.commit("login/SET_LOGIN", {
            name: info.name,
            role: info.role,
            id : info.id,
            isLogin: true,
            isnLogin: false,
          });

          this.$alertify.success("로그인 성공!");
          this.$nuxt.$options.router.push("/");
        })
        .catch((error) => {
          console.log("LoginVue: error : ");
          console.log(error);
          this.$alertify.error("아이디 또는 비밀번호를 확인하세요.");
          if (error.response.status == "500") {
          } else {
            this.$alertify.error("Opps!! 서버에 문제가 발생했습니다.");
          }
        });
    },

    signUp: function () {
      if(this.id == "" || this.password == "") {
        this.$alertify.error("아이디 또는 비밀번호를 입력해주세요.");
        return;
      }

      http
        .post("/api/v1/auth/login", {
          id: this.id,
          password: this.password,
        })
        .then(({ data }) => {
          console.log("RegisterVue: data : ");
          console.log(data);

          localStorage.setItem("jwtToken", data.accessToken);
          let info = jwt_decode(data.accessToken);
          console.log(info);
          this.$store.commit("login/SET_LOGIN", {
            name: info.name,
            role: info.role,
            id : info.id,
            isLogin: true,
            isnLogin: false,
          });

          if (info.role == "ROLE_MANAGER") {
            this.$store.commit("login/SET_MANAGER");
          }
          if (info.role == "ROLE_DOCTOR") {
            this.$store.commit("login/SET_DOCTOR");
          }

          this.$alertify.success("로그인 성공!");

          this.$nuxt.$options.router.push("/");
        })
        .catch((error) => {
          console.log("RegisterVue: error : ");
          console.log(error);
          if (error.response.status == "401") {
            this.$alertify.error("아이디 또는 비밀번호가 일치하지 않습니다.");
          }
        });
    },
  },
};
</script>
<style scoped>
.social_login {
    height: 32px;
    float: left;
    margin-top: 5.2px;
    margin-left: 10px;
}
.social_btn:hover {
  color: #2098f3;
}
.social_btn {
  margin-bottom: 15px;
  font-weight: 400;
  font-size: 16px;
  display: block;
  width: 100%;
  height: 45px;
  line-height: 45px;
  margin-bottom: 15px;
  border-radius: 4px;
  border: 1px solid #e8e8e8;
  cursor: pointer;
  color: black;
  text-decoration: none;
}
</style>