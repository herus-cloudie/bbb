<template src="./SnackbarComponent.html"></template>
<style scoped lang="scss" src="./SnackbarComponent.scss"></style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SnackbarComponent',
  data() {
    return {
    }
  },
  props: {
    color: {
      type: String,
      default: 'success'
    },
    text: {
      type: String
    },
    timeout: {
      type: Number,
      default: 3000
    }
  }
})
</script>
