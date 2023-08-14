<template>
  <v-app>
    <Navbar/>
    <component :is="layout">
      <router-view/>
    </component>
  </v-app>
</template>
<script>
  import AuthLayout from '@/layouts/AuthLayout'
  import MainLayout from '@/layouts/MainLayout'
  import Navbar from './app/NavbarApp'
  export default {
    components: {
    AuthLayout,
    MainLayout,
    Navbar
},
    computed: {
      layout() {
        return (this.$route.meta.layout || 'auth') + '-layout'
      }
    }
  }
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  outline: none;
}

html { height: 100%; }
body { 
  background-color: $main-color;
  font-size: 62.5%; 
  line-height: 1; 
  font-family: Arial, Tahoma, Verdana, sans-serif; 
}
 
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section { display: block; }
ol, ul { list-style: none; }
 
blockquote, q { quotes: none; }
blockquote:before, blockquote:after, q:before, q:after { content: ''; content: none; }
strong { font-weight: bold; } 
 
input { outline: none; }
 
table { border-collapse: collapse; border-spacing: 0; }
img { border: 0; max-width: 100%; }
 
a { text-decoration: none !important; color: inherit !important;}
a:hover { text-decoration: underline; }
</style>
