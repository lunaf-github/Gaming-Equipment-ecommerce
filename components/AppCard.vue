<template>
  <div id="app">
   <div class="payment">
    <h3>Please enter your payment details:</h3>
    <label for="email">Email</label>
    <br/>
    <input id="email" type="email" placeholder="name@example.com" />
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
    <!-- <stripe-element-card /> -->
   </div>

  </div>
</template>

<script>
// import { StripeElementCard } from '@vue-stripe/vue-stripe';
export default {


 components: {
  // StripeElementCard
 }
}
</script>

<style>

</style>