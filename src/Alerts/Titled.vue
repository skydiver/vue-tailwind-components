<template>
  <div role="alert">
    <div
      :class="[alert.backgroundColor, alert.titleTextColor]"
      class="font-bold rounded-t px-4 py-2"
    >
      {{ title }}
    </div>
    <div
      :class="[alert.borderColor, alert.backgroundColorAlt, alert.textColor]"
      class="border border-t-0 rounded-b px-4 py-3"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
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
  data() {
    return {
      theme: {
        warning: {
          backgroundColor: 'bg-yellow',
          backgroundColorAlt: 'bg-yellow-lightest',
          titleTextColor: 'text-yellow-darker',
          textColor: 'text-yellow-darker',
          borderColor: 'border-yellow-light'
        },
        success: {
          backgroundColor: 'bg-green',
          backgroundColorAlt: 'bg-green-lightest',
          titleTextColor: 'text-white',
          textColor: 'text-green-dark',
          borderColor: 'border-green-light'
        },
        info: {
          backgroundColor: 'bg-teal',
          backgroundColorAlt: 'bg-teal-lightest',
          titleTextColor: 'text-white',
          textColor: 'text-teal-dark',
          borderColor: 'border-teal-light'
        },
        error: {
          backgroundColor: 'bg-red',
          backgroundColorAlt: 'bg-red-lightest',
          titleTextColor: 'text-white',
          textColor: 'text-red-dark',
          borderColor: 'border-red-light'
        }
      }
    };
  },
  computed: {
    alert() {
      return this.theme[this.type];
    }
  }
};
</script>
