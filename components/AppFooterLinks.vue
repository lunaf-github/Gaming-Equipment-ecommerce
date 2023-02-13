<template>
  <section class="footer">
    <ul>
      <li>About</li>
      <li>Company</li>
      <li>Locations</li>
      <li>Contact</li>
      <li>Hours</li>
    </ul>
    <ul>
      <li>Twitter</li>
      <li>Facebook</li>
      <li>Instagram</li>
      <li>LinkedIn</li>
    </ul>
    <ul>
     <h4>Newsletter:</h4>
     <input type="text" />
    </ul>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
 .footer {
  width:100%;
  padding: 40px 0;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  background-color: map-get($colors,brandSecondary);
 }

 ul{
  list-style: none;
  padding-left: 0;
 }

 input{
  width: 100%;
 }

 @media screen and (min-width: 850px) {
  section {
   padding: 40px !important;
  }
 }
</style>