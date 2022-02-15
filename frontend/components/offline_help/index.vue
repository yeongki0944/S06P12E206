<template>
  <!--Landing Page start -->
  <client-only>
    <div class="theme-landing">
      <Header />
      <!-- <Slider /> -->
      <!-- <AppDesign /> -->
      <!-- <ChitChat /> -->
      <!-- <Collaboration /> -->
      <!-- <TeamWork /> -->
      <!-- <SecureApp /> -->

      <!-- 나중에 우리팀 팀원들 넣기 -->
      <!-- <section class="section-py-space light-bg">
        <div class="landing-title">
          <div>
            <h1>Team</h1>
          </div>
          <div class="sub-title">
            <div>
              <h4>Team</h4>
              <h2>Our Experts</h2>
            </div>
          </div>
        </div>
        <Testimonial />
      </section> -->

      <!-- <PricingPlan /> -->
      <!-- <SubscribeUpdate /> -->

      <center>
        <div>
          <img
            class="img-fluid mt-5"
            src="../../assets/images/offline_help/001.png"
            alt="tab-detail-img"
            style="width: 40%"
          />
        </div>
        <div>
          <img
            class="img-fluid"
            src="../../assets/images/offline_help/002.png"
            alt="tab-detail-img"
            style="width: 40%"
          />
        </div>
        <div>
          <img
            class="img-fluid"
            src="../../assets/images/offline_help/003.png"
            alt="tab-detail-img"
            style="width: 40%"
          />
        </div>
        <div>
          <Vue-qr-code id="test" :value="theValue" />
        </div>
      </center>

      <Footer />
      <TapTop />
    </div>
  </client-only>
  <!--Landing Page end -->
</template>

<script>
import Header from "../common/header/header.vue";
import Footer from "../common/footer/footer.vue";
import TapTop from "../common/tap-to-top/taptop.vue";
import VueQrCode from "vue-weblineindia-qrcode";

export default {
  components: {
    Header,
    Footer,
    TapTop,
    VueQrCode,
  },
  head() {
    return {
      bodyAttrs: {
        class: "theme-landing-main",
      },
    };
  },
  data() {
    return {
      theValue: "https://xn--3j1b610aimlm4e.site/#/offline/room/",
    };
  },
};
</script>
<style scoped>
#test {
  width: 300px;
}
</style>
