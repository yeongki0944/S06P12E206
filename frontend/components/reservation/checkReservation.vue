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
}
</script>

<style>

</style>