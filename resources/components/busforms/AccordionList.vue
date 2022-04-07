<template>
  
  <div class="accordion-item">
    <h2 class="accordion-header" >
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" v-bind:data-bs-target="'#collapse'+collapseId" aria-expanded="false" aria-controls="collapseId">
        {{name}}
      </button>
    </h2>
    <div v-bind:id="'collapse'+collapseId" class="accordion-collapse collapse" data-bs-parent="#anAccordion">
      <div class="accordion-body">
      <!-- TODO Update this so that it can be populated with data from the backend-->
        <div class="row text-start">
          <div class="col-2">
            <p class="card-text fw-bold">Name: </p>
            <p class="card-text fw-bold">Address: </p>
            <p class="card-text fw-bold">Phone number:</p>
            <p class="card-text fw-bold">Mobility:</p>
            <p class="card-text fw-bold">Number of cancels:</p>
            <p class="card-text fw-bold">Additional notes:</p>
          </div>
          <div class="col">
            <p class="card-text">{{name}} </p>
            <p class="card-text">{{address}} </p>
            <p class="card-text">{{phone_number}}</p>
            <p class="card-text">{{mobility}}</p>
            <p class="card-text">{{numofcancels}}</p>
            <p class="card-text">{{notes}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccordionList",
  props: {
    collapseId: { type: Number, required: true},
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone_number: { type: String, required: true },
    mobility: { type: String, required: true },
    notes: { type: String, required: false },
    numofcancels: { type: String, required: true },

  }
};
</script>
<style lang="scss" scoped>
</style>