<template src="./Message.html">
  <div>
    <p>Random String: {{ randomString }}</p>
    <form class="form">
      <div class="input-group">
        <input
          type="text"
          placeholder="نام خانوادگی"
          style="border: #4343435d solid 1px; font-size: 14px; padding: 5px; border-radius: 5px; max-width: 200px;"
          required
        />

        <input
          type="text"
          placeholder="شماره تلفن همراه"
          style="border: #4343435d solid 1px; font-size: 14px; padding: 5px; border-radius: 5px; max-width: 200px;"
          required
        />

        <select
          style="border: #4343435d solid 1px; font-size: 14px; padding: 5px; border-radius: 5px; max-width: 200px;"
          name="pets"
          id="pet-select"
        >
          <!-- Options go here -->
        </select>

        <div>
          <input
            type="text"
            :value="randomString" <!-- Binds random string to the input field -->
            placeholder="Random String"
            style="border: #4343435d solid 1px; font-size: 14px; padding: 5px; border-radius: 5px; max-width: 200px;"
            readonly
          />
        </div>
        
        <textarea
          type="text"
          placeholder="متن پیام"
          style="border: #4343435d solid 1px; font-size: 14px; padding: 5px; border-radius: 5px; max-width: 200px;"
          required
        ></textarea>
      </div>
      <button type="submit" class="submit-button">ارسال</button>
    </form>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue";
import HeaderComponent from "~/components/global/HeaderCompnent/HeaderComponent.vue";
import FooterComponent from "~/components/global/FooterComponent/FooterComponent.vue";
import PrintButtonComponent from "~/components/global/PrintButtonComponent/PrintButtonComponent.vue";
import CopyToButtonComponent from "~/components/global/CopyToButtonComponent/CopyToButtonComponent.vue";
import { AboutUsLinks } from "~/core/files/about-us-links";
import AccordionLinkListComponent from "~/components/AccordionLinkListComponent/AccordionLinkListComponent.vue";

export default Vue.extend({
  name: "MessagePage",
  components: {
    AccordionLinkListComponent,
    CopyToButtonComponent,
    PrintButtonComponent,
    FooterComponent,
    HeaderComponent,
  },
  data() {
    return {
      SiteAdrs: "/Admin/",
      randomString: "", // Initialize as an empty string
      links: AboutUsLinks,
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
  mounted() {
    this.randomString = this.generateRandomString(); // Assign the generated string here
  },
  methods: {
    generateRandomString(length = 5) {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result; // Return the generated string
    },
  },
  
});
</script>
