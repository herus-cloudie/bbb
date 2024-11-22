<template src="./MorabehePage.html"></template>
<style lang="scss" src="./MorabehePage.scss" scoped></style>

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
  name: "MorabehePage",
  components: {
    GoldDivider,
    AccordionLinkListComponent,
    FooterComponent,
    HeaderComponent,
    FaqComponent,
  },
  mounted: function () {
    this.GetHeaderAboutMe();
  },
  methods: {
    GetHeaderAboutMe: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('لیست خدمات بانکی')/items";
      axios.get(endPointUrl).then((response) => {
        this.TestTest = response.data.value;
      });
    },
  },
  data() {
    return {
      SiteAdrs: "/Admin/",
      TestTest: [],
      links: BankRialServicesLinks,
    };
  },
});
</script>
