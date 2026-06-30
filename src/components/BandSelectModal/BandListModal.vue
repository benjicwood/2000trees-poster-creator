<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        Additional Bands
        <button type="button" class="close" @click="$emit('close')">×</button>
      </header>

      <div class="modal-body">
        <div class="search-row">
            <SearchDropdown
                ref="search"
                :key="searchKey"
                :options="bands"
                :maxItem="8"
                @selected="selectBand"
                @filter="onFilter"
                placeholder="Search or type a band"
            />

            <button
                type="button"
                class="add-btn"
                :disabled="!canAddBand"
                @click="addBand"
            >
                Add Band
            </button>
        </div>

        <p class="helper">
            Search for a band, or type a custom name and press Enter to add it.
        </p>

        <div class="selected">
          <div class="selected-header">
            <h4>Selected Bands</h4>
            <span>{{ selectedBands.length }} / {{ maxBands }}</span>
          </div>

          <div v-if="selectedBands.length" class="band-chips">
            <div
              v-for="(band, index) in selectedBands"
              :key="`${band.name}-${index}`"
              class="band-chip"
            >
              <span>{{ band.name }}</span>

              <button type="button" @click="removeBand(index)">
                ×
              </button>
            </div>
          </div>

          <p v-else class="empty-state">
            No bands added yet.
          </p>
        </div>

        <div class="preview-wrap">
          <label>Preview</label>

          <div class="preview">
            {{ preview || "Your bands will appear here" }}
          </div>
        </div>
      </div>

        <footer>

            <div class="footer-left">

            <select v-model="selectedDivider">
                <option value="•">• Bullet</option>
                <option value="|">| Pipe</option>
                <option value=".">. Dot</option>
                <option value="▪">▪ Square</option>
                <option value="/">/ Slash</option>
            </select>

            </div>

            <div class="footer-right">

                <button type="button" @click="$emit('close')">
                    Cancel
                </button>

                <button
                    type="button"
                    class="confirm"
                    @click="confirm"
                >
                    Done
                </button>

            </div>

        </footer>
    </div>
  </div>
</template>

<script>
import SearchDropdown from "./SearchDropdown.vue";
import { bands } from "@benjicwood/artist-assets";

export default {
  name: "BandListModal",

  components: {
    SearchDropdown,
  },

  props: {
    currentBands: {
      type: Array,
      default: () => [],
    },

    divider: {
      type: String,
      default: "•",
    },

    maxBands: {
      type: Number,
      default: 8,
    },

    slug: {
        type: String,
        required: true,
    },

    size: {
        type: String,
        required: true,
    },
  },

  emits: ["save", "close"],

  data() {
    return {
      bands,
      typedText: "",
      pendingBand: null,
      selectedDivider: this.divider,
      selectedBands: [...this.currentBands],
      searchKey: 0,
    };
  },

  computed: {
    preview() {
      return this.selectedBands
        .map((band) => band.name.toUpperCase())
        .join(` ${this.selectedDivider} `);
    },

    customPendingBand() {
      const name = this.typedText.trim();

      if (!name) return null;

      return {
        id: null,
        name,
        custom: true,
      };
    },

    bandToAdd() {
      return this.pendingBand || this.customPendingBand;
    },

    canAddBand() {
      if (!this.bandToAdd) return false;
      if (this.selectedBands.length >= this.maxBands) return false;

      return !this.bandExists(this.bandToAdd.name);
    },
  },

  mounted() {
    this.focusSearch();

    window.addEventListener("keydown", this.handleKeydown);
  },

  beforeUnmount() {
    window.removeEventListener("keydown", this.handleKeydown);
  },

  methods: {
    onFilter(value) {
      this.typedText = value || "";

      if (!this.typedText.trim()) {
        this.pendingBand = null;
      }
    },

    selectBand(selected) {
      if (!selected || !selected.id) {
        this.pendingBand = null;
        return;
      }

      this.pendingBand = {
        id: selected.id,
        name: selected.name,
        custom: false,
      };

      this.typedText = selected.name || "";
    },

    handleKeydown(event) {
      if (event.key !== "Enter") return;

      event.preventDefault();

      if (this.canAddBand) {
        this.addBand();
      }
    },

    addBand() {
        if (!this.canAddBand) return;

        this.selectedBands.push(this.bandToAdd);

        const dayMap = {
            dayOne: "Thursday",
            dayTwo: "Friday",
            dayThree: "Saturday",
            dayFour: "Wednesday",
        };

        // Google Analytics
        if (typeof window.gtag === "function") {
            window.gtag("event", "additional_band_added", {
            band_name: this.bandToAdd.name,
            day: dayMap[this.slug] || this.slug,
            section: this.size,
            custom: this.bandToAdd.custom,
            divider: this.selectedDivider,
            value: 1,
            });
        }

        this.pendingBand = null;
        this.typedText = "";

        this.resetSearch();
    },

    removeBand(index) {
      this.selectedBands.splice(index, 1);
      this.focusSearch();
    },

    bandExists(name) {
      const normalisedName = name.trim().toUpperCase();

      return this.selectedBands.some((band) => {
        return (band.name || "").trim().toUpperCase() === normalisedName;
      });
    },

    resetSearch() {
      this.searchKey += 1;

      this.$nextTick(() => {
        this.focusSearch();
      });
    },

    focusSearch() {
      this.$nextTick(() => {
        const input = this.$refs.search?.$el?.querySelector("input");
        input?.focus();
      });
    },

    confirm() {
      this.$emit("save", {
        bands: this.selectedBands,
        divider: this.selectedDivider,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.modal-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.55);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
  box-sizing: border-box;
}

.modal {
  width: min(720px, 100%);
  max-height: calc(100vh - 2rem);
  background: #fff;
  border: 2px solid #711214;
  border-radius: 10px;
  font-family: "Soleil", sans-serif;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.modal-header {
  position: relative;
  padding: 1rem 3rem 1rem 1.5rem;
  border-bottom: 1px solid #711214;
  background-color: #e5f5f4;
  color: rgb(60, 54, 54);
  font-weight: 700;
  text-align: center;
  flex-shrink: 0;
}

.close {
  position: absolute;
  top: 0.45rem;
  right: 0.75rem;
  border: none;
  background: transparent;
  color: rgb(60, 54, 54);
  font-size: 1.7rem;
  font-weight: 700;
  cursor: pointer;
}

.modal-body {
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  color: #222;
  overflow-y: auto;
}

.helper {
  margin: -0.35rem 0 0;
  color: #666;
  font-size: 0.85rem;
}

.controls-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: end;
  gap: 0.75rem;
}

.divider-select {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.divider-select label,
.preview-wrap label {
  font-weight: 700;
  color: #222;
}

.divider-select select {
  padding: 0.6rem;
  border: 1px solid #bbb;
  border-radius: 6px;
}

.add-btn {
  height: 46px;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background: #711214;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 700;
  white-space: nowrap;
}

.add-btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.selected {
  border-top: 1px solid #ddd;
  padding-top: 0.75rem;
}

.selected-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.65rem;

  h4 {
    margin: 0;
    color: #222;
  }

  span {
    color: #666;
    font-size: 0.9rem;
    white-space: nowrap;
  }
}

.band-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  max-height: 120px;
  overflow-y: auto;
  padding-right: 0.2rem;
}

.band-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: #711214;
  color: white;
  padding: 0.45rem 0.7rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  max-width: 100%;

  span {
    overflow-wrap: anywhere;
  }

  button {
    border: none;
    background: transparent;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    line-height: 1;
    padding: 0;
  }
}

.empty-state {
  margin: 0;
  color: #777;
  font-size: 0.9rem;
}

.preview-wrap {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.preview {
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  border: 2px dashed #c67d0e;
  border-radius: 6px;
  background: #fafafa;
  color: #111;
  font-family: "Soleil", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  overflow-wrap: anywhere;
}

footer {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem 1rem;
  border-top: 1px solid #ddd;
  flex-shrink: 0;
}

footer button {
  border: 1px solid #ddd;
  background: white;
  color: #222;
  padding: 0.7rem 1rem;
  border-radius: 6px;
  cursor: pointer;
}

footer .confirm {
  border-color: green;
  background: green;
  color: white;
}

:deep(.dropdown) {
  width: 100%;
  height: auto;
  margin: 0;
}

:deep(.dropdown-toggle) {
  width: 100%;
}

:deep(.dropdown-toggle input) {
  width: 100%;
  box-sizing: border-box;
  height: 46px;
  padding: 0 0.75rem;
  font: inherit;
}

.search-row {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: .75rem;
    align-items: start;
}

.footer-left {
    display: flex;
    align-items: center;
    gap: .5rem;

    label {
        font-weight: 700;
        white-space: nowrap;
    }

    select {
        padding: .55rem .75rem;
        border-radius: 6px;
        border: 1px solid #bbb;
    }
}

.footer-left select {
    min-width: 110px;
    padding: .55rem .75rem;
    border-radius: 6px;
    border: 1px solid #bbb;
}

.footer-right {
    display: flex;
    gap: .5rem;
}

footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: .8rem 1.5rem 1rem;

    border-top: 1px solid #ddd;
}

@media (max-width:768px){

    .search-row{
        grid-template-columns:1fr;
    }

    footer{
        flex-direction:column;
        gap:1rem;
        align-items:stretch;
    }

    .footer-left,
    .footer-right{
        width:100%;
        justify-content:space-between;
    }

    .footer-right button{
        flex:1;
    }

}
</style>