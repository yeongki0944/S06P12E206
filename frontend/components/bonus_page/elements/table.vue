<template>
    <section class="element-span-prag">
        <div class="row">
            <div class="col-12">
                <div class="element-card">
                    <div class="element-card-header heading">
                        <h2>진료 신청 내역</h2>
                    </div>
                    <div class="element-card-body typography">
                        <b-table striped hover :items="items" :fields="fields">
                            <template #cell(비고)="row">
                                {{ row.value }}
                                <b-button variant="info" size="sm" class="mr-2">
                                    승인
                                </b-button>
                                <b-button
                                    variant="danger"
                                    size="sm"
                                    class="mr-2"
                                >
                                    취소
                                </b-button>
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
                        <b-table striped hover :items="items" :fields="fields">
                            <template #cell(비고)="row">
                                {{ row.value }}
                                <b-button
                                    variant="danger"
                                    size="sm"
                                    class="mr-2"
                                >
                                    진료 취소
                                </b-button>
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
                        <b-table striped hover :items="items" :fields="fields">
                            <template #cell(비고)="row">
                                {{ row.value }}
                                <b-button
                                    variant="success"
                                    size="sm"
                                    class="mr-2"
                                >
                                    취소
                                </b-button>
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
            fields: ["담당의", "환자명", "환자_정보", "진료_예약_날짜", "비고"],
            items: [
                {
                    담당의: 40,
                    환자_정보: "Dickerson",
                    환자명: "Macdonald",
                    진료_예약_날짜: "ㅁㅇㄹ",
                },
                { 담당의: 21, 환자_정보: "Larsen", 환자명: "Shaw" },
                { 담당의: 89, 환자_정보: "Geneva", 환자명: "Wilson" },
                { 담당의: 38, 환자_정보: "Jami", 환자명: "Carney" },
            ],
        };
    },
};
</script>
