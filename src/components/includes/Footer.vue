<template>
  <div>
    <!-- BOTTOM NAVIGATION MOBILE -->
    <BottomNavigation></BottomNavigation>

    <!-- FOOTER -->
    <footer :class="footerDisplay">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <router-link to="/settings" class="btn btn-default-outline btn-micint-rotate">
              <i class="material-icons-outlined">settings</i>
              Settings
            </router-link>
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
  props: [
    'footerDisplay'
  ]
}
</script>
