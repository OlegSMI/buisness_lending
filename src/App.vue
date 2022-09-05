<template>
  <div class="wrapper">
    <Navbar :navLinks="navLinks"/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/v-navbar'
import Footer from './components/v-footer'
export default {
  name: 'App',
  components: { 
    Navbar,
    Footer 
  },
  setup() {
    const navLinks = [
      {
        name: "Главная",
        path: "/",
      },
      {
        name: "О компании",
        path: "/about",
      },
      {
        name: "Каталог услуг",
        path: "/catalog",
      },
    ];
    return { navLinks };
  },
}
</script>


<style lang="scss">
@import './assets/styles/style.scss';
</style>
  