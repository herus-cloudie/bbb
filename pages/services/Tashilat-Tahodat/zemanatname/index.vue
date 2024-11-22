<template src="./zemanatname.html"></template>
<style lang="scss" src="./zemanatname.scss" scoped></style>

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
  name: 'ZemanatnamePage',
  components: {GoldDivider, AccordionLinkListComponent, FooterComponent, HeaderComponent, FaqComponent},
   mounted: function () {
    this.GetMorabeheItems();
    this.GetZemanatNameTitle();
  },
  methods: {
     GetZemanatNameTitle: function () {                      
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('ضمانت نامه(تسهیلات و تعهدات)')/items?$select=Id,Title,Description&$filter=IsActive%20eq%201%20and%20Order0%20eq%201'";
      axios.get(endPointUrl).then((response) => {                                                         
        this.ZemanatNameTitle = response.data.value;
        document.title="ضمانت نامه بانک صادرات ایران";
      });
    },
    GetMorabeheItems: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('ضمانت نامه(تسهیلات و تعهدات)')/items?$select=Id,Title,Description&$filter=IsActive%20eq%201%20and%20Order0%20gt 1&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.ZemanatName = response.data.value;
      });
    },
  },
  data() {
    return {
      ZemanatName:[],
      ZemanatNameTitle:[],
      SiteAdrs:"/Admin/",
      links: BankRialServicesLinks
    }
  },
})
</script>
