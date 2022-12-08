<template>
  <div>
    <app-store-grid :data="headsets"/>
  </div>
</template>

<script>

import { mapGetters } from "vuex";
import AppStoreGrid from "~/components/AppStoreGrid.vue";

export default {
  components: {
    AppStoreGrid
  },
  computed: {
    ...mapGetters(["headsets"])
  }
}
</script>

<style>

</style>