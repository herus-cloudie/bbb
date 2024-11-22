<template src="./NewsPage.html"></template>
<style lang="scss" src="./NewsPage.scss" scoped></style>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import HeaderComponent from "~/components/global/HeaderCompnent/HeaderComponent.vue";
import FooterComponent from "~/components/global/FooterComponent/FooterComponent.vue";

export default Vue.extend({
  name: "NewsPage",
  components: { FooterComponent, HeaderComponent },

  async mounted() {
    this.GetContactRightMenu();
  },
  data() {
    return {
      SiteAdrs: "/Admin/",
      news: [
        {
          id: "1",
          image: "news-example-0.png",
          title: "حضور مؤثر بانک صادرات ایران در پانزدهمین نمایشگاه صنعت مالی",
          description:
            "ظرفیت واحدهای نظارتی برای دستیابی به اهداف راهبردی بانک، چراغ راهنما است...",
          created: "۲۲ فروردین ۱۴۰۲",
          ImageUrl: "news-example-0.png",
        },
        {
          id: "2",
          image: "news-example-1.png",
          title: "حضور مؤثر بانک صادرات ایران در پانزدهمین نمایشگاه صنعت مالی",     
          description:
            "ظرفیت واحدهای نظارتی برای دستیابی به اهداف راهبردی بانک، چراغ راهنما است...",
          created: "۲۲ فروردین ۱۴۰۲",
          ImageUrl: "news-example-0.png",
        },
        {
          id: "3",
          image: "news-example-1.png",
          title: "حضور مؤثر بانک صادرات ایران در پانزدهمین نمایشگاه صنعت مالی",
          description:
            "ظرفیت واحدهای نظارتی برای دستیابی به اهداف راهبردی بانک، چراغ راهنما است...",
          created: "۲۲ فروردین ۱۴۰۲",
          ImageUrl: "news-example-0.png",
        },
        {
          id: "4",
          image: "news-example-1.png",
          title: "حضور مؤثر بانک صادرات ایران در پانزدهمین نمایشگاه صنعت مالی",
          description:
            "ظرفیت واحدهای نظارتی برای دستیابی به اهداف راهبردی بانک، چراغ راهنما است...",
          created: "۲۲ فروردین ۱۴۰۲",
          ImageUrl: "news-example-0.png",
        },
        {
          id: "5",
          image: "news-example-1.png",
          title: "حضور مؤثر بانک صادرات ایران در پانزدهمین نمایشگاه صنعت مالی",
          description:
            "ظرفیت واحدهای نظارتی برای دستیابی به اهداف راهبردی بانک، چراغ راهنما است...",
          created: "۲۲ فروردین ۱۴۰۲",
          ImageUrl: "news-example-0.png",
        },
        {
          id: "6",
          image: "news-example-1.png",
          title: "حضور مؤثر بانک صادرات ایران در پانزدهمین نمایشگاه صنعت مالی",
          description:
            "ظرفیت واحدهای نظارتی برای دستیابی به اهداف راهبردی بانک، چراغ راهنما است...",
          created: "۲۲ فروردین ۱۴۰۲",
          ImageUrl: "news-example-0.png",
        },
        {
          id: "7",
          image: "news-example-1.png",
          title: "حضور مؤثر بانک صادرات ایران در پانزدهمین نمایشگاه صنعت مالی",
          description:
            "ظرفیت واحدهای نظارتی برای دستیابی به اهداف راهبردی بانک، چراغ راهنما است...",
          created: "۲۲ فروردین ۱۴۰۲",
          ImageUrl: "news-example-0.png",
        },
        {
          id: "8",
          image: "news-example-1.png",
          title: "حضور مؤثر بانک صادرات ایران در پانزدهمین نمایشگاه صنعت مالی",
          description:
            "ظرفیت واحدهای نظارتی برای دستیابی به اهداف راهبردی بانک، چراغ راهنما است...",
          created: "۲۲ فروردین ۱۴۰۲",
          ImageUrl: "news-example-0.png",
        },
        {
          id: "9",
          image: "news-example-1.png",
          title: "حضور مؤثر بانک صادرات ایران در پانزدهمین نمایشگاه صنعت مالی",
          description:
            "ظرفیت واحدهای نظارتی برای دستیابی به اهداف راهبردی بانک، چراغ راهنما است...",
          created: "۲۲ فروردین ۱۴۰۲",
          ImageUrl: "news-example-0.png",
        },
        {
          id: "10",
          image: "news-example-1.png",
          title: "حضور مؤثر بانک صادرات ایران در پانزدهمین نمایشگاه صنعت مالی",
          description:
            "ظرفیت واحدهای نظارتی برای دستیابی به اهداف راهبردی بانک، چراغ راهنما است...",
          created: "۲۲ فروردین ۱۴۰۲",
          ImageUrl: "news-example-0.png",
        },
        {
          id: "11",
          image: "news-example-1.png",
          title: "حضور مؤثر بانک صادرات ایران در پانزدهمین نمایشگاه صنعت مالی",
          description:
            "ظرفیت واحدهای نظارتی برای دستیابی به اهداف راهبردی بانک، چراغ راهنما است...",
          created: "۲۲ فروردین ۱۴۰۲",
          ImageUrl: "news-example-0.png",
        },
        {
          id: "12",
          image: "news-example-1.png",
          title: "حضور مؤثر بانک صادرات ایران در پانزدهمین نمایشگاه صنعت مالی",
          description:
            "ظرفیت واحدهای نظارتی برای دستیابی به اهداف راهبردی بانک، چراغ راهنما است...",
          created: "۲۲ فروردین ۱۴۰۲",
          ImageUrl: "news-example-0.png",
        },
        {
          id: "13",
          image: "news-example-1.png",
          title: "حضور مؤثر بانک صادرات ایران در پانزدهمین نمایشگاه صنعت مالی",
          description:
            "ظرفیت واحدهای نظارتی برای دستیابی به اهداف راهبردی بانک، چراغ راهنما است...",
          created: "۲۲ فروردین ۱۴۰۲",
          ImageUrl: "news-example-0.png",
        },
      ] as {
        Id: string;
        Title: string;
        ImageUrl: string;
        Description: string;
        NewsDate: string;
        id: string;
        title: string;
        image: string;
        description: string;
        created: string;
      }[],
      page: 0 as 0 | 1,
    };
  },

  methods: {
    GetContactRightMenu: async function () {
      var endPointUrl =
        this.SiteAdrs +
        "/_api/web/lists/getbyTitle('اخبار')/items?$select=Id,ImageUrl,Title,Description,NewsDate,Order0&$filter=IsActive%20eq%201%20&$orderby=Order0 desc";
      await axios.get(endPointUrl).then((response) => {
        this.news = response.data.value;
      });
      document.title="اخبار بانک صادرات ایران";
    },
    sliceArray<T>(array: T[], from: number, to?: number): T[] {        
      return array.slice(from, to);
    },
  },
});
</script>
