<template>
  <div class="client">
    <div class="container-fluid">

        <h1>Client</h1>

        <div class="button-container mb-3">
          <button type="button" :to="redirect" :style="{ display: activeBack }" class="btn btn-primary px-3">Back</button>
          <button type="edit" class="btn btn-primary px-3" id="clientEdit">Edit</button>
        </div>

        <!-- TODO Update this so that it can be populated with data from the backend-->
        <div class="card text-start border-dark mx-auto w-50" >
          <div class="card-header text-center fw-bold">Name: Carl Wheezer </div>
          <div class="card-body">
            <div class="row">
              <div class="col-4">
                <p class="card-text fw-bold">Address: </p>
                <p class="card-text fw-bold">Phone number:</p>
                <p class="card-text fw-bold">Mobility:</p> 
                <p class="card-text fw-bold">Number of cancels:</p> 
                <p class="card-text fw-bold">Additional notes:</p> 
              </div>
              <div class="col">
                <p class="card-text">TMP 713 Road St Apt 2 </p>
                <p class="card-text">TMP (906) 333-1542</p>
                <p class="card-text">TMP Wheelchair</p> 
                <p class="card-text">TMP 2</p> 
                <p class="card-text"> * TMP Is partially deaf</p> 
              </div>
            </div>
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