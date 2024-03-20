<template>
  <footer class="-mx-5 sm:-mx-10 bg-[#2C2F48] text-white pb-10 sm:pb-12 lg:py-12 xl:py-20">
    <div class="px-5 sm:px-0 lg:px-10 mx-auto max-w-[30.5rem] sm:max-w-lg md:max-w-2xl lg:max-w-[1350px]">
      <LogoBlock :logoClass="'mx-auto w-40 lg:hidden relative -top-3'" />
      <div class="flex flex-col sm:flex-row flex-wrap w-full mt-8 space-y-7 sm:space-y-0 lg:gap-14 xl:gap-20">
        <div class="sm:w-1/2 lg:w-1/5 lg:order-2">
          <h2 class="mb-3 sm:mb-5 text-lg sm:text-xl font-semibold text-[#0CD8F0]">
            {{ $t('footer.navigationTitle') }}
          </h2>
          <ul class="text-white gap-3 grid tk-oscine sm:text-lg">
            <li>
              <router-link to="/" class="underline hover:no-underline">
                {{ $t('footer.home') }}
              </router-link>
            </li>
            <li>
              <router-link to="/about-us" class="underline hover:no-underline">
                {{ $t('footer.about') }}
              </router-link>
            </li>
            <li>
              <router-link to="/services" class="underline hover:no-underline">
                {{ $t('footer.services') }}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="sm:w-1/2 lg:w-1/5 lg:order-3">
          <h2 class="mb-3 sm:mb-5 text-lg sm:text-xl font-semibold text-[#0CD8F0]">
            {{ $t('footer.contactTitle') }}
          </h2>
          <p class="text-sm sm:text-base text-[#B9B9B9] mb-2 tk-oscine">Email</p>
          <a class="tk-oscine text-lg md:text-xl" :href="'mailto:' + $t('footer.emailAddress')">
            {{ $t('footer.emailAddress') }}
          </a>
        </div>
        <div class="lg:w-2/5 lg:order-1 tk-oscine">
          <LogoBlock class="hidden lg:block" />
          <ul class="mt-1 sm:mt-8">
            <li>
              {{ $t('footer.regulatedBy') }}
            </li>
            <li>
              {{ $t('footer.servicesAuthority') }}
            </li>
            <li>
              {{ $t('footer.licenseNumber') }}
            </li>
            <li>
              {{ $t('footer.registrationNumber') }}
            </li>
            <li>
              {{ $t('footer.address') }}
            </li>
          </ul>
        </div>
      </div>
      <div class="lg:text-right text-[#B9B9B9] mt-4 sm:mt-5 tk-oscine">
        {{ $t('footer.copyright') }}
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
