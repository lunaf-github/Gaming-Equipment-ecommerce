<template>
  <app-store-grid :data="chairs" />
</template>

<script>
import { mapGetters } from 'vuex';
import AppStoreGrid from '../components/AppStoreGrid.vue';

export default {
computed: {
 ...mapGetters(["chairs"])
},
components: {
  AppStoreGrid
}
}
</script>

<style>

</style>