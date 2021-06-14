<template>
  <div>
    <div class="container my-3">
      <div class="row mb-4">
        <div class="col-md-12">
          <div class="d-flex">
            <router-link to="/" class="btn btn-link mx-0">
              <i class="material-icons-outlined">arrow_back_ios</i>
              Weather
            </router-link>
            <div class="align-self-center">
              <h5 class="fw-bold ms-5 mb-0">Settings</h5>
            </div>

          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body pb-0">
              <h6 class="">
                <i class="material-icons-outlined text-primary">opacity</i>
                Preferences</h6>
              <div class="table-responsive">
                <table class="table table-borderless">
                  <tbody>
                  <tr>
                    <td class="align-middle">Dark mode</td>
                    <td class="float-end">
                      <div>
                        <input type="checkbox" class="btn-check" id="btn-check" autocomplete="off" v-model="darkMode">
                        <label class="btn btn-default-outline btn-micint-rotate ripple ripple-primary m-0"
                               for="btn-check">
                          <i class="material-icons-outlined me-2" :class="[ darkMode ? 'text-warning' : 'text-muted']">
                            {{ darkMode ? 'brightness_5' : 'dark_mode' }}</i>
                          {{ darkMode ? 'Light mode' : 'Dark mode' }}
                        </label>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer footer-display="d-none"></Footer>
  </div>
</template>

<script>
import Footer from "@/components/includes/Footer";
export default {
  components: {Footer},
  computed: {
    darkMode: {
      get() {
        return this.$store.getters.darkMode
      },
      set(newValue) {
        this.$store.commit("SET_DARK_MODE", newValue)
      }
    }
  },
}
</script>
