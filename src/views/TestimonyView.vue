<template id="testimony">
  <div class="title-t1"><h1>Testimonials</h1></div>
  <div class="testimony">
    <div class="title-t2"><h1>Testimonials</h1></div>
    <div
      class="commentDisplay"
      v-for="({ user, comment }, index) in testimonyData"
      :key="index"
    >
      <Testimony class="testcard" :user="user" :comment="comment" />
    </div>
  </div>
</template>
<script setup>
import Testimony from "../components/TestimonyComponent.vue";
</script>
<script>
export default {
  data() {
    return {
      testimonyData: [
        {
          user: "Jose otieno",
          comment: "One of the best and affordable products out there",
        },
        {
          user: "Martha juma",
          comment: "Their mashines have the latest technology and are very reliable",
        },
        {
          user: "Dante russ",
          comment: "Who wouldn't do business with you? i mean you guys are just affordable",
        },
        {
          user: "Stacy grace",
          comment: "  Loved your delivery services, right on time and in better conditions",
        },
      ],
    };
  },
};
</script>

<style>
@import "../style/TestimonyView.css";
</style>
