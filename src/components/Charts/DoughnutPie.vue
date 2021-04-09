<template>
  <!--Chart Doughnut-->
  <section class="w-full p-4 mb-8 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
    <!--Title-->
    <div class="flex flex-row items-center justify-between mb-6">
      <div class="flex flex-col">
        <div class="text-sm font-light text-gray-500">Doughnut </div>
        <div class="text-sm font-bold">
          <span>It's Doughnut Chart</span>
        </div>
      </div>
    </div>
    <!--Charts-->
    <div class="flex flex-row w-full bg-gray-100 mb-8">
      <DoughnutChart />
    </div>
  </section>


  <!--Chart -->
  <section class="w-full p-4 mb-8 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
    <!--Title-->
    <div class="flex flex-row items-center justify-between mb-6">
      <div class="flex flex-col">
        <div class="text-sm font-light text-gray-500">Pie Chart</div>
        <div class="text-sm font-bold">
          <span>It's Pie Chart</span>
        </div>
      </div>
    </div>
    <!--Charts-->
    <div class="flex flex-row w-full bg-gray-100 mb-8">
      <PieChart />
    </div>
  </section>
</template>

<script>
import DoughnutChart from "./doughnutPie/DoughnutChart";
import PieChart from "./doughnutPie/PieChart";

export default {
  name: "DoughnutPie",
  components: {PieChart, DoughnutChart}
}
</script>

<style scoped>

</style>