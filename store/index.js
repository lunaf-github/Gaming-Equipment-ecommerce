import data from "~/static/storedata.json";

export const state = () => ({
 cartUIStatus:"idle",
 storedata:data,
 cart:[]
})


export const getters = {
 featuredProducts: state.storedata.slice(0,3),
}

export const mutations = {}

export const actions = {};