<template src="./tashilat-khareji-kotah.html"></template>
<style lang="scss" src="./tashilat-khareji-kotah.scss" scoped></style>

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
  name: 'TashilatKharejiKotahPage',
  components: {GoldDivider, AccordionLinkListComponent, FooterComponent, HeaderComponent, FaqComponent},
  mounted: function () {
    this.GetTashilatMaliKharejiItems();
    this.GetTashilatMaliKharejiItemsTitle();
    setTimeout(() => {
      document.body.innerHTML=document.body.innerHTML.replace(/¬/g,' ');
    }, 1000);
  },
  methods: {
      GetTashilatMaliKharejiItemsTitle: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('تسهیلات مالی خارجی(خدمات بانکی ارزی)')/items?$select=Id,Title,Description&$filter=IsActive%20eq%201%20and%20Order0%20eq%201'";
      axios.get(endPointUrl).then((response) => {                          
        this.TashilatMaliKharejiItemsTitle = response.data.value;
        document.title="تسهیلات مالی خارجی بانک صادرات ایران";
      });
    },

    GetTashilatMaliKharejiItems: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('تسهیلات مالی خارجی(خدمات بانکی ارزی)')/items?$select=Id,Title,Description&$filter=IsActive%20eq%201%20and%20Order0%20gt 1&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.TashilatMaliKharejiItems = response.data.value;
      });
    },
  },
  data() {
    return {
      SiteAdrs: "/Admin/",
      TashilatMaliKharejiItems: [],
      TashilatMaliKharejiItemsTitle:[],
      links: BankRialServicesLinks
    }
  },
})
</script>
