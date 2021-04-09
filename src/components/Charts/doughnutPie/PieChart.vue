<template>
  <div>
    <canvas id="pie-chart" width="1548" height="500"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import pieChartData from "./pieChart";
export default {
  name: "PieChart",
  data() {
    return {
      pieChartData
    }
  },
  mounted() {
    const ctx = document.getElementById('pie-chart');
    new Chart(ctx, this.pieChartData);
  }
}
</script>

<style scoped>

</style>
