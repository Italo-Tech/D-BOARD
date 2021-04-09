<template>
  <div>
    <canvas id="bar-chart-one" width="1548" height="300"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import barChartOne from "./barChartOne";

export default {
  name: "BarChartOne",
  data() {
    return {
      barChartOne
    }
  },
  mounted() {
    const ctx = document.getElementById('bar-chart-one');
    new Chart(ctx, this.barChartOne);
  }
}
</script>

<style scoped>

</style>
