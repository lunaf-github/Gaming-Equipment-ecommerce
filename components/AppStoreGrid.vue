<template>
  <div class="storegrid">
    <transition-group name="items" tag="section" class="content">
      <div v-for="item in filteredprice" :key="item.id" class="item">
       <div class="img-contain">
         <nuxt-link :to="`product/${item.id}`">
           <Img :src="`/products/${item.img}`"/>
         </nuxt-link>
       </div>
       <star-rating
         :rating="item.starrating"
         active-color="#000"
         :star-size="15"
         style="margin: 5px 0"
       ></star-rating>
       <h3>{{ item.name }}</h3>
       <h4 class="price">{{item.price}}</h4>
      </div>
    </transition-group>
    <aside>
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
     
     this.pricerange = max;
     this.max = max;
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
 max-height: 200px;
 display: flex;
 align-content: center;
 align-items: center;
 img {
  width: 100%;
 }
}


.item {
 max-height: 500px;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 margin: 20px 0;
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