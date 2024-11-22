<template src="./internrt-bank-sepehr.html"></template>
<style lang="scss" src="./internrt-bank-sepehr.scss" scoped></style>

<script lang="ts">
import Vue from 'vue'
import HeaderComponent from "~/components/global/HeaderCompnent/HeaderComponent.vue";
import FooterComponent from "~/components/global/FooterComponent/FooterComponent.vue";
import {defineComponent} from "vue";
import GoldDivider from "~/components/Icons/gold-divider.vue";
import WhiteScrollDownIcon from "~/components/Icons/white-scroll-down.vue";
import AccordionLinkListComponent from "~/components/AccordionLinkListComponent/AccordionLinkListComponent.vue";

export default defineComponent({
  components: {
    AccordionLinkListComponent,
    WhiteScrollDownIcon,
    GoldDivider,
    HeaderComponent,
    FooterComponent
  },
  data() {
    return {
      links: [
        {
          title: 'خدمات بانکی',
          links: [
            {
              title: "اینترنت بانک سپهر",
              link: '/digital-products/sepehr-card/#'
            },
            {
              title: "تلفن بانک",
              link: '/digital-products/sepehr-card/#'
            },
            {
              title: "همراه بانک",
              link: '/digital-products/sepehr-card/#'
            },
            {
              title: "مشاهده صورتحساب",
              link: '/digital-products/sepehr-card/#'
            },
            {
              title: "پایانه فروش (POS)",
              link: '/digital-products/sepehr-card/#'
            },
            {
              title: "دستگاه خودپرداز (ATM)",
              link: '/digital-products/sepehr-card/#'
            },
            {
              title: "کیوسک بانک",
              link: '/digital-products/sepehr-card/#'
            },
            {
              title: "همبانک",
              link: '/digital-products/sepehr-card/#'
            },
            {
              title: "درگاه پرداخت اینترنتی",
              link: '/digital-products/sepehr-card/#'
            },
            {
              title: "خدمات بین بانکی شعب",
              link: '/digital-products/sepehr-card/#'
            },
            {
              title: "باجه الکترونیک شبانه روزی",
              link: '/digital-products/sepehr-card/#'
            },
            {
              title: "پایا",
              link: '/digital-products/sepehr-card/#'
            },
            {
              title: "ساتنا",
              link: '/digital-products/sepehr-card/#'
            },
            {
              title: "پل",
              link: '/digital-products/sepehr-card/#'
            },
          ]
        },
        {
          title: 'کارت ها',
          links: [
            {
              title: "سپهر کارت",
              link: '/digital-products/sepehr-card'
            },
            {
              title: "کارت اعتباری",
              link: '/digital-products/sepehr-card/#'
            },
            {
              title: "کارت اعتباری مرابحه",
              link: '/digital-products/sepehr-card/#'
            },
            {
              title: "بن کارت",
              link: '/digital-products/sepehr-card/#'
            },
            {
              title: "سپهر کارت خانواده",
              link: '/digital-products/sepehr-card/#'
            },
            {
              title: "کارت هدیه",
              link: '/digital-products/sepehr-card/#'
            },
            {
              title: "کارت مجازی",
              link: '/digital-products/sepehr-card/#'
            },
          ]
        },
        {
          title: 'آموزش بانکداری الکنرونیک',
          links: [
            {
              title: "مقدمه",
              link: '/digital-products/sepehr-card/#'
            },
            {
              title: "یانکداری از طریق تلفن همراه",
              link: '/digital-products/sepehr-card/#'
            },
            {
              title: "کارت های بانکی",
              link: '/digital-products/sepehr-card/#'
            },
          ]
        },
      ]
    }
  },
  methods: {}
})


Vue.extend({
  name: 'SepehrCardPage',
})
</script>
