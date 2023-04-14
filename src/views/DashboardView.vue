<template>
<booking-card totalCommentCount="125" :personelCount="245" :totalCommentCountForYou="123" :totalCommentCountByYou="321" />  </template>
  
  <script>
import BookingCard from "../components/DashboardComponents/BookingCard.vue";
export default {
  components: {
    BookingCard,
  },
};

  </script>
  
  <style>
  /* Add any custom CSS styles here */
  </style>
  