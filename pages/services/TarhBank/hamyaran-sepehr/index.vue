<template src="./HamyaranSepehrPage.html"></template>
<style lang="scss" src="./HamyaranSepehrPage.scss" scoped></style>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import FaqComponent from "~/components/FaqComponent/FaqComponent.vue";
import HeaderComponent from "~/components/global/HeaderCompnent/HeaderComponent.vue";
import FooterComponent from "~/components/global/FooterComponent/FooterComponent.vue";

export default Vue.extend({
  name: 'HamyaranSepehrPage',
  components: {FooterComponent, HeaderComponent, FaqComponent},
   methods: {
    GetHamyaranSepehrSectionOne: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح همیاران سپهر(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش اول'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.HamyaranSepehrSectionOne = response.data.value;
        document.title="طرح همیاران سپهر بانک صادرات ایران";
      });
    },
     GetHamyaranSepehrSectionTwoImage: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح همیاران سپهر(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش دوم تصویر'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.HamyaranSepehrSectionTwoImage = response.data.value;
      });
    },
      GetHamyaranSepehrSectionTwo: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح همیاران سپهر(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش دوم'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.HamyaranSepehrSectionTwo = response.data.value;
      });
    },
     GetHamyaranSepehrSectionThreeImage: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح همیاران سپهر(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش سوم تصویر اول'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.HamyaranSepehrSectionThreeImage = response.data.value;
      });
    },
    GetHamyaranSepehrSectionThree: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح همیاران سپهر(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش سوم'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.HamyaranSepehrSectionThree = response.data.value;
      });
    },
      GetHamyaranSepehrSectionThreeImageTwo: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح همیاران سپهر(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش سوم تصویر دوم'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.HamyaranSepehrSectionThreeImageTwo = response.data.value;
      });
    },
     GetHamyaranSepehrSectionBlue: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح همیاران سپهر(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'کادر آبی رنگ'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.HamyaranSepehrSectionBlue = response.data.value;
      });
    },

    GetHamyaranSepehrTizer: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح همیاران سپهر(طرح های بانکی)')/items?$select=Id,Title,Description,Image,TizerLink&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'تیزر فیلم'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.HamyaranSepehrTizer = response.data.value;
      });
    },

  },
  data() {
    return {
      SiteAdrs: "/Admin/",
      HamyaranSepehrSectionOne:[],
      HamyaranSepehrSectionTwoImage:[],
      HamyaranSepehrSectionTwo:[],
      HamyaranSepehrSectionThreeImage:[],
      HamyaranSepehrSectionThree:[],
      HamyaranSepehrSectionThreeImageTwo:[],
      HamyaranSepehrSectionBlue:[],
      HamyaranSepehrTizer:[],
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
    this.GetHamyaranSepehrSectionOne();
    this.GetHamyaranSepehrSectionTwoImage();
    this.GetHamyaranSepehrSectionTwo();
    this.GetHamyaranSepehrSectionThreeImage();
    this.GetHamyaranSepehrSectionThree();
    this.GetHamyaranSepehrSectionThreeImageTwo();
    this.GetHamyaranSepehrSectionBlue();
    this.GetHamyaranSepehrTizer();
  },
})
</script>
