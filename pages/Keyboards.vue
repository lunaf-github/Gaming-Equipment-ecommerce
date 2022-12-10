<template>
  <div>
   <app-store-grid :data="keyboards"/>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import AppStoreGrid from "~/components/AppStoreGrid.vue"

export default {
  computed: {
    ...mapGetters(["keyboards"])
  },
  components: {
    AppStoreGrid
  }

}
</script>

<style>

</style>