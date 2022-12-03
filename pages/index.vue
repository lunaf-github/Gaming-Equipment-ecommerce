<template>
  <div>
    <app-textlockup />
    <app-sales-boxes />
    <app-textlockup>
      <template v-slot:img>
        <img src = "/gamer-setup-2.jpg" alt="bag" />
      </template>
      <template v-slot:new>60%</template>
      <template v-slot:sale>Storewide Sale</template>
      <template v-slot:collection>Summer</template>
      <template v-slot:details>All accessories</template>
    </app-textlockup>
  </div>
</template>

<script>
import AppTextlockup from "~/components/AppTextlockup.vue";
import AppSalesBoxes from "~/components/AppSalesBoxes.vue";


export default {
  name: 'IndexPage',
  components: {
    AppTextlockup,
    AppSalesBoxes 
  }
}
</script>

<style lang="scss" scoped>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
