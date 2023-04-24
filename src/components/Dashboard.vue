<template>
  <header class="bg-gradient-dark">
    <div class="page-header min-vh-75" :style="{ backgroundImage: 'url(./img/bg9.jpg)' }">
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">Emir Taha Karcı</h1>
            <p class="lead mb-4 text-white opacity-8">Yazılım Geliştiricisi</p>
            <h6 class="text-white mb-2 mt-5">Find us on</h6>
            <div class="d-flex justify-content-center">
              <a href="javascript:;"><i class="fab fa-linkedin text-lg text-white me-4"></i></a>
              <a href="javascript:;"><i class="fab fa-instagram text-lg text-white me-4"></i></a>
              <a href="javascript:;"><i class="fab fa-google-plus text-lg text-white"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'dashboard',
}
</script>
<style scoped>
.page-header {
  position: relative;
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.text-white {
  color: #fff;
}

.bg-gradient-dark {
  background: #343a40;
  background: -webkit-linear-gradient(to right, #343a40, #212529);
  background: linear-gradient(to right, #343a40, #212529);
}
</style>