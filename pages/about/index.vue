<template src="./AboutPage.html"></template>
<style lang="scss" src="./AboutPage.scss" scoped></style>

<script lang="ts">
import axios from "axios";
import Vue from "vue";
import HeaderComponent from "~/components/global/HeaderCompnent/HeaderComponent.vue";
import FooterComponent from "~/components/global/FooterComponent/FooterComponent.vue";
import { defineComponent } from "vue";

// export default defineComponent({
//   });

export default Vue.extend({
  name: "AboutPage",
  components: { HeaderComponent, FooterComponent },
  mounted: function () {
    this.GetHeaderAboutMe();
    this.GetRightAboutMe();        
    this.GetLeftTopAboutMe();             
    this.GetLeftBottomAboutMe();        
    this.GetBottomAboutMe();                  
    this.GetHeaderButtonRight();
    this.GetHeaderButtonLeft();
  },
  methods: {
    GetHeaderAboutMe: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('لیست درباره ما')/items?$select=Id,Title,TitleTwo,Image,Description,Link,Location&$filter=IsActive%20eq%201%20and%20Location%20eq%20'سر صفحه'";
      axios.get(endPointUrl).then((response) => {
        this.HeaderAboutMe = response.data.value;
        document.title='درباره ما';
      });
    },
    GetRightAboutMe: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('لیست درباره ما')/items?$select=Id,Title,TitleTwo,Image,Description,Link,Location&$filter=IsActive%20eq%201%20and%20Location%20eq%20'سمت راست'";
      axios.get(endPointUrl).then((response) => {
        this.RightAboutMe = response.data.value;
      });
    },
    GetLeftTopAboutMe: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('لیست درباره ما')/items?$select=Id,Title,TitleTwo,Image,Description,Link,Location&$filter=IsActive%20eq%201%20and%20Location%20eq%20'سمت چپ بالا'";
      axios.get(endPointUrl).then((response) => {
        this.LeftTopAboutMe = response.data.value;
      });
    },
    GetLeftBottomAboutMe: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('لیست درباره ما')/items?$select=Id,Title,TitleTwo,Image,Description,Link,Location&$filter=IsActive%20eq%201%20and%20Location%20eq%20'سمت چپ پایین'";
      axios.get(endPointUrl).then((response) => {
        this.LeftBottomAboutMe = response.data.value;
      });
    },
    GetBottomAboutMe: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('لیست درباره ما')/items?$select=Id,Title,TitleTwo,Image,Description,Link,Location&$filter=IsActive%20eq%201%20and%20Location%20eq%20'پایین'";
      axios.get(endPointUrl).then((response) => {
        this.BottomAboutMe = response.data.value;
      });
    },
      GetHeaderButtonRight: function () {
      var endPointUrl =
        this.SiteAdrs +         
        "/_api/web/lists/getbyTitle('لیست درباره ما')/items?$select=Id,Title,TitleTwo,Image,Description,Link,Location&$filter=IsActive%20eq%201%20and%20Location%20eq%20'دکمه سمت راست'";
        axios.get(endPointUrl).then((response) => {
        this.HeaderButtonRight = response.data.value;
      });
    },
    GetHeaderButtonLeft: function () {
      var endPointUrl =
        this.SiteAdrs +         
        "/_api/web/lists/getbyTitle('لیست درباره ما')/items?$select=Id,Title,TitleTwo,Image,Description,Link,Location&$filter=IsActive%20eq%201%20and%20Location%20eq%20'دکمه سمت چپ'";
        axios.get(endPointUrl).then((response) => {                                    
        this.HeaderButtonLeft = response.data.value;                             
      });
    },
  },
  data() {
    return {
      SiteAdrs: "/Admin/",
      HeaderAboutMe: [],
      RightAboutMe: [],
      LeftTopAboutMe: [],
      LeftBottomAboutMe: [],
      BottomAboutMe: [],
      HeaderButtonRight:[],
      HeaderButtonLeft:[],
    };
  },
});
</script>
