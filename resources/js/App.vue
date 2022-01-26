<script>
import Navbar from './components/navbar/Navbar.vue';
require('./assets/main-style.css');

export default {
  components: {
    Navbar
  },
};
</script>

<template>
  <div id="app">
    <Navbar /> 
    <div class="main-content">
      <router-view />
    </div>
    <footer>Brought to you by HIDE (MTU)</footer>
  </div>
</template>

<style>
html,
body {
  background-color: var(--bg-color);
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
  margin-top: 100px;
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

</style>
