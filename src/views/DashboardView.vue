<template>
  <div class="bg-light bg-opacity-75 p-5 rounded shadow m-auto text-secondary-emphasis">
    <div class="container-fluid bg-light bg-opacity-75 p-5 rounded shadow">
      <div class="row">
        <div class="col-md-6">
          <h2 class="text-light mb-4">Grafik 1</h2>
          <Bar id="my-bar-chart" :options="chartOptions" :data="chartData" />

        </div>
        <div class="col-md-6">
          <h2 class="text-light mb-4">Grafik 2</h2>
          <Line id="my-line-chart" :options="chartOptions" :data="chartData" />

        </div>
      </div>
    </div>

    <div class="row align-items-center opacity-75 m-5">
      <div class="row justify-content-start">
        <div class="col-md-6">
          <div class="card  mb-2">
            <div class="card">
              <div class="card-header p-3 pt-2 position-relative">
                <div
                  class="icon icon-lg icon-shape bg-gradient-dark  shadow text-center border-radius-xl mt-n4 position-absolute">
                  <i class="material-icons opacity-10">weekend</i>
                </div>
                <div class="text-end pt-1">
                  <p class="text-sm mb-0 text-capitalize">Şirkette Yapılan Toplam Yorum Sayısı</p>
                  <h4 class="mb-0">{{ totalCommentCount }}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card  mb-2">
            <div class="card">
              <div class="card-header p-3 pt-2 position-relative">
                <div
                  class="icon icon-lg icon-shape bg-gradient-dark  shadow text-center border-radius-xl mt-n4 position-absolute">
                  <i class="material-icons opacity-10">weekend</i>
                </div>
                <div class="text-end pt-1">
                  <p class="text-sm mb-0 text-capitalize">Personel Sayısı</p>
                  <h4 class="mb-0">{{ personelCount }}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-start">
        <div class="col-md-6">
          <div class="card  mb-2">
            <div class="card">
              <div class="card-header p-3 pt-2 position-relative">
                <div
                  class="icon icon-lg icon-shape bg-gradient-dark  shadow text-center border-radius-xl mt-n4 position-absolute">
                  <i class="material-icons opacity-10">weekend</i>
                </div>
                <div class="text-end pt-1">
                  <p class="text-sm mb-0 text-capitalize">Size yapılan Toplam yorum sayısı</p>
                  <h4 class="mb-0">{{ totalCommentCountForYou }}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card  mb-2">
            <div class="card">
              <div class="card-header p-3 pt-2 position-relative">
                <div
                  class="icon icon-lg icon-shape bg-gradient-dark  shadow text-center border-radius-xl mt-n4 position-absolute">
                  <i class="material-icons opacity-10">weekend</i>
                </div>
                <div class="text-end pt-1">
                  <p class="text-sm mb-0 text-capitalize">Yapmış olduğunuz toplam yorum sayısı</p>
                  <h4 class="mb-0">{{ totalCommentCountByYou }}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="p-5 position-relative bg-light bg-opacity-75 mx-n3 ">
      <div class="container shadow">
        <div class="row">
          <div class="col-md-8 text-start mb-5 mt-5">
            <h3 class="text-secondary-emphasis z-index-1 position-relative">Ekip Arkadaşlarınızdan Bazıları</h3>
            <p class="text-secondary-emphasis opacity-8 mb-0">Beraber çalışmış olduğunuz ekip arkadaşlarınızı ziyaret
              edebilirsiniz.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-12 mb-4" v-for="(member, index) in members" :key="index">
            <div class="card card-profile mt-4 bg-light bg-opacity-75">
              <div class="row">
                <div class="col-lg-4 col-md-6 col-12 mt-n5">
                  <a href="javascript:;">
                    <div class="p-3 pe-md-0">
                      <img class="w-100 border-radius-md shadow" :src="member.image" :alt="member.name">
                    </div>
                  </a>
                </div>
                <div class="col-lg-8 col-md-6 col-12 my-auto">
                  <div class="card-body ps-lg-0">
                    <h5 class="mb-0 text-secondary-emphasis">{{ member.name }}</h5>
                    <h6 class="text-info">{{ member.title }}</h6>
                    <p class="mb-0 text-secondary-emphasis">{{ member.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
  
  
<script>
import { Bar } from 'vue-chartjs'
import { Line } from 'vue-chartjs'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
} from 'chart.js'

ChartJS.register(CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend)
import WorkerService from '@/services/WorkerService';
import CommentService from '@/services/CommentService';


export default {
  components: {
    Bar,
    Line
  },
  data() {
    return {
      userCommentCountsForYou: {},
      userCommentCountsByYou: {},
      workerCount: {},
      totalCommentCount: "125",
      personelCount: "245",
      totalCommentCountForYou: "123",
      totalCommentCountByYou: "321",
      members: [
        {
          name: "Emma Roberts",
          title: "UI Designer",
          description: "Artist is a term applied to a person who engages in an activity deemed to be an art.",
          image: "https://picsum.photos/200/200?random=1",
        },
        {
          name: "William Pearce",
          title: "Boss",
          description: "Artist is a term applied to a person who engages in an activity deemed to be an art.",
          image: "https://picsum.photos/200/200?random=2",
        },
        {
          name: "Ivana Flow",
          title: "Athlete",
          description: "Artist is a term applied to a person who engages in an activity deemed to be an art.",
          image: "https://picsum.photos/200/200?random=3",
        },
        {
          name: "Marquez Garcia",
          title: "JS Developer",
          description: "Artist is a term applied to a person who engages in an activity deemed to be an art.",
          image: "https://picsum.photos/200/200?random=4",
        },

      ],
      workerAllData: [],
      chartData: {
        labels: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
        datasets: [{
          label: "veri seti 1",
          data: [40, 20, 12, 40, 20, 12, 40, 20, 12, 40, 20, 12],
          backgroundColor: "#f87979",
          borderColor: 'gray',
        }],

      },
      chartOptions: {
        responsive: true
      }

    };
  },
  created() {

    WorkerService.getAllWorkers()
      .then((result) => {
        this.workerAllData = result.workerAllData
      })
    CommentService.getUserCommentCountsByYou()
      .then((result) => {
        this.userCommentCountsByYou = result
      })
    CommentService.getUserCommentCountsForYou()
      .then((result) => {
        this.userCommentCountsForYou = result
      })
    WorkerService.getAllWorkersCount()
      .then((result) => {
        this.workerCount = result
      })
  },
};

</script>
  
<style>
/* Add any custom CSS styles here */
</style>
  