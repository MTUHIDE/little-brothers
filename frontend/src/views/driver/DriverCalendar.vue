<template>
  <div>
    <h1>Calendar</h1>
    <b-table class="drivetbl" striped hover sticky-header :items="items"></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { time: '3:45', name: 'Driver1', client: 'Edna' },
        { time: '4:15', name: 'Driver2', client: 'Edith' },
        { time: '4:30', name: '', client: 'Bruce' },
      ],
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
