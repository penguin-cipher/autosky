<template>
  <div class="admin-cfg">
    <h1>Admin page</h1>
    <form class="adminForm" @Submit.prevent="logIn">
      <input
        type="text"
        placeholder="Email"
        name="email"
        v-model="adminForm.email"
        class="input-input email"
        required
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        v-model="adminForm.password"
        class="input-input password"
        required
      />
      <button type="btn" class="admin-btn">Log in</button>
    </form>
    <a href="/" class="go-back"
      >Don't know the password?<span> Go back</span></a
    >
    <div v-if="errorMessage" class="errorMessage">
      <span> {{ errorMessage }}</span>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
import "firebase/auth";
export default {
  data() {
    return {
      adminForm: {
        email: "",
        password: "",
      },
      errorMessage: "",
    };
  },
  methods: {
    logIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(
          this.adminForm.email,
          this.adminForm.password
        )
        .then((userCredentials) => {
          console.log(userCredentials);
          this.$router.push("/upload");
        })
        .catch((error) => {
          console.log(error.message);
          this.errorMessage = error.message;
        });
    },
  },
};
</script>
<style>
@import "../style/AdminView.css";
</style>

// logIn() { // firebase // .auth() // .createUserWithEmailAndPassword( //
this.adminForm.email, // this.adminForm.password // ) // .then((userCredentials)
=> { // console.log(userCredentials); // this.$router.push("/upload"); // }) //
.catch((err) => { // console.log(err.errorMessage); // }); // },
