<template>
  <div class="bg-blue-darker p-2 shadow text-xl text-white">
    <h3 class="pl-2">{{ title }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Page Title'
    }
  }
};
</script>
