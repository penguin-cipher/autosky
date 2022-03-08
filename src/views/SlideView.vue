<template>
  <div class="autoScroll" v-if="slideData.length !== 0">
    <div
      v-for="(
        { Name: slideTitle, imgUrl: imageSlide, description: abtSlide }, index
      ) in slideData"
      :key="index"
      class="imageCard"
    >
      <div class="display">
        <img :alt="slideTitle" :src="imageSlide" class="imageSlide" />
        <div class="txtSlide">
          <h3>{{ slideTitle }}</h3>
          <p>{{ abtSlide }}</p>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="autoScroll networkFailure">
    <h1>Loading data from server...</h1>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      slideData: [],
    };
  },

  mounted() {
    axios
      .get(`https://autosky-bd535-default-rtdb.firebaseio.com/form.json`)
      .then((data) => {
        return data.data;
      })
      .then((data) => {
        const dataArray = [];
        for (let key in data) {
          data[key].id = key;
          dataArray.push(data[key]);
        }
        this.slideData = dataArray;
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>
<style>
@import "../style/slideView.css";
</style>
