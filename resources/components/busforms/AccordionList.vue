<template>
  <div class="accordion" id="accordionFlushExample">
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
          {{title}}
        </button>
      </h2>
      <div
        id="flush-collapseOne"
        class="accordion-collapse collapse"
        aria-labelledby="flush-headingOne"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">{{content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccordionList",

  props: {
    title: { type: String, required: true },
    content: { type: String, required: true }
  }
};
</script>
<style lang="scss" scoped>
</style>