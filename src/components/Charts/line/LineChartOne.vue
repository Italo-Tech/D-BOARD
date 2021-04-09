<template>
  <div>
    <canvas id="line-chart-one" width="1548" height="300"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import lineChartOne from "./lineChartOne";


export default {
  name: "LineChartOne",
  data() {
    return {
      lineChartOne
    }
  },
  mounted() {
    const ctx = document.getElementById('line-chart-one');
    new Chart(ctx, this.lineChartOne);
  }
}
</script>

<style scoped>

</style>
