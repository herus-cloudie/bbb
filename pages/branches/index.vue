<template src="./BranchesPage.html"></template>
<style lang="scss" src="./BranchesPage.scss" scoped></style>

<script lang="ts">
import Vue from 'vue';
import axios from "axios";
import { ref } from 'vue';
import HeaderComponent from "~/components/global/HeaderCompnent/HeaderComponent.vue";
import FooterComponent from "~/components/global/FooterComponent/FooterComponent.vue";
import {defineComponent} from "vue";
import GoldDivider from "~/components/Icons/gold-divider.vue";

export default defineComponent({
  components: {GoldDivider, HeaderComponent, FooterComponent},
  async mounted() {
    // this.GetContactRightMenu();
    document.title='اطلاعات شعب داخلی بانک صادرات ایران';
  },
  data() {
    return {
      BranchCode: '',  // This will hold the input from v-text-field
      data: [],   // This will store the data fetched from the API
      SiteAdrs:"/Admin/",
      news:[],
      // stateName: '',
      // branchName: '',
      // branchCode: '',
      // city: '',
      stateName: '',
      Title: '',
      // BranchCode: '',
      City: '',
      tableData: [] as {
        BranchCode: string,
        Title: string,
        City: string,
        Address: string,
        Phone: string,
      }[],
    }
  },
  methods: {
    search(): void {
      // GetContactRightMenu: async function () {
        var endPointUrl =
          this.SiteAdrs +
          `/_api/web/lists/getbyTitle('اطلاعات شعب داخلی')/items?$select=Id,Title,BranchCode,City,Address,Phone`;
         axios.get(endPointUrl).then((response) => {
          // this.tableData = response.data.value;
          console.log('news',response.data.value);
        });
        document.title="اطلاعات شعب بانک";
      // },
    },
    // Original object


// Function to check length and return a new object
 createNewObjectBasedOnLength(obj: {
   map(arg0: (obj: any) => void): any; Phone: string | any[]; 
}) {
  // Extract the value you want to check
  return obj.map(obj => {
    const messageLength = obj.Phone.length;
    let newValue;
    if (messageLength <= 11) {
        newValue = "اطلاعاتی وجود ندارد، برای راهنمایی با 09602 تماس حاصل فرمایید";
    }else {
      newValue = obj.Phone
    }
    return {
        ...obj, 
        Phone: newValue 
    };
  });
}


,
    fetchData() {
      // const params = new URLSearchParams();
      // if (this.BranchCode) {
      //   params.append('search', this.BranchCode);               
      // };
      this.tableData=[];
      if(this.Title && !this.BranchCode && !this.City){
        var endPointUrl =
        this.SiteAdrs + `/_api/web/lists/getbyTitle('اطلاعات شعب داخلی')/items?$select=Id,Title,BranchCode,City,Address,Phone&$filter=Title%20eq%20'${this.Title}'`;
                axios.get(endPointUrl)
                .then(response => {      
                  this.tableData=response.data.value;
                })
                .catch(error => {
                  console.error('There was an error fetching the data:', error);
                  this.data=[];
                });        
      }

      if(this.BranchCode && !this.Title && !this.City){
        var endPointUrl =
        this.SiteAdrs +`/_api/web/lists/getbyTitle('اطلاعات شعب داخلی')/items?$select=Id,Title,BranchCode,City,Address,Phone&$filter=BranchCode%20eq%20${this.BranchCode}`;
        axios.get(endPointUrl)
        .then(response => {
          this.tableData=this.createNewObjectBasedOnLength(response.data.value);
        })
        .catch(error => {
          console.error('There was an error fetching the data:', error);
          this.data=[];
        });
      }

      if(this.City && !this.Title && !this.BranchCode){
        var endPointUrl =
        this.SiteAdrs +`/_api/web/lists/getbyTitle('اطلاعات شعب داخلی')/items?$select=Id,Title,BranchCode,City,Address,Phone&$filter=City%20eq%20'${this.City}'`;
        axios.get(endPointUrl)
        .then(response => {
          this.tableData=response.data.value;
        })
        .catch(error => {
          console.error('There was an error fetching the data:', error);
          this.data=[];
        });
      }

      if(this.Title && this.BranchCode && !this.City){
        var endPointUrl =
        this.SiteAdrs +`/_api/web/lists/getbyTitle('اطلاعات شعب داخلی')/items?$select=Id,Title,BranchCode,City,Address,Phone&$filter=Title%20eq%20'${this.Title}'%20and%20BranchCode%20eq%20'${this.BranchCode}'`;
        axios.get(endPointUrl)
        .then(response => {
          this.tableData=response.data.value;
        })
        .catch(error => {    
          console.error('There was an error fetching the data:', error);                
          this.data=[];
        }); 
      }

      if(this.Title && this.City && !this.BranchCode){
        var endPointUrl =
        this.SiteAdrs +`/_api/web/lists/getbyTitle('اطلاعات شعب داخلی')/items?$select=Id,Title,BranchCode,City,Address,Phone&$filter=Title%20eq%20'${this.Title}'%20and%20City%20eq%20'${this.City}'`;
        axios.get(endPointUrl)
        .then(response => {
          this.tableData=response.data.value;
        })
        .catch(error => {    
          console.error('There was an error fetching the data:', error);                
          this.data=[];
        }); 
      }

      if(this.BranchCode && this.City && !this.Title){
        var endPointUrl =
        this.SiteAdrs + `/_api/web/lists/getbyTitle('اطلاعات شعب داخلی')/items?$select=Id,Title,BranchCode,City,Address,Phone&$filter=BranchCode%20eq%20'${this.BranchCode}'%20and%20City%20eq%20'${this.City}'`;
        axios.get(endPointUrl)
        .then(response => {
          this.tableData=response.data.value;
        })
        .catch(error => {    
          console.error('There was an error fetching the data:', error);                
          this.data=[];
        }); 
      }

        
    },
    // search(): void {
      // this.tableData = [
      //   {
      //     branchCode: '37',
      //     branchName: 'خوی',
      //     city: 'خوی',
      //     address: 'استان آذربایجان غربی ـ شهرستان خوی ـ بخش خوی ـ خیابان شریعتی ـ میدان قیام',
      //     phone: '021-84761'
      //   },
      //   {
      //     branchCode: '37',
      //     branchName: 'خوی',
      //     city: 'خوی',
      //     address: 'استان آذربایجان غربی ـ شهرستان خوی ـ بخش خوی ـ خیابان شریعتی ـ میدان قیام',                        
      //     phone: '021-84761'
      //   },
      //   {
      //     branchCode: '37',
      //     branchName: 'خوی',
      //     city: 'خوی',
      //     address: 'استان آذربایجان غربی ـ شهرستان خوی ـ بخش خوی ـ خیابان شریعتی ـ میدان قیام',
      //     phone: '021-84761'
      //   },
      //   {
      //     branchCode: '37',
      //     branchName: 'خوی',
      //     city: 'خوی',
      //     address: 'استان آذربایجان غربی ـ شهرستان خوی ـ بخش خوی ـ خیابان شریعتی ـ میدان قیام',
      //     phone: '021-84761'
      //   },
      //   {
      //     branchCode: '37',
      //     branchName: 'خوی',
      //     city: 'خوی',
      //     address: 'استان آذربایجان غربی ـ شهرستان خوی ـ بخش خوی ـ خیابان شریعتی ـ میدان قیام',
      //     phone: '021-84761'
      //   },
      //   {
      //     branchCode: '37',
      //     branchName: 'خوی',
      //     city: 'خوی',
      //     address: 'استان آذربایجان غربی ـ شهرستان خوی ـ بخش خوی ـ خیابان شریعتی ـ میدان قیام',
      //     phone: '021-84761'
      //   },
      //   {
      //     branchCode: '37',
      //     branchName: 'خوی',
      //     city: 'خوی',
      //     address: 'استان آذربایجان غربی ـ شهرستان خوی ـ بخش خوی ـ خیابان شریعتی ـ میدان قیام',
      //     phone: '021-84761'
      //   },
      //   {
      //     branchCode: '37',
      //     branchName: 'خوی',
      //     city: 'خوی',
      //     address: 'استان آذربایجان غربی ـ شهرستان خوی ـ بخش خوی ـ خیابان شریعتی ـ میدان قیام',
      //     phone: '021-84761'
      //   },
      //   {
      //     branchCode: '37',
      //     branchName: 'خوی',
      //     city: 'خوی',
      //     address: 'استان آذربایجان غربی ـ شهرستان خوی ـ بخش خوی ـ خیابان شریعتی ـ میدان قیام',
      //     phone: '021-84761'
      //   },
      // ]
    // }
  }
})


Vue.extend({
  name: 'BranchesPage',
})
</script>
