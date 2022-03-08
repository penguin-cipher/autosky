<template id="contact">
  <div class="contact-cfg">
    <div class="address-c">
      <h2>Address</h2>
      <p>Nairobi</p>
      <h2>Office hours</h2>
      <p>8.00 - 6.00pm</p>
    </div>
    <div
      class="intouch"
      v-for="({ phone, service, customercare }, index) in touchContacts"
      :key="index"
    >
      <h2>Get in touch</h2>
      <span><strong>Phone:</strong> {{ phone }}</span>
      <span><strong>Service:</strong> {{ service }}</span>
      <span><strong>Customer care:</strong> {{ customercare }}</span>
      <div
        class="findUs"
        v-for="({ facebook, instagram, whatsapp, twitter }, index) in links"
        :key="index"
      >
        <h2>Find us</h2>
        <div class="flex-icon">
          <a :href="facebook" target="_blank" class="icon-a"
            ><img
              src="../assets/Facebook.svg"
              alt="facebook"
              class="contactIcon"
          /></a>
          <a :href="instagram" target="_blank" class="icon-a"
            ><img
              src="../assets/Instagram.svg"
              alt="instagram"
              class="contactIcon"
          /></a>
          <a :href="whatsapp" target="_blank" class="icon-a"
            ><img
              src="../assets/whatsapp.svg"
              alt="whatsapp"
              class="contactIcon"
          /></a>
          <a :href="twitter" target="_blank" class="icon-a"
            ><img src="../assets/Twitter.svg" alt="twitter" class="contactIcon"
          /></a>
        </div>
      </div>
    </div>
    <div class="contactUs">
      <h2>Message us</h2>
      <form ref="contactform" @submit.prevent="sendEmail()">
        <input
          type="text"
          v-model="usrName"
          name="usrName"
          placeholder="Dan lee"
          class="input-form input-size txt-trans"
          required
        />
        <input
          type="email"
          v-model="email"
          name="email"
          placeholder="danlee@gmail.com"
          class="input-form input-size"
          required
        />
        <textarea
          name="message"
          v-model="message"
          cols="30"
          rows="10"
          placeholder="your message"
          class="input-form textstyle txt-trans input-area"
          required
        />
        <button type="submit" class="btn-s">Send</button>
      </form>
    </div>
  </div>
  <div class="footer">
    <a href="/admin"
      ><span> &copy;{{ year }}Autosky.All right reserved</span></a
    >
  </div>
</template>
<script>
import emailjs from "@emailjs/browser";
export default {
  data() {
    return {
      usrName: "",
      email: "",
      message: "",
      errorMsg: "",
      year: "2020",
      YOUR_SERVICE_ID: "default_service",
      YOUR_TEMPLATE_ID: "template_6l4ptos",
      YOUR_USER_ID: "user_wd038ncdYtPHIeQJlu8E7",
      touchContacts: [
        {
          phone: "0742484902",
          customercare: "0742484902",
          service: "Selling Atm products",
        },
      ],

      links: [
        {
          facebook: "https://www.facebook.com/autosky2030/",
          instagram: "",
          whatsapp:
            "https://wa.me/254742484902?text=Hi Dan, iam intrested in your products from your website",
          twitter: "",
        },
      ],
    };
  },

  methods: {
    sendEmail() {
      try {
        emailjs.sendForm(
          this.YOUR_SERVICE_ID,
          this.YOUR_TEMPLATE_ID,
          this.$refs.contactform,
          this.YOUR_USER_ID
        );
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.usrName = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>
<style scoped>
@import "../style/ContactView.css";
</style>
