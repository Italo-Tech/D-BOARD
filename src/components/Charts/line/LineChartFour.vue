<template>
  <div>
    <canvas id="line-chart-four" width="1548" height="300"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import lineChartFour from "./lineChartFour";


export default {
  name: "LineChartFour",
  data() {
    return {
      lineChartFour
    }
  },
  mounted() {
    const ctx = document.getElementById('line-chart-four');
    new Chart(ctx, this.lineChartFour);
  }
}
</script>

<style scoped>

</style>
