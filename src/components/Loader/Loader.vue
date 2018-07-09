<template>
  <div class="loader"></div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
  .loader {
    width: 100%;
    height: 3px;
    background-color: #ddd;
    position: fixed;
    top: 0;
    left: 0;

    &:after, &:before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      width: 0;
      background-color: #000;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }

    &:before {
      left: 0;
      animation-name: loader-before;
    }

    &:after {
      right: 0;
      animation-name: loader-after;
    }
  }
   @keyframes loader-before{
    0%{
      left:0;
      width:0;
    }
    50%{
      left:25%;
      width:75%
    }
    75%{
      left:100%;
      width:0
    }
  }
  @keyframes loader-after{
    0%,
    50%{
      left:0;
      width:0
    }
    75%{
      left:0;
      width:25%
    }
    100%{
      left:100%;
      width:0
    }
  }
</style>
