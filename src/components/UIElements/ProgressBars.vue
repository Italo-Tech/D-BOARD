<template>
  <div class="min-h-screen w-full p-4">
    <!--TITLE-->
    <div class="section-title w-full mb-6 pt-3">
      <div class="flex flex-row items-center justify-between mb-4">
        <div class="flex flex-col">
          <div class="text-xs uppercase font-light text-gray-500">UI Elements</div>
          <div class="text-xl font-bold">Progress Bars</div>
        </div>
      </div>
    </div>
    <!--Rounded Images-->
    <section class="w-full p-4 mb-6 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Default Progress bars</div>
          <div class="text-sm font-bold">
            <span>Use the <code>ProgressBars</code> component for simple progress bars</span>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full">
        <div class="mb-4">
          <div class="relative flex flex-row w-full text-center text-xs items-center h-1">
            <div class="top-0 left-0 h-1 w-full bg-red-500" style="width: 70%;"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Images"
}

</script>

<style scoped>

</style>
