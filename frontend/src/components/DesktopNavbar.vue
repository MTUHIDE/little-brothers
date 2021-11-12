<template>
  <b-navbar class="mx-auto" type="light" variant="info">
    <b-navbar-nav>
      <!-- Navbar dropdowns -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/calendar">Home</b-nav-item>
      </b-navbar-nav>
      <b-nav-item-dropdown text="Calendar" left>
        <b-dropdown-item href="#">Add Appointment</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-navbar-nav>
        <b-nav-item to="/desktop/reports">Reports</b-nav-item>
        <b-nav-item href="#">Updates Log</b-nav-item>
      </b-navbar-nav>
      <b-nav-item-dropdown text="Bios" left>
        <b-dropdown-item href="#">Drivers</b-dropdown-item>
        <b-dropdown-item href="#">Clients</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/login">Logout</b-nav-item>
      </b-navbar-nav>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {};
</script>


<style lang="css" scoped>

</style>