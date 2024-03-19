<template>
  <section
      class="py-6 sm:py-10 md:pb-10 lg:pb-16 xl:pb-32 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-max mx-auto relative">
    <div class="sm:text-center">
      <h2 class="font-permanent text-2xl sm:text-4xl xl:mt-24 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-transparent bg-clip-text inline-block">
        What we do
      </h2>
    </div>
    <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 w-full text-center mt-4 sm:mt-10 md:text-xl">
      <div class="relative overflow-hidden rounded-xl">
        <img class="object-cover w-full h-full" src="/img/what-we-do/do-1.png" alt="Flower and sky"/>
        <div class="absolute bottom-0 left-0 px-6 py-4 bg-white/20 right-0 backdrop-blur">
          <p class="leading-tight text-gray-100">
            Buying and Selling <br/>
            Cryptocurrency
          </p>
        </div>
      </div>
      <div class="relative overflow-hidden rounded-xl">
        <img class="object-cover w-full h-full" src="/img/what-we-do/do-2.png" alt="Flower and sky"/>
        <div class="absolute bottom-0 left-0 px-6 py-4 bg-white/20 right-0 backdrop-blur">
          <p class="leading-tight text-gray-100">
            Futures and <br/>
            Exchanges
          </p>
        </div>
      </div>
      <div class="relative overflow-hidden rounded-xl">
        <img class="object-cover w-full h-full" src="/img/what-we-do/do-3.png" alt="Flower and sky"/>
        <div class="absolute bottom-0 left-0 px-6 py-4 bg-white/20 right-0 backdrop-blur">
          <p class="leading-tight text-gray-100">
            Crypto Storage <br/>
            Solutions
          </p>
        </div>
      </div>
      <div class="relative overflow-hidden rounded-xl">
        <img class="object-cover w-full h-full" src="/img/what-we-do/do-4.png" alt="Flower and sky"/>
        <div class="absolute bottom-0 left-0 px-6 py-4 bg-white/20 right-0 backdrop-blur">
          <p class="leading-tight text-gray-100">
            Crypto Financing <br/>
            Solutions
          </p>
        </div>
      </div>
    </div>
    <div class="absolute w-[365px] h-[365px] right-[0] top-[0] bg-[rgba(255,_103,_240,_0.3)] filter blur-[150px]"></div>
  </section>
</template>
<script lang="ts">
export default {
  name: 'WhatWeDo'
};
</script>
