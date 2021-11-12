// TODO: Create the client page to sit next to the appointments

<template>
    <div>
        <b-row>
            <b-col>
                <Appointment :editMode="true"></Appointment>
            </b-col>
        </b-row>
    </div>
</template>


<script>
    import Appointment from '@/components/Appointment.vue';

    export default {
        components: {
            Appointment,
        },
    }
</script>

<style lang="scss" scoped>

</style>