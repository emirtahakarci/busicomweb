<template>
  <emp-detail-card></emp-detail-card>
  <emp-profile-card></emp-profile-card>
  <default-card></default-card>
</template>
      
<script>
import EmpProfileCard from "../components/EmployeeProfileComponents/EmpDashboardCard.vue";
import DefaultCard from "../components/DashboardComponents/ProfileCard.vue";
import EmpDetailCard from "../components/EmployeeProfileComponents/EmpDetailCard.vue";


export default {
  components: {
    EmpDetailCard,
    DefaultCard,
    EmpProfileCard
  },
};

</script>
      
<style>
/* Add any custom CSS styles here */
</style>
      