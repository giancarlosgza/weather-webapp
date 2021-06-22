<template>
  <div class="mt-5">
    <svg class="spinner mb-4" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
      <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
    </svg>
    <h5 class="fw-bold">{{ title }}</h5>
    <h6 class="subtitle-1 text-muted mb-3">{{ subtitle }}</h6>
  </div>
</template>

<script>
export default {
  name: 'LoadingState',
  props: [
    'title',
    'subtitle',
  ]
}
</script>
