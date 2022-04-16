<script>

export default {
  props: {
    appointmentNotes: String,
    appointmentId: Number,
    clientName: String,
    driverName: String,
    eventStart: String,
    pickupAddress: String,
    destinationAddress: String,
    appointmentTitle: String,
    mobility: String,
  },
  data() {
    return {
      editing: false,
      oldTitle: "",
      oldAppDate: "",
      oldPickupAddress: "",
      oldDropoffAddress: "",
      oldClientNotes: "",
      oldElderId: "",
      oldDriverId: "",
      // addTitle: "",
      // addAppDate: "",
      // addPickupAddress: "",
      // addDropoffAddress: "",
      // addClientNotes: "",
      addDrivers: [],
      addClients: [],
      selectedDriver:{
          addDriverId:""
      },
      selectedClient:{
        addClientId: ""
      },
    }
  },
  mounted() {
      this.getDrivers();
      this.getClients();
  },
  methods: {
    setEditingMode() {
      this.editing = true;
    },
    setViewingMode() {
      this.editing = false;
    },
    getPreviousValues() { // this function gets the values for a particular appointment
      console.log(this.appointmentId);
      const getUrl = '/api/appointment/' + this.appointmentId;
      console.log(getUrl);
      this.$axios.get('/api/appointment/' + this.appointmentId)
        .then((appointmentData) => {
            console.log(appointmentData.data['0']);
            this.oldTitle = appointmentData.data['0'].appointment_title;
            this.oldAppDate = appointmentData.data['0'].start;
            this.oldPickupAddress = appointmentData.data['0'].pickup_address;
            this.oldDropoffAddress = appointmentData.data['0'].destination_address;
            this.oldClientNotes = appointmentData.data['0'].appointment_notes;
            this.oldElderId = appointmentData.data['0'].elder_id;
            this.oldDriverId = appointmentData.data['0'].driver_id;
        }).catch((error) => {
            console.log(error)
        })
    },
    getDrivers() {
      this.$axios.get('/api/drivers')
        .then((driversdata) => {
            this.addDrivers = driversdata.data;
        }).catch((error) => {
            console.log(error)
        })
    },
    getClients() {
      this.$axios.get('/api/clients')
        .then((clientdata) => {
            this.addClients = clientdata.data;
            console.log(this.addClients);
        }).catch((error) => {
            console.log(error)
        })
      },
      editForm() {
        console.log(this);
        // this.$axios.post('/api/appointment/', {
        //   title: this.addTitle,
        //   clientId: this.selectedClient.addClientId,
        //   driverId: this.selectedDriver.addDriverId,
        //   appDate: this.addAppDate,
        //   pickupAddress: this.addPickupAddress,
        //   dropoffAddress: this.addDropoffAddress,
        //   clientNotes: this.addClientNotes,
        //   // clientId: this.,
        //   // driverId: this.,
        // }).then(response => {
        //   this.hideModal();
        //   this.showAlert();
        //   this.refetchEvents();
        //   // console.log(this);
        // })
        // .catch((error) => {
        //   console.error(error.response.data);
        // })
      },
  }
}
</script>

<template>
    <div class="modal fade"
         id="appointmentModal"
         tabindex="-1"
         role="dialog"
         aria-labelledby="exampleModalLabel"
         aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-scrollable modal-fullscreen-md-down">
            <div class="modal-content">
                <div class="modal-header" style="{ border: none }">
                  <button v-if="editing" type="button" @click="this.setViewingMode()" class="btn btn-secondary me-1" aria-label="View">
                      Cancel
                  </button>
                  <button v-else type="button" @click="this.setEditingMode(); this.getPreviousValues()" class="btn btn-primary me-1" aria-label="Edit">
                      <i class="fas fa-edit"></i> Edit
                  </button>
                  <button type="button" class="btn btn-danger" aria-label="Delete">
                      <i class="icon fas fa-solid fa-trash"/> Delete
                  </button>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                </div>
                <div v-if="editing" class="modal-body">
                  <form v-if="editing" id="editForm" @submit.prevent="editForm">
                    <p>appt ID: {{appointmentId}}</p>
                    <br/>

                    <div class="mb-3">
                      <label for="editTitle" class="form-label">Title: </label>
                      <input name="title" type="text" class="form-control" id="editTitle" v-model="oldTitle" required>
                      <!-- <p v-if="!editing">{{clientName}}</p> -->
                      <!-- <p>{{clientName}}</p> -->
                    </div>

                    <div class="mb-3">
                      <label for="editName" class="form-label">Elder: </label>
                      <select id="editName" name="name" class="form-select" v-model="oldElderId" required>
                        <option disabled>--Select an Elder--</option>
                        <option v-for="addClientId in addClients" :key="addClientId.id" v-bind:value="addClientId.id">
                            {{ addClientId.client_name }}
                        </option>
                      </select>
                    </div>

                    <div class="mb-3">
                      <label for="editDriver" class="form-label" >Driver: </label>
                      <select id="editDriver" name="driver" class="form-select" v-model="oldDriverId" required>
                          <!-- TODO: replace with driver lookup request -->
                          <option disabled>--Select a Driver--</option>
                          <option v-for="addDriverId in addDrivers" :key="addDriverId.id" v-bind:value="addDriverId.id">
                              {{ addDriverId.driver_name }}
                          </option>
                      </select>
                    </div>

                    <div class="mb-3">
                     <label for="editDateTime" class="form-label">Date and Time: </label>
                      <!-- TODO: fix formatting for date and time when not editing -->
                      <input id="editDateTime" name="dateTime" class="form-control" type="datetime-local" v-model="oldAppDate" required>
                      <!-- <p v-if="!editing">{{appDate}}</p> -->
                      <!-- <p>{{appDate}}</p> -->
                    </div>

                    <div class="mb-3">
                      <label for="editPickup" class="form-label">Pick up address: </label>
                      <textarea id="editPickup" name="pickup" class="form-control" v-model="oldPickupAddress" required></textarea>
                      <!-- <p v-if="!editing">{{pickupAddress}}</p> -->
                      <!-- <p>{{pickupAddress}}</p> -->
                    </div>

                    <div class="mb-3">
                      <label for="editDropoff" class="form-label">Drop off address: </label>
                      <textarea id="editDropoff" name="dropoff" class="form-control" v-model="oldDropoffAddress" required></textarea>
                      <!-- <p>{{dropoffAddress}}</p> -->
                    </div>

                    <div class="mb-3">
                      <label for="editNotes" class="form-label">Appointment Notes: </label>
                      <textarea id="editNotes" name="notes" class="form-control" v-model="oldClientNotes"></textarea>
                      <!-- <p v-if="!editing">{{clientNotes}}</p> -->
                      <!-- <p>{{clientNotes}}</p> -->
                    </div>

                    <!-- <button type="submit" class="btn btn-primary" id="appointSubmit">Submit</button> -->
                  </form>
                </div>
                <div v-else class="modal-body">
                  <div class="iconTitleflex fw-bold"><span class="iconWrap"><i class="fas fa-clock"></i></span>Title:</div><p>{{ appointmentTitle }}</p>
                    <div class="iconTitleflex fw-bold"><span class="iconWrap"><i class="fas fa-calendar"></i></span>Date/Time:</div><p>{{ eventStart }}</p>
                    <div class="iconTitleflex fw-bold"><span class="iconWrap"><i class="fas fa-home"></i></span>Pickup Address:</div><p>{{ pickupAddress }}</p>
                    <div class="iconTitleflex fw-bold"><span class="iconWrap"><i class="fas fa-map-marker-alt"></i></span>Destination Address:</div><p>{{ destinationAddress }}</p>
                    <div class="iconTitleflex fw-bold"><span class="iconWrap"><i class="fas fa-clipboard"></i></span>Appointment Notes:</div><p>{{ appointmentNotes }}</p>
                    <div class="iconTitleflex fw-bold"><span class="iconWrap"><i class="fas fa-wheelchair"></i></span>Mobility:</div><p>{{ mobility }}</p>
                    <div class="iconTitleflex fw-bold"><span class="iconWrap"><i class="fas fa-user"></i></span>Elder Name:</div><p>{{ clientName }}</p>
                    <div class="iconTitleflex fw-bold"><span class="iconWrap"><i class="fas fa-shuttle-van"></i></span>Driver Name:</div><p>{{ driverName }}</p>
                    <!-- <slot/> -->
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button v-if="editing" type="submit" form="editForm" class="btn btn-primary">Save changes </button>
                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.CalendarPopup {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 99;
	background-color: rgba(0, 0, 0, 0.2);

	display: flex;
	align-items: center;
	justify-content: center;
	.popup-inner {
        border-radius: 16px;
		background: #FFF;
		padding: 10px;
        min-width: 30%;
        min-height: 30%;
	}
}

.modal-body {
  text-align: left !important;
}

.iconWrap {
  // width: 1.8rem;
  width: 1.5rem;
  margin-right: 1rem;
  text-align: center !important;
}

p {
  margin-left: 2.5rem;
}
.iconTitleflex {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
