<template src="./govahi-seporde-am.html"></template>
<style lang="scss" src="./govahi-seporde-am.scss" scoped></style>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios';
import FaqComponent from "~/components/FaqComponent/FaqComponent.vue";
import HeaderComponent from "~/components/global/HeaderCompnent/HeaderComponent.vue";
import FooterComponent from "~/components/global/FooterComponent/FooterComponent.vue";
import AccordionLinkListComponent from "~/components/AccordionLinkListComponent/AccordionLinkListComponent.vue";
import GoldDivider from "~/components/Icons/gold-divider.vue";
import {BankRialServicesLinks} from "~/core/files/about-us-links";

export default Vue.extend({
  name: 'GovahiSepordePage',
  components: {GoldDivider, AccordionLinkListComponent, FooterComponent, HeaderComponent, FaqComponent},
    mounted: function () {
    this.GetGovahiSeporde();
    this.GetGovahiSepordeTitle();
  },
  methods: {
     GetGovahiSepordeTitle: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('گواهی سپرده عام(سپرده ها)')/items?$select=Id,Title,Description&$filter=IsActive%20eq%201%20and%20Order0%20eq%201'";
      axios.get(endPointUrl).then((response) => {
        this.GovahiSepordeTitle = response.data.value;
        document.title="گواهی سپرده عام بانک صادرات ایران";
      });
    },
    GetGovahiSeporde: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('گواهی سپرده عام(سپرده ها)')/items?$select=Id,Title,Description&$filter=IsActive%20eq%201%20and%20Order0%20gt 1&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.GovahiSeporde = response.data.value;
      });
    },
  },
  data() {
    return {
      SiteAdrs: "/Admin/",
      GovahiSeporde:[],
      GovahiSepordeTitle:[],
      links: BankRialServicesLinks
    }
  },
})
</script>
