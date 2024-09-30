<template>
    <TreesPoster msg="Welcome to Your Vue.js App"/>
    <AppFooter />
    <MobileWarning />
</template>

<script>
import TreesPoster from './components/TreesPoster.vue'
import AppFooter from './components/AppFooter.vue'
import MobileWarning from './components/MobileWarning.vue'

export default {
    name: 'App',
    components: {
        TreesPoster,
        AppFooter,
        MobileWarning,
    }
}
</script>

<style>
body {
    margin: 0;
}
#app {
    /* font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px; */
    background-color: black;
}
</style>
