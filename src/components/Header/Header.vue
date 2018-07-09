<template>
  <header class="header">
    <img src="@/assets/images/github-logo.svg" alt="Github logo" class="header-logo">
    <h1 class="header-title">Search for a github user.</h1>
    <search/>
  </header>
</template>

<script>
import search from '@/components/Search/Search';

export default {
  components: {
    search,
  },

};
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    max-width: 500px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .header-title {
      color: #fff;
      font-weight: normal;
    }

    .header-logo {
      max-width: 100px;
    }
  }
</style>
