<template>
  <div>
    <!-- BOTTOM NAVIGATION MOBILE -->
    <BottomNavigation></BottomNavigation>

    <!-- FOOTER -->
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <div>
              <input type="checkbox" class="btn-check" id="btn-check" autocomplete="off" v-model="darkMode">
              <label class="btn btn-default-outline btn-micint-rotate ripple ripple-primary m-0"
                     for="btn-check">
                <i class="material-icons-outlined me-2" :class="[ darkMode ? 'text-warning' : 'text-muted']">
                  {{ darkMode ? 'brightness_5' : 'dark_mode' }}</i>
                Turn {{ darkMode ? 'on' : 'off' }} the lights
              </label>
            </div>
          </div>
        </div>
      </div>
    </footer>

  </div>

</template>

<script>
import BottomNavigation from "@/components/includes/BottomNavigation";

export default {
  components: {BottomNavigation},
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
