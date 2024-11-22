<template src="./ContactPage.html"></template>
<style lang="scss" src="./ContactPage.scss" scoped></style>

<script lang="ts">
import axios from "axios";
import Vue from "vue";
import HeaderComponent from "~/components/global/HeaderCompnent/HeaderComponent.vue";
import PrintButtonComponent from "~/components/global/PrintButtonComponent/PrintButtonComponent.vue";
import CopyToButtonComponent from "~/components/global/CopyToButtonComponent/CopyToButtonComponent.vue";
import FooterComponent from "~/components/global/FooterComponent/FooterComponent.vue";
import AboutLinkListComponent from "~/components/AboutLinkList/AboutLinkListComponent.vue";
{/* // import { VueReCaptcha } from 'vue-recaptcha-v3' */}
{/* import VueRecaptcha from 'vue-recaptcha-v3'; */}
export default Vue.extend({
  name: "ContactPage",
  components: {
    AboutLinkListComponent,
    FooterComponent,
    CopyToButtonComponent,             
    PrintButtonComponent,
    HeaderComponent,
  },
  data() {
    return {
      loginform:{
        firstName:null,
        lastName:null,
      },
      ContactRightMenu: [],
      outbutform:'',
      SiteAdrs: "/Admin/",              
      // links: [
      //   {
      //     link: "/contact",
      //     title: "اداره کل روابط عمومی",
      //   },
      //   {
      //     link: "/#",
      //     title: "ارتباط با مدیرعامل",
      //   },
      //   {
      //     link: "/#",
      //     title: "ستاد خبری امور حراست و حفاظت",
      //   },
      //   {
      //     link: "/#",
      //     title: "پرسش‌های متداول",
      //   },
      //   {
      //     link: "/#",
      //     title: "نظرسنجی",
      //   },
      //   {
      //     link: "/#",
      //     title: "بازرسین ویژه مدیر عامل",
      //   },
      //   {
      //     link: "/#",
      //     title: "نظرسنجی گرافیک سایت",
      //   },
      // ],
      valid: false,
      validCheckCall: false,
      issueTrackingCode: "",
      firstName: "",
      lastName: "",
      nameRules: [(v: string) => !!v || "نام و نام خانوادگی اجباری است"],
      email: "",
      emailRules: [
        (v: string) => !!v || "پست الکترونیکی اجباری است",
        (v: string) => /.+@.+\..+/.test(v) || "پست الکترونیکی صحیح نمی باشد",
      ],
      contactSubject: "",
      contactSubjectRules: [(v: string) => !!v || "موضوع تماس اجباری است"],
      description: "",
      descriptionRules: [(v: string) => !!v || "توضیحات اجباری است"],
      items: ["مورد 1", "مورد 2", "مورد 3"],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 17,
      center: [35.705858, 51.427559],
      markerLatLng: [35.705858, 51.427559],
      toggle_exclusive: 0,
      tabs: [
        "فرم تماس با روابط عمومی",
        "پیگیری تماس با روابط عمومی",
      ] as string[],
    };
  },
  mounted() {
    this.GetContactRightMenu();
  },
  computed: {},
  methods: {
    GetContactRightMenu: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('لیست ارتباط با ما')/items?$select=Id,Title,Link,NoeLink&$filter=IsActive%20eq%201%20and%20Position%20eq%20'منوی سمت راست'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        console.log("ContactRightMenu===>>>>", response.data.value);
        response.data.value.forEach(function (data: any) {
          data["title"] = data["Title"];
          data["link"] = data["Link"];
          delete data["Title"];
          delete data["Link"];
        });
        this.ContactRightMenu = response.data.value;
        document.title='ارتباط با ما';
      });
    },

    submitForm() {
      (this.$refs.form as any)?.validate();
      // if(grecaptcha.getResponse().length === 0){
      //   alert('you are robot');
      // };
      console.log(this.loginform.firstName);
    },
    submitCheckForm() {
      (this.$refs.backupForm as any)?.validate();
    },
  },
});
</script>

function renameKeys(value: any, newKeys: { Link: string; Title: string; }) {
  throw new Error("Function not implemented.");
}
