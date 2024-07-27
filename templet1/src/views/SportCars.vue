<template>
  <div class="main text-capitalize bg-dark position-relative overflow-hidden text-light">
    <div class="title text-center pt-4">
    <h1 class="text-center p-4">Sports Cars
      <span>
        <img src="/Star 3.svg" alt="star" />
      </span>
    </h1>
    </div>
    <!-- sports cars images  -->
    <section class="d-flex justify-content-center align-items-center mt-5 p-2">
      <!-- left img -->
      <div class="col-6 d-none d-lg-block m-md-2">
        <img src="/new (2).svg" alt="" />
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
          image: '/car1.svg',
          title: 'audi',
          description: 'now you can do upgrade to you engine',
          price: '4.500.00 EG'
        },
        {
          image: '/car2.svg',
          title: 'Ferrari',
          description: 'now you can do upgrade to you engine',
          price: '2.700.00 EG'
        },
        {
          image: '/car3.svg',
          title: 'Corvete',
          description: 'now you can do upgrade to you engine',
          price: '3.650.00 EG'
        },
        {
          image: '/car4.svg',
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

.title,
h1{
  position: relative;
  overflow: hidden;
}
.title img {
  position: absolute;
  width: 20px;
  transform: translate(30%, 90%);
  bottom:  20%;
  right: 50%;
}
h1::after {
  content: '';
  width: 11%;
  background-color: white;
  height: 1px;
  position: absolute;
  top: 99%;
  right: 52%;
}

h1::before {
  content: '';
  width: 11%;
  background-color: white;
  height: 1px;
  position: absolute;
  top: 99%;
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
  border: 1px solid gray;
}

@media screen and (max-width: 1200px) {
.title img{
  display: none;
}

h1::after {
  content: '';
  width: 0%;

}

h1::before {
  content: '';
  width: 0%;

}
}
</style>
