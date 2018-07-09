<template>
  <button class="btn">
    <slot/>
  </button>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
  .btn {
    border: 0;
    background-color: #f0f3f6;
    box-sizing: border-box;
    padding: .5em;
    border-radius: .3em;
    transition: all .2s;

    &:hover {
      transform: translateY(-2px);
      cursor: pointer;
    }
  }
</style>
