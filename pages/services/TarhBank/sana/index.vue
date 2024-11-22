<template src="./SanaPage.html"></template>
<style lang="scss" src="./SanaPage.scss" scoped></style>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import FaqComponent from "~/components/FaqComponent/FaqComponent.vue";
import HeaderComponent from "~/components/global/HeaderCompnent/HeaderComponent.vue";
import FooterComponent from "~/components/global/FooterComponent/FooterComponent.vue";

export default Vue.extend({
  name: 'SanaPage',
  components: {FooterComponent, HeaderComponent, FaqComponent},
  methods: {
    GetTarheSanaSectionOne: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح سنا(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش اول'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.TarheSanaSectionOne = response.data.value;
        document.title="طرح سنا بانک صادرات ایران";
      });
    },
     GetTarheSanaSectionTwoImage: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح سنا(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش دوم تصویر'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.TarheSanaSectionTwoImage = response.data.value;
      });
    },
      GetTarheSanaSectionTwo: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح سنا(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش دوم'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.TarheSanaSectionTwo = response.data.value;
      });
    },
     GetTarheSanaSectionThreeImage: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح سنا(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش سوم تصویر اول'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.TarheSanaSectionThreeImage = response.data.value;
      });
    },
    GetTarheSanaSectionThree: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح سنا(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش سوم'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.TarheSanaSectionThree = response.data.value;
      });
    },
      GetTarheSanaSectionThreeImageTwo: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح سنا(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'بخش سوم تصویر دوم'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.TarheSanaSectionThreeImageTwo = response.data.value;
      });
    },
     GetTarheSanaSectionBlue: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح سنا(طرح های بانکی)')/items?$select=Id,Title,Description,Image&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'کادر آبی رنگ'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.TarheSanaSectionBlue = response.data.value;
      });
    },
    GetTarheSanaTizer: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('طرح سنا(طرح های بانکی)')/items?$select=Id,Title,Description,Image,TizerLink&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'تیزر فیلم'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.TarheSanaTizer = response.data.value;
      });
    },
  },
  data() {
    return {
      SiteAdrs: "/Admin/",
      TarheSanaSectionOne:[],
      TarheSanaSectionTwoImage:[],
      TarheSanaSectionTwo:[],
      TarheSanaSectionThreeImage:[],
      TarheSanaSectionThree:[],
      TarheSanaSectionThreeImageTwo:[],
      TarheSanaSectionBlue:[],
      TarheSanaTizer:[],
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
    this.GetTarheSanaSectionOne();
    this.GetTarheSanaSectionTwoImage();
    this.GetTarheSanaSectionTwo();
    this.GetTarheSanaSectionThreeImage();   
    this.GetTarheSanaSectionThree();
    this.GetTarheSanaSectionThreeImageTwo();
    this.GetTarheSanaSectionBlue();
    this.GetTarheSanaTizer();
  },
})
</script>
