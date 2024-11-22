<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import HeaderComponent from "~/components/global/HeaderCompnent/HeaderComponent.vue";
import FooterComponent from "~/components/global/FooterComponent/FooterComponent.vue";
import DownChevronIcon from "~/components/Icons/down-chevron.vue";
import IranMapComponent from "~/components/IranMapComponent/IranMapComponent.vue";
import { DirectorsDtoModel } from "~/core/models/directors.model";

export default defineComponent({
  name: "RulesPage",
  components: { IranMapComponent, DownChevronIcon, FooterComponent, HeaderComponent },
  mounted: function () {
    this.GetRulesFirstTab();
  },
  methods: {
    GetRulesFirstTab: function () {
      var endPointUrl =
        this.SiteAdrs +
        // "/_api/web/lists/getbyTitle('دسترسی سریع')/items?$select=Id,Title&$filter=IsActive%20eq%201%20";
        "/_api/web/lists/getbyTitle('دسترسی سریع')/items?$select=Id,Title";
      axios.get(endPointUrl).then((response) => {     
        // this.Rules = response.data.value;  
        this.tabs[0].links=response.data.value;
      });
      document.title="دسترسی سریع";
    },
  },
  data() {
    return {
      toggle_exclusive: 0,
      SiteAdrs: "/Admin/",
      tabs: [
        {
          tabName: "استانداردهای شفافیت و انتشار اطلاعات",
          links: [
            {
              name: "قانون مبارزه با پولشویی",
              link:
                "https://bsi.ir/Documents/MoneyLaundering/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D8%B5%D9%84%D8%A7%D8%AD%20%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D9%85%D8%A8%D8%A7%D8%B1%D8%B2%D9%87%20%D8%A8%D8%A7%20%D8%AA%D8%A7%D9%85%DB%8C%D9%86%20%D9%85%D8%A7%D9%84%DB%8C%20%D8%AA%D8%B1%D9%88%D8%B1%DB%8C%D8%B3%D9%85.pdf",
            },
            {
              name: "قانون اصلاح قانون مبارزه با پولوشویی",
              link:
                "https://bsi.ir/Documents/MoneyLaundering/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D8%B5%D9%84%D8%A7%D8%AD%20%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D9%85%D8%A8%D8%A7%D8%B1%D8%B2%D9%87%20%D8%A8%D8%A7%20%D8%AA%D8%A7%D9%85%DB%8C%D9%86%20%D9%85%D8%A7%D9%84%DB%8C%20%D8%AA%D8%B1%D9%88%D8%B1%DB%8C%D8%B3%D9%85.pdf",
            },
            {
              name: "قانون مبارزه با تامین مالی تروریسم",
              link:
                "https://bsi.ir/Documents/MoneyLaundering/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D8%B5%D9%84%D8%A7%D8%AD%20%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D9%85%D8%A8%D8%A7%D8%B1%D8%B2%D9%87%20%D8%A8%D8%A7%20%D8%AA%D8%A7%D9%85%DB%8C%D9%86%20%D9%85%D8%A7%D9%84%DB%8C%20%D8%AA%D8%B1%D9%88%D8%B1%DB%8C%D8%B3%D9%85.pdf",
            },
            {
              name: "قانون اصلاح قانون مبارزه با تامین مالی تروریسم",
              link:
                "https://bsi.ir/Documents/MoneyLaundering/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D8%B5%D9%84%D8%A7%D8%AD%20%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D9%85%D8%A8%D8%A7%D8%B1%D8%B2%D9%87%20%D8%A8%D8%A7%20%D8%AA%D8%A7%D9%85%DB%8C%D9%86%20%D9%85%D8%A7%D9%84%DB%8C%20%D8%AA%D8%B1%D9%88%D8%B1%DB%8C%D8%B3%D9%85.pdf",
            },
            {
              name: "آيين نامه مدت و طرز نگاهداری اوراق بازرگانی، اسناد و دفاتر بانک ها",
              link:
                "https://bsi.ir/Documents/MoneyLaundering/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D8%B5%D9%84%D8%A7%D8%AD%20%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D9%85%D8%A8%D8%A7%D8%B1%D8%B2%D9%87%20%D8%A8%D8%A7%20%D8%AA%D8%A7%D9%85%DB%8C%D9%86%20%D9%85%D8%A7%D9%84%DB%8C%20%D8%AA%D8%B1%D9%88%D8%B1%DB%8C%D8%B3%D9%85.pdf",
            },
            {
              name: "دستورالعمل اجرایی مبارزه با پولشویی در صرافی ها",
              link:
                "https://bsi.ir/Documents/MoneyLaundering/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D8%B5%D9%84%D8%A7%D8%AD%20%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D9%85%D8%A8%D8%A7%D8%B1%D8%B2%D9%87%20%D8%A8%D8%A7%20%D8%AA%D8%A7%D9%85%DB%8C%D9%86%20%D9%85%D8%A7%D9%84%DB%8C%20%D8%AA%D8%B1%D9%88%D8%B1%DB%8C%D8%B3%D9%85.pdf",
            },
            {
              name: "دستورالعمل اجرایی نحوه گزارش واريز نقدی وجوه بيش از سقف مقرر",
              link:
                "https://bsi.ir/Documents/MoneyLaundering/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D8%B5%D9%84%D8%A7%D8%AD%20%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D9%85%D8%A8%D8%A7%D8%B1%D8%B2%D9%87%20%D8%A8%D8%A7%20%D8%AA%D8%A7%D9%85%DB%8C%D9%86%20%D9%85%D8%A7%D9%84%DB%8C%20%D8%AA%D8%B1%D9%88%D8%B1%DB%8C%D8%B3%D9%85.pdf",
            },
            {
              name: "دستورالعمل چگونگی شناسايی مشتريان ايرانی موسسات اعتباری",
              link:
                "https://bsi.ir/Documents/MoneyLaundering/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D8%B5%D9%84%D8%A7%D8%AD%20%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D9%85%D8%A8%D8%A7%D8%B1%D8%B2%D9%87%20%D8%A8%D8%A7%20%D8%AA%D8%A7%D9%85%DB%8C%D9%86%20%D9%85%D8%A7%D9%84%DB%8C%20%D8%AA%D8%B1%D9%88%D8%B1%DB%8C%D8%B3%D9%85.pdf",
            },
            {
              name: "دستورالعمل چگونگی شناسایی مشتريان خارجی موسسات اعتباری",
              link:
                "https://bsi.ir/Documents/MoneyLaundering/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D8%B5%D9%84%D8%A7%D8%AD%20%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D9%85%D8%A8%D8%A7%D8%B1%D8%B2%D9%87%20%D8%A8%D8%A7%20%D8%AA%D8%A7%D9%85%DB%8C%D9%86%20%D9%85%D8%A7%D9%84%DB%8C%20%D8%AA%D8%B1%D9%88%D8%B1%DB%8C%D8%B3%D9%85.pdf",
            },
            {
              name: "ستورالعمل شناسایی معاملات مشکوک و شيوه گزارش دهی",
              link:
                "https://bsi.ir/Documents/MoneyLaundering/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D8%B5%D9%84%D8%A7%D8%AD%20%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D9%85%D8%A8%D8%A7%D8%B1%D8%B2%D9%87%20%D8%A8%D8%A7%20%D8%AA%D8%A7%D9%85%DB%8C%D9%86%20%D9%85%D8%A7%D9%84%DB%8C%20%D8%AA%D8%B1%D9%88%D8%B1%DB%8C%D8%B3%D9%85.pdf",
            },
            {
              name:
                "دستورالعمل لزوم رعايت مقررات مبارزه با پول‌شویی در روابط کارگزاری و شناسایی بانک های پوسته ای",
              link:
                "https://bsi.ir/Documents/MoneyLaundering/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D8%B5%D9%84%D8%A7%D8%AD%20%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D9%85%D8%A8%D8%A7%D8%B1%D8%B2%D9%87%20%D8%A8%D8%A7%20%D8%AA%D8%A7%D9%85%DB%8C%D9%86%20%D9%85%D8%A7%D9%84%DB%8C%20%D8%AA%D8%B1%D9%88%D8%B1%DB%8C%D8%B3%D9%85.pdf",
            },
            {
              name:
                "دستورالعمل مجموعه اقدامات و تدابير لازم برای حصول اطمينان از رعايت مقررات مبارزه با پولشویی در واحد های برون مرزی موسسات اعتباری",
              link:
                "https://bsi.ir/Documents/MoneyLaundering/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D8%B5%D9%84%D8%A7%D8%AD%20%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D9%85%D8%A8%D8%A7%D8%B1%D8%B2%D9%87%20%D8%A8%D8%A7%20%D8%AA%D8%A7%D9%85%DB%8C%D9%86%20%D9%85%D8%A7%D9%84%DB%8C%20%D8%AA%D8%B1%D9%88%D8%B1%DB%8C%D8%B3%D9%85.pdf",
            },
            {
              name:
                "دستورالعمل نحوه ارسال اسناد و مدارک مشتريان موسسات اعتباری به نشانی پستی آن ها",
              link:
                "https://bsi.ir/Documents/MoneyLaundering/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D8%B5%D9%84%D8%A7%D8%AD%20%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D9%85%D8%A8%D8%A7%D8%B1%D8%B2%D9%87%20%D8%A8%D8%A7%20%D8%AA%D8%A7%D9%85%DB%8C%D9%86%20%D9%85%D8%A7%D9%84%DB%8C%20%D8%AA%D8%B1%D9%88%D8%B1%DB%8C%D8%B3%D9%85.pdf",
            },
          ],
        },
      ] as {
        tabName: string;
        links: { name: string; link: string }[];
      }[],
    };
  },
});
</script>

<template src="./RulesPage.html"></template>

<style src="./RulesPage.scss" scoped lang="scss"></style>
