<template>
  <div class="container-fluid bg-light bg-opacity-75 bg-opacity-85"> 
    <div class="row justify-content-center align-items-center min-vh-100 shadow">
      <div class="col-md-6 col-lg-4">
        <div class="card text-secondary-emphasis bg-light mb-3">
          <div class="card-header">
            <h3 class="text-center">Şifre Güncelle</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label for="currentPassword">Mevcut Şifre</label>
                <input type="password" class="form-control" id="currentPassword" v-model="currentPassword">
                <small v-if="currentPasswordError" class="text-danger">{{ currentPasswordError }}</small>
              </div>
              <div class="form-group">
                <label for="newPassword">Yeni Şifre</label>
                <input type="password" class="form-control" id="newPassword" v-model="newPassword">
                <small v-if="newPasswordError" class="text-danger">{{ newPasswordError }}</small>
              </div>
              <div class="form-group">
                <label for="confirmPassword">Yeni Şifre (Tekrar)</label>
                <input type="password" class="form-control" id="confirmPassword" v-model="confirmPassword">
                <small v-if="confirmPasswordError" class="text-danger">{{ confirmPasswordError }}</small>
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
      confirmPassword: '',
      currentPasswordError: '',
      newPasswordError: '',
      confirmPasswordError: ''
    };
  },
  methods: {
    submitForm() {
      this.clearErrors();

      if (this.currentPassword === '') {
        this.currentPasswordError = 'Mevcut şifre gereklidir.';
      }

      if (this.newPassword === '') {
        this.newPasswordError = 'Yeni şifre gereklidir.';
      }

      if (this.confirmPassword === '') {
        this.confirmPasswordError = 'Yeni şifre (tekrar) gereklidir.';
      } else if (this.confirmPassword !== this.newPassword) {
        this.confirmPasswordError = 'Yeni şifreler eşleşmiyor.';
      }

      if (!this.hasErrors()) {
        // Form gönderme ve doğrulama işlemleri burada yapılabilir
        console.log('currentPassword:', this.currentPassword);
        console.log('newPassword:', this.newPassword);
        console.log('confirmPassword:', this.confirmPassword);
        console.log({
          currentPassword: this.currentPassword,
          newPassword: this.newPassword,
          confirmPassword: this.confirmPassword,

        });
      }
    },
    clearErrors() {
      this.currentPasswordError = '';
      this.newPasswordError = '';
      this.confirmPasswordError = '';
    },
    hasErrors() {
      return (
        this.currentPasswordError !== '' ||
        this.newPasswordError !== '' ||
        this.confirmPasswordError !== ''
      );
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
