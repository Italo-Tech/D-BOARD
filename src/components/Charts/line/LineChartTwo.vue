<template>
  <div>
    <canvas id="line-chart-two" width="1548" height="300"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import lineChartTwo from "./lineChartTwo";


export default {
  name: "LineChartTwo",
  data() {
    return {
      lineChartTwo
    }
  },
  mounted() {
    const ctx = document.getElementById('line-chart-two');
    new Chart(ctx, this.lineChartTwo);
  }
}
</script>

<style scoped>

</style>
