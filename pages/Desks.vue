<template>
  <app-store-grid :data="desks" />
</template>

<script>
import { mapGetters } from 'vuex';
import AppStoreGrid from '../components/AppStoreGrid.vue'

export default {
  computed: {
    ...mapGetters(["desks"])
  },
  components: {
    AppStoreGrid
  }
}
</script>

<style>

</style>