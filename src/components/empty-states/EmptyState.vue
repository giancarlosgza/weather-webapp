<template>
  <div>
    <img src="@/assets/img/empty-states/empty.svg" class="img-fluid mb-4" width="200px" alt="Empty State Image">
    <h5 class="fw-bold">{{ title }}</h5>
    <h6 class="subtitle-1 text-muted mb-3">{{ subtitle }}</h6>
    <router-link :to="btnLink" class="btn btn-primary btn-round ripple ripple-dark px-5">{{ btnText }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'EmptyState',
  props: [
    'title',
    'subtitle',
    'btnLink',
    'btnText',
  ]
}
</script>