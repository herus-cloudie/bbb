<template src="./BankFeesPage.html"></template>
<style lang="scss" src="./BankFeesPage.scss" scoped></style>

<script lang="ts">
import Vue from 'vue'
import HeaderComponent from "~/components/global/HeaderCompnent/HeaderComponent.vue";
import FooterComponent from "~/components/global/FooterComponent/FooterComponent.vue";
import PrintButtonComponent from "~/components/global/PrintButtonComponent/PrintButtonComponent.vue";
import CopyToButtonComponent from "~/components/global/CopyToButtonComponent/CopyToButtonComponent.vue";
import AboutLinkListComponent from "~/components/AboutLinkList/AboutLinkListComponent.vue";
import AccordionLinkListComponent from "~/components/AccordionLinkListComponent/AccordionLinkListComponent.vue";
import GoldDivider from "~/components/Icons/gold-divider.vue";
import {AboutUsLinks} from "~/core/files/about-us-links";

export default Vue.extend({
  name: 'BankFeesPage',
  components: {
    GoldDivider,
    AccordionLinkListComponent,
    AboutLinkListComponent,
    CopyToButtonComponent,
    PrintButtonComponent,
    FooterComponent,
    HeaderComponent,
  },
  methods: {},
  data() {
    return {
      links: AboutUsLinks
    }
  },
  mounted() {
  }
})
</script>
