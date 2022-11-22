<template>
  <div class="textlockup">
   <div class="img">
    <slot name="img">
     <img src="/shoe1.jpg" alt="shoe" />
    </slot>
   </div>
   <div class="new">
    <slot name="new">New</slot>
   </div>
   <div class="sale">
    <slot name="sale">Men Shoes</slot>
   </div>
   <div class="collection">
    <slot name="collection">Collection</slot>
   </div>
   <div class="details"> 
    <slot name="details">Street Style New Fashion</slot>
   </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.textlockup {
 display:grid;
 grid-template-columns: 50px 100 px 1fr;
 grid-template-rows: 50px 50px 100px 20px 1fr;
 grid-column-gap:0px;
 grid-row-gap:0px;
}
</style>