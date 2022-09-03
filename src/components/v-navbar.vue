<template>
  <div>
    <div class="nav">
      <div>
        <router-link
          class="link"
          v-for="(navName, idx) in navLinks"
          :key="idx"
          :to="navName.path"
          >{{ navName.name }}</router-link
        >
      </div>
        <button>
          <fa :icon="['fas', 'circle-user']"/>
          <p>Личный кабинет</p>
        </button>
    </div>
  </div>
</template>
  
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "MyNavbar",
  props: {
    navLinks: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      open: false,
    };
  },
});
</script>
  
