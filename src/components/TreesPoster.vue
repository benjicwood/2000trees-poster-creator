<template>
    <div class="trees-poster">
        <BandGrid />
    </div>
</template>

<script>
import BandGrid from "./BandGrid/BandGrid.vue";

export default {
    name: "TreesPoster",
    components: {
        BandGrid,
    },
    props: {
        msg: String,
    },
};
</script>

<style scoped>
.trees-poster {
    background-color: black;
    background-image: url(../assets/background/trees-blank-2025.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top left;
    min-height: 1000px;
    display: flex;
    min-width: 709px;
}
</style>
