<template>
  <div class="d-flex justify-content-between align-items-center flex-wrap w-100 p-4 shadow">
    <!-- logo -->
    <div class="logo">
      <img src="/logo.svg" alt="" />
    </div>
    <div class="Home">
      <h3 class="m-2 shadow"><router-link class="link" to="/">home </router-link></h3>
      <li><router-link class="link" to="/about">about & services</router-link></li>
      <li><router-link class="link" to="/accessories">accessories</router-link></li>
    </div>
    <div class="contact">
      <h3><router-link class="link" to="/contact">contact us </router-link></h3>
      <li><a class="link" href="https://www.facebook.com">Facebook</a></li>
      <li><a class="link" href="https://www.twitter.com">twitter</a></li>
      <li><a class="link" href="https://www.instgram.com">instagram</a></li>
    </div>
    <div class="privacy policy">
      <h3>privacy policy</h3>
      <li class="link" to="/about">warranty</li>
      <li>check up</li>
      <li>inspection</li>
    </div>
    <div class="follow">
      <h3>Follow Us</h3>
      <a href="https://www.facebook.com" target="_blank" >
        <img src="/Group 16.svg" class="m-2" alt="facebook" />
      </a>
      <a href="https://twitter.com/alshimaajamal?t=fr2UAmBbJRJ5bJHAx-6cIQ&s=08">
        <img src="/Group 17.svg" class="m-2" alt="twiter" />
      </a>
      <a href="https://instagram.com/alshimaa_jamal2001?igshid=ZDdkNTZiNTM=">
        <img src="/Group 18.svg" class="m-2" alt="instgram" />
      </a>
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