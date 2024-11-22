<template src="./FooterComponent.html"></template>
<style scoped lang="scss" src="./FooterComponent.scss"></style>

<script lang="ts">
import axios from "axios";
import Vue from "vue";

export default Vue.extend({
  name: "FooterComponent",
  mounted: function () {
    this.GetFooterBozorg();
    this.GetImageFooterBozorg();
  },
  
  methods: {
    GetFooterBozorg: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('لیست لینک های صفحه اول')/items?$select=Id,Title,Icon,Description,Link,Order,Location,TxtLink,NoeLink,HtmlDivider&$filter=IsActive%20eq%201%20and%20Location%20eq%20'FooterBozorg'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {                     
        this.FooterBozorg = response.data.value;
      });
    },

    GetImageFooterBozorg: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('لیست لینک های صفحه اول')/items?$select=Id,Title,Icon,Order,Location&$filter=IsActive%20eq%201%20and%20Location%20eq%20'ImageFooterBozorg'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.ImageFooterBozorg = response.data.value;
      });
    },

    GetCall: function() {
        window.open('tel:09602')
    }
  },
  data() {
    return {
      SiteAdrs: "/Admin/",
      FooterBozorg: [],
      ImageFooterBozorg: [],
    };
  },
});
</script>
