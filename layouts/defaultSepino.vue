<script lang="ts">
import {defineComponent} from 'vue'
import HeaderComponent from "~/components/global/HeaderCompnentSepino/HeaderCompnentSepino.vue";
import FooterComponent from "~/components/global/FooterComponentSepino/FooterComponentSepino.vue";

export default defineComponent({
  name: "layoutSepino",
  components: {FooterComponent, HeaderComponent},
  data() {
    return {
      drawer: false
    }
  }
})
</script>

<template>
  <v-app class="d-flex flex-column justify-start align-stretch">
    <v-navigation-drawer
      v-if="drawer"
      v-model="drawer"
      absolute
      temporary
      right
      class="app-drawer"
    >
      <div class="top-drawer d-flex flex-row justify-space-between align-center">
        <a href="/" class="d-flex align-center justify-start logo-section">
          <img src="~/assets/img/bsi-logo.png" class="img" alt="بانک صادرات ایران">
          <img src="~/assets/img/bsi-text.png" class="img" alt="بانک صادرات ایران">
        </a>
        <v-btn color="white" @click="drawer=false" icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <div class="d-flex flex-column justify-start align-stretch mt-4" style="gap: 0.5rem">
        <nuxt-link to="/services">
          خدمات بانکی
        </nuxt-link>
        <v-divider></v-divider>
        <NuxtLink to="/about">
          درباره ما
        </NuxtLink>
        <v-divider></v-divider>
        <NuxtLink to="/digital-products">
          محصولات دیجیتال
        </NuxtLink>
        <v-divider></v-divider>
        <nuxt-link to="/contact">
          ارتباط با ما
        </nuxt-link>
        <v-divider></v-divider>
      </div>
    </v-navigation-drawer>
    <HeaderComponent @openDrawer="drawer = true"/>
    <Nuxt/>
    <FooterComponent/>
  </v-app>
</template>

<style scoped lang="scss">

.app-drawer {
  background-color: #0D47A1;
  z-index: 20;

  * {
    color: white !important;
  }

  .top-drawer {
    background-color: #285EB3;
    padding: 1rem 0.5rem;

    .logo-section {
      .img {
        height: 42px;
        margin-left: 0.5rem;
        @media screen and (max-width: 960px) {
          height: 32px;
        }
      }
    }
  }

  a {
    font-size: 14px !important;
    padding: 0 0.5rem;
  }
}
</style>
