<template>
  <div>
    <div class="row justify-content-center" v-if="weather">
      <div class="col-md-12 col-lg-8 mb-2">
        <h6 class="subtitle-1 fw-500 text-white">This day</h6>
      </div>
      <div class="col-md-12 col-lg-8 mb-3">
        <div class="card bg-frosted">
          <div class="card-body">
            <button class="btn bg-frosted shadow-0dp" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseChart"
                    aria-expanded="true" aria-controls="collapseChart">
              Temperature chart
            </button>
            <LineChart :weather="weather"></LineChart>
            <div class="scrolling-wrapper">
              <!-- 1 HOUR -->
              <div class="wrapper">
                <div class="card card-no-border bg-transparent">
                  <div class="card-body">
                    <div class="text-center">
                      <h6 class="subtitle-2 text-muted fw-500 text-uppercase">
                        {{ weather.hourly[0].dt | moment("h:mm a") }}</h6>
                      <IconWeather :weather="weather" number="0"></IconWeather>
                      <div class="text-center">
                        <h6 class="subtitle-2 text-muted text-capitalize">
                          {{ weather.hourly[0].weather[0].description }}</h6>
                        <h6 class="mb-0">{{ Math.round(weather.hourly[0].temp) }}°</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 2 HOUR -->
              <div class="wrapper">
                <div class="card card-no-border bg-transparent">
                  <div class="card-body">
                    <div class="text-center">
                      <h6 class="subtitle-2 text-muted fw-500 text-uppercase">
                        {{ weather.hourly[1].dt | moment("h:mm a") }}</h6>
                      <IconWeather :weather="weather" number="0"></IconWeather>
                      <div class="text-center">
                        <h6 class="subtitle-2 text-muted text-capitalize">
                          {{ weather.hourly[1].weather[0].description }}</h6>
                        <h6 class="mb-0">{{ Math.round(weather.hourly[1].temp) }}°</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 3 HOUR -->
              <div class="wrapper">
                <div class="card card-no-border bg-transparent">
                  <div class="card-body">
                    <div class="text-center">
                      <h6 class="subtitle-2 text-muted fw-500 text-uppercase">
                        {{ weather.hourly[2].dt | moment("h:mm a") }}</h6>
                      <IconWeather :weather="weather" number="0"></IconWeather>
                      <div class="text-center">
                        <h6 class="subtitle-2 text-muted text-capitalize">
                          {{ weather.hourly[2].weather[0].description }}</h6>
                        <h6 class="mb-0">{{ Math.round(weather.hourly[2].temp) }}°</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 4 HOUR -->
              <div class="wrapper">
                <div class="card card-no-border bg-transparent">
                  <div class="card-body">
                    <div class="text-center">
                      <h6 class="subtitle-2 text-muted fw-500 text-uppercase">
                        {{ weather.hourly[3].dt | moment("h:mm a") }}</h6>
                      <IconWeather :weather="weather" number="0"></IconWeather>
                      <div class="text-center">
                        <h6 class="subtitle-2 text-muted text-capitalize">
                          {{ weather.hourly[3].weather[0].description }}</h6>
                        <h6 class="mb-0">{{ Math.round(weather.hourly[3].temp) }}°</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 5 HOUR -->
              <div class="wrapper">
                <div class="card card-no-border bg-transparent">
                  <div class="card-body">
                    <div class="text-center">
                      <h6 class="subtitle-2 text-muted fw-500 text-uppercase">
                        {{ weather.hourly[4].dt | moment("h:mm a") }}</h6>
                      <IconWeather :weather="weather" number="0"></IconWeather>
                      <div class="text-center">
                        <h6 class="subtitle-2 text-muted text-capitalize">
                          {{ weather.hourly[4].weather[0].description }}</h6>
                        <h6 class="mb-0">{{ Math.round(weather.hourly[4].temp) }}°</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 6 HOUR -->
              <div class="wrapper">
                <div class="card card-no-border bg-transparent">
                  <div class="card-body">
                    <div class="text-center">
                      <h6 class="subtitle-2 text-muted fw-500 text-uppercase">
                        {{ weather.hourly[5].dt | moment("h:mm a") }}</h6>
                      <IconWeather :weather="weather" number="0"></IconWeather>
                      <div class="text-center">
                        <h6 class="subtitle-2 text-muted text-capitalize">
                          {{ weather.hourly[5].weather[0].description }}</h6>
                        <h6 class="mb-0">{{ Math.round(weather.hourly[5].temp) }}°</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 7 HOUR -->
              <div class="wrapper">
                <div class="card card-no-border bg-transparent">
                  <div class="card-body">
                    <div class="text-center">
                      <h6 class="subtitle-2 text-muted fw-500 text-uppercase">
                        {{ weather.hourly[6].dt | moment("h:mm a") }}</h6>
                      <IconWeather :weather="weather" number="0"></IconWeather>
                      <div class="text-center">
                        <h6 class="subtitle-2 text-muted text-capitalize">
                          {{ weather.hourly[6].weather[0].description }}</h6>
                        <h6 class="mb-0">{{ Math.round(weather.hourly[6].temp) }}°</h6>
                      </div>
                    </div>
                  </div>
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
import LineChart from '@/components/weather/ForecastChart'

export default {
  name: 'ForecastHourly',
  props: [
    'weather'
  ],
  components: {
    IconWeather, LineChart
  },
}
</script>
