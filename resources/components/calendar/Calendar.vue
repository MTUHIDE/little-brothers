<script>
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

import { ref } from 'vue';
import CalendarPopup from './CalendarPopup.vue';

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
    CalendarPopup
  },
  data() {
        const popupTriggers = ref({
    			buttonTrigger: false
    		});
        return {
            calendarOptions: {
            plugins: [ dayGridPlugin, timeGridPlugin, interactionPlugin ],
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            initialView: 'dayGridMonth',
            // initialEvents: '/api/appointments', // Function call to database to load current viewable events
            editable: true,
            selectable: true,
            selectMirror: true,
            dayMaxEvents: true,
            weekends: true,
            dateClick: this.handleDateClick,
            //select: this.handleDateSelect,
            eventClick: this.handleEventClick,
            eventsSet: this.handleEvents,
            /* you can update a remote database when these fire:
            eventAdd:
            eventChange:
            eventRemove:
            */
            events: 'api/appointments'
            },
            popupTriggers
        }
    },
    methods: {
        handleDateClick: function(arg) {
            confirm('Mega test! - you clicked the date')
        },
        handleEventClick(clickInfo) {
            confirm(`Are you sure you want to look at the event '${clickInfo.event.title}'`)
            //popupTriggers.value[buttonTrigger] = !popupTriggers.value[buttonTrigger]
        },
        handleEvents(events) {
            this.currentEvents = events
        },
    }
}
</script>

<template>
    <div class="cMonthView">
        <FullCalendar :options="calendarOptions"/>
        <CalendarPopup
			v-if="popupTriggers.buttonTrigger"
			:TogglePopup="() => TogglePopup('buttonTrigger')"
        >
			<h2>Test Page Popup</h2>
            Hopefully one day we can be cool and this will be something special like an add appointment page or something cool because we like to be cool
		</CalendarPopup>
    </div>
</template>

<style scoped>
    .cMonthView {
        margin: 5%;
        padding: 2px;
    }
</style>
