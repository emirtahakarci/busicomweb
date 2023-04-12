<template>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ user.name }}</h5>
        <p class="card-text">{{ user.email }}</p>
        <router-link class="btn btn-primary" :to="{ name: 'EditProfile' }">Edit Profile</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProfileCard',
    props: {
      user: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style>
  /* Add any custom CSS styles here */
  </style>
  