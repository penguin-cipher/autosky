<template class="home-cfg">
  <div class="home-container">
    <img
      src="@/assets/logoline.svg"
      class="homeLogo"
      height="100"
      width="100"
      alt="logo-line"
    />
    <div
      class="homePg"
      v-for="({ heroHeader, heroTxt }, index) in dataInfo"
      :key="index"
    >
      <h1>{{ heroHeader }}</h1>
      <p>{{ heroTxt }}</p>
    </div>
  </div>
  <SlideView />
  <AboutView />
  <ProductView />
  <TestimonyView />
  <ContactView />
</template>
<script>
import SlideView from "@/views/SlideView.vue";
import AboutView from "@/views/AboutView.vue";
import ProductView from "@/views/ProductView.vue";
import ContactView from "@/views/ContactView.vue";
import TestimonyView from "@/views/TestimonyView.vue";
export default {
  components: {
    SlideView,
    AboutView,
    ProductView,
    ContactView,
    TestimonyView,
  },
  data() {
    return {
      dataInfo: [
        {
          heroHeader: "Auto sky,affordable for you",
          heroTxt:
            "Come find high quality and affordable products such as oil atm, salads and water purification etc",
        },
      ],
    };
  },
};
</script>
<style>
@import "../style/HomeView.css";
</style>
