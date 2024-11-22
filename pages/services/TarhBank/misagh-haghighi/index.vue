<template src="./MisaghHaghighiPage.html"></template>
<style lang="scss" src="./MisaghHaghighiPage.scss" scoped></style>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import FaqComponent from "~/components/FaqComponent/FaqComponent.vue";
import HeaderComponent from "~/components/global/HeaderCompnent/HeaderComponent.vue";
import FooterComponent from "~/components/global/FooterComponent/FooterComponent.vue";

export default Vue.extend({
  name: 'MisaghHaghighiPage',
  components: {FooterComponent, HeaderComponent, FaqComponent},
    methods: {
    GetMisaghHaghighiSectionOne: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح میثاق حقیقی(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش اول'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.MisaghHaghighiSectionOne = response.data.value;
        document.title="طرح میثاق حقیقی بانک صادرات ایران";
      });
    },
     GetMisaghHaghighiSectionTwoImage: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح میثاق حقیقی(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش دوم تصویر'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.MisaghHaghighiSectionTwoImage = response.data.value;
      });
    },
      GetMisaghHaghighiSectionTwo: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح میثاق حقیقی(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش دوم'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.MisaghHaghighiSectionTwo = response.data.value;
      });
    },
     GetMisaghHaghighiSectionThreeImage: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح میثاق حقیقی(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش سوم تصویر اول'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.MisaghHaghighiSectionThreeImage = response.data.value;
      });
    },
    GetMisaghHaghighiSectionThree: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح میثاق حقیقی(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش سوم'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.MisaghHaghighiSectionThree = response.data.value;
      });
    },
      GetMisaghHaghighiSectionThreeImageTwo: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح میثاق حقیقی(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش سوم تصویر دوم'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.MisaghHaghighiSectionThreeImageTwo = response.data.value;
      });
    },
     GetMisaghHaghighiSectionBlue: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح میثاق حقیقی(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'کادر آبی رنگ'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.MisaghHaghighiSectionBlue = response.data.value;
      });
    },

    GetMisaghHaghighiTizer: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح میثاق حقیقی(طرح های بانکی)')/items?$select=Id,Title,Description,Image,TizerLink&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'تیزر فیلم'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.MisaghHaghighiTizer = response.data.value;
      });
    },

  },
  data() {
    return {
        SiteAdrs: "/Admin/",
      MisaghHaghighiSectionOne:[],
      MisaghHaghighiSectionTwoImage:[],
      MisaghHaghighiSectionTwo:[],
      MisaghHaghighiSectionThreeImage:[],
      MisaghHaghighiSectionThree:[],
      MisaghHaghighiSectionThreeImageTwo:[],
      MisaghHaghighiSectionBlue:[],
      MisaghHaghighiTizer:[],
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
    this.GetMisaghHaghighiSectionOne();
    this.GetMisaghHaghighiSectionTwoImage();
    this.GetMisaghHaghighiSectionTwo();
    this.GetMisaghHaghighiSectionThreeImage();
    this.GetMisaghHaghighiSectionThree();
    this.GetMisaghHaghighiSectionThreeImageTwo();
    this.GetMisaghHaghighiSectionBlue();
    this.GetMisaghHaghighiTizer();
  },
})
</script>
