<template>
  <div id="app">
    <main-header/>
    <div v-if="allUsers.length === 0">
      No users...
    </div>
    <div v-else>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import mainHeader from './components/Header/Header';
import AllUsers from './components/AllUsers/AllUsers';

export default {
  name: 'App',
  components: {
    'main-header': mainHeader,
    'all-users': AllUsers,
  },
  computed: {
    ...mapState([
      'allUsers',
    ]),
  },
};
</script>

<style lang="scss">
  body {
    background-color: #24292e;
    font-family: 'Ubuntu', sans-serif;
  }

  #app {
    width: 100%;
    box-sizing: border-box;
    padding: .5em;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
