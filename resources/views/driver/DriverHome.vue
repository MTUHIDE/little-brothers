<script>
export default {};

</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <h1>Welcome {{ $store.state.driverName }}!</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <router-link tag="button" to="/driver/calendar" class="btn btn-primary btn-lg">Calendar</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <router-link tag="button" to="/driver/update" class="btn btn-primary btn-lg">Update</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <router-link tag="button" to="/driver/prev-updates" class="btn btn-primary btn-lg">Previous Updates</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <router-link tag="button" to="/driver/about" class="btn btn-primary btn-lg">About</router-link>
      </div>
      <div class="col-md-12">
        <router-link tag="button" to="/" class="btn btn-danger btn-lg">Logout</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin-top: 64px;
}
.row {
  margin-top: 32px;
}
</style>
