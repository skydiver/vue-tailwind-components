<template>
  <button
    :class="[bgColor, bgHoverColor, txtColor, border]"
    class="font-bold py-2 px-4"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Button Label'
    },
    backgroundColor: {
      type: String,
      default: 'grey'
    },
    hoverColor: {
      type: String,
      default: 'grey-dark'
    },
    textColor: {
      type: String,
      default: 'grey-darkest'
    }
  },
  data() {
    return {
      border: ''
    };
  },
  computed: {
    bgColor() {
      return `bg-${this.backgroundColor}`;
    },
    bgHoverColor() {
      return `hover:bg-${this.hoverColor}`;
    },
    txtColor() {
      return `text-${this.textColor}`;
    }
  }
};
</script>
