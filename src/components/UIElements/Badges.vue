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
