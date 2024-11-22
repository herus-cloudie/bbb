<template src="./sepino/SepinoPage.html" layout="layoutSepino" ></template>
<style lang="scss" src="./sepino/SepinoPage.scss" scoped></style>
<style>
html
{
    scroll-behavior: smooth;
}
</style>
<script lang="ts">
import Vue from 'vue'
import FaqComponent from "~/components/FaqComponentSepino/FaqComponentSepino.vue";
import HeaderCompnentSepino from "~/components/global/HeaderCompnentSepino/HeaderCompnentSepino.vue";
import FooterComponent from "~/components/global/FooterComponent/FooterComponent.vue";
import {defineComponent} from "vue";
import GoldDivider from "~/components/Icons/gold-divider.vue";
import BlueScrollDownIcon from "~/components/Icons/blue-scroll-down.vue";

export default defineComponent({
  components: {BlueScrollDownIcon, GoldDivider, HeaderCompnentSepino, FooterComponent , FaqComponent},
  layout: "defaultSepino",
  data() {
    return {
      sliders: [
        'Sepino-banner.jpg'
       
      ],
      mockups: [
        'hamrah-bank-mockup.png',
        'rima-mockup.png',
        'sap-mockup.png',
      ],
      appSources: [
        {
          version: '۱۵.۶.۲',
          updatedAt: '۱۴۰۲.۰۵.۰۵',
          text: 'دریافت مستقیم نسخه اندروید',
          img: 'android.png',
          link: 'https://bsi.ir'
        },
        {
          version: '۱۵.۶.۲',
          updatedAt: '۱۴۰۲.۰۵.۰۵',
          text: 'دریافت از',
          img: 'sibche.png',
          link: 'https://bsi.ir'
        },
        {
          version: '۱۵.۶.۲',
          updatedAt: '۱۴۰۲.۰۵.۰۵',
          text: 'دریافت از',
          img: 'sibapp.png',
          link: 'https://bsi.ir'
        },
      ] as {
        version: string,
        updatedAt: string,
        text: string,
        img: string,
        link: string,
      }[]
    }
  }
})


Vue.extend({
  name: 'SepinoPage',
})
</script>
