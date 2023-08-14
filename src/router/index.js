import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'auth' },
    component: () => import('@/views/LoginView')
  },
  {
    path: '/',
    name: 'profile',
    meta: { layout: 'main' },
    component: () => import('../views/ProfileView.vue')
  },
  {
    path: '/news',
    name: 'news',
    meta: { layout: 'main' },
    component: () => import('../views/NewsView.vue')
  },
  {
    path: '/messages',
    name: 'messages',
    meta: { layout: 'main' },
    component: () => import('../views/MessagesVue.vue')
  },
  {
    path: '/friends',
    name: 'friends',
    meta: { layout: 'main' },
    component: () => import('../views/FriendsView.vue')
  },
  {
    path: '/community',
    name: 'community',
    meta: { layout: 'main' },
    component: () => import('../views/CommunityView.vue')
  },
  {
    path: '/photos',
    name: 'photos',
    meta: { layout: 'main' },
    component: () => import('../views/PhotosView.vue')
  },
  {
    path: '/music',
    name: 'music',
    meta: { layout: 'main' },
    component: () => import('../views/MusicView.vue')
  },
  {
    path: '/video',
    name: 'video',
    meta: { layout: 'main' },
    component: () => import('../views/VideoView.vue')
  },
  {
    path: '/stickers',
    name: 'stickers',
    meta: { layout: 'main' },
    component: () => import('../views/StickersView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
