<script>
  import Calendar from '../../components/calendar/Calendar.vue';

  export default {
  props: {},
  components: { Calendar },
  setup() {
    return { }
  }
}
</script>

<template>
  <div class="text-center">
    <!--img class="center" alt="LBFE logo" src="/../../../../images/LBFE_LOGOH_red_upmichigan.png" /!-->
    <Calendar/>
  </div>
</template>

<style scoped>

.align-left {
  text-align: left;
}

  .vc-whole >>> .vc-weeks {
      position: relative;
      min-height: 32px;
      gap: 1px;
      background-color: black;
      padding: 1px;
  }

/* deep selector = ">>>" */
  .vc-whole >>> .vc-day {
    background-color: white;
    height: 75px;
  }

  .center {
  margin: auto;
  }

::-webkit-scrollbar {
  width: 0px;
}

</style>
