<template>
  <div class="w-full md:w-1/2 xl:w-1/3 p-3">
    <div
      :class="[cardColor, cardBorderColor]"
      class="border-b-4 rounded-lg shadow-lg p-5"
    >
      <div class="flex flex-row items-center">
        <div class="flex-shrink pr-4">
          <div :class="bgIconColor" class="rounded-full p-5">
            <i :class="icon" class="fa fa-2x fa-inverse"></i>
          </div>
        </div>
        <div class="flex-1 text-right md:text-center">
          <h5 class="uppercase text-grey-dark">{{ title }}</h5>
          <h3 class="text-3xl">
            {{ value }}
            <span v-if="showArrow" :class="bgArrowColor"
              ><i :class="arrowIcon" class="fas"></i
            ></span>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardColor: {
      type: String,
      default: 'bg-grey-light'
    },
    cardBorderColor: {
      type: String,
      default: 'bg-grey-light'
    },
    icon: {
      type: String,
      default: 'fa-tachometer-alt'
    },
    iconColor: {
      type: String,
      default: 'grey-dark'
    },
    title: {
      type: String,
      default: 'Metric Card'
    },
    value: {
      type: String,
      default: '$0'
    },
    arrow: {
      type: String,
      default: ''
    },
    arrowColor: {
      type: String,
      default: 'grey'
    }
  },

  data() {
    return {
      arrows: {
        up: 'fa-caret-up',
        down: 'fa-caret-down',
        equal: 'fa-exchange-alt'
      }
    };
  },
  computed: {
    bgIconColor() {
      return `bg-${this.iconColor}`;
    },
    showArrow() {
      return this.arrowIcon;
    },
    arrowIcon() {
      return this.arrows[this.arrow] || null;
    },
    bgArrowColor() {
      return `text-${this.arrowColor}`;
    }
  }
};
</script>
