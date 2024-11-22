<template src="./SabaSepehrPage.html"></template>
<style lang="scss" src="./SabaSepehrPage.scss" scoped></style>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import FaqComponent from "~/components/FaqComponent/FaqComponent.vue";
import HeaderComponent from "~/components/global/HeaderCompnent/HeaderComponent.vue";
import FooterComponent from "~/components/global/FooterComponent/FooterComponent.vue";

export default Vue.extend({
  name: 'SabaSepehrPage',
  components: {FooterComponent, HeaderComponent, FaqComponent},
     methods: {
    GetSabaSepehrSectionOne: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح صبا سپهر(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش اول'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.SabaSepehrSectionOne = response.data.value;
        document.title="طرح صبا سپهر بانک صادرات ایران";
      });
    },
     GetSabaSepehrSectionTwoImage: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح صبا سپهر(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش دوم تصویر'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.SabaSepehrSectionTwoImage = response.data.value;
      });
    },
      GetSabaSepehrSectionTwo: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح صبا سپهر(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش دوم'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.SabaSepehrSectionTwo = response.data.value;
      });
    },
     GetSabaSepehrSectionThreeImage: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح صبا سپهر(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش سوم تصویر اول'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.SabaSepehrSectionThreeImage = response.data.value;
      });
    },
    GetSabaSepehrSectionThree: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح صبا سپهر(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش سوم'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.SabaSepehrSectionThree = response.data.value;
      });
    },
      GetSabaSepehrSectionThreeImageTwo: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح صبا سپهر(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش سوم تصویر دوم'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.SabaSepehrSectionThreeImageTwo = response.data.value;
      });
    },
      GetSabaSepehrSectionBlue: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح صبا سپهر(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'کادر آبی رنگ'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.SabaSepehrSectionBlue = response.data.value;
      });
    },

    GetSabaSepehrTizer: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح صبا سپهر(طرح های بانکی)')/items?$select=Id,Title,Description,Image,TizerLink&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'تیزر فیلم'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.SabaSepehrTizer = response.data.value;
      });
    },

  },
  data() {
    return {
        SiteAdrs: "/Admin/",
      SabaSepehrSectionOne:[],
      SabaSepehrSectionTwoImage:[],
      SabaSepehrSectionTwo:[],
      SabaSepehrSectionThreeImage:[],
      SabaSepehrSectionThree:[],
      SabaSepehrSectionThreeImageTwo:[],
      SabaSepehrSectionBlue:[],
      SabaSepehrTizer:[],
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
    this.GetSabaSepehrSectionOne();
    this.GetSabaSepehrSectionTwoImage();
    this.GetSabaSepehrSectionTwo();
    this.GetSabaSepehrSectionThreeImage();
    this.GetSabaSepehrSectionThree();
    this.GetSabaSepehrSectionThreeImageTwo();
    this.GetSabaSepehrSectionBlue();
    this.GetSabaSepehrTizer();
  },
})
</script>
