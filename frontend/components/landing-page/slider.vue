<template>
  <div>
    <!-- slider start -->
    <section class="slider-block">
      <div class="custom-container">
        <div class="row">
          <div class="col-12">
            <div class="slider-main">
              <div class="slider-contain">
                <h1>
                  반갑습니다<br>
                  수화닥터입니다
                </h1>                
                <h4>
                  <span>진료 5분 전부터 입장 가능합니다 </span>
                </h4>
                <div class="downlaod">
                  <div class="footer-btn">

                      <a @click="enterRoom" v-if="!isDoctor" class="btn active"
                        >진료실 입장</a
                      >

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
import http from "@/components/common/axios.js";
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
      this.$nuxt.$options.router.push("/online/room");
    },
    enterRoom() {
      if (!this.$store.state.login.isLogin) {
        this.$alertify.error("로그인 후 이용해주세요!");
        this.$nuxt.$options.router.push("/authentication/login");
      }else{
        
        // 예약 테이블 시간 들고와서 첫번째 인덱스 시간과 비교 5분 이내면 들어감
        // userId로 ApplyBoard 들고옴 
        http.post(
          "/reserve/patient",
          {
            userId: this.$store.state.login.login.userId,
          }
        )
        .then(({ data }) => {
          console.log(data);
          //for문 객체를 만들어서 변수에 add
          for(var i=0; i<data.confirmList.length; i++) {
            // 모든 list 비교해서 5분 이상 차이나면 예외 처리
            var dtdata = Date.parse(data.confirmList[i].reservedDt);
            console.log(dtdata);
            var timestamp = new Date().getTime();
            console.log(timestamp);

            const elapsedMin = (dtdata - timestamp) / 1000 / 60;

            if(elapsedMin <= 5 && elapsedMin >= 0 ) {
              // 5분 차이 안나는게 있으면 store data에 session 저장
              console.log(elapsedMin);
              this.$store.state.login.sessionId = data.confirmList[i].user.userId; 
              this.$store.state.login.mydoctor = data.confirmList[i].doctorInfo.user.name;
              console.log(this.$store.state.login.sessionId);
              this.$nuxt.$options.router.push("/online/room");
              return;
              // router로 이동하고 mount 시에 client에서 store session data 들고옴
            }

          }

          // 5분 이상 차이나면 아직 예약 시간이 아닙니다.
            this.$alertify.alert(
            '아직 예약시간이 아닙니다! 예약 시간 5분 전부터 입장 가능합니다.',
            function() {
   
            }
          );
        })
        .catch( error => {
          console.log("PatientReservatedVue: error : ");
          this.$alertify.error('서버에러 발생.');

        });

        
        
//        this.$nuxt.$options.router.push("/online/room");
      }
    },
  },
};
</script>

<style></style>
