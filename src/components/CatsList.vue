<template>
    <ul v-if="items && items.length > 0" class="cat-list">
      <li v-for="(cat, index) in items" :key="index" class="cat-list__item">
        <img :src="cat.image" :alt="cat.name" class="cat-list__img" />
        <section class="cart-list__copy">
          <h4 class="cat-list__title">{{ cat.name }}</h4>
          <p class="cat-list__description">{{ cat.description }}</p>
        </section>
      </li>
    </ul>
</template>

<script>
export default {
  name: "CatsList",
  props: ['items']
}
</script>

<style>

</style>