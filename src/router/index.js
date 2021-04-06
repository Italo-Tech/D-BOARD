import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SocialFeed from "@/views/SocialFeed";
import Breadcrumbs from "@/components/UIElements/Breadcrumbs";
import Badges from "@/components/UIElements/Badges";
import Buttons from "@/components/UIElements/Buttons";
import Dropdowns from "@/components/UIElements/Dropdowns";
import Images from "@/components/UIElements/Images";
import ProgressBars from "@/components/UIElements/ProgressBars";
import Pagination from "../components/UIElements/Pagination";
import Tabs from "../components/UIElements/Tabs";
import DefaultForm from "../components/Forms/DefaultForm";
import SampleForm from "../components/Forms/SampleForm";
import DatePicker from "../components/Forms/DatePicker";
import Switches from "../components/Forms/Switches";

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

    /*UI Elements*/
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
  {
    path: '/buttons',
    name: 'Buttons',
    component: Buttons
  },
  {
    path: '/dropdowns',
    name: 'Dropdowns',
    component: Dropdowns
  },
  {
    path: '/images',
    name: 'Images',
    component: Images
  },
  {
    path: '/progress',
    name: 'Progress',
    component: ProgressBars
  },
  {
    path: '/pagination',
    name: 'Pagination',
    component: Pagination
  },
  {
    path: '/tabs',
    name: 'Tabs',
    component: Tabs
  },


/*Forms*/
  {
    path: '/default-form',
    name: 'Default',
    component: DefaultForm
  },
  {
    path: '/sample-form',
    name: 'Sample',
    component: SampleForm
  },
  {
    path: '/date-picker',
    name: 'Date',
    component: DatePicker
  },
  {
    path: '/switches',
    name: 'Switches',
    component: Switches
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
