<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
      <router-link to="/horses">Horses</router-link>
    </div> -->
    <router-link to="/login">Login </router-link>
    <router-link to="/driver">Driver </router-link>
    <router-link to="/calendar">Calendar</router-link>
    <DriverNavbar v-if="$route.meta.driver" />
    <DesktopNavbar v-else/>
    <router-view />
    <div class="footer">Brought to you by HIDE (MTU)</div>
  </div>
</template>

<script>
import DriverNavbar from '@/components/DriverNavbar.vue';
import DesktopNavbar from '@/components/DesktopNavbar.vue';

export default {
  components: {
    DriverNavbar,
    DesktopNavbar,
  },
};
</script>

<style>
html,
body {
  /* background-color: #ea9999; */
  background-color: #EFEFEF;
  min-height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.footer {
  position: absolute;
  /* bottom: 32px; */
  left: 50%;
  transform: translateX(-50%);
}
</style>
