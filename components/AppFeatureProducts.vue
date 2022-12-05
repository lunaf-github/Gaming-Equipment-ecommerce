<template>
  <section>
   <h2>
     <span>Featured Products</span>
   </h2>
   <div class="featureditems">
     <div class="item" v-for="product in featuredProducts" :key="product.id">
       <img :src="`/products/${product.img}`" />
       <h3>{{ product.name }}</h3>
       <h4>{{ product.price | dollar }}</h4>
     </div>
   </div>
  </section>
</template>

<script>
export default {
  computed: {
   featuredProducts(){
    return this.$store.getters.featuredProducts;
   }
  }
}
</script>

<style lang="scss" scoped>

</style>