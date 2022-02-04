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
        <button type="button" to="/driver/calendar" class="btn btn-primary btn-lg">Calendar</button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <button type="button" to="/driver/update" class="btn btn-primary btn-lg">Update</button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <button type="button" to="/driver/prev-updates" class="btn btn-primary btn-lg">Previous Updates</button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <button type="button" to="/driver/about" class="btn btn-primary btn-lg">About</button>
      </div>
      <div class="col-md-12">
        <button type="button" to="/" class="btn btn-danger btn-lg">Logout</button>
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
