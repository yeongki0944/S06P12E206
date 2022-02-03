<template>
  <!--SignIn start -->
  <div class="container-fluid p-0">
    <div class="row">
      <div class="col-12">
        <div class="login-contain-main">
          <div class="left-page">
            <div class="login-content">
              <div class="login-content-header">
                <img
                  class="image-fluid"
                  src="../../assets/images/logo/landing-logo.png"
                  alt="images"
                />
              </div>
              <h3>Hello Everyone , We are Chitchat</h3>
              <h4>Welcome to chitchat please login to your account1.</h4>
              <form class="form1">
                <div class="form-group">
                  <label class="col-form-label" for="inputEmail3"
                    >Email Address</label
                  >
                  <input
                    class="form-control"
                    id="inputEmail3"
                    type="email"
                    v-model="email"
                    required
                    email
                    placeholder="Demo@123gmail.com"
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
                    required
                    placeholder="Password"
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
                      <h6><nuxt-link to="/authentication/login">비밀번호를 잊으셨나요?</nuxt-link></h6>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="buttons">
                    <a
                      class="btn btn-primary button-effect"
                      href="javascript:void(0)"
                      @click="signUp"
                      >로그인</a
                    >
                    <nuxt-link class="btn button-effect btn-signup" to="/authentication/signup">
                      회원가입
                    </nuxt-link>
                  </div>
                </div>
              </form>
              <div class="line">
                <h6>SNS 계정으로 로그인</h6>
              </div>
              <div class="medialogo">
                <div class="google-btn" @click="handleClickGetAuth">
                  <div class="google-icon-wrapper">
                    <img class="google-icon-svg" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                  </div>
                  <p class="btn-text"><b>Sign in with Google</b></p>
                </div>
                <!-- <ul>
                  <li>
                    <a
                      class="icon-btn btn-danger button-effect"
                      href="https://www.google.com/"
                      ><i class="fa fa-google"></i
                    ></a>
                  </li>
                  <li>
                    <a
                      class="icon-btn btn-primary button-effect"
                      href="https://twitter.com/"
                      ><i class="fa fa-twitter"></i
                    ></a>
                  </li>
                  <li>
                    <a
                      class="icon-btn btn-facebook button-effect"
                      href="https://www.facebook.com/"
                      ><i class="fa fa-facebook-f"></i
                    ></a>
                  </li>
                </ul> -->
              </div>
              <div class="termscondition">
                <h4 class="mb-0">
                  <span>*</span>Terms and condition<b>&amp;</b>Privacy policy
                </h4>
              </div>
            </div>
          </div>
          <div class="right-page">
            <div class="right-login animat-rate">
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
                <div class="maincircle"></div>
                <div class="top-circle"></div>
                <div class="center-circle"></div>
                <div class="bottom-circle"></div>
                <div class="bottom-circle1"></div>
                <div class="right-circle"></div>
                <div class="right-circle1"></div>
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
                  src="../../assets/images/login_signup/1.png"
                  alt="login logo"
                /><img
                  class="boy-logo"
                  src="../../assets/images/login_signup/6.png"
                  alt="login boy logo"
                /><img
                  class="girl-logo"
                  src="../../assets/images/login_signup/7.png"
                  alt="girllogo"
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
                  class="has-logo1"
                  src="../../assets/images/login_signup/4.png"
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
import firebase from "firebase";
import http from "@/components/common/axios.js";
export default {
  data() {
    return {
      email: "test@admin.com",
      password: "test@123456",
    };
  },
  methods: {

    async handleClickGetAuth() {
      const googleUser = await this.$gAuth.signIn()
      if (!googleUser) {
          return null;
       }
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

      },

    signUp: function() {
      if (this.email === "" && this.password === "") {
        this.email = "test@admin.com";
        this.password = "test@123456";
      } else {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(
            (result) => {
              console.log("Result", result);
              this.$toasted.show("Login Success", {
                theme: "bubble",
                position: "top-right",
                type: "success",
                duration: 2000,
              });
              this.$router.replace("/");
            },
            (err) => {
              this.email = "test@admin.com";
              this.password = "test@123456";
              this.$toasted.show("Oops..." + err.message, {
                theme: "bubble",
                position: "top-right",
                type: "error",
                duration: 2000,
              });
            }
          );
      }
    },
  },
}
</script>
