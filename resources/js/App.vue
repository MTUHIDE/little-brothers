<script>
//import Navbar from '../components/navbar/Navbar.vue';
//require('../css/main-style.css');
import HeaderBar from '../views/header-bar.vue';
import HelloWorld from '../views/HelloWorld';
import store from './store';

export default {
  name: 'App',
  store,
  components: { HeaderBar, HelloWorld },
};
</script>

<template>
  <div id="app">
    <HeaderBar />
    <HelloWorld />
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

label {
  float: left;
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
