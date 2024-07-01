<template>
  <div class="band-grid-container">
      <!-- Thursday -->
      <div class="band-grid-thursday">
        <BandSection position="main-headliner" @click="openModal('thursdayHeadlinerOne', 'Thursday Headliner')" :band="bandPosition.thursdayHeadlinerOne" />
        <BandSection position="main-headliner" @click="openModal('thursdayHeadlinerTwo', 'Thursday Headliner')" :band="bandPosition.thursdayHeadlinerTwo" />
      </div>

      <div class="sub-grid">
        <BandSection position="main-sub" @click="openModal('thursdaySecondRowOne', 'Thursday Band')" :band="bandPosition.thursdaySecondRowOne" />
        <BandSection position="main-sub" @click="openModal('thursdaySecondRowTwo', 'Thursday Band')" :band="bandPosition.thursdaySecondRowTwo" />
        <BandSection position="main-sub" @click="openModal('thursdaySecondRowThree', 'Thursday Band')" :band="bandPosition.thursdaySecondRowThree" />
        <BandSection position="main-sub" @click="openModal('thursdaySecondRowFour', 'Thursday Band')" :band="bandPosition.thursdaySecondRowFour" />
        <BandSection position="main-sub" @click="openModal('thursdayThirdRowOne', 'Thursday Band')" :band="bandPosition.thursdayThirdRowOne" />
        <BandSection position="main-sub" @click="openModal('thursdayThirdRowTwo', 'Thursday Band')" :band="bandPosition.thursdayThirdRowTwo" />
        <BandSection position="main-sub" @click="openModal('thursdayThirdRowThree', 'Thursday Band')" :band="bandPosition.thursdayThirdRowThree" />
        <BandSection position="main-sub" @click="openModal('thursdayThirdRowFour', 'Thursday Band')" :band="bandPosition.thursdayThirdRowFour" />
      </div>

      <div class="input-grid">
        <BandInput size="medium" />
        <BandInput size="small" />
      </div>

      <!-- Friday -->
      <div class="band-grid-weekend">
        <BandSection position="main-headliner" @click="openModal('fridayHeadlinerOne', 'Friday Headliner')" :band="bandPosition.fridayHeadlinerOne" />
        <BandSection position="main-headliner" @click="openModal('fridayHeadlinerTwo', 'Friday Headliner')" :band="bandPosition.fridayHeadlinerTwo" />
      </div>

      <div class="sub-grid">
        <BandSection position="main-sub" @click="openModal('fridaySecondRowOne', 'Friday Band')" :band="bandPosition.fridaySecondRowOne" />
        <BandSection position="main-sub" @click="openModal('fridaySecondRowTwo', 'Friday Band')" :band="bandPosition.fridaySecondRowTwo" />
        <BandSection position="main-sub" @click="openModal('fridaySecondRowThree', 'Friday Band')" :band="bandPosition.fridaySecondRowThree" />
        <BandSection position="main-sub" @click="openModal('fridaySecondRowFour', 'Friday Band')" :band="bandPosition.fridaySecondRowFour" />
        <BandSection position="main-sub" @click="openModal('fridayThirdRowOne', 'Friday Band')" :band="bandPosition.fridayThirdRowOne" />
        <BandSection position="main-sub" @click="openModal('fridayThirdRowTwo', 'Friday Band')" :band="bandPosition.fridayThirdRowTwo" />
        <BandSection position="main-sub" @click="openModal('fridayThirdRowThree', 'Friday Band')" :band="bandPosition.fridayThirdRowThree" />
        <BandSection position="main-sub" @click="openModal('fridayThirdRowFour', 'Friday Band')" :band="bandPosition.fridayThirdRowFour" />
      </div>

      <div class="input-grid">
          <BandInput size="medium" />
          <BandInput size="small" />
      </div>

      <!-- Saturday -->
      <div class="band-grid-weekend">
        <BandSection position="main-headliner" @click="openModal('saturdayHeadlinerOne', 'Saturday Headliner')" :band="bandPosition.saturdayHeadlinerOne" />
        <BandSection position="main-headliner" @click="openModal('saturdayHeadlinerTwo', 'Saturday Headliner')" :band="bandPosition.saturdayHeadlinerTwo" />
      </div>

      <div class="sub-grid">
        <BandSection position="main-sub" @click="openModal('saturdaySecondRowOne', 'Saturday Band')" :band="bandPosition.saturdaySecondRowOne" />
        <BandSection position="main-sub" @click="openModal('saturdaySecondRowTwo', 'Saturday Band')" :band="bandPosition.saturdaySecondRowTwo" />
        <BandSection position="main-sub" @click="openModal('saturdaySecondRowThree', 'Saturday Band')" :band="bandPosition.saturdaySecondRowThree" />
        <BandSection position="main-sub" @click="openModal('saturdaySecondRowFour', 'Saturday Band')" :band="bandPosition.saturdaySecondRowFour" />
        <BandSection position="main-sub" @click="openModal('saturdayThirdRowOne', 'Saturday Band')" :band="bandPosition.saturdayThirdRowOne" />
        <BandSection position="main-sub" @click="openModal('saturdayThirdRowTwo', 'Saturday Band')" :band="bandPosition.saturdayThirdRowTwo" />
        <BandSection position="main-sub" @click="openModal('saturdayThirdRowThree', 'Saturday Band')" :band="bandPosition.saturdayThirdRowThree" />
        <BandSection position="main-sub" @click="openModal('saturdayThirdRowFour', 'Saturday Band')" :band="bandPosition.saturdayThirdRowFour" />
      </div>

      <div class="input-grid">
          <BandInput size="medium" />
          <BandInput size="small" />
      </div>

      <!-- Wednesday -->
      <div class="band-grid-wednesday">
        <BandSection position="main-third" @click="openModal('wednesdayHeadliner', 'Wednesday Headliner')" :band="bandPosition.wednesdayHeadliner" />
        <BandSection position="alt-third" @click="openModal('wednesdaySecondBand', 'Wednesday Band')" :band="bandPosition.wednesdaySecondBand" />
        <BandSection position="alt-third" @click="openModal('wednesdayThirdBand', 'Wednesday Band')" :band="bandPosition.wednesdayThirdBand" />
        <BandSection position="alt-third" @click="openModal('wednesdayFourthBand', 'Wednesday Band')" :band="bandPosition.wednesdayFourthBand" />
      </div>
  </div>
  <BandSelectModal
    v-show="isModalVisible"
    @selected="onSelect"
    @close="closeModal"
    :title="modalTitle"
    :key="key ? key.toString() : ''"
  />
</template>

<script>
import BandSection from "../BandGrid/BandSection.vue"

import BandSelectModal from "../BandSelectModal/BandSelectModal.vue"
import BandInput from "../BandGrid/BandInput.vue"

export default {
  name: 'TreesPoster',
  components: { BandSection, BandSelectModal, BandInput },
  props: {
    msg: String
  },
    data() {
      return {
          isModalVisible: false,
          modalTitle: '',
          bandPosition: {
            thursdayHeadlinerOne: '',
            thursdayHeadlinerTwo: '',
            thursdaySecondRowOne: '',
            thursdaySecondRowTwo: '',
            thursdaySecondRowThree: '',
            thursdaySecondRowFour: '',
            thursdayThirdRowOne: '',
            thursdayThirdRowTwo: '',
            thursdayThirdRowThree: '',
            thursdayThirdRowFour: '',
            fridayHeadlinerOne: '',
            fridayHeadlinerTwo: '',
            fridaySecondRowOne: '',
            fridaySecondRowTwo: '',
            fridaySecondRowThree: '',
            fridaySecondRowFour: '',
            fridayThirdRowOne: '',
            fridayThirdRowTwo: '',
            fridayThirdRowThree: '',
            fridayThirdRowFour: '',
            saturdayHeadlinerOne: '',
            saturdayHeadlinerTwo: '',
            saturdaySecondRowOne: '',
            saturdaySecondRowTwo: '',
            saturdaySecondRowThree: '',
            saturdaySecondRowFour: '',
            saturdayThirdRowOne: '',
            saturdayThirdRowTwo: '',
            saturdayThirdRowThree: '',
            saturdayThirdRowFour: '',
            wednesdayHeadliner: '',
            wednesdaySecondBand: '',
            wednesdayThirdBand: '',
            wednesdayFourthBand: '',
          },
          key: 0,
      }
    },
  methods: {
    openModal(position, title) {
        this.modalPosition = position
        this.modalTitle = title
        this.key += 1
        this.isModalVisible = true
    },
    onSelect(selected) {
    const selectedBand = selected.id
    this.bandPosition[this.modalPosition] = selectedBand
    },
    closeModal() {
        this.isModalVisible = false
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/bands.scss';
@import '../../assets/scss/styles.scss';

.band-grid-container {
  width: 705px;
}

.input-grid div:hover {
  border: solid #F1B826 1px;
}
</style>