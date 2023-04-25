<template>
  <div>
    <nav class="navbar navbar-expand-lg  navbar-dark bg-dark mb-3">
      <div class="container ">
        <router-link class="navbar-brand" to="/">My App</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse  " id="navbarNav">
          <ul class="navbar-nav ">
            <li class="nav-item">
              <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/employees">Personeller</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/">Yorumlarım</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/">Hakkımızda</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/">Profil</router-link>

            </li>
            
          </ul>
          
        </div>
      </div>
    </nav>
    <div class="container">
      
      <router-view></router-view>
    </div>
    <footer class="bg-light py-3">
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
</style>
