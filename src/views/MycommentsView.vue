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
          <div v-for="card in filteredCards" :key="card.id" class="col-lg-3 col-md-6 col-sm-12">
            <div class="card card-profile mt-4">
              <div class="card-header p-0 position-relative">
                <a class="d-block blur-shadow-image">
                </a>
              </div>
              <div class="card-body text-center">
                <h5 class="font-weight-normal text-dark">{{ card.name }}</h5>
                <p class="mb-0" style="min-height: 100px;">{{ card.comment }}</p>
                <button type="button" class="btn btn-sm btn-secondary mb-0 mt-3">{{ card.job }}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import CommentService from '@/services/CommentService';

export default {
  data() {
    return {
      userComment: {},

      cards: [
        { id: 1, name: "John Doe", comment: "Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet", job: "Developer" },
        { id: 2, name: "Jane Doe", comment: "Lorem ipsum dolor sit amet", job: "Designer" },
        { id: 3, name: "Mark Smith", comment: "Lorem ipsum dolor sit amet", job: "Project Manager", },
        { id: 4, name: "Emily Johnson", comment: "Lorem ipsum dolor sit amet", job: "Marketing Specialist" },
      ],
      searchText: "",
    };
  },
  created() {
    // CommentService.getUserComment()
    //   .then((result) => {
    //     this.userComment = result
    //   })
    //   .catch((error) => {
    //     if (error.message.includes('401 Unauthorized')) {
    //       this.$router.push('/login')
    //     }
    //   })
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

<style scoped>
.card {
  height: 100%;
}
</style>
