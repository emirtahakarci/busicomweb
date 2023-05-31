<template>
  <div class="p-5 bg-light bg-opacity-75 bg-opacity-75">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Ara" v-model="searchText" @input="searchCards" />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" @click="clearSearch">Temizle</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="row mt-2">
          <div v-for="card in filteredCards" :key="card.id" class="col-lg-3 col-9 m-auto pt-4  ">
            <div class="card card-profile mt-4">
              <div class="row">
                <div class="card shadow-sm border-0">
                  <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <a class="d-block blur-shadow-image">
                      <img :src="card.image" alt="img-colored-shadow" class="img-fluid border-radius-lg" />
                    </a>
                  </div>
                  <div class="card-body text-center">
                    <h5 class="font-weight-normal text-dark">{{ card.name }}</h5>
                    <p class="mb-0">{{ card.description }}</p>
                    <router-link :to="{ name: 'empprofile', params: { id: card.id } }" custom v-slot="{ navigate }">
                      <button class="btn btn-sm btn-secondary mb-0 mt-3" @click="navigate" role="link">
                        {{ card.job }}
                      </button>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import WorkerService from '@/services/WorkerService';

export default {
  data() {
    return {
      workersData:{},

      cards: [
        { id: 1, name: "John Doe", description: "Lorem ipsum dolor sit amet", job: "Developer", image: "https://via.placeholder.com/150" },
        { id: 2, name: "Jane Doe", description: "Lorem ipsum dolor sit amet", job: "Designer", image: "https://via.placeholder.com/150" },
        { id: 3, name: "Mark Smith", description: "Lorem ipsum dolor sit amet", job: "Project Manager", image: "https://via.placeholder.com/150" },
        { id: 4, name: "Emily Johnson", description: "Lorem ipsum dolor sit amet", job: "Marketing Specialist", image: "https://via.placeholder.com/150" },
      ],
      searchText: "",
    };
  },
  created() {
      WorkerService.getAllWorkers()
      .then((result) => {
        this.workersData =result
      })
  },
  computed: {
    filteredCards() {
      return this.cards.filter((card) => card.name.toLowerCase().includes(this.searchText.toLowerCase()));
    },
  },
  methods: {
    searchCards() {
      this.$nextTick(() => {
        this.filteredCards;
      });
    },
    clearSearch() {
      this.searchText = "";
    },
  },
};
</script>