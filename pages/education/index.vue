<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
import HeaderComponent from "~/components/global/HeaderCompnent/HeaderComponent.vue";
import FooterComponent from "~/components/global/FooterComponent/FooterComponent.vue";
import GoldDivider from "~/components/Icons/gold-divider.vue";
export default defineComponent({
  name: "EducationPage",
  components: { GoldDivider, FooterComponent, HeaderComponent },
  data() {
    return {
      SiteAdrs: "/Admin/",
      Education: [],
      searchedText: "",
      educations: [
        {
          title: "آموزش افتتاح حساب ارزی",
          id: "1",
          views: 753,
          createdAt: " ۲۲ فروردین ۱۴۰۲",
          img: "learning-1.png",
        },
        {
          title: "آموزش دریافت رمز پویا برای خرید اینترنتی",
          id: "22",
          views: 753,
          createdAt: " ۲۲ فروردین ۱۴۰۲",
          img: "learning-2.png",
        },
        {
          title: "آموزش پرداخت آنلاین",
          id: "3",
          views: 753,
          createdAt: " ۲۲ فروردین ۱۴۰۲",
          img: "learning-3.png",
        },
        {
          title: "آموزش نصب برنامه همراه بانک صادرات",
          id: "4",
          views: 753,
          createdAt: " ۲۲ فروردین ۱۴۰۲",
          img: "learning-4.png",
          duration: "۰۴:۲۳",
        },
        {
          title: "آموزش پرداخت آنلاین",
          id: "3",
          views: 753,
          createdAt: " ۲۲ فروردین ۱۴۰۲",
          img: "learning-3.png",
          duration: "۰۴:۲۳",
        },
        {
          title: "آموزش دریافت رمز پویا برای خرید اینترنتی",
          id: "22",
          views: 753,
          createdAt: " ۲۲ فروردین ۱۴۰۲",
          img: "learning-2.png",
          duration: "۰۴:۲۳",
        },
        {
          title: "آموزش افتتاح حساب ارزی",
          id: "1",
          views: 753,
          createdAt: " ۲۲ فروردین ۱۴۰۲",
          img: "learning-1.png",
        },
        {
          title: "آموزش نصب برنامه همراه بانک صادرات",
          id: "4",
          views: 753,
          createdAt: " ۲۲ فروردین ۱۴۰۲",
          img: "learning-4.png",
        },
        {
          title: "آموزش افتتاح حساب ارزی",
          id: "1",
          views: 753,
          createdAt: " ۲۲ فروردین ۱۴۰۲",
          img: "learning-1.png",
        },
        {
          title: "آموزش دریافت رمز پویا برای خرید اینترنتی",
          id: "22",
          views: 753,
          createdAt: " ۲۲ فروردین ۱۴۰۲",
          img: "learning-2.png",
        },
        {
          title: "آموزش پرداخت آنلاین",
          id: "3",
          views: 753,
          createdAt: " ۲۲ فروردین ۱۴۰۲",
          img: "learning-3.png",
        },
        {
          title: "آموزش نصب برنامه همراه بانک صادرات",
          id: "4",
          views: 753,
          createdAt: " ۲۲ فروردین ۱۴۰۲",
          img: "learning-4.png",
          duration: "۰۴:۲۳",
        },
        {
          title: "آموزش پرداخت آنلاین",
          id: "3",
          views: 753,
          createdAt: " ۲۲ فروردین ۱۴۰۲",
          img: "learning-3.png",
          duration: "۰۴:۲۳",
        },
        {
          title: "آموزش دریافت رمز پویا برای خرید اینترنتی",
          id: "22",
          views: 753,
          createdAt: " ۲۲ فروردین ۱۴۰۲",
          img: "learning-2.png",
          duration: "۰۴:۲۳",
        },
        {
          title: "آموزش افتتاح حساب ارزی",
          id: "1",
          views: 753,
          createdAt: " ۲۲ فروردین ۱۴۰۲",
          img: "learning-1.png",
        },
        {
          title: "آموزش نصب برنامه همراه بانک صادرات",
          id: "4",
          views: 753,
          createdAt: " ۲۲ فروردین ۱۴۰۲",
          img: "learning-4.png",
        },
      ] as {
        title: string;
        id: string;
        views: number;
        duration?: string;
        createdAt: string;
        img: string;
      }[],
    };
  },
  methods: {
    search(): void {},
    // var options1 = { year: "numeric", month: "long", day: "numeric" };
    GetEducation: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('لیست کتابخانه آموزش خدمات و محصولات بانک صادرات ایران')/items?$select=Id,Title,Modified,TxtLink,Img";
      axios.get(endPointUrl).then((response) => {
        const newObjArr = response.data.value.map((obj: any) => {
          return {
            ...obj,
            Modified: new Date(obj.Modified).toLocaleDateString("fa-IR"),
          };
        });
        this.Education = newObjArr;
      });
      document.title="کتابخانه آموزش خدمات و محصولات بانک صادرات ایران";
    },
  },
  mounted() {
    this.GetEducation();
  },
});
</script>

<template src="./EducationPage.html"></template>

<style src="./EducationPage.scss" scoped lang="scss">
</style>
