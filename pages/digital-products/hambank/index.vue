<template src="./payanehay-forushPage.html"></template>
<style lang="scss" src="./payanehay-forushPage.scss" scoped></style>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import FaqComponent from "~/components/FaqComponent/FaqComponent.vue";
import HeaderComponent from "~/components/global/HeaderCompnent/HeaderComponent.vue";
import FooterComponent from "~/components/global/FooterComponent/FooterComponent.vue";
import AccordionLinkListComponent from "~/components/AccordionLinkListComponent/AccordionLinkListComponent.vue";
import GoldDivider from "~/components/Icons/gold-divider.vue";
import { BankRialServicesLinks } from "~/core/files/about-us-links";

export default Vue.extend({
  name: "MozarebePage",
  components: {
    GoldDivider,
    AccordionLinkListComponent,
    FooterComponent,
    HeaderComponent,
    FaqComponent,
  },
  mounted: function () {
    this.GetHambank();
    this.GetHambankTitle();
  },
  methods: {
       GetHambankTitle: function () {                      
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('همبانک')/items?$select=Id,Title,Description&$filter=IsActive%20eq%201%20and%20Order0%20eq%201'";
      axios.get(endPointUrl).then((response) => {                   
        this.HambankTitle = response.data.value;
        document.title="همبانک بانک صادرات ایران";
      });
    },
    GetHambank: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('همبانک')/items?$select=Id,Title,Description&$filter=IsActive%20eq%201%20and%20Order0%20gt 1&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.Hambank = response.data.value;
      });
    },
  },
  data() {
    return {
      SiteAdrs: "/Admin/",
      Hambank: [],
      HambankTitle:[],
      links: BankRialServicesLinks,
    };
  },
});
</script>
