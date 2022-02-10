// TODO: format the form so it looks nicer, both when editing and when saved
// TODO: fix date/time formatting when not editing
// TODO: for some reason the scrollbar keeps disappearing and reappearing, which causes the page to jump back and forth when typing, pressing buttons and selecting different options in select. This is obnoxious
// TODO: Make it so that data can be passed into the class for existing appointments.
// TODO: Style the page. it's ugly as

<template>
  <div class="appointment">
    <div class="container-fluid">
      <!-- Top bar with back and save/edit button -->

      <!-- <Button buttonText="Back" to="\calendar"/>
      <b-button to="/calendar">Back</b-button> -->
      

      <h1>Appointment</h1>
      <form @submit.prevent="submitForm">
        
        <br/>

        <div class="mb-3">
          <label for="name" class="form-label">Client: </label>
          <input name="name" type="text" class="form-control" v-if="editing" id="name" v-model="clientName" required>
          <!-- <p v-if="!editing">{{clientName}}</p> -->
          <!-- <p>{{clientName}}</p> -->
        </div>


        <div class="mb-3">
          <label for="driver" class="form-label" >Driver: </label>
          <select id="driver" name="driver" class="form-select" v-if="editing" v-model="driverName" required>
            <option disabled>--Select a Driver--</option>
            <option>Driver 1</option>
            <option>Driver 2</option>
            <option>Driver 3</option>
          </select>
          <!-- <p v-if="!editing">{{driverName}}</p> -->
          <!-- <p>{{driverName}}</p> -->
        </div>

        <div class="mb-3">
         <label for="dateTime" class="form-label">Date and Time: </label>
          <!-- TODO: fix formatting for date and time when not editing -->
          <input id="dateTime" name="dateTime" class="form-control" v-if="editing" type="datetime-local" v-model="appDate" required>
          <!-- <p v-if="!editing">{{appDate}}</p> -->
          <!-- <p>{{appDate}}</p> -->
        </div>

        <div class="mb-3">
          <label for="pickup" class="form-label">Pick up address: </label>
          <textarea id="pickup" name="pickup" class="form-control" v-if="editing" v-model="pickupAddress" required></textarea>
          <!-- <p v-if="!editing">{{pickupAddress}}</p> -->
          <!-- <p>{{pickupAddress}}</p> -->
        </div>

        <div class="mb-3">
          <label for="dropoff" class="form-label">Drop off address: </label>
          <textarea id="dropoff" name="dropoff" class="form-control" v-if="editing" v-model="dropoffAddress" required></textarea>
          <!-- <p>{{dropoffAddress}}</p> -->
        </div>

        <div class="mb-3">
          <label for="notes" class="form-label">Notes: </label>
          <textarea id="notes" name="notes" class="form-control" v-if="editing" v-model="clientNotes"></textarea>
          <!-- <p v-if="!editing">{{clientNotes}}</p> -->
          <!-- <p>{{clientNotes}}</p> -->
        </div>

        <button type="submit" class="btn btn-primary" id="appointSubmit">Submit</button>
      </form>

      <!-- <button type="button" to="/calendar" class="btn btn-secondary">Back</button> -->

      <!-- <b-button v-if=!editing v-on:click="editing = !editing">Edit</b-button>
        <b-button v-if="editing" v-on:click="editing = !editing">Save</b-button> -->
        <!-- <div class="flexy">
          <button type="button" to="/calendar" class="btn btn-secondary">Edit</button>
          <button type="button" to="/calendar" class="btn btn-secondary">Save</button>
        </div> -->

      <!-- <p>clientName: {{clientName}} driverName: {{driverName}} appDate: {{appDate}}<br>
       pickupAddress: {{pickupAddress}} dropoff: {{dropoffAddress}}<br>
       clientNotes: {{clientNotes}}</p> -->
    </div>
  </div>
</template>

<script>
  export default {
    components: {
    },
    props: {
        editMode: Boolean,
    },
    data() {
      return {
        editing: this.editMode,
        clientName: "",
        driverName: "",
        appDate: "",
        pickupAddress: "",
        dropoffAddress: "",
        clientNotes: ""
      }
    },
    methods: {
      submitForm() {
        this.$axios.post('/api/appointment/store', {
          clientName: this.clientName,
          driverName: this.driverName,
          appDate: this.appDate,
          pickupAddress: this.pickupAddress,
          dropoffAddress: this.dropoffAddress,
          clientNotes: this.clientNotes
        }).then(response => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .flexy {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .appointment {
      width: 75%;
      margin: auto;
  }

  #appointSubmit {
    margin-bottom: 10px;
  }
</style>
