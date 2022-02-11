<template>
  <!--Nav start -->
  <div class="header-right-margin">
    <client-only>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <button type="button" class="btn btn-primary">
            <nuxt-link to="/messenger/messenger">Messenger</nuxt-link>
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
          <b-dropdown id="dropdown-4" text="Bouns page">
            <b-dropdown-item class="nav-link"
              ><nuxt-link to="/bonus/about"
                >프로젝트 소개</nuxt-link
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
                >Elements</nuxt-link
              ></b-dropdown-item
            >
            <!-- Price 사용 안함 -->
            <!-- <b-dropdown-item class="nav-link"
                            ><nuxt-link to="/bonus/price"
                                >Price</nuxt-link
                            ></b-dropdown-item
                        > -->
          </b-dropdown>
          <button v-if="! isLoginGetters" type="button" class="btn btn-primary">
            <nuxt-link to="/authentication/login">로그인</nuxt-link>
          </button>
          <button v-if="! isLoginGetters" type="button" class="btn btn-primary">
            <nuxt-link to="/authentication/signup-2">회원가입</nuxt-link>
          </button>
          <button v-if="isLoginGetters" type="button" class="btn btn-primary">
            <nuxt-link to="/authentication/mypage">마이페이지</nuxt-link>
          </button>
          <!-- 로그인과 회원가입만 사용함 -->
          <!-- <b-dropdown id="dropdown-3" text="Authentication">

                    </b-dropdown>
                    <button v-if="! isLoginGetters" type="button" class="btn btn-primary">
                        <nuxt-link to="/authentication/login">로그인</nuxt-link>
                    </button>
                    <button v-if="! isLoginGetters" type="button" class="btn btn-primary">
                        <nuxt-link to="/authentication/signup-2"
                            >회원가입</nuxt-link
                        >
                    </button>


                        <b-dropdown-item class="nav-link"
                            ><nuxt-link to="/authentication/login"
                                >로그인</nuxt-link
                            ></b-dropdown-item
                        >
                        <b-dropdown-item class="nav-link"
                            ><nuxt-link to="/authentication/login-2"
                                >Signin Classic</nuxt-link
                            ></b-dropdown-item
                        >
                        <b-dropdown-item class="nav-link"
                            ><nuxt-link to="/authentication/signup"
                                >회원가입</nuxt-link
                            ></b-dropdown-item
                        >
                        <b-dropdown-item class="nav-link"
                            ><nuxt-link to="/authentication/signup-2"
                                >Signup Classic</nuxt-link
                            ></b-dropdown-item
                        >
                    </b-dropdown> -->

                    <button v-if="isLoginGetters" id="logout" type="button" class="btn btn-primary">
                    <a @click="logout"
                        >로그아웃</a
                        >
                    </button>

                    <button v-if="isManagerGetters" id="mystate" type="button" class="btn btn-primary">
                        <nuxt-link to="/manager/manager"
                            >관리자페이지</nuxt-link
                        >
                    </button>
                    <button  v-if="isLoginGetters && ! isManagerGetters " id="mystate" type="button" class="btn btn-primary">
                        <nuxt-link to="/reserve/applyReservation"
                            >예약신청</nuxt-link
                        >
                    </button>
                    <button v-if="isLoginGetters && ! isManagerGetters" id="mystate" type="button" class="btn btn-primary">
                        <nuxt-link to="/reserve/checkReservation"
                            >예약확인</nuxt-link
                        >
                    </button>  

                    <button v-if="isLoginGetters" id="mystate" type="button" class="btn btn-primary">
                    <h5 style="float:left"
                        >안녕하세요! {{this.$store.state.login.login.userName}}님                    
                        <img
                        v-if="isLoginGetters"
                        src="@/assets/images/noProfile.png"
                        alt=""
                        width="24"
                        height="20"
                        style="border-radius: 50%; margin-left:10px; padding-bottom:3px"
                        class="d-inline-block align-text-top"
                    />  </h5
                        >

                    </button>
                    
                </b-navbar-nav>
                
            </b-collapse>
            
        </client-only>
    </div>

</template>

<style scoped>
    @media(min-width:1200px) {
        #mystate{
            left:550px
        }
    }
</style>

<script>
export default ({
    computed: {
        isLoginGetters() {
            return this.$store.getters["login/isLogin"];
        },
        isManagerGetters() {
            return this.$store.getters["login/isManager"];
        }


    },

    methods: {
        logout: function() {
//            localStorage.removeItem('login')
            this.$store.state.login.isLogin = false;
            this.$store.state.login.isnLogin = true;
            this.$store.state.login.isDoctor = false;
            this.$store.state.login.isManager = false;
            
            
            localStorage.removeItem('vuex');
            localStorage.removeItem('jwtToken');
            this.$alertify.success('로그아웃되었습니다. 감사합니다!');
            this.$nuxt.$options.router.push('/authentication/login');
            
        }
    }
})
</script>
