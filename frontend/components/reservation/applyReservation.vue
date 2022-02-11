<template>
  <!--Bonus Page Elements start -->
  <div class="container">
    <client-only>
      <Table />

      <ForEmptySpace />
    </client-only>
  </div>
  <!--Bonus Page Elements end -->
</template>

<script>
import Header from "../common/header/header.vue";
import filehttp from "@/components/common/axiosfile.js";
import http from "@/components/common/axios.js";
import Table from "./table.vue";
import ForEmptySpace from "./ForEmptySpace.vue";

export default {   
    components : {
        Header,
        Table,
        ForEmptySpace,
    },

    computed: {
        listGetters() {
            return this.$store.getters["manager/getList"];
        }
    },
    methods: {
        resumeList() {
            this.$store.dispatch("manager/resumeList");

        },
        downloadFile(userEmail) {
            filehttp
            .get("/manager/download",{
                params: {
                    email: userEmail
                }
            })
            .then(({ data }) => {
                console.log("ResumeDownload: data : ");
                console.log(data);
                const blob = new Blob([data])
                const url = window.URL.createObjectURL(blob)
                const a = document.createElement("a")
                a.href = url
                a.download = `doctor.png`
                a.click()
                a.remove()
                window.URL.revokeObjectURL(url);
                });

        },
        signDoctor(email) {
            http
            .get("/manager/signup",{
                params: {
                    email: email
                }
            })
            .then(({ data }) => {
                this.resumeList();
                this.$alertify.success('의사 등록 완료!'); 
            });            
        }

    },
    created() {
        this.resumeList();
    }
}
</script>

<style>

</style>