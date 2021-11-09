import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    driverName: 'John Smith',
  },
  mutations: {
    updateDriverName(state, payload) {
      state.driverName = payload;
    },
  },
  actions: {},
  modules: {},
});
