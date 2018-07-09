<template>
  <div class="users">
    <div class="user" v-for="(user, index) in allUsers" :key="index">
    <div class="user-avatar">
      <img :src="user.avatar_url" alt="">
    </div>
    <h2 v-text="user.login"></h2>
    <div class="user-info">
      <div class="local" v-text="user.location"></div>
      <Btn @click.native="showDetails(user.login)">Details</Btn>
      <router-link to="/repositories">
        <Btn @click.native="setRepositories(user.login)">Repositories</Btn>
      </router-link>
    </div>
  </div>
  <popup/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Btn from '@/components/Btn/Btn';
import Popup from '@/components/Popup/Popup';

export default {
  components: {
    Btn,
    Popup,
  },
  computed: {
    ...mapState([
      'allUsers',
    ]),
  },
  methods: {
    ...mapActions([
      'setRepositories',
      'setUser',
    ]),
    async showDetails(user) {
      await this.setUser(user);
      this.popupIsOpen = true;
    },
  },
};
</script>

<style lang="scss" scoped>
  .users {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .user {
      width: 100%;
      max-width: 300px;
      box-sizing: border-box;
      padding: 1em;
      margin: .5em;
      background-color: #fff;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      .user-avatar {
        width: 100px;
        height: 100px;

        img {
          border-radius: 50%;
        }
      }

      .user-info {
        .follows {
          padding: .3em 0;
          span {
            padding-right: 1em;
          }
        }

        .local {
          padding: .3em 0;
        }
      }
    }
  }
</style>
