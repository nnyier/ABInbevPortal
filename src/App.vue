<template>
  <div id="app">
    <index-header></index-header>
    <router-view></router-view>
  </div>
</template>

<script>
import IndexHeader from "../src/components/header/header";
export default {
  name: "App",
  components: {
    IndexHeader
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
#app {
  font-family: Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 50px;
}
</style>
