<template>
  <div>
    <app-textlockup />
    <app-sales-boxes />
    <app-textlockup>
      <template v-slot:img>
        <img src = "/bag.jpg" alt="bag" />
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
