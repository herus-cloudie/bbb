<template src="./NewsArchive.html"></template>
<style lang="scss" src="./NewsArchive.scss" scoped></style>

<script lang="ts">
import Vue from 'vue';
import axios from "axios";
import HeaderComponent from "~/components/global/HeaderCompnent/HeaderComponent.vue";
import FooterComponent from "~/components/global/FooterComponent/FooterComponent.vue";

export default Vue.extend({
  name: 'NewsArchive',
  components: {
    FooterComponent,
    HeaderComponent
  },
  async mounted() {
    this.GetAllNews();
  },
  data() {
    return {
      SiteAdrs: "/Admin/",
      News:[],
      months: [
        'مرداد ۱۴۰۲',
        'تیر ۱۴۰۲',
        'خرداد ۱۴۰۲',
        'اردیبهشت ۱۴۰۲',
        'فروردین ۱۴۰۲',
        'اسفند ۱۴۰۱',
        'بهمن ۱۴۰۱',
        'دی ۱۴۰۱',
        'آذر ۱۴۰۱',
        'آبان ۱۴۰۱',
        'مهر ۱۴۰۱',
        'شهریور ۱۴۰۱',
      ] as string[],
      calendarSectionHeight: '500px',
    }
  },
  methods: {
    dateSelected(date: { toString: () => any; }) {
      console.log('date', date.toString())
    },
    calendarOpened() {
      this.calendarSectionHeight = '500px'
    },
    calendarClosed() {
      this.calendarSectionHeight = '0'
    },

    GetAllNews: async function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('اخبار')/items?$select=Id,Title,ImageUrl,NewsDate,Order0&$filter=IsActive%20eq%201&$top=4&$orderby=Order0 desc";
      await axios.get(endPointUrl).then((response) => {
        this.News = response.data.value;
        document.title='آرشیو اخبار بانک صادرات ایران'
      });
    },                   
    sliceArray<T>(array: T[], from: number, to?: number): T[] {           
      return array.slice(from, to);
    },
  }
})
</script>
