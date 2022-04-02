<template>
  
    <div class="accordion-item">
      <h2 class="accordion-header" >
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" v-bind:data-bs-target="'#collapse'+collapseId" aria-expanded="false" aria-controls="collapseId">
          {{name}}
        </button>
      </h2>
      <div v-bind:id="'collapse'+collapseId" class="accordion-collapse collapse" data-bs-parent="#anAccordion">
        <div class="accordion-body">{{address}}+{{numofcancels}}+{{phone_number}}</div>
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