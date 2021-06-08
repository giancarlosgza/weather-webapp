<template>
  <div id="app">
    <div class="router-view">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
@import '~bootstrap/dist/css/bootstrap.min.css';
@import "./assets/sass/main.scss";
</style>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'App',
  metaInfo: {
    title: 'Weatherffy ',
    titleTemplate: '%s | Weatherffy',
  },
  mounted() {
    // check for active theme
    const htmlElement = document.documentElement;
    const theme = localStorage.getItem("theme");
    if (theme === 'dark') {
      htmlElement.setAttribute('theme', 'dark')
      this.$store.commit("SET_DARK_MODE", true)
    } else {
      htmlElement.setAttribute('theme', 'light');
      this.$store.commit("SET_DARK_MODE", false)
    }
  },
  computed: {
    ...mapGetters(["darkMode"]),
  },
  watch: {
    darkMode: function () {
      // add/remove class to/from html tag
      const htmlElement = document.documentElement;
      if (this.darkMode) {
        localStorage.setItem("theme", 'dark');
        htmlElement.setAttribute('theme', 'dark');
      } else {
        localStorage.setItem("theme", 'light');
        htmlElement.setAttribute('theme', 'light');
      }
    }
  }
}
</script>
