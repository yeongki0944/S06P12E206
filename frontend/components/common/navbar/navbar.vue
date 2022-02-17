<template>
  <!--Nav start -->
  <div class="header-right-margin" style="width: 100%">
    <client-only>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav justify-content-between>
          <button type="button" class="btn btn-primary">
            <nuxt-link to="/online/room">온라인 진료실</nuxt-link>
          </button>
          <button type="button" class="btn btn-primary">
            <nuxt-link to="/offline/room">오프라인 진료실</nuxt-link>
          </button>

          <button type="button" class="btn btn-primary">
            <nuxt-link to="/offline/help">오프라인 안내페이지</nuxt-link>
          </button>
          <!-- 블로그는 사용안함 -->
          <!-- <b-dropdown id="dropdown-1" text="Blog">
                        <b-dropdown-item class="nav-link"
                            ><nuxt-link to="/blogs/blog_right-sidebar"
                                >Blog Right sidebar</nuxt-link
                            ></b-dropdown-item
                        >
                        <b-dropdown-item class="nav-link"
                            ><nuxt-link to="/blogs/blog_left-sidebar"
                                >Blog Left sidebar</nuxt-link
                            ></b-dropdown-item
                        >
                        <b-dropdown-item class="nav-link"
                            ><nuxt-link to="/blogs/blog_details"
                                >Blog Details</nuxt-link
                            ></b-dropdown-item
                        >
                        <b-dropdown-item class="nav-link"
                            ><nuxt-link to="/blogs/blog_no-sidebar"
                                >Blog No sidebar</nuxt-link
                            ></b-dropdown-item
                        >
                    </b-dropdown> -->
          <!-- <b-dropdown id="dropdown-4" text="개발중인 페이지들">
            <b-dropdown-item class="nav-link"
              ><nuxt-link to="/bonus/about"
                >Tensor.js</nuxt-link
              ></b-dropdown-item
            >
            <b-dropdown-item class="nav-link"
              ><nuxt-link to="/bonus/chat"
                >채팅 테스트</nuxt-link
              ></b-dropdown-item
            >
            <b-dropdown-item class="nav-link"
              ><nuxt-link to="/bonus/faq"
                >자주 묻는 질문</nuxt-link
              ></b-dropdown-item
            >
            <b-dropdown-item class="nav-link"
              ><nuxt-link to="/bonus/elements"
                >진료 예약 목록 관련</nuxt-link
              ></b-dropdown-item
            >
            <b-dropdown-item class="nav-link"
              ><nuxt-link to="/bonus/price">Price</nuxt-link></b-dropdown-item
            >
          </b-dropdown> -->

          <!-- <button v-if="!isLoginGetters" type="button" class="btn btn-primary">
            <nuxt-link to="/authentication/login">로그인</nuxt-link>
          </button>
          <button v-if="!isLoginGetters" type="button" class="btn btn-primary">
            <nuxt-link to="/authentication/signup-2">회원가입</nuxt-link>
          </button>
          <button v-if="isLoginGetters" type="button" class="btn btn-primary">
            <nuxt-link to="/authentication/mypage">마이페이지</nuxt-link>
          </button>

          <button
            v-if="isLoginGetters"
            id="logout"
            type="button"
            class="btn btn-primary"
          >
            <a @click="logout">로그아웃</a>
          </button>

          <button
            v-if="isManagerGetters"
            id="mystate"
            type="button"
            class="btn btn-primary"
          >
            <nuxt-link to="/manager/manager">관리자페이지</nuxt-link>
          </button>
          <button
            v-if="isLoginGetters && !isManagerGetters && !isDoctorGetters"
            id="mystate"
            type="button"
            class="btn btn-primary"
          >
            <nuxt-link to="/reserve/applyReservation">예약신청</nuxt-link>
          </button>
          <button
            v-if="isLoginGetters && !isManagerGetters"
            id="mystate"
            type="button"
            class="btn btn-primary"
          >
            <nuxt-link to="/reserve/checkReservation">예약확인</nuxt-link>
          </button>

          <button
            v-if="isLoginGetters"
            id="mystate"
            type="button"
            class="btn btn-primary"
          >
            <h5 style="float: left">
              안녕하세요! {{ this.$store.state.login.login.userName }}
              <span style="font-size: 14px" v-if="isDoctorGetters">의사</span>님
              <img
                v-if="isLoginGetters"
                src="@/assets/images/noProfile.png"
                alt=""
                width="24"
                height="20"
                style="
                  border-radius: 50%;
                  margin-left: 10px;
                  padding-bottom: 3px;
                "
                class="d-inline-block align-text-top"
              />
            </h5>
          </button> -->
        </b-navbar-nav>
        <b-navbar-nav id="right-nav">
          <b-nav-item v-if="!isLoginGetters">
            <button type="button" class="btn btn-primary">
              <nuxt-link to="/authentication/login">로그인</nuxt-link>
            </button>
          </b-nav-item>
          <b-nav-item v-if="!isLoginGetters">
            <button type="button" class="btn btn-primary">
              <nuxt-link to="/authentication/signup-2">회원가입</nuxt-link>
            </button>
          </b-nav-item>
          <!-- <b-nav-item v-if="isLoginGetters">
            <button type="button" class="btn btn-primary">
              <nuxt-link to="/authentication/mypage">마이페이지</nuxt-link>
            </button>
          </b-nav-item> -->
          <b-nav-item v-if="isLoginGetters">
            <button id="logout" type="button" class="btn btn-primary">
              <a @click="logout">로그아웃</a>
            </button>
          </b-nav-item>
          <b-nav-item v-if="isManagerGetters"
            ><button type="button" class="btn btn-primary">
              <nuxt-link to="/manager/manager">관리자페이지</nuxt-link>
            </button></b-nav-item
          >
          <!-- <b-nav-item
            v-if="isLoginGetters && !isManagerGetters && !isDoctorGetters"
          >
            <button type="button" class="btn btn-primary">
              <nuxt-link to="/reserve/applyReservation">예약신청</nuxt-link>
            </button>
          </b-nav-item>
          <b-nav-item v-if="isLoginGetters && !isManagerGetters">
            <button type="button" class="btn btn-primary">
              <nuxt-link to="/reserve/checkReservation">예약확인</nuxt-link>
            </button>
          </b-nav-item> -->

          <b-dropdown id="dropdown-4" text="mypage" v-if="isLoginGetters">
            <!-- <b-dropdown-item class="nav-link"
              ><nuxt-link to="/authentication/mypage"
                >마이페이지</nuxt-link
              ></b-dropdown-item
            > -->
            <b-dropdown-item
              class="nav-link"
              v-if="isLoginGetters && !isManagerGetters && !isDoctorGetters"
              ><nuxt-link to="/reserve/applyReservation"
                >예약신청</nuxt-link
              ></b-dropdown-item
            >
            <b-dropdown-item
              class="nav-link"
              v-if="isLoginGetters && !isManagerGetters"
              ><nuxt-link to="/reserve/checkReservation"
                >예약확인</nuxt-link
              ></b-dropdown-item
            >
            <b-nav-item>
              <button type="button" class="btn btn-primary">
                <h5 style="float: left">
                  안녕하세요! {{ this.$store.state.login.login.userName }}
                  <span style="font-size: 14px" v-if="isDoctorGetters"
                    >의사</span
                  >님
                  <img
                    v-if="isLoginGetters"
                    src="@/assets/images/noProfile.png"
                    alt=""
                    width="24"
                    height="20"
                    style="
                      border-radius: 50%;
                      margin-left: 10px;
                      padding-bottom: 3px;
                    "
                    class="d-inline-block align-text-top"
                  />
                </h5>
              </button>
            </b-nav-item>
          </b-dropdown>
        </b-navbar-nav>
        <!--  -->
      </b-collapse>
    </client-only>
  </div>
</template>

<style scoped>
/* @media (min-width: 1200px) {
  #mystate {
    left: 250px;
  }
} */

#right-nav {
  position: absolute;
  right: 100px;
}
</style>

<script>
export default {
  computed: {
    isLoginGetters() {
      return this.$store.getters["login/isLogin"];
    },
    isManagerGetters() {
      return this.$store.getters["login/isManager"];
    },
    isDoctorGetters() {
      return this.$store.getters["login/isDoctor"];
    },
  },
  methods: {
    logout: function () {
      //            localStorage.removeItem('login')
      this.$store.state.login.isLogin = false;
      this.$store.state.login.isnLogin = true;
      this.$store.state.login.isDoctor = false;
      this.$store.state.login.isManager = false;

      localStorage.removeItem("vuex");
      localStorage.removeItem("jwtToken");
      this.$alertify.success("로그아웃되었습니다. 감사합니다!");
      this.$nuxt.$options.router.push("/authentication/login");
    },
  },
};
</script>
