<template src="./DirectorsPage.html"></template>
<style lang="scss" src="./DirectorsPage.scss" scoped></style>

<script lang="ts">
import axios from "axios";
import Vue from "vue";
import HeaderComponent from "~/components/global/HeaderCompnent/HeaderComponent.vue";
import FooterComponent from "~/components/global/FooterComponent/FooterComponent.vue";
import { DirectorsDtoModel } from "~/core/models/directors.model";
import DownChevronIcon from "~/components/Icons/down-chevron.vue";
import IranMapComponent from "~/components/IranMapComponent/IranMapComponent.vue";

export default Vue.extend({
  name: "DirectorsPage",
  components: {
    IranMapComponent,
    DownChevronIcon,
    FooterComponent,                   
    HeaderComponent,
  },
  data() {
    return {
      SiteAdrs: "/Admin/",
      DirectorFirstTab: [],
      toggle_exclusive: 0,
      directorsTabs: [
        {
          tabName: "مدیرعامل و هیئت مدیره",
          directors: [
            // {
            //   name: "محسن سیفی کفشگری",
            //   avatar: "kafshgari.png",
            //   position: "مدیرعامل و عضو هیئت مدیره",
            //   fax: "۰۲۱-۴۱۴۷۶۲۳۲",
            //   mail: "s.z.imany@bsi.ir",
            //   phone: "۰۲۱-۸۸۳۰۷۸۲۲",
            //   resume:
            //     "https://www.eghtesadonline.com/%D9%85%D8%A4%D9%84%D9%81-3384-%D8%B3%DB%8C%D8%AF%D8%B6%DB%8C%D8%A7%D8%A1-%D8%A7%D9%84%D8%AF%DB%8C%D9%86-%D8%A7%DB%8C%D9%85%D8%A7%D9%86%DB%8C",
            //   isOpened: true,
            // },
            // {
            //   name: "سید ضیاء ایمانی",
            //   avatar: "imani.png",
            //   position: "رییس هیئت مدیره",
            //   fax: "۰۲۱-۴۱۴۷۶۲۳۲",
            //   mail: "s.z.imany@bsi.ir",
            //   phone: "۰۲۱-۸۸۳۰۷۸۲۲",
            //   resume:
            //     "https://www.eghtesadonline.com/%D9%85%D8%A4%D9%84%D9%81-3384-%D8%B3%DB%8C%D8%AF%D8%B6%DB%8C%D8%A7%D8%A1-%D8%A7%D9%84%D8%AF%DB%8C%D9%86-%D8%A7%DB%8C%D9%85%D8%A7%D9%86%DB%8C",
            //   isOpened: true,
            // },
            // {
            //   name: "یاسر مرادی",
            //   avatar: "moradi.png",
            //   position: "نایب رییس هیئت مدیره",
            //   fax: "۰۲۱-۴۱۴۷۶۲۳۲",
            //   mail: "s.z.imany@bsi.ir",
            //   phone: "۰۲۱-۸۸۳۰۷۸۲۲",
            //   resume:
            //     "https://www.eghtesadonline.com/%D9%85%D8%A4%D9%84%D9%81-3384-%D8%B3%DB%8C%D8%AF%D8%B6%DB%8C%D8%A7%D8%A1-%D8%A7%D9%84%D8%AF%DB%8C%D9%86-%D8%A7%DB%8C%D9%85%D8%A7%D9%86%DB%8C",
            //   isOpened: true,
            // },
            // {
            //   name: "محمدرضا حسین‌زاده",
            //   avatar: "hosseinzadeh.png",
            //   position: "عضو هیئت مدیره",
            //   fax: "۰۲۱-۴۱۴۷۶۲۳۲",
            //   mail: "s.z.imany@bsi.ir",
            //   phone: "۰۲۱-۸۸۳۰۷۸۲۲",
            //   resume:
            //     "https://www.eghtesadonline.com/%D9%85%D8%A4%D9%84%D9%81-3384-%D8%B3%DB%8C%D8%AF%D8%B6%DB%8C%D8%A7%D8%A1-%D8%A7%D9%84%D8%AF%DB%8C%D9%86-%D8%A7%DB%8C%D9%85%D8%A7%D9%86%DB%8C",
            //   isOpened: true,
            // },
            // {
            //   name: "امیر یوسفیان",
            //   avatar: "yousefian.png",
            //   position: "عضو هیئت مدیره",
            //   fax: "۰۲۱-۴۱۴۷۶۲۳۲",
            //   mail: "s.z.imany@bsi.ir",
            //   phone: "۰۲۱-۸۸۳۰۷۸۲۲",
            //   resume:
            //     "https://www.eghtesadonline.com/%D9%85%D8%A4%D9%84%D9%81-3384-%D8%B3%DB%8C%D8%AF%D8%B6%DB%8C%D8%A7%D8%A1-%D8%A7%D9%84%D8%AF%DB%8C%D9%86-%D8%A7%DB%8C%D9%85%D8%A7%D9%86%DB%8C",
            //   isOpened: true,
            // },
          ],
        },
        {
          tabName: "معاونین و مدیران امور",
          directors: [
            // {
            //   Title: "امیر یوسفیان",
            //   Image: "yousefian.png",
            //   Position: "عضو هیئت مدیره",
            //   Fax: "۰۲۱-۴۱۴۷۶۲۳۲",
            //   Mail: "s.z.imany@bsi.ir",
            //   Phone: "۰۲۱-۸۸۳۰۷۸۲۲",
            // },
            // {
            //   Title: "محسن سیفی کفشگری",
            //   Image: "kafshgari.png",
            //   Position: "عضو هیئت مدیره",
            //   Fax: "۰۲۱-۴۱۴۷۶۲۳۲",
            //   Mail: "s.z.imany@bsi.ir",
            //   Phone: "۰۲۱-۸۸۳۰۷۸۲۲",
            // },
            // {
            //   Title: "امیر یوسفیان",
            //   Image: "yousefian.png",
            //   Position: "عضو هیئت مدیره",
            //   Fax: "۰۲۱-۴۱۴۷۶۲۳۲",
            //   Mail: "s.z.imany@bsi.ir",
            //   Phone: "۰۲۱-۸۸۳۰۷۸۲۲",
            // },
            // {
            //   Title: "محسن سیفی کفشگری",
            //   Image: "kafshgari.png",
            //   Position: "عضو هیئت مدیره",
            //   Fax: "۰۲۱-۴۱۴۷۶۲۳۲",
            //   Mail: "s.z.imany@bsi.ir",
            //   Phone: "۰۲۱-۸۸۳۰۷۸۲۲",
            // },
          ],
        },

        {
          tabName: "مدیران ستاد مرکزی",
          directors: [
            // {
            //   Title: "امیر یوسفیان",
            //   Image: "yousefian.png",
            //   Position: "عضو هیئت مدیره",
            //   Fax: "۰۲۱-۴۱۴۷۶۲۳۲",
            //   Mail: "s.z.imany@bsi.ir",
            //   Phone: "۰۲۱-۸۸۳۰۷۸۲۲",
            // },
            // {
            //   Title: "محسن سیفی کفشگری",
            //   Image: "kafshgari.png",
            //   Position: "عضو هیئت مدیره",
            //   Fax: "۰۲۱-۴۱۴۷۶۲۳۲",
            //   Mail: "s.z.imany@bsi.ir",
            //   Phone: "۰۲۱-۸۸۳۰۷۸۲۲",
            // },
            // {
            //   Title: "محسن سیفی کفشگری",
            //   Image: "kafshgari.png",
            //   Position: "عضو هیئت مدیره",
            //   Fax: "۰۲۱-۴۱۴۷۶۲۳۲",
            //   Mail: "s.z.imany@bsi.ir",
            //   Phone: "۰۲۱-۸۸۳۰۷۸۲۲",
            // },
            // {
            //   Title: "امیر یوسفیان",
            //   Image: "yousefian.png",
            //   Position: "عضو هیئت مدیره",
            //   Fax: "۰۲۱-۴۱۴۷۶۲۳۲",
            //   Mail: "s.z.imany@bsi.ir",
            //   Phone: "۰۲۱-۸۸۳۰۷۸۲۲",
            // },
            // {
            //   name: "محسن سیفی کفشگری",
            //   avatar: "kafshgari.png",
            //   position: "عضو هیئت مدیره",
            //   fax: "۰۲۱-۴۱۴۷۶۲۳۲",
            //   mail: "s.z.imany@bsi.ir",
            //   phone: "۰۲۱-۸۸۳۰۷۸۲۲",
            // },
          ],
        },
        {
           tabName: "مدیران استانی",
        },
      ] as {
        directors: DirectorsDtoModel[];
        tabName: string;
      }[],
      stateDefaultDirectors: [
        // {
        //   Title: "محسن سیفی کفشگری",
        //   Image: "kafshgari.png",
        //   Position: "عضو هیئت مدیره",
        //   Phone: "۰۲۱-۸۸۳۰۷۸۲۲",
        //   State: "تهران",
        //   Address: "خراسان جنوبی، بلوار کمالی، پلاک ۷۹",
        // },
        // {
        //   Title: "محسن سیفی کفشگری",
        //   Image: "kafshgari.png",
        //   Position: "عضو هیئت مدیره",     
        //   Phone: "۰۲۱-۸۸۳۰۷۸۲۲",
        //   State: "تهران",
        //   Address: "خراسان جنوبی، بلوار کمالی، پلاک ۷۹",
        // },
        // {
        //   Title: "محسن سیفی کفشگری",
        //   Image: "kafshgari.png",
        //   Position: "عضو هیئت مدیره",
        //   Phone: "۰۲۱-۸۸۳۰۷۸۲۲",
        //   State: "تهران",
        //   Address: "خراسان جنوبی، بلوار کمالی، پلاک ۷۹",
        // },
      ] as DirectorsDtoModel[],
      stateDirector: [] as DirectorsDtoModel[] | undefined,
    };
  },
  methods: {
    toggleExpansion(director: DirectorsDtoModel): void {
      director.isOpened = director.isOpened !== true;
      this.$forceUpdate();
    },
    handleStateChange(stateName: string): void {
      console.log('farhad khafan');
      if (stateName) {
        this.stateDirector = this.stateDefaultDirectors.filter(                    
          (f) => f.State === stateName
        );
      } else {
        setTimeout(() => {
          this.stateDirector = [];
        }, 2000);
      }
      this.$forceUpdate();
    },

    GetDirectorFirstTab: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('لیست درباره مدیران بانک صادرات ایران(تب اول)')/items?$select=Id,Title,Image,Position,Fax,Mail,Phone,Resume,isOpened,Parent,Order0&$filter=IsActive%20eq%201%20and%20Parent%20eq%20'مدیرعامل و هیئت مدیره'&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        for (let i = 0; i < response.data.value.length; i++) {
          this.directorsTabs[0].directors.push(response.data.value[i]);
        }
          this.directorsTabs[0].directors.sort();
          document.title="درباره مدیران بانک صادرات ایران بانک صادرات ایران";
      });
    },
    GetDirectorSocondtTab: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('لیست درباره مدیران بانک صادرات ایران(تب دوم)')/items?$select=Id,Title,Image,Position,Fax,Mail,Phone,Resume,IsOpened,Order0&$filter=IsActive%20eq%201&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {    
        for (let i = 0; i < response.data.value.length; i++) {               
          this.directorsTabs[1].directors.push(response.data.value[i]);       
        }
           this.directorsTabs[1].directors.sort();
      });
    },
    GetDirectorThirdTab: function () {
      var endPointUrl =
        this.SiteAdrs +
         "/_api/web/lists/getbyTitle('لیست درباره مدیران بانک صادرات ایران(تب سوم)')/items?$select=Id,Title,Image,Position,Fax,Mail,Phone,Resume,IsOpened,Order0&$filter=IsActive%20eq%201&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {           
        for (let i = 0; i < response.data.value.length; i++) {               
          this.directorsTabs[2].directors.push(response.data.value[i]);       
        }
          this.directorsTabs[2].directors.sort();
      });
    },
    GetDirectorFourthTab: function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('لیست درباره مدیران بانک صادرات ایران(تب چهارم)')/items?$select=Id,Title,Image,Position,Phone,State,Address,Order0&$filter=IsActive%20eq%201&$orderby=Order0";
      axios.get(endPointUrl).then((response) => {
        for (let i = 0; i < response.data.value.length; i++) {
          this.stateDefaultDirectors.push(response.data.value[i]);     
          // this.stateDirector?.push(response.data.value[i])
        }
      });
    },
  },
  mounted() {
    this.GetDirectorFirstTab();
    this.GetDirectorSocondtTab();
    this.GetDirectorThirdTab();
    this.GetDirectorFourthTab();
  },
});
</script>
