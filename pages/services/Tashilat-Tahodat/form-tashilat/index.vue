<template src="./form-tashilat.html"></template>
<style lang="scss" src="./form-tashilat.scss" scoped></style>

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
  name: 'FormTashilatPage',
  components: {GoldDivider, AccordionLinkListComponent, FooterComponent, HeaderComponent, FaqComponent},    
   mounted: function () {
    this.GetMorabeheItems();
  },
  methods: {
    GetMorabeheItems: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('فرم های دریافت تسهیلات(تسهیلات و تعهدات)')/items?$select=Id,Title,Description,TxtLink&$filter=IsActive%20eq%201&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.FormTashilat = response.data.value;
        document.title="فرم های دریافت تسهیلات بانک صادرات ایران";
      });
    },
  },
  data() {
    return {
      FormTashilat:[],
      FormTashilatTitle:[],
      SiteAdrs:"/Admin/",
      links: BankRialServicesLinks
    }
  },
})
</script>
