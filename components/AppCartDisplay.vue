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
            <button @click="removeOneFromCart(item)" class="quantity-adjust">-</button>
            <strong>{{ item.quantity }}</strong>
            <button @click="addToCart(item)" class="quantity-adjust">+</button>
          </td>
          <td>{{ (item.quantity * item.price) }}</td>
          <td>
            <button @click="removeAllFromCart(item)" class="delete-product">X</button>
          </td>
        </tr>
      </table>

      <section class="payment">
        <div class="total">
          <div class="caption">
            <p>
              <strong>Subtotal:</strong>
            </p>
            <p>Shipping:</p>
            <p class="golden">Total:</p>
          </div>
          <div class="num">
            <p>
              <strong>{{ cartTotal }}</strong>
            </p>
            <p>Free Shipping</p>
            <p class="golden">{{ cartTotal }}</p>
          </div>
        </div>
      </section>
    </section>

    <section v-else class="center">
      <p>Your cart is empty, fill it up!</p>
      <button class="pay-with-stripe">
        <nuxt-link exact to="/">Back Home</nuxt-link>
      </button>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  components:{

  },
  computed:{
    ...mapState(["cart"]),
    ...mapGetters(["cartCount", "cartTotal"])
  },
  methods:{
    addToCart(item){
      this.$store.commit("addOneToCart", item)
    },
    removeOneFromCart(item){
      this.$store.commit("removeOneFromCart", item);
    },
    removeAllFromCart(item){
      this.$store.commit("removeAllFromCart", item);
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

  .total {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 100px;
  }

  table {
    width: 100%;
    margin-top: 20px;
  }

  tr {
    text-align: center;
  }

  th {
    text-align: center;
  }

  td,
  th {
    border-bottom: 1px solid #ccc;
  }

  .golden {
    background: #f2eee2;
    font-weight: bold;
    padding: 10px;
  }

  .product-name {
    text-align: left;
    padding-top: 36px;
  }

  .num {
    text-align: right;
  }

  button a {
    color: white;
    transition: 0.3s all ease;
  }

</style>