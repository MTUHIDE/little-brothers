<template>
  <div class="client">
    <div class="container-fluid">
      <!-- Top bar with back and save/edit button -->

      <!-- <Button buttonText="Back" to="\calendar"/>
        <b-button to="/calendar">Back</b-button> -->
        <h1>Client</h1>

        <div class="button-container">
          <button type="button" :to="redirect" :style="{ display: activeBack }" class="btn btn-primary">Back</button>
          <button type="edit" class="btn btn-primary" id="clientEdit">Edit</button>
        </div>

        <!-- TODO Update this so that it can be populated with data from the backend-->
        <div class="card border-dark m-3">
          <div class="card-header">Name</div>
          <div class="card-body">
            <address class="card-text">Address:</address>
            <p class="card-text">Phone:</p>
            <p class="card-text">Mobility:</p> 
          </div>

        
        </div>
      

    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    editMode: { type: Boolean, required: false, default: false },
    activeBack: { type: String, required: false, default: "flex" },
    redirect: { type: String, required: true },
  },
  data() {
    return {
      editing: this.editMode,
      clientName: "",
      title: "",
      driverName: "",
      appDate: "",
      pickupAddress: "",
      dropoffAddress: "",
      clientNotes: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.button-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
}


</style>