<template>
  <div>
    <section v-if="cartCount > 0">
      <table>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th></th>
        </tr>
        <tr v-for="item in cart" :key="item.id">
          <td>
            <img :src="`/products/${item.img}`" :alt="item.name" class="product-img" />
            <h3 class="product-name">{{ item.name }}</h3>
          </td>
          <td>
            <h4 class="price">{{ item.price }}</h4>
          </td>
          <td>
            <button>-</button>
            <strong>{{ item.quantity }}</strong>
            <button @click="addToCart(item)" class="quantity-adjust">+</button>
          </td>
          <td>{{ (item.quantity * item.price) }}</td>
          <td>
            <button>X</button>
          </td>
        </tr>
      </table>
    </section>
    <Section v-else class="center">
      <p>Your cart is empty, fill it up!</p>
      <button class="pay-with-stripe">
        <nuxt-link exact to="/">Back Home</nuxt-link>
      </button>
    </Section>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  components:{

  },
  computed:{
    ...mapState(["cart"]),
    ...mapGetters(["cartCount"])
  },
  methods:{
    addToCart(item){
      this.$store.commit("addOneToCart", item)
    }
  }
}
</script>

<style lang="scss" scoped>
  .product-img {
    float: left;
    margin-right: 15px;
    width: 100px;
  }
</style>