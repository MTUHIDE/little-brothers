<template>
  <b-container>
    <b-row class="mt-md">
      <b-col>
        <h1>Welcome &lt;Name&gt;!</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button size="lg">Calendar</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button size="lg">Update</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button size="lg">Previous Updates</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col><b-button>About</b-button></b-col>
      <b-col><b-button variant="danger">Logout</b-button></b-col>
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
