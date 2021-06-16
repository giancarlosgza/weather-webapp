<template>
  <div>

    <!-- CLEAR -->
    <div v-if="weather.current.weather[number].main === 'Clear'" class="mb-3">
      <img src="@/assets/img/weather-icons/icon-sun.png" class="img-fluid" alt="Sun Icon">
    </div>
    <!-- RAIN -->
    <div v-if="weather.current.weather[number].main === 'Rain'" class="mb-3">
      <img src="@/assets/img/weather-icons/icon-light-rain.png" class="img-fluid" alt="Light Rain Icon">
    </div>
    <!-- CLOUDS -->
    <div v-if="weather.current.weather[number].main === 'Clouds'" class="mb-3">
      <img src="@/assets/img/weather-icons/icon-clouds.png" class="img-fluid" alt="Clouds Icon">
    </div>
    <!-- THUNDERSTORM -->
    <div v-if="weather.current.weather[number].main === 'Thunderstorm'" class="mb-3">
      <img src="@/assets/img/weather-icons/icon-thunderstorm.png" class="img-fluid" alt="Thunderstorm Icon">
    </div>
    <!-- DRIZZLE -->
    <div v-if="weather.current.weather[number].main === 'Drizzle'" class="mb-3">
      <img src="@/assets/img/weather-icons/icon-light-rain.png" class="img-fluid" alt="Drizzle Icon">
    </div>
    <!-- SNOW -->
    <div v-if="weather.current.weather[number].main === 'Snow'" class="mb-3">
      <img src="@/assets/img/weather-icons/icon-snow.png" class="img-fluid" alt="Snow Icon">
    </div>

  </div>
</template>

<script>
export default {
  name: 'IconCurrentWeather',
  props: [
    'weather',
    'number'
  ]
}
</script>
