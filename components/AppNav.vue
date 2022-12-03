<template>
  <header>
   <h1>Gamer's Den</h1>
   <nav>
    <ul>
     <li>
      <nuxt-link to="/">Home</nuxt-link>
     </li>
     <li>
      <nuxt-link to="/accesories">Accessories</nuxt-link>
     </li>
     <li>
      <nuxt-link to="/desk">Desks</nuxt-link>
     </li>
     <li>
      <nuxt-link to="/chair">Chairs</nuxt-link>
     </li>
     <li>
      <nuxt-link to="/keyboard">Keyboards</nuxt-link>
     </li>
     <li>
      <nuxt-link to="/mouse">Mouse Devices</nuxt-link>
     </li>
     <li>
      <nuxt-link to="/speaker">Speakers</nuxt-link>
     </li>
     <li>
      <nuxt-link to="/monitor">Monitors</nuxt-link>
     </li>
     <li>
      <nuxt-link to="/cart">Cart</nuxt-link>
     </li>
    </ul>
   </nav>
  </header>
</template>

<script>
export default {

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
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 8px 0;
    ul {
      padding-left: 0;
      li {
        display: inline;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-size: 13px;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
        position: relative;
        a {
          color: black;
          &:hover {
            color: #c14103;
          }
        }
      }
    }
  }
</style>