<template src="./MisaghHoghooghiPage.html"></template>
<style lang="scss" src="./MisaghHoghooghiPage.scss" scoped></style>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import FaqComponent from "~/components/FaqComponent/FaqComponent.vue";
import HeaderComponent from "~/components/global/HeaderCompnent/HeaderComponent.vue";
import FooterComponent from "~/components/global/FooterComponent/FooterComponent.vue";

export default Vue.extend({
  name: 'MisaghHoghooghiPage',
  components: {FooterComponent, HeaderComponent, FaqComponent},
    methods: {
    GetMisaghHoghooghiSectionOne: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح میثاق حقوقی(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش اول'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.MisaghHoghooghiSectionOne = response.data.value;
        document.title="طرح میثاق حقوقی بانک صادرات ایران";
      });
    },
     GetMisaghHoghooghiSectionTwoImage: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح میثاق حقوقی(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش دوم تصویر'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.MisaghHoghooghiSectionTwoImage = response.data.value;
      });
    },
      GetMisaghHoghooghiSectionTwo: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح میثاق حقوقی(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش دوم'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.MisaghHoghooghiSectionTwo = response.data.value;
      });
    },
     GetMisaghHoghooghiSectionThreeImage: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح میثاق حقوقی(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش سوم تصویر اول'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.MisaghHoghooghiSectionThreeImage = response.data.value;
      });
    },
    GetMisaghHoghooghiSectionThree: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح میثاق حقوقی(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش سوم'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.MisaghHoghooghiSectionThree = response.data.value;
      });
    },
      GetMisaghHoghooghiSectionThreeImageTwo: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح میثاق حقوقی(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش سوم تصویر دوم'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.MisaghHoghooghiSectionThreeImageTwo = response.data.value;
      });
    },
     GetMisaghHoghooghiSectionBlue: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح میثاق حقوقی(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'کادر آبی رنگ'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.MisaghHoghooghiSectionBlue = response.data.value;
      });
    },

    GetMisaghHoghooghiTizer: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح میثاق حقوقی(طرح های بانکی)')/items?$select=Id,Title,Description,Image,TizerLink&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'تیزر فیلم'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.MisaghHoghooghi = response.data.value;
      });
    },

  },
  data() {
    return {
      SiteAdrs: "/Admin/",
      MisaghHoghooghiSectionOne:[],
      MisaghHoghooghiSectionTwoImage:[],
      MisaghHoghooghiSectionTwo:[],
      MisaghHoghooghiSectionThreeImage:[],
      MisaghHoghooghiSectionThree:[],
      MisaghHoghooghiSectionThreeImageTwo:[],
      MisaghHoghooghiSectionBlue:[],
      MisaghHoghooghi:[],
      tableData: [
        {
          period: '4',
          revenue: '36',
          multiply: '۸۰ درصد',
          benefit: '۱۳ درصد'
        },
        {
          period: '6',
          revenue: '36',
          multiply: '۸۰ درصد',
          benefit: '23 درصد'
        },
        {
          period: '6',
          revenue: '36',
          multiply: '۸۰ درصد',
          benefit: '18 درصد'
        },
        {
          period: '8',
          revenue: '36',
          multiply: '۸۰ درصد',
          benefit: '23 درصد'
        },
        {
          period: '4',
          revenue: '36',
          multiply: '۸۰ درصد',
          benefit: '۱۳ درصد'
        },
        {
          period: '6',
          revenue: '36',
          multiply: '۸۰ درصد',
          benefit: '23 درصد'
        },
        {
          period: '6',
          revenue: '36',
          multiply: '۸۰ درصد',
          benefit: '18 درصد'
        },
        {
          period: '8',
          revenue: '36',
          multiply: '۸۰ درصد',
          benefit: '23 درصد'
        },
      ] as {
        period: string,
        revenue: string,
        multiply: string,
        benefit: string,
      }[],
      depositValue: '',
      depositPeriod: '3',
    }
  },
  mounted() {
    this.GetMisaghHoghooghiSectionOne();
    this.GetMisaghHoghooghiSectionTwoImage();
    this.GetMisaghHoghooghiSectionTwo();
    this.GetMisaghHoghooghiSectionThreeImage();
    this.GetMisaghHoghooghiSectionThree();
    this.GetMisaghHoghooghiSectionThreeImageTwo();
    this.GetMisaghHoghooghiSectionBlue();
    this.GetMisaghHoghooghiTizer();
  },
})
</script>
