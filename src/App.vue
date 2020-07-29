<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import PublicHeade from "./components/publichead";
export default {
  components: {
    PublicHeade
  }
};
</script>

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
