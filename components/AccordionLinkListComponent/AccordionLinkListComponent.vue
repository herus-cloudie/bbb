<template src="./AccordionLinkListComponent.html"></template>
<style scoped lang="scss" src="./AccordionLinkListComponent.scss"></style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AccordionLinkListComponent',
  props: {
    linksList: {
      type: Array<{
        links: {
          title: string,
          link: string,
        }[],
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
})
</script>
