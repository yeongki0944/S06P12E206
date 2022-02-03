import Vue from "vue";
import Vuex from "vuex";
import chat from './modules/chat'
import groupchat from './modules/groupchat'
import common from './modules/common'
import sidebar from './modules/sidebar'
import layout from './modules/layout'
import user from './modules/user'
Vue.use(Vuex);

const createStore = () => {
  return new Vuex.Store({
    modules: {
      chat,
      groupchat,
      common,
      sidebar,
      layout,
      user
    }
  })
}
export default createStore



