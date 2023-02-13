<template>
  <div class="test">
    <app-textlockup />
    <app-sales-boxes />
    <app-textlockup>
      <template v-slot:img>
        <img src = "/gamer-setup-2.jpg" alt="bag" />
      </template>
      <template v-slot:new>15%</template>
      <template v-slot:sale>Storewide</template>
      <template v-slot:collection>OFF</template>
      <template v-slot:details>All accessories</template>
    </app-textlockup>
    <app-feature-products />
  </div>
</template>

<script>
import AppTextlockup from "~/components/AppTextlockup.vue";
import AppSalesBoxes from "~/components/AppSalesBoxes.vue";
import AppFeatureProducts from "../components/AppFeatureProducts.vue";

export default {
  name: 'IndexPage',
  components: {
    AppTextlockup,
    AppSalesBoxes, 
    AppFeatureProducts
  }
}
</script>

<style lang="scss" scoped>

  .test {
    border: 1px solid red;
    width: 100%;
  }
</style>
