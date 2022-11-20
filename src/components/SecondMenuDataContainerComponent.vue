<template>
  <div>
    <div class="container px-6 py-8 mx-auto lg:py-16">
      <h3 class="text-xl font-medium text-gray-800 md:text-2xl lg:text-3xl">
        Second menu Component
      </h3>
      <div
        class="flex items-center py-6 mt-4 -mx-2 overflow-x-auto whitespace-nowrap"
      >
        <button
          class="inline-flex px-4 mx-2 focus:outline-none items-center py-0.5 text-white bg-indigo-500 hover:bg-indigo-400 duration-300 transition-colors rounded-2xl"
        >
          All
        </button>
<!--        <AppLink-->
<!--          class="inline-flex px-4 mx-2 focus:outline-none items-center py-0.5 text-white bg-indigo-500 hover:bg-indigo-400 duration-300 transition-colors rounded-2xl"-->
<!--          :to="'../views/Gabinet1'"-->
<!--          >Gabinet 1</AppLink-->
<!--        >-->
        <button
          class="inline-flex px-4 mx-2 duration-300 transition-colors hover:bg-indigo-500/70 hover:text-white text-gray-500 focus:outline-none py-0.5 cursor-pointer rounded-2xl"
          @click="displayData('GABINET_1')"
        >
          Gabinet 1
        </button>
        <button
          class="inline-flex px-4 mx-2 duration-300 transition-colors hover:bg-indigo-500/70 hover:text-white text-gray-500 focus:outline-none py-0.5 cursor-pointer rounded-2xl"
          @click="displayData('WEB_DESIGN')"
        >
          Web Design
        </button>
        <button
            @click="displayData('DEVELOPMENT')"

            class="inline-flex px-4 mx-2 duration-300 transition-colors hover:bg-indigo-500/70 hover:text-white text-gray-500 focus:outline-none py-0.5 cursor-pointer rounded-2xl"
        >
          Development
        </button>
        <button
            @click="displayData('RESEARCH')"
          class="inline-flex px-4 mx-2 duration-300 transition-colors hover:bg-indigo-500/70 hover:text-white text-gray-500 focus:outline-none py-0.5 cursor-pointer rounded-2xl"
        >
          Research
        </button>
      </div>

      <div class="grid grid-cols-1 gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3">
        <p v-if="!displayedType">Select to load data</p>
        <gabinet1 v-else-if="displayedType === 'GABINET_1'"></gabinet1>
      </div>
    </div>
  </div>
</template>
<script>
import AppLink from "../components/Applink.vue";
import {RouterLink} from "vue-router";
import Gabinet1 from "./cabinets/cabinet1";

export default {
    components: {Gabinet1},
    data() {
        return {
            displayedType: null
        }
    },
    methods: {
        displayData(type) {
            this.displayedType = type;
        }
    },
    computed: {
        isExternal() {
            return typeof this.to === "string" && this.to.startsWith("http");
        },
    },
};
</script>
