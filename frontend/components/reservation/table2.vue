<template>
  <section class="element-span-prag">
    <!-- 예약 신청 -->
    <div class="row">
      <div class="col-12">
        <div class="element-card" id="reserve">
          <div class="element-card-header heading">
            <h2>예약 신청</h2>
          </div>
          <div class="element-card-body typography">
            <!-- <b-form-group
              label-cols="4"
              label-cols-lg="2"
              label-size="lg"
              label="진료과"
              label-for="reserve_date"
            > -->
            <div>
              <b-form-group
                label-cols="5"
                label-size="lg"
                label-align="center"
                label="진료과"
                label-for="reserve_class"
              >
                <b-form-select
                  v-model="subject"
                  :options="opts"
                  @change="changed"
                ></b-form-select>
              </b-form-group>
            </div>
            <b-form-group
              label-cols="5"
              label-size="lg"
              label-align="center"
              label="담당의"
              label-for="reserve_docter"
            >
              <b-form-select v-model="doc" :options="doctors"></b-form-select>
            </b-form-group>
            <b-form-group
              label-cols="5"
              label-size="lg"
              label-align="center"
              label="날짜"
              label-for="reserve_date"
            >
              <date-picker v-model="date" :config="options"></date-picker>
              <div class="mt-4"></div>
            </b-form-group>

            <b-form-group
              label-cols="5"
              label-size="lg"
              label-align="center"
              label="증상"
              label-for="reserve_date"
            >
              <b-form-input
                v-model="contents"
                id="input-default"
              ></b-form-input>
              <div class="mt-4"></div>

              <b-button
                style="float: right"
                type="submit"
                variant="success"
                @click="apply"
                >신청</b-button
              >
            </b-form-group>

            <!-- <b-form-group
              label-cols="5"
              label-size="lg"
              label-align="center"
              label="증상"
              label-for="reserve_description"
            >
              <b-form-input
                v-model="text"
                placeholder="증상을 적어주세요"
              ></b-form-input>
            </b-form-group> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from "vue";
import datePicker from "vue-bootstrap-datetimepicker";
import http from "@/components/common/axios.js";
import "@fortawesome/fontawesome-free/css/all.css";
import "pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css";
Vue.use(datePicker); // Register datePicke

export default {
  components: { datePicker },
  data() {
    return {
      contents: null,
      subject: null,
      doc: null,
      opts: [
        { value: null, text: "진료과를 선택해주세요" },
        { value: "내과", text: "내과" },
        { value: "치과", text: "치과" },
        { value: "소아과", text: "소아과" },
        { value: "이비인후과", text: "이비인후과" },
        { value: "외과", text: "외과" },
        { value: "안과", text: "안과" },
      ],
      doctors: [{ value: null, text: "의사를 선택해주세요" }],
      date: new Date(),
      options: {
        format: "YYYY-MM-DD h:m:s a",
        useCurrent: false,
        icons: {
          time: "far fa-clock",
          date: "far fa-calendar",
          up: "fas fa-arrow-up",
          down: "fas fa-arrow-down",
          previous: "fas fa-chevron-left",
          next: "fas fa-chevron-right",
          today: "fas fa-calendar-check",
          clear: "far fa-trash-alt",
          close: "far fa-times-circle",
        },
        daysOfWeekDisabled: [0, 6],
        minDate: new Date(new Date().setDate(new Date().getDate() - 1)),
      },
    };
  },

  methods: {
    changed() {
      // changed post
      http
        .post("/reserve/doctor/list", {
          depart: this.$data.subject,
        })
        .then(({ data }) => {
          console.log(data);
          this.$data.doctors = [];
          this.$data.doctors.push({ value: null, text: "의사를 선택해주세요" });
          for (var i = 0; i < data.list.length; i++) {
            var b = {
              value: data.list[i].id,
              text:
                data.list[i].user.name +
                " " +
                data.list[i].departName +
                "전문의",
            };
            this.$data.doctors.push(b);
          }
        })
        .catch((error) => {
          console.log("ChangedVue: error : ");
          this.$alertify.error("서버에러 발생.");
        });
    },
    apply() {
      console.log(this.$data.doc);
      console.log(this.$store.state.login.login.userId);
      // applied post
      http
        .post("/reserve/apply", {
          useId: this.$store.state.login.login.userId,
          docId: this.$data.doc,
          date: this.$data.date,
          content: this.$data.contents,
        })
        .then(({ data }) => {
          console.log(data);

          this.$alertify
            .alert("해당 의사님께 예약 신청이 완료되었습니다.", function () {})
            .set({ title: "수화닥터.site" });
          this.$nuxt.$options.router.push("/");
        })
        .catch((error) => {
          console.log("ChangedVue: error : ");
          this.$alertify.error("서버에러 발생.");
        });
    },
  },
};
</script>

<style scoped>
#reserve {
  overflow: visible;
}
</style>
