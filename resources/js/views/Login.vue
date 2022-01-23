<template>
  <div class="login">
    <LoginCard />
  </div>
</template>

<script>
// /resources/js is an alias to /src
import LoginCard from '../components/busforms/LoginCard.vue';
export default {
  name: 'Login',
  components: {
    LoginCard,
  },
};
</script>
