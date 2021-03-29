<template>
  <div class="min-h-screen w-full p-4">
    <!--TITLE-->
    <div class="section-title w-full mb-6 pt-3">
      <div class="flex flex-row items-center justify-between mb-4">
        <div class="flex flex-col">
          <div class="text-xs uppercase font-light text-gray-500">UI Elements</div>
          <div class="text-xl font-bold">Dropdowns</div>
        </div>
      </div>
    </div>
    <!--BTN DEFAULT-->
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
        <span class="btn-primary p-2">Default</span>
        <span class="btn-primary p-1">Default</span>
        <span class="btn-primary px-2">Default</span>
      </div>
      <div class="flex flex-wrap items-center justify-start mb-2 w-full space-x-2">
        <span class="btn-primary text-center rounded-lg p-2">Default</span>
        <span class="btn-primary text-center rounded-lg p-1">Default</span>
        <span class="btn-primary text-center rounded-lg px-2">Default</span>
      </div>
      <div class="flex flex-wrap items-center justify-start mb-2 w-full space-x-2">
        <span class="btn-primary rounded-full items-center justify-center p-0 h-7 w-7">1º</span>
        <span class="btn-primary rounded-full items-center justify-center p-0 h-6 w-6">1º</span>
        <span class="btn-primary rounded-full items-center justify-center p-0 h-5 w-5">1º</span>
      </div>
    </section>

    <!--BTN OUTLINE-->
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
        <span class="btn-primary-outline p-2">Default</span>
        <span class="btn-primary-outline p-1">Default</span>
        <span class="btn-primary-outline px-2">Default</span>
      </div>
      <div class="flex flex-wrap items-center justify-start mb-2 w-full space-x-2">
        <span class="btn-primary-outline text-center rounded-lg p-2">Default</span>
        <span class="btn-primary-outline text-center rounded-lg p-1">Default</span>
        <span class="btn-primary-outline text-center rounded-lg px-2">Default</span>
      </div>
      <div class="flex flex-wrap items-center justify-start mb-2 w-full space-x-2">
        <span class="btn-primary-outline rounded-full items-center justify-center p-0 h-7 w-7">1º</span>
        <span class="btn-primary-outline rounded-full items-center justify-center p-0 h-6 w-6">1º</span>
        <span class="btn-primary-outline rounded-full items-center justify-center p-0 h-5 w-5">1º</span>
      </div>
    </section>

    <!--BTN Alternative colors-->
    <section class="w-full p-4 mb-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Alternative colors</div>
          <div class="text-sm font-bold">
            <span>Use the <code>alt</code> prop for badges with alternative colors.</span>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap items-center justify-start mb-2 w-full space-x-2">
        <span class="btn-alternative p-2">Default</span>
        <span class="btn-alternative p-1">Default</span>
        <span class="btn-alternative px-2">Default</span>
      </div>
      <div class="flex flex-wrap items-center justify-start mb-2 w-full space-x-2">
        <span class="btn-alternative text-center rounded-lg p-2">Default</span>
        <span class="btn-alternative text-center rounded-lg p-1">Default</span>
        <span class="btn-alternative text-center rounded-lg px-2">Default</span>
      </div>
      <div class="flex flex-wrap items-center justify-start mb-2 w-full space-x-2">
        <span class="btn-alternative rounded-full items-center justify-center p-0 h-7 w-7">1º</span>
        <span class="btn-alternative rounded-full items-center justify-center p-0 h-6 w-6">1º</span>
        <span class="btn-alternative rounded-full items-center justify-center p-0 h-5 w-5">1º</span>
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
