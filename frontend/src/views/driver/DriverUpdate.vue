<template>
  <div class="driver-update">
    <h1>Update</h1>
    <div class="form-grid">
      <span>Driver Name</span>
      <input v-model="driverName" />
      <span>Client Name</span>
      <input v-model="clientName" />
      <span>Status Update</span>
      <select v-model="status">
        <option disabled selected />
        <option v-for="(option, i) of options" :value="option" :key="i">{{ option }}</option>
      </select>
    </div>
    <div class="btn-grid">
      <b-button
        :variant="status === option ? 'primary' : 'outline-primary'"
        @click="status = option"
        v-for="(option, i) of options"
        :key="'a' + i"
      >
        {{ option }}
      </b-button>
    </div>
    <div class="save-btn-area">
      <b-button variant="secondary">Back</b-button>
      <b-button variant="primary">Save</b-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clientName: '',
      status: '',
      options: ['Picked Up', 'Dropped Off', 'On My Way'],
    };
  },
  computed: {
    driverName: {
      get() {
        return this.$store.state.driverName;
      },
      set(val) {
        this.$store.commit('updateDriverName', val);
      },
    },
  },
};
</script>

<style scoped>
.driver-update {
  width: 80%;
  margin: 0 auto;
}
h1 {
  margin-top: 16px !important;
  margin-bottom: 32px !important;
}

.form-grid,
.btn-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 48px;
  gap: 16px;
  justify-content: center;
}

.form-grid {
  grid-template-columns: auto 1fr;
  width: 50%;
}
.form-grid span {
  justify-self: right;
}

.btn-grid {
  grid-auto-rows: 64px;
}
.btn-grid > button:last-child:nth-last-child(odd) {
  grid-column: auto / span 2;
}

.btn-grid > button:first-child:nth-last-child(even),
.btn-grid > button:first-child:nth-last-child(even) ~ .box {
  grid-column: auto / span 1;
}

.save-btn-area {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
</style>
