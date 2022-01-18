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
      <NavbarLink to="/calendar" icon="fas fa-home" floatDir="left">Calendar</NavbarLink>
      <NavbarLink to="/appointment" icon="fas fa-columns" floatDir="left">Add Appointment</NavbarLink>
      <NavbarLink to="/calendar" icon="fas fa-chart-bar" floatDir="left">Reports</NavbarLink>
      <NavbarLink to="/calendar" icon="fas fa-users" floatDir="left">Updates Log</NavbarLink>
      <NavbarLink to="/calendar" icon="fas fa-image" floatDir="left">Drivers</NavbarLink>
      <NavbarLink to="/calendar" icon="fas fa-image" floatDir="left">Clients</NavbarLink>
    </div>

    <!-- Navbar - Driver Items -->
    <div v-else-if="$route.meta.driver">
      <NavbarLink to="/driver/calendar" icon="fas fa-home" floatDir="left">Calendar</NavbarLink>
      <NavbarLink to="/driver/update" icon="fas fa-users" floatDir="left">Update</NavbarLink>
      <NavbarLink to="/driver" icon="fas fa-image" floatDir="left">Clients</NavbarLink>
    </div>

    <NavbarLink to="/" icon="fas fa-image" floatDir="right">Logout</NavbarLink>

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
