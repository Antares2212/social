<template>
  <v-navigation-drawer theme="dark" rail permanent>
    <v-list-item nav prepend-avatar="https://i.pravatar.cc/300"></v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-view-dashboard" value="dashboard"></v-list-item>

      <v-list-item prepend-icon="mdi-forum" value="messages"></v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block>
          <v-icon icon="mdi-logout"></v-icon>
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>

  <v-navigation-drawer floating permanent>
    <v-list>
      <router-link
        v-for="link in links"
        :key="link.url"
        :to="link.url"
      >
        <v-list-item :title="link.title" :value="link.title"></v-list-item>     
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: 'SideBarApp',
  data: () => ({
    links: [
      {title: 'Моя Страница', url: '/'},
      {title: 'Новости', url: '/news'},
      {title: 'Мессенджер', url: '/messages'},
      {title: 'Друзья', url: '/friends'},
      {title: 'Сообщества', url: '/messages'},
      {title: 'Фотографии', url: '/photos'},
      {title: 'Музыка', url: '/music'},
      {title: 'Видео', url: '/video'},
      {title: 'Стикеры', url: '/stickers'}
    ]
  })
}
</script>
<style>
  
</style>

