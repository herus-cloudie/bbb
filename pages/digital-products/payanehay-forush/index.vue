<template src="./payanehay-forushPage.html"></template>
<style lang="scss" src="./payanehay-forushPage.scss" scoped></style>

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
  name: "MozarebePage",
  components: {
    GoldDivider,
    AccordionLinkListComponent,
    FooterComponent,
    HeaderComponent,
    FaqComponent,
  },
  mounted: function () {
    this.GetMozarebe();
    this.GetMozarebeTitle();
    this.GetLink();
  },
  methods: {
       GetMozarebeTitle: function () {                      
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('پایانه های فروش')/items?$select=Id,Title,Description&$filter=IsActive%20eq%201%20and%20Order0%20eq%201%20and%20Parent%20ne%20'لینک ها'";
      axios.get(endPointUrl).then((response) => {               
        this.MozarebeTitle = response.data.value;
        document.title="پایانه های فروش بانک صادرات ایران";
      });
    },
    GetMozarebe: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('پایانه های فروش')/items?$select=Id,Title,Description&$filter=IsActive%20eq%201%20and%20Order0%20gt 1%20and%20Parent%20ne%20'لینک ها'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.Mozarebe = response.data.value;
      });
    },
    GetLink: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('پایانه های فروش')/items?$select=Id,Title,Description,TxtLinkLast&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'لینک ها'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.Link = response.data.value;
      });
    },
  },
  data() {
    return {
      SiteAdrs: "/Admin/",
      Mozarebe: [],
      MozarebeTitle:[],
      Link:[],
      links: BankRialServicesLinks,
    };
  },
});
</script>
