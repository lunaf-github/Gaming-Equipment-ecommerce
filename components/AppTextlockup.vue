<template>
  <div class="textlockup">
   <div class="img">
    <slot name="img">
     <img src="/gamer-setup-1.jpg" alt="shoe" />
    </slot>
   </div>
   <div class="new">
    <slot name="new">Game</slot>
   </div>
   <div class="sale">
    <slot name="sale">With</slot>
   </div>
   <div class="collection">
    <slot name="collection">Style</slot>
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
 grid-template-columns: 50px 100px 1fr;
 grid-template-rows: 50px 50px 100px 20px 1fr;
 grid-column-gap:0px;
 grid-row-gap:0px;

 .new{
  grid-area: 1/3/5/4;
  font-size: 23vmin;
  color: #efefef;
  text-transform: uppercase;

 }
 .sale{
  grid-area:2/3/3/4;
  font-size: 6.5vmin;
  color:#d96528;
  font-family: "PT Serif", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  }
  .collection{
    grid-area: 3/ 3/ 4/ 4;
    font-size:2vmin;
    letter-spacing: 0.2em;
    text-transform: uppercase;

  }
  .details {
    grid-area: 4/3/5/4;
    font-size:2vmin;
    letter-spacing: 0.2em;
    text-transform: uppercase;

  }
  .img {
    grid-area: 1/3/6/4;
    max-width:950px;


    img{
      width:95%;
    }
  }

}
</style>