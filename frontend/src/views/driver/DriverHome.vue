<template>
  <b-container>
    <b-row class="mt-md">
      <b-col>
        <h1>Welcome {{ $store.state.driverName }}!</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button size="lg" to="/driver/calendar">Calendar</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button size="lg" to="/driver/update">Update</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button size="lg" to="/driver/prev-updates">Previous Updates</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button to="/driver/about">About</b-button>
      </b-col>
      <b-col>
        <b-button variant="danger">Logout</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 64px;
}
.row {
  margin-top: 32px;
}
</style>
