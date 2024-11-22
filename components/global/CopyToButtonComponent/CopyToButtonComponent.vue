<template src="./CopyToButtonComponent.html"></template>
<style scoped lang="scss" src="./CopyToButtonComponent.scss"></style>

<script lang="ts">
import Vue from 'vue'
import SnackbarComponent from "~/components/SnackbarComponent/SnackbarComponent.vue";

export default Vue.extend({
  name: 'CopyToButtonComponent',
  components: {SnackbarComponent},
  methods: {
    copyLink() {
      const url = window.location.href
      navigator.clipboard.writeText(url)
        .then(() => {
          this.showSnackbar = true;
          setTimeout(() => this.showSnackbar = false, 3000)
        })
        .catch((error) => {
          console.error('Failed to copy page link: ', error)
        })
    }
  },
  data() {
    return {
      showSnackbar: false
    }
  }
})
</script>
