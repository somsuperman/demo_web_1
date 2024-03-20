<template>
  <header>
    <nav class="max-w-[1260px] flex flex-wrap items-center justify-between mx-auto py-5 sm:py-8 text-lg tracking-wide">
      <router-link to="/" @click="hideMenu" class="flex items-center space-x-3 rtl:space-x-reverse" aria-label="homepage">
        <LogoBlock :logoClass="'w-28 sm:w-44 hover:text-[#ff67f0] hover:scale-105 transition-all'" />
      </router-link>
      <button @click="toggle" type="button" class="items-right p-2 w-10 h-10 md:hidden mt-2" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Menu</span>
        <svg v-if="!open" class="w-full text-right" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.125 9.5H25.875M1.125 1.25H25.875M9.375 17.75H25.875" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <svg v-if="open" class="w-full" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.875 16.6913H26.125" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      <div id="menu" class="hidden w-full md:block md:w-auto z-10">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-16 lg:space-x-20 rtl:space-x-reverse md:mt-0 md:border-0 items-center gap-6 md:gap-0 text-white">
          <li>
            <router-link to="/about-us" :active-class="'text-[#ff67f0] underline'" class="block py-2 px-3 md:p-0 hover:text-purple-300 transition-colors duration-300 text-pur">
              About us
            </router-link>
          </li>
          <li>
            <router-link to="/services" :active-class="'text-[#ff67f0] underline'" class="block py-2 px-3 md:p-0 hover:text-purple-300 transition-colors duration-300">
              Services
            </router-link>
          </li>
          <li>
            <router-link to="/contact" :active-class="'text-[#ff67f0]'" class="md:p-0 white-grad block transition-all duration-300 hover:bg-white rounded-lg hover:scale-105 hover:bg-opacity-10">
              <span class="py-4 px-12 inline-block">Contact</span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { ref } from 'vue';
import LogoBlock from './LogoBlock.vue';

export default {
  name: 'NavBock',
  components: {
    LogoBlock
  },
  setup() {
    const open = ref(false);

    function hideMenu() {
      document.body.classList.remove("menu-open");
      open.value = false;
    }

    hideMenu();

    return {
      open,
      toggle() {
        open.value = !open.value;
        document.body.classList.toggle("menu-open");
      },
      hideMenu
    };
  },
};
</script>

<style lang="scss">
body {
  @media (max-width: 767px) {
    &.menu-open {
      @apply bg-primary bg-none;

      .hero-bg {
        @apply before:bg-primary before:bg-none;
      }

      #menu {
        @apply bg-primary inset-x-0 fixed bottom-0 top-20 sm:top-28 block;

        a {
          @apply transition-all;
        }
      }
    }
  }
}
</style>
