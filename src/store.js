import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allUsers: [],
    user: undefined,
    repositories: [],
  },
  mutations: {
    SET_ALL_USERS: (state, users) => {
      state.allUsers = users;
    },

    SET_USER: (state, user) => {
      state.user = user;
    },

    SET_REPOSITORIES: (state, repo) => {
      state.repositories = repo;
    },

    CLEAR_USER: (state) => {
      state.user = undefined;
    },
  },

  actions: {
    setAllUsers: async (context, username) => {
      const allUsers = (await axios.get(`https://api.github.com/search/users?q=${username}`).then(resp => resp).catch(error => error)).data;
      context.commit('SET_ALL_USERS', allUsers.items);
    },

    setUser: async (context, username) => {
      const user = (await axios.get(`https://api.github.com/users/${username}`).then(resp => resp).catch(error => error)).data;
      context.commit('SET_USER', user);
    },

    setRepositories: async (context, username) => {
      const repositories = (await axios.get(`https://api.github.com/users/${username}/repos`)).data;
      context.commit('SET_REPOSITORIES', repositories);
    },

    clearUser: (context) => {
      context.commit('CLEAR_USER');
    },
  },
});
