<template>
  <div class="min-h-screen w-full p-4">
    <!--TITLE-->
    <div class="section-title w-full mb-6 pt-3">
      <div class="flex flex-row items-center justify-between mb-4">
        <div class="flex flex-col">
          <div class="text-xs uppercase font-light text-gray-500">UI Elements</div>
          <div class="text-xl font-bold">Badges</div>
        </div>
      </div>
    </div>

    <section class="w-full p-4 mb-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Default badges</div>
          <div class="text-sm font-bold">
            <span>Use the <code>&lt;Badge /&gt;</code> component for simple badges. Use the <code>&lt;CircularBadge /&gt;</code> component for circular badges. Use the <code>rounded</code> prop for rounded badges.</span>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap items-center justify-start mb-2 w-full space-x-2">
        <span class="uppercase font-bold text-white bg-blue-500 text-xs inline-flex text-center p-2">Default</span>
        <span class="uppercase font-bold text-white bg-blue-500 text-xs inline-flex text-center p-1">Default</span>
        <span class="uppercase font-bold text-white bg-blue-500 text-xs inline-flex text-center px-2">Default</span>
      </div>
      <div class="flex flex-wrap items-center justify-start mb-2 w-full space-x-2">
        <span class="uppercase font-bold text-white bg-blue-500 text-xs inline-flex text-center p-2 rounded-lg">Default</span>
        <span class="uppercase font-bold text-white bg-blue-500 text-xs inline-flex text-center p-1 rounded-lg">Default</span>
        <span class="uppercase font-bold text-white bg-blue-500 text-xs inline-flex text-center px-2 rounded-lg">Default</span>
      </div>
      <div class="flex flex-wrap items-center justify-start mb-2 w-full space-x-2">
        <span class="uppercase font-bold text-white bg-blue-500 text-xs inline-flex text-xs p-0 h-6 w-6 rounded-full text-center justify-center">1º</span>
        <span class="uppercase font-bold text-white bg-blue-500 text-xs inline-flex text-xs p-0 h-5 w-5 rounded-full text-center justify-center">1º</span>
        <span class="uppercase font-bold text-white bg-blue-500 text-xs inline-flex text-xs p-0 h-4 w-4 rounded-full text-center justify-center">1º</span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Badges"
}
</script>

<style scoped>

</style>
