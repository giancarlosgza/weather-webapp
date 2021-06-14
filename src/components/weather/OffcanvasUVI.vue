<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasUVI" aria-labelledby="offcanvasUVILabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title fw-500" id="offcanvasUVILabel">Ultraviolet index</h5>
            <button type="button" class="btn-close img-logo" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <div class="row justify-content-center">
              <!-- LOW -->
              <div class="col-md-6" v-if="Math.round(weather.current.uvi) <= 2">
                <div class="card shadow-0dp">
                  <div class="card-body">
                    <div class="text-center mb-2">
                      <i class="material-icons-outlined icon-wrap icon-wrap-sm bg-success">umbrella</i>
                    </div>
                    <div class="text-center">
                      <div class="badge bg-success mx-0 mb-3">Low -
                        {{ Math.round(weather.current.uvi) }}
                      </div>
                    </div>
                    <h6 class="subtitle-1">Wear sunglasses on bright days. If you burn easily, cover up and use broad
                      spectrum SPF 30+
                      sunscreen.
                      Bright surfaces, sand, water, and snow, will increase UV exposure.</h6>
                  </div>
                </div>
              </div>
              <!-- MODERATE -->
              <div class="col-md-6" v-if="Math.round(weather.current.uvi) <= 5 && weather.current.uvi > 2.5">
                <div class="card shadow-0dp">
                  <div class="card-body">
                    <div class="text-center mb-2">
                      <i class="material-icons-outlined icon-wrap icon-wrap-sm bg-warning">umbrella</i>
                    </div>
                    <div class="text-center">
                      <div class="badge bg-warning mx-0 mb-3">Moderate -
                        {{ Math.round(weather.current.uvi) }}
                      </div>
                    </div>
                    <h6 class="subtitle-1">Stay in shade near midday when the Sun is strongest. If outdoors, wear
                      sun-protective clothing, a wide-brimmed hat, and UV-blocking sunglasses. Generously apply broad
                      spectrum SPF 30+ sunscreen every 1.5 hours, even on cloudy days, and after swimming or sweating.
                      Bright surfaces, such as sand, water, and snow, will increase UV exposure.</h6>
                  </div>
                </div>
              </div>
              <!-- HIGH -->
              <div class="col-md-6" v-if="Math.round(weather.current.uvi) <= 7 && weather.current.uvi > 5.5">
                <div class="card shadow-0dp">
                  <div class="card-body">
                    <div class="text-center mb-2">
                      <i class="material-icons-outlined icon-wrap icon-wrap-sm bg-orange">beach_access</i>
                    </div>
                    <div class="text-center">
                      <div class="badge bg-orange mx-0 mb-3">High -
                        {{ Math.round(weather.current.uvi) }}
                      </div>
                    </div>
                    <h6 class="subtitle-1">Reduce time in the sun between 10 a.m. and 4 p.m. If outdoors, seek shade and
                      wear sun-protective clothing, a wide-brimmed hat, and UV-blocking sunglasses. Generously apply
                      broad spectrum SPF 30+ sunscreen every 1.5 hours, even on cloudy days, and after swimming or
                      sweating. Bright surfaces, such as sand, water, and snow, will increase UV exposure.</h6>
                  </div>
                </div>
              </div>
              <!-- VERY HIGH -->
              <div class="col-md-6" v-if="Math.round(weather.current.uvi) <= 10 && weather.current.uvi > 7.5">
                <div class="card shadow-0dp">
                  <div class="card-body">
                    <div class="text-center mb-2">
                      <i class="material-icons-outlined icon-wrap icon-wrap-sm bg-danger">beach_access</i>
                    </div>
                    <div class="text-center">
                      <div class="badge bg-danger mx-0 mb-3">Very High -
                        {{ Math.round(weather.current.uvi) }}
                      </div>
                    </div>
                    <h6 class="subtitle-1">Minimize sun exposure between 10 a.m. and 4 p.m. If outdoors, seek shade and
                      wear sun-protective clothing, a wide-brimmed hat, and UV-blocking sunglasses. Generously apply
                      broad spectrum SPF 30+ sunscreen every 1.5 hours, even on cloudy days, and after swimming or
                      sweating. Bright surfaces, such as sand, water, and snow, will increase UV exposure.</h6>
                  </div>
                </div>
              </div>
              <!-- EXTREME -->
              <div class="col-md-6" v-if="Math.round(weather.current.uvi) >= 11">
                <div class="card shadow-0dp">
                  <div class="card-body">
                    <div class="text-center mb-2">
                      <i class="material-icons-outlined icon-wrap icon-wrap-sm bg-purple">beach_access</i>
                    </div>
                    <div class="text-center">
                      <div class="badge bg-purple mx-0 mb-3">Extreme -
                        {{ Math.round(weather.current.uvi) }}
                      </div>
                    </div>
                    <h6 class="subtitle-1">Try to avoid sun exposure between 10 a.m. and 4 p.m. If outdoors, seek shade
                      and wear sun-protective clothing, a wide-brimmed hat, and UV-blocking sunglasses. Generously apply
                      broad spectrum SPF 30+ sunscreen every 1.5 hours, even on cloudy days, and after swimming or
                      sweating. Bright surfaces, such as sand, water, and snow, will increase UV exposure.</h6>
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
export default {
  name: 'OffcanvasUVI',
  props: [
    'weather'
  ]
}
</script>
