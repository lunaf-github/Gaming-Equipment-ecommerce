<template>
  <div>
    <app-store-grid :data="monitors"/>
  </div>
</template>

<script>
import AppStoreGrid from "~/components/AppStoreGrid.vue";
import { mapGetters } from "vuex";

export default {

  computed: {
    ...mapGetters(["monitors"])
  },
  components: {
    AppStoreGrid
  }
}
</script>

<style>

</style>