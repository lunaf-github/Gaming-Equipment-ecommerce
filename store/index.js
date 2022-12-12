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
 monitors: state => state.storedata.filter(el => el.category === "Monitor")
}

export const mutations = {}

export const actions = {};