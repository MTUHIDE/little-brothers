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
import Appointment from '../busforms/Appointment.vue';

export default {
    components: {
        FullCalendar, // make the <FullCalendar> tag available
        CalendarPopup,
        Appointment
    },
    data() {
        const popupTriggers = ref({
            buttonTrigger: false
        });
        const TogglePopup = (trigger) => {
            popupTriggers.value[trigger] = !popupTriggers.value[trigger]
        }
        return {
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
        }
    }
}
</script>

<template>
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
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                </div>
                <div class="modal-body">
                  <Appointment :editMode="true" :redirect="'/calendar'" :activeBack="'none'" />
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
