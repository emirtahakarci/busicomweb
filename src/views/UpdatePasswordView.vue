<template>
    <div class="container-fluid bg-dark bg-opacity-85"> 
      <div class="row justify-content-center align-items-center min-vh-100">
        <div class="col-md-6 col-lg-4">
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header">
              <h3 class="text-center">Şifre Güncelle</h3>
            </div>
            <div class="card-body">
              <form @submit.prevent="submitForm">
                <div class="form-group">
                  <label for="currentPassword">Mevcut Şifre</label>
                  <input type="password" class="form-control" id="currentPassword" v-model="currentPassword">
                </div>
                <div class="form-group">
                  <label for="newPassword">Yeni Şifre</label>
                  <input type="password" class="form-control" id="newPassword" v-model="newPassword">
                </div>
                <div class="form-group">
                  <label for="confirmPassword">Yeni Şifre (Tekrar)</label>
                  <input type="password" class="form-control" id="confirmPassword" v-model="confirmPassword">
                </div>
                <button type="submit" class="btn btn-primary btn-block mt-4">Şifre Güncelle</button>
              </form>
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
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      };
    },
    methods: {
      submitForm() {
        // Burada formun gönderilmesi ve doğrulama işlemleri yapılabilir
        console.log('currentPassword:', this.currentPassword);
        console.log('newPassword:', this.newPassword);
        console.log('confirmPassword:', this.confirmPassword);
      }
    }
  };
  </script>
  
  <style>
  /* İstediğiniz CSS stillerini buraya ekleyebilirsiniz */
  .bg-opacity-85 {
    opacity: 0.85;
  }
  </style>
  