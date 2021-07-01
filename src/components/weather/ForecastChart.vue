<template>
  <div class="collapse show" id="collapseChart">
    <trend
      :data="[weather.hourly[0].temp, weather.hourly[1].temp, weather.hourly[2].temp, weather.hourly[3].temp, weather.hourly[4].temp, weather.hourly[5].temp, weather.hourly[6].temp]"
      gradientDirection="left"
      :gradient="['#e6a519', '#e05b19']"
      :padding="10"
      :radius="1"
      :stroke-width="2"
      stroke-linecap="round"
      auto-draw
      smooth
    >
    </trend>
  </div>
</template>

<script>
export default {
  props: [
    'weather'
  ]
}
</script>
