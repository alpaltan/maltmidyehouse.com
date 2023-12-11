import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      children:
        [
          {
            path: '/',
            name: 'home',
            component: () => import('../views/kategoriler.vue'),
          },
          {
            path: '/ana-yemekler',
            name: 'anayemekler',
            component: () => import('../views/ana-yemekler.vue'),
          },
          {
            path: '/biralar',
            name: 'biralar',
            component: () => import('../views/biralar.vue'),
          },
          {
            path: '/makarnalar',
            name: 'makarnalar',
            component: () => import('../views/makarnalar.vue'),
          },
          {
            path: '/atistirmaliklar',
            name: 'atistirmaliklar',
            component: () => import('../views/atistirmaliklar.vue'),
          },
          {
            path: '/salatalar',
            name: 'salatalar',
            component: () => import('../views/salatalar.vue'),
          },
          {
            path: '/tabaklar',
            name: 'tabaklar',
            component: () => import('../views/tabaklar.vue'),
          },
          {
            path: '/alkollu-icecekler',
            name: 'alkolluicecekler',
            component: () => import('../views/alkolluicecekler.vue'),
          },
          {
            path: '/kokteyller',
            name: 'kokteyller',
            component: () => import('../views/kokteyller.vue'),
          },
          {
            path: '/icecekler',
            name: 'icecekler',
            component: () => import('../views/icecekler.vue'),
          },
          {
            path: '/midye',
            name: 'midye',
            component: () => import('../views/midye.vue'),
          },
          {
            path: '/viskiler',
            name: 'viskiler',
            component: () => import('../views/viskiler.vue'),
          },
          {
            path: '/saraplar',
            name: 'saraplar',
            component: () => import('../views/saraplar.vue'),
          },
        ]
    }
  ]
})

export default router
