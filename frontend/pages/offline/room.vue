<template>
  <client-only>
    <Messenger />
  </client-only>
</template>

<script>
import Messenger from "../../components/messenger/index_offline.vue";
export default {
  components: {
    Messenger,
  },
};
</script>
