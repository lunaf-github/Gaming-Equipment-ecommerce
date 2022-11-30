<template>
  <section class="boxes">
   <div v-for="(box, i) in boxes" :key="box.heading" :class="`box${i}`">
    <img :src="box.icon" alt="service icon" />
    <h4>{{box.heading}}</h4>
    <p>{{box.details}}</p>
   </div>
  </section>
</template>

<script>
export default {
 data(){
   return{
     boxes:[
       {
         icon: "/icon-package.svg",
         heading: "Free Shipping Globally",
         details: "Delivery in 4 Days"
       },
       {
         icon: "/icon-cal.svg",
         heading: "24/7 Customer Service",
         details: "Call us any time"
       },
       {
         icon: "/icon-service.svg",
         heading: "Easy Online Returns",
         details: "Send Within 30 Days"
       }    
   ]
  };
 }
};
</script>

<style lang="scss" scoped>
.boxes {
 margin: 70px 0;
 border: 1px #ddd;
 min-height: 150px;
}
</style>