import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from './services/AuthService'

Vue.use(Vuex)
// Vuex store component which shows the states of what the user is doing and how they are
export default new Vuex.Store({
  state: {
    // checks whether the user is logged in or not 
    isLoggedIn: false,
    apiUrl: `${window.location.protocol}//${window.location.hostname}:3000/api`,
    username: null,
    userId: null
  },
  mutations: {
    // Authentication state that checks whether the user is logged in and if they are we get the username and UserID
    authenticate(state) {
      state.isLoggedIn = auth.isLoggedIn();
      if (state.isLoggedIn) {
        state.username = auth.getUsername();
        state.userId = auth.getUserId();
      } else {
        state.userId = null;
        state.username = null;
      }
    }
  },
  // Authentication state
  actions: {
    authenticate(context) {
      context.commit('authenticate');
    }
  }
})
