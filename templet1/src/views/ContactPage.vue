<template>
  <div class="main text-capitalize bg-dark position-relative overflow-hidden text-light">
    <div class="title text-center pt-4">
      <h1 class="text-center p-4">
        what our customer have to say !!
        <span>
          <img src="/Star 3.svg" alt="star" />
        </span>
      </h1>
      <p class="container w-50 d-none d-md-block d-lg-block pt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor blanditiis saepe id
        hic consequuntur tenetur molestias praesentium sunt perferendis nulla nisi ex, suscipit
        eaque, natus optio culpa debitis. Officia?
      </p>
    </div>
    <!-- new cars images -->
    <section class="container mt-5 p-2">
      <!-- cars images -->
      <div class="card-grid">
        <!-- images cards -->
        <div
          v-for="(card, i) in cars"
          :key="i"
          class="card shadow bg-dark text-light"
          :class="{ active: activeIndex === i }"
        >
          <div class="card-image">
            <img :src="card.image" alt="cars" />
          </div>
          <div class="card-body">
            <h4>{{ card.title }}</h4>
            <div
              class="text-center list-unstyled d-flex justify-content-center align-items-center rate"
            >
              <li v-for="(star, index) in 5" :key="index" @click="toggleStar(i, index)">
                <img 
                  src="/Star 3.svg" 
                  alt="" 
                  width="80%" 
                  :class="{ colored: card.ratedStars < index }"
                />
              </li>
            </div>
            <p class="container w-75 text-secondary description">{{ card.description }}</p>
          </div>
        </div>
      </div>
      <div
        class="spbtn container text-center m-3 list-unstyled d-flex justify-content-center align-items-center"
      >
        <li
          v-for="(card, i) in cars"
          :key="i"
          @click="setActive(i)"
          :class="{ active: activeIndex === i }"
          class="m-3"
        ></li>
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
          image: '/user2.svg',
          title: 'mohammed',
          description:
            'Lorem ipsum, or lipsum as it is sometimes  known, is dummy text used in laying out print, graphe i',
          ratedStars: 0,
        },
        {
          id: 2,
          image: '/user1.svg',
          title: 'gamila 014',
          description:
            'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphe i ',
          ratedStars: 0,
        },
        {
          id: 3,
          image: '/user3.svg',
          title: 'kareem',
          description:
            'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out  print, graphe i',
          ratedStars: 0,
        },
      ],
      activeIndex: 1,
    }
  },
  methods: {
    setActive(index) {
      this.activeIndex = index
    },
    toggleStar(cardIndex, starIndex) {
      this.cars[cardIndex].ratedStars = starIndex + 1;
    },
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  justify-content: center;
  align-items: center;
}

.card {
  transition: all 0.4s linear;
  text-align: center;
}

.card-image img {
  width: 50%;
  height: auto;
}
.card.active {
  cursor: pointer;
  box-shadow: 2px 2px 10px rgb(170, 170, 170) !important;
  border: 1px solid gray;
  transform: scale(1.1, 1.1);
  margin-bottom: 20px;
}
.description {
  font-size: 80%;
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

.colored {
  filter: opacity(50%);
  transform: scale(1.2,1.2);
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
