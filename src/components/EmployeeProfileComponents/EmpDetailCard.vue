<template>
    <header class="bg-light bg-opacity-75 p-5">
        <div class="page-header min-vh-75" :style="{ 'background-image': 'url(img/bg9.jpg)' }">
            <span class="mask bg-light bg-opacity-75 opacity-6"></span>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 text-center mx-auto my-auto" v-for="(member, index) in members" :key="index">
                        <h1 class="text-secondary-emphasis mt-5">{{member.name }}</h1>
                        <p class="lead mb-4 text-secondary-emphasis opacity-8">{{member.title }}</p>
                        <router-link to="/makeacomment">
                            <button class="btn btn-light btn-white-black">Yorum Yap</button>
                        </router-link>
                        <h6 class="text-secondary-emphasis mb-2 mt-5">Find us on</h6>
                        <div class="d-flex justify-content-center mb-5">
                            <a href="javascript:;"><i class="fab fa-linkedin text-lg text-secondary-emphasis me-4"></i></a>
                            <a href="javascript:;"><i class="fab fa-instagram text-lg text-secondary-emphasis me-4"></i></a>
                            <a href="javascript:;"><i class="fab fa-google-plus text-lg text-secondary-emphasis"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    data() {
        return {
            members: [
                {
                    name: "Emma Roberts",
                    title: "UI Designer",
                
                },
            ],
        };
    },
};


</script>
<style>
/* custom styles here */
</style>