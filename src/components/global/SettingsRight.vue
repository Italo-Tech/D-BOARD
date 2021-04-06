<template>
  <div  class="right-sidebar bg-white text-gray-900 right-sidebar-1 openSettings">
    <div>
      <div>
        <!--Cabeçalho DEMO-->
        <div class="flex flex-col">
          <div class="px-4 h-16 flex flex-row items-center justify-between text-white bg-blue-500">
            <div class="uppercase text-sm font-bold tracking-wider">Settings</div>
            <button @click.prevent="settingsRight" class="btn btn-circle focus:outline-none">
              <i class="fas fa-times"></i>
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
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "SettingsRight",
  data() {
    return {
      // isSettings: false,
    }
  },
  computed: mapState([
    'isSettings'
  ]),
  methods: {
    ...mapActions([
      'settingsRight'
    ]),
  }
}
</script>

<style scoped>
/*RIGHT SIDEBAR*/
.right-sidebar.right-sidebar-1.openSettings {
  transform: translateX(0px);
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
}
</style>