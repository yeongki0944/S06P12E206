<template>
  <!--Breadcrumb start -->
  <section class="breadcrumb-main">
    <div class="custom-container">
      <h2>{{ title }}</h2>
    </div>
  </section>
  <!--Breadcrumb end -->
</template>
<script>
export default {
  props: {
    title: {
      default: "Home",
    },
    main: {
      default: "",
    },
  },
};
</script>
