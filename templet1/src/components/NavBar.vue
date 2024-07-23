<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary ">
  <div class="container w-100">
    <div class="logo ">
      <img src="../assets/AnimosCar/logo.svg" alt="logo"  width="50%"/>
    </div>
    <div class=" d-flex justify-content-end">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div class="collapse navbar-collapse d-lg-flex justify-content-end" id="navbarSupportedContent">
    
        <ul class="navbar-nav mb-2 mb-lg-0 ">
          <li class="nav-item"><router-link class="nav-link text-light" to="/">Home</router-link></li>
          <li class="nav-item"><router-link class="nav-link text-light" to="about">about</router-link></li>
          <li class="nav-item"><router-link class="nav-link text-light" to="sportcar">sport Cars</router-link></li>
          <li class="nav-item"><router-link class="nav-link text-light" to="newcar">New Cars</router-link></li>
          <li class="nav-item"><router-link class="nav-link text-light" to="accessories">Accessories</router-link></li>
          <li class="nav-item"><router-link class="nav-link text-light" to="contact">Contact</router-link></li>
        </ul>
      </div>
   
 
  </div>
</nav>


</template>
<script>
export default {
  data() {},
  methods:{
   
  }

}
</script>
<style >
nav{
  background-image: url('../assets/AnimosCar/landing.svg');
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}
nav .navbar-nav {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
}



</style>