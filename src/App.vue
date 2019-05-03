<template lang="pug">
  div#app
    nav-bar
    router-view
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
@import 'assets/css/simple';

@import url('https://fonts.googleapis.com/css?family=Montserrat');
#app {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
