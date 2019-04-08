<template>
  <div
    :class="[alert.backgroundColorAlt, alert.borderColor, alert.textColorAlt]"
    class="border pl-4 pr-8 py-3 rounded"
    role="alert"
  >
    <strong class="font-bold">{{ title }}</strong>
    <span class="block sm:inline">
      <slot></slot>
    </span>
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
