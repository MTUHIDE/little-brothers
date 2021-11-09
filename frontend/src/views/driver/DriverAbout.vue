<template>
  <div class="d-flex justify-content-center">
    <b-card 
      title="About"
      style="max-width: 20rem;"
      class="justify-center"
      bg-variant="red-400"
    >
      <b-card-text>{{message}}</b-card-text>
      <b-card-text>{{contact}}</b-card-text>
      <b-button href="#" to="/driver" variant="primary">Back</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'This app is meant to help Little Brothers track driver tasks and locations in real time and record data. \n If you have any questions, contact Little Brother\'s help desk at',
      contact: '906-123-4567',
    };
  },
};
</script>

<style lang="scss" scoped>
table thead th {
  background-color: #a9a9a9;
}
h1 {
  margin-top: 16px !important;
}
.drivetbl {
  height: calc(100vh - 245px);
  max-height: unset;
}
.drivetbl table {
  margin-top: 0;
}
</style>

