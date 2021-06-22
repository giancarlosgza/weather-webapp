<template>
  <div>
    <div class="row" v-if="weather">
      <div class="col-md-12 col-lg-8">
        <h6 class="subtitle-1 fw-500 text-white">This week</h6>
      </div>
      <div class="scrolling-wrapper">
        <!-- TOMORROW - 1 DAY -->
        <div class="wrapper">
          <div class="card bg-frosted">
            <div class="card-body">
              <div class="text-center">
                <IconWeather :weather="weather" number="0"></IconWeather>
                <h6 class="subtitle-2 text-muted text-capitalize">{{ weather.daily[0].weather[0].description }}</h6>
                <h6 class="subtitle-1 fw-500">{{ weather.daily[0].dt | moment("dddd") }}</h6>
                <div class="text-center">
                  <h6 class="subtitle-1">{{ Math.round(weather.daily[0].temp.max) }}° - <span
                    class="text-muted">{{ Math.round(weather.daily[0].temp.min) }}°</span></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 2 DAYS -->
        <div class="wrapper">
          <div class="card bg-frosted">
            <div class="card-body">
              <div class="text-center">
                <IconWeather :weather="weather" number="1"></IconWeather>
                <h6 class="subtitle-2 text-muted text-capitalize">{{ weather.daily[1].weather[0].description }}</h6>
                <h6 class="subtitle-1 fw-500">{{ weather.daily[1].dt | moment("dddd") }}</h6>
                <div class="text-center">
                  <h6 class="subtitle-1">{{ Math.round(weather.daily[1].temp.max) }}° - <span
                    class="text-muted">{{ Math.round(weather.daily[1].temp.min) }}°</span></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 3 DAYS -->
        <div class="wrapper">
          <div class="card bg-frosted">
            <div class="card-body">
              <div class="text-center">
                <IconWeather :weather="weather" number="2"></IconWeather>
                <h6 class="subtitle-2 text-muted text-capitalize">{{ weather.daily[2].weather[0].description }}</h6>
                <h6 class="subtitle-1 fw-500">{{ weather.daily[2].dt | moment("dddd") }}</h6>
                <div class="text-center">
                  <h6 class="subtitle-1">{{ Math.round(weather.daily[2].temp.max) }}° - <span
                    class="text-muted">{{ Math.round(weather.daily[2].temp.min) }}°</span></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 4 DAYS -->
        <div class="wrapper">
          <div class="card bg-frosted">
            <div class="card-body">
              <div class="text-center">
                <IconWeather :weather="weather" number="3"></IconWeather>
                <h6 class="subtitle-2 text-muted text-capitalize">{{ weather.daily[3].weather[0].description }}</h6>
                <h6 class="subtitle-1 fw-500">{{ weather.daily[3].dt | moment("dddd") }}</h6>
                <div class="text-center">
                  <h6 class="subtitle-1">{{ Math.round(weather.daily[3].temp.max) }}° - <span
                    class="text-muted">{{ Math.round(weather.daily[3].temp.min) }}°</span></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 5 DAYS -->
        <div class="wrapper">
          <div class="card bg-frosted">
            <div class="card-body">
              <div class="text-center">
                <IconWeather :weather="weather" number="4"></IconWeather>
                <h6 class="subtitle-2 text-muted text-capitalize">{{ weather.daily[4].weather[0].description }}</h6>
                <h6 class="subtitle-1 fw-500">{{ weather.daily[4].dt | moment("dddd") }}</h6>
                <div class="text-center">
                  <h6 class="subtitle-1">{{ Math.round(weather.daily[4].temp.max) }}° - <span
                    class="text-muted">{{ Math.round(weather.daily[4].temp.min) }}°</span></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 6 DAYS -->
        <div class="wrapper">
          <div class="card bg-frosted">
            <div class="card-body">
              <div class="text-center">
                <IconWeather :weather="weather" number="5"></IconWeather>
                <h6 class="subtitle-2 text-muted text-capitalize">{{ weather.daily[5].weather[0].description }}</h6>
                <h6 class="subtitle-1 fw-500">{{ weather.daily[5].dt | moment("dddd") }}</h6>
                <div class="text-center">
                  <h6 class="subtitle-1">{{ Math.round(weather.daily[5].temp.max) }}° - <span
                    class="text-muted">{{ Math.round(weather.daily[5].temp.min) }}°</span></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 7 DAYS -->
        <div class="wrapper">
          <div class="card bg-frosted">
            <div class="card-body">
              <div class="text-center">
                <IconWeather :weather="weather" number="6"></IconWeather>
                <h6 class="subtitle-2 text-muted text-capitalize">{{ weather.daily[6].weather[0].description }}</h6>
                <h6 class="subtitle-1 fw-500">{{ weather.daily[6].dt | moment("dddd") }}</h6>
                <div class="text-center">
                  <h6 class="subtitle-1">{{ Math.round(weather.daily[6].temp.max) }}° - <span
                    class="text-muted">{{ Math.round(weather.daily[6].temp.min) }}°</span></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconWeather from "@/components/weather/IconWeather";

export default {
  name: 'ForecastWeek',
  props: [
    'weather'
  ],
  components: {
    IconWeather
  }
}
</script>
