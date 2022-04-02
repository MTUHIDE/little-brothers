<template>
  
    <div class="accordion-item">
      <h2 class="accordion-header" >
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          v-bind:data-bs-target="'#a'+collapseId"
          aria-expanded="false"
          aria-controls="collapseId"
        >
          {{name}}
        </button>
      </h2>
      <div
        v-bind:id="'a'+collapseId"
        class="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">{{client_address}}</div>
      </div>
    </div>
  
</template>

<script>
export default {
  name: "AccordionList",
  props: {
    headingId: { type: Number, required: true},
    collapseId: { type: Number, required: true},
    name: { type: String, required: true },
    client_address: { type: String, required: true }
  }
};
</script>
<style lang="scss" scoped>
</style>