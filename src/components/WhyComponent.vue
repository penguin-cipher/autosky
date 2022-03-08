<template>
  <section class="whySection">
    <div class="why-why-container">
      <h1>{{ whyTitle }}</h1>
      <div class="whyContainer">
        <div class="why">
          <img src="../assets/approved.svg" alt="icon" class="icon-icon" />
          <p>
            High quality products that have been certified and approved for use
            by ministry of health and the safety
          </p>
        </div>
        <div class="why">
          <img src="../assets/affordable.svg" alt="icon" class="icon-icon" />
          <p>
            Our products are not only high quality but also affordable hence you
            can easily own one for your business
          </p>
        </div>
        <div class="why">
          <img src="../assets/delivery.svg" alt="icon" class="icon-icon" />
          <p>
            We offer delivery services based on th number of items you buy, this
            is a bonus for those who buy in bulk
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      whyTitle: "Why choose us",
    };
  },
};
</script>
<style>
@import "../style/WhyComponent.css";
</style>
