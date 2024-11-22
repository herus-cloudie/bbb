<template src="./ServiceBannerComponent.html"></template>
<style scoped lang="scss" src="./ServiceBannerComponent.scss"></style>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  name: "ServiceBannerComponent",
  mounted: function () {
    this.GetBannerFirstPage();
  },
  methods: {
    GetBannerFirstPage: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('لیست لینک های صفحه اول')/items?$select=Id,Title,Icon,TxtLink,Location&$filter=IsActive%20eq%201%20and%20Location%20eq%20'AksPaenSafheAsli'&$orderby=Order0";;
      axios.get(endPointUrl).then((response) => {
        console.log("BannerFirstPage===>>>>",response.data.value)
        this.BannerFirstPage = response.data.value;
      });
    },
  },
  data() {
    return {
      SiteAdrs: "/Admin/",
      BannerFirstPage: [],
    };
  },
});
</script>
