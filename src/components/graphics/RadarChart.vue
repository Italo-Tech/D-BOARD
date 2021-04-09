<template>
  <div>
    <canvas id="radar-chart" width="500" height="350"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import RadarChartData from "./radarChart";
export default {
  name: "RadarChart",
  data() {
    return {
      RadarChartData
    }
  },
  mounted() {
    const ctx = document.getElementById('radar-chart');
    new Chart(ctx, this.RadarChartData);
  }
}
</script>

<style scoped>

</style>
