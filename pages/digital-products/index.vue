<template src="./DigitalProductsPage.html"></template>
<style lang="scss" src="./DigitalProductsPage.scss" scoped></style>

<script lang="ts">
import axios from "axios";
import Vue from "vue";
import HeaderComponent from "~/components/global/HeaderCompnent/HeaderComponent.vue";
import FooterComponent from "~/components/global/FooterComponent/FooterComponent.vue";
import { defineComponent } from "vue";

// export default defineComponent({
//   components: {HeaderComponent, FooterComponent},
//   data() {
//     return {
//       toggle_exclusive: 0,
//       tabs: [
//         'اپلیکیشن ها',
//         'سامانه ها و خدمات غیرحضوری',
//         'کارت های بانکی',
//       ] as string[]
//     }
//   }
// })

export default Vue.extend({
  name: "DigitalProductsPage",
  components: { HeaderComponent, FooterComponent },
  mounted: function () {
    this.GetDigitalProductFirstTab();
    this.GetDigitalProductSocondTabOneTwo();
    this.GetDigitalProductThirdTab();
    this.GetDigitalProductFourthTab();
  },
  methods: {
    GetDigitalProductFirstTab: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('لیست محصولات دیجیتال')/items?$select=Id,Title,SubTitle,Image,Description,Link,Parent,NoeLink&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'اپلیکیشن ها'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        console.log("DigitalProductFirstTab===>>>>", response.data.value);      
        this.DigitalProductFirstTab = response.data.value;
        document.title='محصولات دیجیتال بانک صادرات ایران';
      });
    },
    GetDigitalProductSocondTabOneTwo: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('لیست محصولات دیجیتال')/items?$select=Id,Title,SubTitle,Image,Description,Link,Parent,NoeLink,Order0&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'سامانه ها و خدمات غیرحضوری'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        var OneTwo = response.data.value.filter(
          (items: any) => items.Order0 >= 1 && items.Order0 <= 2
        );
                                        
        this.DigitalProductSocondTabOneTwo = OneTwo;                                             
        var Three = response.data.value.filter(
          (items: any) => items.Order0 == "3"
        );
        
        this.DigitalProductSocondTabThree = Three;

        var Four = response.data.value.filter(
          (items: any) => items.Order0 == "4"
        );
        
        this.DigitalProductSocondTabFour = Four;

        var FiveSixSeven = response.data.value.filter(
          (items: any) => items.Order0 >= 5 && items.Order0 <= 7          
        );
        
        this.DigitalProductSocondTabFiveSixSeven = FiveSixSeven;

        var Eight = response.data.value.filter(
          (items: any) => items.Order0 == "8"
        );
        
        this.DigitalProductSocondTabEight = Eight;

        var Nine = response.data.value.filter(
          (items: any) => items.Order0 == "9"
        );
        
        this.DigitalProductSocondTabNine = Nine;

        var TenEleven = response.data.value.filter(
          (items: any) => items.Order0 >= 10 && items.Order0 <= 11
        );

        this.DigitalProductSocondTabTenEleven = TenEleven;

        var TwelveThirteen = response.data.value.filter(
          (items: any) => items.Order0 >= 12 && items.Order0 <= 13
        );
        
        this.DigitalProductSocondTabTwelveThirteen = TwelveThirteen;

        var Fourteen = response.data.value.filter(
          (items: any) => items.Order0 == 14
        );
        this.DigitalProductSocondTabFourteen = Fourteen;

        var Fifteen = response.data.value.filter(
          (items: any) => items.Order0 == 15
        );
        this.DigitalProductSocondTabFifteen = Fifteen;

        var Sixteen= response.data.value.filter(
          (items: any) => items.Order0 == 16
        );
        this.DigitalProductSocondTabSixteen = Sixteen;

        var Seventeen= response.data.value.filter(
          (items: any) => items.Order0 == 17
        );
        this.DigitalProductSocondTabSeventeen = Seventeen;

      });
    },

    GetDigitalProductThirdTab: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('لیست محصولات دیجیتال')/items?$select=Id,Title,SubTitle,Image,Description,Link,Order0,Parent,NoeLink&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'کارت های بانکی'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        console.log("DigitalProductThirdTab===>>>>", response.data.value);
        var ThirdTabOne = response.data.value.filter(
          (items: any) => items.Order0 == "1"
        );
        this.DigitalProductThirdOne = ThirdTabOne;                                    

        var ThirdTabTwo = response.data.value.filter(
          (items: any) => items.Order0 == "2"
        );
        this.DigitalProductThirdTwo = ThirdTabTwo;

        var ThirdTabThreeFour = response.data.value.filter(
          (items: any) => items.Order0 >= 3 && items.Order0 <= 4
        );
        console.log("ThirdTabThreeFour==>>>>", ThirdTabThreeFour);
        this.DigitalProductThirdThreeFour = ThirdTabThreeFour;

        var ThirdTabFive = response.data.value.filter(
          (items: any) => items.Order0 == "5"
        );
        this.DigitalProductThirdFive = ThirdTabFive;

        var ThirdTabSix = response.data.value.filter(
          (items: any) => items.Order0 == "6"
        );
        this.DigitalProductThirdSix = ThirdTabSix;

         var ThirdTabSeven = response.data.value.filter(
          (items: any) => items.Order0 == "7"
        );
        this.DigitalProductThirdSeven = ThirdTabSeven;
      });
    },
      GetDigitalProductFourthTab: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('لیست محصولات دیجیتال')/items?$select=Id,Title,SubTitle,Image,Description,Link,Parent&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'مقررات بانکداری الکترونیک'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        console.log("DigitalProductFourthTab===>>>>", response.data.value);             
        this.DigitalProductFourthTab = response.data.value;
      });
    },
  },
  data() {
    return {
      SiteAdrs: "/Admin/",
      DigitalProductFirstTab: [],
      DigitalProductSocondTabOneTwo: [],
      DigitalProductSocondTabThree: [],
      DigitalProductSocondTabFour: [],
      DigitalProductSocondTabFiveSixSeven: [],    
      DigitalProductSocondTabEight: [],
      DigitalProductSocondTabNine: [],
      DigitalProductSocondTabTenEleven: [],
      DigitalProductSocondTabTwelveThirteen: [],
      DigitalProductSocondTabFourteen: [],
      DigitalProductSocondTabFifteen: [],
      DigitalProductSocondTabSixteen: [],
      DigitalProductSocondTabSeventeen: [],
      DigitalProductThirdOne: [],
      DigitalProductThirdTwo: [],
      DigitalProductThirdThreeFour: [],
      DigitalProductThirdFive: [],
      DigitalProductThirdSix: [],
      DigitalProductThirdSeven: [],
      DigitalProductFourthTab:[],
      toggle_exclusive: 0,
      tabs: [
        "اپلیکیشن ها",
        "سامانه ها و خدمات غیرحضوری",
        "کارت های بانکی",
        "مقررات بانکداری الکترونیک",
      ] as string[],
    };
  },
});
</script>
