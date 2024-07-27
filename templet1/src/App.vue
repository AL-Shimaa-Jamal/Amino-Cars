<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template >
  <div class="main">
    <header> 
      <NavBar />
    </header>
    <RouterView />
    <footer>
      <FooterBar/>
    </footer>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue';
export default {
  components: {
    NavBar,
    FooterBar,
  }
 
}
</script>

<style  scoped>
.main{
  color: white;
  background: #212121;
  text-transform: capitalize;
  height: 100%;
}
</style>



