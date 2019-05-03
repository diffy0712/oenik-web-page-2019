<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import NavBar from '@/components/NavBar.vue'; // @ is an alias to /src

  @Component({
    components: {
      NavBar,
    },
  })
  export default class Home extends Vue {}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Anton');
#app {
  font-family: 'Anton', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
