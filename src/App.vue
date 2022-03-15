<template>
  <div id="app">
    <nav>
      <a href="#" class="nav-link">Home</a>
      <a href="#about" class="nav-link">About</a>
      <a href="#team" class="nav-link">Our Cats Team</a>
    </nav>
    <HeaderSection />
    <ContentSection idName="about" classes="about-section">
      <template v-slot:content="{ aboutTitle, subtitle }">
        <h2>{{ aboutTitle }}</h2>
        <h3>{{ subtitle }}</h3>
        <p>
          {{ aboutText }}
        </p>
      </template>
      <template v-slot:image>
        <img src="./assets/cat.jpg" class="about-section-image" />
      </template>
    </ContentSection>


    <section id="team" class="team-section">
      <h2>Our team</h2>
      <CatsList :items="cats" />
    </section>

    <ContentSection idName="contact" class="contact-section">
      <template v-slot:content="{ contactTitle }">
        <h2>{{ contactTitle }}</h2>
        <p>{{ contactText }}</p>
      </template>
      <template v-slot:button>
        <button type="button" class="contact__button">Contact us</button>
      </template>
      <template v-slot:image>
        <img src="./assets/cat-profile.jpg" class="contact-section-image" />
      </template>
    </ContentSection>
  </div>
</template>

<script>
import CatsRepository from "./repository/catsRepository.js";
import CatsList from "./components/CatsList.vue";
import HeaderSection from "./components/HeaderSection.vue";
import ContentSection from "./components/ContentSection.vue";

const repository = new CatsRepository();

export default {
  name: "App",
  components: {
    CatsList,
    HeaderSection,
    ContentSection
  },
  data() {
    return {
      loading: false,
      cats: [],
      errorMsg: "",
      aboutText: "Sphynx kitten ocicat. Munchkin american bobtail. Burmese. Cornish rex puma. Siberian bengal tabby and ocicat but siberian ragdoll. Tiger kitten havana brown donskoy tom jaguar but lynx. Kitty cornish rex for tabby or balinese . Ragdoll burmese so kitty, and donskoy, kitty for singapura. Tom american bobtail turkish angora puma but siamese. Savannah british shorthair cornish rex abyssinian sphynx cornish rex yet lynx.",
      contactText: "Sphynx havana brown and british shorthair. Ocicat donskoy or ragdoll so siamese, but siamese singapura. Scottish fold maine coon and bobcat or cheetah sphynx puma. American shorthair donskoy. Birman cornish rex. Scottish fold mouser tomcat. Egyptian mau american shorthair norwegian forest and grimalkin havana brown birman. Havana brown munchkin american bobtail. Singapura american bobtail."
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