import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CollectionView from '../views/CollectionView.vue'
import OnlineStoreView from '../views/OnlineStoreView.vue'
import ContactView from '../views/ContactView.vue'
import ItemDetails from '../components/subComponents/ItemDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/onlinestore',
    name: 'onlinestore',
    component: OnlineStoreView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/collection',
    name: 'collection',
    component: CollectionView
  },
  {
    path: '/collection/:name',
    name: 'item',
    component: ItemDetails,
    props: true

  },
  {
    path: '/:catchAll(.*)',
    component: HomeView
  }
]

const router = createRouter({
  mode: 'hash',
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
