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
        <div class="menu__img" @click="clickViewMenu">
          <fa :icon="['fas', 'bars']" class="menu__icon"/>
        </div>
      </div>
        <button>
          <fa :icon="['fas', 'circle-user']"/>
          <p>Личный кабинет</p>
        </button>
    </div>
    <div class="menu__items" v-if="viewMenu">
      cum
      <router-link
      class="link"
      v-for="(navName, idx) in navLinks"
      :key="idx"
      :to="navName.path"
      >{{ navName.name }}</router-link>
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
      viemMenu: false,
      open: false,
    };
  },
  methods: { 
    clickViewMenu() {
      this.viemMenu = true;
      console.log(this.viemMenu);
    }
  }
});
</script>
  
