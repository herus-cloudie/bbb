<template src="./ejare-tamlik.html"></template>
<style lang="scss" src="./ejare-tamlik.scss" scoped></style>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import FaqComponent from "~/components/FaqComponent/FaqComponent.vue";
import HeaderComponent from "~/components/global/HeaderCompnent/HeaderComponent.vue";
import FooterComponent from "~/components/global/FooterComponent/FooterComponent.vue";
import AccordionLinkListComponent from "~/components/AccordionLinkListComponent/AccordionLinkListComponent.vue";
import GoldDivider from "~/components/Icons/gold-divider.vue";
import {BankRialServicesLinks} from "~/core/files/about-us-links";

export default Vue.extend({
  name: 'EjareTamlikPage',
  components: {GoldDivider, AccordionLinkListComponent, FooterComponent, HeaderComponent, FaqComponent},
   mounted: function () {
    this.GetEjareTamlik();
    this.GetMosharekatMadaniTitle();
    this.GetMosharekatMadaniTitle();
  },
  methods: {
       GetMosharekatMadaniTitle: async function () {                      
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('اجاره به شرط تملک(تسهیلات و تعهدات)')/items?$select=Id,Title,Description&$filter=IsActive%20eq%201%20and%20Order0%20eq%201'";
        await  axios.get(endPointUrl).then((response) => {                                  
        document.title="اجاره به شرط تملک بانک صادرات ایران";
        this.EjareTamlikTitle= response.data.value;
        // this.EjareTamlikTitle= response.data.value.map((obj: any) => {
        //   return {      
        //       ...obj, 
        //       Description:obj.Description.split('.').join('.<br>')
        //   };
        // });

      });
    },
    

    GetEjareTamlik: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('اجاره به شرط تملک(تسهیلات و تعهدات)')/items?$select=Id,Title,Description&$filter=IsActive%20eq%201%20and%20Order0%20gt 1&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {

        this.EjareTamlik = response.data.value;
      });
    },
  },
  data() {
    return {
      EjareTamlik:[],
      EjareTamlikTitle:[],
      SiteAdrs:"/Admin/",
      links: BankRialServicesLinks
    }
  },
})
</script>
