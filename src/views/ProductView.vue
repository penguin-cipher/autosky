<template>
  <div class="product-cfg" v-if="productData.length !== 0">
    <h1>{{ productTitle }}</h1>
    <div class="product-c">
      <div
        v-for="({ Name, imgUrl, price, description }, index) in productData"
        :key="index"
        class="productCard"
      >
        <div class="imgCard">
          <img class="img-imgCard" :src="imgUrl" :alt="Name" />
        </div>
        <div class="productInfo center">
          <h3>{{ Name }}</h3>
          <p>{{ description }}</p>
          <span> Ksh {{ price }}</span>
          <button class="product-btn" type="submit" @click="sendInfo">
            Buy now
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="networkFailure" v-else>
    <h1>loading data from server...</h1>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      productTitle: "Our products",
      productData: [],
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
        this.productData = dataArray;
      })
      .catch((e) => {
        console.log(e);
      });
  },

  methods: {
    sendInfo() {
      this.$router.push("/contact");
    },
  },
};
</script>
<style>
@import "../style/ProductView.css";
</style>
