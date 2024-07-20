<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template >
  <header> 
    <NavBar />
  </header>
  <RouterView />
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

</style>



