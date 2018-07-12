<template>
  <div class="search-box">
    <loader v-if="loader"/>
    <input
    autofocus
    type="type"
    class="form-search"
    placeholder="Example: crisgon"
    @change="getUser(userName)"
    v-model="userName"
    >
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Loader from '@/components/Loader/Loader';

export default {
  components: {
    Loader,
  },
  data() {
    return {
      userName: '',
      loader: false,
    };
  },
  methods: {
    ...mapActions([
      'setAllUsers',
    ]),
    getUser(user) {
      this.$router.push('/');
      this.setAllUsers(user);
      this.loader = true;
      setTimeout(() => {
        this.loader = false;
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
  .search-box {
    width: 100%;

    .form-search {
      width: 100%;
      max-width: 500px;
      position: relative;
      border: 0;
      outline: 0;
      border-radius: 47px;
      box-sizing: border-box;
      padding: .8em;
      background-image: url('../../assets/images/search.svg');
      background-size: 30px;
      background-position: 95% 50%;
      background-repeat: no-repeat;
      box-shadow: 0 12px 15px rgba(0, 0, 0, 0.15);
      transition: all .3s;

      &::-webkit-search-cancel-button {
        -webkit-appearance: none;
        width: 15px;
        height: 15px;
        margin-right: .8em;
        background-image: url('../../assets/images/cancel.svg');
        transition: all .3s;
      }

      &:focus {
        background-size: 0;
      }
    }
  }
</style>
