<template>
    <div class="trees-poster">
        <BandGrid />
        <!-- <SidePanel /> -->
    </div>
</template>

<script>
import BandGrid from "./BandGrid/BandGrid.vue";
// import SidePanel from "./SidePanel.vue";

export default {
    name: "TreesPoster",
    components: {
        BandGrid,
        // SidePanel
    },
    props: {
        msg: String,
    },
};
</script>

<style scoped>
.trees-poster {
    background-color: black;
    background-image: url(../assets/background/trees-blank-2026-feb-17-25.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top left;
    min-height: 1000px;
    display: flex;
    min-width: 709px;
}
</style>
