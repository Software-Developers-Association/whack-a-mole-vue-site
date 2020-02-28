<template>
  <div id="app">
    <p>Should work, but doesn't</p>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
import UnityDisplay from '../components/UnityDisplay.vue'

export default {
  name: 'AppShellView'
}

export const routes = [
  {
    path: '',
    component: HelloWorld
  },
  {
    path: 'game',
    component: UnityDisplay
  }
]
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
</style>
