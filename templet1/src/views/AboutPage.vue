<template>
  <div class="about">
    <section class="main">
      <!-- right side -->
      <div class="content ">
        <h3 class="">About US</h3>
        <p class="d-none d-md-block d-lg-block">
          lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
          graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
          century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum
          for use in a type specimen book
        </p>
      </div>
      <!-- left side -->
      <div class="immg d-none d-lg-block d-md-block">
        <img src="../assets/AnimosCar/about.svg" alt="about us" width="100" srcset="" />
      </div>
    </section>
    <!-- second part services -->
    <!-- arrow down -->
    <div class="span d-none d-md-block d-lg-block">
      <img src="../assets/AnimosCar/download-removebg-preview.png" alt="more services" title="service"  />
    </div>
    <!--  start features  -->
    <section class="featurs">
      <div class="card" v-for="(fet, i) in featurs" :key="i">
        <div>
          <img :src="fet.icon" alt="" />
          <h4>{{ fet.title }}</h4>
          <p>{{ fet.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>
<!-- scrept -->
<script>
export default {
  name: 'about',
  data() {
    return {
      featurs: [
        {
          icon: 'src/assets/AnimosCar/abouticon/gis_car.svg',
          title: 'warranty',
          description: 'now you can Benefit from the warranty period .'
        },
        {
          icon: 'src/assets/AnimosCar/abouticon/mdi_security-lock-outline.svg',
          title: 'security inspection',
          description: 'now your services and data is secured .'
        },
        {
          icon: 'src/assets/AnimosCar/abouticon/mingcute_engine-fill.svg',
          title: 'engine upgrade',
          description: 'now you can do upgrade to you engine .'
        },
        {
          icon: 'src/assets/AnimosCar/abouticon.svg',
          title: 'check breakup',
          description: 'now you can have full up chek about your car . '
        }
      ]
    }
  }
}
</script>
<!-- stylying  -->
<style scoped>
.about {
  color: white;
  background: #212121;
  text-transform: capitalize;
  height: 200vh;
  padding: 3%;
}
.span {
  text-align: center;
  width: 100%;
  height: 10px;
  margin: 0 0 6% 0;
  animation: arrow 2s linear 0.5s alternate infinite;
}
.span img {
  width: 50px;
}
@keyframes arrow {
  0% {
    transform: translateY(-15px);
  }
  50% {
    transform: translateY(0px);
  }
  100% {
    transform: translatey(10px);
  }
}
.main {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content {
  width: 50%;
  padding: 0 5%;
}
h3 {
  text-transform: uppercase;
  margin: 5% 2%;
  letter-spacing: 3.7px;
  font-weight: lighter;
  font-size: 39px;
}
.main p {
  width: 90%;
  margin: 20px 10px;
  line-height: 1.9;
  letter-spacing: 1.7px;
  font-weight: lighter;
}
.immg {
  display: flex;
  justify-content: end;
  align-items: center;
  width: 75%;
  height: 45%;
  background-image: url('../assets/AnimosCar/bgAbout.svg');
  background-repeat: no-repeat;
  background-position-x: right;
  background-size: 100%;
}
img {
  width: 80%;
  margin: 20px;
}
.featurs {
  width: 100%;
  gap: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 2% 0;
  padding: 2%;
}
.card {
  background: linear-gradient(to bottom, rgb(0, 0, 0, 1), rgb(255, 255, 255, 0.3));
  text-align: center;
  border-radius: 5%;
  color: white;
}
.card div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap:wrap ;
  flex-direction: column;
  transition: all ease-in-out 0.9s;
}
.card div h4 {
  font-size: 23px;
}
.card div p {
  padding: 1%;
  margin: 5% 1%;
}
.card div img {
  width: 25%;
}
.card:hover div {
  box-shadow: 10px 10px 10px gray;
  margin: 2%;
  padding: 2%;
  cursor: pointer;
}
</style>