<template>
  <div class="layout">
    <cHeader />
    <slot />
    <cFooter />
  </div>
</template>

<script>
import cHeader from '~/components/header.vue'
import cFooter from '~/components/footer.vue'
export default {
  components: {
    cHeader,
    cFooter
  }
}
</script>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
</style>
