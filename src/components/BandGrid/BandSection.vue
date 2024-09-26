<template>
  <div :class="`${position} ${band} ${band && size ? size : ''}`">
  </div>
</template>

<script>

export default {
  name: 'HeadlinerSection',
    props: {
        band: String,
        position: String,
        size: String,
    }
}
</script>

<style lang="sass">
@import '../../assets/scss/styles.scss'
</style>
