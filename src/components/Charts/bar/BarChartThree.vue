<template>
  <div>
    <canvas id="bar-chart-three" width="1548" height="300"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import barChartThree from "./barChartThree";


export default {
  name: "BarChartThree",
  data() {
    return {
      barChartThree
    }
  },
  mounted() {
    const ctx = document.getElementById('bar-chart-three');
    new Chart(ctx, this.barChartThree);
  }
}
</script>

<style scoped>

</style>
