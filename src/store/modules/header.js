export default {
  state: {
    open: false
  },
  mutations: {
    setOpen(state, data) {
      state.open = data;
      console.log(data);
    }
  }
};
