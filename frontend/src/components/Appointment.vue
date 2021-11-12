// TODO: format the form so it looks nicer, both when editing and when saved
// TODO: fix date/time formatting when not editing
// TODO: for some reason the scrollbar keeps disappearing and reappearing, which causes the page to jump back and forth when typing, pressing buttons and selecting different options in select. This is obnoxious
// TODO: Make it so that data can be passed into the class for existing appointments.
// TODO: Style the page. its ugly as is

<template>
    <div class="appointment"> 
        <b-container>
            <!-- Top bar with back and savge/edit button -->
            <b-row>
                <b-col>
                    <b-button to="/calendar">Back</b-button>
                </b-col>
                <b-col>
                    <h1>Appointment</h1>
                </b-col>
                <b-col>
                    <b-button v-if=!editing v-on:click="editing = !editing">Edit</b-button>
                    <b-button v-if=editing v-on:click="editing = !editing">Save</b-button>
                </b-col>
            </b-row>
            <br/>


            <!-- Form -->
            <b-row>
                <b-col>
                    <b-row>
                        <b-col>
                            <label id="name">Client: </label>
                        </b-col>
                        <b-col cols="8">
                            <input v-if=editing id="name" v-model="clientName">
                            <p v-if=!editing>{{clientName}}</p>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <label id="driver">Driver: </label>
                        </b-col>
                        <b-col cols="8">
                            <select v-if=editing v-model="driverName">
                                <option disabled>--Select a Driver--</option>
                                <option>Driver 1</option>
                                <option>Driver 2</option>
                                <option>Driver 3</option>
                            </select>
                            <p v-if=!editing>{{driverName}}</p>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <label id="dateTime">Date and Time: </label>
                        </b-col>
                        <b-col cols="8">
                            <!-- TODO: fix formatting for date and time when not editing -->
                            <input v-if=editing type="datetime-local" v-model="appDate">    
                            <p v-if=!editing>{{appDate}}</p>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <label id="pickup">Pick up address: </label>
                        </b-col>
                        <b-col cols="8">
                            <textarea v-if=editing v-model="pickupAddress"></textarea>
                            <p v-if=!editing>{{pickupAddress}}</p>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <label id="dropoff">Drop off address: </label>
                        </b-col>
                        <b-col cols="8">
                            <textarea v-if=editing v-model="dropoffAddress"></textarea>
                            <p v-if=!editing>{{dropoffAddress}}</p>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <label id="notes">Notes: </label>
                        </b-col>
                        <b-col cols="8">
                            <textarea v-if=editing v-model="clientNotes"></textarea>
                            <p v-if=!editing>{{clientNotes}}</p>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
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
                clientName: ""
            }
        }
    }
</script>

<style lang="scss" scoped>
    .appointment {
        width: 75%;
        margin: auto;
    }
</style>