<template>
    <Line id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>
  
<script>
import {  Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'BarChart',
    components: { Line },
    data() {
        return {
            chartData: {
                labels: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
                datasets: [{
                    label:"veri seti 1",
                    data: [40, 20, 12, 40, 20, 12, 40, 20, 12, 40, 20, 12],
                    backgroundColor: "#f87979",
                    fontcolor:"black",
                }],

            },
            chartOptions: {
                responsive: true
            }
        }
    }
}
</script>