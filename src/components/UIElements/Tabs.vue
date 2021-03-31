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

                <button :class="tabActive && favourites ? 'tab-active' : 'tab'" class="" @click.prevent="favActive" type="button">
                  <i class="far fa-heart text-lg"></i>
                  <span class="mt-3">Favourites</span>
                </button>

                <button :class="tabActive && options ? 'tab-active' : 'tab'" class="" @click.prevent="optActive" type="button">
                  <i class="fas fa-bars text-lg"></i>
                  <span class="mt-3">Options</span>
                </button>

                <button :class="tabActive && settings ? 'tab-active' : 'tab'" class="" @click.prevent="setActive" type="button">
                  <i class="fas fa-cog text-lg"></i>
                  <span class="mt-3">Settings</span>
                </button>
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
      favourites: false,
      options: false,
      settings: false,
    }
  },
  methods: {
    favActive() {
      this.favourites = true,
      this.options = false,
      this.settings = false
    },
    optActive() {
      this.favourites = false,
      this.options = true,
      this.settings = false
    },
    setActive() {
      this.favourites = false,
      this.options = false,
      this.settings = true
    }
  }
}

</script>

<style scoped>

</style>
