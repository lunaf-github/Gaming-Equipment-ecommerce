<template>
 <app-store-grid :data="storedata" />
</template>

<script>
import { mapState } from 'vuex';
import AppStoreGrid from '../components/AppStoreGrid.vue'

export default {

 computed: {
   ...mapState(["storedata"])
 },
 components: {
   AppStoreGrid
 }
}
</script>

<style lang="scss" scoped>

</style>