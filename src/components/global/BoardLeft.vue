<template>
  <div v-show="dBoard" class="left-sidebar left-sidebar-1 trs-left-to-right">
    <!--Logo-->
    <div class="logo truncate">
      <router-link to="/" class="flex flex-row items-center justify-start space-x-2">
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="28" width="28" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
        <span>D-board</span>
      </router-link>
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
        <button @click.prevent="isApps = !isApps" class="left-sidebar-item  focus:outline-none">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
          <span class="title">Apps</span>
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-auto arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
        <!--sub-apps-->
        <ul v-show="isApps">
          <li class="l1">
            <router-link class="left-sidebar-item" :to="{ name: 'Social' }">
              <!--Social Feed-->
              <span class="title">Social Feed</span>
            </router-link>
            <ul></ul>
          </li>
          <li class="l1">
            <a class="left-sidebar-item" href="#">
              <span class="title">Tasks</span>
            </a>
            <ul></ul>
          </li>
        </ul>
      </li>
      <!--MENU LEVELS-->
      <li class="l0">
        <button @click.prevent="isMenu = !isMenu" class="left-sidebar-item focus:outline-none">
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
        <ul v-show="isMenu">
          <!--L1-->
          <li class="l1">
            <button @click.prevent="isMenu1 = !isMenu1" class="left-sidebar-item focus:outline-none">
              <span class="title">Level 1-1</span>
              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-auto arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
            <!--L2-->
            <ul v-show="isMenu1">
              <li class="l2">
                <button @click.prevent="isMenu2 = !isMenu2" class="left-sidebar-item focus:outline-none">
                  <span class="title ml-4">Level 2-1</span>
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-auto arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
                <!--L3-->
                <ul v-show="isMenu2 ">
                  <li class="l3">
                    <button class="left-sidebar-item focus:outline-none">
                      <span class="title ml-6">Level 3-1</span>
                    </button>
                  </li>
                </ul>
                <ul v-show="isMenu2 ">
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
        <button @click.prevent="isDemos = !isDemos" class="left-sidebar-item focus:outline-none">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          <span class="title">Demos</span>
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-auto arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
        <ul v-show="isDemos">
          <li class="l1">
            <a class="left-sidebar-item " href="#"><span class="title">Light background</span></a>
            <ul></ul>
          </li>
          <li class="l1">
            <a class="left-sidebar-item " href="#"><span class="title">Dark Background</span></a>
            <ul></ul>
          </li>
          <li class="l1">
            <a class="left-sidebar-item " href="#"><span class="title">Dark Sidebar</span></a>
            <ul></ul>
          </li>
          <li class="l1">
            <a class="left-sidebar-item " href="#"><span class="title">Small Sidebar</span></a>
            <ul></ul>
          </li>
          <li class="l1">
            <a class="left-sidebar-item " href="#"><span class="title">Dark Small Sidebar</span></a>
            <ul></ul>
          </li>
          <li class="l1">
            <a class="left-sidebar-item " href="#"><span class="title">Dark navbar</span></a>
            <ul></ul>
          </li>
        </ul>
      </li>
    </ul>

    <!--COMPONENTS-->
    <div class="left-sidebar-title">
      <span>Components</span>
    </div>
    <ul>
      <!--UI Elements-->
      <li class="l0">
        <button @click.prevent="isUIElement = !isUIElement" class="left-sidebar-item focus:outline-none">
                  <span class="text-xl ml-5">
                    <i class='bx bx-droplet'></i>
                  </span>
          <span class="title ml-6">UI Elements</span>
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-auto arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
        <ul v-show="isUIElement">
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
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "BoardLeft",
  data() {
    return {
      /*APPLICATIONS*/
      isApps: false,
      isMenu: false,
      isMenu1: false,
      isMenu2: false,
      isMenu3: false,
      isDemos: false,

      /*COMPONENTS*/
      isUIElement: false,
    }
  },
  computed: {
  ...mapState([
    'dBoard','isCog','isSettings','isConversions','isConversions2'
    ]),
  },
  methods: {

  }
}
</script>

<style scoped>
/*LEFT SIDERBAR*/
@media (min-width: 768px) {
  .left-sidebar {
    max-width: calc(.25rem * 64);
  }
}
@media (min-width: 768px) {
  .wrapper .left-sidebar {
    width: 100%;
    min-width: calc(.25rem * 16);
    max-width: calc(.25rem * 64);
    transition: max-width .25s ease-in-out;
  }
}
@media (min-width: 768px) {
  .left-sidebar-1 {
    --tw-bg-opacity: 1;
    background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
    --tw-border-opacity: 1;
    border-color: rgba(229, 231, 235, var(--tw-border-opacity));
    border-right-width: 1px;
    color: rgba(17, 24, 39, var(--tw-text-opacity));
  }
}

/*LOGO D-BOARD*/
@media (min-width: 768px) {
  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-weight: 700;
    height: 4rem;
    font-size: 1rem;
    line-height: 1.5rem;
    padding-left: 1rem;
    text-transform: uppercase;
    letter-spacing: .05em;
    white-space: nowrap;
    width: 100%;
    max-width: calc(.25rem * 64);
    --tw-text-opacity: 1;
    color: rgba(59, 130, 246, var(--tw-text-opacity));
  }
}
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/*LEFT SIDERBAR TITLE*/
@media (min-width: 768px) {
  .left-sidebar-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-weight: 400;
    height: 4rem;
    font-size: .75rem;
    line-height: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    position: relative;
    text-transform: uppercase;
    letter-spacing: .05em;
    width: 100%;
  }
}
@media (min-width: 768px) {
  .left-sidebar-title:before {
    --tw-bg-opacity: 1;
    background-color: rgba(229,231,235,var(--tw-bg-opacity));
  }
}
@media (min-width: 768px) {
  .left-sidebar-title:before {
    transition: opacity .2s ease-in-out;
    display: block;
    opacity: 0;
    content: "";
    position: absolute;
    z-index: 1;
    top: calc((.25rem * 8) - 2px);
    left: 0;
    right: 0;
    height: 1px;
    width: 100%;
  }
}

/*LEFT SIDERBAR SPAN*/
@media (min-width: 768px){
  .left-sidebar-title span {
    opacity: 1;
    visibility: visible;
  }
}
@media (min-width: 768px) {
  .left-sidebar-title span {
    transition: opacity .15s ease-in-out;
  }
}

/*LEFT SIDEBAR-ITEM ACTIVE*/
@media (min-width: 768px) {
  [data-collapsed=false] .l0 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
@media (min-width: 768px) {
  .left-sidebar-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 2.5rem;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: calc(.25rem * 16);
    max-width: calc(.25rem * 64);
    width: calc(.25rem * 64);
  }
}
@media (min-width: 768px) {
  .left-sidebar-item>svg, [data-collapsed=true] .left-sidebar-item {
    width: calc(.25rem * 16);
  }
}
@media (min-width: 768px) {
  .left-sidebar-item:hover:after, .left-sidebar-item:focus:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 4px;
    background-color: rgba(59,130,246,1);
  }
}
@media (min-width: 768px) {
  ul ul .left-sidebar-item {
    padding-left: calc(.25rem * 16);
  }
}
</style>