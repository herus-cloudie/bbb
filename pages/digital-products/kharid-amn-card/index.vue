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
    this.GetKharidAmnKartSectionOne();
    this.GetKharidAmnKartSectionTwoTitle();
    this.GetKharidAmnKartSectionThirdOneRow();
    this.GetKharidAmnKartSectionThirdSecondRow();
    this.GetKharidAmnKartSectionFourthTitle();
    this.GetKharidAmnKartSectionFourth();
   },
  data() {
    return {
      SiteAdrs:"/Admin/",
      KharidAmnKartSectionOne:[],
      KharidAmnKartSectionTwoTitle:[],
      KharidAmnKartSectionThird:[],
      KharidAmnKartSectionThirdSecondRow:[],
      KharidAmnKartSectionFourthTitle:[],
      KharidAmnKartSectionFourth:[],
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
    GetKharidAmnKartSectionOne: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('کارت خرید امن اینترنتی(کارت های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش اول'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.KharidAmnKartSectionOne = response.data.value;
        document.title="کارت خرید امن اینترنتی بانک صادرات ایران";
      });
    },
    GetKharidAmnKartSectionTwoTitle: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('کارت خرید امن اینترنتی(کارت های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش دوم متن'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.KharidAmnKartSectionTwoTitle = response.data.value;
      });
    },
     GetKharidAmnKartSectionThirdOneRow: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('کارت خرید امن اینترنتی(کارت های بانکی)')/items?$select=Id,Title,Description,Image,Order0&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش سوم باکس'%20and%20Order0%20lt%204&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
          this.KharidAmnKartSectionThird= response.data.value;
      });
    },
     GetKharidAmnKartSectionThirdSecondRow: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('کارت خرید امن اینترنتی(کارت های بانکی)')/items?$select=Id,Title,Description,Image,Order0&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش سوم باکس'%20and%20Order0%20gt 3&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
          this.KharidAmnKartSectionThirdSecondRow= response.data.value;
      });
    },
     GetKharidAmnKartSectionFourthTitle: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('کارت خرید امن اینترنتی(کارت های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش چهارم عنوان'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.KharidAmnKartSectionFourthTitle = response.data.value;
      });
    },
       GetKharidAmnKartSectionFourth: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('کارت خرید امن اینترنتی(کارت های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش چهارم'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.KharidAmnKartSectionFourth = response.data.value;
      });
    },
  }
})

Vue.extend({
  name: 'SepehrCardPage',
})
</script>
