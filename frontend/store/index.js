import Vue from "vue";
import Vuex from "vuex";
import chat from './modules/chat'
import groupchat from './modules/groupchat'
import common from './modules/common'
import sidebar from './modules/sidebar'
import layout from './modules/layout'
import login from './modules/login'
import manager from './modules/manager'
import reservation from './modules/reservation'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const createStore = () => {
  return new Vuex.Store({
    modules: {
      chat,
      groupchat,
      common,
      sidebar,
      layout,
      login,
      manager,
      reservation
    },
    // plugins: [
    //   createPersistedState({
    //     paths: [login, manager]
    //   })
    // ]
  })
}
export default createStore



