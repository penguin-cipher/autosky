<template>
  <div class="upload-cfg">
    <h1 class="uploadTitle">Upload data</h1>
    <br />
    <div class="imgUpload">
      <img
        :src="imgUploaded"
        class="imgField"
        @click="clickInput"
        alt="Click to upload image"
      />
      <br />
      <form @submit.prevent="submitForm" class="formData">
        <input
          type="file"
          ref="imgInput"
          name="img"
          @change="onImageUpload"
          class="imageInput uploadInput"
          accept="image/*"
        />
        <input
          type="text"
          placeholder="Product Name"
          name="productName"
          v-model="formData.Name"
          class="uploadDetails uploadInput"
          required
        />
        <input
          type="text"
          placeholder="price"
          name="Price"
          v-model="formData.price"
          class="price uploadInput"
          required
        />
        <textarea
          type="text"
          placeholder="Description"
          name="description"
          v-model="formData.description"
          class="uploadDescription uploadInput"
          required
        />
        <button class="btnUpload">Upload</button>
      </form>
    </div>
    <div class="logOut" @click="logOut">
      <p>Are you done? <span>Logout</span></p>
    </div>
    <div class="msgUpdate">
      <p>{{ message }}</p>
      <span>{{ email }}</span>
    </div>
  </div>
</template>
<script>
import firebase from "firebase/app";
import "firebase/storage";
import axios from "axios";
import "firebase/auth";
export default {
  data() {
    return {
      imgFile: null,
      errorMsg: "",
      formData: {
        Name: "",
        description: "",
        price: "",
        imgUrl: "",
      },
    };
  },

  methods: {
    onImageUpload(e) {
      this.imgFile = e.target.files[0];
      console.log(this.imgFile);
      this.imgUploaded = null;
      this.uploadValue = 0;
      this.onUpload();
    },

    function() {
      console.log(this.formData);
    },

    onUpload() {
      //upload to storage
      this.imgUploaded = null;
      const storageRef = firebase
        .storage()
        .ref(`${this.imgFile.name}`)
        .put(this.imgFile);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (err) => {
          console.log(err.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.imgUploaded = url;
            this.formData.imgUrl = url;
          });
        }
      );
    },

    clickInput() {
      this.$refs.imgInput.click();
    },

    submitForm() {
      axios
        .post(
          `https://autosky-bd535-default-rtdb.firebaseio.com/form.json`,
          this.formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });

      this.formData.Name = "";
      this.formData.description = "";
      this.formData.price = "";
    },

    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
};
</script>
<style>
@import "../style/uploadView.css";
</style>
