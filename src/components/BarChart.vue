<template>
  <div>
    <canvas id="bar-chart" width="500" height="350"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import barChartData from "@/components/barChart";

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
