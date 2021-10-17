<template>
  <div class="home">
    <img alt="Little Brothers MI logo" src="../assets/LB_logo.png" width="50%" height="50%"/>
    <h1>Welcome User!</h1>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <div style="background-color: blue"> -->
      <b-row style="background-color:white"> <!--  the arrow nav bar right above the calendar -->
    <b-col >
      <b-calendar block v-model="value" @context="onContext" locale="en-US" ></b-calendar>
    </b-col>

    <!-- stores all of the information for the date that was clicked -->
    <!-- <b-col>
      <p>Value: <b>'{{ value }}'</b></p>
      <p class="mb-0">Context:</p> -->
      <!-- <pre class="small">{{ context }}</pre>
    </b-col> --> -->
    </b-row>
    </div>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

  export default {
    data() {
      return {
        value: '',
        context: null
      }
    },
    methods: {
      onContext(ctx) {
        this.context = ctx
      }
    }
  }

</script>
