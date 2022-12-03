<template>
  <footer>
   <app-footer-links />
   <div class="fernstuff">
    <p>
     This project is 
     <a href="https://github.com/lunaf-github/Gaming-Equipment-ecommerce">open source</a>
     and was developed by Fernando Luna. 
    </p>
   </div>
  </footer>
</template>

<script>
import AppFooterLinks from "~/components/AppFooterLinks.vue";

export default {
 components:{
  AppFooterLinks
 }
};
</script>

<style lang="scss" scoped>
 .fernstuff {
  background: black;
  width: 100%;
  padding: 10px 30px;
  color: white;
  text-align: center;
 }

 a,
 a:active,
 a:visited {
  color:#c4c3ec;
  font-weight: bold;
 }
</style>