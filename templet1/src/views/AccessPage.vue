<template>
  <div class="main text-capitalize bg-dark position-relative overflow-hidden text-light">
    <div class="title text-center pt-4">
      <h1 class="text-center p-4">
        accessories
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
          image: '/acc (1).svg',
          title: ' carbonviber steerin',
          description: 'now you can do upgrade to you engine',
          price: '12.000  EG'
        },
        {
          id: 2,
          image: '/acc (2).svg',
          title: 'exiost system',
          description: 'now you can do upgrade to you engine',
          price: '12.000 eg'
        },
        {
          id: 3,
          image: '/acc (3).svg',
          title: 'car chair',
          description: 'now you can do upgrade to you engine',
          price: '10.000 EG'
        },
        {
          id: 4,
          image: '/acc  (4).svg',
          title: 'intake cold',
          description: 'now you can do upgrade to you engine',
          price: '400.00 EG'
        },
        {
          id: 5,
          image: '/acc  (5).svg',
          title: 'turbo 3.1 bar',
          description: 'now you can do upgrade to you engine',
          price: '33.000 EG'
        },
        {
          id: 6,
          image: '/acc  (6).svg',
          title: 'bbs tire',
          description: 'now you can do upgrade to you engine',
          price: '16.000 EG'
        },
        {
          id: 7,
          image: '/acc (1).svg',
          title: ' carbonviber steerin',
          description: 'now you can do upgrade to you engine',
          price: '12.000  EG'
        },
        {
          id: 8,
          image: '/acc (2).svg',
          title: 'exiost system',
          description: 'now you can do upgrade to you engine',
          price: '12.000 eg'
        }
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
  gap: 50px;
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
  