<template src="./SepinoPage.html"></template>
<style lang="scss" src="./SepinoPage.scss" scoped></style>

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
      GetApplicationsSectionOne: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('سپینو')/items?$select=Id,Title,Description,Image,TxtLink&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'متن تصویر صفحه اول'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {                              
        this.ApplicationsOneSection = response.data.value;
        document.title="سپینو بانک صادرات ایران";
      });
      },
      GetApplicationsSectionTwo: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('سپینو')/items?$select=Id,Title,Description,Image,TxtLink,Noskhe,TarikhEnteshar,Hajm&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'اپلیکیشن های زیر تصویر اول ردیف یک'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {                     
        this.ApplicationsTwoSection = response.data.value;
      });
    },
    GetApplicationsSectionTwoRowTwo: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('سپینو')/items?$select=Id,Title,Description,Image,TxtLink,Noskhe,TarikhEnteshar,Hajm&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'اپلیکیشن های زیر تصویر اول ردیف دو'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.ApplicationsTwoSectionRowTwo = response.data.value;
      });
    },
     GetApplicationsSectionThree: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('سپینو')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'قسمت یک اپلیکیشن برای تمام نیازها'%20and%20Order0%20lt%204&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
            this.ApplicationsThreeSection = response.data.value;
      });
    },
        GetApplicationsSectionThreeSecondRow: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('سپینو')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'قسمت یک اپلیکیشن برای تمام نیازها'%20and%20Order0%20gt 3&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
            this.ApplicationsThreeSectionSecondRow = response.data.value;
      });
    },
    GetApplicationsSectionThreeThirdRow: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('سپینو')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'قسمت یک اپلیکیشن برای تمام نیازها ردیف سوم'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.ApplicationsThreeSectionThirdRow = response.data.value;
      });
    },
     GetApplicationsSectionFoure: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('سپینو')/items?$select=Id,Title,Description,Image,TxtLink&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'قسمت دسترسی آسان کاربری آسان'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.ApplicationsFoureSection = response.data.value;
      });
    },
      GetApplicationsSectionFive: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('سپینو')/items?$select=Id,Title,Description,Image,TxtLink&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'قسمت متن یک اپلیکیشن برای تمام نیازها'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.ApplicationsSectionFive = response.data.value;
      });
    },
       GetApplicationsSectionSix: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('سپینو')/items?$select=Id,Title,Description,Image,TxtLink&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'تصویر آخر'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.ApplicationsSectionSix = response.data.value;
      });
    },
    GetApplicationsTizer: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('سپینو')/items?$select=Id,Title,Description,Image,TizerLink&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'تیزر فیلم'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.ApplicationsTizer = response.data.value;
      });
    },
    },
  data() {
    return {
      SiteAdrs: "/Admin/",
      ApplicationsOneSection:[],
      ApplicationsTwoSection:[],
      ApplicationsTwoSectionRowTwo:[],
      ApplicationsThreeSection:[],
      ApplicationsThreeSectionThirdRow:[],                          
      ApplicationsThreeSectionSecondRow:[],
      ApplicationsFoureSection:[],
      ApplicationsSectionFive:[],
      ApplicationsSectionSix:[],
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
    this.GetApplicationsSectionOne();
    this.GetApplicationsSectionTwo();
    this.GetApplicationsSectionTwoRowTwo();
    this.GetApplicationsSectionThree();
    this.GetApplicationsSectionThreeThirdRow();
    this.GetApplicationsSectionThreeSecondRow();
    this.GetApplicationsSectionFoure();
    this.GetApplicationsSectionFive();
    this.GetApplicationsSectionSix();
    this.GetApplicationsTizer();
  },
})


Vue.extend({
  name: 'SepinoPage',
})
</script>
