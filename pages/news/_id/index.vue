<template src="./NewsDescPage.html"></template>
<style lang="scss" src="./NewsDescPage.scss" scoped></style>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import CopyToButtonComponent from "~/components/global/CopyToButtonComponent/CopyToButtonComponent.vue";
import HeaderComponent from "~/components/global/HeaderCompnent/HeaderComponent.vue";
import PrintButtonComponent from "~/components/global/PrintButtonComponent/PrintButtonComponent.vue";
import FooterComponent from "~/components/global/FooterComponent/FooterComponent.vue";
import RegisterCommentComponent from "~/components/RegisterCommentComponent/RegisterCommentComponent.vue";

export default Vue.extend({
  name: "NewsDescPage",
  components: {
    RegisterCommentComponent,
    FooterComponent,
    PrintButtonComponent,
    HeaderComponent,
    CopyToButtonComponent,
  },
  async mounted() {
    this.GetNewsDetails();
    this.GetNewsAll();
  },
  data() {
    return {
      SiteAdrs: "/Admin/",

      NewsAll:[],
      RelatedImage:[],
      RelativeLink:[],
      RelateMatneLink:[],

      relatedNewsSlider: [
        {
          id: "1",
          img: "news-example-0.png",
          createdAt: "تاریخ انتشار:  ۲۲ فروردین ۱۴۰۲",
          title: "حضور مؤثر بانک صادرات ایران در پانزدهمین نمایشگاه صنعت مالی",
        },
        {
          id: "2",
          img: "news-example-1.png",
          createdAt: "تاریخ انتشار:  ۲۲ فروردین ۱۴۰۲",
          title: "حضور مؤثر بانک صادرات ایران در پانزدهمین نمایشگاه صنعت مالی",
        },
        {
          id: "3",
          img: "news-example-0.png",
          createdAt: "تاریخ انتشار:  ۲۲ فروردین ۱۴۰۲",
          title: "حضور مؤثر بانک صادرات ایران در پانزدهمین نمایشگاه صنعت مالی",
        },
        {
          id: "4",
          img: "news-example-0.png",
          createdAt: "تاریخ انتشار:  ۲۲ فروردین ۱۴۰۲",
          title: "حضور مؤثر بانک صادرات ایران در پانزدهمین نمایشگاه صنعت مالی",
        },
        {
          id: "5",
          img: "news-example-1.png",
          createdAt: "تاریخ انتشار:  ۲۲ فروردین ۱۴۰۲",
          title: "حضور مؤثر بانک صادرات ایران در پانزدهمین نمایشگاه صنعت مالی",
        },
        {
          id: "6",
          img: "news-example-0.png",
          createdAt: "تاریخ انتشار:  ۲۲ فروردین ۱۴۰۲",
          title: "حضور مؤثر بانک صادرات ایران در پانزدهمین نمایشگاه صنعت مالی",
        },
        {
          id: "7",
          img: "news-example-1.png",
          createdAt: "تاریخ انتشار:  ۲۲ فروردین ۱۴۰۲",
          title: "حضور مؤثر بانک صادرات ایران در پانزدهمین نمایشگاه صنعت مالی",
        },
        {
          id: "8",
          img: "news-example-1.png",
          createdAt: "تاریخ انتشار:  ۲۲ فروردین ۱۴۰۲",
          title: "حضور مؤثر بانک صادرات ایران در پانزدهمین نمایشگاه صنعت مالی",
        },
      ] as {
        id: string;
        img: string;
        createdAt: string;
        title: string;
      }[],
      isNewsHelpful: true,
      valid: false,
      validCheckCall: false,
      issueTrackingCode: "",
      firstName: "",
      lastName: "",
      nameRules: [(v: string) => !!v || "نام و نام خانوادگی اجباری است"],
      phoneNumber: "",
      phoneNumberRules: [(v: string) => !!v || "شماره تماس اجباری است"],
      email: "",
      emailRules: [
        (v: string) => !!v || "پست الکترونیکی اجباری است",
        (v: string) => /.+@.+\..+/.test(v) || "پست الکترونیکی صحیح نمی باشد",
      ],
      contactSubject: "",
      contactSubjectRules: [(v: string) => !!v || "موضوع تماس اجباری است"],
      description: "",
      descriptionRules: [(v: string) => !!v || "توضیحات اجباری است"],
    };
  },
  computed: {
    getRelatedSlider():
      | {
          id: string;
          img: string;
          createdAt: string;
          title: string;
        }[][]
      | {
          id: string;
          img: string;
          createdAt: string;
          title: string;
        }[] {
      if (process.client) {
        let width = window.innerWidth;
        if (width < 960) {
          return this.relatedNewsSlider.map((item) => {
            return [item];
          });
        }
        let startIndex: number = 0;
        let endIndex: number = 3;
        const sliderData = [];
        if (endIndex >= this.relatedNewsSlider.length) {
          return [this.relatedNewsSlider];
        }
        for (;;) {
          sliderData.push(this.relatedNewsSlider.slice(startIndex, endIndex));
          if (endIndex >= this.relatedNewsSlider.length) {
            debugger;
            return sliderData;
          }
          startIndex += 3;
          endIndex += 3;
        }
      } else {
        return [];
      }
    },

    imageChunks() {
      const chunkSize = 4;
      let chunks = [];
      for (let i = 0; i < this.RelatedImage.length; i += chunkSize) {
        chunks.push(this.RelatedImage.slice(i, i + chunkSize));
      }
      return chunks;
    }

  },
  methods: {
    GetNewsDetails: async function () {
      const param = new URLSearchParams(window.location.search);
      const MyNewsItemId= param.get('IDForItem');
      var endPointUrl =
        this.SiteAdrs +
        `/_api/web/lists/getbyTitle('اخبار')/items?$select=Id,ImageUrl,Title,RuTitr,Lead,Description,NewsDate,ImageUrl,ImageUrlKuchak,TxtLinkKuchak,TitleKuchak,DescriptionKuchak,MatneLink,Link,TasavirMortabet,Order0&$filter=IsActive%20eq%201%20and%20Order0%20eq%20${MyNewsItemId}%20&$orderby=Order0`;
      await axios.get(endPointUrl).then((response) => {
        this.relatedNewsSlider = response.data.value;

         this.relatedNewsSlider= response.data.value.map((obj: any) => {
          return {      
              ...obj, 
              Description:replaceAsteriskWithBold(obj.Description) 
              // obj.Description.split('*').join('<b>')
          };
        });

        function replaceAsteriskWithBold(text: string) {
          // Split the text by '*' and store the parts
          let parts = text.split('$$');
          
          // If the number of parts is even, it means the asterisks aren't balanced, return original text
          if (parts.length % 2 === 0) {
              return text;
          }
          
          // Rebuild the text, adding <b> tags for odd-indexed parts (text between '*')
          let result = '';
          parts.forEach((part, index) => {
              if (index % 2 === 1) {
                  result += `<b><span style="text-align: center;width: 100%;display: block;">${part}<span></b>`; // Wrap odd index parts in <b> tags
              } else {
                  result += part; // Even index parts are normal text
              }
          });
          
          return result;
      }

        this.RelatedImage=[];

        if(response.data.value[0].TasavirMortabet !== null){
          this.RelatedImage=response.data.value[0].TasavirMortabet.split(';');
        };
        
        this.RelativeLink=[];
        if(response.data.value[0].Link !== null){
          this.RelativeLink=response.data.value[0].Link.split(';');
          this.RelateMatneLink=response.data.value[0].MatneLink.split(';');
        }

        document.title=response.data.value[0].Title;
      });
    },

    GetNewsAll: async function () {
      var endPointUrl =
        this.SiteAdrs +
        `/_api/web/lists/getbyTitle('اخبار')/items?$select=Id,Title,ImageUrl,NewsDate,Order0&$filter=IsActive%20eq%201&$top=6&$orderby=Order0 desc`;
      await axios.get(endPointUrl).then((response) => {
        this.NewsAll = response.data.value.map((obj: { TxtLink: string; }) => {               
              return { ...obj, TxtLink: "/news/_id" };
      });
      });
    },

    // GetAkhbarImage: async function () {
    //   const param = new URLSearchParams(window.location.search);
    //   const MyNewsItemId= param.get('IDForItem');
    //   var endPointUrl =
    //     this.SiteAdrs +
    //     `/_api/web/lists/getbyTitle('تصاویر اخبار')/items?$select=Id,Title,Khabar/Title,Khabar/Id,Order0&$expand=Khabar&$filter=IsActive%20eq%201%20and%20Khabar/Id%20eq%20${MyNewsItemId}%20&$orderby=Order0`;
    //   await axios.get(endPointUrl).then((response) => {
    //     this.KhabarImage=response.data.value;
    //   });
    // },
    
    submitForm() {
      (this.$refs.form as any)?.validate();
    },
  },
});
</script>
