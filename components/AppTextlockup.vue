<template>
  <div class="text-lockup">
   <div class="text-lockup__img">
    <slot name="img">
     <img src="/gamer-setup-1.jpg" alt="shoe" />
    </slot>
   </div>
   <div class="new">
    <slot name="new">New</slot>
   </div>
   <div class="collection">
    <slot name="collection">Collection</slot>
   </div>
   <div class="details"> 
    <slot name="details">of gamer gadgets</slot>
   </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.text-lockup {
 position: relative;
 display:grid;
 grid-template-columns: repeat(10vw);
 grid-template-rows: repeat(20vh);
 grid-column-gap:0px;
 grid-row-gap:0px;
 height: 70vh;
 width: auto;

 &__img {
    position: relative;
    grid-area: 1/1/6/10;
    width: 100%;
    overflow: hidden;
    border: 1px solid #eee2dc;
    box-shadow: 0 3px 10px 0px #eee;
    img{
      position: absolute;
      top: -40vh;
      width:100%;
      height: auto;
    }
 }
 .new{
  position: absolute;
  grid-area: 1/2/3/4;
  font-size: 15vmin;
  color: #efefef;
  text-transform: uppercase;

 }
  .collection{
    position: absolute;
    grid-area: 3/ 3/ 4/ 4;
    font-size:2.5vmin;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color:#d96528;
    font-weight: bold;
  }
  .details {
    position:absolute;
    grid-area: 4/2/5/4;
    font-size:2vmin;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color:#efefef;
    font-weight: bold;

  }



  

}
</style>