<template>
    <div class="comment-section">
        <div class="row bg-light bg-opacity-75 opacity-8">
            <header class="bg-light bg-opacity-75">
                <div class="page-header min-vh-75" :style="{ 'background-image': 'url(img/bg9.jpg)' }">
                    <span class="mask"></span>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8 text-center mx-auto my-auto">
                                <h1 class="text-secondary-emphasis mt-5">Emir Taha Karcı</h1>
                                <p class="lead mb-4 text-secondary-emphasis opacity-9">Yazılım Geliştiricisi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div class="col-md-12">
                <div class="comment-form">
                    <h2 class="text-secondary-emphasis">Yorum Yap</h2>
                    <form @submit.prevent="submitComment" class="needs-validation" novalidate>
                        <div class="form-group">
                            <label for="name" class="text-secondary-emphasis">Konu:</label>
                            <input v-model="name" type="text" class="form-control" id="name" required>
                            <div class="invalid-feedback text-secondary-emphasis">Lütfen konunuzu girin.</div>
                        </div>
                        <div class="form-group">
                            <label for="comment" class="text-secondary-emphasis">Yorumunuz:</label>
                            <textarea v-model="comment" class="form-control" id="comment" required></textarea>
                            <div class="invalid-feedback text-secondary-emphasis">Lütfen bir yorum girin.</div>
                        </div>
                        <button type="submit" class="btn btn-primary">Gönder</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import CommentService from '@/services/CommentService';

export default {
    data() {
        return {
            name: '',
            comment: ''
        };
    },
    created() {
        // CommentService.getUserMakeComment()
        //     .then((result) => {
        //         this.UserMakeComment = result
        //     })
        //     .catch((error) => {
        //         if (error.message.includes('401 Unauthorized')) {
        //             this.$router.push('/login')
        //         }
        //     })
    },
    methods: {
        submitComment() {
            if (this.validateForm()) {
                console.log('Yorum gönderildi:', this.name, this.comment);
                this.resetForm();
            }
        },
        validateForm() {
            const form = document.querySelector('.needs-validation');
            if (!form.checkValidity()) {
                form.classList.add('was-validated');
                return false;
            }
            return true;
        },
        resetForm() {
            this.name = '';
            this.comment = '';
            document.querySelector('.needs-validation').classList.remove('was-validated');
        }
    }
};
</script>

<style scoped>
.comment-section {
    margin: 20px;
}

.comment-form {
    /* İsteğe bağlı stil düzenlemeleri */
}

.opacity-8 {
    opacity: 0.85;
}

.text-secondary-emphasis {
    color: white;
}
</style>
