<template src="./self.html"></template>
<style lang="scss" src="./self.scss" scoped></style>

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
  name: "SelfPage",
  components: {
    GoldDivider,
    AccordionLinkListComponent,
    FooterComponent,
    HeaderComponent,
    FaqComponent,
  },
  mounted: function () {
    this.GetSelf();
    this.GetSelfTitle();
  },
  methods: {
      GetSelfTitle: function () {                      
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('سلف(تسهیلات و تعهدات)')/items?$select=Id,Title,Description&$filter=IsActive%20eq%201%20and%20Order0%20eq%201'";
      axios.get(endPointUrl).then((response) => {                            
        this.SelfTitle = response.data.value;
        document.title="سلف بانک صادرات ایران";
      });
    },
    GetSelf: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('سلف(تسهیلات و تعهدات)')/items?$select=Id,Title,Description&$filter=IsActive%20eq%201%20and%20Order0%20gt 1&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {           
        this.Self = response.data.value;
      });
    },
  },
  data() {
    return {
      SiteAdrs: "/Admin/",
      Self: [],
      SelfTitle:[],
      links: BankRialServicesLinks,
    };
  },
});
</script>
