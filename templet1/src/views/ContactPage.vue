<template>
  <div class="main text-capitalize bg-dark position-relative overflow-hidden text-light">
    <div class="title text-center pt-4">
      <h1 class="text-center p-4">
        what our customer have to say !!
        <span>
          <img src="/Star 3.svg" alt="star" />
        </span>
      </h1>
      <p class="container w-25 pt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor blanditiis saepe id hic consequuntur tenetur molestias praesentium sunt perferendis nulla nisi ex, suscipit eaque, natus optio culpa debitis. Officia?
      </p>
    </div>
    <!-- new cars images -->
    <section class="container mt-5 p-2">
      <!-- cars images -->
      <div class="card-grid">
        <!-- images cards -->
        <div v-for="(card, i) in cars" :key="i" class="card shadow bg-dark text-light" :class="{ active: activeIndex === i }">
          <div class="card-image">
            <img :src="card.image" alt="cars" />
          </div>
          <div class="card-body">
            <h4>{{ card.title }}</h4>
            <div class="text-end">{{ card.rate }}</div>
            <p>{{ card.description }}</p>
          </div>
        </div>
      </div>
      <div class="spbtn container text-center m-3 list-unstyled d-flex justify-content-center align-items-center">
        <li v-for="(card, i) in cars" :key="i" @click="setActive(i)" :class="{ active: activeIndex === i }" class="m-3"></li>
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
          title: 'mohammed',
          description: 'now you can do upgrade to you engine',
        },
        {
          id: 2,
          image: '/new (2).svg',
          title: 'gamila 014',
          description: 'now you can do upgrade to you engine',
        },
        {
          id: 3,
          image: '/new (3).svg',
          title: 'kareem',
          description: 'now you can do upgrade to you engine',
        },
      ],
      activeIndex: 1,
    };
  },
  methods: {
    setActive(index) {
      this.activeIndex = index;
    },
  },
};
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
.card.active {
  cursor: pointer;
  box-shadow: 2px 2px 10px rgb(170, 170, 170) !important;
  border: 1px solid gray;
  transform: scale(1.1,1.1);
}

.spbtn li {
  width: 10px !important;
  height: 10px !important;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;
}

.spbtn li.active {
  background-color: blue !important;
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

