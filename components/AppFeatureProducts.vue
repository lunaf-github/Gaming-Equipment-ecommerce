<template>
  <section>
   <h2>
     <span>Featured Products</span>
   </h2>
   <div class="featureditems">
     <div :class="`item${i}`" v-for="(product, i) in featuredProducts" :key="product.id">
         <nuxt-link :to="`../product/${product.id}`">
            <div class="image-container">
              <img class="img" :src="`/products/${product.img}`" />
            </div>
         </nuxt-link>
         <h3>{{ product.name }}</h3>
         <h4>{{ product.price | dollar}}</h4>
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
  section {
    margin-top: 60px;
  }

  .featureditems {
    width:100%;
    margin: 20px 0 70px;
    .item0,
    .item1,
    .item2{
      border-radius: 10%;
      padding: 20px 20px 30px 20px;
      height: 55vh;
      justify-self: center;
      align-self: center;
      text-align: center;
    }

    .item1{
    grid-area: 1 / 1 / 2 / 2;
    border: 1px solid #e62a2a;
    box-shadow: 0 3px 10px 0px rgb(255, 0, 0);
    }
    .item2{
    grid-area: 1 / 2 / 2 / 3;
    border: 1px solid #2a33e6;
    box-shadow: 0 3px 10px 0px rgb(0, 4, 255);
    }
   .item0{
    grid-area: 1 / 3 / 2 / 4;
    border: 1px solid #69e62a;
    box-shadow: 0 3px 10px 0px rgb(47, 255, 0);
  }
  }

  h4 {
    color: #d96528;
    margin: 10px 0;
    
  }

  h2 {
    color:#d96528;
    text-align: center;
    overflow: hidden;
  }
  h2 span {
    display:inline-block;
    position: relative;
  }

  h2 span:after,
  h2 span:before {
    content: " ";
    display: block;
    height: 1px;
    width: 1000px;
    background: #e6baa4;
    position: absolute;
    top: 50%;
  }

  h2 span:before {
    left: -1010px;
  }
  h2 span:after {
    right: -1010px;
  }

  h3 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;

    width: 97%;
  }

  @media screen and (max-width: 699px) {
    .featureditems {
      width: 83vw;
      margin-left: 5vw;

      img {
        max-width: 75vw;
      }

      div {
        padding: 10px 20px;
        margin-bottom: 10px;
      }
    }

    img {
      width: initial;
    }
  } 

  @media screen and (min-width: 700px) {
    .featureditems {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr;
      grid-column-gap: 20px;
      grid-row-gap: 0px;
      text-align: center;
      width: 80vw;
    }

    img {
      width: 90%;
    }

    .image-container{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 5px;
      height: 40vh;
      border: 4px solid grey;
      overflow: hidden;
      background-color: white;
      border-radius: 10%;
      margin-bottom: 5px;
    }
  }
</style>

