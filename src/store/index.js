import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state : {
    token:'',
  },
  mutations: { //synchronous way to update state
    setToken(state,payload) {
      state.token = payload;
    }
  },
  actions: { //asynchronous
    async setToken(state,payload) {
      state.commit("setToken",payload);
    }
  },
  modules: {},
  getters: {
    getToken: state=>state.token
  }
});