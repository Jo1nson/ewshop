import {getCart} from "@/network/cart";
import {modifyCollects} from "@/network/collect";

const actions = {
  updateCart({commit}) {
    getCart().then(res=>{
      commit('addCart', {count:res.data.length || 0})
    })
  },
  updateCollect({commit}) {
    modifyCollects().then(res=>{
      commit('addCollect', {count:res.data.length || 0})
    })
  },
}


export default actions;
