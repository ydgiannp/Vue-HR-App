import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user : {
      username: 'admin',
      password: 'admin'
    },
    isLogin: true //please set to false again
  },
  mutations: {
    loggedIn (state) {
      // mutate state
      state.isLogin = true;
    },
    loggedOut (state) {
      // mutate state
      state.isLogin = false;
    }
  },
  actions: {
    verifyUser(state, payload){
      if(state.state.user.username == payload.username && state.state.user.password == payload.password){
        state.commit('loggedIn');
        return true
      }
      else{
        return false
      }
    }
  },
  modules: {
  }
})
