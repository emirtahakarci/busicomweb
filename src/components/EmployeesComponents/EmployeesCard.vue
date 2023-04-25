<template>
  <div class="row">
    <div v-for="card in cards" :key="card.id" class="col-lg-3 col-9 m-auto pt-4">
      <div class="card card-profile mt-4">
        <div class="row">
          <div class="card">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <a class="d-block blur-shadow-image">
                <img :src="card.image" alt="img-colored-shadow" class="img-fluid border-radius-lg" />
              </a>
            </div>
            <div class="card-body text-center">
              <h5 class="font-weight-normal"><a href="javascript:;">{{ card.name }}</a></h5>
              <p class="mb-0">{{ card.description }}</p>
              <button type="button" class="btn bg-gradient-info btn-sm mb-0 mt-3">{{ card.job }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          name: "Emir Taha Karcı",
          image:
            "https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
          description:
            "Artist is a term applied to a person who engages in an activity deemed to be an art.",
          job: "Yazılım Geliştiricisi",
        },
        {
          id: 2,
          name: "Emir Taha Karcı",
          image:
            "https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
          description:
            "Artist is a term applied to a person who engages in an activity deemed to be an art.",
          job: "Yazılım Geliştiricisi",
        }
      ]
    };
  },
};
</script>