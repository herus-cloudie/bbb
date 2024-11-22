<template src="./govahi-seporde-sarmayeghozari-khas.html"></template>
<style lang="scss" src="./govahi-seporde-sarmayeghozari-khas.scss" scoped></style>

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
  name: "QarzHasanePasandazPage",
  components: {
    GoldDivider,
    AccordionLinkListComponent,
    FooterComponent,
    HeaderComponent,
    FaqComponent,
  },
  mounted: function () {
    this.GetGharzolhasaneSepordeha();
    this.GetGharzolhasaneSepordehaTitle();
  },
  methods: {
     GetGharzolhasaneSepordehaTitle: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('گواهی سپرده مدت دار ویژه سرمایه گذاری خاص(سپرده ها)')/items?$select=Id,Title,Description&$filter=IsActive%20eq%201%20and%20Order0%20eq%201'";
      axios.get(endPointUrl).then((response) => {
        this.GharzolhasaneSepordehaTitle = response.data.value;
        document.title="گواهی سپرده مدت دار ویژه سرمایه گذاری خاص بانک صادرات ایران";
      });
    },
    GetGharzolhasaneSepordeha: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('گواهی سپرده مدت دار ویژه سرمایه گذاری خاص(سپرده ها)')/items?$select=Id,Title,Description&$filter=IsActive%20eq%201%20and%20Order0%20gt 1&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.GharzolhasaneSepordeha = response.data.value;
      });
    },
  },
  data() {
    return {
      SiteAdrs: "/Admin/",
      GharzolhasaneSepordeha: [],
      GharzolhasaneSepordehaTitle:[],
      links: BankRialServicesLinks,
    };
  },
});
</script>
