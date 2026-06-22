<template>
    <!-- <TreesPoster msg="Welcome to Your Vue.js App"/> -->
     <router-view />
    <!-- <AppFooter />
    <MobileWarning /> -->
</template>

<script>
// import AppFooter from './components/AppFooter.vue'
// import MobileWarning from './components/MobileWarning.vue'

export default {
    name: 'App',
}
</script>

<style>
.app {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  /* background-image: url(./assets/background/trees-blank-2026-feb-17-25.png); */
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top center;
  padding: 0.5rem;
  box-sizing: border-box;
}
/* Make the app fill the viewport */
</style>
