<script>
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

import { ref } from 'vue';
import { Modal } from 'bootstrap';
import DriverCalendarPopup from './DriverCalendarPopup.vue';
import Appointment from '../busforms/Appointment.vue';

export default {
    components: {
        FullCalendar, // make the <FullCalendar> tag available
        DriverCalendarPopup,
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
            cpModal: null,
            calendarOptions: {
              height: '80vh',
              scrollTime :  "09:00:00",
              nowIndicator: true,
              views: {
                timeGridThreeDay: {
                     type: 'timeGrid',
                     dayCount: 3,
                     buttonText: '3 day',
                     duration: { days: 3 },
                   },
              },
                  initialView: 'timeGridDay',

                plugins: [ timeGridPlugin, interactionPlugin ],
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'timeGridThreeDay,timeGridDay'
                },
                // initialView: 'timeGridWeek',
                editable: true,
                selectable: true,
                selectMirror: true,
                dayMaxEvents: true,
                weekends: true,
                dateClick: this.handleDateClick,
                eventClick: (clickData) => {
                    this.cpModal.show();

                    //TODO : add appointment info param, pass info in here based on clickData.id??? idk. Data dump happen here you cylon
                },
                //select: this.handleDateSelect,

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
    },
    methods: {
        handleDateClick: function(arg) {
            confirm('Mega test! - you clicked the date')
        },
        handleEvents(events) {
            this.currentEvents = events
        },
    }
}
</script>

<template>
  <div class="container-fluid">
    <CalendarPopup>
        <Appointment :editMode="true" :redirect="'/calendar'" :activeBack="'none'"/>
    </CalendarPopup>

    <div class="cMonthView">
        <FullCalendar :options="calendarOptions"/>
    </div>
  </div>

</template>

<style scoped>
.cMonthView {
    margin: 5%;
    padding: 2px;
}
</style>
