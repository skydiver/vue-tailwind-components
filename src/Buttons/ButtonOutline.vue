<template>
  <button
    :class="[bgHoverColor, txtColor, txtHoverColor, borderColor]"
    class="bg-transparent font-semibold py-2 px-4 border hover:border-transparent rounded"
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
    hoverColor: {
      type: String,
      default: 'grey'
    },
    textHoverColor: {
      type: String,
      default: 'white'
    },
    textColor: {
      type: String,
      default: 'grey-dark'
    }
  },
  computed: {
    bgHoverColor() {
      return `hover:bg-${this.hoverColor}`;
    },
    txtHoverColor() {
      return `hover:text-${this.textHoverColor}`;
    },
    txtColor() {
      return `text-${this.textColor}`;
    },
    borderColor() {
      return `border-${this.hoverColor}`;
    }
  }
};
</script>

<style scoped></style>
