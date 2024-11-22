<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import HeaderComponent from "~/components/global/HeaderCompnent/HeaderComponent.vue";
import FooterComponent from "~/components/global/FooterComponent/FooterComponent.vue";
import DownChevronIcon from "~/components/Icons/down-chevron.vue";
import IranMapComponent from "~/components/IranMapComponent/IranMapComponent.vue";
import { DirectorsDtoModel } from "~/core/models/directors.model";

export default defineComponent({
  name: "ManshourTatbighPage",
  components: { IranMapComponent, DownChevronIcon, FooterComponent, HeaderComponent },
  mounted: function () {
    // this.GetRulesFirstTab();
    // this.GetRulesSecondTab();        
    this.GetRulesThirdTab();
    // this.GetRulesSecondFourth();
  },
  methods: {
        GetRulesThirdTab: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('منشور تطبیق')/items?$select=Id,Title,Link&$filter=IsActive%20eq%201";
      axios.get(endPointUrl).then((response) => {
        // this.Rules = response.data.value;                  
        this.tabs[0].links=response.data.value;
      });
      document.title="منشور تطبیق بانک صادرات ایران";
    },
  },
  data() {
    return {
      toggle_exclusive: 0,
      SiteAdrs: "/Admin/",
      tabs: [
        {
          tabName: "مزایده املاک",
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
        // {
        //   tabName: "مزایده اموال",
        //   links: [
        //     {
        //       name:
        //         "کنوانسيون راجع‌ به جلوگيری و مجازات جرائم عليه اشخاص مورد حمایت بین المللی از جمله مأمورین سیاسی",
        //       link:
        //         "https://bsi.ir/Documents/MoneyLaundering/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D8%B5%D9%84%D8%A7%D8%AD%20%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D9%85%D8%A8%D8%A7%D8%B1%D8%B2%D9%87%20%D8%A8%D8%A7%20%D8%AA%D8%A7%D9%85%DB%8C%D9%86%20%D9%85%D8%A7%D9%84%DB%8C%20%D8%AA%D8%B1%D9%88%D8%B1%DB%8C%D8%B3%D9%85.pdf",
        //     },
        //     {
        //       name: "کنوانسيون سازمان ملل متحد برای مبارزه با جرائم سازمان‌يافته فراملی",
        //       link:
        //         "https://bsi.ir/Documents/MoneyLaundering/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D8%B5%D9%84%D8%A7%D8%AD%20%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D9%85%D8%A8%D8%A7%D8%B1%D8%B2%D9%87%20%D8%A8%D8%A7%20%D8%AA%D8%A7%D9%85%DB%8C%D9%86%20%D9%85%D8%A7%D9%84%DB%8C%20%D8%AA%D8%B1%D9%88%D8%B1%DB%8C%D8%B3%D9%85.pdf",
        //     },
        //     {
        //       name: "کنوانسيون سازمان ملل متحد برای مبارزه با فساد",
        //       link:
        //         "https://bsi.ir/Documents/MoneyLaundering/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D8%B5%D9%84%D8%A7%D8%AD%20%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D9%85%D8%A8%D8%A7%D8%B1%D8%B2%D9%87%20%D8%A8%D8%A7%20%D8%AA%D8%A7%D9%85%DB%8C%D9%86%20%D9%85%D8%A7%D9%84%DB%8C%20%D8%AA%D8%B1%D9%88%D8%B1%DB%8C%D8%B3%D9%85.pdf",
        //     },
        //     {
        //       name:
        //         "کنوانسيون سازمان ملل متحد درباره قاچاق غيرقانونی مواد مخدر و داروهای روانگردان",
        //       link:
        //         "https://bsi.ir/Documents/MoneyLaundering/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D8%B5%D9%84%D8%A7%D8%AD%20%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D9%85%D8%A8%D8%A7%D8%B1%D8%B2%D9%87%20%D8%A8%D8%A7%20%D8%AA%D8%A7%D9%85%DB%8C%D9%86%20%D9%85%D8%A7%D9%84%DB%8C%20%D8%AA%D8%B1%D9%88%D8%B1%DB%8C%D8%B3%D9%85.pdf",
        //     },
        //     {
        //       name: "کنوانسيون مقابله با تأمين مالی تروريسم",
        //       link:
        //         "https://bsi.ir/Documents/MoneyLaundering/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D8%B5%D9%84%D8%A7%D8%AD%20%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D9%85%D8%A8%D8%A7%D8%B1%D8%B2%D9%87%20%D8%A8%D8%A7%20%D8%AA%D8%A7%D9%85%DB%8C%D9%86%20%D9%85%D8%A7%D9%84%DB%8C%20%D8%AA%D8%B1%D9%88%D8%B1%DB%8C%D8%B3%D9%85.pdf",
        //     },
        //   ],
        // },
        // {
        //   tabName: "مناقصه",
        //   links: [
        //     {
        //       name: "تدابیر و ساز و کار لازم جهت تسهیل امور در اجرای ماده (44)",
        //       link:
        //         "https://bsi.ir/Documents/MoneyLaundering/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D8%B5%D9%84%D8%A7%D8%AD%20%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D9%85%D8%A8%D8%A7%D8%B1%D8%B2%D9%87%20%D8%A8%D8%A7%20%D8%AA%D8%A7%D9%85%DB%8C%D9%86%20%D9%85%D8%A7%D9%84%DB%8C%20%D8%AA%D8%B1%D9%88%D8%B1%DB%8C%D8%B3%D9%85.pdf",
        //     },
        //     {
        //       name: "لزوم اخذ شناسه ملی توسط تمامی اشخاص حقوقی مدارس و موارد مشاب",
        //       link:
        //         "https://bsi.ir/Documents/MoneyLaundering/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D8%B5%D9%84%D8%A7%D8%AD%20%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D9%85%D8%A8%D8%A7%D8%B1%D8%B2%D9%87%20%D8%A8%D8%A7%20%D8%AA%D8%A7%D9%85%DB%8C%D9%86%20%D9%85%D8%A7%D9%84%DB%8C%20%D8%AA%D8%B1%D9%88%D8%B1%DB%8C%D8%B3%D9%85.pdf",
        //     },
        //     {
        //       name: "لزوم توقف کلیه حساب‌های فاقد شماره یا شناسه ملی",
        //       link:
        //         "https://bsi.ir/Documents/MoneyLaundering/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D8%B5%D9%84%D8%A7%D8%AD%20%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D9%85%D8%A8%D8%A7%D8%B1%D8%B2%D9%87%20%D8%A8%D8%A7%20%D8%AA%D8%A7%D9%85%DB%8C%D9%86%20%D9%85%D8%A7%D9%84%DB%8C%20%D8%AA%D8%B1%D9%88%D8%B1%DB%8C%D8%B3%D9%85.pdf",
        //     },
        //     {
        //       name:
        //         "بیانیه سیاست مبارزه با پولشویی و تامین مالی تروریسم بانک - نسخه فارسی",
        //       link:
        //         "https://bsi.ir/Documents/MoneyLaundering/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D8%B5%D9%84%D8%A7%D8%AD%20%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D9%85%D8%A8%D8%A7%D8%B1%D8%B2%D9%87%20%D8%A8%D8%A7%20%D8%AA%D8%A7%D9%85%DB%8C%D9%86%20%D9%85%D8%A7%D9%84%DB%8C%20%D8%AA%D8%B1%D9%88%D8%B1%DB%8C%D8%B3%D9%85.pdf",
        //     },
        //     {
        //       name:
        //         "بیانیه سیاست مبارزه با پولشویی و تامین مالی تروریسم بانک - نسخه انگلیسی (English Version)",
        //       link:
        //         "https://bsi.ir/Documents/MoneyLaundering/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D8%B5%D9%84%D8%A7%D8%AD%20%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D9%85%D8%A8%D8%A7%D8%B1%D8%B2%D9%87%20%D8%A8%D8%A7%20%D8%AA%D8%A7%D9%85%DB%8C%D9%86%20%D9%85%D8%A7%D9%84%DB%8C%20%D8%AA%D8%B1%D9%88%D8%B1%DB%8C%D8%B3%D9%85.pdf",
        //     },
        //   ],
        // },
        //   {
        //   tabName: "مزایده عمومی",
        //   links: [
        //     {
        //       name: "تدابیر و ساز و کار لازم جهت تسهیل امور در اجرای ماده (44)",
        //       link:
        //         "https://bsi.ir/Documents/MoneyLaundering/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D8%B5%D9%84%D8%A7%D8%AD%20%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D9%85%D8%A8%D8%A7%D8%B1%D8%B2%D9%87%20%D8%A8%D8%A7%20%D8%AA%D8%A7%D9%85%DB%8C%D9%86%20%D9%85%D8%A7%D9%84%DB%8C%20%D8%AA%D8%B1%D9%88%D8%B1%DB%8C%D8%B3%D9%85.pdf",
        //     },
        //     {
        //       name: "لزوم اخذ شناسه ملی توسط تمامی اشخاص حقوقی مدارس و موارد مشاب",
        //       link:
        //         "https://bsi.ir/Documents/MoneyLaundering/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D8%B5%D9%84%D8%A7%D8%AD%20%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D9%85%D8%A8%D8%A7%D8%B1%D8%B2%D9%87%20%D8%A8%D8%A7%20%D8%AA%D8%A7%D9%85%DB%8C%D9%86%20%D9%85%D8%A7%D9%84%DB%8C%20%D8%AA%D8%B1%D9%88%D8%B1%DB%8C%D8%B3%D9%85.pdf",
        //     },
        //     {
        //       name: "لزوم توقف کلیه حساب‌های فاقد شماره یا شناسه ملی",
        //       link:
        //         "https://bsi.ir/Documents/MoneyLaundering/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D8%B5%D9%84%D8%A7%D8%AD%20%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D9%85%D8%A8%D8%A7%D8%B1%D8%B2%D9%87%20%D8%A8%D8%A7%20%D8%AA%D8%A7%D9%85%DB%8C%D9%86%20%D9%85%D8%A7%D9%84%DB%8C%20%D8%AA%D8%B1%D9%88%D8%B1%DB%8C%D8%B3%D9%85.pdf",
        //     },
        //     {
        //       name:
        //         "بیانیه سیاست مبارزه با پولشویی و تامین مالی تروریسم بانک - نسخه فارسی",
        //       link:
        //         "https://bsi.ir/Documents/MoneyLaundering/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D8%B5%D9%84%D8%A7%D8%AD%20%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D9%85%D8%A8%D8%A7%D8%B1%D8%B2%D9%87%20%D8%A8%D8%A7%20%D8%AA%D8%A7%D9%85%DB%8C%D9%86%20%D9%85%D8%A7%D9%84%DB%8C%20%D8%AA%D8%B1%D9%88%D8%B1%DB%8C%D8%B3%D9%85.pdf",
        //     },
        //     {
        //       name:
        //         "بیانیه سیاست مبارزه با پولشویی و تامین مالی تروریسم بانک - نسخه انگلیسی (English Version)",
        //       link:
        //         "https://bsi.ir/Documents/MoneyLaundering/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D8%B5%D9%84%D8%A7%D8%AD%20%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D9%85%D8%A8%D8%A7%D8%B1%D8%B2%D9%87%20%D8%A8%D8%A7%20%D8%AA%D8%A7%D9%85%DB%8C%D9%86%20%D9%85%D8%A7%D9%84%DB%8C%20%D8%AA%D8%B1%D9%88%D8%B1%DB%8C%D8%B3%D9%85.pdf",
        //     },
        //   ],
        // },
      ] as {
        tabName: string;
        links: { name: string; link: string }[];
      }[],
    };
  },
});
</script>

<template src="./manshourtatbighPage.html"></template>

<style src="./manshourtatbighPage.scss" scoped lang="scss"></style>
