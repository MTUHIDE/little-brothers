<template>
  <b-navbar toggleable="lg" type="light" variant="info">
    <b-navbar-brand to="/driver">Little Brothers Driver</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/driver/calendar">Calendar</b-nav-item>
        <b-nav-item to="/driver/update">Update</b-nav-item>
        <b-nav-item to="/driver/prev-updates">Previous Updates</b-nav-item>
        <b-nav-item to="/driver/about">About</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Logout</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #e37070 !important;
  box-shadow: rgb(0 0 0 / 28%) 0px 4px 8px 0px;
}
</style>
