<template>
    <Bar id="my-bar-chart" :options="chartOptions" :data="chartData" />
</template>
  
<script>
import { Bar } from 'vue-chartjs'
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js'

ChartJS.register(CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend)

export default {
    name: 'BarChart',
    components: { Bar },
    data() {
        return {
            chartData: {
                labels: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
                datasets: [{
                    label: "veri seti 1",
                    data: [40, 20, 12, 40, 20, 12, 40, 20, 12, 40, 20, 12],
                    backgroundColor: "#f87979",
                    borderColor: '#ffffff',
                }],

            },
            chartOptions: {
                responsive: true
            }
        }
    }
}
</script>