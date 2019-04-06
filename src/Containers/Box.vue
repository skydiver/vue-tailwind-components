<template>
  <div class="bg-white border-transparent rounded-lg shadow-lg">
    <div
      class="bg-grey-light uppercase text-grey-darkest border-b-2 border-grey rounded-tl-lg rounded-tr-lg p-2"
    >
      <h5 class="uppercase text-grey-dark">{{ title }}</h5>
    </div>
    <div class="p-5">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Box Title'
    }
  }
};
</script>

<style scoped></style>
