<template src="./AuctionPage.html"></template>
<style lang="scss" src="./AuctionPage.scss" scoped></style>

<script lang="ts">
import Vue from 'vue';
import PrintButtonComponent from "~/components/global/PrintButtonComponent/PrintButtonComponent.vue";
import CopyToButtonComponent from "~/components/global/CopyToButtonComponent/CopyToButtonComponent.vue";
import AboutLinkListComponent from "~/components/AboutLinkList/AboutLinkListComponent.vue";
import AccordionLinkListComponent from "~/components/AccordionLinkListComponent/AccordionLinkListComponent.vue";
import GoldDivider from "~/components/Icons/gold-divider.vue";
import {AboutUsLinks} from "~/core/files/about-us-links";

export default Vue.extend({
  name: 'AuctionPage',
  components: {
    GoldDivider,
    AccordionLinkListComponent,
    AboutLinkListComponent,
    CopyToButtonComponent,
    PrintButtonComponent,
  },
  methods: {},
  data() {
    return {
      links: AboutUsLinks,
      toggle_exclusive: 0,
      tabs: [
        'مزایده های عمومی',
        'مناقصه های عمومی',
        'فروش املاک مازاد',
        'مزایده اموال',
      ] as string[],
    }
  },
  mounted() {
  }
})
</script>
