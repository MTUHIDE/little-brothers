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
  <ul class="navbar flexbox" id="collapsable-navbar">
      <img class="img" contain alt="LBFE logo" src="/../../../../images/LBFE_white_upmichigan.png"/>

      <!-- Navbar - Admin Items -->
      <form v-if="$route.meta.admin">
        <NavbarLink to="/calendar" icon="fas fa-calendar-alt" floatDir="left" text="Calendar"/>
        <NavbarLink to="/reports" icon="fas fa-chart-bar" floatDir="left" text="Reports"/>
        <NavbarLink to="/updates" icon="fas fa-edit" floatDir="left" text="Updates Log"/>
        <NavbarLink to="/drivers" icon="fas fa-shuttle-van" floatDir="left" text="Drivers"/>
      </form>

      <!-- Navbar - Driver Items -->
      <form v-else-if="$route.meta.driver">
        <NavbarLink to="/driver/calendar" icon="fas fa-calendar-alt" floatDir="left" text="Calendar"/>
        <NavbarLink to="/driver/update" icon="fas fa-edit" floatDir="left" text="Update"/>
      </form>

      <!-- <NavbarLink to="/" icon="fas fa-bars" floatDir="right" text="Log Out"/> -->
      <NavbarLink to="/" icon="fas fa-sign-out-alt" floatDir="right" text="Log Out"/>
  </ul>
</template>

<style scoped>
  #collapsable-navbar.flexbox {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .navbar {
    color: var(--nb-text-color);
    background-color: var(--nb-color);

    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    height: 100;
    padding: 0.5em;
    transition: 0.3s ease;
    display: list-item;
    flex-wrap:nowrap;
    /* flex-direction: column; */
    margin-bottom: 15px;
  }

  .img {
    display: -inline-flexbox;
    height: 37px;
    width: auto;
    float: left;
  }
</style>
