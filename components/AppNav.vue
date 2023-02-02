<template>
  <header class="header">
   <h1 class="header__logo">Gamer's Den</h1>
   <nav class="nav">
    <ul class="nav__menu-items">
     <li class="nav__item">
      <nuxt-link class="nav__item-link" to="/">Home</nuxt-link>
     </li>
     <li class="nav__item">
      <nuxt-link class="nav__item-link" to="/All">All</nuxt-link>
     </li>
     <li class="nav__item">
      <nuxt-link class="nav__item-link" to="/Accessories">Accessories</nuxt-link>
     </li>
     <li class="nav__item">
      <nuxt-link class="nav__item-link" to="/Desks">Desks</nuxt-link>
     </li>
     <li class="nav__item">
      <nuxt-link class="nav__item-link" to="/Chairs">Chairs</nuxt-link>
     </li>
     <li class="nav__item">
      <nuxt-link class="nav__item-link" to="/keyboards">Keyboards</nuxt-link>
     </li>
     <li class="nav__item">
      <nuxt-link class="nav__item-link" to="/MouseDevices">Mouse Devices</nuxt-link>
     </li>
     <li class="nav__item">
      <nuxt-link class="nav__item-link" to="/headsets">Headsets</nuxt-link>
     </li>
     <li class="nav__item">
      <nuxt-link class="nav__item-link" to="/Monitors">Monitors</nuxt-link>
     </li>
     <li class="nav__item">
      <div class="nav__cart-total" v-if="cartCount > 0">{{ cartCount }}</div>
      <nuxt-link class="nav__item-link" to="/Cart">Cart</nuxt-link>
     </li>
    </ul>
   </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(["cartCount"])
  }
}
</script>

<style lang="scss" scoped>
  .header {
    display:flex;
    justify-content: center;
    flex-direction: column;
    padding: 40px 40px 0;
  }

  .nav {
    display: flex;
    width: 80vw;
    margin-top: 30px;
    justify-content: center;
    align-items: center;
    padding: 8px 0;
    &__menu-items {
      padding-left: 0;
    }
    &__item {
      display: inline;
      margin-left: 1vw;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: .9em;
      position: relative;
    }
    &__item-link {
      color: white;
      font-weight: bold;
      &:hover {
        color: #c14103;
      }
    }
    &__cart-total {
      position:absolute;
      border-radius: 100%;
      background-color: white;
      color:black;
      font-size: 10px;
      top: -23px;
      right: -15px;
      width: 6px;
      height: 14px;
      padding: 6px 10px;
      font-size: 10px;
      font-weight: bold;
      text-align:center;
    }
  }

</style>