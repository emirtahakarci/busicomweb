<template>
  <div class="container-fluid bg-light bg-opacity-75 p-5 rounded shadow">
    <div class="row">
      <div class="col-md-6">
        <h2 class="text-light mb-4">Grafik 1</h2>
        <BarChart></BarChart>
      </div>
      <div class="col-md-6">
        <h2 class="text-light mb-4">Grafik 2</h2>
        <LineChart></LineChart>
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
