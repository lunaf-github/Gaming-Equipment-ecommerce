<template>
  <div class="storegrid">
    <transition-group name="items" tag="section" class="content">
      <!-- <div v-for="item in filteredprice" :key="item.id" class="item">
        <nuxt-link :to="`product/${item.id}`">
          <Img :src="`/products/${item.img}`"/>
        </nuxt-link>
      </div> -->
    </transition-group>
  </div>
</template>

<script>
import StarRating from "vue-star-rating/src/star-rating.vue";

export default {
 props: {

 },
 data() {
   return {
    
   }
 },
 computed: {

 },
 components: {

 }
}
</script>

<style>

</style>