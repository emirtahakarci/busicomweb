<template>
  
  <details-card></details-card>
  <dashboard-card></dashboard-card>
<default-card></default-card>
    
  </template>
      
  <script>
  import DetailsCard from "../components/ProfileComponents/DetailsCard.vue";
  import DashboardCard from "../components/ProfileComponents/DashboardCard.vue";
  import DefaultCard from "../components/DashboardComponents/ProfileCard.vue";

  export default {
    components: {
      DetailsCard,
      DashboardCard,
      DefaultCard

    },
  };
  
  </script>
      
  <style>
  /* Add any custom CSS styles here */
  </style>
      