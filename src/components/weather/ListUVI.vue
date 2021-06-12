<template>
  <a data-bs-toggle="offcanvas" href="#offcanvasUVI" role="button" aria-controls="offcanvasUVI">
    <h6 class="subtitle-2 bg-success border-radius-4 p-1" v-if="Math.round(weather.current.uvi) <= 2">
      Low -
      {{ Math.round(weather.current.uvi) }}
    </h6>
    <h6 class="subtitle-2 bg-warning border-radius-4 p-1"
        v-if="Math.round(weather.current.uvi) <= 5 && weather.current.uvi > 2.5">
      Moderate -
      {{ Math.round(weather.current.uvi) }}
    </h6>
    <h6 class="subtitle-2 bg-orange border-radius-4 p-1"
        v-if="Math.round(weather.current.uvi) <= 7 && weather.current.uvi > 5.5">
      High -
      {{ Math.round(weather.current.uvi) }}
    </h6>
    <h6 class="subtitle-2 bg-danger border-radius-4 p-1"
        v-if="Math.round(weather.current.uvi) <= 10 && weather.current.uvi > 7.5">
      VH -
      {{ Math.round(weather.current.uvi) }}
    </h6>
    <h6 class="subtitle-2 bg-purple border-radius-4 p-1" v-if="Math.round(weather.current.uvi) >= 11">
      Extreme -
      {{ Math.round(weather.current.uvi) }}
    </h6>
  </a>
</template>

<script>
export default {
  name: "ListUVI",
  props: [
    'weather'
  ]
}
</script>
