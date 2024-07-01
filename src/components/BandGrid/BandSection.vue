<template>
  <div :class="`${position} ${band}`">
  </div>
</template>

<script>

export default {
  name: 'HeadlinerSection',
  props: {
    band: String,
    position: String,
  }
}
</script>

<style lang="sass">
@import '../../assets/scss/styles.scss'
</style>
