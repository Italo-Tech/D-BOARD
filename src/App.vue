<template>
  <div id="app">
    <div class="bg-white w-full min-w-min h-screen min-h-full p-0 m-0 relative">
      <div class="font-sans antialiased text-sm disable-scrollbars w-full text-gray-900 bg-white" data-layout="layout-1" data-collapsed="false" data-navbar="light" data-left-sidebar="light">

        <!--SETTINGS RIGHT-->
        <div v-show="isSettings" :class="isSettings ? 'trs-right-to-left' : 'settings-leave-active'" class="right-sidebar bg-white text-gray-900 right-sidebar-1 openSettings">
          <div>
            <div>
              <!--Cabeçalho DEMO-->
              <div class="flex flex-col">
                <div class="px-4 h-16 flex flex-row items-center justify-between text-white bg-blue-500">
                  <div class="uppercase text-sm font-bold tracking-wider">Settings</div>
                  <button @click.prevent="isSettings = !isSettings;" class="btn btn-circle focus:outline-none">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                </div>
              </div>

              <!--Colors DEMO-->
              <div class="flex flex-col p-4">
                <div class="uppercase tex-sm font-bold tracking-wider mb-2">Demos</div>
                <div class="flex flex-col">
                  <button class="flex h-8 w-full hover:bg-transparent focus:outline-none">Light Background</button>
                  <button class="flex h-8 w-full hover:bg-transparent focus:outline-none">Dark Background</button>
                  <button class="flex h-8 w-full hover:bg-transparent focus:outline-none">Small Sidebar</button>
                  <button class="flex h-8 w-full hover:bg-transparent focus:outline-none">Dark Sidebar</button>
                  <button class="flex h-8 w-full hover:bg-transparent focus:outline-none">Dark small sidebar</button>
                  <button class="flex h-8 w-full hover:bg-transparent focus:outline-none">Dark navbar</button>
                </div>
              </div>

              <!--Toggle Sidebar-->
              <div class="flex flex-col p-4">
                <div class="uppercase text-sm font-bold tracking-wider mb-2">Toggle Siderbar</div>
                <div class="flex flex-col">
                  <div class="react-switch relative inline-block text-left opacity-100" style="">

                    <div class="react-switch-bg h-5 w-12 m-0.5 relative bg-gray-300 cursor-pointer">
                    </div>

                    <div class="react-switch-handle h-6 w-6 bg-white inline-block cursor-pointer rounded-full absolute top-0 border-0">
                    </div>

                    <input class="input-toggle-sidebar overflow-hidden p-0 absolute border-0" type="checkbox" role="switch">
                  </div>
                </div>
              </div>

              <!--Colors Sidebar-->
              <div class="flex flex-col p-4">
                <div class="mb-2">
                  <div class="uppercase text-sm font-bold tracking-wider mb-2">Colors</div>
                </div>
                <!--background-->
                <div class="mb-2">
                  <div class="uppercase text-sm font-normal text-gray-500 tracking-wider mb-2">Background</div>
                  <div class="flex flex-row space-x-1">
                    <button class="btn btn-circle btn-raised bg-white text-white hover:bg-transparent focus:outline-none"></button>
                    <button class="btn btn-circle btn-raised bg-gray-900 text-gray-900 hover:bg-gray-900 focus:outline-none"></button>
                  </div>
                </div>
                <!--navbar-->
                <div class="mb-2">
                  <div class="uppercase text-sm font-normal text-gray-500 tracking-wider mb-2">Navbar</div>
                  <div class="flex flex-row space-x-1">
                    <button class="btn btn-circle btn-raised bg-white text-white hover:bg-transparent focus:outline-none"></button>
                    <button class="btn btn-circle btn-raised bg-gray-900 text-gray-900 hover:bg-gray-900 focus:outline-none"></button>
                  </div>
                </div>
                <!--left sidebar-->
                <div class="mb-2">
                  <div class="uppercase text-sm font-normal text-gray-500 tracking-wider mb-2">Left sidebar</div>
                  <div class="flex flex-row space-x-1">
                    <button class="btn btn-circle btn-raised bg-white text-white hover:bg-transparent focus:outline-none"></button>
                    <button class="btn btn-circle btn-raised bg-gray-900 text-gray-900 hover:bg-gray-900 focus:outline-none"></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="wrapper">
          <!--D-BOARD LEFT-->
          <div v-show="dBoard" class="left-sidebar left-sidebar-1 trs-left-to-right">
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
                    <a class="left-sidebar-item" href="/#">
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
            <div class="navbar navbar-1 border-b">
              <div class="navbar-inner  w-full flex items-center justify-start">
                <button @click.prevent="dBoard = ! dBoard" class="mx-4 focus:outline-none">
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </button>
                <!--Button Search-->
                <form class="w-full max-w-xs navbar-search">
                  <div class="relative">
                    <input type="search" name="search" placeholder="Procurar..." class="bg-gray-200 pl-10 pr-5 appearance-none h-10 2-full rounded-full text-sm focus:outline-none">
                    <button type="submit" class="absolute top-0 mt-3 left-0 ml-4 focus:outline-none">
                      <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </button>
                  </div>
                </form>

                <!--EXPLORE-->
                <div class="relative">
                  <button @click.prevent="isExplore = !isExplore" class="btn btn-default btn-icon bg-transparent h-16 focus:outline-none">
                    <span class="mr-2">Explore</span>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </button>
                  <div v-show="isExplore" class="absolute top-0 mt-16 bg-gray-50 border-2 rounded-lg border-gray-200 transition shadow-xl">
                    <div class="dropdown-content bottom-start" style="width: 32rem">
                      <div class="flex flex-row flex-wrap focus:outline-none">
                        <!--Teams-->
                        <div class="w-1/2 p-2 dropdown-item">
                          <div class="flex flex-row items-center justify-start hover:bg-gray-200">
                            <div class="flex-shrink-0 w-8">
                              <span class="h-8 w-8 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-display font-bold">01</span>
                            </div>
                            <div class="ml-2">
                              <div class="text-sm font-bold">Teams</div>
                              <div class="text-xs">Minima quasi sunt.</div>
                            </div>
                          </div>
                        </div>
                        <!--Blog-->
                        <div class="w-1/2 p-2 cursor-pointer">
                          <div class="flex flex-row items-center justify-start hover:bg-gray-200">
                            <div class="flex-shrink-0 w-8">
                              <span class="h-8 w-8 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-display font-bold">01</span>
                            </div>
                            <div class="ml-2">
                              <div class="text-sm font-bold">Blog</div>
                              <div class="text-xs">Possuimos quasi sunt.</div>
                            </div>
                          </div>
                        </div>
                        <!--Meetups-->
                        <div class="w-1/2 p-2 cursor-pointer">
                          <div class="flex flex-row items-center justify-start hover:bg-gray-200">
                            <div class="flex-shrink-0 w-8">
                              <span class="h-8 w-8 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-display font-bold">03</span>
                            </div>
                            <div class="ml-2">
                              <div class="text-sm font-bold">Meetups</div>
                              <div class="text-xs">Cupdate uno lalilo.</div>
                            </div>
                          </div>
                        </div>
                        <!--Advertise-->
                        <div class="w-1/2 p-2 cursor-pointer">
                          <div class="flex flex-row items-center justify-start hover:bg-gray-200">
                            <div class="flex-shrink-0 w-8">
                              <span class="h-8 w-8 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-display font-bold">04</span>
                            </div>
                            <div class="ml-2">
                              <div class="text-sm font-bold">Advertise with us</div>
                              <div class="text-xs">Dolorius leviosa.</div>
                            </div>
                          </div>
                        </div>
                        <!--Features-->
                        <div class="w-1/2 p-2 cursor-pointer">
                          <div class="flex flex-row items-center justify-start hover:bg-gray-200">
                            <div class="flex-shrink-0 w-8">
                              <span class="h-8 w-8 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-display font-bold">05</span>
                            </div>
                            <div class="ml-2">
                              <div class="text-sm font-bold">Features</div>
                              <div class="text-xs">Mordekaiser bolado.</div>
                            </div>
                          </div>
                        </div>
                        <!--League-->
                        <div class="w-1/2 p-2 cursor-pointer">
                          <div class="flex flex-row items-center justify-start hover:bg-gray-200">
                            <div class="flex-shrink-0 w-8">
                              <span class="h-8 w-8 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-display font-bold">06</span>
                            </div>
                            <div class="ml-2">
                              <div class="text-sm font-bold">League of Legends</div>
                              <div class="text-xs">Champions.</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <span class="ml-auto"></span>

                <!--CHANGE NATION-->
                <div class="hidden lg:flex relative">
                  <button @click.prevent="nation" class="flex items-center justify-center h-16 w-12 focus:outline-none">
                    <span class="text-base flag-icon flag-icon-br"></span>
                  </button>
                  <div v-show="isNation" class="absolute top-0 right-0 mt-16 bg-gray-100 border-2 rounded-lg border-gray-300 transition shadow-2xl">
                    <div class="dropdown-content w-64 bottom-start">
                      <div class="font-bold p-4 uppercase text-gray-700 text-sm leading-5">Escolha um país</div>
                      <div class="flex flex-wrap">
                        <a class="w-1/2 flex items-center justify-start p-2 text-sm space-x-2 dropdown-item" href="/">
                          <span class="text-base flag-icon flag-icon-us"></span>
                          <span>USA</span>
                        </a>
                        <a class="w-1/2 flex items-center justify-start p-2 text-sm space-x-2 dropdown-item" href="/">
                          <span class="text-base flag-icon flag-icon-es"></span>
                          <span>Espanha</span>
                        </a>
                        <a class="w-1/2 flex items-center justify-start p-2 text-sm space-x-2 dropdown-item" href="/">
                          <span class="text-base flag-icon flag-icon-ru"></span>
                          <span>Rússia</span>
                        </a>
                        <a class="w-1/2 flex items-center justify-start p-2 text-sm space-x-2 dropdown-item" href="/">
                          <span class="text-base flag-icon flag-icon-cn"></span>
                          <span>China</span>
                        </a>
                        <a class="w-1/2 flex items-center justify-start p-2 text-sm space-x-2 dropdown-item" href="/">
                          <span class="text-base flag-icon flag-icon-in"></span>
                          <span>India</span>
                        </a>
                        <a class="w-1/2 flex items-center justify-start p-2 text-sm space-x-2 dropdown-item" href="/">
                          <span class="text-base flag-icon flag-icon-ca"></span>
                          <span>Canadá</span>
                        </a>
                        <a class="w-1/2 flex items-center justify-start p-2 text-sm space-x-2 dropdown-item" href="/">
                          <span class="text-base flag-icon flag-icon-au"></span>
                          <span>Australia</span>
                        </a>
                        <a class="w-1/2 flex items-center justify-start p-2 text-sm space-x-2 dropdown-item" href="/">
                          <span class="text-base flag-icon flag-icon-jp"></span>
                          <span>Japão</span>
                        </a>
                        <a class="w-1/2 flex items-center justify-start p-2 text-sm space-x-2 dropdown-item" href="/">
                          <span class="text-base flag-icon flag-icon-kr"></span>
                          <span>Koreia</span>
                        </a>
                        <a class="w-1/2 flex items-center justify-start p-2 text-sm space-x-2 dropdown-item" href="/">
                          <span class="text-base flag-icon flag-icon-fr"></span>
                          <span>França</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <!--CUBO-->
                <div class="hidden lg:flex relative">
                  <button @click.prevent="cube" class="flex items-center justify-center h-16 w-12 focus:outline-none">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                  </button>
                  <div v-show="isCube" class="absolute top-0 right-0 mt-16 bg-gray-100 border-2 rounded-lg border-gray-300 transition shadow-2xl">
                    <div class="dropdown-content w-64 bottom-start">
                      <div class="font-bold p-4 uppercase text-gray-700 text-sm leading-5">Apps</div>
                      <div class="flex flex-wrap">
                        <!--ICON HOME-->
                        <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-gray-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                          </svg>
                          <span class="text-xs">Home</span>
                        </div>
                        <!--ICON ACCOUNT-->
                        <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-blue-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>

                          <span class="text-xs">Account</span>
                        </div>
                        <!--ICON COMMENTS-->
                        <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-orange-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                          <span class="text-xs">Comments</span>
                        </div>
                        <!--ICON SETTINGS-->
                        <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-green-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                          <span class="text-xs">Settings</span>
                        </div>
                        <!--ICON MAPS-->
                        <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-red-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                          <span class="text-xs">Maps</span>
                        </div>
                        <!--ICON TWITTER-->
                        <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-blue-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                          <span class="text-xs">Twitter</span>
                        </div>
                        <!--ICON FACEBOOK-->
                        <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-blue-800" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                          <span class="text-xs">Facebook</span>
                        </div>
                        <!--ICON INSTAGRAM-->
                        <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-pink-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                          <span class="text-xs">Instagram</span>
                        </div>
                        <!--ICON LINKEDIN-->
                        <div class="w-1/3 flex flex-col items-center justify-center h-20 space-y-1 dropdown-item">
                          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-xl text-blue-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                          <span class="text-xs">Linkedin</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!--PROJECT STATUS-->
                <div class="hidden lg:flex relative">
                  <button @click.prevent="projectStatus" class="flex items-center justify-center h-16 w-12 focus:outline-none">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    <span class="uppercase absolute font-bold inline-flex text-center p-0 leading-none text-2xs h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-white" style="top: 14px; right: 8px">5</span>
                  </button>
                  <div v-show="isProjectStatus" class="absolute top-0 right-0 mt-16 bg-gray-100 border-2 rounded-lg border-gray-300 transition shadow-2xl">
                    <div class="dropdown-content w-64 bottom-start">
                      <div class="font-bold p-4 uppercase text-gray-700 text-sm leading-5">Project Status</div>
                      <div class="flex flex-col">
                        <!--Mobile-->
                        <div class="flex flex-col p-2 dropdown-item">
                          <div class="flex items-center justify-between mb-2">
                            <div class="text-sm font-bold">Mobile</div>
                            <div class="text-xs whitespace-nowrap">33<!-- -->%</div>
                          </div>

                          <div class="relative flex flex-row w-full text-center text-xs items-center h-1">
                            <div class="top-0 left-0 h-1 w-full bg-green-500" style="width: 33%"></div>
                          </div>
                        </div>
                        <!--Deploy Github-->
                        <div class="flex flex-col p-2 dropdown-item">
                          <div class="flex items-center justify-between mb-2">
                            <div class="text-sm font-bold">Deploy Github</div>
                            <div class="text-xs whitespace-nowrap">50<!-- -->%</div>
                          </div>

                          <div class="relative flex flex-row w-full text-center text-xs items-center h-1">
                            <div class="top-0 left-0 h-1 w-full bg-yellow-500" style="width: 50%"></div>
                          </div>
                        </div>
                        <!--Deploy Github-->
                        <div class="flex flex-col p-2 dropdown-item">
                          <div class="flex items-center justify-between mb-2">
                            <div class="text-sm font-bold">Custos de Desenvolvimento</div>
                            <div class="text-xs whitespace-nowrap">66<!-- -->%</div>
                          </div>

                          <div class="relative flex flex-row w-full text-center text-xs items-center h-1">
                            <div class="top-0 left-0 h-1 w-full bg-red-500" style="width: 66%"></div>
                          </div>
                        </div>
                        <!--Banco de Dados Backup-->
                        <div class="flex flex-col p-2 dropdown-item">
                          <div class="flex items-center justify-between mb-2">
                            <div class="text-sm font-bold">Backup DB</div>
                            <div class="text-xs whitespace-nowrap">25<!-- -->%</div>
                          </div>

                          <div class="relative flex flex-row w-full text-center text-xs items-center h-1">
                            <div class="top-0 left-0 h-1 w-full bg-purple-500" style="width: 25%"></div>
                          </div>
                        </div>
                        <!--Versão-->
                        <div class="flex flex-col p-2 dropdown-item">
                          <div class="flex items-center justify-between mb-2">
                            <div class="text-sm font-bold">Backup DB</div>
                            <div class="text-xs whitespace-nowrap">80<!-- -->%</div>
                          </div>

                          <div class="relative flex flex-row w-full text-center text-xs items-center h-1">
                            <div class="top-0 left-0 h-1 w-full bg-blue-500" style="width: 80%"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!--PROFILE-->
                <div class="hidden lg:flex relative">
                  <button @click.prevent="profile" class="flex h-16 w-8 focus:outline-none relative ml-2">
        <span class="absolute top-0 left-0 pt-4">
          <img class="h-8 w-8 rounded-full shadow bg-yellow-500" src="./assets/img/perfil.png" alt="avatar">
          <span class="absolute uppercase font-bold inline-flex text-center p-0 leading-none text-2xs h-4 w-4 items-center justify-center rounded-full bg-red-500 text-white ring-white" style="top: 10px; right: -4px">2</span>
        </span>
                  </button>
                  <div v-show="isProfile" class="absolute top-0 right-0 mt-16 bg-gray-100 border-2 rounded-lg border-gray-300 transition shadow-2xl">
                    <div class="w-48 bottom-end">
                      <div class="flex flex-col w-full">
                        <ul class="list-none shadow-xl">
                          <!--Inbox-->
                          <li class="hover:text-blue-500 hover:bg-gray-100">
                            <a href="/" class="flex flex-row items-center justify-start h-10 w-full px-2">
                              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                              <span class="mx-2">Inbox</span>
                              <span class="uppercase font-bold inline-flex text-center p-0 leading-none text-2xs h-4 w-4 items-center justify-center rounded-full bg-red-500 text-white ml-auto">2</span>
                            </a>
                          </li>
                          <!--Messages-->
                          <li class="hover:text-blue-500 hover:bg-gray-100">
                            <a href="/" class="flex flex-row items-center justify-start h-10 w-full px-2">
                              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                              <span class="mx-2">Messages</span>
                              <span class="uppercase font-bold inline-flex text-center p-0 leading-none text-2xs h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-white ml-auto">5</span>
                            </a>
                          </li>
                          <!--Profile-->
                          <li class="hover:text-blue-500 hover:bg-gray-100">
                            <a href="/" class="flex flex-row items-center justify-start h-10 w-full px-2">
                              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                              <span class="mx-2">Profile</span>
                            </a>
                          </li>
                          <!--Logout-->
                          <li class="hover:text-blue-500 hover:bg-gray-100">
                            <a href="/" class="flex flex-row items-center justify-start h-10 w-full px-2">
                              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
                              <span class="mx-2">Logout</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <!--BUTTON CONFIG-->
                <button @click.prevent="isSettings = !isSettings" class="btn-transparent flex items-center justify-center h-16 w-8 mx-4 focus:outline-none">
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                </button>
              </div>
            </div>

            <router-view/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      state: {
        chartData: {},
        chartOptions: {
          responsive: true
        },
      },
      isCog: false,

      dBoard: false,

      isExplore: false,

      isApps: false,

      isMenu: false,
      isMenu1: false,
      isMenu2: false,
      isMenu3: false,

      isDemos: false,

      isNation: false,
      isCube: false,

      isProjectStatus: false,

      isProfile: false,

      isSettings: false,

      isConversions: false,
      isConversions2: false,

      isUIElement: false,

    }
  },


  beforeMount () {
    this.fillData()
  },

  methods: {
    fillData () {
      this.state.chartData = {
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

    nation() {
      this.isNation = !this.isNation
      this.isCube = false
      this.isProjectStatus = false
      this.isProfile = false
    },
    cube() {
      this.isNation = false
      this.isCube = !this.isCube
      this.isProjectStatus = false
      this.isProfile = false
    },
    projectStatus() {
      this.isNation = false
      this.isCube = false
      this.isProjectStatus = !this.isProjectStatus
      this.isProfile = false
    },
    profile() {
      this.isNation = false
      this.isCube = false
      this.isProjectStatus = false
      this.isProfile = !this.isProfile
    }
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

