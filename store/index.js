import data from "~/static/storedata.json";

export const state = () => ({
 cartUIStatus:"idle",
 storedata:data,
 cart:[],
 clientSecret: "" // Required to initiate the payment from the client
})


export const getters = {
 featuredProducts: state => state.storedata.slice(0,3),
 headsets: state => state.storedata.filter(el => el.category === "Headset"),
 mouseDevices: state => state.storedata.filter(el => el.category === "Mouse"),
 keyboards: state => state.storedata.filter(el => el.category === "Keyboard"),
 accessories: state => state.storedata.filter(el => el.category === "Accessory"),
 monitors: state => state.storedata.filter(el => el.category === "Monitor"),
 desks: state => state.storedata.filter(el => el.category === "Desk"),
 chairs: state => state.storedata.filter(el => el.category === "Chair"),
 cartCount: state => {
  if(!state.cart.length) return 0;
  return state.cart.reduce((ac, next) => ac + next.quantity, 0);
 },
 cartTotal: state => {
   if(!state.cart.length) return 0;
   return state.cart.reduce((ac, next) => ac + next.quantity * next.price, 0);
 }
}

export const mutations = {
 updateCartUI: (state, payload) => {
   state.cartUIStatus = payload;
 },
 addToCart: (state, payload) => {
   let itemfound = state.cart.find(el => el.id === payload.id);
   
   itemfound?
        (itemfound.quantity += parseInt(payload.quantity))
        : state.cart.push(payload);
 },
 addOneToCart: (state, payload) => {
   let itemfound = state.cart.find(el => el.id === payload.id);
   itemfound? itemfound.quantity++ : state.cart.push(payload);
 },
 removeOneFromCart: (state, payload) => {
   let index = state.cart.findIndex( el => el.id === payload.id);
   (state.cart[index].quantity === 1)
      ? state.cart.splice(index,1)
      : state.cart[index].quantity--;
 },
 removeAllFromCart: (state, payload) => {
   state.cart = state.cart.filter(el => el.id !== payload.id);
 },
 clearCart: state => {
   state.cart = [];
   state.cartUIStatus='idle';
 }
}

export const actions = {};