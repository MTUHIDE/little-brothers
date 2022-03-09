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
                headerToolbar: {
                    left: 'prev,next today',
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
          console.log("hello");
          console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" + arg.dateStr);

            // confirm('Mega test! - you clicked the date');

            let calendarApi = this.$refs.fullCalendar.getApi()
            let newDate = arg['dateStr'];
            // console.log(newDate);
            calendarApi.changeView('timeGridDay', newDate);
            // calendarApi.gotoDate(arg.date["dateStr"]);
        },
        handleEvents(events) {
            this.currentEvents = events
        },
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
</style>
