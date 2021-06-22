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
                   placeholder="New York, Dubai, Madrid, Mexico City"
                   aria-label="New York, Dubai, Madrid, Mexico City"
                   aria-describedby="input-city" v-model="searchBar" @change="getPlace">
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
                <h6 class="subtitle-1 text-muted" v-if="geoLocation">{{ geoLocation[0].name || 'Loading...' }},
                  {{ geoLocation[0].country || 'Loading...' }}</h6>
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
          <h6 class="subtitle-1 fw-500 text-white mb-3">Today</h6>
          <div class="card bg-frosted">
            <div class="card-body pb-2">
              <div class="d-flex justify-content-around">

                <div class="text-center">
                  <img src="@/assets/img/weather-icons/icon-sunrise.png" class="img-fluid" width="48" height="48"
                       alt="Sunrise Icon">
                  <h6 class="subtitle-2 text-muted mt-2">Sunrise</h6>
                  <h6 class="subtitle-2">{{ weather.current.sunrise | moment("h:mm") }} am</h6>
                </div>

                <div class="text-center">
                  <img src="@/assets/img/weather-icons/icon-sunset.png" class="img-fluid" width="48" height="48"
                       alt="Sunset Icon">
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
      <ForecastWeek :weather="weather"></ForecastWeek>

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
import IconCurrentWeather from "@/components/weather/IconCurrentWeather";
import ListUVI from "@/components/weather/ListUVI";
import OffcanvasUVI from "@/components/weather/OffcanvasUVI";
import LoadingState from "@/components/empty-states/LoadingState";
import ForecastWeek from "@/components/weather/ForecastWeek";

export default {
  name: 'Home',
  metaInfo: {
    title: 'Home'
  },
  components: {
    ForecastWeek,
    LoadingState,
    OffcanvasUVI,
    ListUVI,
    IconCurrentWeather,
    Footer
  },
  data() {
    return {
      api_key: process.env.VUE_APP_API_KEY,
      url_base: process.env.VUE_APP_API_URL_BASE,
      url_settings: process.env.VUE_APP_API_URL_SETTINGS,
      // query: 'lat=25.6667&lon=-100.3167',
      searchBar: 'Monterrey',
      weather: {},
      isColdWeather: false,
      url_geo_base: process.env.VUE_APP_API_GEO_URL_BASE,
      geoLocation: {},
    }
  },
  mounted() {
    this.getWeather()
    this.getPlace()
  },
  watch: {
    geoLocation: {
      handler(geoLocation) {
        if (geoLocation) {
          this.getWeather()
        }
      }
    }
  },
  methods: {
    async getWeather() {
      try {
        await fetch(`${this.url_base}?lat=${this.geoLocation[0].lat}&lon=${this.geoLocation[0].lon}&${this.url_settings}&appid=${this.api_key}`)
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
      this.isColdWeather = temperature < 18;
      console.log(temperature)
    },

    async getPlace() {
      try {
        await fetch(`${this.url_geo_base}?q=${this.searchBar}&limit=1&appid=${this.api_key}`)
          .then(async geores => {
            return await geores.json()
          }).then(this.setGeoResults)
      } catch (error) {
        console.log(error)
      }
    },

    setGeoResults(georesults) {
      this.geoLocation = georesults
      console.log(georesults[0].name)
    }

  }
}
</script>
