<template>
  <div>
    <canvas id="line-chart" width="900" height="350"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import lineChartData from "@/components/graphics/lineChart";

export default {
  name: "LineChart",
  data() {
    return {
      lineChartData
    }
  },
  mounted() {
    const ctx = document.getElementById('line-chart');
    new Chart(ctx, this.lineChartData);
  }
}
</script>

<style scoped>

</style>
