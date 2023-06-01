<template>
  <header class="bg-light bg-opacity-75 p-5">
    <div class="page-header min-vh-75" :style="{ 'background-image': 'url(img/bg9.jpg)' }">
      <span class="mask bg-light bg-opacity-75 opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto" v-for="(member, index) in member" :key="index">
            <h1 class="text-secondary-emphasis mt-5">{{ member.name }}</h1>
            <p class="lead mb-4 text-secondary-emphasis opacity-8">{{ member.title }}</p>
            <router-link to="/makeacomment">
              <button class="btn btn-light btn-white-black">Yorum Yap</button>
            </router-link>
            <h6 class="text-secondary-emphasis mb-2 mt-5">Find us on</h6>
            <div class="d-flex justify-content-center mb-5">
              <a href="javascript:;"><i class="fab fa-google-plus text-lg text-secondary-emphasis me-4"></i></a>{{ member.mail }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="container-fluid bg-light bg-opacity-75 text-light p-5" v-if="userCommentCounts">
    <div class="row align-items-center">
      <div class="col-lg-6">
        <div class="row justify-content-start">
          <div class="col-md-6">
            <div class="info">
              <h1 class="text-gradient text-info" :data-countTo="userCommentCounts.commentCount">{{
                userCommentCounts.commentCount }}</h1>
              <h5>Yaptığı Yorum Sayısı</h5>
              <p>Ekip arkadaşınız toplam yaptığı yorum saysını gösterir.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="info">
              <h1 class="text-gradient text-info" :data-countTo="userCommentCounts.receivedCommentCount">{{
                userCommentCounts.receivedCommentCount }}</h1>
              <h5>Yapılan Yorum Sayısı</h5>
              <p>Ekip arkadaşınıza yapılan toplam yorum sayısını gösterir.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 ms-auto mt-lg-0 mt-4">
        <div class="card bg-light bg-opacity-75">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <a class="d-block blur-shadow-image">
              <img
                src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                alt="img-colored-shadow" class="img-fluid border-radius-lg">
            </a>
          </div>
          <div class="card-body text-center" v-for="(member, index) in member" :key="index">
            <h5 class="font-weight-normal">
              <a href="#" class="text-light">{{ member.name }}</a>
            </h5>
            <p class="mb-0">
              {{ member.description }}
            </p>
            <button type="button" class="btn bg-gradient-info btn-sm mb-0 mt-3">{{ member.title }}</button>
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
</template>

      
<script>
import CommentService from '@/services/CommentService';
import WorkerService from '@/services/WorkerService';



export default {

  data() {
    return {
      userCommentCounts: {},
      workerData: {},
      workerAllData: [],

      member: [
        {
          name: "Emma Roberts",
          mail:"emma@gmail.com",
          title: "UI Designer",
          description: "Artist is a term applied to a person who engages in an activity deemed to be an art.",

        },
      ],
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
    };
  },
  created() {
    WorkerService.getWorker()
      .then((result) => {
        this.workerData = result
      })
      .catch((error) => {
        if (error.message.includes('401 Unauthorized')) {
          this.$router.push('/login')
        }
      })
    CommentService.getWorkerCommentCounts()
      .then((result) => {
        this.userCommentCounts = result
      })
      .catch((error) => {
        if (error.message.includes('401 Unauthorized')) {
          this.$router.push('/login')
        }
      })
    WorkerService.getAllWorkers()
      .then((result) => {
        this.workerAllData = result.workerAllData
      })
      .catch((error) => {
        if (error.message.includes('401 Unauthorized')) {
          this.$router.push('/login')
        }
      })

  },
};

</script>
      
<style>
/* Add any custom CSS styles here */
</style>
      