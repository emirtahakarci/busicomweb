<template>
  <div class="container-fluid bg-dark text-light">
    <div class="row align-items-center">
      <div class="col-lg-6">
        <div class="row justify-content-start">
          <div class="col-md-6">
            <div class="info">
              <h1 class="text-gradient text-info" :data-countTo="commentCount">{{ commentCount }}</h1>
              <h5>Yaptığın Yorum Sayısı</h5>
              <p>Ekip arkadaşlarınız hakkında yaptığınız toplam yorum sayısını gösterir.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="info">
              <h1 class="text-gradient text-info" :data-countTo="receivedCommentCount">{{ receivedCommentCount }}</h1>
              <h5>Yapılan Yorum Sayısı</h5>
              <p>Ekip arkadaşlarınızın sizin hakkınızda yapmış olduğu toplam yorum sayısını gösterir.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 ms-auto mt-lg-0 mt-4">
        <div class="card bg-dark">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <a class="d-block blur-shadow-image">
              <img
                src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                alt="img-colored-shadow" class="img-fluid border-radius-lg">
            </a>
          </div>
          <div class="card-body text-center" v-for="(member, index) in members" :key="index">
            <h5 class="font-weight-normal">
              <a href="#" class="text-light">{{member.name}}</a>
            </h5>
            <p class="mb-0">
              {{member.description}}
            </p>
            <button type="button" class="btn bg-gradient-info btn-sm mb-0 mt-3">{{member.title}}</button>
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
      commentCount: 123,
      receivedCommentCount: 112,
      members: [
        {
          name: "Emma Roberts",
          title: "UI Designer",
          description: "Artist is a term applied to a person who engages in an activity deemed to be an art.",


        },
      ],
    };
  },
};
</script>
  
<style>
.text-gradient {
  background-image: linear-gradient(to right, #ff9966, #ff5e62);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>