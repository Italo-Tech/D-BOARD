<template>
  <div>
    <canvas id="doughnut-chart" width="1548" height="500"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import doughnutChartData from "./doughnutChart";
export default {
  name: "DoughnutChart",
  data() {
    return {
      doughnutChartData
    }
  },
  mounted() {
    const ctx = document.getElementById('doughnut-chart');
    new Chart(ctx, this.doughnutChartData);
  }
}
</script>

<style scoped>

</style>
