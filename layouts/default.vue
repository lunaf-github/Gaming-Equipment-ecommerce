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


body {
  border: 10px solid #ccc;
  min-height: 100vh;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.4;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

main {

  padding: 0;
  width: 95vw;
  margin-left: 0vw; 
  display: flex;
  flex-direction: column;
  align-items: center;
}


/* div {
  display: flex;
  flex-direction: column;
  align-items: center;
} */


@media screen and (min-width: 1000px) {
  main {
    padding: 40px;
    width: 80vw;
    margin-left: 7vw;
  }
}
</style>