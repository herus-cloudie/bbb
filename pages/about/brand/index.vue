<template src="./BrandPage.html"></template>
<style lang="scss" src="./BrandPage.scss" scoped></style>

<script lang="ts">
import axios from "axios";
import Vue from "vue";
import HeaderComponent from "~/components/global/HeaderCompnent/HeaderComponent.vue";
import FooterComponent from "~/components/global/FooterComponent/FooterComponent.vue";
import PrintButtonComponent from "~/components/global/PrintButtonComponent/PrintButtonComponent.vue";
import CopyToButtonComponent from "~/components/global/CopyToButtonComponent/CopyToButtonComponent.vue";
import AboutLinkListComponent from "~/components/AboutLinkList/AboutLinkListComponent.vue";
import AccordionLinkListComponent from "~/components/AccordionLinkListComponent/AccordionLinkListComponent.vue";
import GoldDivider from "~/components/Icons/gold-divider.vue";
import { AboutUsLinks } from "~/core/files/about-us-links";

export default Vue.extend({
  name: "BrandPage",
  components: {
    GoldDivider,
    AccordionLinkListComponent,
    AboutLinkListComponent,
    CopyToButtonComponent,
    PrintButtonComponent,
    FooterComponent,
    HeaderComponent,
  },
  methods: {
    GetLogoSaderat: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('کتابخانه نام و نشان تجاری')/items?$select=Id,LinkFilename,Title,TxtLink&$filter=IsActive%20eq%201%20and%20Position%20eq%20'لوگوهای بانک صادرات ایران'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        console.log("LogoSaderat ===>>>>", response.data.value);
        this.LogoSaderat = response.data.value;
      });
    },
    GetMostanadat: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('کتابخانه نام و نشان تجاری')/items?$select=Id,LinkFilename,Title&$filter=IsActive%20eq%201%20and%20Position%20eq%20'مستندات هویت بصری'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.Mostanadat = response.data.value;
        document.title="کتابخانه نام و نشان تجاری بانک صادرات ایران";
      });
    },
  },
  data() {
    return {
      SiteAdrs: "/Admin/",
      links: AboutUsLinks,
      LogoSaderat: [],
      Mostanadat: [],
    };
  },
  mounted() {
    this.GetLogoSaderat();
    this.GetMostanadat();
  },
});
</script>
