<template>
    <div>
        <b-row>
            <b-col>
                <appointment></appointment>
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