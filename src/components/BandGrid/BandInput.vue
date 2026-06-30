<template>
  <div
    class="band-input"
    @click="$emit('click')"
  >
    <span
      :class="[
        'band-input-text',
        size,
        { placeholder: !hasBands }
      ]"
    >
      {{ displayText }}
    </span>
  </div>
</template>

<script>
export default {
  name: "BandInput",

  props: {
    value: {
      type: Object,
      required: true,
    },

    size: {
      type: String,
      default: "medium",
    },

    hasPosterContent: {
    type: Boolean,
    default: false,
  },
  },

  emits: ["click"],

  computed: {
    hasBands() {
      return this.value?.bands?.length > 0;
    },

    displayText() {
        if (!this.hasBands) {
            return this.hasPosterContent ? "" : "Click to add bands";
        }

        return this.value.bands
            .map((band) => band.name.toUpperCase())
            .join(` ${this.value.divider} `);
        },
  },
};
</script>

<style scoped>
.band-input {
  width: 100%;
  border: 1px solid transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.band-input:hover {
  border-color: #C67D0E;
}

.band-input-text {
  width: 100%;
  text-align: center;
  color: white;
  font-family: "Soleil", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  user-select: none;
}

.placeholder {
  opacity: .5;
}

.medium {
  font-size: 15px;
  min-height: 20px;
}

.small {
  font-size: 12px;
  min-height: 13px;
}
</style>