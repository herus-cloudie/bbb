<template src="./HistoryPage.html"></template>
<style lang="scss" src="./HistoryPage.scss" scoped></style>

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
  name: "HistoryPage",
  components: {
    AccordionLinkListComponent,
    CopyToButtonComponent,
    PrintButtonComponent,
    FooterComponent,
    HeaderComponent,
  },
  mounted: function () {
    this.GetHistory();
  },
  methods: {
    GetHistory: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('لیست تاریخچه')/items?$select=Id,Title,Image,Description&$filter=IsActive%20eq%201%20&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.History = response.data.value;
      });
      document.title="تاریخچه بانک صادرات ایران";
    },
  },
  data() {
    return {
      SiteAdrs: "/Admin/",
      History: [],
      links: AboutUsLinks,
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
  // mounted() {
    // // swiper element
    // const swiperEl: any = document.querySelector('swiper-container');
    //
    // // swiper parameters
    // const swiperParams = {
    //   slidesPerView: 1.1,
    //   spaceBetween: 75,
    //   pagination: true,
    //   coverflowEffect: {
    //     rotate: 50,
    //     stretch: 0,
    //     depth: 100,
    //     modifier: 1,
    //     slideShadows: true,
    //   },
    //   scrollbar: {
    //     hide: true,
    //   },
    //   autoplay: {
    //     delay: 1500,
    //   },
    //   breakpoints: {
    //     // when window width is >= 320px
    //     300: {
    //       slidesPerView: 1.1,
    //       spaceBetween: 16,
    //       scrollbar: {
    //         hide: false,
    //       },
    //     },
    //     // when window width is >= 640px
    //     900: {
    //       slidesPerView: 1.1,
    //       spaceBetween: 75,
    //     }
    //   }
    // };
    //
    // // now we need to assign all parameters to Swiper element
    // Object.assign(swiperEl, swiperParams);
    //
    // // and now initialize it
    // (swiperEl as any)?.initialize();
  // },
});
</script>
