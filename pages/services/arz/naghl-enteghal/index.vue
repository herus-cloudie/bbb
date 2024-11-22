<template src="./naghl-enteghal.html"></template>
<style lang="scss" src="./naghl-enteghal.scss" scoped></style>

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
  name: 'NaghlEnteghalPage',
  components: {GoldDivider, AccordionLinkListComponent, FooterComponent, HeaderComponent, FaqComponent},
   mounted: function () {
    this.GetNaghlEnteghalItems();
    this.GetNaghlEnteghalItemsTitle();
    setTimeout(() => {
      document.body.innerHTML=document.body.innerHTML.replace(/¬/g,' ');
    }, 1000);
  },
  methods: {
     GetNaghlEnteghalItemsTitle: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('نقل و انتقال(خدمات بانکی ارزی)')/items?$select=Id,Title,Description&$filter=IsActive%20eq%201%20and%20Order0%20eq%201'";
      axios.get(endPointUrl).then((response) => {                          
        this.NaghlEnteghalItemsTitle = response.data.value;
        document.title="نقل و انتقال بانک صادرات ایران";
      });
    },

    GetNaghlEnteghalItems: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('نقل و انتقال(خدمات بانکی ارزی)')/items?$select=Id,Title,Description&$filter=IsActive%20eq%201%20and%20Order0%20gt 1&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.NaghlEnteghalItems = response.data.value;
      });
    },
  },
  data() {
    return {
      SiteAdrs: "/Admin/",
      NaghlEnteghalItems: [],
      NaghlEnteghalItemsTitle:[],            
      links: BankRialServicesLinks
    }
  },
})
</script>
