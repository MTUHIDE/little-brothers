<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  props: {
    to: { type: String, required: true },
    icon: { type: String, required: false },
    floatDir: { type: String, required: false}
  },
  setup(props) {
    const route = useRoute()
    const isActive = computed(() => route.path === props.to)
    return { isActive }
  }
}
</script>

<template>
    <transition name="fade">
      <span>
        <router-link :to="to" class="link" :class="{ active: isActive }" :style="{ float: floatDir }">
          <i class="icon" :class="icon" />
          <slot />
        </router-link>
      </span>
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
  padding-right: 1.0em;
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
  margin-right: 10px;
}
</style>