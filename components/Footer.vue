<template>
  <div class="footer">
    <div class="row justify-content-center align-items-center">
      <nuxt-link to="/">
        <h1 class="logo">Bon<span>Patron</span>
        </h1>
      </nuxt-link>
      <nuxt-link to="/about" class="footer-about-link">About</nuxt-link>
    </div>
    <div class="separator my-5"></div>
    <div class="row justify-content-center">
      <div class="circle mx-2" v-for="item in 5"></div>
    </div>
    <div class="row justify-content-center mt-5">
      <p class="mr-3">@ 2020</p>
      <p>Privacy - Terms</p>
    </div>
  </div>
</template>