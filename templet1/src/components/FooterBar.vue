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
      <h3> contact us </h3>
      <li><a  href="https://www.facebook.com" target="_blank">Facebook</a></li>
      <li><a  href="https://www.twitter.com" target="_blank">twitter</a></li>
      <li><a  href="https://www.instgram.com" target="_blank">instagram</a></li>
    </div>
    <div class="privacy policy">
      <h3>privacy policy</h3>
      <li>warranty</li>
      <li>check up</li>
      <li>inspection</li>
    </div>
    <div class="follow">
      <h3>Follow Us</h3>
      <a href="https://www.facebook.com" target="_blank" >
        <img src="/Group 16.svg" class="m-2" alt="facebook" />
      </a>
      <a href="https://twitter.com/alshimaajamal?t=fr2UAmBbJRJ5bJHAx-6cIQ&s=08" target="_blank">
        <img src="/Group 17.svg" class="m-2" alt="twiter" />
      </a>
      <a href="https://instagram.com/alshimaa_jamal2001?igshid=ZDdkNTZiNTM=" target="_blank">
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
  transition: all .5s ease-in-out ;
}
.link:focus{
  color: rgb(150, 150, 201);
}
.link:hover{
font-weight: 600;
letter-spacing: 1.4px;
  transform: scale(1.5,1.5);
}
.contact a{
color: white;
text-decoration: none;
}
.contact a:hover{
border-bottom: 1px solid gray;
font-weight: lighter;
font-size: 15px;
letter-spacing: 1.4px;
}
.contact a:visited{
color: rgb(171, 171, 237);
text-decoration: line-through;
}

.contact a:hover{
border-bottom: 1px solid gray;
font-weight: lighter;
font-size: 15px;
letter-spacing: 1.4px;
}
.follow a img{
  width:30px ;
  transition: all .6s ease-in-out;
}
.follow a img:hover{
transform: scale(1.3,1.3);
border: 2px solid white;
border-radius: 50%;
}
</style>