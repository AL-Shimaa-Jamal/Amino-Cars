<template>
  <div class="main">
    <div class="content">
      <div class="anim">
        <span >animos cars</span>
      </div>
      <div>
        <p class="d-none d-lg-block d-md-block">
          find your expectation , or explore latest news in car world , accessories and all about
          cars
        </p>
        <btn class="d-none d-lg-block" :title="title" />
      </div>
    </div>
  </div>
</template>
<script>
import btn from '../components/ButtunClick.vue'
export default {
  name: 'main',
  components: {
    btn
  },
  data() {
    return {
      title: 'Know more'
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
</style>