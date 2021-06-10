<template>
  <div class="home">

    <div class="container mb-5">
      <div class="row justify-content-center my-3">
        <div class="col-md-8">
          <div class="card">
            <div class="card-body">
              <div class="input-group">
                  <span class="input-group-text input-group-text-transparent" id="input-city">
                    <i class="material-icons-outlined">location_on</i>
                  </span>
                <input type="text" class="form-control form-control-border-bottom"
                       placeholder="New York, Dubai, Madrid, CDMX"
                       aria-label="New York, Dubai, Madrid, CDMX"
                       aria-describedby="input-city" v-model="query">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center" v-if="weather">
        <div class="col-md-8 mb-3">
          <div class="card">
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
                    <h6 class="subtitle-1 fw-bold">{{ weather.current.feels_like }} °C</h6>
                  </div>
                  <div class="col-4 col-md-4">
                    <h6 class="subtitle-2 text-muted">
                      <i class="material-icons-outlined mdc-18 me-1">water_drop</i>
                      Humidity
                    </h6>
                    <h6 class="subtitle-1 fw-bold">{{ weather.current.humidity }} %</h6>
                  </div>
                  <div class="col-4 col-md-4">
                    <h6 class="subtitle-2 text-muted">
                      <i class="material-icons-outlined mdc-18 me-1">air</i>
                      Wind
                    </h6>
                    <h6 class="subtitle-1 fw-bold">{{ weather.current.wind_speed }} m/s</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="scrolling-wrapper">
          <div>
            <div class="card">
              <div class="card-body">
                <div class="text-center">
                  <IconWeather :weather="weather" number="0"></IconWeather>
                  <h6 class="subtitle-2 text-muted text-capitalize">{{ weather.daily[0].weather[0].description }}</h6>
                  <h6 class="subtitle-1 fw-500">Tomorrow</h6>
                  <div class="text-center">
                    <h6 class="subtitle-1">{{ weather.daily[0].temp.max }} - <span
                      class="text-muted">{{ weather.daily[0].temp.min }}</span></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="card">
              <div class="card-body">
                <div class="text-center">
                  <IconWeather :weather="weather" number="1"></IconWeather>
                  <h6 class="subtitle-2 text-muted text-capitalize">{{ weather.daily[1].weather[0].description }}</h6>
                  <h6 class="subtitle-1 fw-500">Friday</h6>
                  <div class="text-center">
                    <h6 class="subtitle-1">{{ weather.daily[1].temp.max }} - <span
                      class="text-muted">{{ weather.daily[1].temp.min }}</span></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="card">
              <div class="card-body">
                <div class="text-center">
                  <IconWeather :weather="weather" number="2"></IconWeather>
                  <h6 class="subtitle-2 text-muted text-capitalize">{{ weather.daily[2].weather[0].description }}</h6>
                  <h6 class="subtitle-1 fw-500">Saturday</h6>
                  <div class="text-center">
                    <h6 class="subtitle-1">{{ weather.daily[2].temp.max }} - <span
                      class="text-muted">{{ weather.daily[2].temp.min }}</span></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="card">
              <div class="card-body">
                <div class="text-center">
                  <IconWeather :weather="weather" number="3"></IconWeather>
                  <h6 class="subtitle-2 text-muted text-capitalize">{{ weather.daily[3].weather[0].description }}</h6>
                  <h6 class="subtitle-1 fw-500">Sunday</h6>
                  <div class="text-center">
                    <h6 class="subtitle-1">{{ weather.daily[3].temp.max }} - <span
                      class="text-muted">{{ weather.daily[3].temp.min }}</span></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="card">
              <div class="card-body">
                <div class="text-center">
                  <IconWeather :weather="weather" number="4"></IconWeather>
                  <h6 class="subtitle-2 text-muted text-capitalize">{{ weather.daily[4].weather[0].description }}</h6>
                  <h6 class="subtitle-1 fw-500">Monday</h6>
                  <div class="text-center">
                    <h6 class="subtitle-1">{{ weather.daily[4].temp.max }} - <span
                      class="text-muted">{{ weather.daily[4].temp.min }}</span></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default {
  name: 'Home',
  components: {
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
