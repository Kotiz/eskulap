<script setup>
import NavMenuVue from './components/NavMenu.vue';
import AboutComponent from './components/AboutComponent.vue'
import AboutMoreComponent from './components/AboutMoreComponent.vue'
// import SquareComponents from './components/SquareComponents.vue'
import SecondMenuComponent from './components/SecondMenuComponent.vue'
// import NewsComponent from './components/NewsComponent.vue'
import FooterComponent from './components/FooterComponent.vue';
import ApplinkVue from './components/Applink.vue';


</script>
<template>
  <NavMenuVue />
    <main>
      <ApplinkVue :to="'../views/Gabinet1'">Click Me</ApplinkVue>
      <AboutComponent />
      <AboutMoreComponent />
      <!-- <SquareComponents /> -->
      <SecondMenuComponent />
      <!-- <NewsComponent />   -->
    </main>
    <FooterComponent />
</template>
