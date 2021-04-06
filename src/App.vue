<template>
  <div id="app">
    <div class="bg-white w-full min-w-min h-screen min-h-full p-0 m-0 relative">
      <div class="font-sans antialiased text-sm disable-scrollbars w-full text-gray-900 bg-white" data-layout="layout-1" data-collapsed="false" data-navbar="light" data-left-sidebar="light">

        <!--SETTINGS RIGHT-->
        <SettingsRight v-show="this.$store.state.isSettings" :class="this.$store.state.isSettings ? 'trs-right-to-left' : 'settings-leave-active'" />

        <div class="wrapper">
          <!--D-BOARD LEFT-->
          <div v-show="this.$store.state.dBoard" class="left-sidebar left-sidebar-1 trs-left-to-right">
            <!--Logo-->
            <div class="logo truncate">
              <a href="/" class="flex flex-row items-center justify-start space-x-2">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="28" width="28" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
                <span>D-board</span>
              </a>
              <button class="ml-auto mr-4 block lg:hidden">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
            </div>

            <!--APLLICATIONS-->
            <div class="left-sidebar-title">
              <span>Applications</span>
            </div>
            <ul>
              <!--DASHBOARD-->
              <li class="l0">
                <router-link class="left-sidebar-item active" :to="{ name: 'Home' }">
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
                  <span class="title">Dashboard</span>
                </router-link>
                <ul></ul>
              </li>
              <!--APPS-->
              <li class="l0">
                <button @click.prevent="this.isApps = !this.isApps" class="left-sidebar-item  focus:outline-none">
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                  <span class="title">Apps</span>
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-auto arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
                <!--sub-apps-->
                <ul v-show="this.isApps">
                  <li class="l1">
                    <router-link class="left-sidebar-item" :to="{ name: 'Social' }">
                      <!--Social Feed-->
                      <span class="title">Social Feed</span>
                    </router-link>
                    <ul></ul>
                  </li>
                  <li class="l1">
                    <a class="left-sidebar-item" href="/#">
                      <span class="title">Tasks</span>
                    </a>
                    <ul></ul>
                  </li>
                </ul>
              </li>
              <!--MENU LEVELS-->
              <li class="l0">
                <button @click.prevent="this.isMenu = !this.isMenu" class="left-sidebar-item focus:outline-none">
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                  </svg>
                  <span class="title">Menu Levels</span>
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-auto arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
                <ul v-show="this.isMenu">
                  <!--L1-->
                  <li class="l1">
                    <button @click.prevent="this.isMenu1 = !this.isMenu1" class="left-sidebar-item focus:outline-none">
                      <span class="title">Level 1-1</span>
                      <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-auto arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </button>
                    <!--L2-->
                    <ul v-show="this.isMenu1">
                      <li class="l2">
                        <button @click.prevent="this.isMenu2 = !this.isMenu2" class="left-sidebar-item focus:outline-none">
                          <span class="title ml-4">Level 2-1</span>
                          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-auto arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline>
                          </svg>
                        </button>
                        <!--L3-->
                        <ul v-show="this.isMenu2 ">
                          <li class="l3">
                            <button class="left-sidebar-item focus:outline-none">
                              <span class="title ml-6">Level 3-1</span>
                            </button>
                          </li>
                        </ul>
                        <ul v-show="this.isMenu2 ">
                          <li class="l3">
                            <button class="left-sidebar-item focus:outline-none">
                              <span class="title ml-6">Level 3-2</span>
                            </button>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <!--Demos-->
              <li class="l0">
                <button @click.prevent="this.isDemos = !this.isDemos" class="left-sidebar-item focus:outline-none">
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  <span class="title">Demos</span>
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-auto arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
                <ul v-show="this.isDemos">
                  <li class="l1">
                    <a class="left-sidebar-item " href="/demo-1"><span class="title">Light background</span></a>
                    <ul></ul>
                  </li>
                  <li class="l1">
                    <a class="left-sidebar-item " href="/demo-2"><span class="title">Dark Background</span></a>
                    <ul></ul>
                  </li>
                  <li class="l1">
                    <a class="left-sidebar-item " href="/demo-4"><span class="title">Dark Sidebar</span></a>
                    <ul></ul>
                  </li>
                  <li class="l1">
                    <a class="left-sidebar-item " href="/demo-3"><span class="title">Small Sidebar</span></a>
                    <ul></ul>
                  </li>
                  <li class="l1">
                    <a class="left-sidebar-item " href="/demo-5"><span class="title">Dark Small Sidebar</span></a>
                    <ul></ul>
                  </li>
                  <li class="l1">
                    <a class="left-sidebar-item " href="/demo-6"><span class="title">Dark navbar</span></a>
                    <ul></ul>
                  </li>
                </ul>
              </li>

              <li class="l0"></li>
            </ul>

            <!--COMPONENTS-->
            <div class="left-sidebar-title">
              <span>Components</span>
            </div>
            <ul>
              <!--UI Elements-->
              <li class="l0">
                <button @click.prevent="this.isUIElement = !this.isUIElement" class="left-sidebar-item focus:outline-none">
                  <span class="text-xl ml-5">
                    <i class='bx bx-droplet'></i>
                  </span>
                  <span class="title ml-6">UI Elements</span>
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-auto arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
                <ul v-show="this.isUIElement">
                  <!--Buttons-->
                  <li class="">
                    <!--Badges-->
                    <router-link :to="{ name: 'Badges' }" class="left-sidebar-item focus:outline-none">
                      <span class="title">Badges</span>
                    </router-link>
                    <!--Breadcrumps-->
                    <router-link :to="{ name: 'Breadcrumbs' }" class="left-sidebar-item focus:outline-none">
                      <span class="title">Breadcrumbs</span>
                    </router-link>
                    <!--Buttons-->
                    <router-link :to="{ name: 'Buttons' }" class="left-sidebar-item focus:outline-none">
                      <span class="title">Buttons</span>
                    </router-link>
                    <!--Dropdowns-->
                    <router-link :to="{ name: 'Dropdowns' }" class="left-sidebar-item focus:outline-none">
                      <span class="title">Dropdowns</span>
                    </router-link>
                    <!--Images-->
                    <router-link :to="{ name: 'Images' }" class="left-sidebar-item focus:outline-none">
                      <span class="title">Images</span>
                    </router-link>
                    <!--ProgressBars-->
                    <router-link :to="{ name: 'Progress' }" class="left-sidebar-item focus:outline-none">
                      <span class="title">ProgressBars</span>
                    </router-link>
                    <!--Pagination-->
                    <router-link :to="{ name: 'Pagination' }" class="left-sidebar-item focus:outline-none">
                      <span class="title">Pagination</span>
                    </router-link>
                    <!--Tabs-->
                    <router-link :to="{ name: 'Tabs' }" class="left-sidebar-item focus:outline-none">
                      <span class="title">Tabs</span>
                    </router-link>
                  </li>
                </ul>
              </li>
              <!--Forms-->
              <li class="l0">
                <button @click.prevent="" class="left-sidebar-item  focus:outline-none">
                  <span class="text-xl ml-5">
                    <i class='bx bx-calendar-week'></i>
                  </span>
                  <span class="title ml-6">Forms</span>
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-auto arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
              </li>
              <!--Tables-->
              <li class="l0">
                <button @click.prevent="" class="left-sidebar-item focus:outline-none">
                  <span class="text-xl ml-5">
                    <i class='bx bx-table'></i>
                  </span>
                  <span class="title ml-6">Tables</span>
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-auto arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </li>
              <!--Nortifications-->
              <li class="l0">
                <button @click.prevent="" class="left-sidebar-item focus:outline-none">
                  <span class="text-xl ml-5">
                    <i class="far fa-clock"></i>
                  </span>
                  <span class="title ml-6">Notifications</span>
                </button>
              </li>

            </ul>
          </div>

          <!--MAIN-->
          <div class="main w-full bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
            <!--NAVBAR-->
            <NavBar />
            <router-view/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import SettingsRight from "./components/global/SettingsRight";
import NavBar from "./components/global/NavBar";

export default {
  name: 'App',
  components: {NavBar, SettingsRight},
  data() {
    return {
      state: {
        chartData: {},
        chartOptions: {
          responsive: true
        },
      },
    }
  },
  computed: {
      ...mapState([
        'dBoard','isCube','isCog','isExplore','isApps','isMenu','isMenu1','isMenu2','isMenu3','isDemos','isNation','isCube','isProjectStatus','isProfile','isSettings','isConversions','isConversions2','isUIElement'
      ]),
  },
  beforeMount () {
    this.fillData()
  },

  methods: {
    ...mapActions([
        'nation','cube','projectStatus','profile','settingsRight'
    ]),
    fillData () {
      this.chartData = {
        labels: ['label 1', 'Label 2'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (10 - 5 + 1)) + 10
    },
  },
}
</script>

<style>
/*Transition*/
.transition{
  animation-name: transition-explore;
  animation-duration: 0.3s;
}
@keyframes transition-explore {
  from {
    transform: translateY(20px);
    opacity: 0;

  }
}
/*Transition-right-to-left*/
.trs-right-to-left{
  animation: trs-right-to-left .5s;
}
@keyframes trs-right-to-left {
  from {
    transform: translatex(20px);
    opacity: 1;

  }
}
.trs-left-to-right {
  animation: trs-left-to-right .5s;
}
@keyframes trs-left-to-right {
  from {
    transform: translatex(-20px);
    opacity: 0;
  }
}
</style>

