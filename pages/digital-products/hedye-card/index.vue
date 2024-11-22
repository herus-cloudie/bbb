<template src="./SepehrCardPage.html"></template>
<style lang="scss" src="./SepehrCardPage.scss" scoped></style>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
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
   mounted() {
    this.GetHedyeKartSectionOne();
    this.GetHedyeKartSectionTwoTitle();
    this.GetHedyeKartSectionThirdOneRow();
    this.GetHedyeKartSectionThirdSecondRow();
    this.GetHedyeKartSectionFourthTitle();
    this.GetHedyeKartSectionFourth();
   },
  data() {
    return {
      SiteAdrs:"/Admin/",
      HedyeKartSectionOne:[],
      HedyeKartSectionTwoTitle:[],
      HedyeKartSectionThird:[],
      HedyeKartSectionThirdSecondRow:[],
      HedyeKartSectionFourthTitle:[],
      HedyeKartSectionFourth:[],
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
  methods: {
    GetHedyeKartSectionOne: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('کارت هدیه(کارت های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش اول'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.HedyeKartSectionOne = response.data.value;
        document.title="کارت هدیه بانک صادرات ایران";
      });
    },
    GetHedyeKartSectionTwoTitle: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('کارت هدیه(کارت های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش دوم متن'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.HedyeKartSectionTwoTitle = response.data.value;
      });
    },
     GetHedyeKartSectionThirdOneRow: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('کارت هدیه(کارت های بانکی)')/items?$select=Id,Title,Description,Image,Order0&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش سوم باکس'%20and%20Order0%20lt%204&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
          this.HedyeKartSectionThird= response.data.value;
      });
    },
     GetHedyeKartSectionThirdSecondRow: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('کارت هدیه(کارت های بانکی)')/items?$select=Id,Title,Description,Image,Order0&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش سوم باکس'%20and%20Order0%20gt 3&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
          this.HedyeKartSectionThirdSecondRow= response.data.value;
      });
    },
     GetHedyeKartSectionFourthTitle: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('کارت هدیه(کارت های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش چهارم عنوان'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.HedyeKartSectionFourthTitle = response.data.value;
      });
    },
       GetHedyeKartSectionFourth: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('کارت هدیه(کارت های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش چهارم'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.HedyeKartSectionFourth = response.data.value;
      });
    },
  }
})

Vue.extend({
  name: 'SepehrCardPage',
})
</script>
