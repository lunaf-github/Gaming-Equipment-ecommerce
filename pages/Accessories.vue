<template>
  <div>
    <app-store-grid :data="accessories" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppStoreGrid from '../components/AppStoreGrid.vue';
export default {
  computed: {
    ...mapGetters(["accessories"])
  },
  components: {
    AppStoreGrid
  }
}
</script>

<style>

</style>