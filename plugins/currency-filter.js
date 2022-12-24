import Vue from "vue";

Vue.filter("dollar", function(value){
  return `$${parseFloat(value).toFixed(2)}`
})