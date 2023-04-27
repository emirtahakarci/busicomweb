<template>
    <Line id="my-line-chart" :options="chartOptions" :data="chartData" />
</template>
  
<script>
import { Line } from 'vue-chartjs'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend)

export default {
    name: 'BarChart',
    components: { Line },
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