<template>
  <v-container class="app-main-layout" fluid="">
    <v-main class="app-content">
      <div class="app-page">
        <SideBarApp/>
          <router-view />
      </div>
    </v-main>
  </v-container>
</template>
<script>
import SideBarApp from '@/app/SideBarApp'
export default {
  components: {
    SideBarApp
  }
}
</script>
<style>
  
</style>
