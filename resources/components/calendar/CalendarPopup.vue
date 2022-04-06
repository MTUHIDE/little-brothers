<script>
export default {
  props: {
    appointmentNotes: String,
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
    }
  },
  methods: {
    setEditingMode() {
      this.editing = true;
    }
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
                  <button type="button" @click="this.setEditingMode()" class="btn btn-primary me-1" aria-label="Edit">
                      <i class="fas fa-edit"></i> Edit
                  </button>
                  <button type="button" class="btn btn-danger" aria-label="Delete">
                      <i class="icon fas fa-solid fa-trash"/> Delete
                  </button>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                </div>
                <div v-if="editing" class="modal-body">
                  <p>Editing mode</p>
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
                    <button  v-if="editing" type="button" class="btn btn-primary">Save changes</button>
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
