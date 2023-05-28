<template>
    <div class="row align-items-center opacity-75">
        <div class="row justify-content-start">
            <div class="col-md-6">
                <div class="card  mb-2">
                    <div class="card">
                        <div class="card-header p-3 pt-2 position-relative">
                            <div
                                class="icon icon-lg icon-shape bg-gradient-dark shadow-dark shadow text-center border-radius-xl mt-n4 position-absolute">
                                <i class="material-icons opacity-10">weekend</i>
                            </div>
                            <div class="text-end pt-1">
                                <p class="text-sm mb-0 text-capitalize">Şirkette Yapılan Toplam Yorum Sayısı</p>
                                <h4 class="mb-0">{{ totalCommentCount }}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card  mb-2">
                    <div class="card">
                        <div class="card-header p-3 pt-2 position-relative">
                            <div
                                class="icon icon-lg icon-shape bg-gradient-dark shadow-dark shadow text-center border-radius-xl mt-n4 position-absolute">
                                <i class="material-icons opacity-10">weekend</i>
                            </div>
                            <div class="text-end pt-1">
                                <p class="text-sm mb-0 text-capitalize">Personel Sayısı</p>
                                <h4 class="mb-0">{{ personelCount }}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-start">
            <div class="col-md-6">
                <div class="card  mb-2">
                    <div class="card">
                        <div class="card-header p-3 pt-2 position-relative">
                            <div
                                class="icon icon-lg icon-shape bg-gradient-dark shadow-dark shadow text-center border-radius-xl mt-n4 position-absolute">
                                <i class="material-icons opacity-10">weekend</i>
                            </div>
                            <div class="text-end pt-1">
                                <p class="text-sm mb-0 text-capitalize">Size yapılan Toplam yorum sayısı</p>
                                <h4 class="mb-0">{{ totalCommentCountForYou }}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card  mb-2">
                    <div class="card">
                        <div class="card-header p-3 pt-2 position-relative">
                            <div
                                class="icon icon-lg icon-shape bg-gradient-dark shadow-dark shadow text-center border-radius-xl mt-n4 position-absolute">
                                <i class="material-icons opacity-10">weekend</i>
                            </div>
                            <div class="text-end pt-1">
                                <p class="text-sm mb-0 text-capitalize">Yapmış olduğunuz toplam yorum sayısı</p>
                                <h4 class="mb-0">{{ totalCommentCountByYou }}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "BookingCard",
    props: {
        totalCommentCount: {
            type: Number,
            required: true,
        },
        personelCount: {
            type: Number,
            required: true,
        },

        totalCommentCountForYou: {
            type: Number,
            required: true,
        },

        totalCommentCountByYou: {
            type: Number,
            required: true,
        },
    },
};
</script>
  
<style>
.card {
    border-radius: 0.75rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}
</style>
  