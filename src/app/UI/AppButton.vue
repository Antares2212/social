<template>
  <v-btn
    elevation="8"
    class="btn my-2"
    @click="click"
  >
    <slot></slot>
  </v-btn>
</template>
<script>
export default {
  name: 'app-button',
  props: {
    click: Function
  }
}
</script>
<style lang="scss">
  .btn:hover {
    background-color: rgba(0, 0, 0, .5);
  }
</style>
