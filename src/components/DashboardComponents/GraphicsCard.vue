<template>
  
  <div class="container-fluid bg-dark">
    <div class="row">
      <div class="col-md-4">
        <h2 class="text-light mb-4">Grafik 1</h2>
       <BarChart></BarChart>
      </div>
      <div class="col-md-4">
        <h2 class="text-light mb-4">Grafik 2</h2>
        <LineChart></LineChart>
        <canvas id="chart2" height="250"></canvas>
      </div>
      <div class="col-md-4">
        <h2 class="text-light mb-4">Grafik 3</h2>
        <canvas id="chart3" height="250"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from "../ChartComponents/BarChart.vue";
import LineChart from "../ChartComponents/LineChart.vue";

export default {
  name: "GraphicsCard",
  components: { BarChart, LineChart },
};
</script>
