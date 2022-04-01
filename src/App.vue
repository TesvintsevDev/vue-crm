<template>
  <component :is="Layout + '-layout'" v-if="Layout"/>
</template>

<script>
import { computed } from 'vue'
import {useRoute} from 'vue-router'
import AuthLayout from './layout/AuthLayout.vue'
import MainLayout from './layout/MainLayout.vue'


export default {
  setup() {
    const route = useRoute()

    return {
      Layout: computed( () => route.meta.Layout)
    }

  },
  components: {MainLayout, AuthLayout}
}
</script>
