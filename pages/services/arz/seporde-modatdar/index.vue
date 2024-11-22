<template src="./seporde-modatdar.html"></template>
<style lang="scss" src="./seporde-modatdar.scss" scoped></style>

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
  name: 'SepordeModatdarPage',
  components: {GoldDivider, AccordionLinkListComponent, FooterComponent, HeaderComponent, FaqComponent},
   mounted: function () {
    this.GetSepordeModatDariItems();
    this.GetSepordeModatDariItemsTitle();
    setTimeout(() => {
      document.body.innerHTML=document.body.innerHTML.replace(/¬/g,' ');
    }, 1000);
  },
  methods: {
       GetSepordeModatDariItemsTitle: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('سپرده سرمایه گذاری مدت دار(خدمات بانکی ارزی)')/items?$select=Id,Title,Description&$filter=IsActive%20eq%201%20and%20Order0%20eq%201'";
      axios.get(endPointUrl).then((response) => {                                    
        this.SepordeModatDariItemsTitle = response.data.value;
        document.title="سپرده سرمایه گذاری مدت دار بانک صادرات ایران";
      });
    },
    GetSepordeModatDariItems: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('سپرده سرمایه گذاری مدت دار(خدمات بانکی ارزی)')/items?$select=Id,Title,Description&$filter=IsActive%20eq%201%20and%20Order0%20gt 1&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.SepordeModatDariItems = response.data.value;
      });
    },
  },
  data() {
    return {
        SiteAdrs: "/Admin/",
      SepordeModatDariItems: [],
      SepordeModatDariItemsTitle:[],
      links: BankRialServicesLinks
    }
  },
})
</script>
