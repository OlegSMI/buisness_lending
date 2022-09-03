import HomeView from '../views/v-home-lending.vue'
import ServicesCatalog from '../views/v-services-catalog.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/v-about-company.vue')
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: ServicesCatalog
  }
];
