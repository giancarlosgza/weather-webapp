<template>
  <div>
    <h6 class="subtitle-2 fw-500 bg-success border-radius-4 p-1" v-if="Math.round(weather.current.uvi) <= 2">
      Low -
      {{ Math.round(weather.current.uvi) }}
    </h6>
    <h6 class="subtitle-2 fw-500 bg-warning border-radius-4 p-1"
        v-if="Math.round(weather.current.uvi) <= 5 && weather.current.uvi > 2.1">
      Moderate -
      {{ Math.round(weather.current.uvi) }}
    </h6>
    <h6 class="subtitle-2 fw-500 bg-orange border-radius-4 p-1"
        v-if="Math.round(weather.current.uvi) <= 7 && weather.current.uvi > 5.1">
      High -
      {{ Math.round(weather.current.uvi) }}
    </h6>
    <h6 class="subtitle-2 fw-500 bg-danger border-radius-4 p-1"
        v-if="Math.round(weather.current.uvi) <= 10 && weather.current.uvi > 7.1">
      Very High -
      {{ Math.round(weather.current.uvi) }}
    </h6>
    <h6 class="subtitle-2 fw-500 bg-purple border-radius-4 p-1" v-if="Math.round(weather.current.uvi) >= 11">
      Extreme -
      {{ Math.round(weather.current.uvi) }}
    </h6>
  </div>
</template>

<script>
export default {
  name: "ListUVI",
  props: [
    'weather'
  ]
}
</script>
