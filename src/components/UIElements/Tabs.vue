<template>
  <div class="min-h-screen w-full p-4">
    <!--TITLE-->
    <div class="section-title w-full mb-6 pt-3">
      <div class="flex flex-row items-center justify-between mb-4">
        <div class="flex flex-col">
          <div class="text-xs uppercase font-light text-gray-500">UI Elements</div>
          <div class="text-xl font-bold">Tabs</div>
        </div>
      </div>
    </div>
    <!--Vertical Tabs-->
    <section class="w-full p-4 mb-6 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Vertical tabs</div>
          <div class="text-sm font-bold">
            <span>It's <code>VerticalTabs</code> component for vertical tabs</span>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="w-full">
          <div class="flex flex-row items-start justify-start tabs">
            <!--Buttons-->
            <div class="flex-shrink-0">
              <div class="flex flex-wrap flex-col space-y-2">

                <button :class="tabActive && favourites1 ? 'tab-active' : 'tab'" class="" @click.prevent="favActive1" type="button">
                  <i class="far fa-heart text-lg"></i>
                  <span class="mt-3">Favourites</span>
                </button>

                <button :class="tabActive && options1 ? 'tab-active' : 'tab'" class="" @click.prevent="optActive1" type="button">
                  <i class="fas fa-bars text-lg"></i>
                  <span class="mt-3">Options</span>
                </button>

                <button :class="tabActive && settings1 ? 'tab-active' : 'tab'" class="" @click.prevent="setActive1" type="button">
                  <i class="fas fa-cog text-lg"></i>
                  <span class="mt-3">Settings</span>
                </button>
              </div>
            </div>
            <div v-show="favourites1" class="ml-0">
              <div class="pl-4 pr-1 w-full block">
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Condimentum vitae sapien pellentesque habitant morbi. Nec ullamcorper sit amet risus nullam eget felis. Dignissim sodales ut eu sem integer vitae justo eget. In pellentesque massa placerat duis ultricies.</div>
              </div>
            </div>
            <div v-show="options1" class="ml-0">
              <div class="pl-4 pr-1 w-full block">
                <div>Id cursus metus aliquam eleifend mi in. Etiam sit amet nisl purus in. At quis risus sed vulputate odio ut enim blandit. Aliquet enim tortor at auctor urna nunc id cursus metus. Massa enim nec dui nunc. Penatibus et magnis dis parturient montes. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Enim ut tellus elementum sagittis vitae. Quisque sagittis purus sit amet. Augue lacus viverra vitae congue eu.</div>
              </div>
            </div>
            <div v-show="settings1" class="ml-0">
              <div class="pl-4 pr-1 w-full block">
                <div>Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Sed nisi lacus sed viverra. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Adipiscing elit pellentesque habitant morbi tristique senectus. Laoreet suspendisse interdum consectetur libero id. Tincidunt nunc pulvinar sapien et ligula.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Horizontal Tabs-->
    <section class="w-full p-4 mb-6 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Pills</div>
          <div class="text-sm font-bold">
            <span>It's <code>Pills</code> component for tabs with icons aligned vertically</span>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="w-full">
          <div class="flex flex-col items-start justify-start tabs">
            <!--Buttons-->
            <div class="flex-shrink-0">
              <div class="flex lg:flex-wrap flex-row space-y-0">
                <button :class="tabActive && favourites2 ? 'tab-active' : 'tab'" class="mr-2" @click.prevent="favActive2" type="button">
                  <i class="far fa-heart text-lg"></i>
                  <span class="mt-3">Favourites</span>
                </button>
                <button :class="tabActive && options2 ? 'tab-active' : 'tab'" class="mr-2" @click.prevent="optActive2" type="button">
                  <i class="fas fa-bars text-lg"></i>
                  <span class="mt-3">Options</span>
                </button>
                <button :class="tabActive && settings2 ? 'tab-active' : 'tab'" class="mr-2" @click.prevent="setActive2" type="button">
                  <i class="fas fa-cog text-lg"></i>
                  <span class="mt-3">Settings</span>
                </button>
              </div>
            </div>
            <!--Texts-->
            <div v-show="favourites2" class="ml-0 mt-4">
              <div class="pl-4 pr-1 w-full block">
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Condimentum vitae sapien pellentesque habitant morbi. Nec ullamcorper sit amet risus nullam eget felis. Dignissim sodales ut eu sem integer vitae justo eget. In pellentesque massa placerat duis ultricies.</div>
              </div>
            </div>
            <div v-show="options2" class="ml-0 mt-4">
              <div class="pl-4 pr-1 w-full block">
                <div>Id cursus metus aliquam eleifend mi in. Etiam sit amet nisl purus in. At quis risus sed vulputate odio ut enim blandit. Aliquet enim tortor at auctor urna nunc id cursus metus. Massa enim nec dui nunc. Penatibus et magnis dis parturient montes. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Enim ut tellus elementum sagittis vitae. Quisque sagittis purus sit amet. Augue lacus viverra vitae congue eu.</div>
              </div>
            </div>
            <div v-show="settings2" class="ml-0 mt-4">
              <div class="pl-4 pr-1 w-full block">
                <div>Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Sed nisi lacus sed viverra. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Adipiscing elit pellentesque habitant morbi tristique senectus. Laoreet suspendisse interdum consectetur libero id. Tincidunt nunc pulvinar sapien et ligula.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Underline Tabs-->
    <section class="w-full p-4 mb-6 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Underline Tabs</div>
          <div class="text-sm font-bold">
            <span>It's <code>UnderlineTabs</code> component for underline tabs</span>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="w-full">
          <div class="flex flex-col items-start justify-start tabs">
            <!--Buttons-->
            <div class="flex-shrink-0">
              <div class="flex lg:flex-wrap flex-row lg:space-y-2">

                <div class="flex-none mr-2">
                  <button :class="tabActive && favourites3 ? 'tab-active-underline' : 'tab-underline'" class="" @click.prevent="favActive3" type="button">
                    <i class="far fa-heart text-lg"></i>
                    <span class="ml-2">Profile</span>
                  </button>
                </div>
                <div class="flex-none mr-2">
                  <button :class="tabActive && options3 ? 'tab-active-underline' : 'tab-underline'" @click.prevent="optActive3" type="button">
                    <i class="fas fa-bars text-lg"></i>
                    <span class="ml-2">Settings</span>
                  </button>
                </div>
                <div class="flex-none">
                  <button :class="tabActive && settings3 ? 'tab-active-underline' : 'tab-underline'" @click.prevent="setActive3" type="button">
                    <i class="fas fa-cog text-lg"></i>
                    <span class="ml-2">Options</span>
                  </button>
                </div>

              </div>
            </div>
            <!--Texts-->
            <div v-show="favourites3" class="ml-0 mt-4">
              <div class="pl-4 pr-1 w-full block">
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Condimentum vitae sapien pellentesque habitant morbi. Nec ullamcorper sit amet risus nullam eget felis. Dignissim sodales ut eu sem integer vitae justo eget. In pellentesque massa placerat duis ultricies.</div>
              </div>
            </div>
            <div v-show="options3" class="ml-0 mt-4">
              <div class="pl-4 pr-1 w-full block">
                <div>Id cursus metus aliquam eleifend mi in. Etiam sit amet nisl purus in. At quis risus sed vulputate odio ut enim blandit. Aliquet enim tortor at auctor urna nunc id cursus metus. Massa enim nec dui nunc. Penatibus et magnis dis parturient montes. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Enim ut tellus elementum sagittis vitae. Quisque sagittis purus sit amet. Augue lacus viverra vitae congue eu.</div>
              </div>
            </div>
            <div v-show="settings3" class="ml-0 mt-4">
              <div class="pl-4 pr-1 w-full block">
                <div>Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Sed nisi lacus sed viverra. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Adipiscing elit pellentesque habitant morbi tristique senectus. Laoreet suspendisse interdum consectetur libero id. Tincidunt nunc pulvinar sapien et ligula.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Underline Tabs-->
    <section class="w-full p-4 mb-6 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Default tabs</div>
          <div class="text-sm font-bold">
            <span>It's <code>DefaultTabs</code> component for underlined tabs</span>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="w-full">
          <div class="flex flex-col items-start justify-start tabs">
            <!--Buttons-->
            <div class="flex-shrink-0">
              <div class="flex lg:flex-wrap flex-row lg:space-y-2">

                <div class="flex-none mr-2">
                  <button :class="tabActive && favourites4 ? 'tab-active-default' : 'tab-default'" class="" @click.prevent="favActive4" type="button">
                    <i class="far fa-heart text-lg"></i>
                    <span class="ml-2">Profile</span>
                  </button>
                </div>
                <div class="flex-none mr-2">
                  <button :class="tabActive && options4 ? 'tab-active-default' : 'tab-default'" @click.prevent="optActive4" type="button">
                    <i class="fas fa-bars text-lg"></i>
                    <span class="ml-2">Settings</span>
                  </button>
                </div>
                <div class="flex-none">
                  <button :class="tabActive && settings4 ? 'tab-active-default' : 'tab-default'" @click.prevent="setActive4" type="button">
                    <i class="fas fa-cog text-lg"></i>
                    <span class="ml-2">Options</span>
                  </button>
                </div>

              </div>
            </div>
            <!--Texts-->
            <div v-show="favourites4" class="ml-0 mt-4">
              <div class="pl-4 pr-1 w-full block">
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Condimentum vitae sapien pellentesque habitant morbi. Nec ullamcorper sit amet risus nullam eget felis. Dignissim sodales ut eu sem integer vitae justo eget. In pellentesque massa placerat duis ultricies.</div>
              </div>
            </div>
            <div v-show="options4" class="ml-0 mt-4">
              <div class="pl-4 pr-1 w-full block">
                <div>Id cursus metus aliquam eleifend mi in. Etiam sit amet nisl purus in. At quis risus sed vulputate odio ut enim blandit. Aliquet enim tortor at auctor urna nunc id cursus metus. Massa enim nec dui nunc. Penatibus et magnis dis parturient montes. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Enim ut tellus elementum sagittis vitae. Quisque sagittis purus sit amet. Augue lacus viverra vitae congue eu.</div>
              </div>
            </div>
            <div v-show="settings4" class="ml-0 mt-4">
              <div class="pl-4 pr-1 w-full block">
                <div>Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Sed nisi lacus sed viverra. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Adipiscing elit pellentesque habitant morbi tristique senectus. Laoreet suspendisse interdum consectetur libero id. Tincidunt nunc pulvinar sapien et ligula.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      tabActive: true,
      /*1*/
      favourites1: false,
      options1: false,
      settings1: false,
      /*2*/
      favourites2: false,
      options2: false,
      settings2: false,
      /*3*/
      favourites3: false,
      options3: false,
      settings3: false,
      /*4*/
      favourites4: false,
      options4: false,
      settings4: false,
    }
  },
  methods: {
    favActive1() {
      this.favourites1 = true,
          this.options1 = false,
          this.settings1 = false
    },
    optActive1() {
      this.favourites1 = false,
          this.options1 = true,
          this.settings1 = false
    },
    setActive1() {
      this.favourites1 = false,
          this.options1 = false,
          this.settings1 = true
    },
    /*2*/
    favActive2() {
      this.favourites2 = true,
          this.options2 = false,
          this.settings2 = false
    },
    optActive2() {
      this.favourites2 = false,
          this.options2 = true,
          this.settings2 = false
    },
    setActive2() {
      this.favourites2 = false,
          this.options2 = false,
          this.settings2 = true
    },
    /*3*/
    favActive3() {
      this.favourites3 = true,
          this.options3 = false,
          this.settings3 = false
    },
    optActive3() {
      this.favourites3 = false,
          this.options3 = true,
          this.settings3 = false
    },
    setActive3() {
      this.favourites3 = false,
          this.options3 = false,
          this.settings3 = true
    },
    /*4*/
    favActive4() {
      this.favourites4 = true,
          this.options4 = false,
          this.settings4 = false
    },
    optActive4() {
      this.favourites4 = false,
          this.options4 = true,
          this.settings4 = false
    },
    setActive4() {
      this.favourites4 = false,
          this.options4 = false,
          this.settings4 = true
    }
  }
}

</script>

<style scoped>

</style>
