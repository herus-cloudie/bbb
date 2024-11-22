<template src="./SetPage.html"></template>
<style lang="scss" src="./SetPage.scss" scoped></style>

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
    GetSetSectionOne: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح ست(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش اول'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.SetSectionOne = response.data.value;
        document.title = "طرح ست بانک صادرات ایران";
      });
    },
     GetSetSectionTwoImage: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح ست(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش دوم تصویر'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.SetSectionTwoImage = response.data.value;
      });
    },
      GetSetSectionTwo: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح ست(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش دوم'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.SetSectionTwo = response.data.value;
      });
    },
     GetSetSectionThreeImage: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح ست(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش سوم تصویر اول'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.SetSectionThreeImage = response.data.value;
      });
    },
    GetSetSectionThree: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح ست(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش سوم'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.SetSectionThree = response.data.value;
      });
    },
      GetSetSectionThreeImageTwo: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح ست(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش سوم تصویر دوم'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.SetSectionThreeImageTwo = response.data.value;
      });
    },
      GetSetSectionBlue: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح ست(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'کادر آبی رنگ'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.SetSectionBlue = response.data.value;
      });
    },
    GetSetTizer: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح ست(طرح های بانکی)')/items?$select=Id,Title,Description,Image,TizerLink&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'تیزر فیلم'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.SetTizer = response.data.value;
      });
    },
  },
  data() {
    return {
      SiteAdrs: "/Admin/",
      SetSectionOne:[],
      SetSectionTwoImage:[],
      SetSectionTwo:[],
      SetSectionThreeImage:[],
      SetSectionThree:[],
      SetSectionThreeImageTwo:[],
      SetSectionBlue:[],
      SetTizer:[],
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
            this.GetSetSectionOne();
    this.GetSetSectionTwoImage();
    this.GetSetSectionTwo();
    this.GetSetSectionThreeImage();
    this.GetSetSectionThree();
    this.GetSetSectionThreeImageTwo();
    this.GetSetSectionBlue();
    this.GetSetTizer();
  },
})
</script>
