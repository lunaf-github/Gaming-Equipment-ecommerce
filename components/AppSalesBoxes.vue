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
 
 div {
  // border: 1px solid #ddd;
  min-height: 150px;
  justify-self: center;
  align-self: center;
  text-align: center;
  border: 1px solid #eee2dc;
  box-shadow: 0 3px 10px 0px #eee;
  border-radius: 40px;
 }


 .box1{
  grid-area: 1 / 1 / 2 / 2;
  border: 1px solid #e62a2a;
  box-shadow: 0 3px 10px 0px rgb(255, 0, 0);
 }

 .box2{
  grid-area: 1 / 2 / 2 / 3;
  border: 1px solid #2a33e6;
  box-shadow: 0 3px 10px 0px rgb(0, 4, 255);
 }

 .box0{
  grid-area: 1 / 3 / 2 / 4;
  border: 1px solid #69e62a;
  box-shadow: 0 3px 10px 0px rgb(47, 255, 0);
 }
}

h4{
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin: 0 0 10px 0;
}
 @media screen and (min-width: 700px) {
  .boxes {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 0px;
    div {
      padding: 40px 50px;
    }
  }
}
@media screen and (max-width: 699px) {
  .boxes {
    width: 83vw;
    margin-left: 5vw;
    div {
      padding: 10px 20px;
      margin-bottom: 10px;
    }
  }
}
</style>