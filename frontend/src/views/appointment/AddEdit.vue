<template>
    <b-container>
        <!-- Row with back, header and save  -->
        <b-row>
            <b-col>
                <button>Back</button>
            </b-col>
            <b-col>
                <h3>Add/Edit Appointments</h3>
            </b-col>
            <b-col>
                <button>Save</button>
            </b-col>
        </b-row>

        <!-- Row for form and client information columns -->
        <b-row>
            <b-col>
                <form name="Appointment">
                    <b-form-row>
                        <div class="col-25">
                            <label for="cname">Client Name</label>
                        </div>
                        <div class="col-75">
                            <input id="cname" v-model="clientName">    
                        </div>
                    </b-form-row>
                    <b-form-row>
                       <div class="col-25">
                            <label for="driver">Driver</label>
                        </div>
                        <div class="col-75">
                            <select id="driver">
                            <option value="SelectDriver" disabled=true selected>--Select A Driver--</option>
                            <option value="Driver 1">Driver One</option>
                            <option value="Driver 2">Driver Two</option>
                            </select>
                        </div>
                    </b-form-row>
                    <b-form-row>
                        <div class="col-25">
                            <label for="datetime">Date/Time</label>
                        </div>
                        <div class="col-75">
                            <input id="datetime" type="datetime-local" >  
                        </div>
                    </b-form-row>
                    <b-form-row>
                        <div class="col-25">
                            <label for="pickup">Pickup Address</label>
                        </div>
                        <div class="col-75">
                            <textarea id="pickup"></textarea>
                        </div>
                    </b-form-row>
                    <b-form-row>
                        <div class="col-25">
                            <label for="dropoff">Dropoff Address</label>
                        </div>
                        <div class="col-75">
                            <textarea id="dropoff"></textarea>                    
                        </div>
                    </b-form-row>
                    <b-form-row>
                        <div class="col-25">
                            <label for="extranotes">Addititonal Notes</label>
                        </div>
                        <div class="col-75">
                            <textarea id="extranotes"></textarea>
                        </div>
                    </b-form-row>
                </form>

            </b-col>

            <b-col>
                <p>Client Info Here</p>
            </b-col>
        </b-row>

    </b-container>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
.container {
  margin-top: 64px;
}
.row {
  margin-top: 32px;
}
label {
    display: inline-block;
}
input, select, textarea {
    width: 100%;
    box-sizing: border-box;
}

.col-25 {
    float: left;
    text-align: left;
    width: 25%;
}
.col-75 {
    float: left;
    width: 75%;
}

</style>