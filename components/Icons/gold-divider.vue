<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "GoldDivider",
  props: {
    width: {
      type: Number,
      default: 86
    }
  }
})
</script>

<template>
  <svg :width="width" height="6" :viewBox="'0 0 ' + width +' 6'" style="min-height: 6px" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect :width="width" height="6" rx="3" transform="matrix(1 0 0 -1 0 6)" fill="#F1BE57"/>
  </svg>
</template>

<style scoped lang="scss">

</style>
