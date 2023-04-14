<template>
<booking-card totalCommentCount="125" :personelCount="245" :totalCommentCountForYou="123" :totalCommentCountByYou="321" />
<default-card></default-card>
</template>
  
  
  <script>
import BookingCard from "../components/DashboardComponents/BookingCard.vue";
import DefaultCard from "../components/ProfileCard.vue";
export default {
  components: {
    BookingCard,
    DefaultCard
  },
};

  </script>
  
  <style>
  /* Add any custom CSS styles here */
  </style>
  