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
    this.GetFormVekalatiBoursKala();
  },
  methods: {
    GetFormVekalatiBoursKala: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('حساب وکالتی بورس کالا(تسهیلات و تعهدات)')/items?$select=Id,Title,Description,TxtLink&$filter=IsActive%20eq%201&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.FormVekalatiBoursKala = response.data.value;
      });
      document.title='حساب وکالتی بورس کالا بانک صادرات ایران';
    },
  },
  data() {
    return {
      FormVekalatiBoursKala:[],
      FormTashilatTitle:[],
      SiteAdrs:"/Admin/",
      links: BankRialServicesLinks
    }
  },
})
</script>
