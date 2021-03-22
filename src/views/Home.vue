<template>
  <div id="__next" class="bg-white w-full min-w-min h-screen min-h-full p-0 m-0 relative">
    <div class="font-sans antialiased text-sm disable-scrollbars w-full text-gray-900 bg-white" data-layout="layout-1" data-collapsed="false" data-navbar="light" data-left-sidebar="light">
    <!--SETTINGS RIGHT-->
      <div class="right-sidebar bg-white text-gray-900 right-sidebar-1 openSettings">
        <div>
          <div>
            <!--Cabeçalho DEMO-->
            <div class="flex flex-col">
              <div class="px-4 h-16 flex flex-row items-center justify-between text-white bg-blue-500">
                <div class="uppercase text-sm font-bold tracking-wider">Settings</div>
                <button class="btn btn-circle focus:outline-none">
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>
            </div>

            <!--Colors DEMO-->
            <div class="flex flex-col p-4">
              <div class="uppercase tex-sm font-bold tracking-wider">Demos</div>
              <div class="flex flex-col">
                <button class="flex h-8 w-full hover:bg-transparent">Light Background</button>
                <button class="flex h-8 w-full hover:bg-transparent">Dark Background</button>
                <button class="flex h-8 w-full hover:bg-transparent">Small Sidebar</button>
                <button class="flex h-8 w-full hover:bg-transparent">Dark Sidebar</button>
                <button class="flex h-8 w-full hover:bg-transparent">Dark small sidebar</button>
                <button class="flex h-8 w-full hover:bg-transparent">Dark navbar</button>
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
                  <button class="btn btn-circle btn-raised bg-white text-white hover:bg-transparent"></button>
                  <button class="btn btn-circle btn-raised bg-gray-900 text-gray-900 hover:bg-gray-900"></button>
                </div>
              </div>
              <!--navbar-->
              <div class="mb-2">
                <div class="uppercase text-sm font-normal text-gray-500 tracking-wider mb-2">Navbar</div>
                <div class="flex flex-row space-x-1">
                  <button class="btn btn-circle btn-raised bg-white text-white hover:bg-transparent"></button>
                  <button class="btn btn-circle btn-raised bg-gray-900 text-gray-900 hover:bg-gray-900"></button>
                </div>
              </div>
              <!--left sidebar-->
              <div class="mb-2">
                <div class="uppercase text-sm font-normal text-gray-500 tracking-wider mb-2">Left sidebar</div>
                <div class="flex flex-row space-x-1">
                  <button class="btn btn-circle btn-raised bg-white text-white hover:bg-transparent"></button>
                  <button class="btn btn-circle btn-raised bg-gray-900 text-gray-900 hover:bg-gray-900"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--WRAPPER ALL-->
      <div class="wrapper">
        <!--D-BOARD LEFT-->
        <div class="left-sidebar left-sidebar-1">
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
              <a class="left-sidebar-item active" href="/dashboard">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
                <span class="title">Dashboard</span>
              </a>
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
                  <a class="left-sidebar-item" href="/#">
                    <span class="title">Social feed</span>
                  </a>
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
                <a class="left-sidebar-item active" href="#">
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
                  <span class="title">UI Elements</span>
                </a>
                <ul></ul>
              </li>
              <!--Forms-->
              <li class="l0">
                <button @click.prevent="" class="left-sidebar-item  focus:outline-none">
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                  <span class="title">Forms</span>
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-auto arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
                <!--sub-apps-->
                <!--                <ul v-show="isApps">
                  <li class="l1">
                    <a class="left-sidebar-item" href="/#">
                      <span class="title">Social feed</span>
                    </a>
                    <ul></ul>
                  </li>
                  <li class="l1">
                    <a class="left-sidebar-item" href="/#">
                      <span class="title">Tasks</span>
                    </a>
                    <ul></ul>
                  </li>
                </ul>-->
              </li>
              <!--Tables-->
              <li class="l0">
                <button @click.prevent="" class="left-sidebar-item focus:outline-none">
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                  </svg>
                  <span class="title">Tables</span>
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-auto arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
                <!--                <ul v-show="isMenu">
                  &lt;!&ndash;L1&ndash;&gt;
                  <li class="l1">
                    <button @click.prevent="isMenu1 = !isMenu1" class="left-sidebar-item focus:outline-none">
                      <span class="title">Level 1-1</span>
                      <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-auto arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </button>
                    &lt;!&ndash;L2&ndash;&gt;
                    <ul v-show="isMenu1">
                      <li class="l2">
                        <button @click.prevent="isMenu2 = !isMenu2" class="left-sidebar-item focus:outline-none">
                          <span class="title ml-4">Level 2-1</span>
                          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-auto arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline>
                          </svg>
                        </button>
                        &lt;!&ndash;L3&ndash;&gt;
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
                </ul>-->
              </li>
              <!--Nortifications-->
              <li class="l0">
                <button @click.prevent="" class="left-sidebar-item focus:outline-none">
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  <span class="title">Notifications</span>
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-auto arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
                <!--                <ul v-show="isDemos">
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
                </ul>-->
              </li>

              <li class="l0"></li>
            </ul>
        </div>

        <!--MAIN-->
        <div class="main w-full bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
          <!--NAVBAR-->
          <div class="navbar navbar-1 border-b">
            <div class="navbar-inner  w-full flex items-center justify-start">
              <button class="mx-4 focus:outline-none"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>
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
                  <div v-show="isExplore" class="dropdown transition absolute top-0 left-0 mt-16">
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
                        <div class="w-1/2 p-2 dropdown-item">
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
                        <div class="w-1/2 p-2 dropdown-item">
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
                        <div class="w-1/2 p-2 dropdown-item">
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
                        <div class="w-1/2 p-2 dropdown-item">
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
                        <div class="w-1/2 p-2 dropdown-item">
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
                    <img class="h-8 w-8 rounded-full shadow bg-yellow-500" src="../assets/img/perfil.png" alt="avatar">
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

          <!--CONTENT-->
          <div class="min-h-screen w-full p-4">
            <!--DASHBOARD/BUTTON-->
            <div class="flex flex-row items-center justify-between mb-4">
              <div class="flex flex-col">
                <div class="text-xs uppercase font-light text-gray-500">Overview</div>
                <div class="text-xl font-bold">Dashboard</div>
              </div>
              <div class="flex-shrink-0 space-x-2">
                <button class="btn btn-default rounded-lg btn-icon bg-blue-500 hover:bg-blue-600 text-white space-x-1">
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-white" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  <span>Add Widget</span>
                </button>
              </div>
            </div>

            <!--CONTENT-->
            <div class="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
              <!--USERS-->
              <div class="w-full lg:w-1/4">
                <div class="widget w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                  <div class="flex flex-row items-center justify-between">
                    <div class="flex flex-col">
                      <div class="text-xs uppercase font-light text-gray-500">Users</div>
                      <div class="text-xl font-bold">588</div>
                    </div>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-gray-500" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  </div>
                </div>
              </div>
              <!--SESSIONS-->
              <div class="w-full lg:w-1/4">
                <div class="widget w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                  <div class="flex flex-row items-center justify-between">
                    <div class="flex flex-col">
                      <div class="text-xs uppercase font-light text-gray-500">Sessions</div>
                      <div class="text-xl font-bold">455</div>
                    </div>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-gray-500" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                  </div>
                </div>
              </div>
              <!--BOUNCE RATE-->
              <div class="w-full lg:w-1/4">
                <div class="widget w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                  <div class="flex flex-row items-center justify-between">
                    <div class="flex flex-col">
                      <div class="text-xs uppercase font-light text-gray-500">Bounce Rate</div>
                      <div class="text-xl font-bold">40.5%</div>
                    </div>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-gray-500" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </div>
                </div>
              </div>
              <!--SESSOION DURATION-->
              <div class="w-full lg:w-1/4">
                <div class="widget w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                  <div class="flex flex-row items-center justify-between">
                    <div class="flex flex-col">
                      <div class="text-xs uppercase font-light text-gray-500">Sessions Duration</div>
                      <div class="text-xl font-bold">1m 24s</div>
                    </div>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-gray-500" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                </div>
              </div>
            </div>

            <!--GHRAPICS-->
            <div class="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
              <div class="w-full lg:w-2/3">
                <div class="w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                  <!--header ghrapics-->
                  <div class="flex flex-row items-center justify-between mb-6">
                    <!--conversions title-->
                    <div class="flex flex-col">
                      <div class="text-sm font-light text-gray-500">Conversions</div>
                      <div class="text-sm font-bold">
                        <span>This year</span>
                      </div>
                    </div>
                    <!--icon ellipsis-->
                    <div class="relative">
                      <button @click.prevent="isConversions = !isConversions" class="bg-gray-200 pl-1.5 btn-default btn-circle btn-icon hover:scale-100 hover:scale-100 hover:bg-gray-300 relative focus:outline-none">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current stroke-1" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                      </button>
                      <div v-show="isConversions" class="dropdown absolute top-0 right-0 mt-8 transition">
                        <div class="dropdown-content w-48 bottom-start">
                          <div class="flex flex-col w-full">
                            <ul class="list-none">
                              <li>
                                <a class="flex flex-row items-center justify-start h-10 w-full px-2 bg-white hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800" href="/">Today</a>
                              </li>
                              <li>
                                <a class="flex flex-row items-center justify-start h-10 w-full px-2 bg-white hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800" href="/">This week</a>
                              </li>
                              <li>
                                <a class="flex flex-row items-center justify-start h-10 w-full px-2 bg-white hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800" href="/">This month</a>
                              </li>
                              <li>
                                <a class="flex flex-row items-center justify-start h-10 w-full px-2 bg-white hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800" href="/">This year</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--ghrapics-->
                  <div class="flex flex-row w-full" style="width: 100%!important; height: 100%!important;">

                    <div style="width: 100%;height: 240px">
                      <div class="recharts-responsive-container relative" style="width:100%;height:100%">
                        <div class="recharts-wrapper" style="cursor: default; width: 240px; height: 340px!important;">
<!--                          <svg class="recharts-surface" width="889" height="240" viewBox="0 0 889 240" version="1.1"><defs><clipPath id="recharts3-clip"><rect x="40" y="10" height="190" width="839"></rect></clipPath></defs><g class="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis"><g class="recharts-cartesian-axis-ticks"><g class="recharts-layer recharts-cartesian-axis-tick"><text width="839" height="30" x="74.95833333333334" y="208" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="74.95833333333334" dy="0.71em">Jan</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text width="839" height="30" x="144.875" y="208" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="144.875" dy="0.71em">Feb</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text width="839" height="30" x="214.79166666666669" y="208" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="214.79166666666669" dy="0.71em">Mar</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text width="839" height="30" x="284.7083333333333" y="208" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="284.7083333333333" dy="0.71em">Apr</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text width="839" height="30" x="354.625" y="208" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="354.625" dy="0.71em">May</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text width="839" height="30" x="424.5416666666667" y="208" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="424.5416666666667" dy="0.71em">Jun</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text width="839" height="30" x="494.4583333333333" y="208" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="494.4583333333333" dy="0.71em">Jul</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text width="839" height="30" x="564.3750000000001" y="208" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="564.3750000000001" dy="0.71em">Aug</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text width="839" height="30" x="634.2916666666667" y="208" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="634.2916666666667" dy="0.71em">Sep</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text width="839" height="30" x="704.2083333333334" y="208" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="704.2083333333334" dy="0.71em">Oct</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text width="839" height="30" x="774.1250000000001" y="208" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="774.1250000000001" dy="0.71em">Nov</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text width="839" height="30" x="844.0416666666667" y="208" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="844.0416666666667" dy="0.71em">Dec</tspan></text></g></g></g><g class="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis"><g class="recharts-cartesian-axis-ticks"><g class="recharts-layer recharts-cartesian-axis-tick"><text width="30" height="190" x="32" y="200" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end"><tspan x="32" dy="0.355em">0</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text width="30" height="190" x="32" y="152.5" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end"><tspan x="32" dy="0.355em">60</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text width="30" height="190" x="32" y="105" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end"><tspan x="32" dy="0.355em">120</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text width="30" height="190" x="32" y="57.5" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end"><tspan x="32" dy="0.355em">180</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><text width="30" height="190" x="32" y="10" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end"><tspan x="32" dy="0.355em">240</tspan></text></g></g></g><g class="recharts-layer recharts-bar"><g class="recharts-layer recharts-bar-rectangles"><g class="recharts-layer"><g class="recharts-layer recharts-bar-rectangle"><path fill="#bfdbfe" width="10" height="128.25" x="62" y="71.74999999999999" radius="0" class="recharts-rectangle" d="M 62,71.74999999999999 h 10 v 128.25 h -10 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="#bfdbfe" width="10" height="95" x="131.91666666666669" y="105" radius="0" class="recharts-rectangle" d="M 131.91666666666669,105 h 10 v 95 h -10 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="#bfdbfe" width="10" height="95" x="201.83333333333334" y="105" radius="0" class="recharts-rectangle" d="M 201.83333333333334,105 h 10 v 95 h -10 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="#bfdbfe" width="10" height="143.29166666666666" x="271.75" y="56.708333333333336" radius="0" class="recharts-rectangle" d="M 271.75,56.708333333333336 h 10 v 143.29166666666666 h -10 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="#bfdbfe" width="10" height="89.45833333333334" x="341.6666666666667" y="110.54166666666666" radius="0" class="recharts-rectangle" d="M 341.6666666666667,110.54166666666666 h 10 v 89.45833333333334 h -10 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="#bfdbfe" width="10" height="152" x="411.58333333333337" y="48" radius="0" class="recharts-rectangle" d="M 411.58333333333337,48 h 10 v 152 h -10 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="#bfdbfe" width="10" height="143.29166666666666" x="481.5" y="56.70833333333334" radius="0" class="recharts-rectangle" d="M 481.5,56.70833333333334 h 10 v 143.29166666666666 h -10 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="#bfdbfe" width="10" height="98.16666666666667" x="551.4166666666667" y="101.83333333333333" radius="0" class="recharts-rectangle" d="M 551.4166666666667,101.83333333333333 h 10 v 98.16666666666667 h -10 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="#bfdbfe" width="10" height="82.33333333333334" x="621.3333333333334" y="117.66666666666666" radius="0" class="recharts-rectangle" d="M 621.3333333333334,117.66666666666666 h 10 v 82.33333333333334 h -10 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="#bfdbfe" width="10" height="95" x="691.25" y="105" radius="0" class="recharts-rectangle" d="M 691.25,105 h 10 v 95 h -10 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="#bfdbfe" width="10" height="131.41666666666666" x="761.1666666666667" y="68.58333333333334" radius="0" class="recharts-rectangle" d="M 761.1666666666667,68.58333333333334 h 10 v 131.41666666666666 h -10 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="#bfdbfe" width="10" height="121.91666666666667" x="831.0833333333334" y="78.08333333333333" radius="0" class="recharts-rectangle" d="M 831.0833333333334,78.08333333333333 h 10 v 121.91666666666667 h -10 Z"></path></g></g></g></g><g class="recharts-layer recharts-bar"><g class="recharts-layer recharts-bar-rectangles"><g class="recharts-layer"><g class="recharts-layer recharts-bar-rectangle"><path fill="#2563eb" width="10" height="187.625" x="76" y="12.374999999999993" radius="0" class="recharts-rectangle" d="M 76,12.374999999999993 h 10 v 187.625 h -10 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="#2563eb" width="10" height="118.75" x="145.91666666666669" y="81.25" radius="0" class="recharts-rectangle" d="M 145.91666666666669,81.25 h 10 v 118.75 h -10 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="#2563eb" width="10" height="151.20833333333331" x="215.83333333333334" y="48.79166666666668" radius="0" class="recharts-rectangle" d="M 215.83333333333334,48.79166666666668 h 10 v 151.20833333333331 h -10 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="#2563eb" width="10" height="187.625" x="285.75" y="12.374999999999991" radius="0" class="recharts-rectangle" d="M 285.75,12.374999999999991 h 10 v 187.625 h -10 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="#2563eb" width="10" height="146.45833333333334" x="355.6666666666667" y="53.541666666666664" radius="0" class="recharts-rectangle" d="M 355.6666666666667,53.541666666666664 h 10 v 146.45833333333334 h -10 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="#2563eb" width="10" height="176.54166666666669" x="425.58333333333337" y="23.45833333333333" radius="0" class="recharts-rectangle" d="M 425.58333333333337,23.45833333333333 h 10 v 176.54166666666669 h -10 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="#2563eb" width="10" height="185.25" x="495.5" y="14.75" radius="0" class="recharts-rectangle" d="M 495.5,14.75 h 10 v 185.25 h -10 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="#2563eb" width="10" height="145.66666666666669" x="565.4166666666667" y="54.33333333333332" radius="0" class="recharts-rectangle" d="M 565.4166666666667,54.33333333333332 h 10 v 145.66666666666669 h -10 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="#2563eb" width="10" height="182.875" x="635.3333333333334" y="17.124999999999993" radius="0" class="recharts-rectangle" d="M 635.3333333333334,17.124999999999993 h 10 v 182.875 h -10 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="#2563eb" width="10" height="178.91666666666666" x="705.25" y="21.083333333333336" radius="0" class="recharts-rectangle" d="M 705.25,21.083333333333336 h 10 v 178.91666666666666 h -10 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="#2563eb" width="10" height="181.29166666666669" x="775.1666666666667" y="18.70833333333332" radius="0" class="recharts-rectangle" d="M 775.1666666666667,18.70833333333332 h 10 v 181.29166666666669 h -10 Z"></path></g><g class="recharts-layer recharts-bar-rectangle"><path fill="#2563eb" width="10" height="133" x="845.0833333333334" y="67" radius="0" class="recharts-rectangle" d="M 845.0833333333334,67 h 10 v 133 h -10 Z"></path></g></g></g></g></svg>
                          <div class="recharts-tooltip-wrapper" style="pointer-events: none; visibility: hidden; position: absolute; top: 0px; transform: translate(504.458px, 122px);">
                          </div>-->
                          <LineChart class=" bg-yellow-500" :chartData="state.chartData" :chartOptions="state.chartOptions">dasdsa</LineChart>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="w-full lg:w-1/3">
                <div class="w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                  <div class="flex flex-row items-center justify-between mb-6">
                    <div class="flex flex-col">
                      <div class="text-gray-500 text-sm font-light">Sessions</div>
                      <div class="text-sm font-bold">
                        <span>By device</span>
                      </div>
                    </div>
                    <div class="relative">
                      <button @click.prevent="isConversions2 = !isConversions2" class="bg-gray-200 pl-1.5 btn-default btn-circle btn-icon hover:scale-100 hover:scale-100 hover:bg-gray-300 relative focus:outline-none">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current stroke-1" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                      </button>
                      <div v-show="isConversions2" class="dropdown absolute top-0 right-0 mt-8 transition">
                        <div class="dropdown-content w-48 bottom-start">
                          <div class="flex flex-col w-full">
                            <ul class="list-none">
                              <li>
                                <a class="flex flex-row items-center justify-start h-10 w-full px-2 bg-white hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800" href="/">Today</a>
                              </li>
                              <li>
                                <a class="flex flex-row items-center justify-start h-10 w-full px-2 bg-white hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800" href="/">This week</a>
                              </li>
                              <li>
                                <a class="flex flex-row items-center justify-start h-10 w-full px-2 bg-white hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800" href="/">This month</a>
                              </li>
                              <li>
                                <a class="flex flex-row items-center justify-start h-10 w-full px-2 bg-white hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800" href="/">This year</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-row w-full">
                    <div style="width:100%;height:240px">
                      <div class="recharts-responsive-container" style="width:100%;height:100%">
                        <div class="recharts-wrapper relative" style="width: 427px; height: 240px;">
<!--                          <LineChart class="canvas-gr" :chartData="state.chartData" :chartOptions="state.chartOptions" />-->
                          
                          <div class="recharts-legend-wrapper absolute" style="width: 417px; height: auto; left: 5px; bottom: 5px;">
                            <ul class="recharts-default-legend p-0 m-0 text-center">
                              <li class="recharts-legend-item legend-item-0 inline-block" style="margin-right: 10px;"><svg class="recharts-surface" width="14" height="14" viewBox="0 0 32 32" version="1.1" style="display: inline-block; vertical-align: middle; margin-right: 4px;"><path fill="#bfdbfe" class="recharts-symbols" transform="translate(16, 16)" d="M16,0A16,16,0,1,1,-16,0A16,16,0,1,1,16,0"></path></svg>
                                <span class="recharts-legend-item-text">Desktop</span>
                              </li>
                              <li class="recharts-legend-item legend-item-1 inline-block" style="margin-right: 10px;"><svg class="recharts-surface" width="14" height="14" viewBox="0 0 32 32" version="1.1" style="display: inline-block; vertical-align: middle; margin-right: 4px;"><path fill="#60a5fa" class="recharts-symbols" transform="translate(16, 16)" d="M16,0A16,16,0,1,1,-16,0A16,16,0,1,1,16,0"></path></svg>
                                <span class="recharts-legend-item-text">Mobile</span>
                              </li>
                              <li class="recharts-legend-item legend-item-2 inline-block" style="margin-right: 10px;"><svg class="recharts-surface" width="14" height="14" viewBox="0 0 32 32" version="1.1" style="display: inline-block; vertical-align: middle; margin-right: 4px;"><path fill="#2563eb" class="recharts-symbols" transform="translate(16, 16)" d="M16,0A16,16,0,1,1,-16,0A16,16,0,1,1,16,0"></path></svg>
                                <span class="recharts-legend-item-text">Tablet</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <!--USERS-->
            <div class="w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
              <div class="w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">

              <!--Header Users-->
              <div class="flex flex-row items-center justify-between mb-6">
                <div class="flex flex-col">
                  <div class="font-light text-sm text-gray-500">Users</div>
                  <div class="font-bold text-sm">
                    <span>Most Important markets</span>
                  </div>
                </div>
              </div>
              <!--LIST USERS-->
              <div class="flex flex-col w-full">
                <div class="overflow-x-scroll lg:overflow-hidden">

                  <!--TABLE-->
                  <table role="table" class="table w-full">
                    <thead class="border-b w-full">
                      <tr role="row">
                      <!--checkbox-->
                      <th class="py-2 px-4" colspan="1" role="columnheader">
                        <div class="flex flex-row items-center justify-start whitespace-nowrap">
                          <span>
                            <input class="cursor-pointer form-checkbox h-4 w-4" type="checkbox" title="Toggle All Row Selected">
                            <span class="ml-auto"></span>
                          </span>
                        </div>
                      </th>
                      <!--country-->
                      <th class="cursor-pointer text-gray-500" colspan="1" role="columnheader" title="Toggle SortBy">
                        <div class="flex flex-row items-center justify-start whitespace-nowrap">
                          <span>Country</span>
                        </div>
                      </th>
                      <!--Active users-->
                      <th class="cursor-pointer text-gray-500" colspan="1" role="columnheader" title="Toggle SortBy">
                        <div class="flex flex-row items-center justify-start whitespace-nowrap">
                          <span>Active Users</span>
                        </div>
                      </th>
                      <!--team members-->
                      <th class="cursor-pointer text-gray-500" colspan="1" role="columnheader" title="Toggle SortBy">
                        <div class="flex flex-row items-center justify-start whitespace-nowrap">
                          <span>Team Members</span>
                        </div>
                      </th>
                      <!--progress-->
                      <th class="cursor-pointer text-gray-500" colspan="1" role="columnheader" title="Toggle SortBy">
                        <div class="flex flex-row items-center justify-start whitespace-nowrap">
                          <span>Progress</span>
                        </div>
                      </th>
                    </tr>
                    </thead>
                    <tbody class="w-full" role="rowgroup">
                      <tr v-for="item in 2" :key="item" role="row" class="border-b items-center">
                        <!--checkbox-->
                        <td role="cell" class="px-4 py-6 items-center flex">
                          <input class="cursor-pointer form-checkbox h-4 w-4" type="checkbox" title="Toggle All Row Selected">
                        </td>
                        <!--nation-->
                        <td role="cell" class="">
                          <span class="text-sm flag-icon flag-icon-cn"></span>
                          <span class="ml-2">China</span>
                        </td>
                        <!--number users-->
                        <td role="cell">
                          <span>1,377,422,166</span>
                        </td>
                        <!--team members-->
                        <td role="cell">
                          <div class="flex flex-row items-center justify-start">
                            <img src="https://media.istockphoto.com/photos/closeup-portrait-of-young-smiling-man-in-denim-shirt-isolated-on-gray-picture-id1171169125?b=1&k=6&m=1171169125&s=170667a&w=0&h=4SOSCh5T_4BEDeqS1e0OvKyPQvlSgx4mWNRp5rFdj2o=" alt="media" class="h-8 w-8 ring rounded-full -ml-3">
                            <img src="https://cdn.pixabay.com/photo/2017/06/15/11/40/beautiful-2405131__340.jpg" alt="media" class="h-8 w-8 ring rounded-full -ml-3">
                            <img src="https://media.istockphoto.com/photos/portrait-of-smiling-male-employee-posing-in-office-picture-id1192579030?b=1&k=6&m=1192579030&s=170667a&w=0&h=LiXaAAWgR2bORhhnqzEy5l3hqx-ZazFoytujtmaD5-g=" alt="media" class="h-8 w-8 ring rounded-full -ml-3">
                            <img src="https://media.istockphoto.com/photos/pleasure-fashion-idyllic-perfection-hydration-wellness-wellbeing-picture-id992913432?b=1&k=6&m=992913432&s=170667a&w=0&h=-WiY57m_1VdNTndRYuLb9QyWqZIw_3gYo_YqWDJONWs=" alt="media" class="h-8 w-8 ring rounded-full -ml-3">
                          </div>
                        </td>
                        <!--progress-->
                        <td role="cell">
                          <div class="flex flex-col w-full">
                            <div class="flex flex-row items-center justify-around">
                              <div class="relative flex flex-row w-full text-center text-xs items-center h-1">
                                <div class="top-0 left-0 h-1 w-full bg-indigo-500" style="width: 83%"></div>
                              </div>
                              <span class="ml-1 text-gray-500">83%</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr v-for="item in 3" :key="item" role="row" class="border-b items-center">
                        <!--checkbox-->
                        <td role="cell" class="px-4 py-6 items-center flex">
                          <input class="cursor-pointer form-checkbox h-4 w-4" type="checkbox" title="Toggle All Row Selected">
                        </td>
                        <!--nation-->
                        <td role="cell" class="">
                          <span class="text-sm flag-icon flag-icon-br"></span>
                          <span class="ml-2">Brasil</span>
                        </td>
                        <!--number users-->
                        <td role="cell">
                          <span>1,295,210,000</span>
                        </td>
                        <!--team members-->
                        <td role="cell">
                          <div class="flex flex-row items-center justify-start">
                            <img src="https://cdn.pixabay.com/photo/2017/06/09/17/11/model-2387582__340.jpg" alt="media" class="h-8 w-8 ring rounded-full -ml-3">
                            <img src="https://cdn.pixabay.com/photo/2017/05/24/15/42/eye-2340806__340.jpg" alt="media" class="h-8 w-8 ring rounded-full -ml-3">
                            <img src="https://cdn.pixabay.com/photo/2016/03/27/21/52/cold-1284411__340.jpg" alt="media" class="h-8 w-8 ring rounded-full -ml-3">
                            <img src="https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457__340.jpg" alt="media" class="h-8 w-8 ring rounded-full -ml-3">
                          </div>
                        </td>
                        <!--progress-->
                        <td role="cell">
                          <div class="flex flex-col w-full">
                            <div class="flex flex-row items-center justify-around">
                              <div class="relative flex flex-row w-full text-center text-xs items-center h-1">
                                <div class="top-0 left-0 h-1 w-full bg-green-500" style="width: 71%"></div>
                              </div>
                              <span class="ml-1 text-gray-500">71%</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr v-for="item in 3" :key="item" role="row" class="border-b items-center">
                        <!--checkbox-->
                        <td role="cell" class="px-4 py-6 items-center flex">
                          <input class="cursor-pointer form-checkbox h-4 w-4" type="checkbox" title="Toggle All Row Selected">
                        </td>
                        <!--nation-->
                        <td role="cell" class="">
                          <span class="text-sm flag-icon flag-icon-br"></span>
                          <span class="ml-2">Itália</span>
                        </td>
                        <!--number users-->
                        <td role="cell">
                          <span>146,599,183</span>
                        </td>
                        <!--team members-->
                        <td role="cell">
                          <div class="flex flex-row items-center justify-start">
                            <img src="https://cdn.pixabay.com/photo/2015/08/05/04/02/people-875597__340.jpg" alt="media" class="h-8 w-8 ring rounded-full -ml-3">
                            <img src="https://cdn.pixabay.com/photo/2014/08/28/08/31/model-429733__340.jpg" alt="media" class="h-8 w-8 ring rounded-full -ml-3">
                            <img src="https://cdn.pixabay.com/photo/2015/07/20/13/01/fred-852770__340.jpg" alt="media" class="h-8 w-8 ring rounded-full -ml-3">
                          </div>
                        </td>
                        <!--progress-->
                        <td role="cell">
                          <div class="flex flex-col w-full">
                            <div class="flex flex-row items-center justify-around">
                              <div class="relative flex flex-row w-full text-center text-xs items-center h-1">
                                <div class="top-0 left-0 h-1 w-full bg-green-700" style="width: 82%"></div>
                              </div>
                              <span class="ml-1 text-gray-500">82%</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr v-for="item in 3" :key="item" role="row" class="border-b items-center">
                        <!--checkbox-->
                        <td role="cell" class="px-4 py-6 items-center flex">
                          <input class="cursor-pointer form-checkbox h-4 w-4" type="checkbox" title="Toggle All Row Selected">
                        </td>
                        <!--nation-->
                        <td role="cell" class="">
                          <span class="text-sm flag-icon flag-icon-br"></span>
                          <span class="ml-2">França</span>
                        </td>
                        <!--number users-->
                        <td role="cell">
                          <span>126,960,000</span>
                        </td>
                        <!--team members-->
                        <td role="cell">
                          <div class="flex flex-row items-center justify-start">
                            <img src="https://cdn.pixabay.com/photo/2015/03/08/17/25/musician-664432__340.jpg" alt="media" class="h-8 w-8 ring rounded-full -ml-3">
                            <img src="https://cdn.pixabay.com/photo/2018/01/04/08/04/people-3060107__340.jpg" alt="media" class="h-8 w-8 ring rounded-full -ml-3">
                          </div>
                        </td>
                        <!--progress-->
                        <td role="cell">
                          <div class="flex flex-col w-full">
                            <div class="flex flex-row items-center justify-around">
                              <div class="relative flex flex-row w-full text-center text-xs items-center h-1">
                                <div class="top-0 left-0 h-1 w-full bg-red-500" style="width: 47%"></div>
                              </div>
                              <span class="ml-1 text-gray-500">47%</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <!--TABLE FOOTER-->
                  <div class="flex flex-row w-full items-center justify-around lg:justify-between my-4">
                    <!--Next/Last-->
                    <div class="flex flex-wrap items-center justify-start space-x-2 pagination">
                      <button class="btn btn-default bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">Next</button>
                      <button class="btn btn-default bg-transparent hover:bg-gray-200 text-gray-900 dark:text-white focus:outline-none">Last</button>
                    </div>
                    <!--Page-->
                    <span class="hidden lg:block">
                      Page
                      <b>1 of 11</b>
                    </span>
                    <!--Show Items-->
                    <select class="p-3 cursor-pointer hidden lg:block border rounded text-sm bg-white hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-800 outline-none shadow-none focus:shadow-none">
                      <option class="font-light block whitespace-nowrap" value="10">Show 10</option>
                      <option class="font-light block whitespace-nowrap" value="25">Show 25</option>
                      <option class="font-light block whitespace-nowrap" value="50">Show 50</option>
                      <option class="font-light block whitespace-nowrap" value="100">Show 100</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            </div>
            
            <div class="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
              <!--Activities Today-->
              <div class="w-full lg:w-1/2">
                <div class="w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                  <div class="flex flex-row items-center justify-between mb-6">
                    <div class="flex flex-col">
                      <div class="text-sm font-light text-gray-500">Project status</div>
                      <div class="text-sm font-bold"><span>This week</span></div>
                    </div>
                  </div>
                  <div class="flex flex-row w-full">
                    <div class="flex flex-col w-full">
                      <div class="flex relative justify-start items-start">
                        
                        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                          <div class="h-full w-1 bg-gray-200 dark:bg-gray-800 pointer-events-none"></div>
                        </div>
                        <div class="flex-shrink-0 w-6 h-6 rounded-full inline-flex items-center justify-center bg-blue-500 text-white relative z-10 font-medium text-sm">1</div>
                        <div class="flex-grow flex items-start flex-col pb-4">
                          <div class="flex items-start justify-start px-4">
                            <div class="flex flex-col w-full">
                              <div class="text-sm font-bold">Perferendis dignissimos provident saepe in.</div>
                              <div class="text-sm">Corporis in est quae exercitationem.</div>
                              <div class="text-sm">a few seconds ago</div>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col w-full">
                    <div class="flex relative justify-start items-start">

                      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                        <div class="h-full w-1 bg-gray-200 dark:bg-gray-800 pointer-events-none"></div>
                      </div>
                      <div class="flex-shrink-0 w-6 h-6 rounded-full inline-flex items-center justify-center bg-blue-500 text-white relative z-10 font-medium text-sm">2</div>
                      <div class="flex-grow flex items-start flex-col pb-4">
                        <div class="flex items-start justify-start px-4">
                          <div class="flex flex-col w-full">
                            <div class="text-sm font-bold">Perferendis dignissimos provident saepe in.</div>
                            <div class="text-sm">Corporis in est quae exercitationem.</div>
                            <div class="text-sm">a few seconds ago</div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div class="flex flex-col w-full">
                    <div class="flex relative justify-start items-start">

                      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                        <div class="h-full w-1 bg-gray-200 dark:bg-gray-800 pointer-events-none"></div>
                      </div>
                      <div class="flex-shrink-0 w-6 h-6 rounded-full inline-flex items-center justify-center bg-blue-500 text-white relative z-10 font-medium text-sm">3</div>
                      <div class="flex-grow flex items-start flex-col pb-4">
                        <div class="flex items-start justify-start px-4">
                          <div class="flex flex-col w-full">
                            <div class="text-sm font-bold">Perferendis dignissimos provident saepe in.</div>
                            <div class="text-sm">Corporis in est quae exercitationem.</div>
                            <div class="text-sm">a few seconds ago</div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div class="flex flex-col w-full">
                    <div class="flex relative justify-start items-start">

                      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                        <div class="h-full w-1 bg-gray-200 dark:bg-gray-800 pointer-events-none"></div>
                      </div>
                      <div class="flex-shrink-0 w-6 h-6 rounded-full inline-flex items-center justify-center bg-blue-500 text-white relative z-10 font-medium text-sm">4</div>
                      <div class="flex-grow flex items-start flex-col pb-4">
                        <div class="flex items-start justify-start px-4">
                          <div class="flex flex-col w-full">
                            <div class="text-sm font-bold">Perferendis dignissimos provident saepe in.</div>
                            <div class="text-sm">Corporis in est quae exercitationem.</div>
                            <div class="text-sm">a few seconds ago</div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              <!--Sales-->
              <div class="w-full lg:w-1/2">
                <div class="w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                  <div class="flex flex-row items-center justify-between mb-6">
                    <div class="flex flex-col">
                      <div class="text-sm font-light text-gray-500">Sales</div>
                      <div class="text-sm font-bold"><span>This month</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
<!--          <LineChart :chartData="state.chartData" :chartOptions="state.chartOptions" />-->
        </div>
      </div>
    </div>
  </div>

</template>

<script>


import LineChart from "@/components/LineChart";
export default {
  name: 'Home',
  components: {LineChart},
  data() {
    return {
      state: {
        chartData: {},
        chartOptions: {
          responsive: true
        }
      },

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

      setting: {
        isSettings: false,
      },

      isConversions: false,
      isConversions2: false,
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

/*RIGHT SIDEBAR*/
.right-sidebar.right-sidebar-1.openSettings {
  /*transform: translateX(0px);*/
}
.right-sidebar.right-sidebar-1 {
  height: 100%;
  font-size: .825rem;
  line-height: 1.25rem;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent), var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow);
  width: 16rem;
  z-index: 10;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  --tw-translate-x: 16rem;
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
  transition-duration: .15s;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  transition-duration: .3s;
}

/*WRAPPER*/
@media (min-width: 768px) {
  [data-layout=layout-1] .wrapper {
    display: flex;
    flex-direction: row;
    align-items: stretch;
  }
}

/*LEFT SIDERBAR*/
@media (min-width: 768px) {
  [data-layout=layout-1][data-collapsed=false] .left-sidebar {
    max-width: calc(.25rem * 64);
  }
}
@media (min-width: 768px) {
  [data-layout=layout-1] .wrapper .left-sidebar {
    width: 100%;
    min-width: calc(.25rem * 16);
    max-width: calc(.25rem * 64);
    transition: max-width .25s ease-in-out;
  }
}
@media (min-width: 768px) {
  [data-left-sidebar=light] .left-sidebar-1 {
    --tw-bg-opacity: 1;
    background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
    --tw-border-opacity: 1;
    border-color: rgba(229, 231, 235, var(--tw-border-opacity));
    border-right-width: 1px;
    --tw-text-opacity: 1;
    color: rgba(17, 24, 39, var(--tw-text-opacity));
  }
}

/*LOGO D-BOARD*/
@media (min-width: 768px) {
  .left-sidebar-1 .logo {
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
  [data-left-sidebar=light] .left-sidebar-title:before {
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
  [data-collapsed=false] .left-sidebar-title span {
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
    width: 100%;
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
/*@media (min-width: 768px) {
  [data-collapsed=false] .l0>.left-sidebar-item>.title {
    visibility: visible;
  }
}*/
/*@media (min-width: 768px) {
  .left-sidebar-item.active:after, .left-sidebar-item:hover:after {
    display: block;
  }
}*/
@media (min-width: 768px) {
  .left-sidebar-item:after, .left-sidebar-item:after {
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
  [data-collapsed=false] ul ul .left-sidebar-item {
    padding-left: calc(.25rem * 16);
  }
}

/*HIDDEN SIBLING*/
@media (min-width: 768px) {
  [data-collapsed=false] .hidden-sibling.left-sidebar-item .arrow {
    transform: rotate(
        -90deg
    )!important;
  }
}
@media (min-width: 768px) {
  .left-sidebar-item.open-sibling:after {
    display: block;
  }
}
@media (min-width: 768px) {
  .arrow {
    transform: rotate(
        90deg
    );
    transition: transform .15s ease-in-out;
  }
}
@media (min-width: 768px) {
  [data-collapsed=false] .hidden-sibling+ul, [data-collapsed=true] .arrow {
    display: none;
  }
}

/*MAIN*/
@media (min-width: 768px) {
  [data-layout=layout-1] .wrapper .main {
    min-width: calc(100% - (.25rem * 64));
    display: flex;
    flex-direction: column;
  }
}

.btn.btn-default {
  padding: .5rem 1rem;
}
.btn.btn-default, .btn.btn-sm {
  font-size: .75rem;
  line-height: 1rem;
}

.dropdown .dropdown-content {
  border-radius: .375rem;
  --tw-shadow: 0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);
  box-shadow: var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);
}
.flag-icon::before {
  content: '\00a0';
}

.table thead tr th {
  font-weight: 300;
  font-size: .80rem;
  line-height: 1rem;
  text-transform: uppercase;
  letter-spacing: .05em;
}
</style>
