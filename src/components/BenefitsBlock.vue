<template>
  <section class="py-6 md:py-10 lg:py-16 xl:pb-0 flex flex-col md:flex-row items-center max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-max mx-auto">
    <div class="sm:w-full md:w-full -mx-5 sm:-mr-14 xl:ml-0 md:-mr-14 md:-ml-10 lg:ml-0 lg:-mr-28">
      <img src="/img/home/earth.webp" class="w-full" alt="earth" />
    </div>
    <div class="w-full sm:ml-auto md:w-full lg:w-4/5 -mt-6 sm:mt-0 md:my-14">
      <h2 class="font-permanent text-2xl sm:text-4xl bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-transparent bg-clip-text inline-block">
        {{ $t('benefits_title') }}
      </h2>
      <ul class="text-white flex flex-col gap-6 md:gap-12 mt-4 sm:mt-6 md:pl-6 md:text-lg lg:text-xl">
        <li>
          <h3 class="text-[#FF67F0] text-lg sm:text-xl lg:text-3xl">
            {{ $t('seasoned_expertise_title') }}
          </h3>
          <p class="tk-oscine leading-normal">
            {{ $t('seasoned_expertise_description') }}
          </p>
        </li>
        <li>
          <h3 class="text-[#FF67F0] text-lg sm:text-xl lg:text-3xl">
            {{ $t('quick_start_title') }}
          </h3>
          <p class="tk-oscine leading-normal">
            {{ $t('quick_start_description') }}
          </p>
        </li>
        <li>
          <h3 class="text-[#FF67F0] text-lg sm:text-xl lg:text-3xl">
            {{ $t('unrivaled_fees_title') }}
          </h3>
          <p class="tk-oscine leading-normal">
            {{ $t('unrivaled_fees_description') }}
          </p>
        </li>
        <li>
          <h3 class="text-[#FF67F0] text-lg sm:text-xl lg:text-3xl">
            {{ $t('support_24_7_title') }}
          </h3>
          <p class="tk-oscine leading-normal">
            {{ $t('support_24_7_description') }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'Benefits'
};
</script>
