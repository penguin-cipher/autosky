<template>
  <header>
    <div class="header-container">
    <a href="/">
<img alt="auto logo" class="logo" src="@/assets/logo.svg" />
</a>
      <div class="nav-container">
        <RouterLink class="links hide" to="/">Home</RouterLink>
        <RouterLink class="links hide" to="/about">About</RouterLink>
        <RouterLink class="links hide" to="/product">Products</RouterLink>
        <RouterLink class="links hide" to="/testimony">Testimony</RouterLink>
        <RouterLink class="links" to="/contact">Contact</RouterLink>
      </div>
    </div>
    <RouterView />
  </header>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style>
@import "../style/HeaderComponent.css";
</style>
