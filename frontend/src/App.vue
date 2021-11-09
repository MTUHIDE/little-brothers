<template>
  <div id="app">
    <div class="main-content">
      <!-- <div id="nav">
      <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
      <router-link to="/horses">Horses</router-link>
    </div> -->
      <router-link to="/login">Login </router-link>
      <router-link to="/driver">Driver </router-link>
      <router-link to="/calendar">Calendar</router-link>
      <DriverNavbar v-if="$route.meta.driver" />
      <router-view />
    </div>
    <footer>Brought to you by HIDE (MTU)</footer>
  </div>
</template>

<script>
import DriverNavbar from '@/components/DriverNavbar.vue';

export default {
  components: {
    DriverNavbar,
  },
};
</script>

<style>
html,
body {
  /* background-color: #ea9999; */
  background-color: #efefef;
  min-height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main-content {
  min-height: 100%;
  margin-bottom: -32px;
}
.main-content:after {
  content: '';
  display: block;
}
footer,
.main-content:after {
  height: 32px;
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

/* .footer {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 100px;
} */
</style>
