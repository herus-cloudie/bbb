<template src="./PrintButtonComponent.html"></template>
<style scoped lang="scss" src="./PrintButtonComponent.scss"></style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PrintButtonComponent',
  props: {
    elementId: {
      type: String
    }
  },
  methods: {
    printElement() {
      const prtHtml = document.getElementById(this.elementId)?.innerHTML;
      let stylesHtml = '';
      // @ts-ignore
      for (const node of [...document.querySelectorAll('link[rel="stylesheet"], style')]) {
        stylesHtml += node.outerHTML;
      }
      const WinPrint = window.open('', '_blank', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
      WinPrint?.document.write(`<!DOCTYPE html>
<html>
  <head>
    ${stylesHtml}
  </head>
  <body>
    ${prtHtml}
  </body>
</html>`);

      WinPrint?.document.close();
      WinPrint?.focus();
      WinPrint?.print();
    }
  }
})
</script>
