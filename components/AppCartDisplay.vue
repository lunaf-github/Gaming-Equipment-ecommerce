<template>
  <div>
    <section v-if="cartCount > 0">

    </section>
    <Section v-else class="center">
      <p>Your cart is empty, fill it up!</p>
      <h1>{{cartCount}}</h1>
      <button class="pay-with-stripe">
        <nuxt-link exact to="/">Back Home</nuxt-link>
      </button>
    </Section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  components:{

  },
  computed:{
    ...mapGetters(["cartCount, cartTotal"])
  }
}
</script>

<style>

</style>