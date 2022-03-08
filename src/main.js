import App from "./App.vue";
import router from "./router";
import firebase from "firebase";
import { createApp } from "vue";
import { init } from "@emailjs/browser";

const firebaseConfig = {
  apiKey: "AIzaSyAOlK_-0yh0ppQ_JshXLnMnHAHSneORCdQ",

  authDomain: "autosky-bd535.firebaseapp.com",

  projectId: "autosky-bd535",

  storageBucket: "autosky-bd535.appspot.com",

  messagingSenderId: "227072623847",

  databaseUrl:
    "https://console.firebase.google.com/project/autosky-bd535/storage/autosky-bd535.appspot.com/files",

  appId: "1:227072623847:web:78b0dafea66c34b4d84e42",

  measurementId: "G-CW40HMBB89",
};

init("user_wd038ncdYtPHIeQJlu8E7");
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const app = createApp(App);
app.use(router);
app.use(firebase);
app.mount("#app");
