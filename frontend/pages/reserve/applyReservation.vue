<template>

    <div>
    <client-only>
      <div class="inner-page">
        <Header />
        <Breadcrumbs main="Home" title="예약 신청" />
      </div>
      <ul class="page-decore">
        <li class="top">
          <img
            class="img-fluid inner2"
            src="../../assets/images/landing/footer/2.png"
            alt="footer-back-img"
          />
        </li>
        <li class="bottom">
          <img
            class="img-fluid inner2"
            src="../../assets/images/landing/footer/2.png"
            alt="footer-back-img"
          />
        </li>
      </ul>
        <ApplyReservation />
      <Footer />
      <TapTop />
    </client-only>
    </div>
</template>

<script>
import ApplyReservation from "../../components/reservation/applyReservation.vue";
import Header from "../../components/common/header/header.vue";
import Breadcrumbs from "../../components/common/breadcrumb/bread_crumbs.vue";
import Footer from "../../components/common/footer/footer.vue";
import TapTop from "../../components/common/tap-to-top/taptop.vue";
export default {
  components: {
    ApplyReservation,
    Header,
    Breadcrumbs,
    Footer,
    TapTop,
  },
};
</script>
