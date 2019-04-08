<template>
  <div :class="alert.backgroundColor" class="flex max-w-sm mb-4">
    <div :class="alert.iconBackgroundColor" class="w-16">
      <div class="p-4" v-html="alert.icon"></div>
    </div>
    <div :class="alert.textColor" class="w-auto items-center p-4">
      <h3 class="text-lg font-bold mb-2">
        {{ title }}
      </h3>
      <p class="leading-tight">
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script>
import themes from './themes';

export default {
  props: {
    type: {
      type: String,
      default: 'success'
    },
    title: {
      type: String,
      default: 'Alert Title'
    }
  },
  computed: {
    alert() {
      return themes[this.type];
    }
  }
};
</script>
