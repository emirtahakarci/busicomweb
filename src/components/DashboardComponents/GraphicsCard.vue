<template>
    <div class="container-fluid bg-dark">
        <div class="row">
            <div class="col-md-4">
                <h2 class="text-light">Grafik 1</h2>
                <canvas id="chart1"></canvas>
            </div>
            <div class="col-md-4">
                <h2 class="text-light">Grafik 2</h2>
                <canvas id="chart2"></canvas>
            </div>
            <div class="col-md-4">
                <h2 class="text-light">Grafik 3</h2>
                <canvas id="chart3"></canvas>
            </div>
        </div>
    </div>
</template>
  <!-- Chart.js kütüphanesi eklenince çalıştır 
<script>
import Chart from 'chart.js';

export default {
    mounted() {
        const data1 = {
            labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs'],
            datasets: [{
                label: 'Veri Seti 1',
                data: [12, 19, 3, 5, 2],
                backgroundColor: '#f87979'
            }]
        };
        new Chart(document.getElementById('chart1'), {
            type: 'bar',
            data: data1,
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });

        const data2 = {
            labels: ['A', 'B', 'C', 'D', 'E', 'F'],
            datasets: [{
                label: 'Veri Seti 2',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: ['#f87979', '#4bc0c0', '#ffce56', '#E7E9ED', '#36A2EB', '#FF6384']
            }]
        };
        new Chart(document.getElementById('chart2'), {
            type: 'doughnut',
            data: data2,
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
        const data3 = {
            labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
            datasets: [{
                label: 'Veri Seti 3',
                data: [12, 19, 3, 5, 2, 3, 10],
                backgroundColor: ['#f87979', '#4bc0c0', '#ffce56', '#E7E9ED', '#36A2EB', '#FF6384', '#00bcd4']
            }]
        };
        new Chart(document.getElementById('chart3'), {
            type: 'line',
            data: data3,
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }
};
</script>
-->
  