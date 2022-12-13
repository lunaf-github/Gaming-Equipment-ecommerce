<template>
 <div>
  <section class="item-contain">
    <section class="img">
      <img :src="`/products/${product.img}`" />
    </section>
    <section  class="product-info">
      <h1>{{ product.name }}</h1>
      <star-rating
        :rating="product.starrating"
        :star-size="15"
        active-color="#000"
        style="margin: 5px 0"
      ></star-rating>
      <h4 class="price">{{ product.price }}</h4>
      <ul>
       <li v-for="detail in product.description" :key="detail">{{detail}}</li>
      </ul>
    </section>
  </section>
  <app-feature-products />
 </div>
</template>

<script>
import { mapState } from 'vuex';
import StarRating from 'vue-star-rating/src/star-rating.vue';
import AppFeatureProducts from '~/components/AppFeatureProducts.vue';

export default {
  components: {
   StarRating,
   AppFeatureProducts
  },
  data(){
    return {
     id: this.$route.params.id
    }
  },
  computed:{
    ...mapState(["storedata"]),

    product(){
      let result;
      for(let i = 0; i < this.storedata.length; i++){
        if(this.storedata[i].id === this.id) result = this.storedata[i];
      }
      return result;
    }
  }
}
</script>

<style>

</style>