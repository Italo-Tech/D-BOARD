<template>
  <div class="min-h-screen w-full p-4">
    <div class="section-title w-full mb-6 pt-3">
      <div class="flex flex-row items-center justify-between mb-4">
        <div class="flex flex-col">
          <div class="text-xs uppercase font-light text-gray-500">UI Elements</div>
          <div class="text-xl font-bold">Buttons</div>
        </div>
      </div>
    </div>
    <!--TITLE-->
    <section class="w-full p-4 mb-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Buttons</div>
          <div class="text-sm font-bold">
            <span>Default button styles</span>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap items-center justify-start mb-2 w-full space-x-2">
        <span class="btn-primary p-2">Default</span>
        <span class="btn-primary rounded p-2">Rounded</span>
        <span class="btn-primary rounded p-2"><i class='bx bx-star mr-1 stroke-current' style='color:#ffffff'></i>With icon</span>
        <span class="btn-primary rounded p-2">With icon<i class='bx bx-star ml-1 stroke-current' style='color:#ffffff'></i></span>
        <span class="btn-primary rounded-full p-2">
          <i class='bx bx-star' style='color:#ffffff'></i>
        </span>
      </div>
    </section>

    <!--Button Outline-->
    <section class="w-full p-4 mb-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Outlined buttons</div>
          <div class="text-sm font-bold">
            <span>Outlined button styles</span>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap items-center justify-start mb-2 w-full space-x-2">
        <span class="btn-primary-outline p-2">Default</span>
        <span class="btn-primary-outline  rounded p-2">Rounded</span>
        <span class="btn-primary-outline  rounded p-2"><i class='bx bx-star mr-1 stroke-current' style='color:#3B82F6'></i>With icon</span>
        <span class="btn-primary-outline  rounded p-2">With icon<i class='bx bx-star ml-1 stroke-current' style='color:#3B82F6'></i></span>
        <span class="btn-primary-outline  rounded-full p-2">
          <i class='bx bx-star' style='color:#3B82F6'></i>
        </span>
      </div>
    </section>

    <!--Button Raised-->
    <section class="w-full p-4 mb-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Raised buttons</div>
          <div class="text-sm font-bold">
            <span>Raised button styles</span>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap items-center justify-start mb-2 w-full space-x-2">
        <span class="btn-raised p-2">Default</span>
        <span class="btn-raised  rounded p-2">Rounded</span>
        <span class="btn-raised  rounded p-2"><i class='bx bx-star mr-1 stroke-current' style='color:#3B82F6'></i>With icon</span>
        <span class="btn-raised  rounded p-2">With icon<i class='bx bx-star ml-1 stroke-current' style='color:#3B82F6'></i></span>
        <span class="btn-raised  rounded-full p-2">
          <i class='bx bx-star' style='color:#3B82F6'></i>
        </span>
      </div>
    </section>

    <!--Button Flat-->
    <section class="w-full p-4 mb-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Flat buttons</div>
          <div class="text-sm font-bold">
            <span>Flat button styles</span>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap items-center justify-start mb-2 w-full space-x-2">
        <span class="btn-flat p-2">Default</span>
        <span class="btn-flat rounded p-2">Rounded</span>
        <span class="btn-flat rounded p-2"><i class='bx bx-star mr-1 stroke-current' style='color:#3B82F6'></i>With icon</span>
        <span class="btn-flat rounded p-2">With icon<i class='bx bx-star ml-1 stroke-current' style='color:#3B82F6'></i></span>
        <span class="btn-flat rounded-full p-2">
          <i class='bx bx-star' style='color:#3B82F6'></i>
        </span>
      </div>
    </section>

    <!--Button Sizes-->
    <section class="w-full p-4 mb-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Buttons</div>
          <div class="text-sm font-bold">
            <span>Buttons Sizes</span>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap items-center justify-start mb-2 w-full space-x-2">
        <span class="btn-lg">Large</span>
        <span class="btn-primary p-2">Default</span>
        <span class="btn-sm p-1">Small</span>
      </div>
      <div class="flex flex-wrap items-center justify-start mb-2 w-full space-x-2">
        <span class="btn-lg rounded-full p-3">
          <i class='bx bx-star' style='color:#ffffff'></i>
        </span>
        <span class="btn-primary rounded-full p-2">
          <i class='bx bx-star' style='color:#ffffff'></i>
        </span>
        <span class="btn-sm rounded-full p-1">
          <i class='bx bx-star' style='color:#ffffff'></i>
        </span>
      </div>
    </section>

    <!--Button Groups-->
    <section class="w-full p-4 mb-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Buttons</div>
          <div class="text-sm font-bold">
            <span>Button group sizes</span>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap items-center justify-start mb-2 w-full space-x-2">
        <div class="flex flex-col lg:inline-flex lg:flex-row lg:flex-wrap items-start lg:items-center justify-start space-y-2 lg:space-y-0 lg:space-x-0">
          <span class="btn btn-default bg-white border border-blue-500 hover:border-blue-700 text-blue-500 hover:text-blue-700 first:border-r-0 last:border-l-0 cursor-pointer">Left</span>
          <span class="btn btn-default bg-white border border-blue-500 hover:border-blue-700 text-blue-500 hover:text-blue-700 first:border-r-0 last:border-l-0 cursor-pointer">Center</span>
          <span class="btn btn-default bg-white border border-blue-500 hover:border-blue-700 text-blue-500 hover:text-blue-700 first:border-r-0 last:border-l-0 cursor-pointer">Right</span>
        </div>
      </div>
      <div class="flex flex-wrap items-center justify-start mb-2 w-full space-x-2">
        <div class="flex flex-col lg:inline-flex lg:flex-row lg:flex-wrap items-start lg:items-center justify-start space-y-2 lg:space-y-0 lg:space-x-0">
          <span class="btn btn-default bg-white border border-blue-500 hover:border-blue-700 text-blue-500 hover:text-blue-700 first:border-r-0 last:border-l-0 cursor-pointer rounded-l">Left</span>
          <span class="btn btn-default bg-white border border-blue-500 hover:border-blue-700 text-blue-500 hover:text-blue-700 first:border-r-0 last:border-l-0 cursor-pointer">Center</span>
          <span class="btn btn-default bg-white border border-blue-500 hover:border-blue-700 text-blue-500 hover:text-blue-700 first:border-r-0 last:border-l-0 cursor-pointer rounded-r">Right</span>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "Buttons"
}
</script>

<style scoped>

</style>
