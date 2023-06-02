<template>
  <div class="container-fluid bg-light bg-opacity-75 bg-opacity-85">
    <div class="row justify-content-center align-items-center min-vh-100 shadow">
      <div class="col-md-6 col-lg-4">
        <div class="card text-secondary-emphasis bg-light mb-3">
          <div class="card-header">
            <h3 class="text-center">Giriş Yap</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="submitForm" @keydown="resetErrors">
              <div class="form-group">
                <label for="username">Kullanıcı Adı</label>
                <input type="text" class="form-control" id="username" v-model="username">
                <div v-if="errors.username" class="text-danger">{{ errors.username }}</div>
              </div>
              <div class="form-group">
                <label for="password">Şifre</label>
                <input type="password" class="form-control" id="password" v-model="password">
                <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
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
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      username: '',
      password: '',
      rememberMe: false,
      errors: {} // Hata mesajlarını içerecek nesne
    };
  },
  created() {
    if (sessionStorage.getItem("u_name") && sessionStorage.getItem("u_pass")) {
      this.username = sessionStorage.getItem("u_name")
      this.password = sessionStorage.getItem("u_pass")
      this.submitForm().then(() => {
        this.$router.push('/')
      });
    }
  },
  methods: {
    ...mapActions('auth', ['login']),
    async submitForm() {
      // Doğrulama işlemlerini burada yapabilirsiniz
      this.errors = {}; // Hataları sıfırla

      if (!this.username) {
        this.errors.username = 'Kullanıcı adı gereklidir.';
      }

      if (!this.password) {
        this.errors.password = 'Şifre gereklidir.';
      }


      // Hata kontrolü
      if (Object.keys(this.errors).length === 0) {
        // Hata yok, formu gönder

        console.log('username:', this.username);
        console.log('password:', this.password);
        console.log('rememberMe:', this.rememberMe);

        try {
          this.login({
            username: this.username,
            password: this.password
          })

          if (this.rememberMe) {
            sessionStorage.setItem("u_name", this.username)
            sessionStorage.setItem("u_pass", this.password)
          } else {
            sessionStorage.removeItem("u_name")
            sessionStorage.removeItem("u_pass")
          }

          this.$router.push('/')
        } catch (error) {
          alert(error.message)
        }


      }
    },
    resetErrors() {
      this.errors = {}; // Hataları sıfırla herhangi bir tuşa basıldığında
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