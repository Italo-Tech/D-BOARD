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
    <!--Chart bar-->
    <section class="w-full p-4 mb-8 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <!--Title-->
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Bar Charts Vertical</div>
          <div class="text-sm font-bold">
            <span>Use bar for date graphics in vertical</span>
          </div>
        </div>
      </div>

      <!--Charts-->
      <div class="flex flex-row w-full">
        <BarChartOne />
      </div>
    </section>

    <!--Chart barHorizontal-->
    <section class="w-full p-4 mb-8 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <!--Title-->
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Bar Charts Horizontal</div>
          <div class="text-sm font-bold">
            <span>Use barHorizontal for date graphics in horizontal</span>
          </div>
        </div>
      </div>

      <!--Charts-->
      <div class="flex flex-row w-full">
        <BarChartTwo />
      </div>
    </section>

    <!--Chart barThickness-->
    <section class="w-full p-4 mb-8 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <!--Title-->
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Bar Charts - barThickness</div>
          <div class="text-sm font-bold">
            <span>Use barThickness for alter the width</span>
          </div>
        </div>
      </div>

      <!--Charts-->
      <div class="flex flex-row w-full">
        <BarChartThree />
      </div>
    </section>
  </div>
</template>

<script>
import BarChartOne from "./bar/BarChartOne";
import BarChartTwo from "./bar/BarChartTwo";
import BarChartThree from "./bar/BarChartThree";
export default {
  name: "BarC",
  components: {BarChartThree, BarChartTwo, BarChartOne}
}
</script>

<style scoped>

</style>