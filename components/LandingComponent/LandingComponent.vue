<template src="./LandingComponent.html"></template>
<style src="./LandingComponent.scss" lang="scss" scoped></style>

<script lang="ts">
import axios from "axios";
import Vue from "vue";

export default Vue.extend({
  name: "LandingPage",
  mounted: function () {
    this.GetLinks();
    this.GetSaham();
    this.GetServices();
    this.GetMatneSarie2SafheAval();
    this.GetMatneSarie1SafheAval();
    this.GetNews();
    this.GetBurseVaSaham();
    this.GetLinksMofid();
    this.GetSlider();
  },
  methods: {
    GetLinks: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('HomePageLinks')/items?$select=Id,Title,IconUrl,Link,Order&$filter=IsActive%20eq%201&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.links = response.data.value;
      });
    },

    GetSaham: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('تازه ها')/items?$select=Id,Title,IconUrl,TxtLink,NoeLink,Link,Order0&$filter=IsActive%20eq%201&$top=7&$orderby=Order0 desc";
      axios.get(endPointUrl).then((response) => {
        this.stockLinks = response.data.value;
      });
    },

    GetServices: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('HomePageMahsolatList')/items?$select=Id,Title,IconUrl,Link,Order,Descr,TxtLink&$filter=IsActive%20eq%201&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.services = response.data.value;
      });
    },

    GetMatneSarie2SafheAval: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('لیست لینک های صفحه اول')/items?$select=Id,Title,Icon,Description,Link,Order,Location,TxtLink&$filter=IsActive%20eq%201%20and%20Location%20eq%20'MatneSarie2SafheAval'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {    
        this.MatneSarie2SafheAval = response.data.value;
      });
    },

    GetMatneSarie1SafheAval: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('لیست لینک های صفحه اول')/items?$select=Id,Title,Icon,Description,Link,Order,Location,TxtLink,NoeLink&$filter=IsActive%20eq%201%20and%20Location%20eq%20'MatneSarie1SafheAval'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.MatneSarie1SafheAval = response.data.value;
      });
    },

    GetNews: function () {
      var endPointUrl =
        this.SiteAdrs +
        // "/_api/web/lists/getbyTitle('اخبار')/items?$select=Id,Title,ImageUrl,NewsDate,TxtLink,Order0&$filter=IsActive%20eq%201%20&$orderby=Order0 desc&$top=4";
        // "/_api/web/lists/getbyTitle('اخبار')/items?$select=Id,Title,ImageUrl,NewsDate,TxtLink,Url,Order0&$filter=IsActive%20eq%201%20and%20Order0%20lt 5&$orderby=Order0 desc";
        "/_api/web/lists/getbyTitle('اخبار')/items?$select=Id,Title,ImageUrl,NewsDate,Order0&$filter=IsActive%20eq%201&$top=4&$orderby=Order0 desc";
        axios.get(endPointUrl).then((response) => {    
        this.News = response.data.value;      
      });
    },

    GetBurseVaSaham: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('لیست تایل های صفحه اول')/items?$select=Id,Title,ImageUrl,NewsDate,Location&$filter=IsActive%20eq%201%20and%20Location%20eq%20'BurseVaSaham'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        this.BurseVaSaham = response.data.value;
      });
    },

    GetLinksMofid: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('دسترسی سریع')/items?$select=Id,Title,ImageUrl,NewsDate,TxtLink,NoeLink,Location,Order0&$filter=IsActive%20eq%201%20&$$top=7&$orderby=Order0 desc";
      axios.get(endPointUrl).then((response) => {
        console.log('dastredi sari',response.data.value)
        this.LinksMofid = response.data.value;         
      });
    },

    GetSlider: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('اسلایدر')/items?$select=*,FileRef,FileLeafRef,TxtLink,NoeLink";                                              
      axios.get(endPointUrl).then((response) => {
        this.Slider = response.data.value;
      });
    },
  },
  data() {
    return {                                                   
      SiteAdrs: "/Admin/",         
      links: [],                                               
      stockLinks: [],                                          
      services: [],                                          
      MatneSarie2SafheAval: [],                              
      MatneSarie1SafheAval: [],                              
      News: [],                     
      BurseVaSaham: [],
      LinksMofid: [],
      Slider: ['../../assets/slider/slider1.png' , '../../assets/slider/slider1.png'],
    };
  },
});
</script>