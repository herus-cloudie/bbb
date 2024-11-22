<template src="./HeaderCompnentSepino.html"></template>
<style scoped lang="scss" src="./HeaderCompnentSepino.scss"></style>

<script lang="ts">
import axios from "axios";
import Vue from "vue";

export default Vue.extend({
  name: "HeaderCompnentSepino",
  mounted: function () {
    this.GetHeaderSite();
  },
  methods: {
    GetHeaderSite: function () {
    },
  },
  data() {
    return {
      SiteAdrs: "/Admin/",
      HeaderSite: [],
    };
  },
});
</script>
