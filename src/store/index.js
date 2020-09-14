//配置状态管理
import Vue from "vue";
import Vuex from "vuex";
import menu from "./modules/menu";
import header from "./modules/header";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    menu,
    header
  }
});
