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

    <!--Chart line-->
    <section class="w-full p-4 mb-8 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <!--Title-->
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Line Charts</div>
          <div class="text-sm font-bold">
            <span>Line Chart with two lines</span>
          </div>
        </div>
      </div>
      <!--Charts-->
      <div class="flex flex-row w-full">
        <LineChartOne />
      </div>
    </section>

    <!--Chart line-->
    <section class="w-full p-4 mb-8 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <!--Title-->
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Line Charts</div>
          <div class="text-sm font-bold">
            <span>Line Chart with two lines and background</span>
          </div>
        </div>
      </div>

      <!--Charts-->
      <div class="flex flex-row w-full">
<!--        <BarChartTwo />-->
        <LineChartTwo />
      </div>
    </section>

    <!--Chart line-->
    <section class="w-full p-4 mb-8 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <!--Title-->
      <div class="flex flex-row items-center justify-between mb-6">
        <div class="flex flex-col">
          <div class="text-sm font-light text-gray-500">Line Charts - One Line</div>
          <div class="text-sm font-bold">
            <span>Line Chart with one Line</span>
          </div>
        </div>
      </div>

      <!--Charts-->
      <div class="flex flex-row w-full">
        <LineChartThree />
      </div>
    </section>
  </div>
</template>

<script>
import LineChartOne from "./line/LineChartOne";
import LineChartTwo from "./line/LineChartTwo";
import LineChartThree from "./line/LineChartThree";
export default {
  name: "LineC",
  components: {LineChartThree, LineChartTwo, LineChartOne}
}
</script>

<style scoped>

</style>