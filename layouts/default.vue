<template>
  <article>
   <app-nav/>
   <main>
    <nuxt/>
   </main>
   <app-footer/>
  </article>
</template>

<script>
import AppNav from "../components/AppNav.vue"
import AppFooter from '../components/AppFooter.vue'

  export default {
    components:{
      AppNav,
      AppFooter
    }
  }
</script>

<style scoped>
</style>