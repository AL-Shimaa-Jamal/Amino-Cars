<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template >
  <div class="main">
    <header> 
      <NavBar />
    </header>
    <RouterView />
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue'
export default {
  components: {
    NavBar
  }
 
}
</script>

<style  scoped>
.main{
  color: white;
  background: #212121;
  text-transform: capitalize;
}
</style>



