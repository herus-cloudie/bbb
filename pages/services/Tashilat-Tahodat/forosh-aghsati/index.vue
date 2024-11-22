<template src="./ForoshAghsatiPage.html"></template>
<style lang="scss" src="./ForoshAghsatiPage.scss" scoped></style>

<script lang="ts">
import Vue from 'vue'
import axios from "axios";
import FaqComponent from "~/components/FaqComponent/FaqComponent.vue";
import HeaderComponent from "~/components/global/HeaderCompnent/HeaderComponent.vue";
import FooterComponent from "~/components/global/FooterComponent/FooterComponent.vue";
import AccordionLinkListComponent from "~/components/AccordionLinkListComponent/AccordionLinkListComponent.vue";
import GoldDivider from "~/components/Icons/gold-divider.vue";
import {BankRialServicesLinks} from "~/core/files/about-us-links";

export default Vue.extend({
  name: 'ForoshAghsatiPage',
  components: {GoldDivider, AccordionLinkListComponent, FooterComponent, HeaderComponent, FaqComponent},
   mounted: function () {
    this.GetForoshAghsati();
    this.GetForoshAghsatiTitle();
  },
  methods: {
    GetForoshAghsatiTitle: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('فروش اقساطی(تسهیلات و تعهدات)')/items?$select=Id,Title,Description&$filter=IsActive%20eq%201%20and%20Order0%20eq%201'";
      axios.get(endPointUrl).then((response) => {                   
        this.ForoshAghsatiTitle = response.data.value;
        document.title="فروش اقساتی بانک صادرات ایران";
      });
    },
    GetForoshAghsati: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('فروش اقساطی(تسهیلات و تعهدات)')/items?$select=Id,Title,Description&$filter=IsActive%20eq%201%20and%20Order0%20gt 1&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.ForoshAghsati = response.data.value;
      });
    },
  },
  data() {
    return {
      SiteAdrs: "/Admin/",
      ForoshAghsati: [],
      ForoshAghsatiTitle:[],
      links: BankRialServicesLinks
    }
  },
})
</script>
