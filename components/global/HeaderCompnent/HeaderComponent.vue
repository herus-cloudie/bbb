<template src="./HeaderComponent.html"></template>
<style scoped lang="scss" src="./HeaderComponent.scss"></style>

<script lang="ts">
import axios from "axios";
import Vue from "vue";

export default Vue.extend({
  name: "HeaderComponent",
  mounted: function () {
    this.GetHeaderSite();
    // this.ChangeFavicon();
  },
  methods: {
    GetHeaderSite: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('لیست لینک های صفحه اول')/items?$select=Id,Title,Icon,Description,Link,Order,Location,TxtLink,HtmlDivider&$filter=IsActive%20eq%201%20and%20Location%20eq%20'HeaderSite'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.HeaderSite = response.data.value;
      });
    },

    // ChangeFavicon:function(){
    //   var link = document.querySelector("link[rel~='icon']") as any ;
    //   if (!link) {
    //   link = document.createElement('link');          
    //   link.rel = 'icon';
    //   document.head.appendChild(link);
    //   }
    //   // link.href = 'https://stackoverflow.com/favicon.ico';
    //   link.href = '/Admin/ImagesAndIcons/BankIco.ico';
    // }
    
  },
  
  data() {
    return {
      SiteAdrs: "/Admin/",
      HeaderSite: [],
    };
  },
});


//  import { ref } from 'vue'
//       import SearchInput from 'vue-search-input'
//       // Optionally import default styling
//       import 'vue-search-input/dist/styles.css'
      
//       const searchVal = ref('')
      
//       export default {
//         components: {
//           SearchInput
//         },
//         setup() {
//           return {
//             searchVal
//           }
//         }
//       }
 
</script>
