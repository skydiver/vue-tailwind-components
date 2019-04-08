<template>
  <div
    :class="[alert.backgroundColorAlt, alert.borderColor, alert.textColorAlt]"
    class="border-l-4 p-4"
    role="alert"
  >
    <p class="font-bold pb-4">{{ title }}</p>
    <slot></slot>
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
