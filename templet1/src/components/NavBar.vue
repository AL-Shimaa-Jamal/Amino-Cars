<template>
  <nav>
    <div class='logo'>
      <img src="../assets/AnimosCar/logo.svg" alt="logo"  width="60%"/>
    </div>
    <div>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="about">about</router-link></li>
        <li><router-link to="services">Services</router-link></li>
        <li><router-link to="sportcar">sport Cars</router-link></li>
        <li><router-link to="newcar">New Cars</router-link></li>
        <li><router-link to="accessories">Accessories</router-link></li>
        <li><router-link to="contact">Contact</router-link></li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  data() {}
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
nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav a {
  padding: 20px;
  color:white;
  font-size: 20px;
  letter-spacing: 1.2px;
  text-transform: capitalize;
  text-decoration: none;
}
</style>