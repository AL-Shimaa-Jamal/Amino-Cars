<template>
  <div class="main text-capitalize bg-dark position-relative overflow-hidden text-light">
    <div class="title text-center pt-4">
    <h1 class="text-center p-4">our new collection 
      <span>
        <img src="/Star 3.svg" alt="star" />
      </span>
    </h1>
    </div>
    <!-- new cars images -->
    <section class="container mt-5 p-2">
      <!-- cars images -->
      <div class="card-grid">
        <!-- images cards -->
        <div v-for="(card, i) in cars" :key="i" class="card shadow bg-dark text-light">
          <div class="card-image">
            <img :src="card.image" alt="cars" />
          </div>
          <div class="card-body">
            <h4>{{ card.title }}</h4>
            <p>{{ card.description }}</p>
            <div class="text-end">{{ card.price }}</div>
            <div>
              <button class="btn btn-dark text-light text-capitalize shadow btn-outline-light">buy now</button>
            </div>
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
          id: 1,
          image: '/new (1).svg',
          title: 'PGU 508',
          description: 'now you can do upgrade to you engine',
          price: '4.500.00 EG'
        },
        {
          id: 2,
          image: '/new (2).svg',
          title: 'Ferrari',
          description: 'now you can do upgrade to you engine',
          price: '2.700.00 eg'
        },
        {
          id: 3,
          image: '/new (3).svg',
          title: 'BMW',
          description: 'now you can do upgrade to you engine',
          price: '3.650.00 EG'
        },
        {
          id: 4,
          image: "/new (4).svg",
          title: 'hyndai cn7',
          description: 'now you can do upgrade to you engine',
          price: '2.400.00 EG'
        },
        {
          id: 5,
          image: "/car1.svg",
          title: 'audi',
          description: 'now you can do upgrade to you engine',
          price: '2.600.00 EG'
        },
        {
          id: 6,
          image: '/car2.svg',
          title: 'ferrari',
          description: 'now you can do upgrade to you engine',
          price: '3.600.00 EG'
        },
        {
          id: 7,
          image: '/car3.svg',
          title: 'corvete',
          description: 'now you can do upgrade to you engine',
          price: '2.670.00 EG'
        },
        {
          id: 8,
          image: '/car4.svg',
          title: 'camaro',
          description: 'now you can do upgrade to you engine',
          price: '4.460.00 EG'
        },
      ]
    }
  }
}
</script>

<style scoped>
.main {
  height: 100%;
  text-transform: capitalize;
}

.title,
h1 {
  position: relative;
  overflow: hidden;
}
.title img {
  position: absolute;
  width: 20px;
  transform: translate(30%, 90%);
  bottom: 20%;
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
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  justify-content: center;
  align-items: center;
}

.card {
  transition: all 0.4s linear;
}

.card-image img {
  width: 100%;
  height: auto;
}

.card:hover {
  cursor: pointer;
  box-shadow: 2px 2px 10px rgb(170, 170, 170) !important;
  border: 1px solid gray;
}

.btn:hover {
  color: black !important;
}

@media screen and (max-width: 1200px) {
  .title img {
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
