const mutations = {
  setIsLogin(state, payload) {
    state.user.isLogin = payload;
  },
  addCart(state,payload){
    state.cartCount = payload.count;
  },
  addCollect(state,payload){
    state.collectCount = payload.count;
  }
}

export default mutations;
