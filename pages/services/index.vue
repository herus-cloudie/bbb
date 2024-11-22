<template src="./ServicesPage.html"></template>
<style lang="scss" src="./ServicesPage.scss" scoped></style>

<script lang="ts">
import axios from "axios";
import Vue from "vue";
import HeaderComponent from "~/components/global/HeaderCompnent/HeaderComponent.vue";
import ServiceBannerComponent from "~/components/ServiceBannerComponent/ServiceBannerComponent.vue";
import FooterComponent from "~/components/global/FooterComponent/FooterComponent.vue";

export default Vue.extend({
  name: "ServicesPage",
  components: { FooterComponent, ServiceBannerComponent, HeaderComponent },
  data() {
    return {
      toggle_exclusive: 0,
      tabs: ["ریالی", "ارزی"] as string[],
      SiteAdrs: "/Admin/",
      rialFacilitiesV: [],
      rialServicesV: [],
      rialDepositsV: [],
      arziBoxTopV: [],
      arziBoxTopV2: [],          
      arziBoxTopV3: [],
      arziBoxBottomV: [],
      arziBoxBottomV2: [],
      arziBoxBottomV3: [],
      arziTileTopV: [],
      arziTileBottomV: [],
      rialServiceTileOne:[],
      rialServiceTileTwo:[],
      rialServiceTileThree:[],
      rialFacilities: [
        {
          link: "/services/bank-services/morabehe",
          image: "misaq-icon.svg",
          title: "مرابحه",
          subtitle: "خرید آسان محصولات خانگی با همیاران سپهر بانک صادرات ایران",
        },
        {
          link: "/services",
          image: "sepehr-icon.svg",
          title: "قرض ‌الحسنه",
          subtitle: "خرید آسان محصولات خانگی با همیاران سپهر بانک صادرات ایران",
        },
        {
          link: "/services",
          image: "sejam.png",
          title: "فروش اقساطی",
          subtitle: "خرید آسان محصولات خانگی با همیاران سپهر بانک صادرات ایران",
        },
        {
          link: "/services",
          image: "sabaye-sepehr.png",
          title: "مضاربه",
          subtitle: "خرید آسان محصولات خانگی با همیاران سپهر بانک صادرات ایران",
        },
        {
          link: "/services",
          image: "sadr.png",
          title: "جعاله",
          subtitle: "خرید آسان محصولات خانگی با همیاران سپهر بانک صادرات ایران",
        },
        {
          link: "/services",
          image: "sahim-icon.svg",
          title: "سلف۲",
          subtitle: "خرید آسان محصولات خانگی با همیاران سپهر بانک صادرات ایران",
        },
        {
          link: "/services",
          image: "sepehr-icon.svg",
          title: "مشارکت مدنی",
          subtitle: "خرید آسان محصولات خانگی با همیاران سپهر بانک صادرات ایران",
        },
        {
          link: "/services",
          image: "sejam.png",
          title: "اجاره به شرط تملک",
          subtitle: "خرید آسان محصولات خانگی با همیاران سپهر بانک صادرات ایران",
        },
        {
          link: "/services",
          image: "sabaye-sepehr.png",
          title: "صندوق توسعه ملی",
          subtitle: "خرید آسان محصولات خانگی با همیاران سپهر بانک صادرات ایران",
        },
        {
          link: "/services",
          image: "sadr.png",
          title: "ضمانت نامه",
          subtitle: "خرید آسان محصولات خانگی با همیاران سپهر بانک صادرات ایران",
        },
        {
          link: "/services",
          image: "sahim-icon.svg",
          title: "فرم‌های دریافت تسهیلات",
          subtitle: "خرید آسان محصولات خانگی با همیاران سپهر بانک صادرات ایران",
        },
      ] as {
        title: string;
        link: string;
        subtitle: string;
        image: string;
      }[],
      rialDeposits: [
        {
          link: "/services/bank-services/qarz-hasane-saving",
          image: "misaq-icon.svg",
          title: "قرض الحسنه پس‌انداز",
          subtitle: "خرید آسان محصولات خانگی با همیاران سپهر بانک صادرات ایران",
        },
        {
          link: "/services",
          image: "sepehr-icon.svg",
          title: "قرض الحسنه جاری",
          subtitle: "خرید آسان محصولات خانگی با همیاران سپهر بانک صادرات ایران",
        },
        {
          link: "/services",
          image: "sejam.png",
          title: "سرمایه‌گذاری بلند مدت",
          subtitle: "خرید آسان محصولات خانگی با همیاران سپهر بانک صادرات ایران",
        },
        {
          link: "/services",
          image: "sabaye-sepehr.png",
          title: "سرمایه گذاری کوتاه مدت",
          subtitle: "خرید آسان محصولات خانگی با همیاران سپهر بانک صادرات ایران",
        },
        {
          link: "/services",
          image: "sadr.png",
          title: "گواهی سپرده",
          subtitle: "خرید آسان محصولات خانگی با همیاران سپهر بانک صادرات ایران",
        },
        {
          link: "/services",
          image: "sahim-icon.svg",
          title: "محسابه سود سپرده گنجینه سه",
          subtitle: "خرید آسان محصولات خانگی با همیاران سپهر بانک صادرات ایران",
        },
        {
          link: "/services/misagh-hoghooghi",
          image: "misaq-icon.svg",
          title: "محاسبه سود سپرده ریالی",
          subtitle: "خرید آسان محصولات خانگی با همیاران سپهر بانک صادرات ایران",
        },
      ] as {
        title: string;
        link: string;
        subtitle: string;
        image: string;
      }[],
      rialServices: [
        {
          link: "/services/sana",
          image: "misaq-icon.svg",
          title: "طرح سنا",
          subtitle: "خرید آسان محصولات خانگی با همیاران سپهر بانک صادرات ایران",
        },
        {
          link: "/services/misagh-hoghooghi",
          image: "sepehr-icon.svg",
          title: "طرح میثاق حقوقی",
          subtitle: "خرید آسان محصولات خانگی با همیاران سپهر بانک صادرات ایران",
        },
        {
          link: "/services/misagh-haghighi",
          image: "sejam.png",
          title: "طرح میثاق حقیقی",
          subtitle: "خرید آسان محصولات خانگی با همیاران سپهر بانک صادرات ایران",
        },
        {
          link: "/services/saba-sepehr",
          image: "sabaye-sepehr.png",
          title: "طرح صبای سپهر",
          subtitle: "خرید آسان محصولات خانگی با همیاران سپهر بانک صادرات ایران",
        },
        {
          link: "/services/hamyaran-sepehr",
          image: "sadr.png",
          title: "طرح همیاران سپهر",
          subtitle: "خرید آسان محصولات خانگی با همیاران سپهر بانک صادرات ایران",
        },
        {
          link: "/services/teravat",
          image: "sahim-icon.svg",
          title: "طرح طراوت ویژه تولید",
          subtitle: "خرید آسان محصولات خانگی با همیاران سپهر بانک صادرات ایران",
        },
        {
          link: "/services/withdrawal-without-card",
          image: "sejam.png",
          title: "برداشت وجه بدون کارت",
          subtitle: "خرید آسان محصولات خانگی با همیاران سپهر بانک صادرات ایران",
        },
      ] as {
        title: string;
        link: string;
        subtitle: string;
        image: string;
      }[],
      selectedRialService: -1,
      selectedArziService: -1,
    };
  },
  mounted: function () {
    this.GetrialFacilitiesV();
    this.GetrialServicesV();
    this.GetrialDepositsV();
    this.GetarziBoxTopV1();
    this.GetarziBoxTopV2();
    this.GetarziBoxTopV3();
    this.GetarziTileTopV1();
    this.GetarziTileBottomV();
    this.GetarziBoxBottomV();
    this.GetarziBoxBottomV2();
    this.GetarziBoxBottomV3();
    this.GetrialServiceTileOne();
    this.GetrialServiceTileTwo();
    this.GetrialServiceTileThree();
  },
  methods: {
    //
    GetrialServiceTileOne: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('تایل های خدمات بانکی(ریالی)')/items?$select=Id,Title,Image,Description,SubTitle&$filter=Order0%20eq%20'1'%20";
      axios.get(endPointUrl).then((response) => {
           this.rialServiceTileOne = response.data.value;
           document.title='خدمات بانکی بانک صادرات ایران';
      });
    },
     GetrialServiceTileTwo: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('تایل های خدمات بانکی(ریالی)')/items?$select=Id,Title,Image,Description,SubTitle&$filter=Order0%20eq%20'2'%20";
      axios.get(endPointUrl).then((response) => {
           this.rialServiceTileTwo = response.data.value;
      });
    },
     GetrialServiceTileThree: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('تایل های خدمات بانکی(ریالی)')/items?$select=Id,Title,Image,Description,SubTitle&$filter=Order0%20eq%20'3'%20";
      axios.get(endPointUrl).then((response) => {
           this.rialServiceTileThree = response.data.value;
      });
    },

    GetrialFacilitiesV: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('لیست خدمات بانکی')/items?$select=Id,Title,Image,Description,Link&$filter=IsActive%20eq%201%20and%20ServiceType%20eq%20'ریالی'%20and%20Parent%20eq%20'تسهیلات و تعهدات'";
      axios.get(endPointUrl).then((response) => {
        this.rialFacilitiesV = response.data.value;
      });
    },
    GetrialServicesV: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('لیست خدمات بانکی')/items?$select=Id,Title,Image,Description,Link&$filter=IsActive%20eq%201%20and%20ServiceType%20eq%20'ریالی'%20and%20Parent%20eq%20'طرح های بانکی'";
      axios.get(endPointUrl).then((response) => {
        this.rialServicesV = response.data.value;
      });
    },
    GetrialDepositsV: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('لیست خدمات بانکی')/items?$select=Id,Title,Image,Description,Link&$filter=IsActive%20eq%201%20and%20ServiceType%20eq%20'ریالی'%20and%20Parent%20eq%20'سپرده ها'";
      axios.get(endPointUrl).then((response) => {
        this.rialDepositsV = response.data.value;
      });
    },
    GetarziBoxTopV1: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('لیست خدمات بانکی')/items?$select=Id,Title,Description,Link&$filter=IsActive%20eq%201%20and%20ServiceType%20eq%20'ارزی'%20and%20Parent%20eq%20'مدیریت واردات کالا و خدمات'";
      axios.get(endPointUrl).then((response) => {      
        this.arziBoxTopV = response.data.value;
      });
    },
    GetarziBoxTopV2: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('لیست خدمات بانکی')/items?$select=Id,Title,Description,Link&$filter=IsActive%20eq%201%20and%20ServiceType%20eq%20'ارزی'%20and%20Parent%20eq%20'مدیریت دارایی ارزی مشتریان'";
      axios.get(endPointUrl).then((response) => {
        this.arziBoxTopV2 = response.data.value;
      });
    },
    GetarziBoxTopV3: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('لیست خدمات بانکی')/items?$select=Id,Title,Description,Link&$filter=IsActive%20eq%201%20and%20ServiceType%20eq%20'ارزی'%20and%20Parent%20eq%20'مدیریت صادرات کالا و خدمات'";
      axios.get(endPointUrl).then((response) => {
        this.arziBoxTopV3 = response.data.value;
      });
    },
    GetarziBoxBottomV: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('لیست خدمات بانکی')/items?$select=Id,Title,Description,Link&$filter=IsActive%20eq%201%20and%20ServiceType%20eq%20'ارزی'%20and%20Parent%20eq%20'ضمانت نامه ارزی'";
      axios.get(endPointUrl).then((response) => {
        this.arziBoxBottomV = response.data.value;
      });
    },
    GetarziBoxBottomV2: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('لیست خدمات بانکی')/items?$select=Id,Title,Description,Link&$filter=IsActive%20eq%201%20and%20ServiceType%20eq%20'ارزی'%20and%20Parent%20eq%20'تأمین مالی  ارزی'";
      axios.get(endPointUrl).then((response) => {
        this.arziBoxBottomV2 = response.data.value;
      });
    },
     GetarziBoxBottomV3: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('لیست خدمات بانکی')/items?$select=Id,Title,Description,Link&$filter=IsActive%20eq%201%20and%20ServiceType%20eq%20'ارزی'%20and%20Parent%20eq%20'سایر خدمات ارزی'";
      axios.get(endPointUrl).then((response) => {
        this.arziBoxBottomV3 = response.data.value;
      });
    },

    GetarziTileTopV1: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('لیست خدمات بانکی')/items?$select=Id,Title,Image,Description,SubDescription,Link&$filter=IsActive%20eq%201%20and%20ServiceType%20eq%20'ارزی'%20and%20Parent%20eq%20'بالا'";
      axios.get(endPointUrl).then((response) => {
        response.data.value[0].mouseOverCardArzi = "service-card-import";
        response.data.value[1].mouseOverCardArzi = "service-card-currency";
        response.data.value[2].mouseOverCardArzi = "service-card-export";
        response.data.value[0].id = "service-card-import";
        response.data.value[1].id = "service-card-currency";
        response.data.value[2].id = "service-card-export";
        this.arziTileTopV = response.data.value;
      });
    },
    GetarziTileBottomV: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('لیست خدمات بانکی')/items?$select=Id,Title,Image,Description,SubDescription,Link&$filter=IsActive%20eq%201%20and%20ServiceType%20eq%20'ارزی'%20and%20Parent%20eq%20'پایین'";
      axios.get(endPointUrl).then((response) => {
        response.data.value[0].mouseOverCardArzi = "service-card-guarantee";
        response.data.value[1].mouseOverCardArzi = "service-card-financing";
        response.data.value[2].mouseOverCardArzi = "service-card-other";
        response.data.value[0].id = "service-card-guarantee";
        response.data.value[1].id = "service-card-financing";
        response.data.value[2].id = "service-card-other";
        this.arziTileBottomV = response.data.value;
      });
    },
    //
    mouseOverCardRial(id: string): void {
      const idGroup: Array<string> = [
        "service-card-tashilat",
        "service-card-tarha",
        "service-card-sepordeha",
      ];
      idGroup.forEach((each, index) => {
        if (each != id) {
          document
            .getElementById(each)
            ?.classList.remove("activated-service-card");
        } else {
          document
            .getElementById(each)
            ?.classList.add("activated-service-card");
          this.selectedRialService = index;
        }
      });
    },
    mouseOverCardArzi(id: string): void {
      const idGroup: Array<string> = [
        "service-card-import",
        "service-card-currency",
        "service-card-export",
        "service-card-guarantee",
        "service-card-financing",
        "service-card-other",
      ];
      idGroup.forEach((each, index) => {
        if (each != id) {
          document
            .getElementById(each)
            ?.classList.remove("activated-service-card");
        } else {
          document
            .getElementById(each)
            ?.classList.add("activated-service-card");
          this.selectedArziService = index;
        }
      });
    },
  },
});
</script>
