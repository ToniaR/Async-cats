<template>
  <div id="app">
    <!-- navigation -->
    <nav>
      <a href="#" class="nav-link">Home</a>
      <a href="#about" class="nav-link">About</a>
      <a href="#team" class="nav-link">Our Cats Team</a>
    </nav>
    <section class="home-section">
      <div class="home-section-content">
        <h1>Cats</h1>
        <p class="home__subtitle">Mew to you dear human 😺</p>
        <button type="button" class="contact__button">Contact us</button>
      </div>
    </section>
    <section id="about" class="about-section">
      <div class="about-section-content">
        <h2>About</h2>
        <p>
          Plop down in the middle where everybody walks hide from vacuum cleaner
          mrow curl up and sleep on the freshly laundered towels plays league of
          legends. Scratch so owner bleeds sit on the laptop bite nose of your
          human. Cat walks in keyboard ignore the squirrels, you'll never catch
          them anyway attack the dog then pretend like nothing happened claw at
          curtains stretch and yawn nibble on tuna ignore human bite human hand,
          then cats take over the world cereal boxes make for five star
          accommodation . Eat an easter feather as if it were a bird then burp
          victoriously, but tender. Leave fur on owners clothes fooled again
          thinking the dog likes me so spill litter box, scratch at owner,
          destroy all furniture, especially couch. Chirp at birds scratch the
          postman wake up lick paw wake up owner meow meow. Drool cattt catt
          cattty cat being a cat human is in bath tub, emergency! drowning!
          meooowww!. This human feeds me, i should be a god meow and walk away.
        </p>
      </div>
      <img src="./assets/cat.jpg" class="about-section-image" />
    </section>
    <section id="team" class="team-section">
      <h2>Our team</h2>
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
    </section>
    <section id="contact" class="contact-section">
      <div class="contact-section-content">
        <h2>Contact</h2>
        <p>
          Plop down in the middle where everybody walks hide from vacuum cleaner
          mrow curl up and sleep on the freshly laundered towels plays league of
          legends. Scratch so owner bleeds sit on the laptop bite nose of your
          human. Cat walks in keyboard ignore the squirrels, you'll never catch
          them anyway attack the dog then pretend like nothing happened claw at
          curtains stretch and yawn nibble on tuna ignore human bite human hand,
          then cats take over the world cereal boxes make for five star
          accommodation . Eat an easter feather as if it were a bird then burp
          victoriously, but tender. Leave fur on owners clothes fooled again
          thinking the dog likes me so spill litter box, scratch at owner,
          destroy all furniture, especially couch. Chirp at birds scratch the
          postman wake up lick paw wake up owner meow meow. Drool cattt catt
          cattty cat being a cat human is in bath tub, emergency! drowning!
          meooowww!. This human feeds me, i should be a god meow and walk away.
        </p>
        <button type="button" class="contact__button">Contact us</button>
      </div>
      <img src="./assets/cat-profile.jpg" class="contact-section-image" />
    </section>

    <footer>
      <a href="#" class="nav-link">Home</a>
      <a href="#about" class="nav-link">About</a>
      <a href="#team" class="nav-link">Our Cats Team</a>
    </footer>
  </div>
</template>

<script>
import CatsRepository from "./repository/catsRepository.js";

const repository = new CatsRepository();

export default {
  name: "App",
  components: {},
  data() {
    return {
      loading: false,
      cats: [],
      errorMsg: "",
    };
  },
  async mounted() {
    this.onLoadCats();
  },
  methods: {
    async onLoadCats() {
      this.cats = [];
      this.loading = true;

      try {
        const result = await repository.getAllCats();
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
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
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

h1 {
  font-size: 3rem;
}

h2 {
  margin-bottom: 1rem;
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

.cats_button {
  color: #4fc08d;
  background-color: #ffffff;
  cursor: pointer;
}

/**nav */
nav {
  width: 100%;
  background: aliceblue;
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.nav-link {
  text-decoration: none;
  margin: 0 1rem;
  color: #2c3e50;
  font-weight: 500;
}

.nav-link:hover {
  text-decoration: underline;
}

/**about */
.about-section,
.contact-section {
  display: flex;
  min-height: 450px;
  height: 100%;
}

.contact-section {
  background: #d5e8f8;
}

.team-section {
  padding: 3rem;
}

.about-section-content,
.contact-section-content {
  width: 60%;
  line-height: 1.7rem;
  padding: 2rem;
  text-align: left;
}

.about-section-image,
.contact-section-image {
  width: 40%;
  object-fit: cover;
}

/**home */
.home-section {
  width: 100%;
  min-height: 450px;
  height: 100%;
  background: #d5e8f8;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home__subtitle {
  font-size: 2rem;
}

.contact__button {
  color: #ffffff;
  background-color: #2099ff;
  cursor: pointer;
  border: none;
  margin: 1rem 0;
}

footer {
  background-color: #2099ff;
  color: #ffffff;
  height: 200px;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: baseline;
}
</style>
