<template>
  <div id="app">
    <router-view />
  </div>
</template>

<<<<<<< Updated upstream
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
=======
<script>
import PublicHeade from "./components/publichead";
export default {
  components: {
    PublicHeade
  }
};
</script>
>>>>>>> Stashed changes

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
