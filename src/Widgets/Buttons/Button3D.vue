<template>
  <button
    :class="[bgColor, bgHoverColor, txtColor, brdColor, brdHoverColor]"
    class="font-bold py-2 px-4 border-b-4 rounded"
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
      default: 'grey-light'
    },
    textColor: {
      type: String,
      default: 'grey-darkest'
    },
    borderColor: {
      type: String,
      default: 'grey-dark'
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
    },
    brdColor() {
      return `border-${this.borderColor}`;
    },
    brdHoverColor() {
      return `hover:border-${this.backgroundColor}`;
    }
  }
};
</script>

<style scoped></style>
