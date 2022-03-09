<script>

import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

import { ref } from 'vue';
import { Modal } from 'bootstrap';
import CalendarPopup from './CalendarPopup.vue';
import Appointment from '../../components/busforms/Appointment.vue';

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
          this.cpModal.show();
        }
    }
}
</script>

<template>
    <CalendarPopup>
        <Appointment :editMode="true" :redirect="'/calendar'" :activeBack="'none'"/>
    </CalendarPopup>

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
