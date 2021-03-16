<template>
  <div id="__next" class="bg-white w-full min-w-min h-full min-h-full p-0 m-0 overflow-hidden relative">
    <div data-layout="layout-1" data-collapsed="false" data-background="light" data-navbar="light" data-left-sidebar="light" data-right-sidebar="light" class="font-sans antialiased text-sm disable-scrollbars">
    <!--SETTINGS RIGHT-->
      <div class="right-sidebar right-sidebar-1 open">
        <div>
          <div>
            <!--Cabeçalho DEMO-->
            <div class="flex flex-col">
              <div class="px-4 h-16 flex flex-row items-center justify-between text-white bg-blue-500">
                <div class="uppercase text-sm font-bold tracking-wider">Settings</div>
                <button class="btn btn-circle">
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

          <!--Sidebar-title-->
          <div class="left-sidebar-title">
            <span>Applications</span>
          </div>

            <ul>
              <!--dashboard-->
              <li class="l0">
                <a class="left-sidebar-item active" href="/dashboard">
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
                  <span class="title">Dashboard</span>
                </a>
                <ul></ul>
              </li>
              <!--apps-->
              <li class="l0">
                <button class="left-sidebar-item hidden-sibling">
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                  <span class="title">Apps</span>
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-auto arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
                <!--sub-apps-->
                <ul>
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
              <!--menu levels-->
              <li class="l0">
                <button class="left-sidebar-item hidden-sibling">
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
                <ul>
                  <!--L1-->
                  <li class="l1">
                    <button class="left-sidebar-item hidden-sibling">
                      <span class="title">Level 1-1</span>
                      <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-auto arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </button>
                    <!--L2-->
                    <ul>
                      <li class="l2">
                        <button class="left-sidebar-item hidden-sibling">
                          <span class="title">Level 2-1</span>
                          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-auto arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <polyline points="9 18 15 12 9 6"></polyline>
                          </svg>
                        </button>
                        <!--L3-->
                        <ul>
                          <li class="l3">
                            <button class="left-sidebar-item hidden-sibling">
                            <span class="title">Level 3-1</span>
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-auto arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                          </button>
                            <!--L4-->
                            <ul>
                              <li class="l4"><button class="left-sidebar-item hidden-sibling">
                                  <span class="title">Level 4-2</span>
                                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-auto arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                  </svg>
                                </button></li>
                              <li class="l4"><button class="left-sidebar-item hidden-sibling">
                                  <span class="title">Level 4-1</span>
                                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-auto arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                  </svg>
                                </button></li>
                              <li class="l4"><button class="left-sidebar-item hidden-sibling">
                                  <span class="title">Level 4-3</span>
                                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-auto arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                  </svg>
                                </button></li>
                            </ul>
                          </li>

                          <li class="l3">
                            <button class="left-sidebar-item hidden-sibling">
                            <span class="title">Level 3-2</span>
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-auto arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                          </button>
                          </li>

                          <li class="l3">
                            <button class="left-sidebar-item hidden-sibling">
                            <span class="title">Level 3-3</span>
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-auto arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
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
                <button class="left-sidebar-item  open-sibling">
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  <span class="title">Demos</span>
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="ml-auto arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
                <ul>
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
        </div>


        <!--MAIN-->
        <div class="main w-full bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
          <div class="navbar navbar-1 border-b">
            <div class="navbar-inner  w-full flex items-center justify-start">
              <button class="mx-4"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>
              <!--Button Search-->
              <form class="w-full max-w-xs navbar-search" action="">
                <div class="relative">
                  <input type="search" name="search" placeholder="Procurar..." class="bg-gray-200 pl-10 pr-5 appearance-none h-10 2-full rounded-full text-sm focus:outline-none">
                  <button type="submit" class="absolute top-0 mt-3 left-0 ml-4">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                  </button>
                </div>
              </form>

              <!--Explore-->
              <div class="relative">
                <button class="btn btn-default btn-icon bg-transparent h-16 focus:outline-none">
                  <span class="mr-2">Explore</span>
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="stroke-current" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
                <div class="dropdown absolute top-0 left-0 mt-16 open">
                  <div class="dropdown-content w-128 bottom-start">
                    <div class="flex flex-row flex-wrap focus:outline-none">
                      <div class="w-1/2 p-2 dropdown-item">
                        <div class="flex flex-row items-center justify-start hover:bg-gray-200">
                          <div class="flex-shrink-0 w-8">
                            <span class="h-8 w-8 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-display font-bold">01</span>
                          </div>
                          <div class="ml-2">
                            <div class="text-sm font-bold">Teams</div>
                            <div class="text-xs">Meet</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

  }
}
</script>

<style>
/*layout-1*/
@media (min-width: 768px) {
  [data-layout=layout-1] {
    width: 100%;
  }
}
[data-background=light] {
  --tw-text-opacity: 1;
  color: rgba(17, 24, 39, var(--tw-text-opacity));
}

/*RIGHT SIDEBAR*/
.right-sidebar.right-sidebar-1.open {
  --tw-translate-x: 0px;
}
[data-right-sidebar=light] .right-sidebar {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgba(17, 24, 39, var(--tw-text-opacity));
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
  .left-sidebar-item.active, .left-sidebar-item:hover {
    --tw-text-opacity: 1;
    color: rgba(59,130,246,var(--tw-text-opacity));
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
@media (min-width: 768px) {
  [data-collapsed=false] .l0>.left-sidebar-item>.title {
    opacity: 1;
    visibility: visible;
  }
}
@media (min-width: 768px) {
  .left-sidebar-item.active:after, .left-sidebar-item:hover:after {
    display: block;
  }
}
@media (min-width: 768px) {
  .left-sidebar-item.open-sibling:after, .left-sidebar-item:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 4px;
    --tw-bg-opacity: 1;
    background-color: rgba(59,130,246,var(--tw-bg-opacity));
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
</style>
