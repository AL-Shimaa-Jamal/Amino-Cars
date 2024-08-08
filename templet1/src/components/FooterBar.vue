<template>
  <div class="d-flex justify-content-between align-items-center flex-wrap w-100 p-4 shadow">
    <!-- logo -->
    <div class="logo">
      <img src="/logo.svg" alt="" />
    </div>
    <div class="Home">
      <h3><router-link class="link" to="/">home </router-link></h3>
      <li><router-link class="link" to="/about">about</router-link></li>
      <li><router-link class="link" to="/about">services</router-link></li>
      <li><router-link class="link" to="/accessories">accessories</router-link></li>
    </div>
    <div class="contact">
      <h3><router-link class="link" to="/contact">contact us </router-link></h3>
      <li><router-link class="link" to="">Facebook</router-link></li>
      <li><router-link class="link" to="">twitter</router-link></li>
      <li><router-link class="link" to="">instagram</router-link></li>
    </div>
    <div class="privacy policy">
      <h3>privacy policy</h3>
      <li><router-link class="link" to="/about">warranty</router-link></li>
      <li><router-link class="link" to="/services">check up</router-link></li>
      <li><router-link class="link" to="/accessories">inspection</router-link></li>
    </div>
    <div class="follow">
      <h3>Follow Us</h3>
      <router-link to="www.facebook.com">
        <img src="/Group 16.svg" class="m-2" alt="facebook" />
      </router-link>
      <router-link to="www.twiter.com">
        <img src="/Group 17.svg" class="m-2" alt="twiter" />
      </router-link>
      <router-link to="ww.instgram.com">
        <img src="/Group 18.svg" class="m-2" alt="instgram" />
      </router-link>
    </div>
  </div>
</template>
<style scoped>
li {
  list-style: none;
}
h3 .link,
li .link {
  text-decoration: none;
  color: white;
}
</style>