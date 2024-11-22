<template src="./CheqnowPage.html"></template>
<style lang="scss" src="./CheqnowPage.scss" scoped></style>

<script lang="ts">
import Vue from 'vue'
import HeaderComponent from "~/components/global/HeaderCompnent/HeaderComponent.vue";
import FooterComponent from "~/components/global/FooterComponent/FooterComponent.vue";
import {defineComponent} from "vue";
import GoldDivider from "~/components/Icons/gold-divider.vue";
import BlueScrollDownIcon from "~/components/Icons/blue-scroll-down.vue";
import axios from 'axios';

export default defineComponent({
  components: {BlueScrollDownIcon, GoldDivider, HeaderComponent, FooterComponent},
    methods: {
      GetCheqnowSectionOne: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('چکنو')/items?$select=Id,Title,Description,Image,TxtLink&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'متن تصویر صفحه اول'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {                                      
        this.CheqnowOneSection = response.data.value;
        document.title="چکنو بانک صادرات ایران";
      });
      },
      GetCheqnowSectionTwo: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('چکنو')/items?$select=Id,Title,Description,Image,TxtLink,Noskhe,TarikhEnteshar,Hajm&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'اپلیکیشن های زیر تصویر اول'&$orderby=Order0";
        axios.get(endPointUrl).then((response) => {       
        this.CheqnowTwoSection = response.data.value;
      });
    },
     GetCheqnowSectionThree: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('چکنو')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'قسمت یک اپلیکیشن برای تمام نیازها'%20and%20Order0%20lt%204&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
            this.CheqnowThreeSection = response.data.value;
      });
    },
        GetCheqnowSectionThreeSecondRow: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('چکنو')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'قسمت یک اپلیکیشن برای تمام نیازها'%20and%20Order0%20gt 3&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
            this.CheqnowThreeSectionSecondRow = response.data.value;
      });
    },
     GetCheqnowSectionFoure: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('چکنو')/items?$select=Id,Title,Description,Image,TxtLink&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'قسمت دسترسی آسان کاربری آسان'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.CheqnowFoureSection = response.data.value;
      });
    },
      GetCheqnowSectionFive: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('چکنو')/items?$select=Id,Title,Description,Image,TxtLink&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'قسمت متن یک اپلیکیشن برای تمام نیازها'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.CheqnowSectionFive = response.data.value;
      });
    },
       GetCheqnowSectionSix: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('چکنو')/items?$select=Id,Title,Description,Image,TxtLink&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'تصویر آخر'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.CheqnowSectionSix = response.data.value;
      });
    },
    GetApplicationsTizer: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('چکنو')/items?$select=Id,Title,Description,Image,TizerLink&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'تیزر فیلم'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.ApplicationsTizer = response.data.value;
      });
    },

    },
  data() {
    return {
      SiteAdrs: "/Admin/",
      CheqnowOneSection:[],
      CheqnowTwoSection:[],
      CheqnowThreeSection:[],
      CheqnowThreeSectionSecondRow:[],        
      CheqnowFoureSection:[],
      CheqnowSectionFive:[],
      CheqnowSectionSix:[],
      ApplicationsTizer:[],
      sliders: [
        'hamrah-bank-banner.png',
        'hamrah-bank-banner.png',
        'hamrah-bank-banner.png'
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
          text: 'دریافت وب اپ',
          img: 'pwa.png',
          link: 'https://bsi.ir'
        },
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
          img: 'bazaar.svg',
          link: 'https://bsi.ir'
        },
        {
          version: '۱۵.۶.۲',
          updatedAt: '۱۴۰۲.۰۵.۰۵',
          text: 'دریافت از',
          img: 'sibapp.png',
          link: 'https://bsi.ir'
        },
        {
          version: '۱۵.۶.۲',
          updatedAt: '۱۴۰۲.۰۵.۰۵',
          text: 'دریافت از',
          img: 'anardoni.png',
          link: 'https://bsi.ir'
        },
        {
          version: '۱۵.۶.۲',
          updatedAt: '۱۴۰۲.۰۵.۰۵',
          text: 'دریافت از',
          img: 'sibirani.png',
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
          img: 'sibank.png',
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
  },
   mounted() {
    this.GetCheqnowSectionOne();
    this.GetCheqnowSectionTwo();
    this.GetCheqnowSectionThree();
    this.GetCheqnowSectionThreeSecondRow();
    this.GetCheqnowSectionFoure();
    this.GetCheqnowSectionFive();
    this.GetCheqnowSectionSix();
    this.GetApplicationsTizer();
  },
})


Vue.extend({
  name: 'CheqnowPage',
})
</script>
