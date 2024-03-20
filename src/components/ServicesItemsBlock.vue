<template>
  <section class="text-white mt-28 mx-auto lg:py-30 lg:mt-44 xl:mt-64 2xl:mt-80 sm:py-10">
    <div class="py-10 2xl:py-14 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-7xl mx-auto flex flex-col lg:flex-row items-center 2xl:mt-10">
      <div class="w-full md:w-full mx-auto lg:order-2 md:max-w-lg lg:max-w-max 2xl:-mr-60 2xl:w-[120%]">
        <img src="/img/services/services-1.webp" class="w-full" alt="Buying and Selling Cryptocurrency" />
      </div>
      <div class="w-full sm:ml-auto md:w-full lg:w-full">
        <div class="text-white max-w-md xl:max-w-xl">
          <h3 class="text-[#0CD8F0] text-lg sm:text-xl md:text-3xl leading-tight">
            {{ $t('services.buyingSellingCrypto.title') }}
          </h3>
          <p class="relative mt-2 tk-oscine md:leading-relaxed md:text-xl">
            {{ $t('services.buyingSellingCrypto.description') }}
          </p>
        </div>
      </div>
    </div>
    <div class="py-10 2xl:py-14 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
      <div class="w-full md:w-full mx-auto md:max-w-lg lg:max-w-max 2xl:-ml-60 2xl:w-[120%]">
        <img src="/img/services/services-2.jpg" class="w-full" alt="Cryptocurrency Futures and Exchanges" />
      </div>
      <div class="w-full sm:ml-auto md:w-full lg:w-full">
        <div class="text-white max-w-md xl:max-w-xl ml-auto">
          <h3 class="text-[#0CD8F0] text-lg sm:text-xl md:text-3xl leading-tight">
            {{ $t('services.cryptocurrencyFutures.title') }}
          </h3>
          <p class="relative mt-2 tk-oscine md:leading-relaxed md:text-xl">
            {{ $t('services.cryptocurrencyFutures.description') }}
          </p>
        </div>
      </div>
    </div>
    <div class="py-10 2xl:py-14 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
      <div class="w-full md:w-full mx-auto lg:order-2 md:max-w-lg lg:max-w-max 2xl:-mr-52 2xl:w-[120%]">
        <img src="/img/services/services-3.jpg" class="w-full" alt="Crypto Storage Solutions" />
      </div>
      <div class="w-full sm:ml-auto md:w-full lg:w-full">
        <div class="text-white max-w-md xl:max-w-xl">
          <h3 class="text-[#0CD8F0] text-lg sm:text-xl md:text-3xl leading-tight">
            {{ $t('services.cryptoStorage.title') }}
          </h3>
          <p class="relative mt-2 tk-oscine md:leading-relaxed md:text-xl">
            {{ $t('services.cryptoStorage.description') }}
          </p>
        </div>
      </div>
    </div>
    <div class="py-10 2xl:py-14 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
      <div class="w-full md:w-full mx-auto md:max-w-lg lg:max-w-max 2xl:-ml-60 2xl:w-[120%]">
        <img src="/img/services/services-4.jpg" class="w-full" alt="Crypto Financing Solutions" />
      </div>
      <div class="w-full sm:ml-auto md:w-full lg:w-full">
        <div class="text-white max-w-md xl:max-w-xl ml-auto">
          <h3 class="text-[#0CD8F0] text-lg sm:text-xl md:text-3xl leading-tight">
            {{ $t('services.cryptoFinancing.title') }}
          </h3>
          <p class="relative mt-2 tk-oscine md:leading-relaxed md:text-xl">
            {{ $t('services.cryptoFinancing.description') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'ServicesItemsBlock'
};
</script>
