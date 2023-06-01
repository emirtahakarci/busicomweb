<template>
  <div class="p-5 bg-light bg-opacity-75">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Ara"
              v-model="searchText"
              @input="searchCards"
            />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" @click="clearSearch">
                Temizle
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-2">
        <div v-for="card in filteredCards" :key="card.id" class="col-lg-3 col-md-6 col-sm-12">
          <div class="card mt-4">
            <img :src="card.image" class="card-img-top" alt="img-colored-shadow" />
            <div class="card-body text-center">
              <h5 class="card-title">{{ card.name }}</h5>
              <p class="card-text">{{ card.description }}</p>
              <router-link
                :to="{ name: 'empprofile', params: { id: card.id } }"
                custom
                v-slot="{ navigate }"
              >
                <button class="btn btn-secondary mb-3" @click="navigate" role="link">
                  {{ card.job }}
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WorkerService from "@/services/WorkerService";

export default {
  data() {
    return {
      workersData: {},
      cards: [
        {
          id: 1,
          name: "John Doe",
          description: "Lorem ipsum dolor sit amet",
          job: "Developer",
          image: "https://via.placeholder.com/150"
        },
        {
          id: 2,
          name: "Jane Doe",
          description: "Lorem ipsum dolor sit amet",
          job: "Designer",
          image: "https://via.placeholder.com/150"
        },
        {
          id: 3,
          name: "Mark Smith",
          description: "Lorem ipsum dolor sit amet",
          job: "Project Manager",
          image: "https://via.placeholder.com/150"
        },
        {
          id: 4,
          name: "Emily Johnson",
          description: "Lorem ipsum dolor sit amet",
          job: "Marketing Specialist",
          image: "https://via.placeholder.com/150"
        }
      ],
      searchText: ""
    };
  },
  created() {
    WorkerService.getAllWorkers().then(result => {
      this.workersData = result;
    })
    .catch((error) => {
        if (error.message.includes('401 Unauthorized')) {
          this.$router.push('/login')
        }
      })
    
  },
  computed: {
    filteredCards() {
      return this.cards.filter(card =>
        card.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
    
  },
  methods: {
    searchCards() {
      this.$nextTick(() => {
        this.filteredCards;
      });
    },
    clearSearch() {
      this.searchText = "";
    }
  }
};
</script>
