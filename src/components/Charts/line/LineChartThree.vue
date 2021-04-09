<template>
  <div>
    <canvas id="line-chart-three" width="1548" height="300"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import lineChartThree from "./lineChartThree";


export default {
  name: "LineChartThree",
  data() {
    return {
      lineChartThree
    }
  },
  mounted() {
    const ctx = document.getElementById('line-chart-three');
    new Chart(ctx, this.lineChartThree);
  }
}
</script>

<style scoped>

</style>
