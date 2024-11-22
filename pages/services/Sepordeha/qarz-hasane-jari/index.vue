<template src="./qarz-hasane-jari.html"></template>
<style lang="scss" src="./qarz-hasane-jari.scss" scoped></style>

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
  name: "QarzHasaneJariPage",
  components: {
    GoldDivider,
    AccordionLinkListComponent,
    FooterComponent,
    HeaderComponent,
    FaqComponent,
  },
  mounted: function () {
    this.GetGharzolhasaneJariSepordeha();
    this.GetGharzolhasaneJariSepordehaTitle();
  },
  methods: {
     GetGharzolhasaneJariSepordehaTitle: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('قرض الحسنه جاری(سپرده ها)')/items?$select=Id,Title,Description&$filter=IsActive%20eq%201%20and%20Order0%20eq%201'";
      axios.get(endPointUrl).then((response) => {
        this.GharzolhasaneJariSepordehaTitle = response.data.value;
        document.title=" قرض الحسنه جاری بانک صادرات ایران";
      });
    },
    GetGharzolhasaneJariSepordeha: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('قرض الحسنه جاری(سپرده ها)')/items?$select=Id,Title,Description&$filter=IsActive%20eq%201%20and%20Order0%20gt 1&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.GharzolhasaneJariSepordeha = response.data.value;
      });
    },
  },
  data() {
    return {
      SiteAdrs: "/Admin/",
      GharzolhasaneJariSepordeha: [],
      GharzolhasaneJariSepordehaTitle:[],
      links: BankRialServicesLinks,
    };
  },
});
</script>
