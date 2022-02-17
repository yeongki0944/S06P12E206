<template>
  <section class="element-span-prag">
    <div v-if="isDoctorGetters" class="row">
      <div class="col-12">
        <div class="element-card">
          <div class="element-card-header heading">
            <h2>진료 신청 내역</h2>
          </div>
          <div class="element-card-body typography">
            <b-table :items="items1" :fields="fields1" striped responsive="sm">
              <template #cell(confirm)="data">
                <b-button variant="success" size="sm" class="mr-2" @click="accept(data)"
                  >승인</b-button
                >
                <b-button variant="danger" size="sm" class="mr-2" @click="cancel(data)"
                  >취소</b-button
                >
              </template>
              <template #cell(show_details)="row">
                <b-button
                  variant="info"
                  size="sm"
                  @click="row.toggleDetails"
                  class="mr-2"
                >
                  {{ row.detailsShowing ? "" : "" }} 상세
                </b-button>

                <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
                <!-- <b-form-checkbox
                  v-model="row.detailsShowing"
                  @change="row.toggleDetails"
                >
                  Details via check
                </b-form-checkbox> -->
              </template>

              <template #row-details="row">
                <b-card>
                  <b-row class="mb-2">
                    <b-col sm="3" class="text-sm-right"><b>환자명:</b></b-col>
                    <b-col>{{ row.item.환자명 }}</b-col>
                  </b-row>

                  <b-row class="mb-2">
                    <b-col sm="3" class="text-sm-right"><b>환자정보:</b></b-col>
                    <b-col>{{ row.item.환자정보 }}</b-col>
                  </b-row>

                  <b-row class="mb-2">
                    <b-col sm="3" class="text-sm-right"><b>증상:</b></b-col>
                    <b-col>{{ row.item.증상 }}</b-col>
                  </b-row>

                  <b-button variant="info" size="sm" @click="row.toggleDetails"
                    >접기</b-button
                  >
                </b-card>
              </template>
            </b-table>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isDoctorGetters" class="row">
      <div class="col-12">
        <div class="element-card">
          <div class="element-card-header heading">
            <h2>진료 예약 목록</h2>
          </div>
          <div class="element-card-body typography">
            <b-table :items="items2" :fields="fields2" striped responsive="sm">
              <template #cell(confirm)="">
                <b-button variant="success" size="sm" class="mr-2"
                  >확정됨</b-button
                >
              </template>
            </b-table>
          </div>
        </div>
      </div>
    </div>
    <!-- 농아인 측 -->
    <div v-if="! isDoctorGetters" class="row">
      <div class="col-12">
        <div class="element-card">
          <div class="element-card-header heading">
            <h2>진료 예약 목록</h2>
          </div>
          <div class="element-card-body typography">
            <b-table :items="items3" :fields="fields4" striped responsive="sm">
              <template #cell(confirm)="">
                <b-button variant="info" size="sm" class="mr-2"
                  >대기중</b-button
                >

                <!-- <b-badge variant="success">승인됨</b-badge>
                <b-badge variant="danger">취소됨</b-badge> -->
              </template>
              <template #cell(show_details)="row">
                <b-button
                  variant="info"
                  size="sm"
                  @click="row.toggleDetails"
                  class="mr-2"
                >
                  {{ row.detailsShowing ? "" : "" }} 상세
                </b-button>
              </template>

              <template #row-details="row">
                <b-card>
                  <b-row class="mb-2">
                    <b-col sm="3" class="text-sm-right"><b>예약시간:</b></b-col>
                    <b-col>{{ row.item.예약시간 }}</b-col>
                  </b-row>

                  <b-row class="mb-2">
                    <b-col sm="3" class="text-sm-right"
                      ><b>본인증상입력:</b></b-col
                    >
                    <b-col>{{ row.item.본인증상입력 }}</b-col>
                  </b-row>

                  <b-button variant="info" size="sm" @click="row.toggleDetails"
                    >접기</b-button
                  >
                </b-card>
              </template>
            </b-table>
          </div>
        </div>
      </div>
    </div>

    <div v-if="! isDoctorGetters" class="row">
      <div class="col-12">
        <div class="element-card">
          <div class="element-card-header heading">
            <h2>환자측 확정 목록</h2>
          </div>
          <div class="element-card-body typography">
            <b-table :items="items4" :fields="fields2" striped responsive="sm">
              <template #cell(confirm)="">
                <b-button variant="success" size="sm" class="mr-2"
                  >확정됨</b-button
                >
              </template>
            </b-table>
          </div>
        </div>
      </div>
    </div>


  </section>
</template>

<script>
import http from "@/components/common/axios.js";
export default {
  data() {
    return {
      fields1: ["담당의", "환자명", "환자정보", "진료_예약_날짜", "confirm"],
      items1: [

      ],
      fields2: ["담당의", "환자명", "환자정보", "진료_예약_날짜", "confirm"],
      items2: [

      ],
      fields3: ["담당의", "환자명", "환자정보", "진료_예약_날짜", "confirm"],
      items3: [

      ],
      fields4: [
        "담당의",
        "환자명",
        "환자정보",
        "진료_예약_날짜",
        "confirm",
        "show_details",
      ],
      items4: [

      ],
    };
  },
  computed: {
    isDoctorGetters() {
      return this.$store.getters["login/isDoctor"];
    },
    listDoctorAppliedGetters() {
      return this.$store.getters
    }
  },
  methods: {
    accept(record) {
      console.log(record);
      this.$data.items1.splice(record.index,1);
      // 승인 post
        http.post(
          "/reserve/doctor/accept",
          {
            id: record.item.id,
          }
        )
        .then(({ data }) => {
          console.log(data);

        })
        .catch( error => {
          console.log("DoctorReservatedVue: error : ");
          this.$alertify.error('서버에러 발생.');

        });

      // table 다시 가져오기
        http.post(
          "/reserve/doctor",
          {
            userId: this.$store.state.login.login.userId,
          }
        )
        .then(({ data }) => {
          console.log(data);
          this.$data.items2 = [];
          //for문 객체를 만들어서 변수에 add


          //for문 객체를 만들어서 변수에 add
          for(var i=0; i<data.confirmList.length; i++) {
            var datestr = data.confirmList[i].reservedDt

            var b={
              isActive: true,
              담당의: data.confirmList[i].doctorInfo.user.name,
              환자명: data.confirmList[i].user.name,
              환자정보: data.confirmList[i].contents,
              진료_예약_날짜: datestr,
              id: data.confirmList[i].id
            };
            this.$data.items2.push(b);
            console.log(this.$data.items2);
          }
        })
        .catch( error => {
          console.log("DoctorReservatedVue: error : ");
          this.$alertify.error('서버에러 발생.');

        });
    },
    cancel(record) {
      console.log(record);
      this.$data.items2.splice(record.index,1);
      // 승인 post
        http.post(
          "/reserve/doctor/cancel",
          {
            id: record.item.id,
          }
        )
        .then(({ data }) => {
          console.log(data);

        })
        .catch( error => {
          console.log("DoctorReservatedVue: error : ");
          this.$alertify.error('서버에러 발생.');

        });

      // table 다시 가져오기
        http.post(
          "/reserve/doctor",
          {
            userId: this.$store.state.login.login.userId,
          }
        )
        .then(({ data }) => {
          console.log(data);
          this.$data.items2 = [];

          //for문 객체를 만들어서 변수에 add
          for(var i=0; i<data.confirmList.length; i++) {
            var datestr = data.confirmList[i].reservedDt
            var b={
              isActive: true,
              담당의: data.confirmList[i].doctorInfo.user.name,
              환자명: data.confirmList[i].user.name,
              환자정보: data.confirmList[i].contents,
              진료_예약_날짜: datestr,
              id: data.confirmList[i].id              
            };
            this.$data.items2.push(b);
            console.log(this.$data.items2);
          }
        })
        .catch( error => {
          console.log("DoctorReservatedVue: error : ");
          this.$alertify.error('서버에러 발생.');

        });
    }
  },
  mounted() {
      
      // 의사 진료 신청 내역 테이블 리스트 post
      if(this.isDoctorGetters) {
        http.post(
          "/reserve/doctor",
          {
            userId: this.$store.state.login.login.userId,
          }
        )
        .then(({ data }) => {
          console.log(data);
          this.$data.items1 = [];
          this.$data.items2 = [];
          //for문 객체를 만들어서 변수에 add
          console.log("sssssssssssss")
          for(var i=0; i<data.appliedList.length; i++) {
            var datestr = data.appliedList[i].reservedDt
            var b={
              isActive: true,
              담당의: data.appliedList[i].doctorInfo.user.name,
              환자명: data.appliedList[i].user.name,
              환자정보: data.appliedList[i].contents,
              진료_예약_날짜: datestr,
              id: data.appliedList[i].id              
            };
            this.$data.items1.push(b);
            console.log(this.$data.items1);
          }

          //for문 객체를 만들어서 변수에 add
          for(var i=0; i<data.confirmList.length; i++) {

            var datestr = data.confirmList[i].reservedDt

            var c={
              isActive: true,
              담당의: data.confirmList[i].doctorInfo.user.name,
              환자명: data.confirmList[i].user.name,
              환자정보: data.confirmList[i].contents,
              진료_예약_날짜: datestr,
              id: data.confirmList[i].id              
            };
            this.$data.items2.push(c);
            console.log("sssssssss3333333333333333")
            console.log(this.$data.items2);
          }
        })
        .catch( error => {
          console.log("DoctorReservatedVue: error : ");
          this.$alertify.error('서버에러 발생.');

        });
      }else  // 환자 진료 신청 내역 테이블 리스트 post
      {
        http.post(
          "/reserve/patient",
          {
            userId: this.$store.state.login.login.userId,
          }
        )
        .then(({ data }) => {
          console.log(data);

          //for문 객체를 만들어서 변수에 add
          for(var i=0; i<data.appliedList.length; i++) {
            var datestr = data.appliedList[i].reservedDt
            var b={
              isActive: true,
              담당의: data.appliedList[i].doctorInfo.user.name,
              환자명: data.appliedList[i].user.name,
              환자정보: data.appliedList[i].contents,
              진료_예약_날짜: datestr,
              id: data.appliedList[i].id              
            };
            this.$data.items3.push(b);
            console.log(this.$data.items3);
          }

          //for문 객체를 만들어서 변수에 add
          for(var i=0; i<data.confirmList.length; i++) {
            var datestr = data.confirmList[i].reservedDt
            var b={
              isActive: true,
              담당의: data.confirmList[i].doctorInfo.user.name,
              환자명: data.confirmList[i].user.name,
              환자정보: data.confirmList[i].contents,
              진료_예약_날짜: datestr,
              id: data.confirmList[i].id,
            };
            this.$data.items4.push(b);
            console.log(this.$data.items4);
          }

        })
        .catch( error => {
          console.log("PatientReservatedVue: error : ");
          this.$alertify.error('서버에러 발생.');

        });
      }



  }

};
</script>
