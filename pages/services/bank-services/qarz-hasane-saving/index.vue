<template src="./QarzHasaneSavingPage.html"></template>
<style lang="scss" src="./QarzHasaneSavingPage.scss" scoped></style>

<script lang="ts">
import Vue from 'vue'
import FaqComponent from "~/components/FaqComponent/FaqComponent.vue";
import HeaderComponent from "~/components/global/HeaderCompnent/HeaderComponent.vue";
import FooterComponent from "~/components/global/FooterComponent/FooterComponent.vue";
import AccordionLinkListComponent from "~/components/AccordionLinkListComponent/AccordionLinkListComponent.vue";
import GoldDivider from "~/components/Icons/gold-divider.vue";
import {BankRialServicesLinks} from "~/core/files/about-us-links";

export default Vue.extend({
  name: 'QarzHasaneSavingPage',
  components: {GoldDivider, AccordionLinkListComponent, FooterComponent, HeaderComponent, FaqComponent},
  data() {
    return {
      links: BankRialServicesLinks
    }
  },
})
</script>
