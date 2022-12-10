<template>
  <div>
   <app-store-grid :data="mouseDevices"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppStoreGrid from '../components/AppStoreGrid.vue';
export default {
 computed:{
   ...mapGetters(["mouseDevices"])
 },
 components: {
   AppStoreGrid
 }

}
</script>

<style>

</style>