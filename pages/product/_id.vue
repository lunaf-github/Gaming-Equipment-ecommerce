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
       <li v-for="detail in product.description" :key="detail" class="product-detail">{{detail}}</li>
      </ul>
      <div class="product-options">
        <div class="quantity">
          <button class="update-num" @click="quantity > 0 ? quantity-- : quanty = 0">-</button>
          <input type="number" v-model="quantity"/>
          <button class="update-num" @click="quantity++">+</button>
        </div>
      </div>
      <p>
        <button class="button purchase" @click="cartAdd">Add to Cart</button>
      </p>
    </section>
  </section>
  <hr/>
  <div class="review">
    <h2>Reviews</h2>
    <star-rating
      :rating="product.starrating"
      active-color="#000"
      :star-size="15"
      style="margin 5px 0"
    ></star-rating>
    <p>Great Product!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iusto placeat consequatur voluptas sit mollitia ratione autem, atque sequi odio laborum, recusandae quia distinctio voluptatibus sint, quae aliquid possimus exercitationem.</p>
  </div>
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
     id: this.$route.params.id,
     quantity:1,
     tempcart:[] // this object should be the same as the json store object, with additional param, quantity
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
  },
  methods: {
    cartAdd(){
      let item = this.product;
      item = {
        ...item,
        quantity: this.quantity,
      }
      this.tempcart.push(item);
      this.$store.commit("addToCart", {...item});
    }
  }
}
</script>

<style lang="scss" scoped>
  .item-contain{
    margin-left: 8%;
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 2fr;
  }



  img {
    width: 100%;
  }
</style>