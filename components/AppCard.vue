<template>
  <div id="app">
   <div v-if="cartUIStatus == 'idle'" class="payment">
    <h3>Please enter your payment details:</h3>
    <label for="email">Email</label>
    <br/>
    <input id="email" type="email" v-model="stripeEmail" placeholder="name@example.com" />
    <br/>
    <label for="card">Credit Card</label>
    <br/>
    <small>
     Test using these STrype test credit numbers with any CVC, postal code, and expiration date in the future:
     <ul>
      <li>
       <span class="cc-number">4242 4242 4242 4242</span>
      </li>
      <li>
       <span class="cc-number">4000 0027 6000 9995</span> (requires authentication, will trigger a pop-up)
      </li>
      <li>
       <span class="cc-number">4000 0000 0000 9995</span> (will decline with a decline code of insufficient funds)
      </li>
     </ul>
    </small>
    <StripeElements 
      :stripe-key="stripeKey"
      :instance-options="instanceOptions"
      :element-options="elementsOptions"
      #default="{elements}"
      ref="elm"
      style="background-color:white"
    >
        <StripeElement
          type="card" 
          class="stripe-card"
          :elements="elements"
          id="card"
          :class="{complete}"
          @change="complete = $event.complete"
          ref="card"
        />
    </StripeElements>
    <small class="card-error">{{ error }}</small>
    <button
      class="pay-with-stripe button"
      @click="pay"
      :disabled="!complete || !stripeEmail || loading"
    >Pay with credit card</button>
   </div>

   <div v-else class="statussubmit">
      <div v-if="cartUIStatus === 'failure'">
        <h3>Oh No!</h3>
        <p>Something went wront!</p>
        <button @click="clearCart">Please try again</button>
      </div>

      <div v-else-if="cartUIStatus === 'loading'" class="loadcontain">
        <h4>Please hold, we're filling up your cart with goodies</h4>
        <p>Placeholder Loader</p>
      </div>

      <div v-else-if="cartUIStatus === 'success'" class="loadcontain"> 
        <h4>Success!</h4>
      </div>
   </div>

  </div>
</template>

<script>
import { StripeElement, StripeElements } from 'vue-stripe-elements-plus';
import { mapState } from "vuex";

export default {
 name:'PaymentSimple',
 computed:{
  ...mapState(["cartUIStatus"])
 },
 components: { StripeElement, StripeElements },
 data(){
  return{
    stripeKey: 'pk_test_8ssZgwB2PiH0ajJksD2gVbsG00u7Y3IDPv',
    complete:false,
    instanceOptions: {},
    elementsOptions:{},
    error:"",
    stripeEmail:"",
    loading:false
  }
 },
 methods: {
  pay(){
    this.$store.commit("updateCartUI", "success");
  },
  clearCart() {
    this.complete = false;
    this.$store.commit("clearCart");
  }
 }
}
</script>

<style lang="scss" scoped>
  .stripe-card {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  border: 1px solid #ccc;
  padding: 5px 10px;
  }

</style>