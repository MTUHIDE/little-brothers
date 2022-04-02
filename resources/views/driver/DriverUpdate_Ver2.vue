<script>
import UpdateCompleteVue from '../UpdateComplete.vue';

export default {
  data() {
    return {
      //clientName: "",
      status: "",
      statusOptions: ["Select Elder", "On My Way", "Picked Up", "Dropped Off", "Complete"],
      count:"0",
      addDrivers: [],
      addClients: [],
      seletedDriver: {
        addDriverName: "",
      },
      selectedClient: {
        addClientName: "",
      },
    };
  },
  components:{
    'driver-complete': UpdateCompleteVue,
  },
  computed: {
    driverName: {
      get() {
        return this.$store.state.driverName;
      },
      set(val) {
        this.$store.commit("updateDriverName", val);
      },
    },
  },
  mounted() {
    this.getDrivers();
    this.getClients();
  },
  methods: {
    submitForm() {
      this.$axios
        .post("/api/driver/store", {
          clientName: this.clientName,
          driverName: this.driverName,
          status: this.status,
          statusOptions: this.statusOptions,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getDrivers() {
      this.$axios
        .get("/api/drivers")
        .then((driversdata) => {
          console.log(driversdata);
          this.drivers = driversdata.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getClients() {
      this.$axios
        .get("/api/clients")
        .then((clientdata) => {
          this.addClients = clientdata.data;
          console.log(this.addClients);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    selectPickUp(event){
      if(this.count == 5){
        //Should bring to log
      }
      if(this.count <= 4){
        alert(this.count);
        this.count++;
        
      }
    }
  },
};
</script>

<template>
  <div class="driver-update">
    <h1>Update</h1>
    <div class="form-grid">
      <form id="submitForm" @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="driverName" class="form-label">Driver:</label>
        <input type="text" class="form-control" v-model="driverName" id="driverName" />
        <!-- <b-form-input v-model="driverName" id="driverName" /> -->
      </div>
      
      <div class="mb-3">
        <label for="name" class="form-label">Elder: </label>
        <br/>
        <select
          id="name"
          name="name"
          class="form-select"
          v-model="selectedClient.addClientName"
          required
        >
          <option disabled>--Select an Elder--</option>
          <option
            v-for="addClientName in addClients"
            :key="addClientName.id"
            v-bind:value="addClientName.id"
          >
            {{ addClientName.client_name }}
          </option>
        </select>
      </div>
      <!-- <input
          type="text"
          class="form-control"
          v-model="clientName"
          id="clientName" />-->
      <!-- <b-form-input v-model="clientName" id="clientName" /> -->
      <div class="mb-3">
        <label for="status" class="form-label">Status Update:</label>
        <select
          class="form-select"
          v-model="status"
          :options="statusOptions"
          id="status"
        >
          <option selected>Example option</option>
        </select>
      </div>
      <b-form-select v-model="status" :options="statusOptions" id="status" /> 
      </form>
    </div>
    <div class="btn-grid">
      <button type="button" class="btn btn-primary" @click="selectPickUp()">
        <b-button>
          {{statusOptions[count]}}
        </b-button>
      </button>
  
  <!--
      <button
        type="button"
        class="btn btn-primary"
        v-for="(option, i) of statusOptions"
        :variant="status === option ? 'primary' : 'outline-primary'"
        @click="status = option"
        :key="'a' + i"
      >
        <b-button>
          {{ option }}
        </b-button>
      </button>  -->
    </div>
    
<!--Test Insert -->

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Elder</a></li>
    <li class="breadcrumb-item"><a href="#">Pick Up</a></li>
    <li class="breadcrumb-item active" aria-current="page">Dropped Off</li>
    <li class="breadcrumb-item active" aria-current="page">Complete</li>
  </ol>
</nav>


    
    <div class="save-btn-area">
      <router-link tag="button" class="btn btn-secondary" to="/driver"
        >Back</router-link
      >
      <!-- <b-button variant="secondary" to="/driver">Back</b-button> -->
      <button type="button" class="btn btn-primary">Confirm</button>
      <!-- <b-button variant="primary">Save</b-button> -->
    </div>
  </div>
</template>

<style scoped>
h1 {
  margin-top: 16px !important;
  margin-bottom: 32px !important;
}

.form-grid,
.btn-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 80%;
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 48px;
  gap: 16px;
  justify-content: center;
}
.form-grid label {
  height: 24px;
  margin: 0;
}

.form-grid {
  grid-template-columns: auto 1fr;
  max-width: 400px;
  position: relative;
}
.form-grid span {
  justify-self: right;
}
.form-grid .custom-select {
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
}

.btn-grid {
  grid-auto-rows: 64px;
}
.btn-grid button {
  height: 100%;
}
.btn-grid button:last-child:nth-last-child(odd) {
  grid-column: auto / span 2;
}

.btn-grid button:first-child:nth-last-child(even),
.btn-grid button:first-child:nth-last-child(even) ~ .box {
  grid-column: auto / span 1;
}

.save-btn-area {
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.driver-input {
  position: relative;
}
</style>
