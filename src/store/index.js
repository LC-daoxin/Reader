import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    defaultFont: 14
  },
  mutations: {
    setDefaultFont(state, Font) {
      state.defaultFont = Font
    }
  },
  actions: {},
  modules: {}
});
