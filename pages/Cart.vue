<template>
  <div>
    <app-cart-steps/>
    <hr/>
    <h2 class="center">Your Cart</h2>

    <section v-if="cartUIStatus === 'idle'">
      <app-cart-display />
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AppCartDisplay from '../components/AppCartDisplay.vue';
import AppCartSteps from '../components/AppCartSteps.vue';

export default {
  components:{
    AppCartSteps,
    AppCartDisplay
  },
  computed: {
   ...mapState(["cartUIStatus"])
  }
}
</script>

<style>

</style>