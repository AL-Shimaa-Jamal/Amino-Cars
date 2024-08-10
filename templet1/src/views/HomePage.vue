<template>
  <div class="main">
    <div class="content">
      <div class="anim">
        <span>animos cars</span>
      </div>
      <div>
        <p class="d-none d-lg-block d-md-block">
          find your expectation, or explore the latest news in the car world, accessories, and all
          about cars.
        </p>
        <btn class="d-none d-lg-block" @click="displayInfo" :title="title" />
        <p :class="{ show: !noshow, noshow: noshow }" class="text-secondary fs-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolorum possimus
          corrupti animi tenetur adipisci voluptates itaque dolores dignissimos! Illo accusantium
          porro mollitia fugiat? Quam similique velit eos consectetur aspernatur?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import btn from '../components/ButtunClick.vue'

export default {
  name: 'MainComponent', // Updated the component name to avoid conflict
  components: {
    btn
  },
  data() {
    return {
      title: 'Know more',
      noshow: false
    }
  },
  methods: {
    displayInfo() {
      this.noshow = !this.noshow
    }
  }
}
</script>

<style scoped>
.main {
  position: relative;
  overflow: hidden;
  background-image: url('/landing.svg') !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  width: 100%;
  height: 100vh;
  text-transform: capitalize;
}
.content {
  position: absolute;
  top: 35%;
  left: 6%;
}
span {
  background: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(0, 9, 91, 1));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 55px;
  font-weight: bold;
}
.anim {
  animation: top 3s linear 2s infinite alternate;
}
@keyframes top {
  0% {
    transform: translatey(-10px);
  }
  50% {
    transform: translatey(0px);
  }
  100% {
    transform: translatey(10px);
  }
}
p {
  color: white;
  width: 40%;
  font-size: 20px;
  letter-spacing: 1.3px;
  line-height: 1.5;
}
.show {
  display: none;
}
.noshow {
  display: block;
}
</style>
