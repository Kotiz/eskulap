import { createRouter, createWebHistory } from 'vue-router';
import Gabinet1 from '../components/cabinets/cabinet1.vue';
// import NavMenuVue from './components/NavMenu.vue';
// import AboutMoreComponent from './components/AboutMoreComponent.vue'
// import SquareComponents from './components/SquareComponents.vue'
// import SecondMenuComponent from './components/SecondMenuComponent.vue'
// import NewsComponent from './components/NewsComponent.vue'
// import FooterComponent from './components/FooterComponent.vue';

const routes = [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    {
      path: '/gabinet1',
      name: 'Gabinet1',
      component: Gabinet1
    }
    // {
    //   path: '/mixin',
    //   name: 'FooterComponent',
    //   component: FooterComponent
    // },
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'Mixin',
    //   component: Mixin
    // },
    // {
    //   path: '/color/:red/:green/:blue',
    //   name: 'Color',
    //   component: ColorPage
    // },
    // {
    //   path: '/myColors',
    //   name: 'MyColors',
    //   component: MyColorsPageVue
    // }
  ]
  const router = createRouter({
    history: createWebHistory(),
    routes
  })

  export default router
