<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container w-100">
      <div class="logo">
        <img src="/logo.svg" alt="logo" width="50%" />
      </div>
      <div class="d-flex justify-content-end">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div
        class="collapse navbar-collapse d-lg-flex justify-content-end"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li v-for="rout in Routes" :key="rout.name"   >
            <router-link class="nav-link text-light" :class="{ notclick:clickd }"  @focus="changeStyle" :to="rout.path">{{rout.meta.title}}</router-link>
          </li>
         
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      clickd: false,
      Routes:[]
    };
  },

  methods: {
    changeStyle() {
      this.clickd =!this.clickd
      console.log('hello')
    }
  },mounted(){
this.Routes= this.$router.options.routes
  }
}
</script>
<style >
nav {
  background-image: url('/landing.svg');
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
.notclick{
transition: all .5s .1s  ease-in-out;
}
.notclick:focus{
font-size: 18px;
color:rgb(174, 174, 242) !important;
font-weight: bold;
transform: scale(1.2,1.2);
margin: 0 5px;
}
</style>