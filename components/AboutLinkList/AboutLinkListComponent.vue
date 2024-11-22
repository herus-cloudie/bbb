<template src="./AboutLinkListComponent.html"></template>
<style scoped lang="scss" src="./AboutLinkListComponent.scss"></style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AboutLinkListComponent',
  props: {
    links: {
      type: Array<{
        link: string,                     
        title: string
      }>,
      default: []
    },
    divider: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {}
  },
  mounted() {
    console.log(this.links)
  }
})
</script>
