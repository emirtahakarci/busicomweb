<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light bg-opacity-75 mb-3 opacity-75 shadow">
      <div class="container">
        <a class="navbar-brand" href="/">Team Talkers</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul class="navbar-nav mx-3">
            <li class="nav-item mx-3">
              <router-link class="nav-link" to="/"><i class="	fas fa-chart-pie">   Dashboard</i></router-link>
            </li>
            <li class="nav-item mx-3">
              <router-link class="nav-link" to="/employees"> <i class="		fas fa-users">   Personeller </i> </router-link>
            </li>
            <li class="nav-item mx-3">
              <router-link class="nav-link" to="/mycomments"><i class="	fas fa-comment">   Yorumlarım</i>   </router-link>
            </li>
            <li class="nav-item mx-3">
              <router-link class="nav-link" to="/aboutus"><i class="		fas fa-book-open">   Hakkimizda</i> </router-link>
            </li>
            <li class="nav-item mx-3">
              <router-link class="nav-link" to="/profile"> <i class="	fas fa-address-card">  Profil </i> </router-link>
            </li>
            <li class="nav-item mx-3">
              <router-link class="nav-link" to="/login"><i class="	fas fa-sign-out-alt">   Cikis yap</i>   </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <router-view></router-view>
    </div>
    <footer class="bg-light bg-opacity-75 py-3 mt-3">
      <div class="container">
        <p>&copy; {{ currentYear }} My App</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  },
  mounted() {
    this.addSpecialEffect();
  },
  methods: {
    addSpecialEffect() {

      const navbarBrand = document.querySelector('.navbar-brand');
      navbarBrand.style.animation = 'shake 2.5s infinite';


    }
  }
}
</script>

<style>
/* Add any custom CSS styles here */
body {
  background-image: url("assets/images/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

@keyframes shake {
  0% {
    transform: rotate(0);
  }

  10% {
    transform: rotate(-5deg);
  }

  20% {
    transform: rotate(5deg);
  }

  30% {
    transform: rotate(-5deg);
  }

  40% {
    transform: rotate(5deg);
  }

  50% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(0);
  }
}</style>
