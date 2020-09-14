export default {
  state: {
    menu: []
  },
  //操作状态管理
  mutations: {
    setmenu(state, data) {
      state.menu = data;
    }
  }
};
