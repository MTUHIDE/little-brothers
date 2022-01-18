<script>
export default {
  data() {
    return {
      items: [
        { Driver: 'Driver1', time: '2:40', home_addr: '123 Street Avenue', dest_addr: '345 Road Street', mobility: 'wheelchair', notes: 'Deaf, need to wave through front window' },
      ],
    };
  },
};
</script>

<template>
  <div class="d-flex justify-content-center">
    <b-card 
      title="DriverMoreInfo"
      style="max-width: 20rem;"
      class="justify-center"
      bg-variant="red-400"
    >
      <b-table class="drivetbl" stacked selectable @select="selected" hover sticky-header :items="items">    
      </b-table>
      <b-button href="#" to="/driver" variant="primary">Back</b-button>
    </b-card>
  </div>
</template>

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

