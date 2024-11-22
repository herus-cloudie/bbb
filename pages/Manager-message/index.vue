<template src="./Message.html"></template>
<style lang="scss" src="./MessagePage.scss" scoped></style>

<script lang="ts">
import axios from "axios";
import Vue from "vue";
import HeaderComponent from "~/components/global/HeaderCompnent/HeaderComponent.vue";
import FooterComponent from "~/components/global/FooterComponent/FooterComponent.vue";
import PrintButtonComponent from "~/components/global/PrintButtonComponent/PrintButtonComponent.vue";
import CopyToButtonComponent from "~/components/global/CopyToButtonComponent/CopyToButtonComponent.vue";

import "swiper/modules/pagination/pagination.scss";
import "swiper/modules/autoplay/autoplay.scss";
import "swiper/modules/effect-coverflow/effect-coverflow.scss";
import { AboutUsLinks } from "~/core/files/about-us-links";
import AccordionLinkListComponent from "~/components/AccordionLinkListComponent/AccordionLinkListComponent.vue";

export default Vue.extend({
  name: "MessagePage",
  components: {
    AccordionLinkListComponent,
    CopyToButtonComponent,
    PrintButtonComponent,
    FooterComponent,
    HeaderComponent,
  },
  mounted: function () {
    this.GetManagerMessage();
  },
  methods: {
    GetManagerMessage: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('پیام ها')/items?$select=Id,Title,Image,Description&$filter=IsActive eq 1 and Target eq 'پیام مدیر عامل'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.ManagerMessage = response.data.value;
      });
      document.title="پیام مدیر عامل بانک صادرات ایران";
    },
  },
  data() {
    return {
      SiteAdrs: "/Admin/",
      ManagerMessage: [],
      links: AboutUsLinks,
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
});
</script>
