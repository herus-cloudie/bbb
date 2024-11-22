<template src="./ShabaCalcPage.html"></template>
<style lang="scss" src="./ShabaCalcPage.scss" scoped></style>

<script lang="ts">
import Vue from 'vue'
import HeaderComponent from "~/components/global/HeaderCompnent/HeaderComponent.vue";
import FooterComponent from "~/components/global/FooterComponent/FooterComponent.vue";
import {defineComponent} from "vue";
import GoldDivider from "~/components/Icons/gold-divider.vue";

export default defineComponent({
  components: {GoldDivider, HeaderComponent, FooterComponent},
  data() {
    return {
      toggle_exclusive: 0,
      tabs: [
        'دریافت شماره شبا',
        'دریافت شماره حساب',
      ] as string[],
      selectedToggle: '',
      hesabToShaba: '',
      cardToShaba: '',
      shabaToHesab: '',
      otp: '',
      apiShabaLoading: false,
      showShabaResult: false,
      apiHesabLoading: false,
      showHesabResult: false,
    }
  },
  methods: {
    submitShaba(): void {
      this.apiShabaLoading = true;
      setTimeout(() => {
        this.showShabaResult = true;
        this.apiShabaLoading = false;
      }, 1000)
    },
    submitHesab(): void {
      this.apiHesabLoading = true;
      setTimeout(() => {
        this.showHesabResult = true;
        this.apiHesabLoading = false;
      }, 1000)
    },
  }
})


Vue.extend({
  name: 'ShabaCalcPage',
})
</script>
