<template>
  <div :id="idName" :class="[`${classes}`, `${idName}-section-wrapper`]">
    <div :class="`${idName}-section-content`">
      <slot name="content" :title="title" :subtitle="subtitle"></slot>
    </div>
    <slot name="image"></slot>
  </div>
</template>

<script>
export default {
  name: "ContentSection",
  props: ['idName', 'classes'],
  data() {
      return{
          title: "About",
          subtitle: "Lorem ipsum dolor",
      }
  }
}
</script>

<style>

</style>