<template>
  <section class="p-5 position-relative bg-light bg-opacity-75 mx-n3 ">
    <div class="container shadow">
      <div class="row">
        <div class="col-md-8 text-start mb-5 mt-5">
          <h3 class="text-secondary-emphasis z-index-1 position-relative">Ekip Arkadaşlarınızdan Bazıları</h3>
          <p class="text-secondary-emphasis opacity-8 mb-0">Beraber çalışmış olduğunuz ekip arkadaşlarınızı ziyaret edebilirsiniz.</p>
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
import WorkerService from '@/services/WorkerService';

export default {
  name: "DefaultCard",
  data() {
    return {
      workerAllData:{},
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
   
      WorkerService.getAllWorker()
      .then((result) => {
        this.workerData =result
      })
  },
};
</script>