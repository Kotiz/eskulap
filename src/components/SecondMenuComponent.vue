<template>
    <div>
        <ul class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab"
            role="tablist">
            <li class="nav-item" role="presentation">
                <a href="#tabs-home" class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    " id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home"
                   aria-selected="true">Home</a>
            </li>
            <li class="nav-item" role="presentation">
                <a href="#tabs-profile" class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab"
                   aria-controls="tabs-profile" aria-selected="false">Profile</a>
            </li>
            <li class="nav-item" role="presentation">
                <a href="#tabs-messages" class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-messages-tab" data-bs-toggle="pill" data-bs-target="#tabs-messages" role="tab"
                   aria-controls="tabs-messages" aria-selected="false">Messages</a>
            </li>
            <li class="nav-item" role="presentation">
                <a href="#tabs-contact" class="
      nav-link
      disabled
      pointer-events-none
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-contact-tab" data-bs-toggle="pill" data-bs-target="#tabs-contact" role="tab"
                   aria-controls="tabs-contact" aria-selected="false">Contact</a>
            </li>
        </ul>
        <div class="tab-content" id="tabs-tabContent">
            <div class="tab-pane fade show active" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
                <gabinet1-component></gabinet1-component>
            </div>
            <div class="tab-pane fade" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
                <gabinet2-component></gabinet2-component>
            </div>
            <div class="tab-pane fade" id="tabs-messages" role="tabpanel" aria-labelledby="tabs-profile-tab">
                Tab 3 content
            </div>
            <div class="tab-pane fade" id="tabs-contact" role="tabpanel" aria-labelledby="tabs-contact-tab">
                Tab 4 content
            </div>
        </div>


        <div class="flex justify-center">
            <div>
                <div class="dropdown relative">
                    <button
                        class="
          dropdown-toggle
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg active:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Dropdown button
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="caret-down"
                            class="w-2 ml-2"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                        >
                            <path
                                fill="currentColor"
                                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                            ></path>
                        </svg>
                    </button>
                    <ul
                        class="
          dropdown-menu
          min-w-max
          absolute
          hidden
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        "
                        aria-labelledby="dropdownMenuButton1"
                    >
                        <li>
                            <a
                                class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                                href="#"
                            >Action</a
                            >
                        </li>
                        <li>
                            <a
                                class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                                href="#"
                            >Another action</a
                            >
                        </li>
                        <li>
                            <a
                                class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                                href="#"
                            >Something else here</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
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
                    @click="displayData('GABINET_2')"
                >
                    Gabinet 2
                </button>
                <button
                    class="inline-flex px-4 mx-2 duration-300 transition-colors hover:bg-indigo-500/70 hover:text-white text-gray-500 focus:outline-none py-0.5 cursor-pointer rounded-2xl"
                    @click="displayData('GABINET_3')"
                >
                    Gabinet 3
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
                <gabinet-1-component v-else-if="displayedType === 'GABINET_1'"></gabinet-1-component>
                <gabinet-2-component  v-else-if="displayedType === 'GABINET_2'"></gabinet-2-component>
                <gabinet-3-component  v-else-if="displayedType === 'GABINET_3'"></gabinet-3-component>
            </div>
        </div>
    </div>
</template>
<script>
import AppLink from "../components/Applink.vue";
import {RouterLink} from "vue-router";
import Gabinet1Component from "./cabinets/cabinet1.vue";
import Gabinet2Component from "./cabinets/cabinet2.vue";
import Gabinet3Component from "./cabinets/cabinet3.vue";

export default {
    components: {Gabinet3Component, Gabinet2Component, Gabinet1Component},
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
