<template>
  <div class="client">
    <div class="container-fluid">
      <!-- Top bar with back and save/edit button -->

      <!-- <Button buttonText="Back" to="\calendar"/>
        <b-button to="/calendar">Back</b-button> -->

      <h1>Client</h1>


      <button type="button" :to="redirect" :style="{ display: activeBack }" class="btn btn-primary">Back</button>
      <button type="edit" class="btn btn-primary" id="clientEdit">Edit</button>

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
.flexy {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>