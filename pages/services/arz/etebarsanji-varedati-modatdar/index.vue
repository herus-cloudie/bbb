<template src="./etebarsanji-varedati-modatdar.html"></template>
<style lang="scss" src="./etebarsanji-varedati-modatdar.scss" scoped></style>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import FaqComponent from "~/components/FaqComponent/FaqComponent.vue";
import HeaderComponent from "~/components/global/HeaderCompnent/HeaderComponent.vue";
import FooterComponent from "~/components/global/FooterComponent/FooterComponent.vue";
import AccordionLinkListComponent from "~/components/AccordionLinkListComponent/AccordionLinkListComponent.vue";
import GoldDivider from "~/components/Icons/gold-divider.vue";
import {BankRialServicesLinks} from "~/core/files/about-us-links";

export default Vue.extend({
  name: 'EtebarsanjiVaredati-modatdarPage',
  components: {GoldDivider, AccordionLinkListComponent, FooterComponent, HeaderComponent, FaqComponent},
   mounted: function () {
    this.GetEtebarSanjiVaredatiItems();
    this.GetEtebarSanjiVaredatiItemsTitle();
    setTimeout(() => {
      document.body.innerHTML=document.body.innerHTML.replace(/¬/g,' ');
    }, 1000);
  },
  methods: {
       GetEtebarSanjiVaredatiItemsTitle: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('اعتبارسنجی وارداتی مدت دار(خدمات بانکی ارزی)')/items?$select=Id,Title,Description&$filter=IsActive%20eq%201%20and%20Order0%20eq%201'";
      axios.get(endPointUrl).then((response) => {                                    
        this.EtebarSanjiVaredatiItemsTitle = response.data.value;
        document.title="اعتبارسنجی وارداتی مدت دار بانک صادرات ایران";
      });
    },
    GetEtebarSanjiVaredatiItems: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('اعتبارسنجی وارداتی مدت دار(خدمات بانکی ارزی)')/items?$select=Id,Title,Description&$filter=IsActive%20eq%201%20and%20Order0%20gt 1&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.EtebarSanjiVaredatiItems = response.data.value;
      });
    },
  },
  data() {
    return {
      SiteAdrs: "/Admin/",
      EtebarSanjiVaredatiItems: [],
      EtebarSanjiVaredatiItemsTitle:[],
      links: BankRialServicesLinks
    }
  },
})
</script>
