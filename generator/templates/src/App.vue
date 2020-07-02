<template>
  <div id="app">
    <VAlert>Hey, I'm an alert!</VAlert>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
<%_ if (preset === 'local') { _%>
import { VAlert } from 'vuetensils'
<%_ } _%>

export default {
  name: 'App',
<%_ if (preset === 'local') { _%>
  components: {
    VAlert,
    HelloWorld
  },
<%_ } else { _%>
  components: {
    HelloWorld
  }
<%_ } _%>
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.vts-alert {
  border: 1px solid currentColor;
  border-radius: 4px;
  padding: 0 10px;
  color: #900;
  background: #fdd;
}
</style>
