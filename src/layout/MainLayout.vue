<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
      <router-view/>
  </div>
</template>

<script>
import TheNavbar from '../components/TheNavbar.vue'

export default {
    components: {TheNavbar}
}
</script>

<style>

</style>