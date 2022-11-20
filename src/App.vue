<script setup>
import NavMenuVue from './components/NavMenu.vue';
import AboutComponent from './components/AboutComponent.vue'
import AboutMoreComponent from './components/AboutMoreComponent.vue'
// import SquareComponents from './components/SquareComponents.vue'
import SecondMenuComponent from './components/SecondMenuComponent.vue'
// import NewsComponent from './components/NewsComponent.vue'
import FooterComponent from './components/FooterComponent.vue';
import ApplinkVue from './components/Applink.vue';
import ContactComponent from "./components/ContactForm.component.vue";

import { ref } from 'vue'

function scroll(target) {
    this.$refs[target].scrollIntoView({ behavior: "smooth" })
}

</script>
<template>
    <NavMenuVue @scroll-to="scroll"/>
    <main>
        <ApplinkVue :to="'../views/Gabinet1'">Click Me</ApplinkVue>
        <AboutComponent ref="about"/>
        <AboutMoreComponent/>
        <contact-component ref="portfolio"></contact-component>
        <!-- <SquareComponents /> -->
        <SecondMenuComponent ref="contact"/>
        <!-- <NewsComponent />   -->
    </main>
    <FooterComponent/>
</template>
