<template>
  <div>
    <canvas id="bar-chart-two" width="1548" height="300"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import barChartTwo from "./barChartTwo";


export default {
  name: "BarChartTwo",
  data() {
    return {
      barChartTwo
    }
  },
  mounted() {
    const ctx = document.getElementById('bar-chart-two');
    new Chart(ctx, this.barChartTwo);
  }
}
</script>

<style scoped>

</style>
