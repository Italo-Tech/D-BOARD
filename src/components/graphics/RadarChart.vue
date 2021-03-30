<template>radar
  <div>
    <canvas id="radar-chart" width="500" height="350"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import radarChartData from "@/components/graphics/radarChart";

export default {
  name: "RadarChart",
  data() {
    return {
      radarChartData
    }
  },
  mounted() {
    const ctx = document.getElementById('radar-chart');
    new Chart(ctx, this.radarChartData);
  }
}
</script>

<style scoped>

</style>
