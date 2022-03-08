<template>
  <div class="testimonyContainer">
    <img src="../assets/quote.svg" class="quote" alt="quote tag" />
    <p>{{ comment }}</p>
    <span>{{ user }}</span>
  </div>
</template>

<script>
export default {
  props: {
    comment: String,
    user: String,
  },
};
</script>

<style>
@import "../style/TestimonyComponent.css";
</style>
