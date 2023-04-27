<template>
  <emp-profile-card></emp-profile-card>
  <default-card></default-card>
</template>
      
<script>
import EmpProfileCard from "../components/EmployeeProfileComponents/EmpDashboardCard.vue";
import DefaultCard from "../components/DashboardComponents/ProfileCard.vue";

export default {
  components: {
    DefaultCard,
    EmpProfileCard
  },
};

</script>
      
<style>
/* Add any custom CSS styles here */
</style>
      