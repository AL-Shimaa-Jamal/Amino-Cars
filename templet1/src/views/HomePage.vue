<template>
  <div class="main">
    <div class="content">
      <div class="anim">
        <span>animos cars</span>
      </div>
      <div>
        <p>
          find your expectation , or explore latest news in car world , accessories and all about
          cars
        </p>
         <btn :title="title"/>
      </div>
    </div>
  </div>
</template>
<script>
import btn from '../components/ButtunClick.vue'
export default {
  name:'main',
  components:{
    btn
  },
  data(){
    return{
      title:'Know more'
    }
  }
}
</script>

<style scoped>
.main {
  background-image: url('../assets/AnimosCar/landing.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
  font-size: 60px;
  font-weight: bold;
}
.anim{
    animation: top 3s linear 2s infinite alternate;
}
@keyframes top {
    0%{
        transform: translatey(-10px);
    }
    50%{
        transform: translatey(0px);
    }
    100%{
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