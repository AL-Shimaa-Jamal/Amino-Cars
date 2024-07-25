<template>
    <div class="main text-capitalize bg-dark position-relative overflow-hidden text-light">
      <div class="title text-center pt-4">
        <h1>our new collection</h1>
        <span>
          <img src="../assets/AnimosCar/Star 3.svg" alt="star" />
        </span>
      </div>
      <!-- new cars images  -->
      <section class="d-flex justify-content-center align-items-center mt-5 p-2">
        <!--  cars images -->
        <div class=" d-flex flex-wrap container justify-content-center ">
          <!-- images cards -->
          <div v-for="(card, i) in cars" :key="i" class="card shadow bg-dark text-light  ">
            <div class="card-image  ">
              <img :src="card.image" alt="cars" width="400px" height="400px"/>
            </div>
            <div class="card-body">
              <h4>{{ card.title }}</h4>
              <p>{{ card.description }}</p>
              <div class="text-end">{{ card.price }}</div>
              <div><button class="btn btn-dark text-light text-capitalize shadow btn-outline-light ">buy now</button></div>
            </div>
          </div>
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
            image: 'src/assets/AnimosCar/new (1).svg',
            title: 'audi',
            description: 'now you can do upgrade to you engine',
            price: '4.500.00 EG'
          },
          {
            image: 'src/assets/AnimosCar/new (2).svg',
            title: 'Ferrari',
            description: 'now you can do upgrade to you engine',
            price: '2.700.00 eg'
          },
          {
            image: 'src/assets/AnimosCar/new (3).svg',
            title: 'Corvete',
            description: 'now you can do upgrade to you engine',
            price: '3.650.00 EG'
          },
          {
            image: 'src/assets/AnimosCar/new (4).svg',
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
    text-transform: capitalize;
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
  .card {
    margin: 0 0 20px 10px;
    transition: all 0.6s linear;
  }
  
  .card:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px rgb(170, 170, 170) !important;
    margin: 2%;
    border: 1px solid gray;
  }
  .btn:hover{
color:black !important;
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
  