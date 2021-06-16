<template>
  <div>

    <!-- CLEAR -->
    <div v-if="weather.daily[number].weather[0].main === 'Clear'" class="mb-3">
      <img src="@/assets/img/weather-icons/icon-sun.png" class="img-fluid" width="48" height="48" alt="Sun Icon">
    </div>
    <!-- RAIN -->
    <div v-if="weather.daily[number].weather[0].main === 'Rain'" class="mb-3">
      <img src="@/assets/img/weather-icons/icon-rain.png" class="img-fluid" width="48" height="48" alt="Rain Icon">
    </div>
    <!-- CLOUDS -->
    <div v-if="weather.daily[number].weather[0].main === 'Clouds'" class="mb-3">
      <img src="@/assets/img/weather-icons/icon-clouds.png" class="img-fluid" width="48" height="48" alt="Clouds Icon">
    </div>
    <!-- THUNDERSTORM -->
    <div v-if="weather.daily[number].weather[0].main === 'Thunderstorm'" class="mb-3">
      <img src="@/assets/img/weather-icons/icon-thunderstorm.png" class="img-fluid" width="48" height="48"
           alt="Thunderstorm Icon">
    </div>
    <!-- DRIZZLE -->
    <div v-if="weather.daily[number].weather[0].main === 'Drizzle'" class="mb-3">
      <img src="@/assets/img/weather-icons/icon-light-rain.png" class="img-fluid" width="48" height="48"
           alt="Drizzle Icon">
    </div>
    <!-- SNOW -->
    <div v-if="weather.daily[number].weather[0].main === 'Snow'" class="mb-3">
      <img src="@/assets/img/weather-icons/icon-snow.png" class="img-fluid" width="48" height="48"
           alt="Snow Icon">
    </div>

  </div>
</template>

<script>
export default {
  name: 'IconWeather',
  props: [
    'weather',
    'number'
  ]
}
</script>
