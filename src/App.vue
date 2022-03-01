<template>
  <div id="app">
    <h1>Async Cats</h1>
    <Loader v-if="loading" />
    <button type="button" @click="onLoadCats" class="cats_button">
      Load cats 😺
    </button>

    <p v-if="loading">Loading cats...</p>
    <div v-else>
      <h3>Cats list</h3>
      <ul v-if="cats && cats.length > 0" class="cat-list">
        <li v-for="(cat, index) in cats" :key="index" class="cat-list__item">
          <img :src="cat.image" :alt="cat.name" class="cat-list__img" />
          <section class="cart-list__copy">
            <h4 class="cat-list__title">{{ cat.name }}</h4>
            <p class="cat-list__description">{{ cat.description }}</p>
          </section>
        </li>
      </ul>
      <p v-else>{{ errorMsg }}</p>
    </div>
  </div>
</template>

<script>
import Loader from "./components/Loader.vue";
import CatsRepository from "./repository/catsRepository.js";

const repository = new CatsRepository();

export default {
  name: "App",
  components: {
    Loader,
  },
  data() {
    return {
      loading: false,
      cats: [],
      errorMsg: "",
    };
  },
  methods: {
    // starter - the default version
    onLoadCats() {
        this.cats = [];
        this.loading = true;
        this.cats = repository.getAllCatsSync();
        this.loading = false;
        // Problem: when we're loading cats the loader is not showing
    },
    // async/await way
    async onLoadCatsWithAsync() {
      this.cats = [];
      this.loading = true;

      try {
        const result = await repository.getAllCats(); // to reject this promis pass false to .getAllCats()
        this.cats = result.map((cat) => {
          cat.name += "🐈";
          return cat;
        });
      } catch {
        this.errorMsg = "Cannot download cats 😿 Try again";
      } finally {
        this.loading = false;
      }
    },

    // promise way
    onLoadCatsWithPromises() {
      this.cats = [];
      this.loading = true;

      repository.getAllCats()// to reject this promis pass false to .getAllCats()
        .then((result) => {
          return result.map((cat) => {
            cat.name = `${cat.name} 🐈`;
            return cat;
          });
        })
        .then((result) => {
          this.cats = result;
        })
        .catch(() => {
            this.errorMsg = "Cannot download cats 😿 Try again";
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a,
button {
  color: #4fc08d;
}

button {
  background: none;
  border: solid 1px;
  border-radius: 2em;
  font: inherit;
  padding: 0.75em 2em;
}

li {
  list-style: none;
}

.cat-list__item {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  height: 100px;
  border: 0;
  box-shadow: 0 4px 10px 0 rgb(0 0 0 / 5%);
  background-color: #ffffff;
  border-radius: 5px;
  line-height: 100%;
  padding-right: 10px;
  margin: 1rem auto;
}

.cat-list__img {
  width: 100px;
  height: 100px;
  border-radius: 5px 0 0 5px;
  object-fit: cover;
}

.cart-list__copy {
  width: calc(100% - 100px);
  text-align: left;
  margin-left: 1rem;
}

.cat-list__title {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0;
}

.cat-list__description {
  font-weight: 300;
  font-size: 0.875rem;
}

.cats-button {
  transition: all 0.5ms ease;
}

.cats_button:active {
  background: #4fc08d;
  color: #ffffff;
}
</style>
