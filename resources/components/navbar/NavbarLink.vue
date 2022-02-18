<script>

export default {
  props: {
    to: { type: String, required: true },
    icon: { type: String, required: false },
    text: { type: String, required: true },
    floatDir: { type: String, required: false}
  },
}
</script>

<template>
    <transition name="fade">
        <router-link type="button" class="btn btn-sm link" :to="to" :style="{ float: floatDir}" value="link">
          <span>
            <i class="icon" :class="icon" />
            {{text}}
          </span>
        </router-link>
    </transition>
</template>

<style scoped>

.link {
  display: -inline-flexbox;
  align-items: left;
  cursor: pointer;
  position: relative;
  font-weight: 400;
  user-select: none;

  margin: 0.1em;
  padding: 0.4em;
  border-radius: 0.25em;
  height:35px;

  color:  var(--nb-text-color);
  text-decoration: none;
  text-align: left;

}

.link:hover {
  background-color: var(--nb-color-hover);
}

.link.active {
  background-color: var(--nb-color-active);
}

.link .icon {
  flex-shrink: 0;
  width: 25px;
}
</style>
