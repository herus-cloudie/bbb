<template>
  <LandingPage />
</template>

<script lang="ts">
import Vue from "vue";
import HeaderComponent from "~/components/global/HeaderCompnent/HeaderComponent.vue";
import LandingPage from "~/components/LandingComponent/LandingComponent.vue";
import FooterComponent from "~/components/global/FooterComponent/FooterComponent.vue";

export default Vue.extend({
  name: "IndexPage",
  components: { FooterComponent, LandingPage, HeaderComponent },
});
</script>
