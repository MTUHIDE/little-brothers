<script>
import NavbarLink from './NavbarLink'
export default {
  props: {},
  components: { NavbarLink },
  setup() {
    return { }
  }
}
</script>

<template>
  <div class="navbar">

    <img class="img" contain alt="LBFE logo" src="@/assets/little_brothers_upper_michigan_logo.png" />

    <!-- Navbar - Admin Items -->
    <div v-if="$route.meta.admin">
      <NavbarLink to="/calendar" icon="fas fa-calendar-alt" floatDir="left">Calendar</NavbarLink>
      <NavbarLink to="/appointment" icon="fas fa-plus-square" floatDir="left">Add Appointment</NavbarLink>
      <NavbarLink to="/reports" icon="fas fa-chart-bar" floatDir="left">Reports</NavbarLink>
      <NavbarLink to="/updates" icon="fas fa-edit" floatDir="left">Updates Log</NavbarLink>
      <NavbarLink to="/calendar" icon="fas fa-shuttle-van" floatDir="left">Drivers</NavbarLink>
      <NavbarLink to="/clients" icon="fas fa-user" floatDir="left">Clients</NavbarLink>
    </div>

    <!-- Navbar - Driver Items -->
    <div v-else-if="$route.meta.driver">
      <NavbarLink to="/driver/calendar" icon="fas fa-calendar-alt" floatDir="left">Calendar</NavbarLink>
      <NavbarLink to="/driver/update" icon="fas fa-edit" floatDir="left">Update</NavbarLink>
      <NavbarLink to="/driver" icon="fas fa-user" floatDir="left">Clients</NavbarLink>
    </div>

    <NavbarLink to="/" icon="fas fa-bars" floatDir="right">Logout</NavbarLink>

  </div>
</template>

<style scoped> 
  .navbar {
    color: var(--nb-text-color);
    background-color: var(--nb-color);

    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    height: 100;
    padding: 0.5em;
    transition: 0.3s ease;
    display: list-item;
    flex-direction: column;
    margin-bottom: 15px;
  }

  .img {
    display: -inline-flexbox;
    width: 117px;
    float: left;
  }
</style>
