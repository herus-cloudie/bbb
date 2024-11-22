<template src="./etebarsanji-saderati.html"></template>
<style lang="scss" src="./etebarsanji-saderati.scss" scoped></style>

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
  name: 'EtebarsanjiSaderatiePage',
  components: {GoldDivider, AccordionLinkListComponent, FooterComponent, HeaderComponent, FaqComponent},
 mounted: function () {
    this.GetEtebarSanjiSaderatiItems();
    this.GetEtebarSanjiSaderatiTitle();
    setTimeout(() => {
      document.body.innerHTML=document.body.innerHTML.replace(/¬/g,' ');
    }, 1000);
  },
  methods: {
         GetEtebarSanjiSaderatiTitle: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('اعتبارسنجی صادراتی(خدمات بانکی ارزی)')/items?$select=Id,Title,Description&$filter=IsActive%20eq%201%20and%20Order0%20eq%201'";
      axios.get(endPointUrl).then((response) => {                                                          
        this.EtebarSanjiSaderatiTitle = response.data.value;
        document.title="اعتبارسنجی صادراتی بانک صادرات ایران";
      });
    },

    GetEtebarSanjiSaderatiItems: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('اعتبارسنجی صادراتی(خدمات بانکی ارزی)')/items?$select=Id,Title,Description&$filter=IsActive%20eq%201%20and%20Order0%20gt 1&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.EtebarSanjiSaderatiItems = response.data.value;
      });
    },
  },
  data() {
    return {
      SiteAdrs: "/Admin/",
      EtebarSanjiSaderatiItems: [],
      EtebarSanjiSaderatiTitle:[],
      links: BankRialServicesLinks
    }
  },
})
</script>
