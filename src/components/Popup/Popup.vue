<template>
  <transition  name="fade">
    <div class="user-details" v-if="user != undefined">
      <img :src="user.avatar_url" :alt="user.name" class="user-avatar">
      <h3 v-text="user.name || user.login"></h3>
      <p v-text="user.bio"></p>
      <span
        v-if="user.location"
        v-text="user.location"
        class="user-location">
      </span>
      <div class="user-connections">
        <span class="connection">Followers: {{ user.followers }}</span>
        <span class="connection">Following: {{ user.following }}</span>
      </div>
      <div class="user-links">
        <a v-if="user.blog"
           :href="user.blog"
           target="_blank"
           class="link link-site">
            Site
        </a>
        <a :href="user.html_url"
           target="_blank"
           class="link link-profile">
          Profile
        </a>
      </div>
      <button @click="clearUser()" class="close">
        <img src="@/assets/images/cancel.svg" alt="Close">
      </button>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      user: 'getUser',
    }),
  },
  methods: {
    ...mapActions([
      'clearUser',
    ]),
  },
};
</script>

<style lang="scss" scoped>
  .user-details {
    width: 90%;
    max-width: 500px;
    background-color: #fff;
    position: fixed;
    top: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateY(-50%);
    box-shadow: 0 0 0 9999px rgba(0,0,0,0.8);
    box-sizing: border-box;
    padding: 1em;
    border-radius: 10px;
    text-align: center;

    .user-avatar {
      width: 100px;
      border-radius: 50%;
    }

    .user-location {
      padding: 1em 0;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        top: 15px;
        left: -20px;
        width: 20px;
        height: 20px;
        background-image: url('../../assets/images/place.svg');
        background-size: 20px;
        background-position: 95% 50%;
        background-repeat: no-repeat;
      }
    }

    .user-connections {
      .connection {
        padding: 1em;
      }
    }

    .user-links {
      padding: 1em;

      .link {
        position: relative;
        text-decoration: none;
        color: #0984e3;
        padding: 1em;
      }

      .link-profile:after,
      .link-site:after {
        content: '';
        position: absolute;
        top: 15px;
        left: -7px;
        width: 20px;
        height: 20px;
        background-size: 20px;
        background-position: 95% 50%;
        background-repeat: no-repeat;
      }

      .link-profile:after {
        background-image: url('../../assets/images/profile.svg');
      }

      .link-site:after {
        background-image: url('../../assets/images/internet.svg');
      }
    }

    .close {
      width: 30px;
      height: 30px;
      position: absolute;
      top: 10px;
      right: 10px;
      border: 0;
      background-color: transparent;
      cursor: pointer;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .6s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateY(0%);
  }
</style>
