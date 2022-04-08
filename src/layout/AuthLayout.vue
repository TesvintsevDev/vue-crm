<template>
  <div class="container">
    <app-message/>
    <router-view />
  </div>
</template>

<script>
import AppMessage from '../components/ui/AppMessage.vue'
export default {
  components: {AppMessage}

}

</script>

<style scoped>

</style>
