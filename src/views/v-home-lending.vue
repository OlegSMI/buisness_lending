<template>
  <div class="home">
    <div class="content">
      <div class="first__content">
        <Logo/>
      </div>
      <div class="second__content">
        <Callback/>
      </div>
      <div class="third__content">
        <Vebinars/>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/v-content-component.vue'
import Callback from '@/components/v-callback-component.vue'
import Vebinars from '@/components/v-vebinars-component.vue'

export default {
  name: 'HomeView',
  components: {
    Logo, Callback, Vebinars
  }
}
</script>
  