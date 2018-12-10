
<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>
<style >
.fade-enter-active,
.router-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.router-leave-to {
  opacity: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  height: 100%;
  color: #000 !important;
}
</style>







