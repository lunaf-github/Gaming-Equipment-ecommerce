<template>
  <div class="storegrid">
    <transition-group name="items" tag="section" class="content">
      <div v-for="item in filteredprice" :key="item.id" class="item">
       <div class="img-contain">
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
       <h3 class="item-name">{{ item.name }}</h3>
       <h4 class="price">{{item.price | dollar}}</h4>
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
.content {
 height: 100%;
 width: 100%;
}

.img-contain {
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
}

.item-name {

  margin: 2px;
  height: 50px;
  overflow: hidden;
}
.price {

  margin:2px;
}

aside {
 height: 100%;
 width: 100%;
}

.max {
 display: inline-block;
 float: right;
}
</style>