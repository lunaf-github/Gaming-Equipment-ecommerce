<template>
  <header>
   <h1>Gamer's Den</h1>
   <nav>
    <ul>
     <li>
      <nuxt-link to="/">Home</nuxt-link>
     </li>
     <li>
      <nuxt-link to="/All">All</nuxt-link>
     </li>
     <li>
      <nuxt-link to="/Accessories">Accessories</nuxt-link>
     </li>
     <li>
      <nuxt-link to="/Desks">Desks</nuxt-link>
     </li>
     <li>
      <nuxt-link to="/Chairs">Chairs</nuxt-link>
     </li>
     <li>
      <nuxt-link to="/keyboards">Keyboards</nuxt-link>
     </li>
     <li>
      <nuxt-link to="/MouseDevices">Mouse Devices</nuxt-link>
     </li>
     <li>
      <nuxt-link to="/headsets">Headsets</nuxt-link>
     </li>
     <li>
      <nuxt-link to="/Monitors">Monitors</nuxt-link>
     </li>
     <li>
      <div class="carttotal" v-if="cartCount > 0">{{ cartCount }}</div>
      <nuxt-link to="/Cart">Cart</nuxt-link>
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
  header {
    display:flex;
    justify-content: center;
    flex-direction: column;
    padding: 40px 40px 0;
  }

  nav {
    display: flex;
    width: 80vw;
    margin-top: 30px;
    justify-content: center;
    align-items: center;
    padding: 8px 0;
    ul {
      padding-left: 0;
      li {
        display: inline;
        margin-left: 1vw;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-size: .9em;
        position: relative;
        a {
          color: white;
          font-weight: bold;
          &:hover {
            color: #c14103;
          }
        }
      }
    }
  }

  .carttotal {
    position:absolute;
    border-radius: 100%;
    background-color: black;
    color:white;
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
</style>