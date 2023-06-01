<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light bg-opacity-75 mb-3 opacity-75 shadow">
  <div class="container">
    <a class="navbar-brand" href="/">My App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul class="navbar-nav ms-3">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Dashboard</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/employees">Personeller</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/mycomments">Yorumlarım</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/aboutus">Hakkımızda</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/profile">Profil</router-link>
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
</style>
