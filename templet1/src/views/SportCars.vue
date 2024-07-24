<template>
  <div class="main text-capitalize bg-dark position-relative overflow-hidden text-light">
    <div class="title text-center pt-4">
      <h1>Sports Cars</h1>
      <span>
        <img src="../assets/AnimosCar/Star 3.svg" alt="star" />
      </span>
    </div>
    <!-- sports cars images  -->
    <section class="d-flex justify-content-center align-items-center mt-5 p-2">
      <!-- left img -->
      <div class="col-6 d-none d-lg-block m-md-2">
        <img src="../assets/AnimosCar/Rectangle 4.svg" alt="" />
      </div>
      <!--  right images -->
      <div class="someimages d-flex flex-wrap">
        <!-- images cards -->
        <div v-for="(card, i) in cars" :key="i" class="card shadow bg-dark text-light">
          <div class="card-image">
            <img :src="card.image" alt="cars" width="100%"/>
          </div>
          <div class="card-body">
            <h4>{{ card.title }}</h4>
            <p>{{ card.description }}</p>
            <div class="text-end">{{ card.price }}</div>
          </div>
        </div>
        <!-- <div class="card shadow bg-dark text-light">
          <div class="card-image">
            <img src="../assets/AnimosCar/Rectangle 4-2.svg" alt="" width="100%" />
          </div>
          <div class="card-body">
            <h4></h4>
            <p>now you can do upgrade to you engine</p>
            <div class="text-end">2.400.00 EG</div>
          </div>
        </div>
        <div class="card shadow bg-dark text-light">
          <div class="card-image">
            <img src="../assets/AnimosCar/Rectangle 4-3.svg" alt="" width="100%" />
          </div>
          <div class="card-body">
            <h4></h4>
            <p>now you can do upgrade to you engine</p>
            <div class="text-end">2.400.00 EG</div>
          </div>
        </div>
        <div class="card shadow bg-dark text-light">
          <div class="card-image">
            <img src="../assets/AnimosCar/Rectangle 4-4.svg" alt="" width="100%" />
          </div>
          <div class="card-body">
            <h4>camaro</h4>
            <p>now you can do upgrade to you engine</p>
            <div class="text-end">2.400.00 EG</div>
          </div>
        </div> -->
      </div>
    </section>
  </div>
</template>

  
<script>
export default {
  data() {
    return {
      cars: [
        {
          'image': 'src/assets/AnimosCar/car1.svg',
          title: 'audi',
          description: 'now you can do upgrade to you engine',
          price: '4.500.00 EG'
        },
        {
          'image': 'src/assets/AnimosCar/car2.svg',
          title: 'Ferrari',
          description: 'now you can do upgrade to you engine',
          price: '2.700.00 EG'
        },
        {
          'image': 'src/assets/AnimosCar/car3.svg',
          title: 'Corvete',
          description: 'now you can do upgrade to you engine',
          price: '3.650.00 EG'
        },
        {
          'image': 'src/assets/AnimosCar/car4.svg',
          title: 'camaro',
          description: 'now you can do upgrade to you engine',
          price: '2.400.00 EG'
        },
      ]
    }
  },
  methods: {}
}
</script>

<style scoped>
.main {
  height: 200vh;
}

.title img {
  width: 20px;
  transform: translate(-30%, 80%);
}

h1::after {
  content: '';
  width: 11%;
  background-color: white;
  height: 1px;
  position: absolute;
  top: 8%;
  right: 52%;
}

h1::before {
  content: '';
  width: 11%;
  background-color: white;
  height: 1px;
  position: absolute;
  top: 8%;
  right: 37.9%;
}

.someimages {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.card {
  margin: 0 0 20px 10px;
  transition: all 0.6s linear;
}

.card:hover {
  cursor: pointer;
  box-shadow: 5px 5px 10px rgb(170, 170, 170) !important;
  margin: 2%;
  border: 1px solid gray;
}

@media screen and (max-width: 1000px) {
  h1::after {
    top: 7.4%;
    right: 53%;
  }

  h1::before {
    top: 7.4%;
    right: 37.5%;
  }
}

@media screen and (max-width: 800px) {
  h1::after {
    top: 7.5%;
    right: 54%;
  }

  h1::before {
    top: 7.5%;
    right: 37.5%;
  }
  .card:hover {
  margin: 0;
}
}
</style>
