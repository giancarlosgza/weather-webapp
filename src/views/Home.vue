<template>
  <div class="home" v-if="weather.current" :class="[ isColdWeather ? 'bg-cold' : 'bg-hot']">

    <div class="container weather-main">
      <!-- SEARCH BAR WEATHER -->
      <div class="card card-search-bar bg-frosted border-radius-25">
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

      <!-- CURRENT WEATHER -->
      <div class="row justify-content-center" v-if="weather">
        <div class="col-md-12 col-lg-8 mb-3">
          <div class="card bg-frosted">
            <div class="card-body text-center">
              <div class="mb-4">
                <IconCurrentWeather :weather="weather" number="0"></IconCurrentWeather>
                <h2 class="fw-500">{{ Math.round(weather.current.temp) }}°C</h2>
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
                    <h6 class="subtitle-1 fw-500">{{ Math.round(weather.current.feels_like) }}°C</h6>
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
        <!-- CURRENT WEATHER SUNRISE AND SUNSET -->
        <div class="col-md-12 col-lg-8 mb-3">
          <h6 class="subtitle-1 text-dark mb-3">Today</h6>
          <div class="card bg-frosted">
            <div class="card-body pb-2">
              <div class="d-flex justify-content-around">

                <div class="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36">
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <path
                      d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
                      fill="rgba(255,173,0,1)"/>
                  </svg>
                  <h6 class="subtitle-2 text-muted mt-2">Sunrise</h6>
                  <h6 class="subtitle-2">{{ weather.current.sunrise | moment("h:mm") }} am</h6>
                </div>

                <div class="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36">
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <path
                      d="M6.083 13a6 6 0 1 1 11.834 0h-2.043a4 4 0 1 0-7.748 0H6.083zM2 15h10v2H2v-2zm12 0h8v2h-8v-2zm2 4h4v2h-4v-2zM4 19h10v2H4v-2zm7-18h2v3h-2V1zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM19.07 3.515l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
                      fill="rgba(234,119,11,1)"/>
                  </svg>
                  <h6 class="subtitle-2 text-muted mt-2">Sunset</h6>
                  <h6 class="subtitle-2 mt-2">{{ weather.current.sunset | moment("h:mm") }} pm</h6>
                </div>

              </div>
            </div>
          </div>
        </div>
        <!-- CURRENT WEATHER DETAILS -->
        <div class="col-md-12 col-lg-8 mb-3">
          <div class="card bg-frosted">
            <div class="card-body text-center pb-2">
              <div>
                <div class="row">
                  <div class="col-4 col-md-4">
                    <i class="material-icons-outlined text-muted mdc-18 mb-1">compress</i>
                    <h6 class="subtitle-2 text-muted">
                      Pressure
                    </h6>
                    <h6 class="subtitle-2 fw-500 p-1">{{ weather.current.pressure }} mBar</h6>
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

      <!-- OFFCANVAS UVI DETAILS WEATHER -->
      <OffcanvasUVI :weather="weather"></OffcanvasUVI>

      <!-- FORECAST 7 DAYS -->
      <div class="row" v-if="weather">
        <div class="col-md-12 col-lg-8">
          <h6 class="subtitle-1 text-dark">This week</h6>
        </div>
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
                  <h6 class="subtitle-1 fw-500">{{ new Date() | moment("add", "2 days", "dddd") }}</h6>
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
                  <h6 class="subtitle-1 fw-500">{{ new Date() | moment("add", "3 days", "dddd") }}</h6>
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
                  <h6 class="subtitle-1 fw-500">{{ new Date() | moment("add", "4 days", "dddd") }}</h6>
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
                  <h6 class="subtitle-1 fw-500">{{ new Date() | moment("add", "5 days", "dddd") }}</h6>
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
                  <h6 class="subtitle-1 fw-500">{{ new Date() | moment("add", "6 days", "dddd") }}</h6>
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
                  <h6 class="subtitle-1 fw-500">{{ new Date() | moment("add", "7 days", "dddd") }}</h6>
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
    <Footer footer-display="d-none d-md-block"></Footer>
  </div>
  <div v-else class="text-center mt-3">
    <LoadingState title="Loading..."></LoadingState>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/includes/Footer";
import IconWeather from "@/components/weather/IconWeather";
import IconCurrentWeather from "@/components/weather/IconCurrentWeather";
import ListUVI from "@/components/weather/ListUVI";
import OffcanvasUVI from "@/components/weather/OffcanvasUVI";
import LoadingState from "@/components/empty-states/LoadingState";

export default {
  name: 'Home',
  metaInfo: {
    title: 'Home'
  },
  components: {
    LoadingState,
    OffcanvasUVI,
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
      weather: {},
      isColdWeather: false
    }
  },
  mounted() {
    this.getWeather()

  },
  methods: {
    async getWeather() {
      try {
        await fetch(`${this.url_base}?${this.query}&${this.url_settings}&appid=${this.api_key}`)
          .then(async res => {
            return await res.json()
          }).then(this.setResults)
      } catch (error) {
        console.log(error)
      }
    },

    setResults(results) {
      this.weather = results

      const temperature = this.weather.current.temp
      if (temperature < 25) {
        this.isColdWeather = true
      }
      console.log(temperature)
    }

  }
}
</script>
