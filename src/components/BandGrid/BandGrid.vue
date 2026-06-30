<template>
  <div class="poster-content">
    <!-- Thursday -->
    <DayGrid
      day="Thursday"
      slug="dayOne"
      :bands="days.dayOne"
      :coHeadliner="coHeadliner.thursday"
      @open="openModal"
      @open-band-modal="openBandModal"
      :alwaysHighlight="alwaysHighlight"
      :hasPosterContent="hasPosterContent"
    />

    <!-- Friday -->
    <DayGrid
      day="Friday"
      slug="dayTwo"
      :bands="days.dayTwo"
      :coHeadliner="coHeadliner.friday"
      @open="openModal"
      @open-band-modal="openBandModal"
      :alwaysHighlight="alwaysHighlight"
      :hasPosterContent="hasPosterContent"
    />

    <!-- Saturday -->
    <DayGrid
      day="Saturday"
      slug="dayThree"
      :bands="days.dayThree"
      :coHeadliner="coHeadliner.saturday"
      @open="openModal"
      @open-band-modal="openBandModal"
      :alwaysHighlight="alwaysHighlight"
      :hasPosterContent="hasPosterContent"
    />

    <!-- Wednesday -->
    <div class="band-grid-wednesday">
      <!-- Headliner -->
    <BandSection
      class="headliner"
      position="headliner"
      @click="openModal({ slug: 'dayFour', position: 'headliner', title: 'Wednesday Headliner' })"
      :band="days.dayFour.headliner.band"
      :size="days.dayFour.headliner.size"
      :chosenImage="days.dayFour.headliner.chosenImage"
      :alwaysHighlight="alwaysHighlight"
    />

    <!-- Other 3 bands -->
    <BandSection
      v-for="(slot, i) in days.dayFour.secondRow"
      :key="`wednesday-${i}`"
      class="main-sub"
      :position="`secondRow.${i}`"
      @click="openModal({ slug: 'dayFour', position: `secondRow.${i}`, title: `Wednesday Band ${i + 1}` })"
      :band="slot.band"
      :size="slot.size"
      :chosenImage="slot.chosenImage"
      :alwaysHighlight="alwaysHighlight"
    />
    </div>

  </div>
  <!-- Modals -->
  <BandSelectModal
    v-show="isModalVisible"
    @selected="onSelect"
    @size="onResize"
    @close="closeModal"
    @coHeadliner="handleCoHeadliner"
    :title="modalTitle"
    :key="key ? key.toString() : ''"
    :hasBand="activeBand"
    :thursdayCoHeadliner="coHeadliner.thursday"
    :fridayCoHeadliner="coHeadliner.friday"
    :saturdayCoHeadliner="coHeadliner.saturday"
    :currentBand="currentBand"
    :currentImage="currentImage"
  />
  <BandListModal
    v-if="isBandListModalVisible"
    :currentBands="days[bandListSlug].additionalBands[bandListSize].bands"
    :divider="days[bandListSlug].additionalBands[bandListSize].divider"
    @close="isBandListModalVisible = false"
    @save="saveBandList"
/>
</template>

<script>
import DayGrid from "./DayGrid.vue";
import BandSelectModal from "../BandSelectModal/BandSelectModal.vue";
import BandSection from "./BandSection.vue";
import BandListModal from "../BandSelectModal/BandListModal.vue";

export default {
  name: "BandGrid",
  props: {
    alwaysHighlight: { type: Boolean, default: false },
  },
  components: { DayGrid, BandSelectModal, BandSection, BandListModal },
  data() {
    return {
      isModalVisible: false,
      modalTitle: "",
      modalPosition: null,
      modalSlug: null,
      key: 0,
      activeBand: null,
      isBandListModalVisible: false,
      bandListSlug: null,
      bandListSize: null,

      days: {
        dayOne: {
          headliner: { band: "", size: "", chosenImage: null },
          coHeadliner: { band: "", size: "", chosenImage: null },
          secondRow: [
            { band: "", size: "", chosenImage: null },
            { band: "", size: "", chosenImage: null },
            { band: "", size: "", chosenImage: null },
          ],
          thirdRow: [
            { band: "", size: "", chosenImage: null },
            { band: "", size: "", chosenImage: null },
            { band: "", size: "", chosenImage: null },
            { band: "", size: "", chosenImage: null },
          ],
        additionalBands: {
            medium: {
                bands: [],
                divider: "•",
            },

            small: {
                bands: [],
                divider: "•",
            },
        },
        },
        dayTwo: {
          headliner: { band: "", size: "", chosenImage: null },
          coHeadliner: { band: "", size: "", chosenImage: null },
          secondRow: [
            { band: "", size: "", chosenImage: null },
            { band: "", size: "", chosenImage: null },
            { band: "", size: "", chosenImage: null },
          ],
          thirdRow: [
            { band: "", size: "", chosenImage: null },
            { band: "", size: "", chosenImage: null },
            { band: "", size: "", chosenImage: null },
            { band: "", size: "", chosenImage: null },
          ],
            additionalBands: {
                medium: {
                    bands: [],
                    divider: "•",
                },

                small: {
                    bands: [],
                    divider: "•",
                },
            },
        },
        dayThree: {
          headliner: { band: "", size: "", chosenImage: null },
          coHeadliner: { band: "", size: "", chosenImage: null },
          secondRow: [
            { band: "", size: "", chosenImage: null },
            { band: "", size: "", chosenImage: null },
            { band: "", size: "", chosenImage: null },
          ],
          thirdRow: [
            { band: "", size: "", chosenImage: null },
            { band: "", size: "", chosenImage: null },
            { band: "", size: "", chosenImage: null },
            { band: "", size: "", chosenImage: null },
          ],
        additionalBands: {
        medium: {
            bands: [],
                divider: "•",
            },

            small: {
                bands: [],
                divider: "•",
            },
        },
        },
        dayFour: {
          headliner: { band: "", size: "", chosenImage: null },
          secondRow: [
            { band: "", size: "", chosenImage: null },
            { band: "", size: "", chosenImage: null },
            { band: "", size: "", chosenImage: null },
          ],
        },
      },

      coHeadliner: {
        thursday: false,
        friday: false,
        saturday: false,
      },
    };
  },
  computed: {
    currentBand() {
      return this.days[this.modalSlug]?.[this.modalPosition]?.band ?? "";
    },
    currentImage() {
      return (
        this.days[this.modalSlug]?.[this.modalPosition]?.chosenImage ?? null
      );
    },
    hasPosterContent() {
        return Object.values(this.days).some((day) => {
            if (day.headliner?.band) return true;
            if (day.coHeadliner?.band) return true;

            if (day.secondRow?.some((b) => b.band)) return true;
            if (day.thirdRow?.some((b) => b.band)) return true;

            if (day.additionalBands?.medium?.bands?.length) return true;
            if (day.additionalBands?.small?.bands?.length) return true;

            return false;
        });
    },
  },
  methods: {
    openModal({ slug, position, title }) {
      this.modalSlug = slug;
      this.modalPosition = position;
      this.modalTitle = title;
      this.key = `${slug}-${position}`;
      const slot = this.getSlot(slug, position);
      this.activeBand = !!slot.band;
      this.isModalVisible = true;
    },
    openBandModal({ slug, size }) {
        this.bandListSlug = slug;
        this.bandListSize = size;
        this.isBandListModalVisible = true;
    },

    saveBandList({ bands, divider }) {
        this.days[this.bandListSlug]
            .additionalBands[this.bandListSize] = {
                bands,
                divider,
            };

        this.isBandListModalVisible = false;
    },
    // onSelect(selected) {
    //   const slot = this.getSlot(this.modalSlug, this.modalPosition);
    //   slot.band = selected.id ?? "";
    //   slot.chosenImage = selected.chosenImage;
    // },
      onSelect(selected) {
      const slot = this.getSlot(this.modalSlug, this.modalPosition);

      if (selected.custom) {
        // custom typed band name
        slot.band = selected.name; // store the raw text
        slot.chosenImage = null; // no image
      } else {
        // normal band from assets
        slot.band = selected.id ?? "";
        slot.chosenImage = selected.chosenImage;
      }
    },
    onResize(size) {
      const slot = this.getSlot(this.modalSlug, this.modalPosition);
      slot.size = `${size}-band-logo`;
    },
    handleCoHeadliner({ day, value }) {
      if (day === "Thursday") this.coHeadliner.thursday = value;
      if (day === "Friday") this.coHeadliner.friday = value;
      if (day === "Saturday") this.coHeadliner.saturday = value;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    getSlot(slug, position) {
      const path = position.split(".");
      let slot = this.days[slug];
      for (const key of path) {
        slot = slot[key];
      }
      return slot;
    },
  },
};
</script>

<style scoped lang="scss">
@use "../../assets/scss/styles.scss";

.poster-content {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;           /* desktop: full poster height */
  box-sizing: border-box;
  padding-top: 15%;     /* aligns headliner with artwork */
  padding-bottom: 5%;
  padding-left: 6%;
  padding-right: 4%;
  border: 3px solid white;
}

.row {
  flex-grow: 1;
  display: flex;
  justify-content: center; // centers bands horizontally
}

.band-grid-wednesday {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: stretch;
  gap: 1%;
  height: 7%;
  box-sizing: border-box;
}

/* First slot (headliner) */
.band-grid-wednesday .headliner {
  width: 40%;
}

/* Remaining three slots */
.band-grid-wednesday .main-sub {
  width: 20%;
}

.band-grid-wednesday .headliner,
.band-grid-wednesday .main-sub {
  border: 1px solid transparent;  // reserve space
  box-sizing: border-box;          // include border in width/height
}

.band-grid-wednesday .headliner:hover,
.band-grid-wednesday .main-sub:hover {
  border-color: #C67D0E;
}

.band-grid-wednesday > * {
  min-width: 0;
  min-height: 0;
}

</style>
