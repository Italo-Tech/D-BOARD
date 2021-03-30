<template>
  <div>
    <canvas id="bar-chart" width="1000" height="350"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import barChartData from "@/components/graphics/barChart";

export default {
  name: "BarChart",
  data() {
    return {
      barChartData
    }
  },
  mounted() {
    const ctx = document.getElementById('bar-chart');
    new Chart(ctx, this.barChartData);
  }
}
</script>

<style scoped>

</style>
