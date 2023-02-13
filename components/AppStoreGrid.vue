<template>
  <div class="storegrid">
    <transition-group name="items" tag="section" class="storegrid__items">
      <div v-for="item in filteredprice" :key="item.id" class="item">
       <div class="item__img">
         <nuxt-link :to="`/product/${item.id}`">
           <div class="image-container">
             <Img :src="`/products/${item.img}`"/>
           </div>
         </nuxt-link>
       </div>
       <star-rating
         :rating="item.starrating"
         active-color="orange"
         :star-size="15"
         style="margin: 5px 0"
       ></star-rating>
       <h3 class="item__name">{{ item.name }}</h3>
       <h4 class="item__price">{{item.price | dollar}}</h4>
      </div>
    </transition-group>
    <aside class="special-sales">
     <h3>Special Sale</h3>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam libero iusto nemo laboriosam perferendis voluptas ullam officiis, quibusdam quas quam eveniet est fugit delectus corporis incidunt nam esse suscipit itaque?</p>
     <h3>Filter by Price:</h3>
     <p>
       Max Price
       <strong>${{pricerange}}</strong>
     </p>
     <input
       class="slider"
       id="pricerange"
       type="range"
       :min="min"
       :max="max"
       v-model= "pricerange"
       step="0.1"
     />
     <span class="min">${{ min }}</span>
     <span class="max">${{ max }}</span>
    </aside>
  </div>
</template>


<script>

import StarRating from "vue-star-rating/src/star-rating.vue";

export default {
 props: {
   data:{
     required: true
   }
 },
 data() {
   return {
     min: 0,
     max:0,
     pricerange: 0
   }
 },
 computed: {
   filteredprice() {
     return this.data.filter(el => el.price <= this.pricerange);
   },
 },
 components: {
   StarRating
 },
 methods: {
   getMaxRange(){
     let max = 0;
     this.data.forEach(el => {
      if(el.price > max) max = el.price;
     })
     
     this.pricerange = Math.ceil(max);
     this.max = Math.ceil(max);
   }
 },
 mounted(){
  this.getMaxRange();
 }
}
</script>

<style lang="scss" scoped>

.storegrid{
  border: 1px solid blue;
  width: 95%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 0px;

  &__items {
    height: 100%;
    width: 100%;
    /*no grid support*/
    float: right;
    width: 79.7872%;
    /* grid */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    padding: 0 !important;
  }
}

/* no grid support */
aside {
  float: left;
  width: 19.1489%;
}



.item {
  max-height: 325px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin: 10px 0;
  text-align: center;
  background-color: rgb(29, 28, 28);
  border: 1px solid black;

  &__img {
      height: 200px;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      position: relative;
      background-color: white;
      height: 25vh;
      width: 100%;
      img {
        max-height: 150px;
        max-width: 150px;
      }
  }

  &__name {
    margin: 2px;
    height: 50px;
    overflow: hidden;
  }

  &__price {
    margin:2px;
    color: map-get($colors, brandPrimary);
    font-size: 20px;
    margin: 5px 0;
    font-weight: normal;
    font-family: "PT Serif", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif;
  }
}



aside {
 height: 100%;
 width: 100%;
}

.max {
 display: inline-block;
 float: right;
}


@media (max-width: 600px) {
  aside {
    width: 100% !important;
    margin-bottom: 10px !important;
  }

  .content {
    width: 100% !important;
    grid-template-columns: 1fr !important;
  }
}


@media (min-width: 601px) and (max-width: 900px) {
  .content {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}


@media screen and (max-width: 550px) {
  .storegrid {
    width: 90%;
    display: table; 
  }

  .special-sales{
    display: table-header-group;
    position:absolute;
    top: 0px;
    height:auto;
  }
}
</style>