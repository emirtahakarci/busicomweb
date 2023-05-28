<template>
  <div class="bg-dark bg-opacity-75 m-auto">
  <graphics-card></graphics-card>
<booking-card totalCommentCount="125" :personelCount="245" :totalCommentCountForYou="123" :totalCommentCountByYou="321" />
<default-card></default-card>
</div>
</template>
  
  
  <script>
import BookingCard from "../components/DashboardComponents/BookingCard.vue";
import GraphicsCard from "../components/DashboardComponents/GraphicsCard.vue";
import DefaultCard from "../components/DashboardComponents/ProfileCard.vue";
export default {
  components: {
    BookingCard,
    DefaultCard,
    GraphicsCard
  },
};

  </script>
  
  <style>
  /* Add any custom CSS styles here */
  </style>
  