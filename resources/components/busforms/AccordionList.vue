<template>
  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingOne">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseOne"
          aria-expanded="false"
          aria-controls="flush-collapseOne"
        >
          {{name}}
        </button>
      </h2>
      <div
        id="flush-collapseOne"
        class="accordion-collapse collapse"
        aria-labelledby="flush-headingOne"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">{{client_address}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccordionList",

  props: {
    name: { type: String, required: true },
    client_address: { type: String, required: true }
  }
};
</script>
<style lang="scss" scoped>
</style>