<template>
  <div>
    <nav class="bottom-nav bg-frosted">
      <router-link to="/" class="bottom-nav-item">
        <i class="material-icons mb-1">home</i>
        <h6>Home</h6>
      </router-link>

      <router-link to="/settings" class="bottom-nav-item">
        <i class="material-icons mb-1">settings</i>
        <h6>Settings</h6>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'BottomNavigation',
}
</script>
