import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SocialFeed from "@/views/SocialFeed";
import Breadcrumbs from "@/components/UIElements/Breadcrumbs";
import Badges from "@/components/UIElements/Badges";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/social',
    name: 'Social',
    component: SocialFeed
  },
  {
    path: '/badges',
    name: 'Badges',
    component: Badges
  },
  {
    path: '/breadcrumbs',
    name: 'Breadcrumbs',
    component: Breadcrumbs
  },
  /*{
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/!* webpackChunkName: "about" *!/ '../views/About.vue')
  }*/
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
