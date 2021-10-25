<template>
    <b-container>
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
        <b-row>
            <b-col>
                <table>
                    <tr>
                        <th>Client Name</th>
                        <th>Driver</th>
                        <th>Date</th>
                        <th>Time</th>
                        
                    </tr>
                    <tr>
                        <th>Pickup Address</th>
                        <th>Destination Address</th>
                        <th>Notes</th>
                    </tr>
                </table>
            </b-col>
            <b-col>

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
</style>