<template src="./HeaderComponent.html"></template>
<style scoped lang="scss" src="./HeaderComponent.scss"></style>


<script lang="ts">
import axios from "axios";
import Vue from "vue";

export default Vue.extend({
  name: "HeaderComponent",
  mounted() {
    this.GetHeaderSite();
    this.fetchSampleData();
  },
  methods: {
    // Method to fetch header site data
    GetHeaderSite() {
      const endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('لیست لینک های صفحه اول')/items?$select=Id,Title,Icon,Description,Link,Order,Location,TxtLink,HtmlDivider&$filter=IsActive%20eq%201%20and%20Location%20eq%20'HeaderSite'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.HeaderSite = response.data.value;
      });
    },

    // Fetch the sample data
    async fetchSampleData() {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        this.SampleData = data;
        this.filteredData = []; // Start with empty filteredData
      } catch (error) {
        console.error("Error fetching sample data:", error);
      }
    },

    // Search logic
    searchOnChange() {
      console.log("Search Query:", this.searchQuery); // Debugging
      if (this.searchQuery.trim() === "") {
        this.filteredData = []; // Clear results if query is empty
      } else {
        // Filter and limit results to 5 items
        this.filteredData = this.SampleData.filter((item: any) =>
          item.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(this.searchQuery.toLowerCase())
        ).slice(0, 3);
      }
      console.log("Filtered Data:", this.filteredData); // Debugging
    },

    // Popup logic
    openPopup() {
      const popupBox = document.getElementById("popupBox");
      if (popupBox) {
        popupBox.style.display = "flex";
      }
    },
    closePopup() {
      const popupBox = document.getElementById("popupBox");
      if (popupBox) {
        popupBox.style.display = "none";
      }
    },
    truncate(text : string, maxLength = 70) {
      if (text.length > maxLength) {
        return text.slice(0, maxLength) + "...";
      }
      return text;
    }
  },
  data() {
    return {
      SiteAdrs: "/Admin/",
      HeaderSite: [],
      SampleData: [], // Holds all fetched data
      filteredData: [], // Holds filtered data
      searchQuery: "", // Two-way binding for the search input
    };
  },
});
</script>
