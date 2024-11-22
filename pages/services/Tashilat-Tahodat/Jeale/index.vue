<template src="./Jeale.html"></template>
<style lang="scss" src="./Jeale.scss" scoped></style>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import FaqComponent from "~/components/FaqComponent/FaqComponent.vue";
import HeaderComponent from "~/components/global/HeaderCompnent/HeaderComponent.vue";
import FooterComponent from "~/components/global/FooterComponent/FooterComponent.vue";
import AccordionLinkListComponent from "~/components/AccordionLinkListComponent/AccordionLinkListComponent.vue";
import GoldDivider from "~/components/Icons/gold-divider.vue";
import { BankRialServicesLinks } from "~/core/files/about-us-links";

export default Vue.extend({
  name: "JealePage",
  components: {
    GoldDivider,
    AccordionLinkListComponent,
    FooterComponent,
    HeaderComponent,
    FaqComponent,
  },
  mounted: function () {
    this.GetJaale();
    this.GetJaaleTitle();
  },
  methods: {
     GetJaaleTitle: function () {                      
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('جعاله(تسهیلات و تعهدات)')/items?$select=Id,Title,Description&$filter=IsActive%20eq%201%20and%20Order0%20eq%201'";
      axios.get(endPointUrl).then((response) => {                            
        this.JaaleTitle = response.data.value;
        document.title="جعاله بانک صادرات ایران";
      });
    },
    GetJaale: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('جعاله(تسهیلات و تعهدات)')/items?$select=Id,Title,Description&$filter=IsActive%20eq%201%20and%20Order0%20gt 1&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.Jaale = response.data.value;
      });
    },
  },
  data() {
    return {
      SiteAdrs: "/Admin/",
      Jaale: [],
      JaaleTitle:[],
      links: BankRialServicesLinks,
    };
  },
});
</script>
