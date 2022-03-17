<script>

import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

import { ref } from 'vue';
import { Modal } from 'bootstrap';
import CalendarPopup from './CalendarPopup.vue';
import DriverCalendarPopup from '../driverCalendar/DriverCalendarPopup.vue';
import SuccessAlert from '../busforms/SuccessAlert.vue';

export default {
    components: {
        FullCalendar, // make the <FullCalendar> tag available
        CalendarPopup,
        SuccessAlert,
    },
    data() {
        const popupTriggers = ref({
            buttonTrigger: false
        });
        const TogglePopup = (trigger) => {
            popupTriggers.value[trigger] = !popupTriggers.value[trigger]
        }
        return {
            isShow: false,
            addTitle: "",
            addAppDate: "",
            addPickupAddress: "",
            addDropoffAddress: "",
            addClientNotes: "",
            addDrivers: [],
            addClients: [],
            selectedDriver:{
                addDriverName:""
            },
            selectedClient:{
              addClientName: ""
            },
            appointmentNotes: '',
            clientName: '',
            driverName: '',
            startDateTime: '',
            pickupAddress: '',
            destinationAddress: '',
            appointmentTitle: '',
            mobility: '',
            cpModal: null,
            calendarOptions: {
                plugins: [ dayGridPlugin, timeGridPlugin, interactionPlugin ],
                customButtons: {
                  addAppointmentButton: {
                    text: '+ Create',
                    hint: 'Create appointment',
                    // icon: 'fa fas fa-plus',
                    click: this.showModal,
                  }
                },
                headerToolbar: {
                    left: 'addAppointmentButton prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                scrollTime :  "09:00:00",
                nowIndicator: true,
                initialView: 'dayGridMonth',
                editable: true,
                selectable: true,
                selectMirror: true,
                dayMaxEvents: true,
                weekends: true,
                dateClick: this.handleDateClick,
                //select: this.handleDateSelect,
                eventClick: (clickData) => {
                    this.cpModal.show();
                    this.appointmentNotes = clickData.event.extendedProps['appointment_notes'];
                    this.clientName = clickData.event.extendedProps['client_name'];
                    this.driverName = clickData.event.extendedProps['driver_name'];
                    this.pickupAddress = clickData.event.extendedProps['pickup_address'];
                    this.destinationAddress = clickData.event.extendedProps['destination_address'];
                    this.appointmentTitle = clickData.event.extendedProps['appointment_title'];
                    this.mobility = clickData.event.extendedProps['mobility'];
                    this.startDateTime = clickData.event.start;
                    //TODO : add appointment info param, pass info in here based on clickData.id??? idk. Data dump happen here you cylon
                },
                eventsSet: this.handleEvents,
                /* you can update a remote database when these fire:
                eventAdd:
                eventChange:
                eventRemove:
                */
                events: '/api/appointments'
            },
            popupTriggers,
            TogglePopup,
        }
    },
    // get access to modal for manipulation
    mounted() {
        this.cpModal = new Modal(document.getElementById('appointmentModal'), null);
        this.cpAddModal = new Modal(document.getElementById('addAppointmentModal'), null);
        this.getDrivers();
        this.getClients();
    },
    methods: {
        handleDateClick: function(arg) {
            // Get api instance
            let calendarApi = this.$refs.fullCalendar.getApi();
            let newDate = arg['dateStr'];
            // go to clicked on date and switch to day view
            calendarApi.changeView('timeGridDay', newDate);
        },
        handleEvents(events) {
            this.currentEvents = events
        },
        showModal() {
          this.cpAddModal.show();
        },
        hideModal() {
          this.cpAddModal.hide();
        },
        showAlert() {
          this.isShow = true;
        },
        refetchEvents() {
          let calendarApi = this.$refs.fullCalendar.getApi();
          calendarApi.refetchEvents();
        },
        submitForm() {
          this.$axios.post('/api/appointment/store', {
            title: this.addTitle,
            clientName: this.addClientName,
            driverName: this.addDriverName,
            appDate: this.addAppDate,
            pickupAddress: this.addPickupAddress,
            dropoffAddress: this.addDropoffAddress,
            clientNotes: this.addClientNotes
          }).then(response => {
            // this.$bvModal.hide('modal-2')
            this.hideModal();
            this.showAlert();
            this.refetchEvents();
            console.log(response);
          })
          .catch((error) => {
            console.log(error)
          })
        },

        getDrivers(){
          this.$axios.get('/api/drivers')
            .then((driversdata) => {
                console.log(driversdata);
                this.addDrivers = driversdata.data;
            }).catch((error) => {
                console.log(error)
            })
        },

        getClients(){
          this.$axios.get('/api/clients')
            .then((clientdata) => {
                console.log(clientdata);
                this.addClients = clientdata.data;
            }).catch((error) => {
                console.log(error)
            })
          }
    },
}
</script>

<template>
    <SuccessAlert v-show="isShow" alertStrongText="Success!" alertBodyText="Appointment information saved"/>
    <CalendarPopup :mobility="mobility" :appointment-title="appointmentTitle" :pickup-address="pickupAddress" :destination-address="destinationAddress" :driver-name="driverName" :client-name="clientName" :appointment-notes="appointmentNotes" :event-start="startDateTime">
        <!-- <Appointment :editMode="true" :redirect="'/calendar'" :activeBack="'none'"/> -->
    </CalendarPopup>

    <div class="modal fade"
         id="addAppointmentModal"
         tabindex="-1"
         role="dialog"
         aria-labelledby="exampleModalLabel"
         aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-scrollable modal-fullscreen-md-down">
            <div class="modal-content">
                <div class="modal-header" style="{ border: none }">
                    <h5 class="modal-title">Add Appointment</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                </div>
                <div class="modal-body">
                  <form @submit.prevent="submitForm">

                    <br/>

                    <div class="mb-3">
                      <label for="title" class="form-label">Title: </label>
                      <input name="title" type="text" class="form-control" id="title" v-model="addTitle" required>
                      <!-- <p v-if="!editing">{{clientName}}</p> -->
                      <!-- <p>{{clientName}}</p> -->
                    </div>

                    <div class="mb-3">
                      <label for="name" class="form-label">Client: </label>
                      <select id="name" name="name" class="form-select" v-model="selectedClient.addClientName" required>
                        <option disabled>--Select a Client--</option>
                        <option v-for="addClientName in addClients" :key="clientName.client_name">
                            {{ addClientName.client_name }}
                        </option>
                      </select>

                      <!-- <p v-if="!editing">{{clientName}}</p> -->
                      <!-- <p>{{clientName}}</p> -->
                    </div>


                    <div class="mb-3">
                      <label for="driver" class="form-label" >Driver: </label>
                      <select id="driver" name="driver" class="form-select" v-model="selectedDriver.addDriverName" required>
                          <!-- TODO: replace with driver lookup request -->
                          <option disabled>--Select a Driver--</option>
                          <option v-for="addDriverName in addDrivers" :key="driverName.driver_name">
                              {{ addDriverName.driver_name }}
                          </option>
                      </select>
                      <!-- <p v-if="!editing">{{driverName}}</p> -->
                      <!-- <p>{{driverName}}</p> -->
                    </div>

                    <div class="mb-3">
                     <label for="dateTime" class="form-label">Date and Time: </label>
                      <!-- TODO: fix formatting for date and time when not editing -->
                      <input id="dateTime" name="dateTime" class="form-control" type="datetime-local" v-model="addAppDate" required>
                      <!-- <p v-if="!editing">{{appDate}}</p> -->
                      <!-- <p>{{appDate}}</p> -->
                    </div>

                    <div class="mb-3">
                      <label for="pickup" class="form-label">Pick up address: </label>
                      <textarea id="pickup" name="pickup" class="form-control" v-model="addPickupAddress" required></textarea>
                      <!-- <p v-if="!editing">{{pickupAddress}}</p> -->
                      <!-- <p>{{pickupAddress}}</p> -->
                    </div>

                    <div class="mb-3">
                      <label for="dropoff" class="form-label">Drop off address: </label>
                      <textarea id="dropoff" name="dropoff" class="form-control" v-model="addDropoffAddress" required></textarea>
                      <!-- <p>{{dropoffAddress}}</p> -->
                    </div>

                    <div class="mb-3">
                      <label for="notes" class="form-label">Notes: </label>
                      <textarea id="notes" name="notes" class="form-control" v-model="addClientNotes"></textarea>
                      <!-- <p v-if="!editing">{{clientNotes}}</p> -->
                      <!-- <p>{{clientNotes}}</p> -->
                    </div>

                    <button type="submit" class="btn btn-primary" id="appointSubmit">Submit</button>
                  </form>
                </div>
            </div>
        </div>
    </div>


    <div class="cMonthView">
        <FullCalendar ref="fullCalendar" :options="calendarOptions"/>
    </div>
</template>

<style scoped>
.cMonthView {
    margin: 5%;
    padding: 2px;
}

.fc-icon-fa {
  font-family: FontAwesome;
}
</style>
