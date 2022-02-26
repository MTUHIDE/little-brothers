// import Vue from 'vue';
// import Vuex from 'vuex';
//
// Vue.use(Vuex);
//
// export default new Vuex.Store({
//   state: {
//     driverName: 'John Smith',
//   },
//   mutations: {
//     updateDriverName(state, payload) {
//       state.driverName = payload;
//     },
//   },
//   actions: {},
//   modules: {},
// });
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      msalConfig: {
        auth: {
          clientId: 'cbdf74e4-e6b8-45b7-8df7-9747a1f5593e',
          redirectUri: "http://127.0.0.1:8000/login-test",
          authority:'https://login.microsoftonline.com/0be552a2-732e-472f-afc7-3937e2a4d0e1',
        },
        cache: {
          cacheLocation: 'localStorage',
        },
      },
      accessToken:""
    };
  },
  mutations :{
    setAccessToken(state, token){
      state.accessToken = token;
    }
  }
});

export default store;
