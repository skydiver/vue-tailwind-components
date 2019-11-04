# vue-tailwind-components
> Tailwind CSS components for Vue.js

## Install
```
npm install --save vue-tailwind-components
```

## Usage
```
import Vue from 'vue';
import VueTailwindComponents from 'vue-tailwind-components';

Vue.use(VueTailwindComponents);
```

## Nuxt.js
1. create `plugins/vue-tailwind-components.js`
2. import component similar to **Usage** section
3. on `nuxt.config.js` add plugin to `plugins: ['~/plugins/vue-tailwind-components.js'],`

## Charts
To use charts components you need to install dependencies on your project:
```
npm install --save chart.js
npm install --save vue-chartjs
```
And load the component
```
import VueTailwindComponentsCharts from 'vue-tailwind-components/dist/charts'

Vue.use(VueTailwindComponentsCharts)
```