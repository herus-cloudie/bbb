<template src="./mohasebe-riali.html"></template>
<style lang="scss" src="./mohasebe-riali.scss" scoped></style>

<script lang="ts">
import Vue from "vue";
import axios from 'axios';
import FaqComponent from "~/components/FaqComponent/FaqComponent.vue";
import HeaderComponent from "~/components/global/HeaderCompnent/HeaderComponent.vue";
import FooterComponent from "~/components/global/FooterComponent/FooterComponent.vue";
import AccordionLinkListComponent from "~/components/AccordionLinkListComponent/AccordionLinkListComponent.vue";
import GoldDivider from "~/components/Icons/gold-divider.vue";
import { BankRialServicesLinks } from "~/core/files/about-us-links";

export default Vue.extend({
  name: "MohasebeRialiPage",
  components: {
    GoldDivider,
    AccordionLinkListComponent,
    FooterComponent,
    HeaderComponent,
    FaqComponent,
  },
  mounted: function () {
    this.GetMohasebeRiali();
    this.GetMohasebeRialiTitle();
  },
  methods: {
     GetMohasebeRialiTitle: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('محاسبه ریالی(سپرده ها)')/items?$select=Id,Title,Description&$filter=IsActive%20eq%201%20and%20Order0%20eq%201'";
      axios.get(endPointUrl).then((response) => {
        this.MohasebeRialiTitle = response.data.value;
        document.title="محاسبه ریالی بانک صادرات ایران";
      });
    },
    GetMohasebeRiali: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('محاسبه ریالی(سپرده ها)')/items?$select=Id,Title,Description&$filter=IsActive%20eq%201%20and%20Order0%20gt 1&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.MohasebeRiali = response.data.value;
      });
    },
  },
  data() {
    return {
      SiteAdrs: "/Admin/",
      MohasebeRiali: [],
      MohasebeRialiTitle:[],
      links: BankRialServicesLinks,
    };
  },
});
</script>
