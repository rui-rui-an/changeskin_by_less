import Vue from "vue";
import Vuex from "vuex";
// import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    themeName: localStorage.getItem('themeName')
  },
  mutations: {
    setTheme (state, data) {
      state.themeName = data
    }
  },
  actions: {},
  modules: {},
  // plugins: [
  //   createPersistedState({
  //     storage: window.localStorage,
  //     reducer (val) {
  //       // console.log(val);
  //       return val
  //     }
  //   })]
});
