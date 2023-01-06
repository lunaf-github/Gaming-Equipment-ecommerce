<template>
  <div class="textlockup">
   <div class="img">
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
.textlockup {
 display:grid;
 grid-template-columns: 50px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 50px;
 grid-template-rows: 50px 70px 30px 20px 1fr;
 grid-column-gap:0px;
 grid-row-gap:0px;
 height: 80vh;
 width: auto;
 .new{
  grid-area: 1/2/3/4;
  font-size: 15vmin;
  color: #efefef;
  text-transform: uppercase;

 }
  .collection{
    grid-area: 3/ 3/ 4/ 4;
    font-size:2.5vmin;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color:#d96528;
    font-weight: bold;
  }
  .details {
    grid-area: 4/2/5/4;
    font-size:2vmin;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color:#efefef;
    font-weight: bold;

  }
  .img {
    grid-area: 1/1/6/10;
    width: 73vw;
    overflow: hidden;
    border: 1px solid #eee2dc;
    box-shadow: 0 3px 10px 0px #eee;

    img{
      width:100%;
      height: auto;

    }
  }

}
</style>