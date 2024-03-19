<template>
  <footer class="-mx-5 sm:-mx-10 bg-[#2C2F48] text-white py-10 sm:py-12 lg:py-18 xl:py-24">
    <div class="px-5 sm:px-0 lg:px-10 mx-auto max-w-[30.5rem] sm:max-w-lg md:max-w-2xl lg:max-w-[1350px]">
      <LogoBlock :logoClass="'mx-auto w-40 lg:hidden'" />
      <div class="flex flex-col sm:flex-row flex-wrap w-full mt-8 space-y-7 sm:space-y-0 lg:gap-20">
        <div class="sm:w-1/2 lg:w-1/5 lg:order-2">
          <h2 class="mb-3 sm:mb-5 text-lg sm:text-xl font-semibold text-[#0CD8F0]">
            Unicorn Technologies
          </h2>
          <ul class="text-white gap-3 grid tk-oscine sm:text-lg">
            <li>
              <router-link to="/" class="underline hover:no-underline">
                Home
              </router-link>
            </li>
            <li>
              <router-link to="/about-us" class="underline hover:no-underline">
                About
              </router-link>
            </li>
            <li>
              <router-link to="/services" class="underline hover:no-underline">
                Services
              </router-link>
            </li>
          </ul>
        </div>
        <div class="sm:w-1/2 lg:w-1/5 lg:order-3">
          <h2 class="mb-3 sm:mb-5 text-lg sm:text-xl font-semibold text-[#0CD8F0]">
            Contact
          </h2>
          <p class="text-sm sm:text-base text-[#B9B9B9] mb-2 tk-oscine">Email</p>
          <a class="tk-oscine text-lg md:text-xl" href="mailto:info@unicorntechnologies.com">
            info@unicorntechnologies.com
          </a>
        </div>
        <div class="lg:w-2/5 lg:order-1 tk-oscine">
          <LogoBlock class="hidden lg:block" />
          <ul class="mt-1 sm:mt-8">
            <li>
              Unicorn Technologies Ltd. is regulated by the Mwali International
            </li>
            <li>
              Services Authority
            </li>
            <li>
              License No.: BFX2024008
            </li>
            <li>
              Reg. No: HA00124732
            </li>
            <li>
              Address: Bonovo Road – Fomboni, Island of Mohéli – Comoros Union
            </li>
          </ul>
        </div>
      </div>
      <div class="lg:text-right text-[#B9B9B9] mt-4 sm:mt-5 tk-oscine">
        Copyright © 2024 - Unicorn Technologies Limited. All rights reserved
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import LogoBlock from './LogoBlock.vue';
export default {
  name: 'FooterBock',
  components: {
    LogoBlock
  }
};
</script>
