<template>
  <section class="element-span-prag">
    <div class="row">
      <div class="col-12">
        <div class="element-card">
          <div class="element-card-header heading">
            <h2>진료 신청 내역</h2>
          </div>
          <div class="element-card-body typography">
            <b-table :items="items1" :fields="fields1" striped responsive="sm">
              <template #cell(confirm)="">
                <b-button variant="success" size="sm" class="mr-2"
                  >승인</b-button
                >
                <b-button variant="danger" size="sm" class="mr-2"
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

    <div class="row">
      <div class="col-12">
        <div class="element-card">
          <div class="element-card-header heading">
            <h2>진료 예약 목록</h2>
          </div>
          <div class="element-card-body typography">
            <b-table :items="items2" :fields="fields2" striped responsive="sm">
              <template #cell(confirm)="">
                <b-button variant="danger" size="sm" class="mr-2"
                  >진료 취소</b-button
                >
              </template>
            </b-table>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="element-card">
          <div class="element-card-header heading">
            <h2>환자측 취소 목록</h2>
          </div>
          <div class="element-card-body typography">
            <b-table :items="items2" :fields="fields2" striped responsive="sm">
              <template #cell(confirm)="">
                <b-button variant="success" size="sm" class="mr-2"
                  >취소 확인</b-button
                >
              </template>
            </b-table>
          </div>
        </div>
      </div>
    </div>

    <!-- 농아인 측 -->
    <div class="row">
      <div class="col-12">
        <div class="element-card">
          <div class="element-card-header heading">
            <h2>진료 예약 목록</h2>
          </div>
          <div class="element-card-body typography">
            <b-table :items="items4" :fields="fields4" striped responsive="sm">
              <template #cell(confirm)="">
                <b-button disabled variant="success" size="sm" class="mr-2"
                  >승인됨</b-button
                >
                <b-button disabled variant="danger" size="sm" class="mr-2"
                  >취소됨</b-button
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
  </section>
</template>

<script>
export default {
  data() {
    return {
      fields1: ["담당의", "환자명", "환자정보", "진료_예약_날짜", "confirm"],
      items1: [
        {
          isActive: true,
          담당의: "김의사",
          환자명: "박환자",
          환자정보: "환자코스프레",
          진료_예약_날짜: "2022-02-11",
        },
        {
          isActive: false,
          담당의: "김의사",
          환자명: "박환자",
          환자정보: "환자코스프레",
          진료_예약_날짜: "2022-02-11",
        },
        {
          isActive: false,
          담당의: "김의사",
          환자명: "박환자",
          환자정보: "환자코스프레",
          진료_예약_날짜: "2022-02-11",
          증상: "환자인척함",
          // _showDetails: true, //주석을 풀면 미리 상세보기가 켜져있음
        },
        {
          isActive: true,
          담당의: "김의사",
          환자명: "박환자",
          환자정보: "환자코스프레",
          진료_예약_날짜: "2022-02-11",
          // _showDetails: true,
        },
      ],
      fields2: ["담당의", "환자명", "환자정보", "진료_예약_날짜", "confirm"],
      items2: [
        {
          isActive: true,
          담당의: "이의사",
          환자명: "최환자",
          환자정보: "환자코스프레",
          진료_예약_날짜: "2022-02-17",
        },
        {
          isActive: false,
          담당의: "이의사",
          환자명: "최환자",
          환자정보: "환자코스프레",
          진료_예약_날짜: "2022-02-19",
        },
        {
          isActive: false,
          담당의: "이의사",
          환자명: "최환자",
          환자정보: "환자코스프레",
          진료_예약_날짜: "2022-02-21",
          // _showDetails: true, //주석을 풀면 미리 상세보기가 켜져있음
        },
        {
          isActive: true,
          담당의: "이의사",
          환자명: "최환자",
          환자정보: "환자코스프레",
          진료_예약_날짜: "2022-02-25",
          // _showDetails: true,
        },
      ],
      fields3: ["담당의", "환자명", "환자정보", "진료_예약_날짜", "confirm"],
      items3: [
        {
          isActive: true,
          담당의: "남의사",
          환자명: "양환자",
          환자정보: "환자코스프레",
          진료_예약_날짜: "2022-02-17",
        },
        {
          isActive: false,
          담당의: "남의사",
          환자명: "양환자",
          환자정보: "환자코스프레",
          진료_예약_날짜: "2022-02-19",
        },
        {
          isActive: false,
          담당의: "남의사",
          환자명: "양환자",
          환자정보: "환자코스프레",
          진료_예약_날짜: "2022-02-21",
          // _showDetails: true, //주석을 풀면 미리 상세보기가 켜져있음
        },
        {
          isActive: true,
          담당의: "남의사",
          환자명: "양환자",
          환자정보: "환자코스프레",
          진료_예약_날짜: "2022-02-25",
          // _showDetails: true,
        },
      ],
      fields4: [
        "담당의",
        "병원정보",
        "종목",
        "진료_예약_날짜",
        "confirm",
        "show_details",
      ],
      items4: [
        {
          isActive: true,
          담당의: "김의사",
          병원정보: "박환자",
          종목: "내과",
          예약시간: "",
          본인증상입력: "",
        },
        {
          isActive: false,
          담당의: "김의사",
          병원정보: "박환자",
          종목: "치과",
          예약시간: "",
          본인증상입력: "",
        },
        {
          isActive: false,
          담당의: "김의사",
          병원정보: "박환자",
          종목: "환자코스프레",
          예약시간: "",
          본인증상입력: "",
          // _showDetails: true, //주석을 풀면 미리 상세보기가 켜져있음
        },
        {
          isActive: true,
          담당의: "김의사",
          병원정보: "박환자",
          종목: "환자코스프레",
          예약시간: "",
          본인증상입력: "",
          // _showDetails: true,
        },
      ],
    };
  },
};
</script>
