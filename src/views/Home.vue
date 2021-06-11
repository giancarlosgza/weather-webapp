<template>
  <div class="home bg-hot" :class="[]">

    <div class="container mb-3">
      <div class="row justify-content-center py-3">
        <div class="col-md-8">
          <div class="card bg-frosted border-radius-50">
            <div class="card-body">
              <div class="input-group">
                  <span class="input-group-text input-group-text-transparent" id="input-city">
                    <i class="material-icons-outlined">location_on</i>
                  </span>
                <input type="text" class="form-control form-control-border-bottom bg-transparent"
                       placeholder="New York, Dubai, Madrid, CDMX"
                       aria-label="New York, Dubai, Madrid, CDMX"
                       aria-describedby="input-city" v-model="query" @change="getWeather">
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CURRENT WEATHER -->
      <div class="row justify-content-center" v-if="weather">
        <div class="col-md-8 mb-3">
          <div class="card bg-frosted">
            <div class="card-body text-center">
              <div class="mb-4">
                <IconCurrentWeather :weather="weather" number="0"></IconCurrentWeather>
                <h2 class="fw-500">{{ weather.current.temp }} °C</h2>
                <h6 class="subtitle-1 text-capitalize">{{ weather.current.weather[0].description }}</h6>
                <h6 class="subtitle-1 text-muted">{{ weather.timezone }}</h6>
              </div>
              <div>
                <div class="row">
                  <div class="col-4 col-md-4">
                    <h6 class="subtitle-2 text-muted">
                      <i class="material-icons-outlined mdc-18 me-1">thermostat</i>
                      Feels like
                    </h6>
                    <h6 class="subtitle-1 fw-500">{{ weather.current.feels_like }} °C</h6>
                  </div>
                  <div class="col-4 col-md-4">
                    <h6 class="subtitle-2 text-muted">
                      <i class="material-icons-outlined mdc-18 me-1">water_drop</i>
                      Humidity
                    </h6>
                    <h6 class="subtitle-1 fw-500">{{ weather.current.humidity }} %</h6>
                  </div>
                  <div class="col-4 col-md-4">
                    <h6 class="subtitle-2 text-muted">
                      <i class="material-icons-outlined mdc-18 me-1">air</i>
                      Wind
                    </h6>
                    <h6 class="subtitle-1 fw-500">{{ weather.current.wind_speed }} m/s</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- CURRENT WEATHER DETAILS -->
        <div class="col-md-8 mb-3">
          <div class="card bg-frosted">
            <div class="card-body text-center pb-2">
              <div>
                <div class="row">
                  <div class="col-4 col-md-4">
                    <i class="material-icons-outlined text-muted mdc-18 mb-1">compress</i>
                    <h6 class="subtitle-2 text-muted">
                      Pressure
                    </h6>
                    <h6 class="subtitle-2 fw-500 p-1">{{ weather.current.pressure }} mb</h6>
                  </div>
                  <div class="col-4 col-md-4">
                    <i class="material-icons-outlined text-muted mdc-18 mb-1">wb_sunny</i>
                    <h6 class="subtitle-2 text-muted">
                      UVI
                    </h6>
                    <ListUVI :weather="weather"></ListUVI>
                  </div>
                  <div class="col-4 col-md-4">
                    <i class="material-icons-outlined text-muted mdc-18 mb-1">visibility</i>
                    <h6 class="subtitle-2 text-muted">
                      Visibility
                    </h6>
                    <h6 class="subtitle-2 fw-500 p-1">{{ (weather.current.visibility / 1000).toFixed(1) }} km</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- FORECAST 7 DAYS -->
      <div class="row" v-if="weather">
        <div class="scrolling-wrapper">
          <!-- TOMORROW - 1 DAY -->
          <div class="wrapper">
            <div class="card bg-frosted">
              <div class="card-body">
                <div class="text-center">
                  <IconWeather :weather="weather" number="0"></IconWeather>
                  <h6 class="subtitle-2 text-muted text-capitalize">{{ weather.daily[0].weather[0].description }}</h6>
                  <h6 class="subtitle-1 fw-500">{{ new Date() | moment("add", "1 days", "dddd") }}</h6>
                  <div class="text-center">
                    <h6 class="subtitle-1">{{ weather.daily[0].temp.max }} - <span
                      class="text-muted">{{ weather.daily[0].temp.min }}</span></h6>
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
                  <h6 class="subtitle-1 fw-500">{{ new Date() | moment("add", "2 days", "dddd") }}</h6>
                  <div class="text-center">
                    <h6 class="subtitle-1">{{ weather.daily[1].temp.max }} - <span
                      class="text-muted">{{ weather.daily[1].temp.min }}</span></h6>
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
                  <h6 class="subtitle-1 fw-500">{{ new Date() | moment("add", "3 days", "dddd") }}</h6>
                  <div class="text-center">
                    <h6 class="subtitle-1">{{ weather.daily[2].temp.max }} - <span
                      class="text-muted">{{ weather.daily[2].temp.min }}</span></h6>
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
                  <h6 class="subtitle-1 fw-500">{{ new Date() | moment("add", "4 days", "dddd") }}</h6>
                  <div class="text-center">
                    <h6 class="subtitle-1">{{ weather.daily[3].temp.max }} - <span
                      class="text-muted">{{ weather.daily[3].temp.min }}</span></h6>
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
                  <h6 class="subtitle-1 fw-500">{{ new Date() | moment("add", "5 days", "dddd") }}</h6>
                  <div class="text-center">
                    <h6 class="subtitle-1">{{ weather.daily[4].temp.max }} - <span
                      class="text-muted">{{ weather.daily[4].temp.min }}</span></h6>
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
                  <h6 class="subtitle-1 fw-500">{{ new Date() | moment("add", "6 days", "dddd") }}</h6>
                  <div class="text-center">
                    <h6 class="subtitle-1">{{ weather.daily[5].temp.max }} - <span
                      class="text-muted">{{ weather.daily[5].temp.min }}</span></h6>
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
                  <h6 class="subtitle-1 fw-500">{{ new Date() | moment("add", "7 days", "dddd") }}</h6>
                  <div class="text-center">
                    <h6 class="subtitle-1">{{ weather.daily[6].temp.max }} - <span
                      class="text-muted">{{ weather.daily[6].temp.min }}</span></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        <h6>No weather data available</h6>
      </div>

    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/includes/Footer";
import IconWeather from "@/components/weather/IconWeather";
import IconCurrentWeather from "@/components/weather/IconCurrentWeather";
import ListUVI from "@/components/weather/ListUVI";

export default {
  name: 'Home',
  components: {
    ListUVI,
    IconCurrentWeather,
    IconWeather,
    Footer
  },
  data() {
    return {
      api_key: process.env.VUE_APP_API_KEY,
      url_base: process.env.VUE_APP_API_URL_BASE,
      url_settings: process.env.VUE_APP_API_URL_SETTINGS,
      query: 'lat=25.6667&lon=-100.3167',
      weather: {}
    }
  },
  mounted() {
    this.getWeather()
  },
  methods: {
    getWeather() {
      fetch(`${this.url_base}?${this.query}&${this.url_settings}&appid=${this.api_key}`)
        .then(res => {
          return res.json()
        }).then(this.setResults)
    },
    setResults(results) {
      this.weather = results
    }
  }
}
</script>
