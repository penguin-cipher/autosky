<template>
  <div class="abtSection">
    <div class="abtPg" v-for="({ Title, Info }, index) in abtData" :key="index">
      <h1>{{ Title }}</h1>
      <p>{{ Info }}</p>
    </div>
  </div>
  <WhyComponent />
</template>
<script>
import WhyComponent from "@/components/WhyComponent.vue";
export default {
  components: {
    WhyComponent,
  },
  data() {
    return {
      abtData: [
        {
          Title: "A little bit about us",
          Info: "Auto sky is a company owned by a group of shareholder with the aim of providing high quality products to our customers. We are the bridge to your success, so why not cross?",
        },
      ],
    };
  },
};
</script>
<style>
@import "../style/AboutView.css";
</style>
