<template>
  <div class="container-fluid bg-dark bg-opacity-85"> 
      <div class="row justify-content-center align-items-center min-vh-100">
        <div class="col-md-6 col-lg-4">
          <div class="card text-white bg-secondary mb-3">
            <div class="card-header">
              <h3 class="text-center">Giriş Yap</h3>
            </div>
            <div class="card-body">
              <form @submit.prevent="submitForm">
                <div class="form-group">
                  <label for="username">Kullanıcı Adı</label>
                  <input type="text" class="form-control" id="username" v-model="username">
                </div>
                <div class="form-group">
                  <label for="password">Şifre</label>
                  <input type="password" class="form-control" id="password" v-model="password">
                </div>
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="rememberMe" v-model="rememberMe">
                  <label class="form-check-label" for="rememberMe">Beni Hatırla</label>
                </div>
                <button type="submit" class="btn btn-primary btn-block mt-4">Giriş Yap</button>
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
        username: '',
        password: '',
        rememberMe: false
      };
    },
    methods: {
      submitForm() {
        // burada formun gönderilmesi ve doğrulama işlemleri yapılabilir
        console.log('username:', this.username);
        console.log('password:', this.password);
        console.log('rememberMe:', this.rememberMe);
      }
    }
  };
  </script>
  
  <style>
  /* istediğiniz CSS stillerini buraya ekleyebilirsiniz */
  .bg-opacity-85 {
  opacity: 0.85;
}
  </style>
  