<template>
  <div>
    <canvas id="planet-chart" width="1000" height="350"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import planetChartData from "@/components/planet-data";

export default {
  name: "PlanetChart",
  data() {
    return {
      planetChartData
    }
  },
  mounted() {
    const ctx = document.getElementById('planet-chart');
    new Chart(ctx, this.planetChartData);
  }
}
</script>

<style scoped>

</style>
