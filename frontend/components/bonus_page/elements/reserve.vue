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
                  v-model="selected"
                  :options="options"
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
              <b-form-select
                v-model="selected"
                :options="options"
              ></b-form-select>
            </b-form-group>
            <b-form-group
              label-cols="5"
              label-size="lg"
              label-align="center"
              label="날짜"
              label-for="reserve_date"
            >
              <b-form-datepicker
                id="reserve_date"
                v-model="value"
                class="mb-2"
              ></b-form-datepicker>
            </b-form-group>
            <b-form-group
              label-cols="5"
              label-size="lg"
              label-align="center"
              label="이름"
              label-for="reserve_name"
            >
              <b-form-input
                v-model="text"
                placeholder="로그인상태면 사용자 이름 받아오기?"
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="success">신청</b-button>
            <b-button type="reset" variant="danger">취소</b-button>
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
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "진료과를 선택해주세요" },
        { value: "내과", text: "내과" },
        { value: "이비인후과", text: "이비인후과" },
      ],
    };
  },
};
</script>

<style scoped>
#reserve {
  overflow: visible;
}
</style>
