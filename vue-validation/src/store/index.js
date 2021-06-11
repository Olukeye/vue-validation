import { createStore } from 'vuex'


export default createStore({
  state: {
    user: null
  },
  mutations: {
    user(state, user) {
      state.user = user;
    }
  },
  actions: {
    user(context, user ) {
      context.commit('user', user)
    }
  },
  getters: {
    user: (state) => {
      return state.user;
    }
  },
  
})
