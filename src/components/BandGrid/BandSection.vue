<template>
  <div :class="[position, size, 'band-slot', { 'always-highlight': alwaysHighlight }]" :style="bandStyle" @click="$emit('click')">
    <span v-if="!bandStyle.backgroundImage && band" class="band-text">{{ band }}</span>
  </div>
</template>

<script>
import { bands } from "@benjicwood/artist-assets";

export default {
  name: "BandSection",
  props: {
    band: String,
    position: String,
    size: String,
    chosenImage: String,
    alwaysHighlight: { type: Boolean, default: false },
  },
  computed: {
    bandData() {
      return bands.find((b) => b.id === this.band) || null;
    },
    bandStyle() {
      const img = this.chosenImage || this.bandData?.logo;
      if (img) {
        return {
          backgroundImage: `url(${img})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        };
      }
      return {};
    },
  },
};
</script>

<style scoped lang="scss">
.band-slot {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  min-width: 0;
  min-height: 0;
  box-sizing: border-box;
  padding: 0.25rem 0.4rem;
}

.band-text {
  position: absolute;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0.15em 0.3em;

  color: white;
  font-family: 'Impact', sans-serif;
  line-height: 0.95;
  text-align: center;

  overflow: hidden;
  word-break: break-word;
  overflow-wrap: anywhere;

  /* default / fallback size */
  font-size: clamp(0.7rem, 1.2vw, 1.2rem);
}

.main-headliner .band-text,
.headliner .band-text {
  font-size: clamp(1.2rem, 3vw, 3rem);
}

.main-sub .band-text {
  font-size: clamp(0.75rem, 1.6vw, 1.5rem);
}

.always-highlight {
  border: solid #C67D0E 1px !important;
}
</style>
