<template>
  <div>
    <div class="inner-page">
      <Header />
      <!-- <Breadcrumbs main="Home" title="마이페이지" /> -->
    </div>
    <MyPage />
    <Footer />
    <TapTop />
  </div>
</template>

<script>
import Header from "../../components/common/header/header.vue";
import Breadcrumbs from "../../components/common/breadcrumb/bread_crumbs.vue";
import MyPage from "../../components/mypage/mypage.vue";
import Footer from "../../components/common/footer/footer.vue";
import TapTop from "../../components/common/tap-to-top/taptop.vue";

export default {
  components: {
    Header,
    Breadcrumbs,
    MyPage,
    Footer,
    TapTop,
  },
};

</script>