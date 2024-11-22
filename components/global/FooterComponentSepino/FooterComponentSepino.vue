<template src="./FooterComponentSepino.html"></template>
<style scoped lang="scss" src="./FooterComponentSepino.scss"></style>

<script lang="ts">
import axios from "axios";
import Vue from "vue";

export default Vue.extend({
  name: "FooterComponentSepino",
  mounted: function () {
    this.GetFooterBozorg();
    this.GetImageFooterBozorg();
    this.GetFooterKuchak();
  },
  methods: {
    GetFooterBozorg: function () {
      
    },
    GetImageFooterBozorg: function () {
      
    },
    GetFooterKuchak: function () {
      
    },
  },
  data() {
    return {
      SiteAdrs: "/Admin/",
      FooterBozorg: [],
      ImageFooterBozorg: [],
      FooterKuchak: [],
    };
  },
});
</script>
