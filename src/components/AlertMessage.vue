<template>
  <v-alert
    :color="color"
    :icon="icon"
    :title="title"
  >
    {{ text }}
  </v-alert>
</template>
<script>
export default {
  name: 'app-notification',
  props: {
    color: {
      type: String,
      required: true,
      default: 'red'
    },
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>
<style>
  
</style>
