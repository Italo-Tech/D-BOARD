<template>
  <div class="min-h-screen w-full p-4">
    <!--TITLE-->
    <div class="section-title w-full mb-6 pt-3">
      <div class="flex flex-row items-center justify-between mb-4">
        <div class="flex flex-col">
          <div class="text-xs uppercase font-light text-gray-500">Charts</div>
          <div class="text-xl font-bold">Bar Charts</div>
        </div>
      </div>
    </div>

    <!--Chart Radar-->
    <section class="w-full p-4 mb-8 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <!--Title-->
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Radar</div>
          <div class="text-sm font-bold">
            <span>It's Radar Chart</span>
          </div>
        </div>
      </div>
      <!--Charts-->
      <div class="flex flex-row w-full mb-8">
        <RadarChartC />
      </div>
    </section>
  </div>
</template>

<script>
import RadarChartC from "./radar/RadarChartC";
export default {
  name: "RadarC",
  components: {RadarChartC}
}
</script>

<style scoped>

</style>