<script lang="ts">
import {defineComponent} from 'vue'
import HeaderComponent from "~/components/global/HeaderCompnent/HeaderComponent.vue";
import FooterComponent from "~/components/global/FooterComponent/FooterComponent.vue";
import GoldDivider from "~/components/Icons/gold-divider.vue";
import {EducationsLinks} from "~/core/files/about-us-links";
export default defineComponent({
  name: "EducationMobileBankingPage",
  components: {GoldDivider, FooterComponent, HeaderComponent},
  data() {
    return {
      links: EducationsLinks
    }
  }
})
</script>

<template src="./EducationMobileBankingPage.html">

</template>

<style src="./EducationMobileBankingPage.scss" scoped lang="scss">

</style>
