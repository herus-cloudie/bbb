<template src="./WithdrawalPage.html"></template>
<style lang="scss" src="./WithdrawalPage.scss" scoped></style>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import FaqComponent from "~/components/FaqComponent/FaqComponent.vue";
import HeaderComponent from "~/components/global/HeaderCompnent/HeaderComponent.vue";
import FooterComponent from "~/components/global/FooterComponent/FooterComponent.vue";

export default Vue.extend({
  name: 'WithdrawalPage',
  components: {FooterComponent, HeaderComponent, FaqComponent},
   methods: {
    GetBardashtVajhSectionOne: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح برداشت وجه(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش اول'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.BardashtVajhSectionOne = response.data.value;
        document.title="طرح برداشت وجه بانک صادرات ایران";
      });
    },
     GetBardashtVajhSectionTwoImage: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح برداشت وجه(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش دوم تصویر'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.BardashtVajhSectionTwoImage = response.data.value;
      });
    },
      GetBardashtVajhSectionTwo: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح برداشت وجه(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش دوم'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.BardashtVajhSectionTwo = response.data.value;
      });
    },
     GetBardashtVajhSectionThreeImage: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح برداشت وجه(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش سوم تصویر اول'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.BardashtVajhSectionThreeImage = response.data.value;
      });
    },
    GetBardashtVajhSectionThree: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح برداشت وجه(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش سوم'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.BardashtVajhSectionThree = response.data.value;
      });
    },
      GetBardashtVajhSectionThreeImageTwo: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح برداشت وجه(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش سوم تصویر دوم'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.BardashtVajhSectionThreeImageTwo = response.data.value;                        
      });
    },
      GetBardashtVajhSectionBlue: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح برداشت وجه(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'کادر آبی رنگ'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.BardashtVajhSectionBlue = response.data.value;
      });
    },

    GetBardashtVajhTizer: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح برداشت وجه(طرح های بانکی)')/items?$select=Id,Title,Description,Image,TizerLink&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'تیزر فیلم'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.BardashtVajhTizer = response.data.value;
      });
    },

  },
  data() {
    return {
      SiteAdrs: "/Admin/",
      BardashtVajhSectionOne:[],
      BardashtVajhSectionTwoImage:[],
      BardashtVajhSectionTwo:[],
      BardashtVajhSectionThreeImage:[],                                              
      BardashtVajhSectionThree:[],
      BardashtVajhSectionThreeImageTwo:[],
      BardashtVajhSectionBlue:[],
      BardashtVajhTizer:[],
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
    this.GetBardashtVajhSectionOne();
    this.GetBardashtVajhSectionTwoImage();
    this.GetBardashtVajhSectionTwo();
    this.GetBardashtVajhSectionThreeImage();
    this.GetBardashtVajhSectionThree();
    this.GetBardashtVajhSectionThreeImageTwo();
    this.GetBardashtVajhSectionBlue();
    this.GetBardashtVajhTizer();
  },
})
</script>
